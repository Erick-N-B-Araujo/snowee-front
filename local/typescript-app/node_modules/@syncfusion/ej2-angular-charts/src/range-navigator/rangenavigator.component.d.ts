import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { RangeNavigator } from '@syncfusion/ej2-charts';
import { RangenavigatorSeriesCollectionDirective } from './series.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * RangeNavigator Component
 * ```html
 * <ejs-rangenavigator></ejs-rangenavigator>
 * ```
 */
export declare class RangeNavigatorComponent extends RangeNavigator implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    beforePrint: any;
    beforeResize: any;
    changed: any;
    labelRender: any;
    load: any;
    loaded: any;
    resized: any;
    selectorRender: any;
    tooltipRender: any;
    dataSourceChange: any;
    childSeries: QueryList<RangenavigatorSeriesCollectionDirective>;
    tags: string[];
    tooltip_template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeNavigatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RangeNavigatorComponent, "ejs-rangenavigator", never, { "allowIntervalData": "allowIntervalData"; "allowSnapping": "allowSnapping"; "animationDuration": "animationDuration"; "background": "background"; "dataSource": "dataSource"; "disableRangeSelector": "disableRangeSelector"; "enableDeferredUpdate": "enableDeferredUpdate"; "enableGrouping": "enableGrouping"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "groupBy": "groupBy"; "height": "height"; "interval": "interval"; "intervalType": "intervalType"; "labelFormat": "labelFormat"; "labelIntersectAction": "labelIntersectAction"; "labelPosition": "labelPosition"; "labelStyle": "labelStyle"; "locale": "locale"; "logBase": "logBase"; "majorGridLines": "majorGridLines"; "majorTickLines": "majorTickLines"; "margin": "margin"; "maximum": "maximum"; "minimum": "minimum"; "navigatorBorder": "navigatorBorder"; "navigatorStyleSettings": "navigatorStyleSettings"; "periodSelectorSettings": "periodSelectorSettings"; "query": "query"; "secondaryLabelAlignment": "secondaryLabelAlignment"; "series": "series"; "skeleton": "skeleton"; "skeletonType": "skeletonType"; "theme": "theme"; "tickPosition": "tickPosition"; "tooltip": "tooltip"; "useGroupingSeparator": "useGroupingSeparator"; "value": "value"; "valueType": "valueType"; "width": "width"; "xName": "xName"; "yName": "yName"; }, { "beforePrint": "beforePrint"; "beforeResize": "beforeResize"; "changed": "changed"; "labelRender": "labelRender"; "load": "load"; "loaded": "loaded"; "resized": "resized"; "selectorRender": "selectorRender"; "tooltipRender": "tooltipRender"; "dataSourceChange": "dataSourceChange"; }, ["tooltip_template", "childSeries"], never>;
}
