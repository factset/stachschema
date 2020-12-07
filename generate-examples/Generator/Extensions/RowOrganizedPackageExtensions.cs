using System.Text.RegularExpressions;
using FactSet.Protobuf.Stach;

namespace FactSet.Stach.Generator.Extensions {
    internal static class RowOrganizedPackageExtensions {
        public static RowOrganizedPackage SetVersion(this RowOrganizedPackage @this) {
            var regex = new Regex(@"\d+\.\d+");
            @this.Version = regex.Match(Constants.CurrentVersion).Value;
            return @this;
        }

    }
}
