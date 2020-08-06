using System;

namespace FactSet.Stach.Generator.Utility {
    internal static class SequentialGuid {
        private static Guid LastId = Guid.Parse("25963BDE-5C90-43FF-8A4D-9EFEDCAA0802");

        public static Guid NextGuid() {
            LastId = LastId.NextGuid();
            return LastId;
        } 

        private static int Counter;
        public static Guid NextGuid(this Guid source) {
            var guidArray = source.ToByteArray();

            var baseDate = new DateTime(1900, 1, 1);
            var nextDate = baseDate.AddSeconds(Counter++);

            // Get the days and milliseconds which will be used to build the byte string 
            var days = new TimeSpan(nextDate.Ticks - baseDate.Ticks);
            var msecs = nextDate.TimeOfDay;

            // Convert to a byte array 
            // Note that SQL Server is accurate to 1/300th of a millisecond so we divide by 3.333333 
            var daysArray = BitConverter.GetBytes(days.Days);
            var msecsArray = BitConverter.GetBytes((long) (msecs.TotalMilliseconds / 3.333333));

            // Reverse the bytes to match SQL Servers ordering 
            Array.Reverse(daysArray);
            Array.Reverse(msecsArray);

            // Copy the bytes into the guid 
            Array.Copy(daysArray, daysArray.Length - 2, guidArray, guidArray.Length - 6, 2);
            Array.Copy(msecsArray, msecsArray.Length - 4, guidArray, guidArray.Length - 4, 4);

            return new Guid(guidArray);
        }
    }
}
