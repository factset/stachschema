using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using FactSet.Stach.Generator.Extensions;
using FactSet.Stach.Generator.Builders;
using FactSet.Stach.Generator.Utility;

namespace FactSet.Stach.Generator {
    internal class Program {
        private static void Main(string[] args) {
            WriteColumnOrganizedFigures().Wait();
            WriteRowOrganizedFigures().Wait();
            WriteEquitiesByRegionExamples().Wait();
            WriteGuidanceExamples().Wait();
        }

        private static async Task WriteGuidanceExamples() {
            var coBuilder = new GuidanceExamplesBuilder(Path.Combine(Constants.ExamplesPath, "Guidance"));
            await WriteExamples(coBuilder);
        }

        private static async Task WriteEquitiesByRegionExamples() {
            var coBuilder = new ColumnOrganizedEquitiesByRegionExamplesBuilder(Path.Combine(Constants.ExamplesPath, "ColumnOrganized", "EquitiesByRegion"));
            await WriteExamples(coBuilder);

            var roBuilder = new RowOrganizedEquitiesByRegionExamplesBuilder(Path.Combine(Constants.ExamplesPath, "RowOrganized", "EquitiesByRegion"));
            await WriteExamples(roBuilder);
        }

        private static async Task WriteExamples(IExamples examples) {
            var targetPath = examples.Path;
            if (!Directory.Exists(targetPath)) {
                Console.WriteLine($"Creating directory {targetPath}");
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

                        await sw.WriteLineAsync($"| {kvp.Key} | [{BytesConverter.ToReadableString(jsonSize)}]({jsonPath.Substring(Constants.DocsPath.Length + 1).Replace("\\", "/")} ':ignore') | [{BytesConverter.ToReadableString(binSize)}]({binPath.Substring(Constants.DocsPath.Length + 1).Replace("\\", "/")} ':ignore') |");
                    }
                }
            }

            Console.WriteLine($"Wrote {markdownPath}");
        }

        private static async Task WriteRowOrganizedFigures() {
            var targetPath = Path.Combine(Constants.FiguresPath, "RowOrganized");
            if (!Directory.Exists(targetPath)) {
                Console.WriteLine($"Creating directory {targetPath}");
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
            var targetPath = Path.Combine(Constants.FiguresPath, "ColumnOrganized");
            if (!Directory.Exists(targetPath)) {
                Console.WriteLine($"Creating directory {targetPath}");
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
