import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
export declare class RangeBandSettingDirective extends ComplexBase<RangeBandSettingDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * To configure sparkline rangeband color.
     */
    color: any;
    /**
     * To configure sparkline end range.
     * @aspdefaultvalueignore
     */
    endRange: any;
    /**
     * To configure sparkline rangeband opacity.
     * @default 1
     */
    opacity: any;
    /**
     * To configure sparkline start range.
     * @aspdefaultvalueignore
     */
    startRange: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeBandSettingDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RangeBandSettingDirective, "e-rangeBandSettings>e-rangeBandSetting", never, { "color": "color"; "endRange": "endRange"; "opacity": "opacity"; "startRange": "startRange"; }, {}, never>;
}
/**
 * RangeBandSetting Array Directive
 * @private
 */
export declare class RangeBandSettingsDirective extends ArrayBase<RangeBandSettingsDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeBandSettingsDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RangeBandSettingsDirective, "ejs-sparkline>e-rangeBandSettings", never, {}, {}, ["children"]>;
}
