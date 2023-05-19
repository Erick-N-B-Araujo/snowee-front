import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['background', 'border', 'date', 'description', 'placeAt', 'seriesIndexes', 'showOnSeries', 'text', 'textStyle', 'type'];
let outputs = [];
/**
 * StockEvents
 * ```html
 * <e-stockchart-stockevents>
 * <e-stockchart-stockevent></e-stockchart-stockevent>
 * </e-stockchart-stockevents>
 * ```
 */
export class StockEventDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
StockEventDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockEventDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
StockEventDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockEventDirective, selector: "e-stockchart-indicators>e-stockchart-stockevent", inputs: { background: "background", border: "border", date: "date", description: "description", placeAt: "placeAt", seriesIndexes: "seriesIndexes", showOnSeries: "showOnSeries", text: "text", textStyle: "textStyle", type: "type" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockEventDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-stockchart-indicators>e-stockchart-stockevent',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * StockEvent Array Directive
 * @private
 */
export class StockEventsDirective extends ArrayBase {
    constructor() {
        super('stockevents');
    }
}
StockEventsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockEventsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StockEventsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: StockEventsDirective, selector: "ejs-stockchart>e-stockchart-stockevents", queries: [{ propertyName: "children", predicate: StockEventDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockEventsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-stockchart>e-stockchart-stockevents',
                    queries: {
                        children: new ContentChildren(StockEventDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2tldmVudHMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N0b2NrLWNoYXJ0L3N0b2NrZXZlbnRzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBSWhGLElBQUksS0FBSyxHQUFhLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0ksSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBQzNCOzs7Ozs7O0dBT0c7QUFTSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsV0FBZ0M7SUFtRXJFLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7Z0hBeEVRLG1CQUFtQjtvR0FBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBUi9CLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGlEQUFpRDtvQkFDM0QsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQTRFRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsU0FBK0I7SUFDckU7UUFDSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7aUhBSFEsb0JBQW9CO3FHQUFwQixvQkFBb0Isd0dBSEssbUJBQW1COzJGQUc1QyxvQkFBb0I7a0JBTmhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHlDQUF5QztvQkFDbkQsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQztxQkFDckQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2JhY2tncm91bmQnLCAnYm9yZGVyJywgJ2RhdGUnLCAnZGVzY3JpcHRpb24nLCAncGxhY2VBdCcsICdzZXJpZXNJbmRleGVzJywgJ3Nob3dPblNlcmllcycsICd0ZXh0JywgJ3RleHRTdHlsZScsICd0eXBlJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogU3RvY2tFdmVudHNcbiAqIGBgYGh0bWxcbiAqIDxlLXN0b2NrY2hhcnQtc3RvY2tldmVudHM+XG4gKiA8ZS1zdG9ja2NoYXJ0LXN0b2NrZXZlbnQ+PC9lLXN0b2NrY2hhcnQtc3RvY2tldmVudD5cbiAqIDwvZS1zdG9ja2NoYXJ0LXN0b2NrZXZlbnRzPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZS1zdG9ja2NoYXJ0LWluZGljYXRvcnM+ZS1zdG9ja2NoYXJ0LXN0b2NrZXZlbnQnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBTdG9ja0V2ZW50RGlyZWN0aXZlIGV4dGVuZHMgQ29tcGxleEJhc2U8U3RvY2tFdmVudERpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0eXBlIG9mIHN0b2NrIGV2ZW50cyBcbiAgICAgKiAqIENpcmNsZSBcbiAgICAgKiAqIFNxdWFyZSBcbiAgICAgKiAqIEZsYWcgXG4gICAgICogKiBUZXh0IFxuICAgICAqICogU2lnbiBcbiAgICAgKiAqIFRyaWFuZ2xlIFxuICAgICAqICogSW52ZXJ0ZWRUcmlhbmdsZSBcbiAgICAgKiAqIEFycm93VXAgXG4gICAgICogKiBBcnJvd0Rvd24gXG4gICAgICogKiBBcnJvd0xlZnQgXG4gICAgICogKiBBcnJvd1JpZ2h0XG4gICAgICogQGRlZmF1bHQgJ0NpcmNsZSdcbiAgICAgKi9cbiAgICBwdWJsaWMgdHlwZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgYmFja2dyb3VuZCBvZiB0aGUgc3RvY2sgZXZlbnQgdGhhdCBhY2NlcHRzIHZhbHVlIGluIGhleCBhbmQgcmdiYSBhcyBhIHZhbGlkIENTUyBjb2xvciBzdHJpbmcuXG4gICAgICogQGRlZmF1bHQgJ3RyYW5zcGFyZW50J1xuICAgICAqL1xuICAgIHB1YmxpYyBiYWNrZ3JvdW5kOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIE9wdGlvbnMgdG8gY3VzdG9taXplIHRoZSBib3JkZXIgb2YgdGhlIHN0b2NrIGV2ZW50cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYm9yZGVyOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERhdGUgdmFsdWUgb2Ygc3RvY2sgZXZlbnQgaW4gd2hpY2ggc3RvY2sgZXZlbnQgc2hvd3MuXG4gICAgICovXG4gICAgcHVibGljIGRhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBkZXNjcmlwdGlvbiBmb3IgdGhlIGNoYXJ0IHdoaWNoIHJlbmRlcnMgaW4gdG9vbHRpcCBmb3Igc3RvY2sgZXZlbnQuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIENvcnJlc3BvbmRpbmcgdmFsdWVzIGluIHdoaWNoIHN0b2NrIGV2ZW50IHBsYWNlZC4gXG4gICAgICogKiBDbG9zZSBcbiAgICAgKiAqIE9wZW4gXG4gICAgICogKiBIaWdoIFxuICAgICAqICogQ2xvc2VcbiAgICAgKiBAZGVmYXVsdCAnY2xvc2UnXG4gICAgICovXG4gICAgcHVibGljIHBsYWNlQXQ6IGFueTtcbiAgICAvKiogXG4gICAgICogVG8gcmVuZGVyIHN0b2NrIGV2ZW50cyBpbiBwYXJ0aWN1bGFyIHNlcmllcy4gXG4gICAgICogQnkgZGVmYXVsdCBzdG9jayBldmVudHMgd2lsbCByZW5kZXIgZm9yIGFsbCBzZXJpZXMuXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VyaWVzSW5kZXhlczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBFbmFibGVzIHRoZSBzdG9jayBldmVudHMgdG8gYmUgcmVuZGVyIG9uIHNlcmllcy4gSWYgaXQgZGlzYWJsZWQsIHN0b2NrIGV2ZW50IHJlbmRlcmVkIG9uIHByaW1hcnlYQXhpcy5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgcHVibGljIHNob3dPblNlcmllczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRleHQgZm9yIHRoZSBzdG9jayBjaGFydCB0ZXh0LlxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XG4gICAgLyoqIFxuICAgICAqIE9wdGlvbnMgdG8gY3VzdG9taXplIHRoZSBzdHlsZXMgZm9yIHN0b2NrIGV2ZW50cyB0ZXh0LlxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXh0U3R5bGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIFN0b2NrRXZlbnQgQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1zdG9ja2NoYXJ0PmUtc3RvY2tjaGFydC1zdG9ja2V2ZW50cycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihTdG9ja0V2ZW50RGlyZWN0aXZlKVxuICAgIH0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrRXZlbnRzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPFN0b2NrRXZlbnRzRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdzdG9ja2V2ZW50cycpO1xuICAgIH1cbn0iXX0=