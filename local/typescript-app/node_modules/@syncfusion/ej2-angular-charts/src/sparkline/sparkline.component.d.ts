import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Sparkline } from '@syncfusion/ej2-charts';
import { RangeBandSettingsDirective } from './rangebandsettings.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Sparkline Component
 * ```html
 * <ejs-sparkline></ejs-sparkline>
 * ```
 */
export declare class SparklineComponent extends Sparkline implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    axisRendering: any;
    dataLabelRendering: any;
    load: any;
    loaded: any;
    markerRendering: any;
    pointRegionMouseClick: any;
    pointRegionMouseMove: any;
    pointRendering: any;
    resize: any;
    seriesRendering: any;
    sparklineMouseClick: any;
    sparklineMouseMove: any;
    tooltipInitialize: any;
    childRangeBandSettings: QueryList<RangeBandSettingsDirective>;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SparklineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SparklineComponent, "ejs-sparkline", never, { "axisSettings": "axisSettings"; "border": "border"; "containerArea": "containerArea"; "dataLabelSettings": "dataLabelSettings"; "dataSource": "dataSource"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "endPointColor": "endPointColor"; "fill": "fill"; "format": "format"; "height": "height"; "highPointColor": "highPointColor"; "lineWidth": "lineWidth"; "locale": "locale"; "lowPointColor": "lowPointColor"; "markerSettings": "markerSettings"; "negativePointColor": "negativePointColor"; "opacity": "opacity"; "padding": "padding"; "palette": "palette"; "query": "query"; "rangeBandSettings": "rangeBandSettings"; "rangePadding": "rangePadding"; "startPointColor": "startPointColor"; "theme": "theme"; "tiePointColor": "tiePointColor"; "tooltipSettings": "tooltipSettings"; "type": "type"; "useGroupingSeparator": "useGroupingSeparator"; "valueType": "valueType"; "width": "width"; "xName": "xName"; "yName": "yName"; }, { "axisRendering": "axisRendering"; "dataLabelRendering": "dataLabelRendering"; "load": "load"; "loaded": "loaded"; "markerRendering": "markerRendering"; "pointRegionMouseClick": "pointRegionMouseClick"; "pointRegionMouseMove": "pointRegionMouseMove"; "pointRendering": "pointRendering"; "resize": "resize"; "seriesRendering": "seriesRendering"; "sparklineMouseClick": "sparklineMouseClick"; "sparklineMouseMove": "sparklineMouseMove"; "tooltipInitialize": "tooltipInitialize"; }, ["childRangeBandSettings"], never>;
}
