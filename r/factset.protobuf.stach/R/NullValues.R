#' Class defining the NullValues of various data types
#' @export
factset.protobuf.stach.NullValues <- R6::R6Class(
  'factset.protobuf.stach.NullValues',
  public = list(

    DOUBLE = NaN,
    FLOAT = NaN,
    INT32 = 2147483647,
    INT64 = 9223372036854775807,
    STRING = "null",
    TIMESTAMP = NULL,
    DURATION = NULL,

    initialize = function(){
      library(RProtoBuf)
      self$TIMESTAMP = new(google.protobuf.Timestamp, seconds = 253402300799, nanos = 0)
      self$DURATION = new(google.protobuf.Duration, seconds = 315576000000, nanos = 999999900)
    }
  )
)
