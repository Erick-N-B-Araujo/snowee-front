import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeBandSettingDirective, RangeBandSettingsDirective } from './rangebandsettings.directive';
import { SparklineComponent } from './sparkline.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Sparkline component.
 */
export class SparklineModule {
}
SparklineModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SparklineModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineModule, declarations: [SparklineComponent,
        RangeBandSettingDirective,
        RangeBandSettingsDirective], imports: [CommonModule], exports: [SparklineComponent,
        RangeBandSettingDirective,
        RangeBandSettingsDirective] });
SparklineModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        SparklineComponent,
                        RangeBandSettingDirective,
                        RangeBandSettingsDirective
                    ],
                    exports: [
                        SparklineComponent,
                        RangeBandSettingDirective,
                        RangeBandSettingsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhcmtsaW5lLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zcGFya2xpbmUvc3BhcmtsaW5lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFM0Q7O0dBRUc7QUFjSCxNQUFNLE9BQU8sZUFBZTs7NEdBQWYsZUFBZTs2R0FBZixlQUFlLGlCQVZwQixrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLDBCQUEwQixhQUpwQixZQUFZLGFBT2xCLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsMEJBQTBCOzZHQUdyQixlQUFlLFlBWmYsQ0FBQyxZQUFZLENBQUM7MkZBWWQsZUFBZTtrQkFiM0IsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRTt3QkFDVixrQkFBa0I7d0JBQ2xCLHlCQUF5Qjt3QkFDekIsMEJBQTBCO3FCQUM3QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsa0JBQWtCO3dCQUNsQix5QkFBeUI7d0JBQ3pCLDBCQUEwQjtxQkFDN0I7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJhbmdlQmFuZFNldHRpbmdEaXJlY3RpdmUsIFJhbmdlQmFuZFNldHRpbmdzRGlyZWN0aXZlIH0gZnJvbSAnLi9yYW5nZWJhbmRzZXR0aW5ncy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3BhcmtsaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9zcGFya2xpbmUuY29tcG9uZW50JztcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgU3BhcmtsaW5lIGNvbXBvbmVudC5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU3BhcmtsaW5lQ29tcG9uZW50LFxuICAgICAgICBSYW5nZUJhbmRTZXR0aW5nRGlyZWN0aXZlLFxuICAgICAgICBSYW5nZUJhbmRTZXR0aW5nc0RpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTcGFya2xpbmVDb21wb25lbnQsXG4gICAgICAgIFJhbmdlQmFuZFNldHRpbmdEaXJlY3RpdmUsXG4gICAgICAgIFJhbmdlQmFuZFNldHRpbmdzRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTcGFya2xpbmVNb2R1bGUgeyB9Il19