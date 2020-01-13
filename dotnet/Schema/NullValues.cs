using System;

namespace FactSet.Protobuf.Stach {
    public static class NullValues {
        public const double Double = double.NaN;
        // The max value of Duration
        // https://developers.google.com/protocol-buffers/docs/reference/csharp/class/google/protobuf/well-known-types/duration#class_google_1_1_protobuf_1_1_well_known_types_1_1_duration_1a37a096e8611ee52135422813db78ab23
        public static readonly TimeSpan Duration = TimeSpan.Parse("3652500.00:00:00.9999999");
        public const float Float = float.NaN;
        public const int Int32 = int.MaxValue;
        public const long Int64 = long.MaxValue;
        public const string String = "@NA";
        public static readonly DateTime Timestamp = new DateTime(9999, 12, 31, 23, 59, 59, DateTimeKind.Utc);
    }
}