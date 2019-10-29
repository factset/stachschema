from google.protobuf.duration_pb2 import Duration
from google.protobuf.timestamp_pb2 import Timestamp

class NullValues :

    DOUBLE = float('nan')

    DURATION = Duration(seconds=315576000000, nanos=999999900)

    FLOAT = float('nan')

    INT32 = 2147483647

    INT64 = 9223372036854775807

    STRING = "null"

    TIMESTAMP = Timestamp(seconds=253402300799, nanos=0)