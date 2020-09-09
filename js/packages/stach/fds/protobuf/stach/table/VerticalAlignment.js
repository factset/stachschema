"use strict";
/* eslint-disable */
exports.__esModule = true;
exports.verticalAlignmentToJSON = exports.verticalAlignmentFromJSON = exports.VerticalAlignment = void 0;
/**  A vertical alignment
 */
var VerticalAlignment;
(function (VerticalAlignment) {
    /** UNKNOWN_VALIGN -  This value should never be used, but exists to ensure that a value is specified
     */
    VerticalAlignment[VerticalAlignment["UNKNOWN_VALIGN"] = 0] = "UNKNOWN_VALIGN";
    /** TOP -  Value is vertically aligned to the top of the cell
     */
    VerticalAlignment[VerticalAlignment["TOP"] = 1] = "TOP";
    /** MIDDLE -  Value is vertically aligned to the middle of the cell
     */
    VerticalAlignment[VerticalAlignment["MIDDLE"] = 2] = "MIDDLE";
    /** BOTTOM -  Value is vertically aligned to the bottom of the cell
     */
    VerticalAlignment[VerticalAlignment["BOTTOM"] = 3] = "BOTTOM";
    VerticalAlignment[VerticalAlignment["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
function verticalAlignmentFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN_VALIGN":
            return VerticalAlignment.UNKNOWN_VALIGN;
        case 1:
        case "TOP":
            return VerticalAlignment.TOP;
        case 2:
        case "MIDDLE":
            return VerticalAlignment.MIDDLE;
        case 3:
        case "BOTTOM":
            return VerticalAlignment.BOTTOM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VerticalAlignment.UNRECOGNIZED;
    }
}
exports.verticalAlignmentFromJSON = verticalAlignmentFromJSON;
function verticalAlignmentToJSON(object) {
    switch (object) {
        case VerticalAlignment.UNKNOWN_VALIGN:
            return "UNKNOWN_VALIGN";
        case VerticalAlignment.TOP:
            return "TOP";
        case VerticalAlignment.MIDDLE:
            return "MIDDLE";
        case VerticalAlignment.BOTTOM:
            return "BOTTOM";
        default:
            return "UNKNOWN";
    }
}
exports.verticalAlignmentToJSON = verticalAlignmentToJSON;
