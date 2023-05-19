import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['color', 'end', 'index', 'legendImageUrl', 'name', 'opacity', 'shape'];
let outputs = [];
/**
 * BulletRange Directive
 * ```html
 * <e-bullet-range-collection>
 * <e-bullet-range></e-bullet-range>
 * </e-bullet-range-collection>
 * ```
 */
export class BulletRangeDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
BulletRangeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletRangeDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
BulletRangeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: BulletRangeDirective, selector: "e-bullet-range-collection>e-bullet-range", inputs: { color: "color", end: "end", index: "index", legendImageUrl: "legendImageUrl", name: "name", opacity: "opacity", shape: "shape" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletRangeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-bullet-range-collection>e-bullet-range',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * BulletRange Array Directive
 * @private
 */
export class BulletRangeCollectionDirective extends ArrayBase {
    constructor() {
        super('ranges');
    }
}
BulletRangeCollectionDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletRangeCollectionDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BulletRangeCollectionDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: BulletRangeCollectionDirective, selector: "ej-bulletchart>e-bullet-range-collection", queries: [{ propertyName: "children", predicate: BulletRangeDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletRangeCollectionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ej-bulletchart>e-bullet-range-collection',
                    queries: {
                        children: new ContentChildren(BulletRangeDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9idWxsZXQtY2hhcnQvcmFuZ2VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBSWhGLElBQUksS0FBSyxHQUFhLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM5RixJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7R0FPRztBQVNILE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxXQUFpQztJQW9EdkUsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUVqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOztpSEF6RFEsb0JBQW9CO3FHQUFwQixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFSaEMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsMENBQTBDO29CQUNwRCxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7O0FBNkREOzs7R0FHRztBQU9ILE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxTQUF5QztJQUN6RjtRQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQixDQUFDOzsySEFIUSw4QkFBOEI7K0dBQTlCLDhCQUE4Qix5R0FITCxvQkFBb0I7MkZBRzdDLDhCQUE4QjtrQkFOMUMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsMENBQTBDO29CQUNwRCxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLG9CQUFvQixDQUFDO3FCQUN0RDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnY29sb3InLCAnZW5kJywgJ2luZGV4JywgJ2xlZ2VuZEltYWdlVXJsJywgJ25hbWUnLCAnb3BhY2l0eScsICdzaGFwZSddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqIEJ1bGxldFJhbmdlIERpcmVjdGl2ZVxuICogYGBgaHRtbFxuICogPGUtYnVsbGV0LXJhbmdlLWNvbGxlY3Rpb24+XG4gKiA8ZS1idWxsZXQtcmFuZ2U+PC9lLWJ1bGxldC1yYW5nZT5cbiAqIDwvZS1idWxsZXQtcmFuZ2UtY29sbGVjdGlvbj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2UtYnVsbGV0LXJhbmdlLWNvbGxlY3Rpb24+ZS1idWxsZXQtcmFuZ2UnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBCdWxsZXRSYW5nZURpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPEJ1bGxldFJhbmdlRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBmb3IgcXVhbGl0YXRpdmUgcmFuZ2UgQ29sb3IuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBjb2xvcjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGZvciBxdWFsaXRhdGl2ZSByYW5nZSBlbmQgdmFsdWUuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBlbmQ6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBmb3IgcXVhbGl0YXRpdmUgcmFuZ2UgQ29sb3IuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBpbmRleDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgVVJMIGZvciB0aGUgSW1hZ2UgdGhhdCBpcyB0byBiZSBkaXNwbGF5ZWQgYXMgYSBMZWdlbmQgaWNvbi4gIEl0IHJlcXVpcmVzICBgbGVnZW5kU2hhcGVgIHZhbHVlIHRvIGJlIGFuIGBJbWFnZWAuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgbGVnZW5kSW1hZ2VVcmw6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmYXVsdCB2YWx1ZSBmb3IgcXVhbGl0YXRpdmUgcmFuZ2UgbmFtZS5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IGFueTtcbiAgICAvKiogXG4gICAgICogUmFuZ2Ugb3BhY2l0eVxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cbiAgICBwdWJsaWMgb3BhY2l0eTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgc2hhcGUgb2YgdGhlIGxlZ2VuZC4gRWFjaCByYW5nZXMgaGFzIGl0cyBvd24gbGVnZW5kIHNoYXBlLiBUaGV5IGFyZSwgXG4gICAgICogKiBDaXJjbGUgXG4gICAgICogKiBSZWN0YW5nbGUgXG4gICAgICogKiBUcmlhbmdsZSBcbiAgICAgKiAqIERpYW1vbmQgXG4gICAgICogKiBDcm9zcyBcbiAgICAgKiAqIEhvcml6b250YWxMaW5lIFxuICAgICAqICogVmVydGljYWxMaW5lIFxuICAgICAqICogUGVudGFnb24gXG4gICAgICogKiBJbnZlcnRlZFRyaWFuZ2xlIFxuICAgICAqICogU2VyaWVzVHlwZSBcbiAgICAgKiAqIEltYWdlXG4gICAgICogQGRlZmF1bHQgJ1JlY3RhbmdsZSdcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hhcGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEJ1bGxldFJhbmdlIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlai1idWxsZXRjaGFydD5lLWJ1bGxldC1yYW5nZS1jb2xsZWN0aW9uJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKEJ1bGxldFJhbmdlRGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIEJ1bGxldFJhbmdlQ29sbGVjdGlvbkRpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxCdWxsZXRSYW5nZUNvbGxlY3Rpb25EaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3JhbmdlcycpO1xuICAgIH1cbn0iXX0=