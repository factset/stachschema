using System.Reflection;
namespace FactSet.Protobuf.Stach {
    public partial class Package {
        partial void OnConstruction() {
            AssemblyName assemName= new AssemblyName(typeof(Package).AssemblyQualifiedName.Replace(typeof(Package).FullName+", ", ""));
            this.Version = assemName.Version.ToString(2);
        }

        /// <summary>
        ///   Instantiates all properties so that null checks are not needed
        /// </summary>
        public void Normalize() {
            foreach (var kvp in this.Tables) {
                kvp.Value.Normalize(kvp);
            }
        }
    }
}
