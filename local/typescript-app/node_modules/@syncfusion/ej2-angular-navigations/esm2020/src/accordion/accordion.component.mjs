import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Accordion } from '@syncfusion/ej2-navigations';
import { Template } from '@syncfusion/ej2-angular-base';
import { AccordionItemsDirective } from './items.directive';
import * as i0 from "@angular/core";
export const inputs = ['animation', 'dataSource', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'expandMode', 'expandedIndices', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width'];
export const outputs = ['clicked', 'created', 'destroyed', 'expanded', 'expanding', 'expandedIndicesChange'];
export const twoWays = ['expandedIndices'];
/**
 * Represents the Angular Accordion Component.
 * ```html
 * <ejs-accordion></ejs-accordion>
 * ```
 */
let AccordionComponent = class AccordionComponent extends Accordion {
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
        this.containerContext = new ComponentBase();
    }
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childItems;
        this.containerContext.ngAfterContentChecked(this);
    }
};
AccordionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
AccordionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: AccordionComponent, selector: "ejs-accordion", inputs: { animation: "animation", dataSource: "dataSource", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", expandMode: "expandMode", expandedIndices: "expandedIndices", headerTemplate: "headerTemplate", height: "height", itemTemplate: "itemTemplate", items: "items", locale: "locale", width: "width" }, outputs: { clicked: "clicked", created: "created", destroyed: "destroyed", expanded: "expanded", expanding: "expanding", expandedIndicesChange: "expandedIndicesChange" }, queries: [{ propertyName: "headerTemplate", first: true, predicate: ["headerTemplate"], descendants: true }, { propertyName: "itemTemplate", first: true, predicate: ["itemTemplate"], descendants: true }, { propertyName: "childItems", first: true, predicate: AccordionItemsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content select='div'></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], AccordionComponent.prototype, "headerTemplate", void 0);
__decorate([
    Template()
], AccordionComponent.prototype, "itemTemplate", void 0);
AccordionComponent = __decorate([
    ComponentMixins([ComponentBase])
], AccordionComponent);
export { AccordionComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-accordion',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content select='div'></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childItems: new ContentChild(AccordionItemsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { headerTemplate: [{
                type: ContentChild,
                args: ['headerTemplate']
            }], itemTemplate: [{
                type: ContentChild,
                args: ['itemTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUQsdUJBQXVCLEVBQTRCLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBdUQsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0ksT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFNUQsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFhLENBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxxQkFBcUIsRUFBQyxtQkFBbUIsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsQ0FBQztBQUNsTixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWEsQ0FBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDbEgsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUVyRDs7Ozs7R0FLRztJQVlVLGtCQUFrQixTQUFsQixrQkFBbUIsU0FBUSxTQUFTO0lBMEI3QyxZQUFvQixLQUFpQixFQUFVLFNBQW9CLEVBQVUsZ0JBQWlDLEVBQVUsUUFBa0I7UUFDdEksS0FBSyxFQUFFLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBaEJuSSxTQUFJLEdBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQWtCOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBRWxELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixHQUFJLElBQUksYUFBYSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSxxQkFBcUI7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUlKLENBQUE7K0dBeERZLGtCQUFrQjttR0FBbEIsa0JBQWtCLHN6QkFKTSx1QkFBdUIsdUVBSDlDLHdDQUF3QztBQXdCbEQ7SUFEQyxRQUFRLEVBQUU7MERBQ2dCO0FBTzNCO0lBREMsUUFBUSxFQUFFO3dEQUNjO0FBeEJoQixrQkFBa0I7SUFEOUIsZUFBZSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7R0FDcEIsa0JBQWtCLENBd0Q5QjtTQXhEWSxrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFYOUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSx3Q0FBd0M7b0JBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxPQUFPLEVBQUU7d0JBQ0wsVUFBVSxFQUFFLElBQUksWUFBWSxDQUFDLHVCQUF1QixDQUFDO3FCQUN4RDtpQkFDSjsrS0FtQlUsY0FBYztzQkFGcEIsWUFBWTt1QkFBQyxnQkFBZ0I7Z0JBU3ZCLFlBQVk7c0JBRmxCLFlBQVk7dUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgUmVuZGVyZXIyLCBJbmplY3RvciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFF1ZXJ5TGlzdCwgVmFsdWVQcm92aWRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRCYXNlLCBDb21wb25lbnRNaXhpbnMsIElDb21wb25lbnRCYXNlLCBhcHBseU1peGlucywgUHJvcGVydHlDb2xsZWN0aW9uSW5mbywgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1uYXZpZ2F0aW9ucyc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgQWNjb3JkaW9uSXRlbXNEaXJlY3RpdmUgfSBmcm9tICcuL2l0ZW1zLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gWydhbmltYXRpb24nLCdkYXRhU291cmNlJywnZW5hYmxlSHRtbFNhbml0aXplcicsJ2VuYWJsZVBlcnNpc3RlbmNlJywnZW5hYmxlUnRsJywnZXhwYW5kTW9kZScsJ2V4cGFuZGVkSW5kaWNlcycsJ2hlYWRlclRlbXBsYXRlJywnaGVpZ2h0JywnaXRlbVRlbXBsYXRlJywnaXRlbXMnLCdsb2NhbGUnLCd3aWR0aCddO1xuZXhwb3J0IGNvbnN0IG91dHB1dHM6IHN0cmluZ1tdID0gWydjbGlja2VkJywnY3JlYXRlZCcsJ2Rlc3Ryb3llZCcsJ2V4cGFuZGVkJywnZXhwYW5kaW5nJywnZXhwYW5kZWRJbmRpY2VzQ2hhbmdlJ107XG5leHBvcnQgY29uc3QgdHdvV2F5czogc3RyaW5nW10gPSBbJ2V4cGFuZGVkSW5kaWNlcyddO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIEFuZ3VsYXIgQWNjb3JkaW9uIENvbXBvbmVudC5cbiAqIGBgYGh0bWxcbiAqIDxlanMtYWNjb3JkaW9uPjwvZWpzLWFjY29yZGlvbj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1hY2NvcmRpb24nLFxuICAgIGlucHV0czogaW5wdXRzLFxuICAgIG91dHB1dHM6IG91dHB1dHMsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudCBzZWxlY3Q9J2Rpdic+PC9uZy1jb250ZW50PmAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZEl0ZW1zOiBuZXcgQ29udGVudENoaWxkKEFjY29yZGlvbkl0ZW1zRGlyZWN0aXZlKVxuICAgIH1cbn0pXG5AQ29tcG9uZW50TWl4aW5zKFtDb21wb25lbnRCYXNlXSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Db21wb25lbnQgZXh0ZW5kcyBBY2NvcmRpb24gaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGNvbnRhaW5lckNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0Y2xpY2tlZDogYW55O1xuXHRjcmVhdGVkOiBhbnk7XG5cdGRlc3Ryb3llZDogYW55O1xuXHRleHBhbmRlZDogYW55O1xuXHRleHBhbmRpbmc6IGFueTtcblx0cHVibGljIGV4cGFuZGVkSW5kaWNlc0NoYW5nZTogYW55O1xuICAgIHB1YmxpYyBjaGlsZEl0ZW1zOiBRdWVyeUxpc3Q8QWNjb3JkaW9uSXRlbXNEaXJlY3RpdmU+O1xuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXSA9IFsnaXRlbXMnXTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBoZWFkZXIgdGl0bGUgdGVtcGxhdGUgb3B0aW9uIGZvciBhY2NvcmRpb24gaXRlbXMuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2hlYWRlclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBoZWFkZXJUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRlbXBsYXRlIG9wdGlvbiBmb3IgYWNjb3JkaW9uIGl0ZW1zLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdpdGVtVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGl0ZW1UZW1wbGF0ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmFkZFR3b1dheS5jYWxsKHRoaXMsIHR3b1dheXMpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0ICA9IG5ldyBDb21wb25lbnRCYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQubmdPbkluaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0Lm5nQWZ0ZXJWaWV3SW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQ29udGV4dC5uZ09uRGVzdHJveSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRhZ09iamVjdHNbMF0uaW5zdGFuY2UgPSB0aGlzLmNoaWxkSXRlbXM7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQ29udGV4dC5uZ0FmdGVyQ29udGVudENoZWNrZWQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRXZlbnRzOiAoZXZlbnRMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgICBwdWJsaWMgYWRkVHdvV2F5OiAocHJvcExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xufVxuXG4iXX0=