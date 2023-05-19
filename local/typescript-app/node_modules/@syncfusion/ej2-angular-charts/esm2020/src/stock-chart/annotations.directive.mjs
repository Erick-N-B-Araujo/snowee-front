import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'xAxisName', 'y', 'yAxisName'];
let outputs = [];
/**
 * Annotation Directive
 * ```html
 * <e-stockchart-annotations><e-stockchart-annotation></e-stockchart-annotation><e-stockchart-annotations>
 * ```
 */
export class StockChartAnnotationDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
StockChartAnnotationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAnnotationDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockChartAnnotationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartAnnotationDirective, selector: "ejs-stockchart-annotations>e-stockchart-annotation", inputs: { content: "content", coordinateUnits: "coordinateUnits", description: "description", horizontalAlignment: "horizontalAlignment", region: "region", verticalAlignment: "verticalAlignment", x: "x", xAxisName: "xAxisName", y: "y", yAxisName: "yAxisName" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], StockChartAnnotationDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAnnotationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart-annotations>e-stockchart-annotation',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * StockChartAnnotation Array Directive
 * @private
 */
export class StockChartAnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
StockChartAnnotationsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAnnotationsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockChartAnnotationsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockChartAnnotationsDirective, selector: "ejs-stockchart>e-stockchart-annotations", queries: [{ propertyName: "children", predicate: StockChartAnnotationDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAnnotationsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-annotations',
                    queries: {
                        children: new ContentChildren(StockChartAnnotationDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N0b2NrLWNoYXJ0L2Fubm90YXRpb25zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBR3hELElBQUksS0FBSyxHQUFhLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDOUosSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7OztHQUtHO0FBU0gsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFdBQTBDO0lBd0V6RixZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OzBIQTdFUSw2QkFBNkI7OEdBQTdCLDZCQUE2QjtBQXNFdEM7SUFEQyxRQUFRLEVBQUU7OERBQ1M7MkZBdEVYLDZCQUE2QjtrQkFSekMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsb0RBQW9EO29CQUM5RCxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7dUdBdUVVLE9BQU87c0JBRmIsWUFBWTt1QkFBQyxTQUFTOztBQVkzQjs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sOEJBQStCLFNBQVEsU0FBeUM7SUFDekY7UUFDSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7MkhBSFEsOEJBQThCOytHQUE5Qiw4QkFBOEIsd0dBSEwsNkJBQTZCOzJGQUd0RCw4QkFBOEI7a0JBTjFDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHlDQUF5QztvQkFDbkQsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyw2QkFBNkIsQ0FBQztxQkFDL0Q7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydjb250ZW50JywgJ2Nvb3JkaW5hdGVVbml0cycsICdkZXNjcmlwdGlvbicsICdob3Jpem9udGFsQWxpZ25tZW50JywgJ3JlZ2lvbicsICd2ZXJ0aWNhbEFsaWdubWVudCcsICd4JywgJ3hBeGlzTmFtZScsICd5JywgJ3lBeGlzTmFtZSddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqIEFubm90YXRpb24gRGlyZWN0aXZlXG4gKiBgYGBodG1sXG4gKiA8ZS1zdG9ja2NoYXJ0LWFubm90YXRpb25zPjxlLXN0b2NrY2hhcnQtYW5ub3RhdGlvbj48L2Utc3RvY2tjaGFydC1hbm5vdGF0aW9uPjxlLXN0b2NrY2hhcnQtYW5ub3RhdGlvbnM+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtc3RvY2tjaGFydC1hbm5vdGF0aW9ucz5lLXN0b2NrY2hhcnQtYW5ub3RhdGlvbicsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrQ2hhcnRBbm5vdGF0aW9uRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8U3RvY2tDaGFydEFubm90YXRpb25EaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGNvb3JkaW5hdGUgdW5pdHMgb2YgdGhlIGFubm90YXRpb24uIFRoZXkgYXJlIFxuICAgICAqICogUGl4ZWwgLSBBbm5vdGF0aW9uIHJlbmRlcnMgYmFzZWQgb24geCBhbmQgeSBwaXhlbCB2YWx1ZS4gXG4gICAgICogKiBQb2ludCAtIEFubm90YXRpb24gcmVuZGVycyBiYXNlZCBvbiB4IGFuZCB5IGF4aXMgdmFsdWUuXG4gICAgICogQGRlZmF1bHQgJ1BpeGVsJ1xuICAgICAqL1xuICAgIHB1YmxpYyBjb29yZGluYXRlVW5pdHM6IGFueTtcbiAgICAvKiogXG4gICAgICogSW5mb3JtYXRpb24gYWJvdXQgYW5ub3RhdGlvbiBmb3IgYXNzaXN0aXZlIHRlY2hub2xvZ3kuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGFsaWdubWVudCBvZiB0aGUgYW5ub3RhdGlvbi4gVGhleSBhcmUgXG4gICAgICogKiBOZWFyIC0gQWxpZ24gdGhlIGFubm90YXRpb24gZWxlbWVudCBhcyBsZWZ0IHNpZGUuIFxuICAgICAqICogRmFyIC0gQWxpZ24gdGhlIGFubm90YXRpb24gZWxlbWVudCBhcyByaWdodCBzaWRlLiBcbiAgICAgKiAqIENlbnRlciAtIEFsaWduIHRoZSBhbm5vdGF0aW9uIGVsZW1lbnQgYXMgbWlkIHBvaW50LlxuICAgICAqIEBkZWZhdWx0ICdDZW50ZXInXG4gICAgICovXG4gICAgcHVibGljIGhvcml6b250YWxBbGlnbm1lbnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSByZWdpb25zIG9mIHRoZSBhbm5vdGF0aW9uLiBUaGV5IGFyZSBcbiAgICAgKiAqIENoYXJ0IC0gQW5ub3RhdGlvbiByZW5kZXJzIGJhc2VkIG9uIGNoYXJ0IGNvb3JkaW5hdGVzLiBcbiAgICAgKiAqIFNlcmllcyAtIEFubm90YXRpb24gcmVuZGVycyBiYXNlZCBvbiBzZXJpZXMgY29vcmRpbmF0ZXMuXG4gICAgICogQGRlZmF1bHQgJ0NoYXJ0J1xuICAgICAqL1xuICAgIHB1YmxpYyByZWdpb246IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgYW5ub3RhdGlvbi4gVGhleSBhcmUgXG4gICAgICogKiBUb3AgLSBBbGlnbiB0aGUgYW5ub3RhdGlvbiBlbGVtZW50IGFzIHRvcCBzaWRlLiBcbiAgICAgKiAqIEJvdHRvbSAtIEFsaWduIHRoZSBhbm5vdGF0aW9uIGVsZW1lbnQgYXMgYm90dG9tIHNpZGUuIFxuICAgICAqICogTWlkZGxlIC0gQWxpZ24gdGhlIGFubm90YXRpb24gZWxlbWVudCBhcyBtaWQgcG9pbnQuXG4gICAgICogQGRlZmF1bHQgJ01pZGRsZSdcbiAgICAgKi9cbiAgICBwdWJsaWMgdmVydGljYWxBbGlnbm1lbnQ6IGFueTtcbiAgICAvKiogXG4gICAgICogaWYgc2V0IGNvb3JkaW5hdGVVbml0IGFzIGBQaXhlbGAgWCBzcGVjaWZpZXMgdGhlIGF4aXMgdmFsdWUgXG4gICAgICogZWxzZSBpcyBzcGVjaWZpZXMgcGl4ZWwgb3IgcGVyY2VudGFnZSBvZiBjb29yZGluYXRlXG4gICAgICogQGRlZmF1bHQgJzAnXG4gICAgICovXG4gICAgcHVibGljIHg6IGFueTtcbiAgICAvKiogXG4gICAgICogVGhlIG5hbWUgb2YgaG9yaXpvbnRhbCBheGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgYW5ub3RhdGlvbi4gXG4gICAgICogSXQgcmVxdWlyZXMgYGF4ZXNgIG9mIGNoYXJ0LlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgeEF4aXNOYW1lOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIGlmIHNldCBjb29yZGluYXRlVW5pdCBhcyBgUGl4ZWxgIFkgc3BlY2lmaWVzIHRoZSBheGlzIHZhbHVlIFxuICAgICAqIGVsc2UgaXMgc3BlY2lmaWVzIHBpeGVsIG9yIHBlcmNlbnRhZ2Ugb2YgY29vcmRpbmF0ZVxuICAgICAqIEBkZWZhdWx0ICcwJ1xuICAgICAqL1xuICAgIHB1YmxpYyB5OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFRoZSBuYW1lIG9mIHZlcnRpY2FsIGF4aXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBhbm5vdGF0aW9uLiBcbiAgICAgKiBJdCByZXF1aXJlcyBgYXhlc2Agb2YgY2hhcnQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyB5QXhpc05hbWU6IGFueTtcbiAgICAvKiogXG4gICAgICogQ29udGVudCBvZiB0aGUgYW5ub3RhdGlvbiwgd2hpY2ggYWNjZXB0cyB0aGUgaWQgb2YgdGhlIGN1c3RvbSBlbGVtZW50LlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdjb250ZW50JylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBjb250ZW50OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBTdG9ja0NoYXJ0QW5ub3RhdGlvbiBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWpzLXN0b2NrY2hhcnQ+ZS1zdG9ja2NoYXJ0LWFubm90YXRpb25zJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKFN0b2NrQ2hhcnRBbm5vdGF0aW9uRGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrQ2hhcnRBbm5vdGF0aW9uc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxTdG9ja0NoYXJ0QW5ub3RhdGlvbnNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Fubm90YXRpb25zJyk7XG4gICAgfVxufSJdfQ==