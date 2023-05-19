import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { StockChart } from '@syncfusion/ej2-charts';
import { StockChartSeriesCollectionDirective } from './series.directive';
import { StockChartAxesDirective } from './axes.directive';
import { StockChartRowsDirective } from './rows.directive';
import { StockChartAnnotationsDirective } from './annotations.directive';
import { StockChartSelectedDataIndexesDirective } from './selecteddataindexes.directive';
import { StockChartPeriodsDirective } from './periods.directive';
import { StockEventsDirective } from './stockevents.directive';
import { StockChartIndicatorsDirective } from './indicators.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Stock Chart Component
 * ```html
 * <ejs-stockchart></ejs-stockchart>
 * ```
 */
export declare class StockChartComponent extends StockChart implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    axisLabelRender: any;
    legendClick: any;
    legendRender: any;
    load: any;
    loaded: any;
    onZooming: any;
    pointClick: any;
    pointMove: any;
    rangeChange: any;
    selectorRender: any;
    seriesRender: any;
    stockChartMouseClick: any;
    stockChartMouseDown: any;
    stockChartMouseLeave: any;
    stockChartMouseMove: any;
    stockChartMouseUp: any;
    stockEventRender: any;
    tooltipRender: any;
    dataSourceChange: any;
    childSeries: QueryList<StockChartSeriesCollectionDirective>;
    childAxes: QueryList<StockChartAxesDirective>;
    childRows: QueryList<StockChartRowsDirective>;
    childAnnotations: QueryList<StockChartAnnotationsDirective>;
    childSelectedDataIndexes: QueryList<StockChartSelectedDataIndexesDirective>;
    childPeriods: QueryList<StockChartPeriodsDirective>;
    childStockEvents: QueryList<StockEventsDirective>;
    childIndicators: QueryList<StockChartIndicatorsDirective>;
    tags: string[];
    tooltip_template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StockChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StockChartComponent, "ejs-stockchart", never, { "annotations": "annotations"; "axes": "axes"; "background": "background"; "border": "border"; "chartArea": "chartArea"; "crosshair": "crosshair"; "dataSource": "dataSource"; "enableCustomRange": "enableCustomRange"; "enablePeriodSelector": "enablePeriodSelector"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "enableSelector": "enableSelector"; "exportType": "exportType"; "height": "height"; "indicatorType": "indicatorType"; "indicators": "indicators"; "isMultiSelect": "isMultiSelect"; "isSelect": "isSelect"; "isTransposed": "isTransposed"; "legendSettings": "legendSettings"; "locale": "locale"; "margin": "margin"; "periods": "periods"; "primaryXAxis": "primaryXAxis"; "primaryYAxis": "primaryYAxis"; "rows": "rows"; "selectedDataIndexes": "selectedDataIndexes"; "selectionMode": "selectionMode"; "series": "series"; "seriesType": "seriesType"; "stockEvents": "stockEvents"; "theme": "theme"; "title": "title"; "titleStyle": "titleStyle"; "tooltip": "tooltip"; "trendlineType": "trendlineType"; "width": "width"; "zoomSettings": "zoomSettings"; }, { "axisLabelRender": "axisLabelRender"; "legendClick": "legendClick"; "legendRender": "legendRender"; "load": "load"; "loaded": "loaded"; "onZooming": "onZooming"; "pointClick": "pointClick"; "pointMove": "pointMove"; "rangeChange": "rangeChange"; "selectorRender": "selectorRender"; "seriesRender": "seriesRender"; "stockChartMouseClick": "stockChartMouseClick"; "stockChartMouseDown": "stockChartMouseDown"; "stockChartMouseLeave": "stockChartMouseLeave"; "stockChartMouseMove": "stockChartMouseMove"; "stockChartMouseUp": "stockChartMouseUp"; "stockEventRender": "stockEventRender"; "tooltipRender": "tooltipRender"; "dataSourceChange": "dataSourceChange"; }, ["tooltip_template", "childSeries", "childAxes", "childRows", "childAnnotations", "childSelectedDataIndexes", "childPeriods", "childStockEvents", "childIndicators"], never>;
}
