import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from './chart.module';
import { LineSeries, ScatterSeries, ColumnSeries, SplineSeries, SplineAreaSeries, StripLine, AreaSeries, ScrollBar, StepLineSeries, StepAreaSeries, StackingColumnSeries, StackingLineSeries, StackingAreaSeries, StackingStepAreaSeries, BarSeries, StackingBarSeries, RangeColumnSeries, BubbleSeries, Tooltip, Crosshair, Category, DateTime, Logarithmic, Legend, Zoom, DataLabel, Selection, ChartAnnotation, HiloSeries, HiloOpenCloseSeries, WaterfallSeries, RangeAreaSeries, RangeStepAreaSeries, SplineRangeAreaSeries, CandleSeries, PolarSeries, RadarSeries, SmaIndicator, TmaIndicator, EmaIndicator, AccumulationDistributionIndicator, MacdIndicator, AtrIndicator, RsiIndicator, MomentumIndicator, StochasticIndicator, BollingerBands, BoxAndWhiskerSeries, HistogramSeries, ErrorBar, Trendlines, DateTimeCategory, MultiColoredLineSeries, MultiColoredAreaSeries, MultiLevelLabel, ParetoSeries, Export, DataEditing, Highlight } from '@syncfusion/ej2-charts';
import * as i0 from "@angular/core";
export const LineSeriesService = { provide: 'ChartsLineSeries', useValue: LineSeries };
export const ScatterSeriesService = { provide: 'ChartsScatterSeries', useValue: ScatterSeries };
export const ColumnSeriesService = { provide: 'ChartsColumnSeries', useValue: ColumnSeries };
export const SplineSeriesService = { provide: 'ChartsSplineSeries', useValue: SplineSeries };
export const SplineAreaSeriesService = { provide: 'ChartsSplineAreaSeries', useValue: SplineAreaSeries };
export const StripLineService = { provide: 'ChartsStripLine', useValue: StripLine };
export const AreaSeriesService = { provide: 'ChartsAreaSeries', useValue: AreaSeries };
export const ScrollBarService = { provide: 'ChartsScrollBar', useValue: ScrollBar };
export const StepLineSeriesService = { provide: 'ChartsStepLineSeries', useValue: StepLineSeries };
export const StepAreaSeriesService = { provide: 'ChartsStepAreaSeries', useValue: StepAreaSeries };
export const StackingColumnSeriesService = { provide: 'ChartsStackingColumnSeries', useValue: StackingColumnSeries };
export const StackingLineSeriesService = { provide: 'ChartsStackingLineSeries', useValue: StackingLineSeries };
export const StackingAreaSeriesService = { provide: 'ChartsStackingAreaSeries', useValue: StackingAreaSeries };
export const StackingStepAreaSeriesService = { provide: 'ChartsStackingStepAreaSeries', useValue: StackingStepAreaSeries };
export const BarSeriesService = { provide: 'ChartsBarSeries', useValue: BarSeries };
export const StackingBarSeriesService = { provide: 'ChartsStackingBarSeries', useValue: StackingBarSeries };
export const RangeColumnSeriesService = { provide: 'ChartsRangeColumnSeries', useValue: RangeColumnSeries };
export const BubbleSeriesService = { provide: 'ChartsBubbleSeries', useValue: BubbleSeries };
export const TooltipService = { provide: 'ChartsTooltip', useValue: Tooltip };
export const CrosshairService = { provide: 'ChartsCrosshair', useValue: Crosshair };
export const CategoryService = { provide: 'ChartsCategory', useValue: Category };
export const DateTimeService = { provide: 'ChartsDateTime', useValue: DateTime };
export const LogarithmicService = { provide: 'ChartsLogarithmic', useValue: Logarithmic };
export const LegendService = { provide: 'ChartsLegend', useValue: Legend };
export const ZoomService = { provide: 'ChartsZoom', useValue: Zoom };
export const DataLabelService = { provide: 'ChartsDataLabel', useValue: DataLabel };
export const SelectionService = { provide: 'ChartsSelection', useValue: Selection };
export const ChartAnnotationService = { provide: 'ChartsChartAnnotation', useValue: ChartAnnotation };
export const HiloSeriesService = { provide: 'ChartsHiloSeries', useValue: HiloSeries };
export const HiloOpenCloseSeriesService = { provide: 'ChartsHiloOpenCloseSeries', useValue: HiloOpenCloseSeries };
export const WaterfallSeriesService = { provide: 'ChartsWaterfallSeries', useValue: WaterfallSeries };
export const RangeAreaSeriesService = { provide: 'ChartsRangeAreaSeries', useValue: RangeAreaSeries };
export const RangeStepAreaSeriesService = { provide: 'ChartsRangeStepAreaSeries', useValue: RangeStepAreaSeries };
export const SplineRangeAreaSeriesService = { provide: 'ChartsSplineRangeAreaSeries', useValue: SplineRangeAreaSeries };
export const CandleSeriesService = { provide: 'ChartsCandleSeries', useValue: CandleSeries };
export const PolarSeriesService = { provide: 'ChartsPolarSeries', useValue: PolarSeries };
export const RadarSeriesService = { provide: 'ChartsRadarSeries', useValue: RadarSeries };
export const SmaIndicatorService = { provide: 'ChartsSmaIndicator', useValue: SmaIndicator };
export const TmaIndicatorService = { provide: 'ChartsTmaIndicator', useValue: TmaIndicator };
export const EmaIndicatorService = { provide: 'ChartsEmaIndicator', useValue: EmaIndicator };
export const AccumulationDistributionIndicatorService = { provide: 'ChartsAccumulationDistributionIndicator', useValue: AccumulationDistributionIndicator };
export const MacdIndicatorService = { provide: 'ChartsMacdIndicator', useValue: MacdIndicator };
export const AtrIndicatorService = { provide: 'ChartsAtrIndicator', useValue: AtrIndicator };
export const RsiIndicatorService = { provide: 'ChartsRsiIndicator', useValue: RsiIndicator };
export const MomentumIndicatorService = { provide: 'ChartsMomentumIndicator', useValue: MomentumIndicator };
export const StochasticIndicatorService = { provide: 'ChartsStochasticIndicator', useValue: StochasticIndicator };
export const BollingerBandsService = { provide: 'ChartsBollingerBands', useValue: BollingerBands };
export const BoxAndWhiskerSeriesService = { provide: 'ChartsBoxAndWhiskerSeries', useValue: BoxAndWhiskerSeries };
export const HistogramSeriesService = { provide: 'ChartsHistogramSeries', useValue: HistogramSeries };
export const ErrorBarService = { provide: 'ChartsErrorBar', useValue: ErrorBar };
export const TrendlinesService = { provide: 'ChartsTrendlines', useValue: Trendlines };
export const DateTimeCategoryService = { provide: 'ChartsDateTimeCategory', useValue: DateTimeCategory };
export const MultiColoredLineSeriesService = { provide: 'ChartsMultiColoredLineSeries', useValue: MultiColoredLineSeries };
export const MultiColoredAreaSeriesService = { provide: 'ChartsMultiColoredAreaSeries', useValue: MultiColoredAreaSeries };
export const MultiLevelLabelService = { provide: 'ChartsMultiLevelLabel', useValue: MultiLevelLabel };
export const ParetoSeriesService = { provide: 'ChartsParetoSeries', useValue: ParetoSeries };
export const ExportService = { provide: 'ChartsExport', useValue: Export };
export const DataEditingService = { provide: 'ChartsDataEditing', useValue: DataEditing };
export const HighlightService = { provide: 'ChartsHighlight', useValue: Highlight };
/**
 * NgModule definition for the Chart component with providers.
 */
