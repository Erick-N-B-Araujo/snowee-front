import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['border', 'height'];
let outputs = [];
/**
 * Row Directive
 * ```html
 * <e-rows><e-row></e-row><e-rows>
 * ```
 */
export class StockChartRowDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
StockChartRowDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartRowDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartRowDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartRowDirective, selector: "e-stockchart-rows>e-striplines>e-stockchart-row", inputs: { border: "border", height: "height" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartRowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-rows>e-striplines>e-stockchart-row',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockChartRow Array Directive
 * @private
 */
export class StockChartRowsDirective extends ArrayBase {
    constructor() {
        super('rows');
    }
}
StockChartRowsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartRowsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartRowsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartRowsDirective, selector: "ejs-stockchart>e-stockchart-rows", queries: [{ propertyName: "children", predicate: StockChartRowDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartRowsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-rows',
                    queries: {
                        children: new ContentChildren(StockChartRowDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3RvY2stY2hhcnQvcm93cy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUloRixJQUFJLEtBQUssR0FBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMzQyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7O0dBS0c7QUFTSCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsV0FBbUM7SUFnQjNFLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7bUhBckJRLHNCQUFzQjt1R0FBdEIsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBUmxDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGlEQUFpRDtvQkFDM0QsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQXlCRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsU0FBa0M7SUFDM0U7UUFDSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7b0hBSFEsdUJBQXVCO3dHQUF2Qix1QkFBdUIsaUdBSEUsc0JBQXNCOzJGQUcvQyx1QkFBdUI7a0JBTm5DLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQztxQkFDeEQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2JvcmRlcicsICdoZWlnaHQnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiBSb3cgRGlyZWN0aXZlXG4gKiBgYGBodG1sXG4gKiA8ZS1yb3dzPjxlLXJvdz48L2Utcm93PjxlLXJvd3M+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLXN0b2NrY2hhcnQtcm93cz5lLXN0cmlwbGluZXM+ZS1zdG9ja2NoYXJ0LXJvdycsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrQ2hhcnRSb3dEaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxTdG9ja0NoYXJ0Um93RGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogT3B0aW9ucyB0byBjdXN0b21pemUgdGhlIGJvcmRlciBvZiB0aGUgcm93cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYm9yZGVyOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHJvdyBhcyBhIHN0cmluZyBhY2NlcHQgaW5wdXQgYm90aCBhcyAnMTAwcHgnIGFuZCAnMTAwJScuIFxuICAgICAqIElmIHNwZWNpZmllZCBhcyAnMTAwJSwgcm93IHJlbmRlcnMgdG8gdGhlIGZ1bGwgaGVpZ2h0IG9mIGl0cyBjaGFydC5cbiAgICAgKiBAZGVmYXVsdCAnMTAwJSdcbiAgICAgKi9cbiAgICBwdWJsaWMgaGVpZ2h0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBTdG9ja0NoYXJ0Um93IEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtc3RvY2tjaGFydD5lLXN0b2NrY2hhcnQtcm93cycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihTdG9ja0NoYXJ0Um93RGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrQ2hhcnRSb3dzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPFN0b2NrQ2hhcnRSb3dzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdyb3dzJyk7XG4gICAgfVxufSJdfQ==