import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * Row Directive
 * ```html
 * <e-rows><e-row></e-row><e-rows>
 * ```
 */
export declare class RowDirective extends ComplexBase<RowDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Options to customize the border of the rows.
     */
    border: any;
    /**
     * The height of the row as a string accept input both as '100px' and '100%'.
     * If specified as '100%, row renders to the full height of its chart.
     * @default '100%'
     */
    height: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<RowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RowDirective, "e-rows>e-row", never, { "border": "border"; "height": "height"; }, {}, never>;
}
/**
 * Row Array Directive
 * @private
 */
export declare class RowsDirective extends ArrayBase<RowsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<RowsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RowsDirective, "ejs-chart>e-rows", never, {}, {}, ["children"]>;
}
