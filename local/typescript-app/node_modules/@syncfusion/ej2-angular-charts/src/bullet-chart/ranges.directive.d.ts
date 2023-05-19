import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * BulletRange Directive
 * ```html
 * <e-bullet-range-collection>
 * <e-bullet-range></e-bullet-range>
 * </e-bullet-range-collection>
 * ```
 */
export declare class BulletRangeDirective extends ComplexBase<BulletRangeDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Default value for qualitative range Color.
     * @default null
     */
    color: any;
    /**
     * Default value for qualitative range end value.
     * @default null
     */
    end: any;
    /**
     * Default value for qualitative range Color.
     * @default null
     */
    index: any;
    /**
     * The URL for the Image that is to be displayed as a Legend icon.  It requires  `legendShape` value to be an `Image`.
     * @default ''
     */
    legendImageUrl: any;
    /**
     * Default value for qualitative range name.
     * @default null
     */
    name: any;
    /**
     * Range opacity
     * @default 1
     */
    opacity: any;
    /**
     * The shape of the legend. Each ranges has its own legend shape. They are,
     * * Circle
     * * Rectangle
     * * Triangle
     * * Diamond
     * * Cross
     * * HorizontalLine
     * * VerticalLine
     * * Pentagon
     * * InvertedTriangle
     * * SeriesType
     * * Image
     * @default 'Rectangle'
     */
    shape: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<BulletRangeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BulletRangeDirective, "e-bullet-range-collection>e-bullet-range", never, { "color": "color"; "end": "end"; "index": "index"; "legendImageUrl": "legendImageUrl"; "name": "name"; "opacity": "opacity"; "shape": "shape"; }, {}, never>;
}
/**
 * BulletRange Array Directive
 * @private
 */
export declare class BulletRangeCollectionDirective extends ArrayBase<BulletRangeCollectionDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<BulletRangeCollectionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BulletRangeCollectionDirective, "ej-bulletchart>e-bullet-range-collection", never, {}, {}, ["children"]>;
}
