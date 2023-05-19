import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmithchartSeriesDirective, SmithchartSeriesCollectionDirective } from './series.directive';
import { SmithchartComponent } from './smithchart.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Smithchart component.
 */
export class SmithchartModule {
}
SmithchartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SmithchartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartModule, declarations: [SmithchartComponent,
        SmithchartSeriesDirective,
        SmithchartSeriesCollectionDirective], imports: [CommonModule], exports: [SmithchartComponent,
        SmithchartSeriesDirective,
        SmithchartSeriesCollectionDirective] });
SmithchartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        SmithchartComponent,
                        SmithchartSeriesDirective,
                        SmithchartSeriesCollectionDirective
                    ],
                    exports: [
                        SmithchartComponent,
                        SmithchartSeriesDirective,
                        SmithchartSeriesCollectionDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21pdGhjaGFydC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc21pdGhjaGFydC9zbWl0aGNoYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFN0Q7O0dBRUc7QUFjSCxNQUFNLE9BQU8sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCOzhHQUFoQixnQkFBZ0IsaUJBVnJCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsbUNBQW1DLGFBSjdCLFlBQVksYUFPbEIsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixtQ0FBbUM7OEdBRzlCLGdCQUFnQixZQVpoQixDQUFDLFlBQVksQ0FBQzsyRkFZZCxnQkFBZ0I7a0JBYjVCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1YsbUJBQW1CO3dCQUNuQix5QkFBeUI7d0JBQ3pCLG1DQUFtQztxQkFDdEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG1CQUFtQjt3QkFDbkIseUJBQXlCO3dCQUN6QixtQ0FBbUM7cUJBQ3RDO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTbWl0aGNoYXJ0U2VyaWVzRGlyZWN0aXZlLCBTbWl0aGNoYXJ0U2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc2VyaWVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTbWl0aGNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9zbWl0aGNoYXJ0LmNvbXBvbmVudCc7XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIFNtaXRoY2hhcnQgY29tcG9uZW50LlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTbWl0aGNoYXJ0Q29tcG9uZW50LFxuICAgICAgICBTbWl0aGNoYXJ0U2VyaWVzRGlyZWN0aXZlLFxuICAgICAgICBTbWl0aGNoYXJ0U2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTbWl0aGNoYXJ0Q29tcG9uZW50LFxuICAgICAgICBTbWl0aGNoYXJ0U2VyaWVzRGlyZWN0aXZlLFxuICAgICAgICBTbWl0aGNoYXJ0U2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU21pdGhjaGFydE1vZHVsZSB7IH0iXX0=