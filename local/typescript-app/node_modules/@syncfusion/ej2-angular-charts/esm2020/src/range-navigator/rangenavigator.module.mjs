import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionDirective } from './series.directive';
import { RangeNavigatorComponent } from './rangenavigator.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the RangeNavigator component.
 */
export class RangeNavigatorModule {
}
RangeNavigatorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RangeNavigatorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorModule, declarations: [RangeNavigatorComponent,
        RangenavigatorSeriesDirective,
        RangenavigatorSeriesCollectionDirective], imports: [CommonModule], exports: [RangeNavigatorComponent,
        RangenavigatorSeriesDirective,
        RangenavigatorSeriesCollectionDirective] });
RangeNavigatorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        RangeNavigatorComponent,
                        RangenavigatorSeriesDirective,
                        RangenavigatorSeriesCollectionDirective
                    ],
                    exports: [
                        RangeNavigatorComponent,
                        RangenavigatorSeriesDirective,
                        RangenavigatorSeriesCollectionDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VuYXZpZ2F0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3JhbmdlLW5hdmlnYXRvci9yYW5nZW5hdmlnYXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLHVDQUF1QyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBRXJFOztHQUVHO0FBY0gsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLGlCQVZ6Qix1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLHVDQUF1QyxhQUpqQyxZQUFZLGFBT2xCLHVCQUF1QjtRQUN2Qiw2QkFBNkI7UUFDN0IsdUNBQXVDO2tIQUdsQyxvQkFBb0IsWUFacEIsQ0FBQyxZQUFZLENBQUM7MkZBWWQsb0JBQW9CO2tCQWJoQyxRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFO3dCQUNWLHVCQUF1Qjt3QkFDdkIsNkJBQTZCO3dCQUM3Qix1Q0FBdUM7cUJBQzFDO29CQUNELE9BQU8sRUFBRTt3QkFDTCx1QkFBdUI7d0JBQ3ZCLDZCQUE2Qjt3QkFDN0IsdUNBQXVDO3FCQUMxQztpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmFuZ2VuYXZpZ2F0b3JTZXJpZXNEaXJlY3RpdmUsIFJhbmdlbmF2aWdhdG9yU2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc2VyaWVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSYW5nZU5hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vcmFuZ2VuYXZpZ2F0b3IuY29tcG9uZW50JztcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgUmFuZ2VOYXZpZ2F0b3IgY29tcG9uZW50LlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBSYW5nZU5hdmlnYXRvckNvbXBvbmVudCxcbiAgICAgICAgUmFuZ2VuYXZpZ2F0b3JTZXJpZXNEaXJlY3RpdmUsXG4gICAgICAgIFJhbmdlbmF2aWdhdG9yU2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBSYW5nZU5hdmlnYXRvckNvbXBvbmVudCxcbiAgICAgICAgUmFuZ2VuYXZpZ2F0b3JTZXJpZXNEaXJlY3RpdmUsXG4gICAgICAgIFJhbmdlbmF2aWdhdG9yU2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VOYXZpZ2F0b3JNb2R1bGUgeyB9Il19