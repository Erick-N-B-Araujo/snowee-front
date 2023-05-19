import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['iconCss', 'id', 'items', 'separator', 'text', 'url'];
let outputs = [];
export class MenuItemDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
MenuItemDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MenuItemDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
MenuItemDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: MenuItemDirective, selector: "ejs-menu>e-menu-items>e-menu-item>", inputs: { iconCss: "iconCss", id: "id", items: "items", separator: "separator", text: "text", url: "url" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MenuItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-menu>e-menu-items>e-menu-item>',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * MenuItem Array Directive
 * @private
 */
export class MenuItemsDirective extends ArrayBase {
    constructor() {
        super('items');
    }
}
MenuItemsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MenuItemsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MenuItemsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: MenuItemsDirective, selector: "ejs-menu>e-menu-items", queries: [{ propertyName: "children", predicate: MenuItemDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MenuItemsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-menu>e-menu-items',
                    queries: {
                        children: new ContentChildren(MenuItemDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21lbnUvaXRlbXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJaEYsSUFBSSxLQUFLLEdBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzdFLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztBQVUzQixNQUFNLE9BQU8saUJBQWtCLFNBQVEsV0FBOEI7SUFxQ2pFLFlBQW9CLGdCQUFpQztRQUNqRCxLQUFLLEVBQUUsQ0FBQztRQURRLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFFakQsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQzs7OEdBMUNRLGlCQUFpQjtrR0FBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBUjdCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLG9DQUFvQztvQkFDOUMsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxFQUVSO2lCQUNKOztBQThDRDs7O0dBR0c7QUFPSCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsU0FBNkI7SUFDakU7UUFDSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7K0dBSFEsa0JBQWtCO21HQUFsQixrQkFBa0Isc0ZBSE8saUJBQWlCOzJGQUcxQyxrQkFBa0I7a0JBTjlCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsT0FBTyxFQUFFO3dCQUNMLFFBQVEsRUFBRSxJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztxQkFDbkQ7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFZpZXdDb250YWluZXJSZWYsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGxleEJhc2UsIEFycmF5QmFzZSwgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcblxuXG5cbmxldCBpbnB1dDogc3RyaW5nW10gPSBbJ2ljb25Dc3MnLCAnaWQnLCAnaXRlbXMnLCAnc2VwYXJhdG9yJywgJ3RleHQnLCAndXJsJ107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtbWVudT5lLW1lbnUtaXRlbXM+ZS1tZW51LWl0ZW0+JyxcbiAgICBpbnB1dHM6IGlucHV0LFxuICAgIG91dHB1dHM6IG91dHB1dHMsICAgIFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgTWVudUl0ZW1EaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxNZW51SXRlbURpcmVjdGl2ZT4ge1xuICAgIHB1YmxpYyBkaXJlY3RpdmVQcm9wTGlzdDogYW55O1xuXHRcblxuXG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgY2xhc3MvbXVsdGlwbGUgY2xhc3NlcyBzZXBhcmF0ZWQgYnkgYSBzcGFjZSBmb3IgdGhlIG1lbnUgSXRlbSB0aGF0IGlzIHVzZWQgdG8gaW5jbHVkZSBhbiBpY29uLiBcbiAgICAgKiBNZW51IEl0ZW0gY2FuIGluY2x1ZGUgZm9udCBpY29uIGFuZCBzcHJpdGUgaW1hZ2UuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBpY29uQ3NzOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgaWQgZm9yIG1lbnUgaXRlbS5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyBpZDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHN1YiBtZW51IGl0ZW1zIHRoYXQgaXMgdGhlIGFycmF5IG9mIE1lbnVJdGVtIG1vZGVsLlxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG4gICAgcHVibGljIGl0ZW1zOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyBzZXBhcmF0b3IgYmV0d2VlbiB0aGUgbWVudSBpdGVtcy4gU2VwYXJhdG9yIGFyZSBlaXRoZXIgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBsaW5lcyB1c2VkIHRvIGdyb3VwIG1lbnUgaXRlbXMuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VwYXJhdG9yOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0ZXh0IGZvciBtZW51IGl0ZW0uXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgdGV4dDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdXJsIGZvciBtZW51IGl0ZW0gdGhhdCBjcmVhdGVzIHRoZSBhbmNob3IgbGluayB0byBuYXZpZ2F0ZSB0byB0aGUgdXJsIHByb3ZpZGVkLlxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICovXG4gICAgcHVibGljIHVybDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlUHJvcExpc3QgPSBpbnB1dDtcbiAgICB9XG59XG5cbi8qKlxuICogTWVudUl0ZW0gQXJyYXkgRGlyZWN0aXZlXG4gKiBAcHJpdmF0ZVxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1tZW51PmUtbWVudS1pdGVtcycsXG4gICAgcXVlcmllczoge1xuICAgICAgICBjaGlsZHJlbjogbmV3IENvbnRlbnRDaGlsZHJlbihNZW51SXRlbURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNZW51SXRlbXNEaXJlY3RpdmUgZXh0ZW5kcyBBcnJheUJhc2U8TWVudUl0ZW1zRGlyZWN0aXZlPiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdpdGVtcycpO1xuICAgIH1cbn0iXX0=