import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletChartModule } from './bulletchart.module';
import { BulletTooltip, BulletChartLegend } from '@syncfusion/ej2-charts';
import * as i0 from "@angular/core";
export const BulletTooltipService = { provide: 'ChartsBulletTooltip', useValue: BulletTooltip };
export const BulletChartLegendService = { provide: 'ChartsBulletChartLegend', useValue: BulletChartLegend };
/**
 * NgModule definition for the BulletChart component with providers.
 */
export class BulletChartAllModule {
}
BulletChartAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BulletChartAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartAllModule, imports: [CommonModule, BulletChartModule], exports: [BulletChartModule] });
BulletChartAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartAllModule, providers: [
        BulletTooltipService,
        BulletChartLegendService
    ], imports: [[CommonModule, BulletChartModule], BulletChartModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, BulletChartModule],
                    exports: [
                        BulletChartModule
                    ],
                    providers: [
                        BulletTooltipService,
                        BulletChartLegendService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsbGV0Y2hhcnQtYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9idWxsZXQtY2hhcnQvYnVsbGV0Y2hhcnQtYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLHdCQUF3QixDQUFBOztBQUd2RSxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDO0FBQzlHLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFrQixFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQztBQUUxSDs7R0FFRztBQVdILE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixZQVRuQixZQUFZLEVBQUUsaUJBQWlCLGFBRXJDLGlCQUFpQjtrSEFPWixvQkFBb0IsYUFMbkI7UUFDTixvQkFBb0I7UUFDcEIsd0JBQXdCO0tBQzNCLFlBUFEsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsRUFFdEMsaUJBQWlCOzJGQU9aLG9CQUFvQjtrQkFWaEMsUUFBUTttQkFBQztvQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7b0JBQzFDLE9BQU8sRUFBRTt3QkFDTCxpQkFBaUI7cUJBQ3BCO29CQUNELFNBQVMsRUFBQzt3QkFDTixvQkFBb0I7d0JBQ3BCLHdCQUF3QjtxQkFDM0I7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVmFsdWVQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJ1bGxldFJhbmdlRGlyZWN0aXZlLCBCdWxsZXRSYW5nZUNvbGxlY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL3Jhbmdlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnVsbGV0Q2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2J1bGxldGNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdWxsZXRDaGFydE1vZHVsZSB9IGZyb20gJy4vYnVsbGV0Y2hhcnQubW9kdWxlJztcbmltcG9ydCB7QnVsbGV0VG9vbHRpcCwgQnVsbGV0Q2hhcnRMZWdlbmR9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1jaGFydHMnXG5cblxuZXhwb3J0IGNvbnN0IEJ1bGxldFRvb2x0aXBTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQnVsbGV0VG9vbHRpcCcsIHVzZVZhbHVlOiBCdWxsZXRUb29sdGlwfTtcbmV4cG9ydCBjb25zdCBCdWxsZXRDaGFydExlZ2VuZFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNCdWxsZXRDaGFydExlZ2VuZCcsIHVzZVZhbHVlOiBCdWxsZXRDaGFydExlZ2VuZH07XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIEJ1bGxldENoYXJ0IGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBCdWxsZXRDaGFydE1vZHVsZV0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBCdWxsZXRDaGFydE1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgQnVsbGV0VG9vbHRpcFNlcnZpY2UsXG4gICAgICAgIEJ1bGxldENoYXJ0TGVnZW5kU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQnVsbGV0Q2hhcnRBbGxNb2R1bGUgeyB9Il19