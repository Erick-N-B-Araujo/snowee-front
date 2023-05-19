import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Row Directive
 * ```html
 * <e-rows><e-row></e-row><e-rows>
 * ```
 */
export declare class StockChartRowDirective extends ComplexBase<StockChartRowDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Options to customize the border of the rows.
     */
    border: any;
    /**
     * The height of the row as a string accept input both as '100px' and '100%'.
     * If specified as '100%, row renders to the full height of its chart.
     * @default '100%'
     */
    height: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<StockChartRowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StockChartRowDirective, "e-stockchart-rows>e-striplines>e-stockchart-row", never, { "border": "border"; "height": "height"; }, {}, never>;
}
/**
 * StockChartRow Array Directive
 * @private
 */
export declare class StockChartRowsDirective extends ArrayBase<StockChartRowsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<StockChartRowsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StockChartRowsDirective, "ejs-stockchart>e-stockchart-rows", never, {}, {}, ["children"]>;
}
