/**  The type of table reference
 */
export declare enum ReferenceType {
    /** UNKNOWN_REFERENCE_TYPE -  This value should never be used, but exists to ensure that a value is specified
     */
    UNKNOWN_REFERENCE_TYPE = 0,
    /** TABLE -  The table reference
     */
    TABLE = 1,
    /** COLUMN -  The column reference
     */
    COLUMN = 2,
    /** ROW -  The row reference
     */
    ROW = 3,
    /** CELL -  The cell reference
     */
    CELL = 4,
    UNRECOGNIZED = -1
}
export declare function referenceTypeFromJSON(object: any): ReferenceType;
export declare function referenceTypeToJSON(object: ReferenceType): string;
