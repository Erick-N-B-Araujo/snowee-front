import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { TreeView } from '@syncfusion/ej2-navigations';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * TreeView component is used to represent the hierarchical data in tree like structure with advanced functions to perform edit, drag and drop, selection with check-box and more.
 * ```html
 * <ej-treeview allowDragAndDrop='true'></ej-treeview>
 * ```
 */
export declare class TreeViewComponent extends TreeView implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    context: any;
    tagObjects: any;
    actionFailure: any;
    created: any;
    dataBound: any;
    dataSourceChanged: any;
    destroyed: any;
    drawNode: any;
    keyPress: any;
    nodeChecked: any;
    nodeChecking: any;
    nodeClicked: any;
    nodeCollapsed: any;
    nodeCollapsing: any;
    nodeDragStart: any;
    nodeDragStop: any;
    nodeDragging: any;
    nodeDropped: any;
    nodeEdited: any;
    nodeEditing: any;
    nodeExpanded: any;
    nodeExpanding: any;
    nodeSelected: any;
    nodeSelecting: any;
    /**
     * Specifies a template to render customized content for all the nodes. If the `nodeTemplate` property
     * is set, the template content overrides the displayed node text. The property accepts template string
     * [template string](https://ej2.syncfusion.com/documentation/common/template-engine/)
     * or HTML element ID holding the content. For more information on template concept, refer to
     * [Template](../../treeview/template/).
     * @default null
     */
    nodeTemplate: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeViewComponent, "ejs-treeview", never, { "allowDragAndDrop": "allowDragAndDrop"; "allowEditing": "allowEditing"; "allowMultiSelection": "allowMultiSelection"; "allowTextWrap": "allowTextWrap"; "animation": "animation"; "autoCheck": "autoCheck"; "checkedNodes": "checkedNodes"; "cssClass": "cssClass"; "disabled": "disabled"; "dragArea": "dragArea"; "enableHtmlSanitizer": "enableHtmlSanitizer"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "expandOn": "expandOn"; "expandedNodes": "expandedNodes"; "fields": "fields"; "fullRowNavigable": "fullRowNavigable"; "fullRowSelect": "fullRowSelect"; "loadOnDemand": "loadOnDemand"; "locale": "locale"; "nodeTemplate": "nodeTemplate"; "selectedNodes": "selectedNodes"; "showCheckBox": "showCheckBox"; "sortOrder": "sortOrder"; }, { "actionFailure": "actionFailure"; "created": "created"; "dataBound": "dataBound"; "dataSourceChanged": "dataSourceChanged"; "destroyed": "destroyed"; "drawNode": "drawNode"; "keyPress": "keyPress"; "nodeChecked": "nodeChecked"; "nodeChecking": "nodeChecking"; "nodeClicked": "nodeClicked"; "nodeCollapsed": "nodeCollapsed"; "nodeCollapsing": "nodeCollapsing"; "nodeDragStart": "nodeDragStart"; "nodeDragStop": "nodeDragStop"; "nodeDragging": "nodeDragging"; "nodeDropped": "nodeDropped"; "nodeEdited": "nodeEdited"; "nodeEditing": "nodeEditing"; "nodeExpanded": "nodeExpanded"; "nodeExpanding": "nodeExpanding"; "nodeSelected": "nodeSelected"; "nodeSelecting": "nodeSelecting"; }, ["nodeTemplate"], never>;
}
