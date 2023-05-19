import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SparklineModule } from './sparkline.module';
import { SparklineTooltip } from '@syncfusion/ej2-charts';
import * as i0 from "@angular/core";
export const SparklineTooltipService = { provide: 'ChartsSparklineTooltip', useValue: SparklineTooltip };
/**
 * NgModule definition for the Sparkline component with providers.
 */
export class SparklineAllModule {
}
SparklineAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SparklineAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineAllModule, imports: [CommonModule, SparklineModule], exports: [SparklineModule] });
SparklineAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineAllModule, providers: [
        SparklineTooltipService
    ], imports: [[CommonModule, SparklineModule], SparklineModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SparklineModule],
                    exports: [
                        SparklineModule
                    ],
                    providers: [
                        SparklineTooltipService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhcmtsaW5lLWFsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3BhcmtsaW5lL3NwYXJrbGluZS1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUE7O0FBR3ZELE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFrQixFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztBQUV2SDs7R0FFRztBQVVILE1BQU0sT0FBTyxrQkFBa0I7OytHQUFsQixrQkFBa0I7Z0hBQWxCLGtCQUFrQixZQVJqQixZQUFZLEVBQUUsZUFBZSxhQUVuQyxlQUFlO2dIQU1WLGtCQUFrQixhQUpqQjtRQUNOLHVCQUF1QjtLQUMxQixZQU5RLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxFQUVwQyxlQUFlOzJGQU1WLGtCQUFrQjtrQkFUOUIsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxPQUFPLEVBQUU7d0JBQ0wsZUFBZTtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLHVCQUF1QjtxQkFDMUI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJhbmdlQmFuZFNldHRpbmdEaXJlY3RpdmUsIFJhbmdlQmFuZFNldHRpbmdzRGlyZWN0aXZlIH0gZnJvbSAnLi9yYW5nZWJhbmRzZXR0aW5ncy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3BhcmtsaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9zcGFya2xpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IFNwYXJrbGluZU1vZHVsZSB9IGZyb20gJy4vc3BhcmtsaW5lLm1vZHVsZSc7XG5pbXBvcnQge1NwYXJrbGluZVRvb2x0aXB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1jaGFydHMnXG5cblxuZXhwb3J0IGNvbnN0IFNwYXJrbGluZVRvb2x0aXBTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU3BhcmtsaW5lVG9vbHRpcCcsIHVzZVZhbHVlOiBTcGFya2xpbmVUb29sdGlwfTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgU3BhcmtsaW5lIGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTcGFya2xpbmVNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3BhcmtsaW5lTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBTcGFya2xpbmVUb29sdGlwU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3BhcmtsaW5lQWxsTW9kdWxlIHsgfSJdfQ==