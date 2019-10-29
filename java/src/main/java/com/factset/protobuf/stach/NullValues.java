package com.factset.protobuf.stach;

import com.google.protobuf.Duration;
import com.google.protobuf.Timestamp;

public class NullValues{

    public static final double DOUBLE = Double.NaN;

    public static final Duration DURATION = Duration.newBuilder().setNanos(999999900).setSeconds(315576000000L).build();

    public static final float FLOAT = Float.NaN;

    public static final int INT32 = Integer.MAX_VALUE;

    public static final long INT64 = Long.MAX_VALUE;

    public static final String STRING = "null";

    public static final Timestamp TIMESTAMP = Timestamp.newBuilder().setNanos(0).setSeconds(253402300799L).build();

}