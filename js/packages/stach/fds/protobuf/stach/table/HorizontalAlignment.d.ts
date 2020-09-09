/**  A horizontal alignment
 */
export declare enum HorizontalAlignment {
    /** UNKNOWN_HALIGN -  This value should never be used, but exists to ensure that a value is specified
     */
    UNKNOWN_HALIGN = 0,
    /** LEFT -  Value is horizontally aligned to the left of the cell
     */
    LEFT = 1,
    /** CENTER -  Value is horizontally aligned in the center of the cell
     */
    CENTER = 2,
    /** RIGHT -  Value is horizontally aligned to the right of the cell
     */
    RIGHT = 3,
    UNRECOGNIZED = -1
}
export declare function horizontalAlignmentFromJSON(object: any): HorizontalAlignment;
export declare function horizontalAlignmentToJSON(object: HorizontalAlignment): string;
