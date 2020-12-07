using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace FactSet.Stach.Generator.DataType {
    internal static class DataTypes {
        private static readonly IDictionary<string, IDataType> Cache = typeof(DataTypes).Assembly.GetTypes()
            .Where(t => !t.IsAbstract && t.IsAssignableFrom(typeof(IDataType)))
            .Select(t => (IDataType) Activator.CreateInstance(t, BindingFlags.Instance | BindingFlags.NonPublic))
            .ToDictionary(dt => dt.Name, dt => dt);

        public static IDataType Get(string type) {
            if (!Cache.TryGetValue(type, out var datatype)) {
                throw new NotSupportedException($"{type} not supported");
            }
            return datatype;
        }
    }
}
