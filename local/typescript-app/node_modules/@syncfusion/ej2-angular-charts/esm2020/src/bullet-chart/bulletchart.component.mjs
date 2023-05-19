import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { BulletChart } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { BulletRangeCollectionDirective } from './ranges.directive';
import * as i0 from "@angular/core";
export const inputs = ['animation', 'border', 'categoryField', 'categoryLabelStyle', 'dataLabel', 'dataSource', 'enableGroupSeparator', 'enablePersistence', 'enableRtl', 'height', 'interval', 'labelFormat', 'labelPosition', 'labelStyle', 'legendSettings', 'locale', 'majorTickLines', 'margin', 'maximum', 'minimum', 'minorTickLines', 'minorTicksPerInterval', 'opposedPosition', 'orientation', 'query', 'ranges', 'subtitle', 'subtitleStyle', 'tabIndex', 'targetColor', 'targetField', 'targetTypes', 'targetWidth', 'theme', 'tickPosition', 'title', 'titlePosition', 'titleStyle', 'tooltip', 'type', 'valueBorder', 'valueField', 'valueFill', 'valueHeight', 'width'];
export const outputs = ['beforePrint', 'bulletChartMouseClick', 'legendRender', 'load', 'loaded', 'tooltipRender', 'dataSourceChange'];
export const twoWays = ['dataSource'];
/**
 * BulletChart Component
 * ```html
 * <ejs-bulletchart></ejs-bulletchart>
 * ```
 */
