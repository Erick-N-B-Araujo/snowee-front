import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmithchartModule } from './smithchart.module';
import { SmithchartLegend, TooltipRender } from '@syncfusion/ej2-charts';
import * as i0 from "@angular/core";
export const SmithchartLegendService = { provide: 'ChartsSmithchartLegend', useValue: SmithchartLegend };
export const TooltipRenderService = { provide: 'ChartsTooltipRender', useValue: TooltipRender };
/**
 * NgModule definition for the Smithchart component with providers.
 */
export class SmithchartAllModule {
}
SmithchartAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SmithchartAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartAllModule, imports: [CommonModule, SmithchartModule], exports: [SmithchartModule] });
SmithchartAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartAllModule, providers: [
        SmithchartLegendService,
        TooltipRenderService
    ], imports: [[CommonModule, SmithchartModule], SmithchartModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmithchartAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, SmithchartModule],
                    exports: [
                        SmithchartModule
                    ],
                    providers: [
                        SmithchartLegendService,
                        TooltipRenderService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21pdGhjaGFydC1hbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NtaXRoY2hhcnQvc21pdGhjaGFydC1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUE7O0FBR3RFLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFrQixFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztBQUN2SCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDO0FBRTlHOztHQUVHO0FBV0gsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLFlBVGxCLFlBQVksRUFBRSxnQkFBZ0IsYUFFcEMsZ0JBQWdCO2lIQU9YLG1CQUFtQixhQUxsQjtRQUNOLHVCQUF1QjtRQUN2QixvQkFBb0I7S0FDdkIsWUFQUSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxFQUVyQyxnQkFBZ0I7MkZBT1gsbUJBQW1CO2tCQVYvQixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztvQkFDekMsT0FBTyxFQUFFO3dCQUNMLGdCQUFnQjtxQkFDbkI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNOLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3FCQUN2QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU21pdGhjaGFydFNlcmllc0RpcmVjdGl2ZSwgU21pdGhjaGFydFNlcmllc0NvbGxlY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL3Nlcmllcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU21pdGhjaGFydENvbXBvbmVudCB9IGZyb20gJy4vc21pdGhjaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU21pdGhjaGFydE1vZHVsZSB9IGZyb20gJy4vc21pdGhjaGFydC5tb2R1bGUnO1xuaW1wb3J0IHtTbWl0aGNoYXJ0TGVnZW5kLCBUb29sdGlwUmVuZGVyfSBmcm9tICdAc3luY2Z1c2lvbi9lajItY2hhcnRzJ1xuXG5cbmV4cG9ydCBjb25zdCBTbWl0aGNoYXJ0TGVnZW5kU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0NoYXJ0c1NtaXRoY2hhcnRMZWdlbmQnLCB1c2VWYWx1ZTogU21pdGhjaGFydExlZ2VuZH07XG5leHBvcnQgY29uc3QgVG9vbHRpcFJlbmRlclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdDaGFydHNUb29sdGlwUmVuZGVyJywgdXNlVmFsdWU6IFRvb2x0aXBSZW5kZXJ9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBTbWl0aGNoYXJ0IGNvbXBvbmVudCB3aXRoIHByb3ZpZGVycy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTbWl0aGNoYXJ0TW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFNtaXRoY2hhcnRNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIFNtaXRoY2hhcnRMZWdlbmRTZXJ2aWNlLFxuICAgICAgICBUb29sdGlwUmVuZGVyU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU21pdGhjaGFydEFsbE1vZHVsZSB7IH0iXX0=