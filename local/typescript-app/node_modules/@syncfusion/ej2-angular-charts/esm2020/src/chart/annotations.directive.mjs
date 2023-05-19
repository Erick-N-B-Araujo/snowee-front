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
 * <e-annotations><e-annotation></e-annotation><e-annotations>
 * ```
 */
export class AnnotationDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
AnnotationDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AnnotationDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AnnotationDirective, selector: "e-annotations>e-annotation", inputs: { content: "content", coordinateUnits: "coordinateUnits", description: "description", horizontalAlignment: "horizontalAlignment", region: "region", verticalAlignment: "verticalAlignment", x: "x", xAxisName: "xAxisName", y: "y", yAxisName: "yAxisName" }, queries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], AnnotationDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-annotations>e-annotation',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * Annotation Array Directive
 * @private
 */
export class AnnotationsDirective extends ArrayBase {
    constructor() {
        super('annotations');
    }
}
AnnotationsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AnnotationsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AnnotationsDirective, selector: "ejs-chart>e-annotations", queries: [{ propertyName: "children", predicate: AnnotationDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AnnotationsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-chart>e-annotations',
                    queries: {
                        children: new ContentChildren(AnnotationDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NoYXJ0L2Fubm90YXRpb25zLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0IsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBR3hELElBQUksS0FBSyxHQUFhLENBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDOUosSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7OztHQUtHO0FBU0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFdBQWdDO0lBMkVyRSxZQUFvQixnQkFBaUM7UUFDakQsS0FBSyxFQUFFLENBQUM7UUFEUSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBRWpELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7O2dIQWhGUSxtQkFBbUI7b0dBQW5CLG1CQUFtQjtBQXlFNUI7SUFEQyxRQUFRLEVBQUU7b0RBQ1M7MkZBekVYLG1CQUFtQjtrQkFSL0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7dUdBMEVVLE9BQU87c0JBRmIsWUFBWTt1QkFBQyxTQUFTOztBQVkzQjs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsU0FBK0I7SUFDckU7UUFDSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7aUhBSFEsb0JBQW9CO3FHQUFwQixvQkFBb0Isd0ZBSEssbUJBQW1COzJGQUc1QyxvQkFBb0I7a0JBTmhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQztxQkFDckQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5sZXQgaW5wdXQ6IHN0cmluZ1tdID0gWydjb250ZW50JywgJ2Nvb3JkaW5hdGVVbml0cycsICdkZXNjcmlwdGlvbicsICdob3Jpem9udGFsQWxpZ25tZW50JywgJ3JlZ2lvbicsICd2ZXJ0aWNhbEFsaWdubWVudCcsICd4JywgJ3hBeGlzTmFtZScsICd5JywgJ3lBeGlzTmFtZSddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqIEFubm90YXRpb24gRGlyZWN0aXZlXG4gKiBgYGBodG1sXG4gKiA8ZS1hbm5vdGF0aW9ucz48ZS1hbm5vdGF0aW9uPjwvZS1hbm5vdGF0aW9uPjxlLWFubm90YXRpb25zPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1hbm5vdGF0aW9ucz5lLWFubm90YXRpb24nLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uRGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8QW5ub3RhdGlvbkRpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgY29vcmRpbmF0ZSB1bml0cyBvZiB0aGUgYW5ub3RhdGlvbi4gVGhleSBhcmUgXG4gICAgICogKiBQaXhlbCAtIEFubm90YXRpb24gcmVuZGVycyBiYXNlZCBvbiB4IGFuZCB5IHBpeGVsIHZhbHVlLiBcbiAgICAgKiAqIFBvaW50IC0gQW5ub3RhdGlvbiByZW5kZXJzIGJhc2VkIG9uIHggYW5kIHkgYXhpcyB2YWx1ZS5cbiAgICAgKiBAZGVmYXVsdCAnUGl4ZWwnXG4gICAgICovXG4gICAgcHVibGljIGNvb3JkaW5hdGVVbml0czogYW55O1xuICAgIC8qKiBcbiAgICAgKiBJbmZvcm1hdGlvbiBhYm91dCBhbm5vdGF0aW9uIGZvciBhc3Npc3RpdmUgdGVjaG5vbG9neS5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgYWxpZ25tZW50IG9mIHRoZSBhbm5vdGF0aW9uLiBUaGV5IGFyZSBcbiAgICAgKiAqIE5lYXIgLSBBbGlnbiB0aGUgYW5ub3RhdGlvbiBlbGVtZW50IGFzIGxlZnQgc2lkZS4gXG4gICAgICogKiBGYXIgLSBBbGlnbiB0aGUgYW5ub3RhdGlvbiBlbGVtZW50IGFzIHJpZ2h0IHNpZGUuIFxuICAgICAqICogQ2VudGVyIC0gQWxpZ24gdGhlIGFubm90YXRpb24gZWxlbWVudCBhcyBtaWQgcG9pbnQuXG4gICAgICogQGRlZmF1bHQgJ0NlbnRlcidcbiAgICAgKiBAZGVwcmVjYXRlZCBcbiAgICAgKi9cbiAgICBwdWJsaWMgaG9yaXpvbnRhbEFsaWdubWVudDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHJlZ2lvbnMgb2YgdGhlIGFubm90YXRpb24uIFRoZXkgYXJlIFxuICAgICAqICogQ2hhcnQgLSBBbm5vdGF0aW9uIHJlbmRlcnMgYmFzZWQgb24gY2hhcnQgY29vcmRpbmF0ZXMuIFxuICAgICAqICogU2VyaWVzIC0gQW5ub3RhdGlvbiByZW5kZXJzIGJhc2VkIG9uIHNlcmllcyBjb29yZGluYXRlcy5cbiAgICAgKiBAZGVmYXVsdCAnQ2hhcnQnXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lvbjogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBhbm5vdGF0aW9uLiBUaGV5IGFyZSBcbiAgICAgKiAqIFRvcCAtIEFsaWduIHRoZSBhbm5vdGF0aW9uIGVsZW1lbnQgYXMgdG9wIHNpZGUuIFxuICAgICAqICogQm90dG9tIC0gQWxpZ24gdGhlIGFubm90YXRpb24gZWxlbWVudCBhcyBib3R0b20gc2lkZS4gXG4gICAgICogKiBNaWRkbGUgLSBBbGlnbiB0aGUgYW5ub3RhdGlvbiBlbGVtZW50IGFzIG1pZCBwb2ludC5cbiAgICAgKiBAZGVmYXVsdCAnTWlkZGxlJ1xuICAgICAqIEBkZXByZWNhdGVkIFxuICAgICAqL1xuICAgIHB1YmxpYyB2ZXJ0aWNhbEFsaWdubWVudDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBpZiBzZXQgY29vcmRpbmF0ZVVuaXQgYXMgYFBpeGVsYCBYIHNwZWNpZmllcyB0aGUgYXhpcyB2YWx1ZSBcbiAgICAgKiBlbHNlIGlzIHNwZWNpZmllcyBwaXhlbCBvciBwZXJjZW50YWdlIG9mIGNvb3JkaW5hdGVcbiAgICAgKiBAZGVmYXVsdCAnMCdcbiAgICAgKiBAYXNwdHlwZSBvYmplY3RcbiAgICAgKi9cbiAgICBwdWJsaWMgeDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgbmFtZSBvZiBob3Jpem9udGFsIGF4aXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBhbm5vdGF0aW9uLiBcbiAgICAgKiBJdCByZXF1aXJlcyBgYXhlc2Agb2YgY2hhcnQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyB4QXhpc05hbWU6IGFueTtcbiAgICAvKiogXG4gICAgICogaWYgc2V0IGNvb3JkaW5hdGVVbml0IGFzIGBQaXhlbGAgWSBzcGVjaWZpZXMgdGhlIGF4aXMgdmFsdWUgXG4gICAgICogZWxzZSBpcyBzcGVjaWZpZXMgcGl4ZWwgb3IgcGVyY2VudGFnZSBvZiBjb29yZGluYXRlXG4gICAgICogQGRlZmF1bHQgJzAnXG4gICAgICovXG4gICAgcHVibGljIHk6IGFueTtcbiAgICAvKiogXG4gICAgICogVGhlIG5hbWUgb2YgdmVydGljYWwgYXhpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGFubm90YXRpb24uIFxuICAgICAqIEl0IHJlcXVpcmVzIGBheGVzYCBvZiBjaGFydC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIHlBeGlzTmFtZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBDb250ZW50IG9mIHRoZSBhbm5vdGF0aW9uLCB3aGljaCBhY2NlcHRzIHRoZSBpZCBvZiB0aGUgY3VzdG9tIGVsZW1lbnQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2NvbnRlbnQnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGNvbnRlbnQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEFubm90YXRpb24gQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1jaGFydD5lLWFubm90YXRpb25zJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKEFubm90YXRpb25EaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbnNEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8QW5ub3RhdGlvbnNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Fubm90YXRpb25zJyk7XG4gICAgfVxufSJdfQ==