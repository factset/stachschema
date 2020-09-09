/**  A vertical alignment
 */
export declare enum VerticalAlignment {
    /** UNKNOWN_VALIGN -  This value should never be used, but exists to ensure that a value is specified
     */
    UNKNOWN_VALIGN = 0,
    /** TOP -  Value is vertically aligned to the top of the cell
     */
    TOP = 1,
    /** MIDDLE -  Value is vertically aligned to the middle of the cell
     */
    MIDDLE = 2,
    /** BOTTOM -  Value is vertically aligned to the bottom of the cell
     */
    BOTTOM = 3,
    UNRECOGNIZED = -1
}
export declare function verticalAlignmentFromJSON(object: any): VerticalAlignment;
export declare function verticalAlignmentToJSON(object: VerticalAlignment): string;
