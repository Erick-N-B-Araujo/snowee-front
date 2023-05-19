import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { CategoriesDirective } from './categories.directive';
import * as i0 from "@angular/core";
let input = ['alignment', 'border', 'categories', 'overflow', 'textStyle'];
let outputs = [];
/**
 * MultiLevelLabel Directive
 * ```html
 * <e-axis>
 * <e-multilevellabels>
 * <e-multilevellabel></e-multilevellabel>
 * </e-multilevellabels>
 * </e-axis>
 * ```
 */
export class MultiLevelLabelDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['categories'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
MultiLevelLabelDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiLevelLabelDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
MultiLevelLabelDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: MultiLevelLabelDirective, selector: "e-axis>e-multilevellabels>e-multilevellabel", inputs: { alignment: "alignment", border: "border", categories: "categories", overflow: "overflow", textStyle: "textStyle" }, queries: [{ propertyName: "childCategories", first: true, predicate: CategoriesDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiLevelLabelDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-axis>e-multilevellabels>e-multilevellabel',
                    inputs: input,
                    outputs: outputs,
                    queries: {
                        childCategories: new ContentChild(CategoriesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * MultiLevelLabel Array Directive
 * @private
 */
export class MultiLevelLabelsDirective extends ArrayBase {
    constructor() {
        super('multilevellabels');
    }
}
MultiLevelLabelsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiLevelLabelsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MultiLevelLabelsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: MultiLevelLabelsDirective, selector: "e-axis>e-multilevellabels", queries: [{ propertyName: "children", predicate: MultiLevelLabelDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MultiLevelLabelsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-axis>e-multilevellabels',
                    queries: {
                        children: new ContentChildren(MultiLevelLabelDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsZXZlbGxhYmVscy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY2hhcnQvbXVsdGlsZXZlbGxhYmVscy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUVoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFN0QsSUFBSSxLQUFLLEdBQWEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDckYsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7Ozs7R0FTRztBQVNILE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxXQUFxQztJQWtDL0UsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQTlCOUMsU0FBSSxHQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFnQ25DLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7O3FIQXZDUSx3QkFBd0I7eUdBQXhCLHdCQUF3Qiw4UEFISyxtQkFBbUI7MkZBR2hELHdCQUF3QjtrQkFScEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsNkNBQTZDO29CQUN2RCxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFO3dCQUNMLGVBQWUsRUFBRSxJQUFJLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztxQkFDekQ7aUJBQ0o7O0FBMkNEOzs7R0FHRztBQU9ILE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxTQUFvQztJQUMvRTtRQUNJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzlCLENBQUM7O3NIQUhRLHlCQUF5QjswR0FBekIseUJBQXlCLDBGQUhBLHdCQUF3QjsyRkFHakQseUJBQXlCO2tCQU5yQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsd0JBQXdCLENBQUM7cUJBQzFEO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGRyZW4sIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuaW1wb3J0IHsgQ2F0ZWdvcmllc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2F0ZWdvcmllcy5kaXJlY3RpdmUnO1xuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydhbGlnbm1lbnQnLCAnYm9yZGVyJywgJ2NhdGVnb3JpZXMnLCAnb3ZlcmZsb3cnLCAndGV4dFN0eWxlJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogTXVsdGlMZXZlbExhYmVsIERpcmVjdGl2ZVxuICogYGBgaHRtbFxuICogPGUtYXhpcz5cbiAqIDxlLW11bHRpbGV2ZWxsYWJlbHM+XG4gKiA8ZS1tdWx0aWxldmVsbGFiZWw+PC9lLW11bHRpbGV2ZWxsYWJlbD5cbiAqIDwvZS1tdWx0aWxldmVsbGFiZWxzPlxuICogPC9lLWF4aXM+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLWF4aXM+ZS1tdWx0aWxldmVsbGFiZWxzPmUtbXVsdGlsZXZlbGxhYmVsJyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRDYXRlZ29yaWVzOiBuZXcgQ29udGVudENoaWxkKENhdGVnb3JpZXNEaXJlY3RpdmUpXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aUxldmVsTGFiZWxEaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxNdWx0aUxldmVsTGFiZWxEaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG4gICAgcHVibGljIGNoaWxkQ2F0ZWdvcmllczogYW55O1xuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXSA9IFsnY2F0ZWdvcmllcyddO1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgbXVsdGkgbGV2ZWwgbGFiZWxzLiBUaGV5IGFyZSwgXG4gICAgICogKiBOZWFyOiBQbGFjZXMgdGhlIG11bHRpIGxldmVsIGxhYmVscyBhdCBOZWFyLiBcbiAgICAgKiAqIENlbnRlcjogUGxhY2VzIHRoZSBtdWx0aSBsZXZlbCBsYWJlbHMgYXQgQ2VudGVyLiBcbiAgICAgKiAqIEZhcjogUGxhY2VzIHRoZSBtdWx0aSBsZXZlbCBsYWJlbHMgYXQgRmFyLlxuICAgICAqIEBkZWZhdWx0ICdDZW50ZXInXG4gICAgICovXG4gICAgcHVibGljIGFsaWdubWVudDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBCb3JkZXIgb2YgdGhlIG11bHRpIGxldmVsIGxhYmVscy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYm9yZGVyOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIG11bHRpIGxldmVsIGNhdGVnb3JpZXMgZm9yIG11bHRpIGxldmVsIGxhYmVscy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2F0ZWdvcmllczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIHRoZSB0ZXh0T3ZlckZsb3cgZm9yIG11bHRpIGxldmVsIGxhYmVscy4gVGhleSBhcmUsIFxuICAgICAqICogVHJpbTogVHJpbSB0ZXh0T3ZlcmZsb3cgZm9yIG11bHRpIGxldmVsIGxhYmVscy4gXG4gICAgICogKiBXcmFwOiBXcmFwIHRleHRPdmVyZmxvdyBmb3IgbXVsdGkgbGV2ZWwgbGFiZWxzLiBcbiAgICAgKiAqIG5vbmU6IE5vbmUgdGV4dE92ZXJmbG93IGZvciBtdWx0aSBsZXZlbCBsYWJlbHMuXG4gICAgICogQGRlZmF1bHQgJ1dyYXAnXG4gICAgICovXG4gICAgcHVibGljIG92ZXJmbG93OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIE9wdGlvbnMgdG8gY3VzdG9taXplIHRoZSBtdWx0aSBsZXZlbCBsYWJlbHMuXG4gICAgICovXG4gICAgcHVibGljIHRleHRTdHlsZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogTXVsdGlMZXZlbExhYmVsIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLWF4aXM+ZS1tdWx0aWxldmVsbGFiZWxzJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKE11bHRpTGV2ZWxMYWJlbERpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aUxldmVsTGFiZWxzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPE11bHRpTGV2ZWxMYWJlbHNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ211bHRpbGV2ZWxsYWJlbHMnKTtcbiAgICB9XG59Il19