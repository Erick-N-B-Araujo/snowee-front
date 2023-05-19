import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Selected Data Directive
 * ```html
 * <e-selecteddataindexes><e-selecteddataindex></e-selecteddataindex><e-selecteddataindexes>
 * ```
 */
export declare class StockChartSelectedDataIndexDirective extends ComplexBase<StockChartSelectedDataIndexDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies index of point.
     * @default 0
     * @asptype int
     */
    point: any;
    /**
     * Specifies index of series.
     * @default 0
     * @asptype int
     */
    series: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<StockChartSelectedDataIndexDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StockChartSelectedDataIndexDirective, "ejs-stockchart-selectedDataIndexes>e-stockchart-selectedDataIndex", never, { "point": "point"; "series": "series"; }, {}, never>;
}
/**
 * StockChartSelectedDataIndex Array Directive
 * @private
 */
export declare class StockChartSelectedDataIndexesDirective extends ArrayBase<StockChartSelectedDataIndexesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<StockChartSelectedDataIndexesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StockChartSelectedDataIndexesDirective, "ejs-stockchart>e-stockchart-selectedDataIndexes", never, {}, {}, ["children"]>;
}
