import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['disabled', 'iconCss', 'text', 'url'];
let outputs = [];
/**
 * `e-breadcrumb-item` directive represent a item of the Angular Breadcrumb.
 * It must be contained in a Breadcrumb component(`ejs-breadcrumb`).
 * ```html
 * <ejs-breadcrumb>
 *   <e-breadcrumb-items>
 *    <e-breadcrumb-item text='Home' url='/'></e-breadcrumb-item>
 *    <e-breadcrumb-item text='Index' url='./index'></e-breadcrumb-item>
 *   </e-breadcrumb-items>
 * </ejs-breadcrumb>
 * ```
 */
export class BreadcrumbItemDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
BreadcrumbItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BreadcrumbItemDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
BreadcrumbItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: BreadcrumbItemDirective, selector: "ejs-breadcrumb>e-breadcrumb-items>e-breadcrumb-item", inputs: { disabled: "disabled", iconCss: "iconCss", text: "text", url: "url" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BreadcrumbItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-breadcrumb>e-breadcrumb-items>e-breadcrumb-item',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * BreadcrumbItem Array Directive
 * @private
 */
export class BreadcrumbItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
BreadcrumbItemsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BreadcrumbItemsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
BreadcrumbItemsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: BreadcrumbItemsDirective, selector: "ejs-breadcrumb>e-breadcrumb-items", queries: [{ propertyName: "children", predicate: BreadcrumbItemDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BreadcrumbItemsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-breadcrumb>e-breadcrumb-items',
                    queries: {
                        children: new ContentChildren(BreadcrumbItemDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2JyZWFkY3J1bWIvaXRlbXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJaEYsSUFBSSxLQUFLLEdBQWEsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM3RCxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7Ozs7O0dBV0c7QUFTSCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsV0FBb0M7SUEwQjdFLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7b0hBL0JRLHVCQUF1Qjt3R0FBdkIsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBUm5DLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHFEQUFxRDtvQkFDL0QsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQW1DRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsU0FBbUM7SUFDN0U7UUFDSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7cUhBSFEsd0JBQXdCO3lHQUF4Qix3QkFBd0Isa0dBSEMsdUJBQXVCOzJGQUdoRCx3QkFBd0I7a0JBTnBDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQztxQkFDekQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2Rpc2FibGVkJywgJ2ljb25Dc3MnLCAndGV4dCcsICd1cmwnXTtcbmxldCBvdXRwdXRzOiBzdHJpbmdbXSA9IFtdO1xuLyoqXG4gKiBgZS1icmVhZGNydW1iLWl0ZW1gIGRpcmVjdGl2ZSByZXByZXNlbnQgYSBpdGVtIG9mIHRoZSBBbmd1bGFyIEJyZWFkY3J1bWIuXG4gKiBJdCBtdXN0IGJlIGNvbnRhaW5lZCBpbiBhIEJyZWFkY3J1bWIgY29tcG9uZW50KGBlanMtYnJlYWRjcnVtYmApLlxuICogYGBgaHRtbFxuICogPGVqcy1icmVhZGNydW1iPlxuICogICA8ZS1icmVhZGNydW1iLWl0ZW1zPlxuICogICAgPGUtYnJlYWRjcnVtYi1pdGVtIHRleHQ9J0hvbWUnIHVybD0nLyc+PC9lLWJyZWFkY3J1bWItaXRlbT5cbiAqICAgIDxlLWJyZWFkY3J1bWItaXRlbSB0ZXh0PSdJbmRleCcgdXJsPScuL2luZGV4Jz48L2UtYnJlYWRjcnVtYi1pdGVtPlxuICogICA8L2UtYnJlYWRjcnVtYi1pdGVtcz5cbiAqIDwvZWpzLWJyZWFkY3J1bWI+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtYnJlYWRjcnVtYj5lLWJyZWFkY3J1bWItaXRlbXM+ZS1icmVhZGNydW1iLWl0ZW0nLFxuICAgIGlucHV0czogaW5wdXQsXG4gICAgb3V0cHV0czogb3V0cHV0cywgICAgXG4gICAgcXVlcmllczoge1xuXG4gICAgfVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iSXRlbURpcmVjdGl2ZSBleHRlbmRzIENvbXBsZXhCYXNlPEJyZWFkY3J1bWJJdGVtRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogRW5hYmxlIG9yIGRpc2FibGUgdGhlIGJyZWFkY3J1bWIgaXRlbSwgd2hlbiBzZXQgdG8gdHJ1ZSwgdGhlIGJyZWFkY3J1bWIgaXRlbSB3aWxsIGJlIGRpc2FibGVkLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIGRpc2FibGVkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgYSBjbGFzcy9tdWx0aXBsZSBjbGFzc2VzIHNlcGFyYXRlZCBieSBhIHNwYWNlIGZvciB0aGUgaXRlbSB0aGF0IGlzIHVzZWQgdG8gaW5jbHVkZSBhbiBpY29uLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgaWNvbkNzczogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgQnJlYWRjcnVtYiBpdGVtLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIHRleHQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBVcmwgb2YgdGhlIEJyZWFkY3J1bWIgaXRlbSB0aGF0IHdpbGwgYmUgYWN0aXZhdGVkIHdoZW4gY2xpY2tlZC5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyB1cmw6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZVByb3BMaXN0ID0gaW5wdXQ7XG4gICAgfVxufVxuXG4vKipcbiAqIEJyZWFkY3J1bWJJdGVtIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtYnJlYWRjcnVtYj5lLWJyZWFkY3J1bWItaXRlbXMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oQnJlYWRjcnVtYkl0ZW1EaXJlY3RpdmUpXG4gICAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYkl0ZW1zRGlyZWN0aXZlIGV4dGVuZHMgQXJyYXlCYXNlPEJyZWFkY3J1bWJJdGVtc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignaXRlbXMnKTtcbiAgICB9XG59Il19