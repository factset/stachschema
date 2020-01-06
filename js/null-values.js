"use strict";
var stach = require('./stach');
var long = require('./long');

const NullValues = {
  DOUBLE: Number.NaN,
  FLOAT: Number.NaN,
  INT32: 2147483647,
  INT64: long.fromString('9223372036854775807'),
  STRING: '@NA',
  DURATION: new stach.google.protobuf.Duration({
    seconds: long.fromString('315576000000'),
    nanos: 999999900
  }),
  TIMESTAMP: new stach.google.protobuf.Timestamp({
    seconds: long.fromString('253402300799'),
    nanos: 0
  })
};

exports.NullValues = NullValues;
