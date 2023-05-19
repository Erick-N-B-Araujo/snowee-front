import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { AppBar } from '@syncfusion/ej2-navigations';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Essential JS 2 Angular AppBar Component.
 * ```html
 * <ejs-appbar></ejs-appbar>
 * ```
 */
export declare class AppBarComponent extends AppBar implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    containerContext: any;
    tagObjects: any;
    created: any;
    destroyed: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppBarComponent, "ejs-appbar", never, { "colorMode": "colorMode"; "cssClass": "cssClass"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "htmlAttributes": "htmlAttributes"; "isSticky": "isSticky"; "locale": "locale"; "mode": "mode"; "position": "position"; }, { "created": "created"; "destroyed": "destroyed"; }, never, ["*"]>;
}
