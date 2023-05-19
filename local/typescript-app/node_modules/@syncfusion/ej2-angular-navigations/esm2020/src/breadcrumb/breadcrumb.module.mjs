import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbItemDirective, BreadcrumbItemsDirective } from './items.directive';
import { BreadcrumbComponent } from './breadcrumb.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the Breadcrumb component.
 */
export class BreadcrumbModule {
}
BreadcrumbModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BreadcrumbModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BreadcrumbModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BreadcrumbModule, declarations: [BreadcrumbComponent,
        BreadcrumbItemDirective,
        BreadcrumbItemsDirective], imports: [CommonModule], exports: [BreadcrumbComponent,
        BreadcrumbItemDirective,
        BreadcrumbItemsDirective] });
BreadcrumbModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BreadcrumbModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BreadcrumbModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        BreadcrumbComponent,
                        BreadcrumbItemDirective,
                        BreadcrumbItemsDirective
                    ],
                    exports: [
                        BreadcrumbComponent,
                        BreadcrumbItemDirective,
                        BreadcrumbItemsDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYnJlYWRjcnVtYi9icmVhZGNydW1iLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFN0Q7O0dBRUc7QUFjSCxNQUFNLE9BQU8sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCOzhHQUFoQixnQkFBZ0IsaUJBVnJCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsd0JBQXdCLGFBSmxCLFlBQVksYUFPbEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2Qix3QkFBd0I7OEdBR25CLGdCQUFnQixZQVpoQixDQUFDLFlBQVksQ0FBQzsyRkFZZCxnQkFBZ0I7a0JBYjVCLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUU7d0JBQ1YsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLHdCQUF3QjtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2Qix3QkFBd0I7cUJBQzNCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcmVhZGNydW1iSXRlbURpcmVjdGl2ZSwgQnJlYWRjcnVtYkl0ZW1zRGlyZWN0aXZlIH0gZnJvbSAnLi9pdGVtcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBCcmVhZGNydW1iIGNvbXBvbmVudC5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQnJlYWRjcnVtYkNvbXBvbmVudCxcbiAgICAgICAgQnJlYWRjcnVtYkl0ZW1EaXJlY3RpdmUsXG4gICAgICAgIEJyZWFkY3J1bWJJdGVtc0RpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBCcmVhZGNydW1iQ29tcG9uZW50LFxuICAgICAgICBCcmVhZGNydW1iSXRlbURpcmVjdGl2ZSxcbiAgICAgICAgQnJlYWRjcnVtYkl0ZW1zRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iTW9kdWxlIHsgfSJdfQ==