import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { BulletChart } from '@syncfusion/ej2-charts';
import { BulletRangeCollectionDirective } from './ranges.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * BulletChart Component
 * ```html
 * <ejs-bulletchart></ejs-bulletchart>
 * ```
 */
export declare class BulletChartComponent extends BulletChart implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    beforePrint: any;
    bulletChartMouseClick: any;
    legendRender: any;
    load: any;
    loaded: any;
    tooltipRender: any;
    dataSourceChange: any;
    childRanges: QueryList<BulletRangeCollectionDirective>;
    tags: string[];
    tooltip_template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BulletChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BulletChartComponent, "ejs-bulletchart", never, { "animation": "animation"; "border": "border"; "categoryField": "categoryField"; "categoryLabelStyle": "categoryLabelStyle"; "dataLabel": "dataLabel"; "dataSource": "dataSource"; "enableGroupSeparator": "enableGroupSeparator"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "height": "height"; "interval": "interval"; "labelFormat": "labelFormat"; "labelPosition": "labelPosition"; "labelStyle": "labelStyle"; "legendSettings": "legendSettings"; "locale": "locale"; "majorTickLines": "majorTickLines"; "margin": "margin"; "maximum": "maximum"; "minimum": "minimum"; "minorTickLines": "minorTickLines"; "minorTicksPerInterval": "minorTicksPerInterval"; "opposedPosition": "opposedPosition"; "orientation": "orientation"; "query": "query"; "ranges": "ranges"; "subtitle": "subtitle"; "subtitleStyle": "subtitleStyle"; "tabIndex": "tabIndex"; "targetColor": "targetColor"; "targetField": "targetField"; "targetTypes": "targetTypes"; "targetWidth": "targetWidth"; "theme": "theme"; "tickPosition": "tickPosition"; "title": "title"; "titlePosition": "titlePosition"; "titleStyle": "titleStyle"; "tooltip": "tooltip"; "type": "type"; "valueBorder": "valueBorder"; "valueField": "valueField"; "valueFill": "valueFill"; "valueHeight": "valueHeight"; "width": "width"; }, { "beforePrint": "beforePrint"; "bulletChartMouseClick": "bulletChartMouseClick"; "legendRender": "legendRender"; "load": "load"; "loaded": "loaded"; "tooltipRender": "tooltipRender"; "dataSourceChange": "dataSourceChange"; }, ["tooltip_template", "childRanges"], never>;
}
