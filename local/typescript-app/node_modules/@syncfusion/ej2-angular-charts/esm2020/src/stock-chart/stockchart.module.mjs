import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockChartTrendlineDirective, StockChartTrendlinesDirective } from './trendlines.directive';
import { StockChartSeriesDirective, StockChartSeriesCollectionDirective } from './series.directive';
import { StockChartAxisDirective, StockChartAxesDirective } from './axes.directive';
import { StockChartRowDirective, StockChartRowsDirective } from './rows.directive';
import { StockChartAnnotationDirective, StockChartAnnotationsDirective } from './annotations.directive';
import { StockChartSelectedDataIndexDirective, StockChartSelectedDataIndexesDirective } from './selecteddataindexes.directive';
import { StockChartPeriodDirective, StockChartPeriodsDirective } from './periods.directive';
import { StockEventDirective, StockEventsDirective } from './stockevents.directive';
import { StockChartIndicatorDirective, StockChartIndicatorsDirective } from './indicators.directive';
import { StockChartComponent } from './stockchart.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the StockChart component.
 */
export class StockChartModule {
}
StockChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
StockChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartModule, declarations: [StockChartComponent,
        StockChartTrendlineDirective,
        StockChartTrendlinesDirective,
        StockChartSeriesDirective,
        StockChartSeriesCollectionDirective,
        StockChartAxisDirective,
        StockChartAxesDirective,
        StockChartRowDirective,
        StockChartRowsDirective,
        StockChartAnnotationDirective,
        StockChartAnnotationsDirective,
        StockChartSelectedDataIndexDirective,
        StockChartSelectedDataIndexesDirective,
        StockChartPeriodDirective,
        StockChartPeriodsDirective,
        StockEventDirective,
        StockEventsDirective,
        StockChartIndicatorDirective,
        StockChartIndicatorsDirective], imports: [CommonModule], exports: [StockChartComponent,
        StockChartTrendlineDirective,
        StockChartTrendlinesDirective,
        StockChartSeriesDirective,
        StockChartSeriesCollectionDirective,
        StockChartAxisDirective,
        StockChartAxesDirective,
        StockChartRowDirective,
        StockChartRowsDirective,
        StockChartAnnotationDirective,
        StockChartAnnotationsDirective,
        StockChartSelectedDataIndexDirective,
        StockChartSelectedDataIndexesDirective,
        StockChartPeriodDirective,
        StockChartPeriodsDirective,
        StockEventDirective,
        StockEventsDirective,
        StockChartIndicatorDirective,
        StockChartIndicatorsDirective] });
StockChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: StockChartModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        StockChartComponent,
                        StockChartTrendlineDirective,
                        StockChartTrendlinesDirective,
                        StockChartSeriesDirective,
                        StockChartSeriesCollectionDirective,
                        StockChartAxisDirective,
                        StockChartAxesDirective,
                        StockChartRowDirective,
                        StockChartRowsDirective,
                        StockChartAnnotationDirective,
                        StockChartAnnotationsDirective,
                        StockChartSelectedDataIndexDirective,
                        StockChartSelectedDataIndexesDirective,
                        StockChartPeriodDirective,
                        StockChartPeriodsDirective,
                        StockEventDirective,
                        StockEventsDirective,
                        StockChartIndicatorDirective,
                        StockChartIndicatorsDirective
                    ],
                    exports: [
                        StockChartComponent,
                        StockChartTrendlineDirective,
                        StockChartTrendlinesDirective,
                        StockChartSeriesDirective,
                        StockChartSeriesCollectionDirective,
                        StockChartAxisDirective,
                        StockChartAxesDirective,
                        StockChartRowDirective,
                        StockChartRowsDirective,
                        StockChartAnnotationDirective,
                        StockChartAnnotationsDirective,
                        StockChartSelectedDataIndexDirective,
                        StockChartSelectedDataIndexesDirective,
                        StockChartPeriodDirective,
                        StockChartPeriodsDirective,
                        StockEventDirective,
                        StockEventsDirective,
                        StockChartIndicatorDirective,
                        StockChartIndicatorsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvY2tjaGFydC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3RvY2stY2hhcnQvc3RvY2tjaGFydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLG1DQUFtQyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLDhCQUE4QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDL0gsT0FBTyxFQUFFLHlCQUF5QixFQUFFLDBCQUEwQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLDZCQUE2QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTdEOztHQUVHO0FBOENILE1BQU0sT0FBTyxnQkFBZ0I7OzZHQUFoQixnQkFBZ0I7OEdBQWhCLGdCQUFnQixpQkExQ3JCLG1CQUFtQjtRQUNuQiw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QixtQ0FBbUM7UUFDbkMsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLDZCQUE2QjtRQUM3Qiw4QkFBOEI7UUFDOUIsb0NBQW9DO1FBQ3BDLHNDQUFzQztRQUN0Qyx5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsNEJBQTRCO1FBQzVCLDZCQUE2QixhQXBCdkIsWUFBWSxhQXVCbEIsbUJBQW1CO1FBQ25CLDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLG1DQUFtQztRQUNuQyx1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsNkJBQTZCO1FBQzdCLDhCQUE4QjtRQUM5QixvQ0FBb0M7UUFDcEMsc0NBQXNDO1FBQ3RDLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQiw0QkFBNEI7UUFDNUIsNkJBQTZCOzhHQUd4QixnQkFBZ0IsWUE1Q2hCLENBQUMsWUFBWSxDQUFDOzJGQTRDZCxnQkFBZ0I7a0JBN0M1QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFO3dCQUNWLG1CQUFtQjt3QkFDbkIsNEJBQTRCO3dCQUM1Qiw2QkFBNkI7d0JBQzdCLHlCQUF5Qjt3QkFDekIsbUNBQW1DO3dCQUNuQyx1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLDZCQUE2Qjt3QkFDN0IsOEJBQThCO3dCQUM5QixvQ0FBb0M7d0JBQ3BDLHNDQUFzQzt3QkFDdEMseUJBQXlCO3dCQUN6QiwwQkFBMEI7d0JBQzFCLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQiw0QkFBNEI7d0JBQzVCLDZCQUE2QjtxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG1CQUFtQjt3QkFDbkIsNEJBQTRCO3dCQUM1Qiw2QkFBNkI7d0JBQzdCLHlCQUF5Qjt3QkFDekIsbUNBQW1DO3dCQUNuQyx1QkFBdUI7d0JBQ3ZCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLDZCQUE2Qjt3QkFDN0IsOEJBQThCO3dCQUM5QixvQ0FBb0M7d0JBQ3BDLHNDQUFzQzt3QkFDdEMseUJBQXlCO3dCQUN6QiwwQkFBMEI7d0JBQzFCLG1CQUFtQjt3QkFDbkIsb0JBQW9CO3dCQUNwQiw0QkFBNEI7d0JBQzVCLDZCQUE2QjtxQkFDaEM7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0b2NrQ2hhcnRUcmVuZGxpbmVEaXJlY3RpdmUsIFN0b2NrQ2hhcnRUcmVuZGxpbmVzRGlyZWN0aXZlIH0gZnJvbSAnLi90cmVuZGxpbmVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdG9ja0NoYXJ0U2VyaWVzRGlyZWN0aXZlLCBTdG9ja0NoYXJ0U2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc2VyaWVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdG9ja0NoYXJ0QXhpc0RpcmVjdGl2ZSwgU3RvY2tDaGFydEF4ZXNEaXJlY3RpdmUgfSBmcm9tICcuL2F4ZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN0b2NrQ2hhcnRSb3dEaXJlY3RpdmUsIFN0b2NrQ2hhcnRSb3dzRGlyZWN0aXZlIH0gZnJvbSAnLi9yb3dzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdG9ja0NoYXJ0QW5ub3RhdGlvbkRpcmVjdGl2ZSwgU3RvY2tDaGFydEFubm90YXRpb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3RvY2tDaGFydFNlbGVjdGVkRGF0YUluZGV4RGlyZWN0aXZlLCBTdG9ja0NoYXJ0U2VsZWN0ZWREYXRhSW5kZXhlc0RpcmVjdGl2ZSB9IGZyb20gJy4vc2VsZWN0ZWRkYXRhaW5kZXhlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3RvY2tDaGFydFBlcmlvZERpcmVjdGl2ZSwgU3RvY2tDaGFydFBlcmlvZHNEaXJlY3RpdmUgfSBmcm9tICcuL3BlcmlvZHMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN0b2NrRXZlbnREaXJlY3RpdmUsIFN0b2NrRXZlbnRzRGlyZWN0aXZlIH0gZnJvbSAnLi9zdG9ja2V2ZW50cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU3RvY2tDaGFydEluZGljYXRvckRpcmVjdGl2ZSwgU3RvY2tDaGFydEluZGljYXRvcnNEaXJlY3RpdmUgfSBmcm9tICcuL2luZGljYXRvcnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFN0b2NrQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL3N0b2NrY2hhcnQuY29tcG9uZW50JztcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgU3RvY2tDaGFydCBjb21wb25lbnQuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFN0b2NrQ2hhcnRDb21wb25lbnQsXG4gICAgICAgIFN0b2NrQ2hhcnRUcmVuZGxpbmVEaXJlY3RpdmUsXG4gICAgICAgIFN0b2NrQ2hhcnRUcmVuZGxpbmVzRGlyZWN0aXZlLFxuICAgICAgICBTdG9ja0NoYXJ0U2VyaWVzRGlyZWN0aXZlLFxuICAgICAgICBTdG9ja0NoYXJ0U2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZSxcbiAgICAgICAgU3RvY2tDaGFydEF4aXNEaXJlY3RpdmUsXG4gICAgICAgIFN0b2NrQ2hhcnRBeGVzRGlyZWN0aXZlLFxuICAgICAgICBTdG9ja0NoYXJ0Um93RGlyZWN0aXZlLFxuICAgICAgICBTdG9ja0NoYXJ0Um93c0RpcmVjdGl2ZSxcbiAgICAgICAgU3RvY2tDaGFydEFubm90YXRpb25EaXJlY3RpdmUsXG4gICAgICAgIFN0b2NrQ2hhcnRBbm5vdGF0aW9uc0RpcmVjdGl2ZSxcbiAgICAgICAgU3RvY2tDaGFydFNlbGVjdGVkRGF0YUluZGV4RGlyZWN0aXZlLFxuICAgICAgICBTdG9ja0NoYXJ0U2VsZWN0ZWREYXRhSW5kZXhlc0RpcmVjdGl2ZSxcbiAgICAgICAgU3RvY2tDaGFydFBlcmlvZERpcmVjdGl2ZSxcbiAgICAgICAgU3RvY2tDaGFydFBlcmlvZHNEaXJlY3RpdmUsXG4gICAgICAgIFN0b2NrRXZlbnREaXJlY3RpdmUsXG4gICAgICAgIFN0b2NrRXZlbnRzRGlyZWN0aXZlLFxuICAgICAgICBTdG9ja0NoYXJ0SW5kaWNhdG9yRGlyZWN0aXZlLFxuICAgICAgICBTdG9ja0NoYXJ0SW5kaWNhdG9yc0RpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTdG9ja0NoYXJ0Q29tcG9uZW50LFxuICAgICAgICBTdG9ja0NoYXJ0VHJlbmRsaW5lRGlyZWN0aXZlLFxuICAgICAgICBTdG9ja0NoYXJ0VHJlbmRsaW5lc0RpcmVjdGl2ZSxcbiAgICAgICAgU3RvY2tDaGFydFNlcmllc0RpcmVjdGl2ZSxcbiAgICAgICAgU3RvY2tDaGFydFNlcmllc0NvbGxlY3Rpb25EaXJlY3RpdmUsXG4gICAgICAgIFN0b2NrQ2hhcnRBeGlzRGlyZWN0aXZlLFxuICAgICAgICBTdG9ja0NoYXJ0QXhlc0RpcmVjdGl2ZSxcbiAgICAgICAgU3RvY2tDaGFydFJvd0RpcmVjdGl2ZSxcbiAgICAgICAgU3RvY2tDaGFydFJvd3NEaXJlY3RpdmUsXG4gICAgICAgIFN0b2NrQ2hhcnRBbm5vdGF0aW9uRGlyZWN0aXZlLFxuICAgICAgICBTdG9ja0NoYXJ0QW5ub3RhdGlvbnNEaXJlY3RpdmUsXG4gICAgICAgIFN0b2NrQ2hhcnRTZWxlY3RlZERhdGFJbmRleERpcmVjdGl2ZSxcbiAgICAgICAgU3RvY2tDaGFydFNlbGVjdGVkRGF0YUluZGV4ZXNEaXJlY3RpdmUsXG4gICAgICAgIFN0b2NrQ2hhcnRQZXJpb2REaXJlY3RpdmUsXG4gICAgICAgIFN0b2NrQ2hhcnRQZXJpb2RzRGlyZWN0aXZlLFxuICAgICAgICBTdG9ja0V2ZW50RGlyZWN0aXZlLFxuICAgICAgICBTdG9ja0V2ZW50c0RpcmVjdGl2ZSxcbiAgICAgICAgU3RvY2tDaGFydEluZGljYXRvckRpcmVjdGl2ZSxcbiAgICAgICAgU3RvY2tDaGFydEluZGljYXRvcnNEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFN0b2NrQ2hhcnRNb2R1bGUgeyB9Il19