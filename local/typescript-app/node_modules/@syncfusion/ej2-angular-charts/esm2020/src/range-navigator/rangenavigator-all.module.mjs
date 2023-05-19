import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeNavigatorModule } from './rangenavigator.module';
import { RangeTooltip, PeriodSelector } from '@syncfusion/ej2-charts';
import * as i0 from "@angular/core";
export const RangeTooltipService = { provide: 'ChartsRangeTooltip', useValue: RangeTooltip };
export const PeriodSelectorService = { provide: 'ChartsPeriodSelector', useValue: PeriodSelector };
/**
 * NgModule definition for the RangeNavigator component with providers.
 */
export class RangeNavigatorAllModule {
}
RangeNavigatorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RangeNavigatorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorAllModule, imports: [CommonModule, RangeNavigatorModule], exports: [RangeNavigatorModule] });
RangeNavigatorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorAllModule, providers: [
        RangeTooltipService,
        PeriodSelectorService
    ], imports: [[CommonModule, RangeNavigatorModule], RangeNavigatorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: RangeNavigatorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RangeNavigatorModule],
                    exports: [
                        RangeNavigatorModule
                    ],
                    providers: [
                        RangeTooltipService,
                        PeriodSelectorService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VuYXZpZ2F0b3ItYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yYW5nZS1uYXZpZ2F0b3IvcmFuZ2VuYXZpZ2F0b3ItYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFlBQVksRUFBRSxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQTs7QUFHbkUsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWtCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQztBQUMzRyxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQyxDQUFDO0FBRWpIOztHQUVHO0FBV0gsTUFBTSxPQUFPLHVCQUF1Qjs7b0hBQXZCLHVCQUF1QjtxSEFBdkIsdUJBQXVCLFlBVHRCLFlBQVksRUFBRSxvQkFBb0IsYUFFeEMsb0JBQW9CO3FIQU9mLHVCQUF1QixhQUx0QjtRQUNOLG1CQUFtQjtRQUNuQixxQkFBcUI7S0FDeEIsWUFQUSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxFQUV6QyxvQkFBb0I7MkZBT2YsdUJBQXVCO2tCQVZuQyxRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztvQkFDN0MsT0FBTyxFQUFFO3dCQUNMLG9CQUFvQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLG1CQUFtQjt3QkFDbkIscUJBQXFCO3FCQUN4QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmFuZ2VuYXZpZ2F0b3JTZXJpZXNEaXJlY3RpdmUsIFJhbmdlbmF2aWdhdG9yU2VyaWVzQ29sbGVjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vc2VyaWVzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSYW5nZU5hdmlnYXRvckNvbXBvbmVudCB9IGZyb20gJy4vcmFuZ2VuYXZpZ2F0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFJhbmdlTmF2aWdhdG9yTW9kdWxlIH0gZnJvbSAnLi9yYW5nZW5hdmlnYXRvci5tb2R1bGUnO1xuaW1wb3J0IHtSYW5nZVRvb2x0aXAsIFBlcmlvZFNlbGVjdG9yfSBmcm9tICdAc3luY2Z1c2lvbi9lajItY2hhcnRzJ1xuXG5cbmV4cG9ydCBjb25zdCBSYW5nZVRvb2x0aXBTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzUmFuZ2VUb29sdGlwJywgdXNlVmFsdWU6IFJhbmdlVG9vbHRpcH07XG5leHBvcnQgY29uc3QgUGVyaW9kU2VsZWN0b3JTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnQ2hhcnRzUGVyaW9kU2VsZWN0b3InLCB1c2VWYWx1ZTogUGVyaW9kU2VsZWN0b3J9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBSYW5nZU5hdmlnYXRvciBjb21wb25lbnQgd2l0aCBwcm92aWRlcnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUmFuZ2VOYXZpZ2F0b3JNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUmFuZ2VOYXZpZ2F0b3JNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIFJhbmdlVG9vbHRpcFNlcnZpY2UsXG4gICAgICAgIFBlcmlvZFNlbGVjdG9yU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmFuZ2VOYXZpZ2F0b3JBbGxNb2R1bGUgeyB9Il19