import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockChartModule } from './stockchart.module';
import { StockLegend } from '@syncfusion/ej2-charts';
import * as i0 from "@angular/core";
export const StockLegendService = { provide: 'ChartsStockLegend', useValue: StockLegend };
/**
 * NgModule definition for the StockChart component with providers.
 */
export class StockChartAllModule {
}
StockChartAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StockChartAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAllModule, imports: [CommonModule, StockChartModule], exports: [StockChartModule] });
StockChartAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAllModule, providers: [
        StockLegendService
    ], imports: [[CommonModule, StockChartModule], StockChartModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, StockChartModule],
                    exports: [
                        StockChartModule
                    ],
                    providers: [
                        StockLegendService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2tjaGFydC1hbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N0b2NrLWNoYXJ0L3N0b2NrY2hhcnQtYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFXL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFBOztBQUdsRCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBRXhHOztHQUVHO0FBVUgsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLFlBUmxCLFlBQVksRUFBRSxnQkFBZ0IsYUFFcEMsZ0JBQWdCO2lIQU1YLG1CQUFtQixhQUpsQjtRQUNOLGtCQUFrQjtLQUNyQixZQU5RLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDLEVBRXJDLGdCQUFnQjsyRkFNWCxtQkFBbUI7a0JBVC9CLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO29CQUN6QyxPQUFPLEVBQUU7d0JBQ0wsZ0JBQWdCO3FCQUNuQjtvQkFDRCxTQUFTLEVBQUM7d0JBQ04sa0JBQWtCO3FCQUNyQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3RvY2tDaGFydFRyZW5kbGluZURpcmVjdGl2ZSwgU3RvY2tDaGFydFRyZW5kbGluZXNEaXJlY3RpdmUgfSBmcm9tICcuL3RyZW5kbGluZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN0b2NrQ2hhcnRTZXJpZXNEaXJlY3RpdmUsIFN0b2NrQ2hhcnRTZXJpZXNDb2xsZWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9zZXJpZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN0b2NrQ2hhcnRBeGlzRGlyZWN0aXZlLCBTdG9ja0NoYXJ0QXhlc0RpcmVjdGl2ZSB9IGZyb20gJy4vYXhlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3RvY2tDaGFydFJvd0RpcmVjdGl2ZSwgU3RvY2tDaGFydFJvd3NEaXJlY3RpdmUgfSBmcm9tICcuL3Jvd3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN0b2NrQ2hhcnRBbm5vdGF0aW9uRGlyZWN0aXZlLCBTdG9ja0NoYXJ0QW5ub3RhdGlvbnNEaXJlY3RpdmUgfSBmcm9tICcuL2Fubm90YXRpb25zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdG9ja0NoYXJ0U2VsZWN0ZWREYXRhSW5kZXhEaXJlY3RpdmUsIFN0b2NrQ2hhcnRTZWxlY3RlZERhdGFJbmRleGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9zZWxlY3RlZGRhdGFpbmRleGVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdG9ja0NoYXJ0UGVyaW9kRGlyZWN0aXZlLCBTdG9ja0NoYXJ0UGVyaW9kc0RpcmVjdGl2ZSB9IGZyb20gJy4vcGVyaW9kcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3RvY2tFdmVudERpcmVjdGl2ZSwgU3RvY2tFdmVudHNEaXJlY3RpdmUgfSBmcm9tICcuL3N0b2NrZXZlbnRzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdG9ja0NoYXJ0SW5kaWNhdG9yRGlyZWN0aXZlLCBTdG9ja0NoYXJ0SW5kaWNhdG9yc0RpcmVjdGl2ZSB9IGZyb20gJy4vaW5kaWNhdG9ycy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3RvY2tDaGFydENvbXBvbmVudCB9IGZyb20gJy4vc3RvY2tjaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RvY2tDaGFydE1vZHVsZSB9IGZyb20gJy4vc3RvY2tjaGFydC5tb2R1bGUnO1xuaW1wb3J0IHtTdG9ja0xlZ2VuZH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWNoYXJ0cydcblxuXG5leHBvcnQgY29uc3QgU3RvY2tMZWdlbmRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU3RvY2tMZWdlbmQnLCB1c2VWYWx1ZTogU3RvY2tMZWdlbmR9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBTdG9ja0NoYXJ0IGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTdG9ja0NoYXJ0TW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFN0b2NrQ2hhcnRNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIFN0b2NrTGVnZW5kU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU3RvY2tDaGFydEFsbE1vZHVsZSB7IH0iXX0=