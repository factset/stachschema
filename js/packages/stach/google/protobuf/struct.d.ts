import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  `Struct` represents a structured data value, consisting of fields
 *  which map to dynamically typed values. In some languages, `Struct`
 *  might be supported by a native representation. For example, in
 *  scripting languages like JS a struct is represented as an
 *  object. The details of that representation are described together
 *  with the proto support for the language.
 *
 *  The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
    /**
     *  Unordered map of dynamically typed values.
     */
    fields: {
        [key: string]: Value;
    };
}
export interface Struct_FieldsEntry {
    key: string;
    value: Value | undefined;
}
/**
 *  `Value` represents a dynamically typed value which can be either
 *  null, a number, a string, a boolean, a recursive struct value, or a
 *  list of values. A producer of value is expected to set one of that
 *  variants, absence of any variant indicates an error.
 *
 *  The JSON representation for `Value` is JSON value.
 */
export interface Value {
    /**
     *  Represents a null value.
     */
    nullValue: NullValue | undefined;
    /**
     *  Represents a double value.
     */
    numberValue: number | undefined;
    /**
     *  Represents a string value.
     */
    stringValue: string | undefined;
    /**
     *  Represents a boolean value.
     */
    boolValue: boolean | undefined;
    /**
     *  Represents a structured value.
     */
    structValue: Struct | undefined;
    /**
     *  Represents a repeated `Value`.
     */
    listValue: ListValue | undefined;
}
/**
 *  `ListValue` is a wrapper around a repeated field of values.
 *
 *  The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
    /**
     *  Repeated field of dynamically typed values.
     */
    values: Value[];
}
/**  `NullValue` is a singleton enumeration to represent the null value for the
 `Value` type union.

  The JSON representation for `NullValue` is JSON `null`.
 */
export declare enum NullValue {
    /** NULL_VALUE -  Null value.
     */
    NULL_VALUE = 0,
    UNRECOGNIZED = -1
}
export declare function nullValueFromJSON(object: any): NullValue;
export declare function nullValueToJSON(object: NullValue): string;
export declare const Struct: {
    encode(message: Struct, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): Struct;
    fromJSON(object: any): Struct;
    fromPartial(object: DeepPartial<Struct>): Struct;
    toJSON(message: Struct): unknown;
};
export declare const Struct_FieldsEntry: {
    encode(message: Struct_FieldsEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): Struct_FieldsEntry;
    fromJSON(object: any): Struct_FieldsEntry;
    fromPartial(object: DeepPartial<Struct_FieldsEntry>): Struct_FieldsEntry;
    toJSON(message: Struct_FieldsEntry): unknown;
};
export declare const Value: {
    encode(message: Value, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): Value;
    fromJSON(object: any): Value;
    fromPartial(object: DeepPartial<Value>): Value;
    toJSON(message: Value): unknown;
};
export declare const ListValue: {
    encode(message: ListValue, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): ListValue;
    fromJSON(object: any): ListValue;
    fromPartial(object: DeepPartial<ListValue>): ListValue;
    toJSON(message: ListValue): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};