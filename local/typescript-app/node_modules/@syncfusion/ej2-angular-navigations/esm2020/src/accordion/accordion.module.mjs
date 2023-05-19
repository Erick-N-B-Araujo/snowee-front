import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItemDirective, AccordionItemsDirective } from './items.directive';
import { AccordionComponent } from './accordion.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Accordion component.
 */
export class AccordionModule {
}
AccordionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccordionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionModule, declarations: [AccordionComponent,
        AccordionItemDirective,
        AccordionItemsDirective], imports: [CommonModule], exports: [AccordionComponent,
        AccordionItemDirective,
        AccordionItemsDirective] });
AccordionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccordionModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        AccordionComponent,
                        AccordionItemDirective,
                        AccordionItemsDirective
                    ],
                    exports: [
                        AccordionComponent,
                        AccordionItemDirective,
                        AccordionItemsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFM0Q7O0dBRUc7QUFjSCxNQUFNLE9BQU8sZUFBZTs7NEdBQWYsZUFBZTs2R0FBZixlQUFlLGlCQVZwQixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLHVCQUF1QixhQUpqQixZQUFZLGFBT2xCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsdUJBQXVCOzZHQUdsQixlQUFlLFlBWmYsQ0FBQyxZQUFZLENBQUM7MkZBWWQsZUFBZTtrQkFiM0IsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDVixrQkFBa0I7d0JBQ2xCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsa0JBQWtCO3dCQUNsQixzQkFBc0I7d0JBQ3RCLHVCQUF1QjtxQkFDMUI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFjY29yZGlvbkl0ZW1EaXJlY3RpdmUsIEFjY29yZGlvbkl0ZW1zRGlyZWN0aXZlIH0gZnJvbSAnLi9pdGVtcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgQWNjb3JkaW9uIGNvbXBvbmVudC5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQWNjb3JkaW9uQ29tcG9uZW50LFxuICAgICAgICBBY2NvcmRpb25JdGVtRGlyZWN0aXZlLFxuICAgICAgICBBY2NvcmRpb25JdGVtc0RpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBBY2NvcmRpb25Db21wb25lbnQsXG4gICAgICAgIEFjY29yZGlvbkl0ZW1EaXJlY3RpdmUsXG4gICAgICAgIEFjY29yZGlvbkl0ZW1zRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25Nb2R1bGUgeyB9Il19