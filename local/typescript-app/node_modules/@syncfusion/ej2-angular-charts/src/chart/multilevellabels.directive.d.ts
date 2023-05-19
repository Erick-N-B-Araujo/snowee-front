import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
/**
 * MultiLevelLabel Directive
 * ```html
 * <e-axis>
 * <e-multilevellabels>
 * <e-multilevellabel></e-multilevellabel>
 * </e-multilevellabels>
 * </e-axis>
 * ```
 */
export declare class MultiLevelLabelDirective extends ComplexBase<MultiLevelLabelDirective> {
    private viewContainerRef;
    directivePropList: any;
    childCategories: any;
    tags: string[];
    /**
     * Defines the position of the multi level labels. They are,
     * * Near: Places the multi level labels at Near.
     * * Center: Places the multi level labels at Center.
     * * Far: Places the multi level labels at Far.
     * @default 'Center'
     */
    alignment: any;
    /**
     * Border of the multi level labels.
     */
    border: any;
    /**
     * multi level categories for multi level labels.
     */
    categories: any;
    /**
     * Defines the textOverFlow for multi level labels. They are,
     * * Trim: Trim textOverflow for multi level labels.
     * * Wrap: Wrap textOverflow for multi level labels.
     * * none: None textOverflow for multi level labels.
     * @default 'Wrap'
     */
    overflow: any;
    /**
     * Options to customize the multi level labels.
     */
    textStyle: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiLevelLabelDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MultiLevelLabelDirective, "e-axis>e-multilevellabels>e-multilevellabel", never, { "alignment": "alignment"; "border": "border"; "categories": "categories"; "overflow": "overflow"; "textStyle": "textStyle"; }, {}, ["childCategories"]>;
}
/**
 * MultiLevelLabel Array Directive
 * @private
 */
export declare class MultiLevelLabelsDirective extends ArrayBase<MultiLevelLabelsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<MultiLevelLabelsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MultiLevelLabelsDirective, "e-axis>e-multilevellabels", never, {}, {}, ["children"]>;
}
