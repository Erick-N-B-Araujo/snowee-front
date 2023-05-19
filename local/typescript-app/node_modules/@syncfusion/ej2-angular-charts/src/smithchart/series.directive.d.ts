import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
export declare class SmithchartSeriesDirective extends ComplexBase<SmithchartSeriesDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * perform animation of series based on animation duration.
     * @default '2000ms'
     */
    animationDuration: any;
    /**
     * Specifies the dataSource
     * @default null
     * @isdatamanager false
     */
    dataSource: any;
    /**
     * enable or disable the animation of series.
     * @default false
     */
    enableAnimation: any;
    /**
     * avoid the overlap of dataLabels.
     * @default false
     */
    enableSmartLabels: any;
    /**
     * color for series.
     * @default null
     */
    fill: any;
    /**
     * options for customizing marker.
     */
    marker: any;
    /**
     * The name of the series visible in legend.
     * @default ''
     */
    name: any;
    /**
     * opacity for series.
     * @default 1
     */
    opacity: any;
    /**
     * points for series.
     * @default []
     */
    points: any;
    /**
     * reactance name for dataSource.
     * @default ''
     */
    reactance: any;
    /**
     * resistance name for dataSource.
     * @default ''
     */
    resistance: any;
    /**
     * options for customizing tooltip.
     */
    tooltip: any;
    /**
     * tooltip mapping name for the series.
     * @default ''
     */
    tooltipMappingName: any;
    /**
     * visibility for series.
     * @default 'visible'
     */
    visibility: any;
    /**
     * width for series.
     * @default 1
     */
    width: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<SmithchartSeriesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SmithchartSeriesDirective, "e-seriesCollection>e-series", never, { "animationDuration": "animationDuration"; "dataSource": "dataSource"; "enableAnimation": "enableAnimation"; "enableSmartLabels": "enableSmartLabels"; "fill": "fill"; "marker": "marker"; "name": "name"; "opacity": "opacity"; "points": "points"; "reactance": "reactance"; "resistance": "resistance"; "tooltip": "tooltip"; "tooltipMappingName": "tooltipMappingName"; "visibility": "visibility"; "width": "width"; }, {}, never>;
}
/**
 * SmithchartSeries Array Directive
 * @private
 */
export declare class SmithchartSeriesCollectionDirective extends ArrayBase<SmithchartSeriesCollectionDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<SmithchartSeriesCollectionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SmithchartSeriesCollectionDirective, "ejs-smithchart>e-seriesCollection", never, {}, {}, ["children"]>;
}
