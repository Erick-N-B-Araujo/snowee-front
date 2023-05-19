import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from './grid.module';
import { Filter, Page, Selection, Sort, Group, Reorder, RowDD, DetailRow, Toolbar, Aggregate, Search, VirtualScroll, Edit, Resize, ExcelExport, PdfExport, CommandColumn, ContextMenu, Freeze, ColumnMenu, ColumnChooser, ForeignKey, InfiniteScroll, LazyLoadGroup } from '@syncfusion/ej2-grids';
import * as i0 from "@angular/core";
export const FilterService = { provide: 'GridsFilter', useValue: Filter };
export const PageService = { provide: 'GridsPage', useValue: Page };
export const SelectionService = { provide: 'GridsSelection', useValue: Selection };
export const SortService = { provide: 'GridsSort', useValue: Sort };
export const GroupService = { provide: 'GridsGroup', useValue: Group };
export const ReorderService = { provide: 'GridsReorder', useValue: Reorder };
export const RowDDService = { provide: 'GridsRowDD', useValue: RowDD };
export const DetailRowService = { provide: 'GridsDetailRow', useValue: DetailRow };
export const ToolbarService = { provide: 'GridsToolbar', useValue: Toolbar };
export const AggregateService = { provide: 'GridsAggregate', useValue: Aggregate };
export const SearchService = { provide: 'GridsSearch', useValue: Search };
export const VirtualScrollService = { provide: 'GridsVirtualScroll', useValue: VirtualScroll };
export const EditService = { provide: 'GridsEdit', useValue: Edit };
export const ResizeService = { provide: 'GridsResize', useValue: Resize };
export const ExcelExportService = { provide: 'GridsExcelExport', useValue: ExcelExport };
export const PdfExportService = { provide: 'GridsPdfExport', useValue: PdfExport };
export const CommandColumnService = { provide: 'GridsCommandColumn', useValue: CommandColumn };
export const ContextMenuService = { provide: 'GridsContextMenu', useValue: ContextMenu };
export const FreezeService = { provide: 'GridsFreeze', useValue: Freeze };
export const ColumnMenuService = { provide: 'GridsColumnMenu', useValue: ColumnMenu };
export const ColumnChooserService = { provide: 'GridsColumnChooser', useValue: ColumnChooser };
export const ForeignKeyService = { provide: 'GridsForeignKey', useValue: ForeignKey };
export const InfiniteScrollService = { provide: 'GridsInfiniteScroll', useValue: InfiniteScroll };
export const LazyLoadGroupService = { provide: 'GridsLazyLoadGroup', useValue: LazyLoadGroup };
/**
 * NgModule definition for the Grid component with providers.
 */
