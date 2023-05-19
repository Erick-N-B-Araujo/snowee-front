import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * `e-aggregate` directive represent a aggregate row of the Angular Grid.
 * It must be contained in a Grid component(`ejs-grid`).
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'></e-column>
 *     <e-column field='name' headerText='Name' width='100'></e-column>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'></e-column>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-grid>
 * ```
 */
export declare class AggregateDirective extends ComplexBase<AggregateDirective> {
    private viewContainerRef;
    directivePropList: any;
    childColumns: any;
    tags: string[];
    /**
     * Configures the aggregate columns.
     * @default []
     */
    columns: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregateDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AggregateDirective, "ejs-grid>e-aggregates>e-aggregate", never, { "columns": "columns"; }, {}, ["childColumns"]>;
}
/**
 * Aggregate Array Directive
 * @private
 */
export declare class AggregatesDirective extends ArrayBase<AggregatesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregatesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AggregatesDirective, "ejs-grid>e-aggregates", never, {}, {}, ["children"]>;
}
