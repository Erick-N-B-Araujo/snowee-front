import { __decorate } from "tslib";
import { Directive, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['content', 'cssClass', 'disabled', 'expanded', 'header', 'iconCss', 'id', 'visible'];
let outputs = [];
/**
 * 'e-accordionitem' directive represent a item of the Angular Accordion.
 * It must be contained in a Accordion component(`ejs-accordion`).
 * ```html
 * <ejs-accordion>
 *   <e-accordionitems>
 *    <e-accordionitem header='Header1'></e-accordionitem>
 *    <e-accordionitem header='Header2' content='Content2'></e-accordionitem>
 *   </e-accordionitems>
 * </ejs-accordion>
 * ```
 */
export class AccordionItemDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
AccordionItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionItemDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
AccordionItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AccordionItemDirective, selector: "e-accordionitems>e-accordionitem", inputs: { content: "content", cssClass: "cssClass", disabled: "disabled", expanded: "expanded", header: "header", iconCss: "iconCss", id: "id", visible: "visible" }, queries: [{ propertyName: "header", first: true, predicate: ["header"], descendants: true }, { propertyName: "content", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: i0 });
__decorate([
    Template()
], AccordionItemDirective.prototype, "header", void 0);
__decorate([
    Template()
], AccordionItemDirective.prototype, "content", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'e-accordionitems>e-accordionitem',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { header: [{
                type: ContentChild,
                args: ['header']
            }], content: [{
                type: ContentChild,
                args: ['content']
            }] } });
/**
 * AccordionItem Array Directive
 * @private
 */
