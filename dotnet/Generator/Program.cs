using System;
using System.IO;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using FactSet.Stach.Generator.Extensions;
using FactSet.Stach.Generator.Builders;
using FactSet.Stach.Generator.Utility;

namespace FactSet.Stach.Generator {
    internal class Program {
        private static readonly string Cwd = Path.GetDirectoryName(new Uri(Assembly.GetExecutingAssembly().CodeBase).LocalPath);
        private static readonly string RepoRootPath = Path.GetFullPath(Path.Combine(Cwd, "../../../../../"));
        private static readonly string DocsPath = Path.Combine(RepoRootPath, "docs");
        private static readonly string ExamplesPath = Path.Combine(DocsPath, "examples");
        private static readonly string FiguresPath = Path.Combine(DocsPath, "figures");

        private static void Main(string[] args) {
            WriteColumnOrganizedFigures().Wait();
            WriteRowOrganizedFigures().Wait();
            WriteEquitiesByRegionExamples().Wait();
        }

        private static async Task WriteEquitiesByRegionExamples() {
            var coBuilder = new ColumnOrganizedEquitiesByRegionExamplesBuilder(Path.Combine(ExamplesPath, "ColumnOrganized", "EquitiesByRegion"));
            await WriteExamples(coBuilder);

            var roBuilder = new RowOrganizedEquitiesByRegionExamplesBuilder(Path.Combine(ExamplesPath, "RowOrganized", "EquitiesByRegion"));
            await WriteExamples(roBuilder);
        }

        private static async Task WriteExamples(IExamples examples) {
            var targetPath = examples.Path;
            if (!Directory.Exists(targetPath)) {
                Console.WriteLine($"Createing directory {targetPath}");
                Directory.CreateDirectory(targetPath);
            }

            var messages = examples.Build();

            var markdownPath = Path.Combine(targetPath, "Examples.md");
            using (var fs = File.Open(markdownPath, FileMode.Create, FileAccess.Write)) {
                using (var sw = new StreamWriter(fs, Encoding.UTF8)) {
                    await sw.WriteLineAsync("| File | Json | Binary |");
                    await sw.WriteLineAsync("|------|------|--------|");

                    foreach (var kvp in messages) {
                        var jsonPath = Path.Combine(targetPath, $"{kvp.Key}.json");
                        kvp.Value.WriteJson(jsonPath, true).Wait();

                        long jsonSize;
                        using (var ms = new MemoryStream()) {
                            kvp.Value.WriteJson(ms, false).Wait();
                            jsonSize = ms.Length;
                        }
                        Console.WriteLine($"Wrote {jsonPath}");

                        var binPath = Path.Combine(targetPath, $"{kvp.Key}.bin");
                        kvp.Value.WriteBinary(binPath);
                        var binSize = new FileInfo(binPath).Length;
                        Console.WriteLine($"Wrote {binPath}");

                        await sw.WriteLineAsync($"| {kvp.Key} | [{BytesConverter.ToReadableString(jsonSize)}]({jsonPath.Substring(DocsPath.Length + 1).Replace("\\", "/")} ':ignore') | [{BytesConverter.ToReadableString(binSize)}]({binPath.Substring(DocsPath.Length + 1).Replace("\\", "/")} ':ignore') |");
                    }
                }
            }

            Console.WriteLine($"Wrote {markdownPath}");
        }

        private static async Task WriteRowOrganizedFigures() {
            var targetPath = Path.Combine(FiguresPath, "RowOrganized");
            if (!Directory.Exists(targetPath)) {
                Console.WriteLine($"Createing directory {targetPath}");
                Directory.CreateDirectory(targetPath);
            }

            var b = new RowOrganizedFigureBuilder();
            var messages = b.Build();

            foreach (var kvp in messages) {
                var jsonPath = Path.Combine(targetPath, $"{kvp.Key}.json");
                await kvp.Value.WriteJson(jsonPath, true);
                Console.WriteLine($"Wrote {jsonPath}");
            }
        }

        private static async Task WriteColumnOrganizedFigures() {
            var targetPath = Path.Combine(FiguresPath, "ColumnOrganized");
            if (!Directory.Exists(targetPath)) {
                Console.WriteLine($"Createing directory {targetPath}");
                Directory.CreateDirectory(targetPath);
            }

            var b = new ColumnOrganizedFigureBuilder();
            var messages = b.Build();

            foreach (var kvp in messages) {
                var jsonPath = Path.Combine(targetPath, $"{kvp.Key}.json");
                await kvp.Value.WriteJson(jsonPath, true);
                Console.WriteLine($"Wrote {jsonPath}");
            }
        }
    }
}
