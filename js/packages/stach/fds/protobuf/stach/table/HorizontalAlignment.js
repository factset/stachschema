"use strict";
/* eslint-disable */
exports.__esModule = true;
exports.horizontalAlignmentToJSON = exports.horizontalAlignmentFromJSON = exports.HorizontalAlignment = void 0;
/**  A horizontal alignment
 */
var HorizontalAlignment;
(function (HorizontalAlignment) {
    /** UNKNOWN_HALIGN -  This value should never be used, but exists to ensure that a value is specified
     */
    HorizontalAlignment[HorizontalAlignment["UNKNOWN_HALIGN"] = 0] = "UNKNOWN_HALIGN";
    /** LEFT -  Value is horizontally aligned to the left of the cell
     */
    HorizontalAlignment[HorizontalAlignment["LEFT"] = 1] = "LEFT";
    /** CENTER -  Value is horizontally aligned in the center of the cell
     */
    HorizontalAlignment[HorizontalAlignment["CENTER"] = 2] = "CENTER";
    /** RIGHT -  Value is horizontally aligned to the right of the cell
     */
    HorizontalAlignment[HorizontalAlignment["RIGHT"] = 3] = "RIGHT";
    HorizontalAlignment[HorizontalAlignment["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
function horizontalAlignmentFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN_HALIGN":
            return HorizontalAlignment.UNKNOWN_HALIGN;
        case 1:
        case "LEFT":
            return HorizontalAlignment.LEFT;
        case 2:
        case "CENTER":
            return HorizontalAlignment.CENTER;
        case 3:
        case "RIGHT":
            return HorizontalAlignment.RIGHT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HorizontalAlignment.UNRECOGNIZED;
    }
}
exports.horizontalAlignmentFromJSON = horizontalAlignmentFromJSON;
function horizontalAlignmentToJSON(object) {
    switch (object) {
        case HorizontalAlignment.UNKNOWN_HALIGN:
            return "UNKNOWN_HALIGN";
        case HorizontalAlignment.LEFT:
            return "LEFT";
        case HorizontalAlignment.CENTER:
            return "CENTER";
        case HorizontalAlignment.RIGHT:
            return "RIGHT";
        default:
            return "UNKNOWN";
    }
}
exports.horizontalAlignmentToJSON = horizontalAlignmentToJSON;
