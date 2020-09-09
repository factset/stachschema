"use strict";
/* eslint-disable */
exports.__esModule = true;
exports.referenceTypeToJSON = exports.referenceTypeFromJSON = exports.ReferenceType = void 0;
/**  The type of table reference
 */
var ReferenceType;
(function (ReferenceType) {
    /** UNKNOWN_REFERENCE_TYPE -  This value should never be used, but exists to ensure that a value is specified
     */
    ReferenceType[ReferenceType["UNKNOWN_REFERENCE_TYPE"] = 0] = "UNKNOWN_REFERENCE_TYPE";
    /** TABLE -  The table reference
     */
    ReferenceType[ReferenceType["TABLE"] = 1] = "TABLE";
    /** COLUMN -  The column reference
     */
    ReferenceType[ReferenceType["COLUMN"] = 2] = "COLUMN";
    /** ROW -  The row reference
     */
    ReferenceType[ReferenceType["ROW"] = 3] = "ROW";
    /** CELL -  The cell reference
     */
    ReferenceType[ReferenceType["CELL"] = 4] = "CELL";
    ReferenceType[ReferenceType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ReferenceType = exports.ReferenceType || (exports.ReferenceType = {}));
function referenceTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN_REFERENCE_TYPE":
            return ReferenceType.UNKNOWN_REFERENCE_TYPE;
        case 1:
        case "TABLE":
            return ReferenceType.TABLE;
        case 2:
        case "COLUMN":
            return ReferenceType.COLUMN;
        case 3:
        case "ROW":
            return ReferenceType.ROW;
        case 4:
        case "CELL":
            return ReferenceType.CELL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ReferenceType.UNRECOGNIZED;
    }
}
exports.referenceTypeFromJSON = referenceTypeFromJSON;
function referenceTypeToJSON(object) {
    switch (object) {
        case ReferenceType.UNKNOWN_REFERENCE_TYPE:
            return "UNKNOWN_REFERENCE_TYPE";
        case ReferenceType.TABLE:
            return "TABLE";
        case ReferenceType.COLUMN:
            return "COLUMN";
        case ReferenceType.ROW:
            return "ROW";
        case ReferenceType.CELL:
            return "CELL";
        default:
            return "UNKNOWN";
    }
}
exports.referenceTypeToJSON = referenceTypeToJSON;
