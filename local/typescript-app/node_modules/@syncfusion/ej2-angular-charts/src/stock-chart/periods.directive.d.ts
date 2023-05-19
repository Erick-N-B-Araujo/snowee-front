import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Indicator Directive
 * ```html
 * <e-stockchart-periods>
 * <e-stockchart-period></e-stockchart-period>
 * </e-stockchart-periods>
 * ```
 */
export declare class StockChartPeriodDirective extends ComplexBase<StockChartPeriodDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Count value for the button.
     * @default 1
     */
    interval: any;
    /**
     * IntervalType of button.
     * @default 'Years'
     */
    intervalType: any;
    /**
     * To select the default period.
     * @default false
     */
    selected: any;
    /**
     * Text to be displayed on the button.
     * @default null
     */
    text: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<StockChartPeriodDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StockChartPeriodDirective, "e-stockchart-indicators>e-stockchart-period", never, { "interval": "interval"; "intervalType": "intervalType"; "selected": "selected"; "text": "text"; }, {}, never>;
}
/**
 * StockChartPeriod Array Directive
 * @private
 */
export declare class StockChartPeriodsDirective extends ArrayBase<StockChartPeriodsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<StockChartPeriodsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StockChartPeriodsDirective, "ejs-stockchart>e-stockchart-periods", never, {}, {}, ["children"]>;
}
