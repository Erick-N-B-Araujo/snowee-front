import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccumulationChartModule } from './accumulationchart.module';
import { PieSeries, FunnelSeries, PyramidSeries, AccumulationTooltip, AccumulationLegend, AccumulationSelection, AccumulationDataLabel, AccumulationAnnotation } from '@syncfusion/ej2-charts';
import * as i0 from "@angular/core";
export const PieSeriesService = { provide: 'ChartsPieSeries', useValue: PieSeries };
export const FunnelSeriesService = { provide: 'ChartsFunnelSeries', useValue: FunnelSeries };
export const PyramidSeriesService = { provide: 'ChartsPyramidSeries', useValue: PyramidSeries };
export const AccumulationTooltipService = { provide: 'ChartsAccumulationTooltip', useValue: AccumulationTooltip };
export const AccumulationLegendService = { provide: 'ChartsAccumulationLegend', useValue: AccumulationLegend };
export const AccumulationSelectionService = { provide: 'ChartsAccumulationSelection', useValue: AccumulationSelection };
export const AccumulationDataLabelService = { provide: 'ChartsAccumulationDataLabel', useValue: AccumulationDataLabel };
export const AccumulationAnnotationService = { provide: 'ChartsAccumulationAnnotation', useValue: AccumulationAnnotation };
/**
 * NgModule definition for the AccumulationChart component with providers.
 */
