import { DataFormat } from '../../../../fds/protobuf/stach/table/DataFormat';
import { Writer, Reader } from 'protobufjs/minimal';
/**
 *  A definition of a column
 */
export interface ColumnDefinition {
    /**
     *  The id; used for referring to a column internal to a package
     */
    id: string;
    /**
     *  The name; used for referring to a column external to a package
     */
    name: string;
    /**
     *  The description; used for rendering human readable headers
     */
    description: string;
    /**
     *  The data type; correlates with the chosen property for `ColumnData.data`
     */
    type: string;
    /**
     *  Whether this column is a dimension or not
     */
    isDimension: boolean;
    /**
     *  Whether this column is hidden or not
     */
    isHidden: boolean;
    /**
     *  The next sibling column in the collapsed column tree
     */
    nextSiblingId: string;
    /**
     *  The parent column in the collapsed column tree
     */
    parentId: string;
    /**
     *  The header id
     */
    headerId: string;
    /**
     *  The data format
     */
    format?: DataFormat;
}
export declare const ColumnDefinition: {
    encode(message: ColumnDefinition, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number): ColumnDefinition;
    fromJSON(object: any): ColumnDefinition;
    fromPartial(object: DeepPartial<ColumnDefinition>): ColumnDefinition;
    toJSON(message: ColumnDefinition): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
