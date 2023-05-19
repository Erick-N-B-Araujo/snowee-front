import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['cssClass', 'htmlAttributes', 'interval', 'template'];
let outputs = [];
/**
 * `e-carousel-item` directive represent a item of the Angular Carousel.
 * It must be contained in a Carousel component(`ejs-carousel`).
 * ```html
 * <ejs-carousel>
 *   <e-carousel-items>
 *    <e-carousel-item template='#item1'></e-carousel-item>
 *    <e-carousel-item template='#item2'></e-carousel-item>
 *   </e-carousel-items>
 * </ejs-carousel>
 * ```
 */
export class CarouselItemDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
CarouselItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CarouselItemDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
CarouselItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: CarouselItemDirective, selector: "ejs-carousel>e-carousel-items>e-carousel-item", inputs: { cssClass: "cssClass", htmlAttributes: "htmlAttributes", interval: "interval", template: "template" }, queries: [{ propertyName: "template", first: true, predicate: ["template"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], CarouselItemDirective.prototype, "template", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CarouselItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-carousel>e-carousel-items>e-carousel-item',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { template: [{
                type: ContentChild,
                args: ['template']
            }] } });
/**
 * CarouselItem Array Directive
 * @private
 */
export class CarouselItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
CarouselItemsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CarouselItemsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CarouselItemsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: CarouselItemsDirective, selector: "ejs-carousel>e-carousel-items", queries: [{ propertyName: "children", predicate: CarouselItemDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CarouselItemsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-carousel>e-carousel-items',
                    queries: {
                        children: new ContentChildren(CarouselItemDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Nhcm91c2VsL2l0ZW1zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBR3hELElBQUksS0FBSyxHQUFhLENBQUMsVUFBVSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM3RSxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7Ozs7O0dBV0c7QUFTSCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsV0FBa0M7SUE0QnpFLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7a0hBakNRLHFCQUFxQjtzR0FBckIscUJBQXFCO0FBMEI5QjtJQURDLFFBQVEsRUFBRTt1REFDVTsyRkExQloscUJBQXFCO2tCQVJqQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSwrQ0FBK0M7b0JBQ3pELE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjt1R0EyQlUsUUFBUTtzQkFGZCxZQUFZO3VCQUFDLFVBQVU7O0FBWTVCOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxTQUFpQztJQUN6RTtRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDOzttSEFIUSxzQkFBc0I7dUdBQXRCLHNCQUFzQiw4RkFIRyxxQkFBcUI7MkZBRzlDLHNCQUFzQjtrQkFObEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLHFCQUFxQixDQUFDO3FCQUN2RDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2Nzc0NsYXNzJywgJ2h0bWxBdHRyaWJ1dGVzJywgJ2ludGVydmFsJywgJ3RlbXBsYXRlJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogYGUtY2Fyb3VzZWwtaXRlbWAgZGlyZWN0aXZlIHJlcHJlc2VudCBhIGl0ZW0gb2YgdGhlIEFuZ3VsYXIgQ2Fyb3VzZWwuXG4gKiBJdCBtdXN0IGJlIGNvbnRhaW5lZCBpbiBhIENhcm91c2VsIGNvbXBvbmVudChgZWpzLWNhcm91c2VsYCkuXG4gKiBgYGBodG1sXG4gKiA8ZWpzLWNhcm91c2VsPlxuICogICA8ZS1jYXJvdXNlbC1pdGVtcz5cbiAqICAgIDxlLWNhcm91c2VsLWl0ZW0gdGVtcGxhdGU9JyNpdGVtMSc+PC9lLWNhcm91c2VsLWl0ZW0+XG4gKiAgICA8ZS1jYXJvdXNlbC1pdGVtIHRlbXBsYXRlPScjaXRlbTInPjwvZS1jYXJvdXNlbC1pdGVtPlxuICogICA8L2UtY2Fyb3VzZWwtaXRlbXM+XG4gKiA8L2Vqcy1jYXJvdXNlbD5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1jYXJvdXNlbD5lLWNhcm91c2VsLWl0ZW1zPmUtY2Fyb3VzZWwtaXRlbScsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsSXRlbURpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPENhcm91c2VsSXRlbURpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIEFjY2VwdHMgc2luZ2xlL211bHRpcGxlIGNsYXNzZXMgKHNlcGFyYXRlZCBieSBhIHNwYWNlKSB0byBiZSB1c2VkIGZvciBpbmRpdmlkdWFsIGNhcm91c2VsIGl0ZW0gY3VzdG9taXphdGlvbi5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGNzc0NsYXNzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEFjY2VwdHMgSFRNTCBhdHRyaWJ1dGVzL2N1c3RvbSBhdHRyaWJ1dGVzIHRvIGFkZCBpbiBpbmRpdmlkdWFsIGNhcm91c2VsIGl0ZW0uXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBodG1sQXR0cmlidXRlczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBBY2NlcHRzIHRoZSBpbnRlcnZhbCBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgZm9yIGluZGl2aWR1YWwgY2Fyb3VzZWwgaXRlbSB0cmFuc2l0aW9uLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZXJ2YWw6IGFueTtcbiAgICAvKiogXG4gICAgICogQWNjZXB0cyB0aGUgdGVtcGxhdGUgZm9yIGluZGl2aWR1YWwgY2Fyb3VzZWwgaXRlbS5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgndGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHRlbXBsYXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYXJvdXNlbEl0ZW0gQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1jYXJvdXNlbD5lLWNhcm91c2VsLWl0ZW1zJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKENhcm91c2VsSXRlbURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbEl0ZW1zRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPENhcm91c2VsSXRlbXNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2l0ZW1zJyk7XG4gICAgfVxufSJdfQ==