export class AccumulationChartAllModule {
}
AccumulationChartAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AccumulationChartAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartAllModule, imports: [CommonModule, AccumulationChartModule], exports: [AccumulationChartModule] });
AccumulationChartAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartAllModule, providers: [
        PieSeriesService,
        FunnelSeriesService,
        PyramidSeriesService,
        AccumulationTooltipService,
        AccumulationLegendService,
        AccumulationSelectionService,
        AccumulationDataLabelService,
        AccumulationAnnotationService
    ], imports: [[CommonModule, AccumulationChartModule], AccumulationChartModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AccumulationChartAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, AccumulationChartModule],
                    exports: [
                        AccumulationChartModule
                    ],
                    providers: [
                        PieSeriesService,
                        FunnelSeriesService,
                        PyramidSeriesService,
                        AccumulationTooltipService,
                        AccumulationLegendService,
                        AccumulationSelectionService,
                        AccumulationDataLabelService,
                        AccumulationAnnotationService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjdW11bGF0aW9uY2hhcnQtYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hY2N1bXVsYXRpb24tY2hhcnQvYWNjdW11bGF0aW9uY2hhcnQtYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLHNCQUFzQixFQUFDLE1BQU0sd0JBQXdCLENBQUE7O0FBRzVMLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDbEcsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQztBQUMzRyxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDO0FBQzlHLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFrQixFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztBQUNoSSxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFDLENBQUM7QUFDN0gsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBQyxDQUFDO0FBQ3RJLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFrQixFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUMsQ0FBQztBQUN0SSxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFDLENBQUM7QUFFekk7O0dBRUc7QUFpQkgsTUFBTSxPQUFPLDBCQUEwQjs7dUhBQTFCLDBCQUEwQjt3SEFBMUIsMEJBQTBCLFlBZnpCLFlBQVksRUFBRSx1QkFBdUIsYUFFM0MsdUJBQXVCO3dIQWFsQiwwQkFBMEIsYUFYekI7UUFDTixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1Qiw0QkFBNEI7UUFDNUIsNkJBQTZCO0tBQ2hDLFlBYlEsQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLENBQUMsRUFFNUMsdUJBQXVCOzJGQWFsQiwwQkFBMEI7a0JBaEJ0QyxRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSx1QkFBdUIsQ0FBQztvQkFDaEQsT0FBTyxFQUFFO3dCQUNMLHVCQUF1QjtxQkFDMUI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLDBCQUEwQjt3QkFDMUIseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLDRCQUE0Qjt3QkFDNUIsNkJBQTZCO3FCQUNoQztpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWNjdW11bGF0aW9uU2VyaWVzRGlyZWN0aXZlLCBBY2N1bXVsYXRpb25TZXJpZXNDb2xsZWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9zZXJpZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFjY3VtdWxhdGlvbkFubm90YXRpb25EaXJlY3RpdmUsIEFjY3VtdWxhdGlvbkFubm90YXRpb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWNjdW11bGF0aW9uQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2FjY3VtdWxhdGlvbmNoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY2N1bXVsYXRpb25DaGFydE1vZHVsZSB9IGZyb20gJy4vYWNjdW11bGF0aW9uY2hhcnQubW9kdWxlJztcbmltcG9ydCB7UGllU2VyaWVzLCBGdW5uZWxTZXJpZXMsIFB5cmFtaWRTZXJpZXMsIEFjY3VtdWxhdGlvblRvb2x0aXAsIEFjY3VtdWxhdGlvbkxlZ2VuZCwgQWNjdW11bGF0aW9uU2VsZWN0aW9uLCBBY2N1bXVsYXRpb25EYXRhTGFiZWwsIEFjY3VtdWxhdGlvbkFubm90YXRpb259IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1jaGFydHMnXG5cblxuZXhwb3J0IGNvbnN0IFBpZVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNQaWVTZXJpZXMnLCB1c2VWYWx1ZTogUGllU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBGdW5uZWxTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzRnVubmVsU2VyaWVzJywgdXNlVmFsdWU6IEZ1bm5lbFNlcmllc307XG5leHBvcnQgY29uc3QgUHlyYW1pZFNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNQeXJhbWlkU2VyaWVzJywgdXNlVmFsdWU6IFB5cmFtaWRTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IEFjY3VtdWxhdGlvblRvb2x0aXBTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQWNjdW11bGF0aW9uVG9vbHRpcCcsIHVzZVZhbHVlOiBBY2N1bXVsYXRpb25Ub29sdGlwfTtcbmV4cG9ydCBjb25zdCBBY2N1bXVsYXRpb25MZWdlbmRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQWNjdW11bGF0aW9uTGVnZW5kJywgdXNlVmFsdWU6IEFjY3VtdWxhdGlvbkxlZ2VuZH07XG5leHBvcnQgY29uc3QgQWNjdW11bGF0aW9uU2VsZWN0aW9uU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0FjY3VtdWxhdGlvblNlbGVjdGlvbicsIHVzZVZhbHVlOiBBY2N1bXVsYXRpb25TZWxlY3Rpb259O1xuZXhwb3J0IGNvbnN0IEFjY3VtdWxhdGlvbkRhdGFMYWJlbFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNBY2N1bXVsYXRpb25EYXRhTGFiZWwnLCB1c2VWYWx1ZTogQWNjdW11bGF0aW9uRGF0YUxhYmVsfTtcbmV4cG9ydCBjb25zdCBBY2N1bXVsYXRpb25Bbm5vdGF0aW9uU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0FjY3VtdWxhdGlvbkFubm90YXRpb24nLCB1c2VWYWx1ZTogQWNjdW11bGF0aW9uQW5ub3RhdGlvbn07XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIEFjY3VtdWxhdGlvbkNoYXJ0IGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBBY2N1bXVsYXRpb25DaGFydE1vZHVsZV0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBBY2N1bXVsYXRpb25DaGFydE1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgUGllU2VyaWVzU2VydmljZSxcbiAgICAgICAgRnVubmVsU2VyaWVzU2VydmljZSxcbiAgICAgICAgUHlyYW1pZFNlcmllc1NlcnZpY2UsXG4gICAgICAgIEFjY3VtdWxhdGlvblRvb2x0aXBTZXJ2aWNlLFxuICAgICAgICBBY2N1bXVsYXRpb25MZWdlbmRTZXJ2aWNlLFxuICAgICAgICBBY2N1bXVsYXRpb25TZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBBY2N1bXVsYXRpb25EYXRhTGFiZWxTZXJ2aWNlLFxuICAgICAgICBBY2N1bXVsYXRpb25Bbm5vdGF0aW9uU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQWNjdW11bGF0aW9uQ2hhcnRBbGxNb2R1bGUgeyB9Il19