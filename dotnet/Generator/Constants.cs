using System;
using System.IO;
using System.Reflection;

namespace FactSet.Stach.Generator {
    internal class Constants {
        public static readonly string CurrentVersion = "v2";
        public static readonly string Cwd = Path.GetDirectoryName(new Uri(Assembly.GetExecutingAssembly().CodeBase).LocalPath);
        public static readonly string RepoRootPath = Path.GetFullPath(Path.Combine(Cwd, "../../../../../"));
        public static readonly string DocsPath = Path.Combine(RepoRootPath, "docs");
        public static readonly string VersionPath = Path.Combine(DocsPath, CurrentVersion);
        public static readonly string ExamplesPath = Path.Combine(VersionPath, "examples");
        public static readonly string FiguresPath = Path.Combine(VersionPath, "figures");
    }
}
