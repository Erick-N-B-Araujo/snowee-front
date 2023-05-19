import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulletRangeDirective, BulletRangeCollectionDirective } from './ranges.directive';
import { BulletChartComponent } from './bulletchart.component';
import * as i0 from "@angular/core";
/**
 * NgModule definition for the BulletChart component.
 */
export class BulletChartModule {
}
BulletChartModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BulletChartModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartModule, declarations: [BulletChartComponent,
        BulletRangeDirective,
        BulletRangeCollectionDirective], imports: [CommonModule], exports: [BulletChartComponent,
        BulletRangeDirective,
        BulletRangeCollectionDirective] });
BulletChartModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        BulletChartComponent,
                        BulletRangeDirective,
                        BulletRangeCollectionDirective
                    ],
                    exports: [
                        BulletChartComponent,
                        BulletRangeDirective,
                        BulletRangeCollectionDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsbGV0Y2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2J1bGxldC1jaGFydC9idWxsZXRjaGFydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBRS9EOztHQUVHO0FBY0gsTUFBTSxPQUFPLGlCQUFpQjs7OEdBQWpCLGlCQUFpQjsrR0FBakIsaUJBQWlCLGlCQVZ0QixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLDhCQUE4QixhQUp4QixZQUFZLGFBT2xCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsOEJBQThCOytHQUd6QixpQkFBaUIsWUFaakIsQ0FBQyxZQUFZLENBQUM7MkZBWWQsaUJBQWlCO2tCQWI3QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFO3dCQUNWLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQiw4QkFBOEI7cUJBQ2pDO29CQUNELE9BQU8sRUFBRTt3QkFDTCxvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsOEJBQThCO3FCQUNqQztpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnVsbGV0UmFuZ2VEaXJlY3RpdmUsIEJ1bGxldFJhbmdlQ29sbGVjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vcmFuZ2VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCdWxsZXRDaGFydENvbXBvbmVudCB9IGZyb20gJy4vYnVsbGV0Y2hhcnQuY29tcG9uZW50JztcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgQnVsbGV0Q2hhcnQgY29tcG9uZW50LlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBCdWxsZXRDaGFydENvbXBvbmVudCxcbiAgICAgICAgQnVsbGV0UmFuZ2VEaXJlY3RpdmUsXG4gICAgICAgIEJ1bGxldFJhbmdlQ29sbGVjdGlvbkRpcmVjdGl2ZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBCdWxsZXRDaGFydENvbXBvbmVudCxcbiAgICAgICAgQnVsbGV0UmFuZ2VEaXJlY3RpdmUsXG4gICAgICAgIEJ1bGxldFJhbmdlQ29sbGVjdGlvbkRpcmVjdGl2ZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQnVsbGV0Q2hhcnRNb2R1bGUgeyB9Il19