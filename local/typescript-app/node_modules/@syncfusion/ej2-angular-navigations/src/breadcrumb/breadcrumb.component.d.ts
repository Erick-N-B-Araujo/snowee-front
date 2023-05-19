import { ElementRef, ViewContainerRef, QueryList, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Breadcrumb } from '@syncfusion/ej2-navigations';
import { BreadcrumbItemsDirective } from './items.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the EJ2 Angular Breadcrumb Component.
 * ```html
 * <ejs-breadcrumb [items]='breadcrumbItems'></ejs-breadcrumb>
 * ```
 */
export declare class BreadcrumbComponent extends Breadcrumb implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    beforeItemRender: any;
    created: any;
    itemClick: any;
    activeItemChange: any;
    childItems: QueryList<BreadcrumbItemsDirective>;
    tags: string[];
    /**
     * Specifies the separator template for Breadcrumb.
     * @default '/'
     */
    separatorTemplate: any;
    /**
     * Specifies the template for Breadcrumb item.
     * @default null
     */
    itemTemplate: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "ejs-breadcrumb", never, { "activeItem": "activeItem"; "cssClass": "cssClass"; "disabled": "disabled"; "enableActiveItemNavigation": "enableActiveItemNavigation"; "enableNavigation": "enableNavigation"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "itemTemplate": "itemTemplate"; "items": "items"; "locale": "locale"; "maxItems": "maxItems"; "overflowMode": "overflowMode"; "separatorTemplate": "separatorTemplate"; "url": "url"; }, { "beforeItemRender": "beforeItemRender"; "created": "created"; "itemClick": "itemClick"; "activeItemChange": "activeItemChange"; }, ["separatorTemplate", "itemTemplate", "childItems"], never>;
}
