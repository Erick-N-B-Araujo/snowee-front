import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedColumnDirective, StackedColumnsDirective } from './stacked-column.directive';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { AggregateColumnDirective, AggregateColumnsDirective } from './aggregate-columns.directive';
import { AggregateDirective, AggregatesDirective } from './aggregates.directive';
import { GridComponent } from './grid.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Grid component.
 */
export class GridModule {
}
GridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridModule, declarations: [GridComponent,
        StackedColumnDirective,
        StackedColumnsDirective,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective], imports: [CommonModule], exports: [GridComponent,
        StackedColumnDirective,
        StackedColumnsDirective,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective] });
GridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        GridComponent,
                        StackedColumnDirective,
                        StackedColumnsDirective,
                        ColumnDirective,
                        ColumnsDirective,
                        AggregateColumnDirective,
                        AggregateColumnsDirective,
                        AggregateDirective,
                        AggregatesDirective
                    ],
                    exports: [
                        GridComponent,
                        StackedColumnDirective,
                        StackedColumnsDirective,
                        ColumnDirective,
                        ColumnsDirective,
                        AggregateColumnDirective,
                        AggregateColumnsDirective,
                        AggregateDirective,
                        AggregatesDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZ3JpZC9ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RixPQUFPLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUVqRDs7R0FFRztBQTBCSCxNQUFNLE9BQU8sVUFBVTs7dUdBQVYsVUFBVTt3R0FBVixVQUFVLGlCQXRCZixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLG1CQUFtQixhQVZiLFlBQVksYUFhbEIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixtQkFBbUI7d0dBR2QsVUFBVSxZQXhCVixDQUFDLFlBQVksQ0FBQzsyRkF3QmQsVUFBVTtrQkF6QnRCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1YsYUFBYTt3QkFDYixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLHdCQUF3Qjt3QkFDeEIseUJBQXlCO3dCQUN6QixrQkFBa0I7d0JBQ2xCLG1CQUFtQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQix3QkFBd0I7d0JBQ3hCLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQ3RCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTdGFja2VkQ29sdW1uRGlyZWN0aXZlLCBTdGFja2VkQ29sdW1uc0RpcmVjdGl2ZSB9IGZyb20gJy4vc3RhY2tlZC1jb2x1bW4uZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbHVtbkRpcmVjdGl2ZSwgQ29sdW1uc0RpcmVjdGl2ZSB9IGZyb20gJy4vY29sdW1ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlQ29sdW1uRGlyZWN0aXZlLCBBZ2dyZWdhdGVDb2x1bW5zRGlyZWN0aXZlIH0gZnJvbSAnLi9hZ2dyZWdhdGUtY29sdW1ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlRGlyZWN0aXZlLCBBZ2dyZWdhdGVzRGlyZWN0aXZlIH0gZnJvbSAnLi9hZ2dyZWdhdGVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLmNvbXBvbmVudCc7XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIEdyaWQgY29tcG9uZW50LlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBHcmlkQ29tcG9uZW50LFxuICAgICAgICBTdGFja2VkQ29sdW1uRGlyZWN0aXZlLFxuICAgICAgICBTdGFja2VkQ29sdW1uc0RpcmVjdGl2ZSxcbiAgICAgICAgQ29sdW1uRGlyZWN0aXZlLFxuICAgICAgICBDb2x1bW5zRGlyZWN0aXZlLFxuICAgICAgICBBZ2dyZWdhdGVDb2x1bW5EaXJlY3RpdmUsXG4gICAgICAgIEFnZ3JlZ2F0ZUNvbHVtbnNEaXJlY3RpdmUsXG4gICAgICAgIEFnZ3JlZ2F0ZURpcmVjdGl2ZSxcbiAgICAgICAgQWdncmVnYXRlc0RpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBHcmlkQ29tcG9uZW50LFxuICAgICAgICBTdGFja2VkQ29sdW1uRGlyZWN0aXZlLFxuICAgICAgICBTdGFja2VkQ29sdW1uc0RpcmVjdGl2ZSxcbiAgICAgICAgQ29sdW1uRGlyZWN0aXZlLFxuICAgICAgICBDb2x1bW5zRGlyZWN0aXZlLFxuICAgICAgICBBZ2dyZWdhdGVDb2x1bW5EaXJlY3RpdmUsXG4gICAgICAgIEFnZ3JlZ2F0ZUNvbHVtbnNEaXJlY3RpdmUsXG4gICAgICAgIEFnZ3JlZ2F0ZURpcmVjdGl2ZSxcbiAgICAgICAgQWdncmVnYXRlc0RpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgR3JpZE1vZHVsZSB7IH0iXX0=