export class AccordionItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
AccordionItemsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionItemsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AccordionItemsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: AccordionItemsDirective, selector: "ejs-accordion>e-accordionitems", queries: [{ propertyName: "children", predicate: AccordionItemDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionItemsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-accordion>e-accordionitems',
                    queries: {
                        children: new ContentChildren(AccordionItemDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FjY29yZGlvbi9pdGVtcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUd4RCxJQUFJLEtBQUssR0FBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUM1RyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7Ozs7O0dBV0c7QUFTSCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsV0FBbUM7SUEyRDNFLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7bUhBaEVRLHNCQUFzQjt1R0FBdEIsc0JBQXNCO0FBK0MvQjtJQURDLFFBQVEsRUFBRTtzREFDUTtBQVVuQjtJQURDLFFBQVEsRUFBRTt1REFDUzsyRkF6RFgsc0JBQXNCO2tCQVJsQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLE1BQU0sRUFBRSxLQUFLO29CQUNiLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsRUFFUjtpQkFDSjt1R0FnRFUsTUFBTTtzQkFGWixZQUFZO3VCQUFDLFFBQVE7Z0JBWWYsT0FBTztzQkFGYixZQUFZO3VCQUFDLFNBQVM7O0FBWTNCOzs7R0FHRztBQU9ILE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxTQUFrQztJQUMzRTtRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDOztvSEFIUSx1QkFBdUI7d0dBQXZCLHVCQUF1QiwrRkFIRSxzQkFBc0I7MkZBRy9DLHVCQUF1QjtrQkFObkMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQyxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLHNCQUFzQixDQUFDO3FCQUN4RDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBsZXhCYXNlLCBBcnJheUJhc2UsIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2NvbnRlbnQnLCAnY3NzQ2xhc3MnLCAnZGlzYWJsZWQnLCAnZXhwYW5kZWQnLCAnaGVhZGVyJywgJ2ljb25Dc3MnLCAnaWQnLCAndmlzaWJsZSddO1xubGV0IG91dHB1dHM6IHN0cmluZ1tdID0gW107XG4vKipcbiAqICdlLWFjY29yZGlvbml0ZW0nIGRpcmVjdGl2ZSByZXByZXNlbnQgYSBpdGVtIG9mIHRoZSBBbmd1bGFyIEFjY29yZGlvbi5cbiAqIEl0IG11c3QgYmUgY29udGFpbmVkIGluIGEgQWNjb3JkaW9uIGNvbXBvbmVudChgZWpzLWFjY29yZGlvbmApLiBcbiAqIGBgYGh0bWxcbiAqIDxlanMtYWNjb3JkaW9uPiBcbiAqICAgPGUtYWNjb3JkaW9uaXRlbXM+XG4gKiAgICA8ZS1hY2NvcmRpb25pdGVtIGhlYWRlcj0nSGVhZGVyMSc+PC9lLWFjY29yZGlvbml0ZW0+XG4gKiAgICA8ZS1hY2NvcmRpb25pdGVtIGhlYWRlcj0nSGVhZGVyMicgY29udGVudD0nQ29udGVudDInPjwvZS1hY2NvcmRpb25pdGVtPlxuICogICA8L2UtYWNjb3JkaW9uaXRlbXM+XG4gKiA8L2Vqcy1hY2NvcmRpb24+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlLWFjY29yZGlvbml0ZW1zPmUtYWNjb3JkaW9uaXRlbScsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkl0ZW1EaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxBY2NvcmRpb25JdGVtRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogRGVmaW5lcyBzaW5nbGUvbXVsdGlwbGUgY2xhc3NlcyAoc2VwYXJhdGVkIGJ5IGEgc3BhY2UpIGFyZSB0byBiZSB1c2VkIGZvciBBY2NvcmRpb24gaXRlbSBjdXN0b21pemF0aW9uLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgY3NzQ2xhc3M6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyB0cnVlIHRvIGRpc2FibGUgYW4gYWNjb3JkaW9uIGl0ZW0uXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZGlzYWJsZWQ6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyB0aGUgZXhwYW5kICh0cnVlKSBvciBjb2xsYXBzZSAoZmFsc2UpIHN0YXRlIG9mIHRoZSBBY2NvcmRpb24gaXRlbS4gQnkgZGVmYXVsdCwgYWxsIHRoZSBpdGVtcyBhcmUgaW4gYSBjb2xsYXBzZWQgc3RhdGUuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZXhwYW5kZWQ6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyBhbiBpY29uIHdpdGggdGhlIGdpdmVuIGN1c3RvbSBDU1MgY2xhc3MgdGhhdCBpcyB0byBiZSByZW5kZXJlZCBiZWZvcmUgdGhlIGhlYWRlciB0ZXh0LiBcbiAgICAgKiBBZGQgdGhlIGNzcyBjbGFzc2VzIHRvIHRoZSBgaWNvbkNzc2AgcHJvcGVydHkgYW5kIHdyaXRlIHRoZSBjc3Mgc3R5bGVzIHRvIHRoZSBkZWZpbmVkIGNsYXNzIHRvIHNldCBpbWFnZXMvaWNvbnMuIFxuICAgICAqIEFkZGluZyBpY29uIGlzIGFwcGxpY2FibGUgb25seSB0byB0aGUgaGVhZGVyLiBcbiAgICAgKiBcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIGljb25Dc3M6IGFueTtcbiAgICAvKiogXG4gICAgICogU2V0cyB1bmlxdWUgSUQgdG8gYWNjb3JkaW9uIGl0ZW0uXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBpZDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTZXRzIGZhbHNlIHRvIGhpZGUgYW4gYWNjb3JkaW9uIGl0ZW0uXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHB1YmxpYyB2aXNpYmxlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgdGhlIGhlYWRlciB0ZXh0IHRvIGJlIGRpc3BsYXllZCBmb3IgdGhlIEFjY29yZGlvbiBpdGVtLiBcbiAgICAgKiBZb3UgY2FuIHNldCB0aGUgdGl0bGUgb2YgdGhlIEFjY29yZGlvbiBpdGVtIHVzaW5nIGBoZWFkZXJgIHByb3BlcnR5LiBcbiAgICAgKiBJdCBhbHNvIHN1cHBvcnRzIHRvIGluY2x1ZGUgdGhlIHRpdGxlIGFzIGBIVE1MIGVsZW1lbnRgLCBgc3RyaW5nYCwgb3IgYHF1ZXJ5IHNlbGVjdG9yYC4gXG4gICAgICogXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2hlYWRlcicpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgaGVhZGVyOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNldHMgdGhlIHRleHQgY29udGVudCB0byBiZSBkaXNwbGF5ZWQgZm9yIHRoZSBBY2NvcmRpb24gaXRlbS4gXG4gICAgICogWW91IGNhbiBzZXQgdGhlIGNvbnRlbnQgb2YgdGhlIEFjY29yZGlvbiBpdGVtIHVzaW5nIGBjb250ZW50YCBwcm9wZXJ0eS4gXG4gICAgICogSXQgYWxzbyBzdXBwb3J0cyB0byBpbmNsdWRlIHRoZSB0aXRsZSBhcyBgSFRNTCBlbGVtZW50YCwgYHN0cmluZ2AsIG9yIGBxdWVyeSBzZWxlY3RvcmAuIFxuICAgICAqIFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdjb250ZW50JylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBjb250ZW50OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBBY2NvcmRpb25JdGVtIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtYWNjb3JkaW9uPmUtYWNjb3JkaW9uaXRlbXMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oQWNjb3JkaW9uSXRlbURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25JdGVtc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxBY2NvcmRpb25JdGVtc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignaXRlbXMnKTtcbiAgICB9XG59Il19