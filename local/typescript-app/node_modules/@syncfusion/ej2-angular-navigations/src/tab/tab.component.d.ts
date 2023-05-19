import { ElementRef, ViewContainerRef, Renderer2, Injector, QueryList } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Tab } from '@syncfusion/ej2-navigations';
import { TabItemsDirective } from './items.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Angular Tab Component.
 * ```html
 * <ejs-tab></ejs-tab>
 * ```
 */
export declare class TabComponent extends Tab implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    containerContext: any;
    tagObjects: any;
    added: any;
    adding: any;
    created: any;
    destroyed: any;
    dragged: any;
    dragging: any;
    onDragStart: any;
    removed: any;
    removing: any;
    selected: any;
    selecting: any;
    childItems: QueryList<TabItemsDirective>;
    tags: string[];
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabComponent, "ejs-tab", never, { "allowDragAndDrop": "allowDragAndDrop"; "animation": "animation"; "cssClass": "cssClass"; "dragArea": "dragArea"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "headerPlacement": "headerPlacement"; "height": "height"; "heightAdjustMode": "heightAdjustMode"; "items": "items"; "loadOn": "loadOn"; "locale": "locale"; "overflowMode": "overflowMode"; "reorderActiveTab": "reorderActiveTab"; "scrollStep": "scrollStep"; "selectedItem": "selectedItem"; "showCloseButton": "showCloseButton"; "width": "width"; }, { "added": "added"; "adding": "adding"; "created": "created"; "destroyed": "destroyed"; "dragged": "dragged"; "dragging": "dragging"; "onDragStart": "onDragStart"; "removed": "removed"; "removing": "removing"; "selected": "selected"; "selecting": "selecting"; }, ["childItems"], ["div"]>;
}
