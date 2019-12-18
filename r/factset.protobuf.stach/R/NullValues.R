#' @docType class
#' @title factset.protobuf.stach.NullValues
#' @description Class defining the NullValues of various data types
#' @format An \code{R6Class} generator object
#' @field DOUBLE Null value for DOUBLE data type
#' @field FLOAT Null value for FLOAT data type
#' @field INT32 Null value for INT32 data type
#' @field INT64 Null value for INT64 data type
#' @field STRING Null value for STRING data type
#' @field TIMESTAMP Null value for TIMESTAMP data type
#' @field DURATION Null value for DURATION data type
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
