import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * StockEvents
 * ```html
 * <e-stockchart-stockevents>
 * <e-stockchart-stockevent></e-stockchart-stockevent>
 * </e-stockchart-stockevents>
 * ```
 */
export declare class StockEventDirective extends ComplexBase<StockEventDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies type of stock events
     * * Circle
     * * Square
     * * Flag
     * * Text
     * * Sign
     * * Triangle
     * * InvertedTriangle
     * * ArrowUp
     * * ArrowDown
     * * ArrowLeft
     * * ArrowRight
     * @default 'Circle'
     */
    type: any;
    /**
     * The background of the stock event that accepts value in hex and rgba as a valid CSS color string.
     * @default 'transparent'
     */
    background: any;
    /**
     * Options to customize the border of the stock events.
     */
    border: any;
    /**
     * Date value of stock event in which stock event shows.
     */
    date: any;
    /**
     * Specifies the description for the chart which renders in tooltip for stock event.
     */
    description: any;
    /**
     * Corresponding values in which stock event placed.
     * * Close
     * * Open
     * * High
     * * Close
     * @default 'close'
     */
    placeAt: any;
    /**
     * To render stock events in particular series.
     * By default stock events will render for all series.
     * @default []
     */
    seriesIndexes: any;
    /**
     * Enables the stock events to be render on series. If it disabled, stock event rendered on primaryXAxis.
     * @default true
     */
    showOnSeries: any;
    /**
     * Specifies the text for the stock chart text.
     */
    text: any;
    /**
     * Options to customize the styles for stock events text.
     */
    textStyle: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<StockEventDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StockEventDirective, "e-stockchart-indicators>e-stockchart-stockevent", never, { "background": "background"; "border": "border"; "date": "date"; "description": "description"; "placeAt": "placeAt"; "seriesIndexes": "seriesIndexes"; "showOnSeries": "showOnSeries"; "text": "text"; "textStyle": "textStyle"; "type": "type"; }, {}, never>;
}
/**
 * StockEvent Array Directive
 * @private
 */
export declare class StockEventsDirective extends ArrayBase<StockEventsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<StockEventsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StockEventsDirective, "ejs-stockchart>e-stockchart-stockevents", never, {}, {}, ["children"]>;
}
