import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Pager } from '@syncfusion/ej2-grids';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * `ejs-pager` represents the Angular Pager Component.
 * ```html
 * <ejs-pager></ejs-pager>
 * ```
 */
export declare class PagerComponent extends Pager implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    click: any;
    created: any;
    dropDownChanged: any;
    currentPageChange: any;
    pageSizeChange: any;
    pageCountChange: any;
    pageSizesChange: any;
    /**
     *  Defines the template as string or HTML element ID which renders customized elements in pager instead of default elements.
     * @default null
     */
    template: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PagerComponent, "ejs-pager", never, { "cssClass": "cssClass"; "currentPage": "currentPage"; "customText": "customText"; "enableExternalMessage": "enableExternalMessage"; "enablePagerMessage": "enablePagerMessage"; "enablePersistence": "enablePersistence"; "enableQueryString": "enableQueryString"; "enableRtl": "enableRtl"; "externalMessage": "externalMessage"; "locale": "locale"; "pageCount": "pageCount"; "pageSize": "pageSize"; "pageSizes": "pageSizes"; "template": "template"; "totalRecordsCount": "totalRecordsCount"; }, { "click": "click"; "created": "created"; "dropDownChanged": "dropDownChanged"; "currentPageChange": "currentPageChange"; "pageSizeChange": "pageSizeChange"; "pageCountChange": "pageCountChange"; "pageSizesChange": "pageSizesChange"; }, ["template"], never>;
}
