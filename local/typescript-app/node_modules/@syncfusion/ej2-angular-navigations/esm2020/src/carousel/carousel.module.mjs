import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItemDirective, CarouselItemsDirective } from './items.directive';
import { CarouselComponent } from './carousel.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Carousel component.
 */
export class CarouselModule {
}
CarouselModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CarouselModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CarouselModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CarouselModule, declarations: [CarouselComponent,
        CarouselItemDirective,
        CarouselItemsDirective], imports: [CommonModule], exports: [CarouselComponent,
        CarouselItemDirective,
        CarouselItemsDirective] });
CarouselModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CarouselModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: CarouselModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        CarouselComponent,
                        CarouselItemDirective,
                        CarouselItemsDirective
                    ],
                    exports: [
                        CarouselComponent,
                        CarouselItemDirective,
                        CarouselItemsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Nhcm91c2VsL2Nhcm91c2VsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFekQ7O0dBRUc7QUFjSCxNQUFNLE9BQU8sY0FBYzs7MkdBQWQsY0FBYzs0R0FBZCxjQUFjLGlCQVZuQixpQkFBaUI7UUFDakIscUJBQXFCO1FBQ3JCLHNCQUFzQixhQUpoQixZQUFZLGFBT2xCLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsc0JBQXNCOzRHQUdqQixjQUFjLFlBWmQsQ0FBQyxZQUFZLENBQUM7MkZBWWQsY0FBYztrQkFiMUIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDVixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjtxQkFDekI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENhcm91c2VsSXRlbURpcmVjdGl2ZSwgQ2Fyb3VzZWxJdGVtc0RpcmVjdGl2ZSB9IGZyb20gJy4vaXRlbXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC5jb21wb25lbnQnO1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBDYXJvdXNlbCBjb21wb25lbnQuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIENhcm91c2VsQ29tcG9uZW50LFxuICAgICAgICBDYXJvdXNlbEl0ZW1EaXJlY3RpdmUsXG4gICAgICAgIENhcm91c2VsSXRlbXNEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ2Fyb3VzZWxDb21wb25lbnQsXG4gICAgICAgIENhcm91c2VsSXRlbURpcmVjdGl2ZSxcbiAgICAgICAgQ2Fyb3VzZWxJdGVtc0RpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxNb2R1bGUgeyB9Il19