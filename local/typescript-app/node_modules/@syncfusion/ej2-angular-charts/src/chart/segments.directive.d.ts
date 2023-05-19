import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series>
 * <e-segments>
 * <e-segment>
 * </e-segment>
 * </e-segments>
 * </e-series-collection>
 * ```
 */
export declare class SegmentDirective extends ComplexBase<SegmentDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Defines the color of a region.
     * @default null
     */
    color: any;
    /**
     * Defines the pattern of dashes and gaps to stroke.
     * @default '0'
     */
    dashArray: any;
    /**
     * Defines the starting point of region.
     * @default null
     */
    value: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<SegmentDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SegmentDirective, "e-series>e-segments>e-segment", never, { "color": "color"; "dashArray": "dashArray"; "value": "value"; }, {}, never>;
}
/**
 * Segment Array Directive
 * @private
 */
export declare class SegmentsDirective extends ArrayBase<SegmentsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SegmentsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SegmentsDirective, "e-series>e-segments", never, {}, {}, ["children"]>;
}
