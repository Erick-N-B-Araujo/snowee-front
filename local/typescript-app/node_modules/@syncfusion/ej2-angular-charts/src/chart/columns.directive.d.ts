import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Column Directive
 * ```html
 * <e-columns><e-column></e-column><e-columns>
 * ```
 */
export declare class ColumnDirective extends ComplexBase<ColumnDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Options to customize the border of the columns.
     */
    border: any;
    /**
     * The width of the column as a string accepts input both as like '100px' or '100%'.
     * If specified as '100%, column renders to the full width of its chart.
     * @default '100%'
     */
    width: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColumnDirective, "e-columns>e-column", never, { "border": "border"; "width": "width"; }, {}, never>;
}
/**
 * Column Array Directive
 * @private
 */
export declare class ColumnsDirective extends ArrayBase<ColumnsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColumnsDirective, "ejs-chart>e-columns", never, {}, {}, ["children"]>;
}
