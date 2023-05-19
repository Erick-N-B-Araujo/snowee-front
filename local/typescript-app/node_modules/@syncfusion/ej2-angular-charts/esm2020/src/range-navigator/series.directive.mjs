import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['animation', 'border', 'dashArray', 'dataSource', 'fill', 'opacity', 'query', 'type', 'width', 'xName', 'yName'];
let outputs = [];
/**
 * RangenavigatorSeries Directive
 * ```html
 * <e-rangenavigator-series-collection>
 * <e-rangenavigator-series></e-rangenavigator-series>
 * </e-rangenavigator-series-collection>
 * ```
 */
export class RangenavigatorSeriesDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
RangenavigatorSeriesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangenavigatorSeriesDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
RangenavigatorSeriesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangenavigatorSeriesDirective, selector: "e-rangenavigator-series-collection>e-rangenavigator-series", inputs: { animation: "animation", border: "border", dashArray: "dashArray", dataSource: "dataSource", fill: "fill", opacity: "opacity", query: "query", type: "type", width: "width", xName: "xName", yName: "yName" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangenavigatorSeriesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-rangenavigator-series-collection>e-rangenavigator-series',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * RangenavigatorSeries Array Directive
 * @private
 */
export class RangenavigatorSeriesCollectionDirective extends ArrayBase {
    constructor() {
        super('series');
    }
}
RangenavigatorSeriesCollectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangenavigatorSeriesCollectionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RangenavigatorSeriesCollectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: RangenavigatorSeriesCollectionDirective, selector: "ej-rangenavigator>e-rangenavigator-series-collection", queries: [{ propertyName: "children", predicate: RangenavigatorSeriesDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangenavigatorSeriesCollectionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-rangenavigator>e-rangenavigator-series-collection',
                    queries: {
                        children: new ContentChildren(RangenavigatorSeriesDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yYW5nZS1uYXZpZ2F0b3Ivc2VyaWVzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBSWhGLElBQUksS0FBSyxHQUFhLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hJLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUMzQjs7Ozs7OztHQU9HO0FBU0gsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFdBQTBDO0lBOER6RixZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7OzBIQW5FUSw2QkFBNkI7OEdBQTdCLDZCQUE2QjsyRkFBN0IsNkJBQTZCO2tCQVJ6QyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSw0REFBNEQ7b0JBQ3RFLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjs7QUF1RUQ7OztHQUdHO0FBT0gsTUFBTSxPQUFPLHVDQUF3QyxTQUFRLFNBQWtEO0lBQzNHO1FBQ0ksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7O29JQUhRLHVDQUF1Qzt3SEFBdkMsdUNBQXVDLHFIQUhkLDZCQUE2QjsyRkFHdEQsdUNBQXVDO2tCQU5uRCxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxzREFBc0Q7b0JBQ2hFLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsNkJBQTZCLENBQUM7cUJBQy9EO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydhbmltYXRpb24nLCAnYm9yZGVyJywgJ2Rhc2hBcnJheScsICdkYXRhU291cmNlJywgJ2ZpbGwnLCAnb3BhY2l0eScsICdxdWVyeScsICd0eXBlJywgJ3dpZHRoJywgJ3hOYW1lJywgJ3lOYW1lJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogUmFuZ2VuYXZpZ2F0b3JTZXJpZXMgRGlyZWN0aXZlXG4gKiBgYGBodG1sXG4gKiA8ZS1yYW5nZW5hdmlnYXRvci1zZXJpZXMtY29sbGVjdGlvbj5cbiAqIDxlLXJhbmdlbmF2aWdhdG9yLXNlcmllcz48L2UtcmFuZ2VuYXZpZ2F0b3Itc2VyaWVzPlxuICogPC9lLXJhbmdlbmF2aWdhdG9yLXNlcmllcy1jb2xsZWN0aW9uPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1yYW5nZW5hdmlnYXRvci1zZXJpZXMtY29sbGVjdGlvbj5lLXJhbmdlbmF2aWdhdG9yLXNlcmllcycsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlbmF2aWdhdG9yU2VyaWVzRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8UmFuZ2VuYXZpZ2F0b3JTZXJpZXNEaXJlY3RpdmU+IHtcbiAgICBwdWJsaWMgZGlyZWN0aXZlUHJvcExpc3Q6IGFueTtcblx0XG5cblxuICAgIC8qKiBcbiAgICAgKiBJdCBkZWZpbmVzIHRoZSBzZXJpZXMgdHlwZSBvZiB0aGUgcmFuZ2UgbmF2aWdhdG9yLlxuICAgICAqIEBkZWZhdWx0ICdMaW5lJ1xuICAgICAqL1xuICAgIHB1YmxpYyB0eXBlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIE9wdGlvbnMgdG8gY3VzdG9taXppbmcgYW5pbWF0aW9uIGZvciB0aGUgc2VyaWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhbmltYXRpb246IGFueTtcbiAgICAvKiogXG4gICAgICogT3B0aW9ucyBmb3IgY3VzdG9taXppbmcgdGhlIGNvbG9yIGFuZCB3aWR0aCBvZiB0aGUgc2VyaWVzIGJvcmRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgYm9yZGVyOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgdGhlIHBhdHRlcm4gb2YgZGFzaGVzIGFuZCBnYXBzIHRvIHN0cm9rZSB0aGUgbGluZXMgaW4gYExpbmVgIHR5cGUgc2VyaWVzLlxuICAgICAqIEBkZWZhdWx0ICcwJ1xuICAgICAqL1xuICAgIHB1YmxpYyBkYXNoQXJyYXk6IGFueTtcbiAgICAvKiogXG4gICAgICogSXQgZGVmaW5lcyB0aGUgZGF0YSBzb3VyY2UgZm9yIGEgc2VyaWVzLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgZGF0YVNvdXJjZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgZmlsbCBjb2xvciBmb3IgdGhlIHNlcmllcyB0aGF0IGFjY2VwdHMgdmFsdWUgaW4gaGV4IGFuZCByZ2JhIGFzIGEgdmFsaWQgQ1NTIGNvbG9yIHN0cmluZy4gXG4gICAgICogSXQgYWxzbyByZXByZXNlbnRzIHRoZSBjb2xvciBvZiB0aGUgc2lnbmFsIGxpbmVzIGluIHRlY2huaWNhbCBpbmRpY2F0b3JzLiBcbiAgICAgKiBGb3IgdGVjaG5pY2FsIGluZGljYXRvcnMsIHRoZSBkZWZhdWx0IHZhbHVlIGlzICdibHVlJyBhbmQgZm9yIHNlcmllcywgaXQgaGFzIG51bGwuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBmaWxsOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFRoZSBvcGFjaXR5IGZvciB0aGUgYmFja2dyb3VuZC5cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgcHVibGljIG9wYWNpdHk6IGFueTtcbiAgICAvKiogXG4gICAgICogSXQgZGVmaW5lcyB0aGUgcXVlcnkgZm9yIHRoZSBkYXRhIHNvdXJjZS5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIHF1ZXJ5OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFRoZSBzdHJva2Ugd2lkdGggZm9yIHRoZSBzZXJpZXMgdGhhdCBpcyBhcHBsaWNhYmxlIG9ubHkgZm9yIGBMaW5lYCB0eXBlIHNlcmllcy4gXG4gICAgICogSXQgYWxzbyByZXByZXNlbnRzIHRoZSBzdHJva2Ugd2lkdGggb2YgdGhlIHNpZ25hbCBsaW5lcyBpbiB0ZWNobmljYWwgaW5kaWNhdG9ycy5cbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG4gICAgcHVibGljIHdpZHRoOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEl0IGRlZmluZXMgdGhlIHhOYW1lIGZvciB0aGUgc2VyaWVzLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgeE5hbWU6IGFueTtcbiAgICAvKiogXG4gICAgICogSXQgZGVmaW5lcyB0aGUgeU5hbWUgZm9yIHRoZSBzZXJpZXMuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyB5TmFtZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogUmFuZ2VuYXZpZ2F0b3JTZXJpZXMgQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2VqLXJhbmdlbmF2aWdhdG9yPmUtcmFuZ2VuYXZpZ2F0b3Itc2VyaWVzLWNvbGxlY3Rpb24nLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oUmFuZ2VuYXZpZ2F0b3JTZXJpZXNEaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VuYXZpZ2F0b3JTZXJpZXNDb2xsZWN0aW9uRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPFJhbmdlbmF2aWdhdG9yU2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2VyaWVzJyk7XG4gICAgfVxufSJdfQ==