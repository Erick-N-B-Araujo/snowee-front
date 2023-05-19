import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Sparkline } from '@syncfusion/ej2-charts';
import { RangeBandSettingsDirective } from './rangebandsettings.directive';
import * as i0 from "@angular/core";
export const inputs = ['axisSettings', 'border', 'containerArea', 'dataLabelSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'endPointColor', 'fill', 'format', 'height', 'highPointColor', 'lineWidth', 'locale', 'lowPointColor', 'markerSettings', 'negativePointColor', 'opacity', 'padding', 'palette', 'query', 'rangeBandSettings', 'rangePadding', 'startPointColor', 'theme', 'tiePointColor', 'tooltipSettings', 'type', 'useGroupingSeparator', 'valueType', 'width', 'xName', 'yName'];
export const outputs = ['axisRendering', 'dataLabelRendering', 'load', 'loaded', 'markerRendering', 'pointRegionMouseClick', 'pointRegionMouseMove', 'pointRendering', 'resize', 'seriesRendering', 'sparklineMouseClick', 'sparklineMouseMove', 'tooltipInitialize'];
export const twoWays = [''];
/**
 * Sparkline Component
 * ```html
 * <ejs-sparkline></ejs-sparkline>
 * ```
 */
let SparklineComponent = class SparklineComponent extends Sparkline {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['rangeBandSettings'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ChartsSparklineTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childRangeBandSettings;
        this.context.ngAfterContentChecked(this);
    }
};
SparklineComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
SparklineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: SparklineComponent, selector: "ejs-sparkline", inputs: { axisSettings: "axisSettings", border: "border", containerArea: "containerArea", dataLabelSettings: "dataLabelSettings", dataSource: "dataSource", enablePersistence: "enablePersistence", enableRtl: "enableRtl", endPointColor: "endPointColor", fill: "fill", format: "format", height: "height", highPointColor: "highPointColor", lineWidth: "lineWidth", locale: "locale", lowPointColor: "lowPointColor", markerSettings: "markerSettings", negativePointColor: "negativePointColor", opacity: "opacity", padding: "padding", palette: "palette", query: "query", rangeBandSettings: "rangeBandSettings", rangePadding: "rangePadding", startPointColor: "startPointColor", theme: "theme", tiePointColor: "tiePointColor", tooltipSettings: "tooltipSettings", type: "type", useGroupingSeparator: "useGroupingSeparator", valueType: "valueType", width: "width", xName: "xName", yName: "yName" }, outputs: { axisRendering: "axisRendering", dataLabelRendering: "dataLabelRendering", load: "load", loaded: "loaded", markerRendering: "markerRendering", pointRegionMouseClick: "pointRegionMouseClick", pointRegionMouseMove: "pointRegionMouseMove", pointRendering: "pointRendering", resize: "resize", seriesRendering: "seriesRendering", sparklineMouseClick: "sparklineMouseClick", sparklineMouseMove: "sparklineMouseMove", tooltipInitialize: "tooltipInitialize" }, queries: [{ propertyName: "childRangeBandSettings", first: true, predicate: RangeBandSettingsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
SparklineComponent = __decorate([
    ComponentMixins([ComponentBase])
], SparklineComponent);
export { SparklineComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SparklineComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-sparkline',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childRangeBandSettings: new ContentChild(RangeBandSettingsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhcmtsaW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zcGFya2xpbmUvc3BhcmtsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFFM0UsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFhLENBQUMsY0FBYyxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsbUJBQW1CLEVBQUMsWUFBWSxFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxlQUFlLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsZ0JBQWdCLEVBQUMsb0JBQW9CLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLGNBQWMsRUFBQyxpQkFBaUIsRUFBQyxPQUFPLEVBQUMsZUFBZSxFQUFDLGlCQUFpQixFQUFDLE1BQU0sRUFBQyxzQkFBc0IsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxPQUFPLENBQUMsQ0FBQztBQUN2ZCxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWEsQ0FBQyxlQUFlLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxpQkFBaUIsRUFBQyx1QkFBdUIsRUFBQyxzQkFBc0IsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsaUJBQWlCLEVBQUMscUJBQXFCLEVBQUMsb0JBQW9CLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwUSxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUV0Qzs7Ozs7R0FLRztJQVlVLGtCQUFrQixTQUFsQixrQkFBbUIsU0FBUSxTQUFTO0lBbUI3QyxZQUFvQixLQUFpQixFQUFVLFNBQW9CLEVBQVUsZ0JBQWlDLEVBQVUsUUFBa0I7UUFDdEksS0FBSyxFQUFFLENBQUM7UUFEUSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRm5JLFNBQUksR0FBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFJMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUk7WUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3RELElBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ2pDO1NBQ0o7UUFBQyxNQUFNLEdBQUc7UUFFZixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUksSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLHFCQUFxQjtRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBSUosQ0FBQTsrR0F2RFksa0JBQWtCO21HQUFsQixrQkFBa0IsODZDQUprQiwwQkFBMEIsdUVBSDdELEVBQUU7QUFPSCxrQkFBa0I7SUFEOUIsZUFBZSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7R0FDcEIsa0JBQWtCLENBdUQ5QjtTQXZEWSxrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFYOUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxPQUFPLEVBQUU7d0JBQ0wsc0JBQXNCLEVBQUUsSUFBSSxZQUFZLENBQUMsMEJBQTBCLENBQUM7cUJBQ3ZFO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIEluamVjdG9yLCBWYWx1ZVByb3ZpZGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEJhc2UsIElDb21wb25lbnRCYXNlLCBhcHBseU1peGlucywgQ29tcG9uZW50TWl4aW5zLCBQcm9wZXJ0eUNvbGxlY3Rpb25JbmZvLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgU3BhcmtsaW5lIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWNoYXJ0cyc7XG5cbmltcG9ydCB7IFJhbmdlQmFuZFNldHRpbmdzRGlyZWN0aXZlIH0gZnJvbSAnLi9yYW5nZWJhbmRzZXR0aW5ncy5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgaW5wdXRzOiBzdHJpbmdbXSA9IFsnYXhpc1NldHRpbmdzJywnYm9yZGVyJywnY29udGFpbmVyQXJlYScsJ2RhdGFMYWJlbFNldHRpbmdzJywnZGF0YVNvdXJjZScsJ2VuYWJsZVBlcnNpc3RlbmNlJywnZW5hYmxlUnRsJywnZW5kUG9pbnRDb2xvcicsJ2ZpbGwnLCdmb3JtYXQnLCdoZWlnaHQnLCdoaWdoUG9pbnRDb2xvcicsJ2xpbmVXaWR0aCcsJ2xvY2FsZScsJ2xvd1BvaW50Q29sb3InLCdtYXJrZXJTZXR0aW5ncycsJ25lZ2F0aXZlUG9pbnRDb2xvcicsJ29wYWNpdHknLCdwYWRkaW5nJywncGFsZXR0ZScsJ3F1ZXJ5JywncmFuZ2VCYW5kU2V0dGluZ3MnLCdyYW5nZVBhZGRpbmcnLCdzdGFydFBvaW50Q29sb3InLCd0aGVtZScsJ3RpZVBvaW50Q29sb3InLCd0b29sdGlwU2V0dGluZ3MnLCd0eXBlJywndXNlR3JvdXBpbmdTZXBhcmF0b3InLCd2YWx1ZVR5cGUnLCd3aWR0aCcsJ3hOYW1lJywneU5hbWUnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnYXhpc1JlbmRlcmluZycsJ2RhdGFMYWJlbFJlbmRlcmluZycsJ2xvYWQnLCdsb2FkZWQnLCdtYXJrZXJSZW5kZXJpbmcnLCdwb2ludFJlZ2lvbk1vdXNlQ2xpY2snLCdwb2ludFJlZ2lvbk1vdXNlTW92ZScsJ3BvaW50UmVuZGVyaW5nJywncmVzaXplJywnc2VyaWVzUmVuZGVyaW5nJywnc3BhcmtsaW5lTW91c2VDbGljaycsJ3NwYXJrbGluZU1vdXNlTW92ZScsJ3Rvb2x0aXBJbml0aWFsaXplJ107XG5leHBvcnQgY29uc3QgdHdvV2F5czogc3RyaW5nW10gPSBbJyddO1xuXG4vKipcbiAqIFNwYXJrbGluZSBDb21wb25lbnRcbiAqIGBgYGh0bWxcbiAqIDxlanMtc3BhcmtsaW5lPjwvZWpzLXNwYXJrbGluZT5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Vqcy1zcGFya2xpbmUnLFxuICAgIGlucHV0czogaW5wdXRzLFxuICAgIG91dHB1dHM6IG91dHB1dHMsXG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRSYW5nZUJhbmRTZXR0aW5nczogbmV3IENvbnRlbnRDaGlsZChSYW5nZUJhbmRTZXR0aW5nc0RpcmVjdGl2ZSlcbiAgICB9XG59KVxuQENvbXBvbmVudE1peGlucyhbQ29tcG9uZW50QmFzZV0pXG5leHBvcnQgY2xhc3MgU3BhcmtsaW5lQ29tcG9uZW50IGV4dGVuZHMgU3BhcmtsaW5lIGltcGxlbWVudHMgSUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBjb250ZXh0IDogYW55O1xuICAgIHB1YmxpYyB0YWdPYmplY3RzOiBhbnk7XG5cdGF4aXNSZW5kZXJpbmc6IGFueTtcblx0ZGF0YUxhYmVsUmVuZGVyaW5nOiBhbnk7XG5cdGxvYWQ6IGFueTtcblx0bG9hZGVkOiBhbnk7XG5cdG1hcmtlclJlbmRlcmluZzogYW55O1xuXHRwb2ludFJlZ2lvbk1vdXNlQ2xpY2s6IGFueTtcblx0cG9pbnRSZWdpb25Nb3VzZU1vdmU6IGFueTtcblx0cG9pbnRSZW5kZXJpbmc6IGFueTtcblx0cmVzaXplOiBhbnk7XG5cdHNlcmllc1JlbmRlcmluZzogYW55O1xuXHRzcGFya2xpbmVNb3VzZUNsaWNrOiBhbnk7XG5cdHNwYXJrbGluZU1vdXNlTW92ZTogYW55O1xuXHRwdWJsaWMgdG9vbHRpcEluaXRpYWxpemU6IGFueTtcbiAgICBwdWJsaWMgY2hpbGRSYW5nZUJhbmRTZXR0aW5nczogUXVlcnlMaXN0PFJhbmdlQmFuZFNldHRpbmdzRGlyZWN0aXZlPjtcbiAgICBwdWJsaWMgdGFnczogc3RyaW5nW10gPSBbJ3JhbmdlQmFuZFNldHRpbmdzJ107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nRWxlOiBFbGVtZW50UmVmLCBwcml2YXRlIHNyZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5uZ0VsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcyA9IHRoaXMuaW5qZWN0ZWRNb2R1bGVzIHx8IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnQ2hhcnRzU3BhcmtsaW5lVG9vbHRpcCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmNvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFnT2JqZWN0c1swXS5pbnN0YW5jZSA9IHRoaXMuY2hpbGRSYW5nZUJhbmRTZXR0aW5ncztcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nQWZ0ZXJDb250ZW50Q2hlY2tlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJFdmVudHM6IChldmVudExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhZGRUd29XYXk6IChwcm9wTGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbiJdfQ==