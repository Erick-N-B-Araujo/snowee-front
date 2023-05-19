import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { AggregateColumnsDirective } from './aggregate-columns.directive';
import * as i0 from "@angular/core";
let input = ['columns'];
let outputs = [];
/**
 * `e-aggregate` directive represent a aggregate row of the Angular Grid.
 * It must be contained in a Grid component(`ejs-grid`).
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'></e-column>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-grid>
 * ```
 */
export class AggregateDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        this.tags = ['columns'];
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
AggregateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregateDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AggregateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AggregateDirective, selector: "ejs-grid>e-aggregates>e-aggregate", inputs: { columns: "columns" }, queries: [{ propertyName: "childColumns", first: true, predicate: AggregateColumnsDirective, descendants: true }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-grid>e-aggregates>e-aggregate',
                    inputs: input,
                    outputs: outputs,
                    queries: {
                        childColumns: new ContentChild(AggregateColumnsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Aggregate Array Directive
 * @private
 */
export class AggregatesDirective extends ArrayBase {
    constructor() {
        super('aggregates');
    }
}
AggregatesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregatesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AggregatesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AggregatesDirective, selector: "ejs-grid>e-aggregates", queries: [{ propertyName: "children", predicate: AggregateDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AggregatesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-grid>e-aggregates',
                    queries: {
                        children: new ContentChildren(AggregateDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZ3JpZC9hZ2dyZWdhdGVzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUUxRSxJQUFJLEtBQUssR0FBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xDLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUMzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHO0FBU0gsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFdBQStCO0lBV25FLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFQOUMsU0FBSSxHQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFTaEMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7K0dBaEJRLGtCQUFrQjttR0FBbEIsa0JBQWtCLG1KQUhRLHlCQUF5QjsyRkFHbkQsa0JBQWtCO2tCQVI5QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUU7d0JBQ0wsWUFBWSxFQUFFLElBQUksWUFBWSxDQUFDLHlCQUF5QixDQUFDO3FCQUM1RDtpQkFDSjs7QUFvQkQ7OztHQUdHO0FBT0gsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFNBQThCO0lBQ25FO1FBQ0ksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O2dIQUhRLG1CQUFtQjtvR0FBbkIsbUJBQW1CLHNGQUhNLGtCQUFrQjsyRkFHM0MsbUJBQW1CO2tCQU4vQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLE9BQU8sRUFBRTt3QkFDTCxRQUFRLEVBQUUsSUFBSSxlQUFlLENBQUMsa0JBQWtCLENBQUM7cUJBQ3BEO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBDb250ZW50Q2hpbGRyZW4sIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlQ29sdW1uc0RpcmVjdGl2ZSB9IGZyb20gJy4vYWdncmVnYXRlLWNvbHVtbnMuZGlyZWN0aXZlJztcblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnY29sdW1ucyddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqIGBlLWFnZ3JlZ2F0ZWAgZGlyZWN0aXZlIHJlcHJlc2VudCBhIGFnZ3JlZ2F0ZSByb3cgb2YgdGhlIEFuZ3VsYXIgR3JpZC4gXG4gKiBJdCBtdXN0IGJlIGNvbnRhaW5lZCBpbiBhIEdyaWQgY29tcG9uZW50KGBlanMtZ3JpZGApLiBcbiAqIGBgYGh0bWxcbiAqIDxlanMtZ3JpZCBbZGF0YVNvdXJjZV09J2RhdGEnIGFsbG93UGFnaW5nPSd0cnVlJyBhbGxvd1NvcnRpbmc9J3RydWUnPiBcbiAqICAgPGUtY29sdW1ucz5cbiAqICAgICA8ZS1jb2x1bW4gZmllbGQ9J0lEJyB3aWR0aD0nMTAwJz48L2UtY29sdW1uPlxuICogICAgIDxlLWNvbHVtbiBmaWVsZD0nbmFtZScgaGVhZGVyVGV4dD0nTmFtZScgd2lkdGg9JzEwMCc+PC9lLWNvbHVtbj5cbiAqICAgPC9lLWNvbHVtbnM+XG4gKiAgIDxlLWFnZ3JlZ2F0ZXM+XG4gKiAgICAgPGUtYWdncmVnYXRlPlxuICogICAgICAgPGUtY29sdW1ucz5cbiAqICAgICAgICAgPGUtY29sdW1uIGZpZWxkPSdJRCcgdHlwZT0nTWluJz48L2UtY29sdW1uPlxuICogICAgICAgPC9lLWNvbHVtbnM+XG4gKiAgICAgIDwvZS1hZ2dyZWdhdGU+XG4gKiAgICA8L2UtYWdncmVnYXRlcz5cbiAqIDwvZWpzLWdyaWQ+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtZ3JpZD5lLWFnZ3JlZ2F0ZXM+ZS1hZ2dyZWdhdGUnLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZENvbHVtbnM6IG5ldyBDb250ZW50Q2hpbGQoQWdncmVnYXRlQ29sdW1uc0RpcmVjdGl2ZSlcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0ZURpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPEFnZ3JlZ2F0ZURpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcbiAgICBwdWJsaWMgY2hpbGRDb2x1bW5zOiBhbnk7XG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdID0gWydjb2x1bW5zJ107XG4gICAgLyoqIFxuICAgICAqIENvbmZpZ3VyZXMgdGhlIGFnZ3JlZ2F0ZSBjb2x1bW5zLlxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG4gICAgcHVibGljIGNvbHVtbnM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEFnZ3JlZ2F0ZSBBcnJheSBEaXJlY3RpdmVcbiAqIEBwcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWdyaWQ+ZS1hZ2dyZWdhdGVzJyxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkcmVuOiBuZXcgQ29udGVudENoaWxkcmVuKEFnZ3JlZ2F0ZURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdGVzRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPEFnZ3JlZ2F0ZXNEaXJlY3RpdmU+IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2FnZ3JlZ2F0ZXMnKTtcbiAgICB9XG59Il19