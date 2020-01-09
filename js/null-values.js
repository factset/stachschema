"use strict";
var stach = require('./stach');
var Long = require('long');

const NullValues = {
  DOUBLE: Number.NaN,
  FLOAT: Number.NaN,
  INT32: 2147483647,
  INT64: Long.fromString('9223372036854775807'),
  STRING: 'null',
  DURATION: new stach.google.protobuf.Duration({
    seconds: Long.fromString('315576000000'),
    nanos: 999999900
  }),
  TIMESTAMP: new stach.google.protobuf.Timestamp({
    seconds: Long.fromString('253402300799'),
    nanos: 0
  }),

  isNull(value, dataType) {
    switch (dataType) {
      case stach.factset.protobuf.stach.table.DataType.DOUBLE:
      case stach.factset.protobuf.stach.table.DataType.FLOAT:
        return Number.isNaN(value);

      case stach.factset.protobuf.stach.table.DataType.INT32:
        return NullValues.INT32 === value;

      case stach.factset.protobuf.stach.table.DataType.INT64:
        return NullValues.INT64.equals(value);

      case stach.factset.protobuf.stach.table.DataType.STRING:
        return NullValues.STRING === value;

      case stach.factset.protobuf.stach.table.DataType.DURATION:
        return value instanceof stach.google.protobuf.Duration && NullValues.DURATION.seconds.equals(value.seconds) && NullValues.DURATION.nanos === value.nanos;

      case stach.factset.protobuf.stach.table.DataType.TIMESTAMP:
        return value instanceof stach.google.protobuf.Timestamp && NullValues.TIMESTAMP.seconds.equals(value.seconds) && NullValues.TIMESTAMP.nanos === value.nanos;

      default:
        return false;
    }
  }

};
stach.factset.protobuf.stach.NullValues = NullValues;