export class ChartAllModule {
}
ChartAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChartAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartAllModule, imports: [CommonModule, ChartModule], exports: [ChartModule] });
ChartAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartAllModule, providers: [
        LineSeriesService,
        ScatterSeriesService,
        ColumnSeriesService,
        SplineSeriesService,
        SplineAreaSeriesService,
        StripLineService,
        AreaSeriesService,
        ScrollBarService,
        StepLineSeriesService,
        StepAreaSeriesService,
        StackingColumnSeriesService,
        StackingLineSeriesService,
        StackingAreaSeriesService,
        StackingStepAreaSeriesService,
        BarSeriesService,
        StackingBarSeriesService,
        RangeColumnSeriesService,
        BubbleSeriesService,
        TooltipService,
        CrosshairService,
        CategoryService,
        DateTimeService,
        LogarithmicService,
        LegendService,
        ZoomService,
        DataLabelService,
        SelectionService,
        ChartAnnotationService,
        HiloSeriesService,
        HiloOpenCloseSeriesService,
        WaterfallSeriesService,
        RangeAreaSeriesService,
        RangeStepAreaSeriesService,
        SplineRangeAreaSeriesService,
        CandleSeriesService,
        PolarSeriesService,
        RadarSeriesService,
        SmaIndicatorService,
        TmaIndicatorService,
        EmaIndicatorService,
        AccumulationDistributionIndicatorService,
        MacdIndicatorService,
        AtrIndicatorService,
        RsiIndicatorService,
        MomentumIndicatorService,
        StochasticIndicatorService,
        BollingerBandsService,
        BoxAndWhiskerSeriesService,
        HistogramSeriesService,
        ErrorBarService,
        TrendlinesService,
        DateTimeCategoryService,
        MultiColoredLineSeriesService,
        MultiColoredAreaSeriesService,
        MultiLevelLabelService,
        ParetoSeriesService,
        ExportService,
        DataEditingService,
        HighlightService
    ], imports: [[CommonModule, ChartModule], ChartModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChartAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ChartModule],
                    exports: [
                        ChartModule
                    ],
                    providers: [
                        LineSeriesService,
                        ScatterSeriesService,
                        ColumnSeriesService,
                        SplineSeriesService,
                        SplineAreaSeriesService,
                        StripLineService,
                        AreaSeriesService,
                        ScrollBarService,
                        StepLineSeriesService,
                        StepAreaSeriesService,
                        StackingColumnSeriesService,
                        StackingLineSeriesService,
                        StackingAreaSeriesService,
                        StackingStepAreaSeriesService,
                        BarSeriesService,
                        StackingBarSeriesService,
                        RangeColumnSeriesService,
                        BubbleSeriesService,
                        TooltipService,
                        CrosshairService,
                        CategoryService,
                        DateTimeService,
                        LogarithmicService,
                        LegendService,
                        ZoomService,
                        DataLabelService,
                        SelectionService,
                        ChartAnnotationService,
                        HiloSeriesService,
                        HiloOpenCloseSeriesService,
                        WaterfallSeriesService,
                        RangeAreaSeriesService,
                        RangeStepAreaSeriesService,
                        SplineRangeAreaSeriesService,
                        CandleSeriesService,
                        PolarSeriesService,
                        RadarSeriesService,
                        SmaIndicatorService,
                        TmaIndicatorService,
                        EmaIndicatorService,
                        AccumulationDistributionIndicatorService,
                        MacdIndicatorService,
                        AtrIndicatorService,
                        RsiIndicatorService,
                        MomentumIndicatorService,
                        StochasticIndicatorService,
                        BollingerBandsService,
                        BoxAndWhiskerSeriesService,
                        HistogramSeriesService,
                        ErrorBarService,
                        TrendlinesService,
                        DateTimeCategoryService,
                        MultiColoredLineSeriesService,
                        MultiColoredAreaSeriesService,
                        MultiLevelLabelService,
                        ParetoSeriesService,
                        ExportService,
                        DataEditingService,
                        HighlightService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jaGFydC9jaGFydC1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWUvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGlDQUFpQyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sd0JBQXdCLENBQUE7O0FBR243QixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDO0FBQ3JHLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFrQixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFDLENBQUM7QUFDOUcsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQztBQUMzRyxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO0FBQzNHLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFrQixFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztBQUN2SCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDO0FBQ2xHLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUM7QUFDckcsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQztBQUNsRyxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQyxDQUFDO0FBQ2pILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFrQixFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFDLENBQUM7QUFDakgsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBQyxDQUFDO0FBQ25JLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFrQixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztBQUM3SCxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFDLENBQUM7QUFDN0gsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBQyxDQUFDO0FBQ3pJLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDbEcsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBQyxDQUFDO0FBQzFILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFrQixFQUFFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQztBQUMxSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO0FBQzNHLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBa0IsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsQ0FBQztBQUM1RixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDO0FBQ2xHLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBa0IsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO0FBQy9GLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBa0IsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO0FBQy9GLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUM7QUFDeEcsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFrQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO0FBQ3pGLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBa0IsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQztBQUNuRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDO0FBQ2xHLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDbEcsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUMsQ0FBQztBQUNwSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDO0FBQ3JHLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFrQixFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztBQUNoSSxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBQyxDQUFDO0FBQ3BILE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFrQixFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFDLENBQUM7QUFDcEgsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBQyxDQUFDO0FBQ2hJLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFrQixFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUMsQ0FBQztBQUN0SSxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO0FBQzNHLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUM7QUFDeEcsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQztBQUN4RyxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO0FBQzNHLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFrQixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7QUFDM0csTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQztBQUMzRyxNQUFNLENBQUMsTUFBTSx3Q0FBd0MsR0FBa0IsRUFBRSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsUUFBUSxFQUFFLGlDQUFpQyxFQUFDLENBQUM7QUFDMUssTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUMsQ0FBQztBQUM5RyxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO0FBQzNHLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFrQixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7QUFDM0csTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBQyxDQUFDO0FBQzFILE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFrQixFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztBQUNoSSxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQyxDQUFDO0FBQ2pILE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFrQixFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztBQUNoSSxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBQyxDQUFDO0FBQ3BILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBa0IsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO0FBQy9GLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFrQixFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDLENBQUM7QUFDckcsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDO0FBQ3ZILE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFrQixFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQztBQUN6SSxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFDLENBQUM7QUFDekksTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUMsQ0FBQztBQUNwSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBQyxDQUFDO0FBQzNHLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBa0IsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQztBQUN6RixNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBQ3hHLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFFbEc7O0dBRUc7QUFvRUgsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxZQWxFYixZQUFZLEVBQUUsV0FBVyxhQUUvQixXQUFXOzRHQWdFTixjQUFjLGFBOURiO1FBQ04saUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsNEJBQTRCO1FBQzVCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHdDQUF3QztRQUN4QyxvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGdCQUFnQjtLQUNuQixZQWhFUSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsRUFFaEMsV0FBVzsyRkFnRU4sY0FBYztrQkFuRTFCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQztvQkFDcEMsT0FBTyxFQUFFO3dCQUNMLFdBQVc7cUJBQ2Q7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsZ0JBQWdCO3dCQUNoQixxQkFBcUI7d0JBQ3JCLHFCQUFxQjt3QkFDckIsMkJBQTJCO3dCQUMzQix5QkFBeUI7d0JBQ3pCLHlCQUF5Qjt3QkFDekIsNkJBQTZCO3dCQUM3QixnQkFBZ0I7d0JBQ2hCLHdCQUF3Qjt3QkFDeEIsd0JBQXdCO3dCQUN4QixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsaUJBQWlCO3dCQUNqQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0QiwwQkFBMEI7d0JBQzFCLDRCQUE0Qjt3QkFDNUIsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsd0NBQXdDO3dCQUN4QyxvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQix3QkFBd0I7d0JBQ3hCLDBCQUEwQjt3QkFDMUIscUJBQXFCO3dCQUNyQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLHVCQUF1Qjt3QkFDdkIsNkJBQTZCO3dCQUM3Qiw2QkFBNkI7d0JBQzdCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3FCQUNuQjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHJlbmRsaW5lRGlyZWN0aXZlLCBUcmVuZGxpbmVzRGlyZWN0aXZlIH0gZnJvbSAnLi90cmVuZGxpbmVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTZWdtZW50RGlyZWN0aXZlLCBTZWdtZW50c0RpcmVjdGl2ZSB9IGZyb20gJy4vc2VnbWVudHMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNlcmllc0RpcmVjdGl2ZSwgU2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc2VyaWVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdHJpcExpbmVEaXJlY3RpdmUsIFN0cmlwTGluZXNEaXJlY3RpdmUgfSBmcm9tICcuL3N0cmlwbGluZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IENhdGVnb3J5RGlyZWN0aXZlLCBDYXRlZ29yaWVzRGlyZWN0aXZlIH0gZnJvbSAnLi9jYXRlZ29yaWVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNdWx0aUxldmVsTGFiZWxEaXJlY3RpdmUsIE11bHRpTGV2ZWxMYWJlbHNEaXJlY3RpdmUgfSBmcm9tICcuL211bHRpbGV2ZWxsYWJlbHMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEF4aXNEaXJlY3RpdmUsIEF4ZXNEaXJlY3RpdmUgfSBmcm9tICcuL2F4ZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJvd0RpcmVjdGl2ZSwgUm93c0RpcmVjdGl2ZSB9IGZyb20gJy4vcm93cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sdW1uRGlyZWN0aXZlLCBDb2x1bW5zRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2x1bW5zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSYW5nZUNvbG9yU2V0dGluZ0RpcmVjdGl2ZSwgUmFuZ2VDb2xvclNldHRpbmdzRGlyZWN0aXZlIH0gZnJvbSAnLi9yYW5nZWNvbG9yc2V0dGluZ3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFubm90YXRpb25EaXJlY3RpdmUsIEFubm90YXRpb25zRGlyZWN0aXZlIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2VsZWN0ZWREYXRhSW5kZXhEaXJlY3RpdmUsIFNlbGVjdGVkRGF0YUluZGV4ZXNEaXJlY3RpdmUgfSBmcm9tICcuL3NlbGVjdGVkZGF0YWluZGV4ZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEluZGljYXRvckRpcmVjdGl2ZSwgSW5kaWNhdG9yc0RpcmVjdGl2ZSB9IGZyb20gJy4vaW5kaWNhdG9ycy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydE1vZHVsZSB9IGZyb20gJy4vY2hhcnQubW9kdWxlJztcbmltcG9ydCB7TGluZVNlcmllcywgU2NhdHRlclNlcmllcywgQ29sdW1uU2VyaWVzLCBTcGxpbmVTZXJpZXMsIFNwbGluZUFyZWFTZXJpZXMsIFN0cmlwTGluZSwgQXJlYVNlcmllcywgU2Nyb2xsQmFyLCBTdGVwTGluZVNlcmllcywgU3RlcEFyZWFTZXJpZXMsIFN0YWNraW5nQ29sdW1uU2VyaWVzLCBTdGFja2luZ0xpbmVTZXJpZXMsIFN0YWNraW5nQXJlYVNlcmllcywgU3RhY2tpbmdTdGVwQXJlYVNlcmllcywgQmFyU2VyaWVzLCBTdGFja2luZ0JhclNlcmllcywgUmFuZ2VDb2x1bW5TZXJpZXMsIEJ1YmJsZVNlcmllcywgVG9vbHRpcCwgQ3Jvc3NoYWlyLCBDYXRlZ29yeSwgRGF0ZVRpbWUsIExvZ2FyaXRobWljLCBMZWdlbmQsIFpvb20sIERhdGFMYWJlbCwgU2VsZWN0aW9uLCBDaGFydEFubm90YXRpb24sIEhpbG9TZXJpZXMsIEhpbG9PcGVuQ2xvc2VTZXJpZXMsIFdhdGVyZmFsbFNlcmllcywgUmFuZ2VBcmVhU2VyaWVzLCBSYW5nZVN0ZXBBcmVhU2VyaWVzLCBTcGxpbmVSYW5nZUFyZWFTZXJpZXMsIENhbmRsZVNlcmllcywgUG9sYXJTZXJpZXMsIFJhZGFyU2VyaWVzLCBTbWFJbmRpY2F0b3IsIFRtYUluZGljYXRvciwgRW1hSW5kaWNhdG9yLCBBY2N1bXVsYXRpb25EaXN0cmlidXRpb25JbmRpY2F0b3IsIE1hY2RJbmRpY2F0b3IsIEF0ckluZGljYXRvciwgUnNpSW5kaWNhdG9yLCBNb21lbnR1bUluZGljYXRvciwgU3RvY2hhc3RpY0luZGljYXRvciwgQm9sbGluZ2VyQmFuZHMsIEJveEFuZFdoaXNrZXJTZXJpZXMsIEhpc3RvZ3JhbVNlcmllcywgRXJyb3JCYXIsIFRyZW5kbGluZXMsIERhdGVUaW1lQ2F0ZWdvcnksIE11bHRpQ29sb3JlZExpbmVTZXJpZXMsIE11bHRpQ29sb3JlZEFyZWFTZXJpZXMsIE11bHRpTGV2ZWxMYWJlbCwgUGFyZXRvU2VyaWVzLCBFeHBvcnQsIERhdGFFZGl0aW5nLCBIaWdobGlnaHR9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1jaGFydHMnXG5cblxuZXhwb3J0IGNvbnN0IExpbmVTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzTGluZVNlcmllcycsIHVzZVZhbHVlOiBMaW5lU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBTY2F0dGVyU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1NjYXR0ZXJTZXJpZXMnLCB1c2VWYWx1ZTogU2NhdHRlclNlcmllc307XG5leHBvcnQgY29uc3QgQ29sdW1uU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0NvbHVtblNlcmllcycsIHVzZVZhbHVlOiBDb2x1bW5TZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFNwbGluZVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNTcGxpbmVTZXJpZXMnLCB1c2VWYWx1ZTogU3BsaW5lU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBTcGxpbmVBcmVhU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1NwbGluZUFyZWFTZXJpZXMnLCB1c2VWYWx1ZTogU3BsaW5lQXJlYVNlcmllc307XG5leHBvcnQgY29uc3QgU3RyaXBMaW5lU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1N0cmlwTGluZScsIHVzZVZhbHVlOiBTdHJpcExpbmV9O1xuZXhwb3J0IGNvbnN0IEFyZWFTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQXJlYVNlcmllcycsIHVzZVZhbHVlOiBBcmVhU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBTY3JvbGxCYXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU2Nyb2xsQmFyJywgdXNlVmFsdWU6IFNjcm9sbEJhcn07XG5leHBvcnQgY29uc3QgU3RlcExpbmVTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU3RlcExpbmVTZXJpZXMnLCB1c2VWYWx1ZTogU3RlcExpbmVTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFN0ZXBBcmVhU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1N0ZXBBcmVhU2VyaWVzJywgdXNlVmFsdWU6IFN0ZXBBcmVhU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBTdGFja2luZ0NvbHVtblNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNTdGFja2luZ0NvbHVtblNlcmllcycsIHVzZVZhbHVlOiBTdGFja2luZ0NvbHVtblNlcmllc307XG5leHBvcnQgY29uc3QgU3RhY2tpbmdMaW5lU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1N0YWNraW5nTGluZVNlcmllcycsIHVzZVZhbHVlOiBTdGFja2luZ0xpbmVTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFN0YWNraW5nQXJlYVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNTdGFja2luZ0FyZWFTZXJpZXMnLCB1c2VWYWx1ZTogU3RhY2tpbmdBcmVhU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBTdGFja2luZ1N0ZXBBcmVhU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1N0YWNraW5nU3RlcEFyZWFTZXJpZXMnLCB1c2VWYWx1ZTogU3RhY2tpbmdTdGVwQXJlYVNlcmllc307XG5leHBvcnQgY29uc3QgQmFyU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0JhclNlcmllcycsIHVzZVZhbHVlOiBCYXJTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFN0YWNraW5nQmFyU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1N0YWNraW5nQmFyU2VyaWVzJywgdXNlVmFsdWU6IFN0YWNraW5nQmFyU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBSYW5nZUNvbHVtblNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNSYW5nZUNvbHVtblNlcmllcycsIHVzZVZhbHVlOiBSYW5nZUNvbHVtblNlcmllc307XG5leHBvcnQgY29uc3QgQnViYmxlU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0J1YmJsZVNlcmllcycsIHVzZVZhbHVlOiBCdWJibGVTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFRvb2x0aXBTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzVG9vbHRpcCcsIHVzZVZhbHVlOiBUb29sdGlwfTtcbmV4cG9ydCBjb25zdCBDcm9zc2hhaXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQ3Jvc3NoYWlyJywgdXNlVmFsdWU6IENyb3NzaGFpcn07XG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQ2F0ZWdvcnknLCB1c2VWYWx1ZTogQ2F0ZWdvcnl9O1xuZXhwb3J0IGNvbnN0IERhdGVUaW1lU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0RhdGVUaW1lJywgdXNlVmFsdWU6IERhdGVUaW1lfTtcbmV4cG9ydCBjb25zdCBMb2dhcml0aG1pY1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNMb2dhcml0aG1pYycsIHVzZVZhbHVlOiBMb2dhcml0aG1pY307XG5leHBvcnQgY29uc3QgTGVnZW5kU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0xlZ2VuZCcsIHVzZVZhbHVlOiBMZWdlbmR9O1xuZXhwb3J0IGNvbnN0IFpvb21TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzWm9vbScsIHVzZVZhbHVlOiBab29tfTtcbmV4cG9ydCBjb25zdCBEYXRhTGFiZWxTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzRGF0YUxhYmVsJywgdXNlVmFsdWU6IERhdGFMYWJlbH07XG5leHBvcnQgY29uc3QgU2VsZWN0aW9uU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1NlbGVjdGlvbicsIHVzZVZhbHVlOiBTZWxlY3Rpb259O1xuZXhwb3J0IGNvbnN0IENoYXJ0QW5ub3RhdGlvblNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNDaGFydEFubm90YXRpb24nLCB1c2VWYWx1ZTogQ2hhcnRBbm5vdGF0aW9ufTtcbmV4cG9ydCBjb25zdCBIaWxvU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0hpbG9TZXJpZXMnLCB1c2VWYWx1ZTogSGlsb1Nlcmllc307XG5leHBvcnQgY29uc3QgSGlsb09wZW5DbG9zZVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNIaWxvT3BlbkNsb3NlU2VyaWVzJywgdXNlVmFsdWU6IEhpbG9PcGVuQ2xvc2VTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFdhdGVyZmFsbFNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNXYXRlcmZhbGxTZXJpZXMnLCB1c2VWYWx1ZTogV2F0ZXJmYWxsU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBSYW5nZUFyZWFTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzUmFuZ2VBcmVhU2VyaWVzJywgdXNlVmFsdWU6IFJhbmdlQXJlYVNlcmllc307XG5leHBvcnQgY29uc3QgUmFuZ2VTdGVwQXJlYVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNSYW5nZVN0ZXBBcmVhU2VyaWVzJywgdXNlVmFsdWU6IFJhbmdlU3RlcEFyZWFTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFNwbGluZVJhbmdlQXJlYVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNTcGxpbmVSYW5nZUFyZWFTZXJpZXMnLCB1c2VWYWx1ZTogU3BsaW5lUmFuZ2VBcmVhU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBDYW5kbGVTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQ2FuZGxlU2VyaWVzJywgdXNlVmFsdWU6IENhbmRsZVNlcmllc307XG5leHBvcnQgY29uc3QgUG9sYXJTZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzUG9sYXJTZXJpZXMnLCB1c2VWYWx1ZTogUG9sYXJTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IFJhZGFyU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1JhZGFyU2VyaWVzJywgdXNlVmFsdWU6IFJhZGFyU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBTbWFJbmRpY2F0b3JTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU21hSW5kaWNhdG9yJywgdXNlVmFsdWU6IFNtYUluZGljYXRvcn07XG5leHBvcnQgY29uc3QgVG1hSW5kaWNhdG9yU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1RtYUluZGljYXRvcicsIHVzZVZhbHVlOiBUbWFJbmRpY2F0b3J9O1xuZXhwb3J0IGNvbnN0IEVtYUluZGljYXRvclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNFbWFJbmRpY2F0b3InLCB1c2VWYWx1ZTogRW1hSW5kaWNhdG9yfTtcbmV4cG9ydCBjb25zdCBBY2N1bXVsYXRpb25EaXN0cmlidXRpb25JbmRpY2F0b3JTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzQWNjdW11bGF0aW9uRGlzdHJpYnV0aW9uSW5kaWNhdG9yJywgdXNlVmFsdWU6IEFjY3VtdWxhdGlvbkRpc3RyaWJ1dGlvbkluZGljYXRvcn07XG5leHBvcnQgY29uc3QgTWFjZEluZGljYXRvclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNNYWNkSW5kaWNhdG9yJywgdXNlVmFsdWU6IE1hY2RJbmRpY2F0b3J9O1xuZXhwb3J0IGNvbnN0IEF0ckluZGljYXRvclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNBdHJJbmRpY2F0b3InLCB1c2VWYWx1ZTogQXRySW5kaWNhdG9yfTtcbmV4cG9ydCBjb25zdCBSc2lJbmRpY2F0b3JTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzUnNpSW5kaWNhdG9yJywgdXNlVmFsdWU6IFJzaUluZGljYXRvcn07XG5leHBvcnQgY29uc3QgTW9tZW50dW1JbmRpY2F0b3JTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzTW9tZW50dW1JbmRpY2F0b3InLCB1c2VWYWx1ZTogTW9tZW50dW1JbmRpY2F0b3J9O1xuZXhwb3J0IGNvbnN0IFN0b2NoYXN0aWNJbmRpY2F0b3JTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzU3RvY2hhc3RpY0luZGljYXRvcicsIHVzZVZhbHVlOiBTdG9jaGFzdGljSW5kaWNhdG9yfTtcbmV4cG9ydCBjb25zdCBCb2xsaW5nZXJCYW5kc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNCb2xsaW5nZXJCYW5kcycsIHVzZVZhbHVlOiBCb2xsaW5nZXJCYW5kc307XG5leHBvcnQgY29uc3QgQm94QW5kV2hpc2tlclNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNCb3hBbmRXaGlza2VyU2VyaWVzJywgdXNlVmFsdWU6IEJveEFuZFdoaXNrZXJTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IEhpc3RvZ3JhbVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNIaXN0b2dyYW1TZXJpZXMnLCB1c2VWYWx1ZTogSGlzdG9ncmFtU2VyaWVzfTtcbmV4cG9ydCBjb25zdCBFcnJvckJhclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNFcnJvckJhcicsIHVzZVZhbHVlOiBFcnJvckJhcn07XG5leHBvcnQgY29uc3QgVHJlbmRsaW5lc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNUcmVuZGxpbmVzJywgdXNlVmFsdWU6IFRyZW5kbGluZXN9O1xuZXhwb3J0IGNvbnN0IERhdGVUaW1lQ2F0ZWdvcnlTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzRGF0ZVRpbWVDYXRlZ29yeScsIHVzZVZhbHVlOiBEYXRlVGltZUNhdGVnb3J5fTtcbmV4cG9ydCBjb25zdCBNdWx0aUNvbG9yZWRMaW5lU2VyaWVzU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c011bHRpQ29sb3JlZExpbmVTZXJpZXMnLCB1c2VWYWx1ZTogTXVsdGlDb2xvcmVkTGluZVNlcmllc307XG5leHBvcnQgY29uc3QgTXVsdGlDb2xvcmVkQXJlYVNlcmllc1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNNdWx0aUNvbG9yZWRBcmVhU2VyaWVzJywgdXNlVmFsdWU6IE11bHRpQ29sb3JlZEFyZWFTZXJpZXN9O1xuZXhwb3J0IGNvbnN0IE11bHRpTGV2ZWxMYWJlbFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNNdWx0aUxldmVsTGFiZWwnLCB1c2VWYWx1ZTogTXVsdGlMZXZlbExhYmVsfTtcbmV4cG9ydCBjb25zdCBQYXJldG9TZXJpZXNTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzUGFyZXRvU2VyaWVzJywgdXNlVmFsdWU6IFBhcmV0b1Nlcmllc307XG5leHBvcnQgY29uc3QgRXhwb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0V4cG9ydCcsIHVzZVZhbHVlOiBFeHBvcnR9O1xuZXhwb3J0IGNvbnN0IERhdGFFZGl0aW5nU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c0RhdGFFZGl0aW5nJywgdXNlVmFsdWU6IERhdGFFZGl0aW5nfTtcbmV4cG9ydCBjb25zdCBIaWdobGlnaHRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzSGlnaGxpZ2h0JywgdXNlVmFsdWU6IEhpZ2hsaWdodH07XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIENoYXJ0IGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDaGFydE1vZHVsZV0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBDaGFydE1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgTGluZVNlcmllc1NlcnZpY2UsXG4gICAgICAgIFNjYXR0ZXJTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBDb2x1bW5TZXJpZXNTZXJ2aWNlLFxuICAgICAgICBTcGxpbmVTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBTcGxpbmVBcmVhU2VyaWVzU2VydmljZSxcbiAgICAgICAgU3RyaXBMaW5lU2VydmljZSxcbiAgICAgICAgQXJlYVNlcmllc1NlcnZpY2UsXG4gICAgICAgIFNjcm9sbEJhclNlcnZpY2UsXG4gICAgICAgIFN0ZXBMaW5lU2VyaWVzU2VydmljZSxcbiAgICAgICAgU3RlcEFyZWFTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBTdGFja2luZ0NvbHVtblNlcmllc1NlcnZpY2UsXG4gICAgICAgIFN0YWNraW5nTGluZVNlcmllc1NlcnZpY2UsXG4gICAgICAgIFN0YWNraW5nQXJlYVNlcmllc1NlcnZpY2UsXG4gICAgICAgIFN0YWNraW5nU3RlcEFyZWFTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBCYXJTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBTdGFja2luZ0JhclNlcmllc1NlcnZpY2UsXG4gICAgICAgIFJhbmdlQ29sdW1uU2VyaWVzU2VydmljZSxcbiAgICAgICAgQnViYmxlU2VyaWVzU2VydmljZSxcbiAgICAgICAgVG9vbHRpcFNlcnZpY2UsXG4gICAgICAgIENyb3NzaGFpclNlcnZpY2UsXG4gICAgICAgIENhdGVnb3J5U2VydmljZSxcbiAgICAgICAgRGF0ZVRpbWVTZXJ2aWNlLFxuICAgICAgICBMb2dhcml0aG1pY1NlcnZpY2UsXG4gICAgICAgIExlZ2VuZFNlcnZpY2UsXG4gICAgICAgIFpvb21TZXJ2aWNlLFxuICAgICAgICBEYXRhTGFiZWxTZXJ2aWNlLFxuICAgICAgICBTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBDaGFydEFubm90YXRpb25TZXJ2aWNlLFxuICAgICAgICBIaWxvU2VyaWVzU2VydmljZSxcbiAgICAgICAgSGlsb09wZW5DbG9zZVNlcmllc1NlcnZpY2UsXG4gICAgICAgIFdhdGVyZmFsbFNlcmllc1NlcnZpY2UsXG4gICAgICAgIFJhbmdlQXJlYVNlcmllc1NlcnZpY2UsXG4gICAgICAgIFJhbmdlU3RlcEFyZWFTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBTcGxpbmVSYW5nZUFyZWFTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBDYW5kbGVTZXJpZXNTZXJ2aWNlLFxuICAgICAgICBQb2xhclNlcmllc1NlcnZpY2UsXG4gICAgICAgIFJhZGFyU2VyaWVzU2VydmljZSxcbiAgICAgICAgU21hSW5kaWNhdG9yU2VydmljZSxcbiAgICAgICAgVG1hSW5kaWNhdG9yU2VydmljZSxcbiAgICAgICAgRW1hSW5kaWNhdG9yU2VydmljZSxcbiAgICAgICAgQWNjdW11bGF0aW9uRGlzdHJpYnV0aW9uSW5kaWNhdG9yU2VydmljZSxcbiAgICAgICAgTWFjZEluZGljYXRvclNlcnZpY2UsXG4gICAgICAgIEF0ckluZGljYXRvclNlcnZpY2UsXG4gICAgICAgIFJzaUluZGljYXRvclNlcnZpY2UsXG4gICAgICAgIE1vbWVudHVtSW5kaWNhdG9yU2VydmljZSxcbiAgICAgICAgU3RvY2hhc3RpY0luZGljYXRvclNlcnZpY2UsXG4gICAgICAgIEJvbGxpbmdlckJhbmRzU2VydmljZSxcbiAgICAgICAgQm94QW5kV2hpc2tlclNlcmllc1NlcnZpY2UsXG4gICAgICAgIEhpc3RvZ3JhbVNlcmllc1NlcnZpY2UsXG4gICAgICAgIEVycm9yQmFyU2VydmljZSxcbiAgICAgICAgVHJlbmRsaW5lc1NlcnZpY2UsXG4gICAgICAgIERhdGVUaW1lQ2F0ZWdvcnlTZXJ2aWNlLFxuICAgICAgICBNdWx0aUNvbG9yZWRMaW5lU2VyaWVzU2VydmljZSxcbiAgICAgICAgTXVsdGlDb2xvcmVkQXJlYVNlcmllc1NlcnZpY2UsXG4gICAgICAgIE11bHRpTGV2ZWxMYWJlbFNlcnZpY2UsXG4gICAgICAgIFBhcmV0b1Nlcmllc1NlcnZpY2UsXG4gICAgICAgIEV4cG9ydFNlcnZpY2UsXG4gICAgICAgIERhdGFFZGl0aW5nU2VydmljZSxcbiAgICAgICAgSGlnaGxpZ2h0U2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRBbGxNb2R1bGUgeyB9Il19