export class GridAllModule {
}
GridAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GridAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridAllModule, imports: [CommonModule, GridModule], exports: [GridModule] });
GridAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridAllModule, providers: [
        FilterService,
        PageService,
        SelectionService,
        SortService,
        GroupService,
        ReorderService,
        RowDDService,
        DetailRowService,
        ToolbarService,
        AggregateService,
        SearchService,
        VirtualScrollService,
        EditService,
        ResizeService,
        ExcelExportService,
        PdfExportService,
        CommandColumnService,
        ContextMenuService,
        FreezeService,
        ColumnMenuService,
        ColumnChooserService,
        ForeignKeyService,
        InfiniteScrollService,
        LazyLoadGroupService
    ], imports: [[CommonModule, GridModule], GridModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, GridModule],
                    exports: [
                        GridModule
                    ],
                    providers: [
                        FilterService,
                        PageService,
                        SelectionService,
                        SortService,
                        GroupService,
                        ReorderService,
                        RowDDService,
                        DetailRowService,
                        ToolbarService,
                        AggregateService,
                        SearchService,
                        VirtualScrollService,
                        EditService,
                        ResizeService,
                        ExcelExportService,
                        PdfExportService,
                        CommandColumnService,
                        ContextMenuService,
                        FreezeService,
                        ColumnMenuService,
                        ColumnChooserService,
                        ForeignKeyService,
                        InfiniteScrollService,
                        LazyLoadGroupService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1hbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2dyaWQvZ3JpZC1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLHVCQUF1QixDQUFBOztBQUdoUyxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7QUFDeEYsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFrQixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQ2xGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDakcsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFrQixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQ2xGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBa0IsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQztBQUNyRixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDLENBQUM7QUFDM0YsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFrQixFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxDQUFDO0FBQ3JGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDakcsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFrQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQyxDQUFDO0FBQzNGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDakcsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFrQixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDO0FBQ3hGLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFrQixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFDLENBQUM7QUFDN0csTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFrQixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQ2xGLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBa0IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQztBQUN4RixNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBQ3ZHLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDakcsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUMsQ0FBQztBQUM3RyxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxDQUFDO0FBQ3ZHLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBa0IsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQztBQUN4RixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQyxDQUFDO0FBQ3BHLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFrQixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFDLENBQUM7QUFDN0csTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUMsQ0FBQztBQUNwRyxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQyxDQUFDO0FBQ2hILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFrQixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFDLENBQUM7QUFFN0c7O0dBRUc7QUFpQ0gsTUFBTSxPQUFPLGFBQWE7OzBHQUFiLGFBQWE7MkdBQWIsYUFBYSxZQS9CWixZQUFZLEVBQUUsVUFBVSxhQUU5QixVQUFVOzJHQTZCTCxhQUFhLGFBM0JaO1FBQ04sYUFBYTtRQUNiLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLFlBQVk7UUFDWixjQUFjO1FBQ2QsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsV0FBVztRQUNYLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixvQkFBb0I7S0FDdkIsWUE3QlEsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLEVBRS9CLFVBQVU7MkZBNkJMLGFBQWE7a0JBaEN6QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUM7b0JBQ25DLE9BQU8sRUFBRTt3QkFDTCxVQUFVO3FCQUNiO29CQUNELFNBQVMsRUFBQzt3QkFDTixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixXQUFXO3dCQUNYLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3FCQUN2QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU3RhY2tlZENvbHVtbkRpcmVjdGl2ZSwgU3RhY2tlZENvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL3N0YWNrZWQtY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb2x1bW5EaXJlY3RpdmUsIENvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUNvbHVtbkRpcmVjdGl2ZSwgQWdncmVnYXRlQ29sdW1uc0RpcmVjdGl2ZSB9IGZyb20gJy4vYWdncmVnYXRlLWNvbHVtbnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZURpcmVjdGl2ZSwgQWdncmVnYXRlc0RpcmVjdGl2ZSB9IGZyb20gJy4vYWdncmVnYXRlcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZE1vZHVsZSB9IGZyb20gJy4vZ3JpZC5tb2R1bGUnO1xuaW1wb3J0IHtGaWx0ZXIsIFBhZ2UsIFNlbGVjdGlvbiwgU29ydCwgR3JvdXAsIFJlb3JkZXIsIFJvd0RELCBEZXRhaWxSb3csIFRvb2xiYXIsIEFnZ3JlZ2F0ZSwgU2VhcmNoLCBWaXJ0dWFsU2Nyb2xsLCBFZGl0LCBSZXNpemUsIEV4Y2VsRXhwb3J0LCBQZGZFeHBvcnQsIENvbW1hbmRDb2x1bW4sIENvbnRleHRNZW51LCBGcmVlemUsIENvbHVtbk1lbnUsIENvbHVtbkNob29zZXIsIEZvcmVpZ25LZXksIEluZmluaXRlU2Nyb2xsLCBMYXp5TG9hZEdyb3VwfSBmcm9tICdAc3luY2Z1c2lvbi9lajItZ3JpZHMnXG5cblxuZXhwb3J0IGNvbnN0IEZpbHRlclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc0ZpbHRlcicsIHVzZVZhbHVlOiBGaWx0ZXJ9O1xuZXhwb3J0IGNvbnN0IFBhZ2VTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNQYWdlJywgdXNlVmFsdWU6IFBhZ2V9O1xuZXhwb3J0IGNvbnN0IFNlbGVjdGlvblNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc1NlbGVjdGlvbicsIHVzZVZhbHVlOiBTZWxlY3Rpb259O1xuZXhwb3J0IGNvbnN0IFNvcnRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNTb3J0JywgdXNlVmFsdWU6IFNvcnR9O1xuZXhwb3J0IGNvbnN0IEdyb3VwU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzR3JvdXAnLCB1c2VWYWx1ZTogR3JvdXB9O1xuZXhwb3J0IGNvbnN0IFJlb3JkZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNSZW9yZGVyJywgdXNlVmFsdWU6IFJlb3JkZXJ9O1xuZXhwb3J0IGNvbnN0IFJvd0REU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzUm93REQnLCB1c2VWYWx1ZTogUm93RER9O1xuZXhwb3J0IGNvbnN0IERldGFpbFJvd1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc0RldGFpbFJvdycsIHVzZVZhbHVlOiBEZXRhaWxSb3d9O1xuZXhwb3J0IGNvbnN0IFRvb2xiYXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNUb29sYmFyJywgdXNlVmFsdWU6IFRvb2xiYXJ9O1xuZXhwb3J0IGNvbnN0IEFnZ3JlZ2F0ZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc0FnZ3JlZ2F0ZScsIHVzZVZhbHVlOiBBZ2dyZWdhdGV9O1xuZXhwb3J0IGNvbnN0IFNlYXJjaFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc1NlYXJjaCcsIHVzZVZhbHVlOiBTZWFyY2h9O1xuZXhwb3J0IGNvbnN0IFZpcnR1YWxTY3JvbGxTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNWaXJ0dWFsU2Nyb2xsJywgdXNlVmFsdWU6IFZpcnR1YWxTY3JvbGx9O1xuZXhwb3J0IGNvbnN0IEVkaXRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNFZGl0JywgdXNlVmFsdWU6IEVkaXR9O1xuZXhwb3J0IGNvbnN0IFJlc2l6ZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc1Jlc2l6ZScsIHVzZVZhbHVlOiBSZXNpemV9O1xuZXhwb3J0IGNvbnN0IEV4Y2VsRXhwb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzRXhjZWxFeHBvcnQnLCB1c2VWYWx1ZTogRXhjZWxFeHBvcnR9O1xuZXhwb3J0IGNvbnN0IFBkZkV4cG9ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc1BkZkV4cG9ydCcsIHVzZVZhbHVlOiBQZGZFeHBvcnR9O1xuZXhwb3J0IGNvbnN0IENvbW1hbmRDb2x1bW5TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNDb21tYW5kQ29sdW1uJywgdXNlVmFsdWU6IENvbW1hbmRDb2x1bW59O1xuZXhwb3J0IGNvbnN0IENvbnRleHRNZW51U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzQ29udGV4dE1lbnUnLCB1c2VWYWx1ZTogQ29udGV4dE1lbnV9O1xuZXhwb3J0IGNvbnN0IEZyZWV6ZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc0ZyZWV6ZScsIHVzZVZhbHVlOiBGcmVlemV9O1xuZXhwb3J0IGNvbnN0IENvbHVtbk1lbnVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNDb2x1bW5NZW51JywgdXNlVmFsdWU6IENvbHVtbk1lbnV9O1xuZXhwb3J0IGNvbnN0IENvbHVtbkNob29zZXJTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNDb2x1bW5DaG9vc2VyJywgdXNlVmFsdWU6IENvbHVtbkNob29zZXJ9O1xuZXhwb3J0IGNvbnN0IEZvcmVpZ25LZXlTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNGb3JlaWduS2V5JywgdXNlVmFsdWU6IEZvcmVpZ25LZXl9O1xuZXhwb3J0IGNvbnN0IEluZmluaXRlU2Nyb2xsU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzSW5maW5pdGVTY3JvbGwnLCB1c2VWYWx1ZTogSW5maW5pdGVTY3JvbGx9O1xuZXhwb3J0IGNvbnN0IExhenlMb2FkR3JvdXBTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNMYXp5TG9hZEdyb3VwJywgdXNlVmFsdWU6IExhenlMb2FkR3JvdXB9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBHcmlkIGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBHcmlkTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEdyaWRNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIEZpbHRlclNlcnZpY2UsXG4gICAgICAgIFBhZ2VTZXJ2aWNlLFxuICAgICAgICBTZWxlY3Rpb25TZXJ2aWNlLFxuICAgICAgICBTb3J0U2VydmljZSxcbiAgICAgICAgR3JvdXBTZXJ2aWNlLFxuICAgICAgICBSZW9yZGVyU2VydmljZSxcbiAgICAgICAgUm93RERTZXJ2aWNlLFxuICAgICAgICBEZXRhaWxSb3dTZXJ2aWNlLFxuICAgICAgICBUb29sYmFyU2VydmljZSxcbiAgICAgICAgQWdncmVnYXRlU2VydmljZSxcbiAgICAgICAgU2VhcmNoU2VydmljZSxcbiAgICAgICAgVmlydHVhbFNjcm9sbFNlcnZpY2UsXG4gICAgICAgIEVkaXRTZXJ2aWNlLFxuICAgICAgICBSZXNpemVTZXJ2aWNlLFxuICAgICAgICBFeGNlbEV4cG9ydFNlcnZpY2UsXG4gICAgICAgIFBkZkV4cG9ydFNlcnZpY2UsXG4gICAgICAgIENvbW1hbmRDb2x1bW5TZXJ2aWNlLFxuICAgICAgICBDb250ZXh0TWVudVNlcnZpY2UsXG4gICAgICAgIEZyZWV6ZVNlcnZpY2UsXG4gICAgICAgIENvbHVtbk1lbnVTZXJ2aWNlLFxuICAgICAgICBDb2x1bW5DaG9vc2VyU2VydmljZSxcbiAgICAgICAgRm9yZWlnbktleVNlcnZpY2UsXG4gICAgICAgIEluZmluaXRlU2Nyb2xsU2VydmljZSxcbiAgICAgICAgTGF6eUxvYWRHcm91cFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRBbGxNb2R1bGUgeyB9Il19