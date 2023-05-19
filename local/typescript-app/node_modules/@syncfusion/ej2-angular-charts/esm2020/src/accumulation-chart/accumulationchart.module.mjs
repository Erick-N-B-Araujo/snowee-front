import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccumulationSeriesDirective, AccumulationSeriesCollectionDirective } from './series.directive';
import { AccumulationAnnotationDirective, AccumulationAnnotationsDirective } from './annotations.directive';
import { AccumulationChartComponent } from './accumulationchart.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the AccumulationChart component.
 */
export class AccumulationChartModule {
}
AccumulationChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccumulationChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartModule, declarations: [AccumulationChartComponent,
        AccumulationSeriesDirective,
        AccumulationSeriesCollectionDirective,
        AccumulationAnnotationDirective,
        AccumulationAnnotationsDirective], imports: [CommonModule], exports: [AccumulationChartComponent,
        AccumulationSeriesDirective,
        AccumulationSeriesCollectionDirective,
        AccumulationAnnotationDirective,
        AccumulationAnnotationsDirective] });
AccumulationChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        AccumulationChartComponent,
                        AccumulationSeriesDirective,
                        AccumulationSeriesCollectionDirective,
                        AccumulationAnnotationDirective,
                        AccumulationAnnotationsDirective
                    ],
                    exports: [
                        AccumulationChartComponent,
                        AccumulationSeriesDirective,
                        AccumulationSeriesCollectionDirective,
                        AccumulationAnnotationDirective,
                        AccumulationAnnotationsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjdW11bGF0aW9uY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FjY3VtdWxhdGlvbi1jaGFydC9hY2N1bXVsYXRpb25jaGFydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLHFDQUFxQyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBRTNFOztHQUVHO0FBa0JILE1BQU0sT0FBTyx1QkFBdUI7O29IQUF2Qix1QkFBdUI7cUhBQXZCLHVCQUF1QixpQkFkNUIsMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQixxQ0FBcUM7UUFDckMsK0JBQStCO1FBQy9CLGdDQUFnQyxhQU4xQixZQUFZLGFBU2xCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUMvQixnQ0FBZ0M7cUhBRzNCLHVCQUF1QixZQWhCdkIsQ0FBQyxZQUFZLENBQUM7MkZBZ0JkLHVCQUF1QjtrQkFqQm5DLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1YsMEJBQTBCO3dCQUMxQiwyQkFBMkI7d0JBQzNCLHFDQUFxQzt3QkFDckMsK0JBQStCO3dCQUMvQixnQ0FBZ0M7cUJBQ25DO29CQUNELE9BQU8sRUFBRTt3QkFDTCwwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0IscUNBQXFDO3dCQUNyQywrQkFBK0I7d0JBQy9CLGdDQUFnQztxQkFDbkM7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFjY3VtdWxhdGlvblNlcmllc0RpcmVjdGl2ZSwgQWNjdW11bGF0aW9uU2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc2VyaWVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBY2N1bXVsYXRpb25Bbm5vdGF0aW9uRGlyZWN0aXZlLCBBY2N1bXVsYXRpb25Bbm5vdGF0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vYW5ub3RhdGlvbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFjY3VtdWxhdGlvbkNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9hY2N1bXVsYXRpb25jaGFydC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBBY2N1bXVsYXRpb25DaGFydCBjb21wb25lbnQuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFjY3VtdWxhdGlvbkNoYXJ0Q29tcG9uZW50LFxuICAgICAgICBBY2N1bXVsYXRpb25TZXJpZXNEaXJlY3RpdmUsXG4gICAgICAgIEFjY3VtdWxhdGlvblNlcmllc0NvbGxlY3Rpb25EaXJlY3RpdmUsXG4gICAgICAgIEFjY3VtdWxhdGlvbkFubm90YXRpb25EaXJlY3RpdmUsXG4gICAgICAgIEFjY3VtdWxhdGlvbkFubm90YXRpb25zRGlyZWN0aXZlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEFjY3VtdWxhdGlvbkNoYXJ0Q29tcG9uZW50LFxuICAgICAgICBBY2N1bXVsYXRpb25TZXJpZXNEaXJlY3RpdmUsXG4gICAgICAgIEFjY3VtdWxhdGlvblNlcmllc0NvbGxlY3Rpb25EaXJlY3RpdmUsXG4gICAgICAgIEFjY3VtdWxhdGlvbkFubm90YXRpb25EaXJlY3RpdmUsXG4gICAgICAgIEFjY3VtdWxhdGlvbkFubm90YXRpb25zRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBY2N1bXVsYXRpb25DaGFydE1vZHVsZSB7IH0iXX0=