let BulletChartComponent = class BulletChartComponent extends BulletChart {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['ranges'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ChartsBulletTooltip');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ChartsBulletChartLegend');
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
        this.tagObjects[0].instance = this.childRanges;
        this.context.ngAfterContentChecked(this);
    }
};
BulletChartComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
BulletChartComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: BulletChartComponent, selector: "ejs-bulletchart", inputs: { animation: "animation", border: "border", categoryField: "categoryField", categoryLabelStyle: "categoryLabelStyle", dataLabel: "dataLabel", dataSource: "dataSource", enableGroupSeparator: "enableGroupSeparator", enablePersistence: "enablePersistence", enableRtl: "enableRtl", height: "height", interval: "interval", labelFormat: "labelFormat", labelPosition: "labelPosition", labelStyle: "labelStyle", legendSettings: "legendSettings", locale: "locale", majorTickLines: "majorTickLines", margin: "margin", maximum: "maximum", minimum: "minimum", minorTickLines: "minorTickLines", minorTicksPerInterval: "minorTicksPerInterval", opposedPosition: "opposedPosition", orientation: "orientation", query: "query", ranges: "ranges", subtitle: "subtitle", subtitleStyle: "subtitleStyle", tabIndex: "tabIndex", targetColor: "targetColor", targetField: "targetField", targetTypes: "targetTypes", targetWidth: "targetWidth", theme: "theme", tickPosition: "tickPosition", title: "title", titlePosition: "titlePosition", titleStyle: "titleStyle", tooltip: "tooltip", type: "type", valueBorder: "valueBorder", valueField: "valueField", valueFill: "valueFill", valueHeight: "valueHeight", width: "width" }, outputs: { beforePrint: "beforePrint", bulletChartMouseClick: "bulletChartMouseClick", legendRender: "legendRender", load: "load", loaded: "loaded", tooltipRender: "tooltipRender", dataSourceChange: "dataSourceChange" }, queries: [{ propertyName: "tooltip_template", first: true, predicate: ["tooltipTemplate"], descendants: true }, { propertyName: "childRanges", first: true, predicate: BulletRangeCollectionDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], BulletChartComponent.prototype, "tooltip_template", void 0);
BulletChartComponent = __decorate([
    ComponentMixins([ComponentBase])
], BulletChartComponent);
export { BulletChartComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BulletChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-bulletchart',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childRanges: new ContentChild(BulletRangeCollectionDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { tooltip_template: [{
                type: ContentChild,
                args: ['tooltipTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsbGV0Y2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2J1bGxldC1jaGFydC9idWxsZXRjaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdDLHVCQUF1QixFQUFpRCxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUosT0FBTyxFQUFFLGFBQWEsRUFBK0IsZUFBZSxFQUEwQixRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3SSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVwRSxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQWEsQ0FBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxvQkFBb0IsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLHNCQUFzQixFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxlQUFlLEVBQUMsWUFBWSxFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyx1QkFBdUIsRUFBQyxpQkFBaUIsRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLGFBQWEsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLGFB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U0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLE9BQU8sRUFBRTt3QkFDTCxXQUFXLEVBQUUsSUFBSSxZQUFZLENBQUMsOEJBQThCLENBQUM7cUJBQ2hFO2lCQUNKOytLQWdCVSxnQkFBZ0I7c0JBRnRCLFlBQVk7dUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIEluamVjdG9yLCBWYWx1ZVByb3ZpZGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEJhc2UsIElDb21wb25lbnRCYXNlLCBhcHBseU1peGlucywgQ29tcG9uZW50TWl4aW5zLCBQcm9wZXJ0eUNvbGxlY3Rpb25JbmZvLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgQnVsbGV0Q2hhcnQgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItY2hhcnRzJztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBCdWxsZXRSYW5nZUNvbGxlY3Rpb25EaXJlY3RpdmUgfSBmcm9tICcuL3Jhbmdlcy5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgaW5wdXRzOiBzdHJpbmdbXSA9IFsnYW5pbWF0aW9uJywnYm9yZGVyJywnY2F0ZWdvcnlGaWVsZCcsJ2NhdGVnb3J5TGFiZWxTdHlsZScsJ2RhdGFMYWJlbCcsJ2RhdGFTb3VyY2UnLCdlbmFibGVHcm91cFNlcGFyYXRvcicsJ2VuYWJsZVBlcnNpc3RlbmNlJywnZW5hYmxlUnRsJywnaGVpZ2h0JywnaW50ZXJ2YWwnLCdsYWJlbEZvcm1hdCcsJ2xhYmVsUG9zaXRpb24nLCdsYWJlbFN0eWxlJywnbGVnZW5kU2V0dGluZ3MnLCdsb2NhbGUnLCdtYWpvclRpY2tMaW5lcycsJ21hcmdpbicsJ21heGltdW0nLCdtaW5pbXVtJywnbWlub3JUaWNrTGluZXMnLCdtaW5vclRpY2tzUGVySW50ZXJ2YWwnLCdvcHBvc2VkUG9zaXRpb24nLCdvcmllbnRhdGlvbicsJ3F1ZXJ5JywncmFuZ2VzJywnc3VidGl0bGUnLCdzdWJ0aXRsZVN0eWxlJywndGFiSW5kZXgnLCd0YXJnZXRDb2xvcicsJ3RhcmdldEZpZWxkJywndGFyZ2V0VHlwZXMnLCd0YXJnZXRXaWR0aCcsJ3RoZW1lJywndGlja1Bvc2l0aW9uJywndGl0bGUnLCd0aXRsZVBvc2l0aW9uJywndGl0bGVTdHlsZScsJ3Rvb2x0aXAnLCd0eXBlJywndmFsdWVCb3JkZXInLCd2YWx1ZUZpZWxkJywndmFsdWVGaWxsJywndmFsdWVIZWlnaHQnLCd3aWR0aCddO1xuZXhwb3J0IGNvbnN0IG91dHB1dHM6IHN0cmluZ1tdID0gWydiZWZvcmVQcmludCcsJ2J1bGxldENoYXJ0TW91c2VDbGljaycsJ2xlZ2VuZFJlbmRlcicsJ2xvYWQnLCdsb2FkZWQnLCd0b29sdGlwUmVuZGVyJywnZGF0YVNvdXJjZUNoYW5nZSddO1xuZXhwb3J0IGNvbnN0IHR3b1dheXM6IHN0cmluZ1tdID0gWydkYXRhU291cmNlJ107XG5cbi8qKlxuICogQnVsbGV0Q2hhcnQgQ29tcG9uZW50XG4gKiBgYGBodG1sXG4gKiA8ZWpzLWJ1bGxldGNoYXJ0PjwvZWpzLWJ1bGxldGNoYXJ0PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWJ1bGxldGNoYXJ0JyxcbiAgICBpbnB1dHM6IGlucHV0cyxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLFxuICAgIHRlbXBsYXRlOiAnJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkUmFuZ2VzOiBuZXcgQ29udGVudENoaWxkKEJ1bGxldFJhbmdlQ29sbGVjdGlvbkRpcmVjdGl2ZSlcbiAgICB9XG59KVxuQENvbXBvbmVudE1peGlucyhbQ29tcG9uZW50QmFzZV0pXG5leHBvcnQgY2xhc3MgQnVsbGV0Q2hhcnRDb21wb25lbnQgZXh0ZW5kcyBCdWxsZXRDaGFydCBpbXBsZW1lbnRzIElDb21wb25lbnRCYXNlIHtcbiAgICBwdWJsaWMgY29udGV4dCA6IGFueTtcbiAgICBwdWJsaWMgdGFnT2JqZWN0czogYW55O1xuXHRiZWZvcmVQcmludDogYW55O1xuXHRidWxsZXRDaGFydE1vdXNlQ2xpY2s6IGFueTtcblx0bGVnZW5kUmVuZGVyOiBhbnk7XG5cdGxvYWQ6IGFueTtcblx0bG9hZGVkOiBhbnk7XG5cdHRvb2x0aXBSZW5kZXI6IGFueTtcblx0cHVibGljIGRhdGFTb3VyY2VDaGFuZ2U6IGFueTtcbiAgICBwdWJsaWMgY2hpbGRSYW5nZXM6IFF1ZXJ5TGlzdDxCdWxsZXRSYW5nZUNvbGxlY3Rpb25EaXJlY3RpdmU+O1xuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXSA9IFsncmFuZ2VzJ107XG4gICAgQENvbnRlbnRDaGlsZCgndG9vbHRpcFRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyB0b29sdGlwX3RlbXBsYXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nRWxlOiBFbGVtZW50UmVmLCBwcml2YXRlIHNyZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5uZ0VsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcyA9IHRoaXMuaW5qZWN0ZWRNb2R1bGVzIHx8IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnQ2hhcnRzQnVsbGV0VG9vbHRpcCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnQ2hhcnRzQnVsbGV0Q2hhcnRMZWdlbmQnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmFkZFR3b1dheS5jYWxsKHRoaXMsIHR3b1dheXMpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ICA9IG5ldyBDb21wb25lbnRCYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdPbkluaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nQWZ0ZXJWaWV3SW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ09uRGVzdHJveSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRhZ09iamVjdHNbMF0uaW5zdGFuY2UgPSB0aGlzLmNoaWxkUmFuZ2VzO1xuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19