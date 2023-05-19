import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { Sidebar } from '@syncfusion/ej2-navigations';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Essential JS 2 Angular Sidebar Component.
 * ```html
 * <ejs-sidebar></ejs-sidebar>
 * ```
 */
export declare class SidebarComponent extends Sidebar implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    containerContext: any;
    tagObjects: any;
    change: any;
    close: any;
    created: any;
    destroyed: any;
    open: any;
    isOpenChange: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarComponent, "ejs-sidebar", never, { "animate": "animate"; "closeOnDocumentClick": "closeOnDocumentClick"; "dockSize": "dockSize"; "enableDock": "enableDock"; "enableGestures": "enableGestures"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "height": "height"; "isOpen": "isOpen"; "locale": "locale"; "mediaQuery": "mediaQuery"; "position": "position"; "showBackdrop": "showBackdrop"; "target": "target"; "type": "type"; "width": "width"; "zIndex": "zIndex"; }, { "change": "change"; "close": "close"; "created": "created"; "destroyed": "destroyed"; "open": "open"; "isOpenChange": "isOpenChange"; }, never, ["*"]>;
}
