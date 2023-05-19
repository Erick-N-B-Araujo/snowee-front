import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Breadcrumb } from '@syncfusion/ej2-navigations';
import { Template } from '@syncfusion/ej2-angular-base';
import { BreadcrumbItemsDirective } from './items.directive';
import * as i0 from "@angular/core";
export const inputs = ['activeItem', 'cssClass', 'disabled', 'enableActiveItemNavigation', 'enableNavigation', 'enablePersistence', 'enableRtl', 'itemTemplate', 'items', 'locale', 'maxItems', 'overflowMode', 'separatorTemplate', 'url'];
export const outputs = ['beforeItemRender', 'created', 'itemClick', 'activeItemChange'];
export const twoWays = ['activeItem'];
/**
 * Represents the EJ2 Angular Breadcrumb Component.
 * ```html
 * <ejs-breadcrumb [items]='breadcrumbItems'></ejs-breadcrumb>
 * ```
 */
let BreadcrumbComponent = class BreadcrumbComponent extends Breadcrumb {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['items'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childItems;
        this.context.ngAfterContentChecked(this);
    }
};
BreadcrumbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BreadcrumbComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
BreadcrumbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: BreadcrumbComponent, selector: "ejs-breadcrumb", inputs: { activeItem: "activeItem", cssClass: "cssClass", disabled: "disabled", enableActiveItemNavigation: "enableActiveItemNavigation", enableNavigation: "enableNavigation", enablePersistence: "enablePersistence", enableRtl: "enableRtl", itemTemplate: "itemTemplate", items: "items", locale: "locale", maxItems: "maxItems", overflowMode: "overflowMode", separatorTemplate: "separatorTemplate", url: "url" }, outputs: { beforeItemRender: "beforeItemRender", created: "created", itemClick: "itemClick", activeItemChange: "activeItemChange" }, queries: [{ propertyName: "separatorTemplate", first: true, predicate: ["separatorTemplate"], descendants: true }, { propertyName: "itemTemplate", first: true, predicate: ["itemTemplate"], descendants: true }, { propertyName: "childItems", first: true, predicate: BreadcrumbItemsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], BreadcrumbComponent.prototype, "separatorTemplate", void 0);
__decorate([
    Template()
], BreadcrumbComponent.prototype, "itemTemplate", void 0);
BreadcrumbComponent = __decorate([
    ComponentMixins([ComponentBase])
], BreadcrumbComponent);
export { BreadcrumbComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-breadcrumb',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childItems: new ContentChild(BreadcrumbItemsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { separatorTemplate: [{
                type: ContentChild,
                args: ['separatorTemplate']
            }], itemTemplate: [{
                type: ContentChild,
                args: ['itemTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRTdELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLDRCQUE0QixFQUFDLGtCQUFrQixFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLG1CQUFtQixFQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pPLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxDQUFDLGtCQUFrQixFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMvRixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUVoRDs7Ozs7R0FLRztJQVlVLG1CQUFtQixTQUFuQixtQkFBb0IsU0FBUSxVQUFVO0lBd0IvQyxZQUFvQixLQUFpQixFQUFVLFNBQW9CLEVBQVUsZ0JBQWlDLEVBQVUsUUFBa0I7UUFDdEksS0FBSyxFQUFFLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBaEJuSSxTQUFJLEdBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQWtCOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBRWxELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBSSxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLGVBQWU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0scUJBQXFCO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBSUosQ0FBQTtnSEF0RFksbUJBQW1CO29HQUFuQixtQkFBbUIscTBCQUpLLHdCQUF3Qix1RUFIL0MsRUFBRTtBQXNCWjtJQURDLFFBQVEsRUFBRTs4REFDbUI7QUFPOUI7SUFEQyxRQUFRLEVBQUU7eURBQ2M7QUF0QmhCLG1CQUFtQjtJQUQvQixlQUFlLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztHQUNwQixtQkFBbUIsQ0FzRC9CO1NBdERZLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQVgvQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sRUFBRSxPQUFPO29CQUNoQixRQUFRLEVBQUUsRUFBRTtvQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsT0FBTyxFQUFFO3dCQUNMLFVBQVUsRUFBRSxJQUFJLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQztxQkFDekQ7aUJBQ0o7K0tBaUJVLGlCQUFpQjtzQkFGdkIsWUFBWTt1QkFBQyxtQkFBbUI7Z0JBUzFCLFlBQVk7c0JBRmxCLFlBQVk7dUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBJbmplY3RvciwgVmFsdWVQcm92aWRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRCYXNlLCBJQ29tcG9uZW50QmFzZSwgYXBwbHlNaXhpbnMsIENvbXBvbmVudE1peGlucywgUHJvcGVydHlDb2xsZWN0aW9uSW5mbywgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItbmF2aWdhdGlvbnMnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJJdGVtc0RpcmVjdGl2ZSB9IGZyb20gJy4vaXRlbXMuZGlyZWN0aXZlJztcblxuZXhwb3J0IGNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbJ2FjdGl2ZUl0ZW0nLCdjc3NDbGFzcycsJ2Rpc2FibGVkJywnZW5hYmxlQWN0aXZlSXRlbU5hdmlnYXRpb24nLCdlbmFibGVOYXZpZ2F0aW9uJywnZW5hYmxlUGVyc2lzdGVuY2UnLCdlbmFibGVSdGwnLCdpdGVtVGVtcGxhdGUnLCdpdGVtcycsJ2xvY2FsZScsJ21heEl0ZW1zJywnb3ZlcmZsb3dNb2RlJywnc2VwYXJhdG9yVGVtcGxhdGUnLCd1cmwnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnYmVmb3JlSXRlbVJlbmRlcicsJ2NyZWF0ZWQnLCdpdGVtQ2xpY2snLCdhY3RpdmVJdGVtQ2hhbmdlJ107XG5leHBvcnQgY29uc3QgdHdvV2F5czogc3RyaW5nW10gPSBbJ2FjdGl2ZUl0ZW0nXTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBFSjIgQW5ndWxhciBCcmVhZGNydW1iIENvbXBvbmVudC5cbiAqIGBgYGh0bWxcbiAqIDxlanMtYnJlYWRjcnVtYiBbaXRlbXNdPSdicmVhZGNydW1iSXRlbXMnPjwvZWpzLWJyZWFkY3J1bWI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlanMtYnJlYWRjcnVtYicsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogJycsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZEl0ZW1zOiBuZXcgQ29udGVudENoaWxkKEJyZWFkY3J1bWJJdGVtc0RpcmVjdGl2ZSlcbiAgICB9XG59KVxuQENvbXBvbmVudE1peGlucyhbQ29tcG9uZW50QmFzZV0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkNvbXBvbmVudCBleHRlbmRzIEJyZWFkY3J1bWIgaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0YmVmb3JlSXRlbVJlbmRlcjogYW55O1xuXHRjcmVhdGVkOiBhbnk7XG5cdGl0ZW1DbGljazogYW55O1xuXHRwdWJsaWMgYWN0aXZlSXRlbUNoYW5nZTogYW55O1xuICAgIHB1YmxpYyBjaGlsZEl0ZW1zOiBRdWVyeUxpc3Q8QnJlYWRjcnVtYkl0ZW1zRGlyZWN0aXZlPjtcbiAgICBwdWJsaWMgdGFnczogc3RyaW5nW10gPSBbJ2l0ZW1zJ107XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgc2VwYXJhdG9yIHRlbXBsYXRlIGZvciBCcmVhZGNydW1iLlxuICAgICAqIEBkZWZhdWx0ICcvJ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3NlcGFyYXRvclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBzZXBhcmF0b3JUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRlbXBsYXRlIGZvciBCcmVhZGNydW1iIGl0ZW0uXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2l0ZW1UZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgaXRlbVRlbXBsYXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nRWxlOiBFbGVtZW50UmVmLCBwcml2YXRlIHNyZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5uZ0VsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcyA9IHRoaXMuaW5qZWN0ZWRNb2R1bGVzIHx8IFtdO1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmNvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFnT2JqZWN0c1swXS5pbnN0YW5jZSA9IHRoaXMuY2hpbGRJdGVtcztcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nQWZ0ZXJDb250ZW50Q2hlY2tlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJFdmVudHM6IChldmVudExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhZGRUd29XYXk6IChwcm9wTGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbiJdfQ==