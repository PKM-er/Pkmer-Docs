---
uid: 20231110210032
title: Excalidraw 的样式、属性、功能简介
tags: [Excalidraw脚本, Excalidraw, 开发者指南]
description: Excalidraw 的样式、属性、功能简介
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231206205024
---

# Excalidraw 的样式、属性、功能简介

## Excalidraw 的元素样式设置 (ea.style)

> [!example]+ 调用和修改样式案例
>
> ```js
> ea.style.backgroundColor = "#ced4da"; // 填充颜色
> ea.style.fillStyle = 'solid'; // 填充样式
> ea.style.roughness = 0; // 粗糙度
> ea.style.roundness = { type: 3 }; // 圆角
> ea.style.strokeWidth = 2; // 描边宽度
> ea.style.fontFamily = 4; // 设置字体(4为自定义字体，需要进行设置)
> ea.style.fontSize = 20; // 设置字体大小
> ```

| 属性               | 允许值                                                       | 说明                                                         |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| strokeColor        | [CSS合法颜色值](https://www.w3schools.com/cssref/css_colors_legal.asp) | 线条的颜色                                                   |
| backgroundColor    | [CSS合法颜色值](https://www.w3schools.com/cssref/css_colors_legal.asp) | 对象的填充颜色                                               |
| angle              | 弧度值                                                       | 旋转角度（弧度），90° 等于 Math.PI/2。|
| fillStyle          | "hachure"，"cross-hatch"，"solid"                            | 填充样式                                                     |
| setFillStyle       | 接受一个数字 (0、1、任意数字)                                 | 设置填充样式 (0:  "hachure"、1: "cross-hatch"、其他任意数字: "solid") |
| strokeWidth        | 数字，设置描边的宽度                                         | 描边宽度                                                     |
| strokeStyle        | "solid"，"dashed"，"dotted"                                  | 描边样式                                                     |
| setStrokeStyle     | 接受一个数字 (0、1、任意数字)                                 | 设置描边样式 (0:  "hachure"、1: "cross-hatch"、其他任意数字: "solid") |
| roughness          | 0，1，2                                                      | 粗糙度 (0:  Architect、1: Artist、2: Cartoonist)              |
| opacity            | 0 到 100 之间的数字                                          | 对象的不透明度（包括描边和填充）|
| strokeSharpness    | "round"，"sharp"                                             | 描边的锐利度                                                 |
| setStrokeSharpness | 0，任意数字                                                  | 设置描边的锐利度 (0:  "round"、其他任意数字: "sharp")         |
| fontFamily         | 1，2，3，4                                                   | 字体                                                         |
| setFontFamily      | 1,2,3,4                                                      | 设置字体 (1:  "Virgil，Segoe UI Emoji"、2: "Helvetica，Segoe UI Emoji"、3:  "Cascadia，Segoe UI Emoji"、4: 自定义字体) |
| fontSize           | 数字，默认值为 20 像素。| 字体大小                                                     |
| textAlign          | "left"，"center"，"right"                                    | 文本的水平对齐方式，跟 addText() 函数设置固定宽度相关        |
| verticalAlign      | "top"，"middle"                                              | 文本的垂直对齐方式 "top"（顶部对齐）和 "middle"（居中对齐），跟 addText() 函数设置固定高度相关 |
| startArrowHead     | "arrow"，"bar"，"dot"，"none"                                | 箭头的起始样式 "arrow"（箭头）、"bar"（条形）、"dot"（点）和 "none"（无）|
| endArrowHead       | "arrow"，"bar"，"dot"，"none"                                | 箭头的结束样式 "arrow"（箭头）、"bar"（条形）、"dot"（点）和 "none"（无）|

## Excalidraw 的 Canvas 属性设置

> [!example]+
>
> ```js
> const api = ea.getExcalidrawAPI();
> const canvas = api.getAppState();
> 
> canvas.theme = "light";
> canvas.gridSize = 10;
> canvas.setTheme = 2;
> canvas.viewBackgroundColor = "#00000";
> ```

| 属性                | 允许值                                                       | 说明                                           |
| ------------------- | ------------------------------------------------------------ | ---------------------------------------------- |
| theme               | "light", "dark"                                              | 画布主题                                       |
| setTheme            | 0、任意数值                                                  | 设置画布主题 (0: "light"、其他任意数字: "dark") |
| viewBackgroundColor | [CSS合法颜色值](https://www.w3schools.com/cssref/css_colors_legal.asp) | 画布的填充颜色                                 |
| gridSize            | 数值                                                         | 网格的大小，如果为 0，则不显示网格。|

## Excalidraw 的属性和功能总览

### 控制台输入 ExcalidrawAutomate 查看

`Ctrl + Shift + I` 调出 Obsidian 的开发者模式，选择控制台的标签页，输入 ExcalidrawAutomate 命令：

```js
ExcalidrawAutomate
```

![Pasted image 20231110200955](https://cdn.pkmer.cn/images/Pasted%20image%2020231110200955.png!pkmer)

![Pasted image 20231110200909](https://cdn.pkmer.cn/images/Pasted%20image%2020231110200909.png!pkmer)

> 其实之前用的 ea 都是 ExcalidrawAutomate 的缩写：
> `ea = ExcalidrawAutomate`，之后 ea 的所有属性和命令都可以在这里面查看

#### 画板元素样式 ea.style

ea 的元素样式在 ea.style 中查看

![Pasted image 20231110203121](https://cdn.pkmer.cn/images/Pasted%20image%2020231110203121.png!pkmer)

当然你也可以打开 Excalidraw 的 md 文件，在**# Drawing**下方里面也记录了当前画板的元素和样式：

![Pasted image 20231110203524](https://cdn.pkmer.cn/images/Pasted%20image%2020231110203524.png!pkmer)

#### ExcalidrawAutomate 命令

ea 的指令在 Prototype 对象 (Object) 中查看：

![Pasted image 20231110202843](https://cdn.pkmer.cn/images/Pasted%20image%2020231110202843.png!pkmer)

### ExcalidrawAutomate 总览

```js 
export declare class ExcalidrawAutomate implements ExcalidrawAutomateInterface {
  plugin: ExcalidrawPlugin;
  targetView: ExcalidrawView = null; //the view currently edited
  elementsDict: {[key:string]:any}; //contains the ExcalidrawElements currently edited in Automate indexed by el.id
  imagesDict: {[key: FileId]: any}; //the images files including DataURL, indexed by fileId
  mostRecentMarkdownSVG:SVGSVGElement = null; //Markdown renderer will drop a copy of the most recent SVG here for debugging purposes
  style: {
    strokeColor: string; //https://www.w3schools.com/colors/default.asp
    backgroundColor: string;
    angle: number; //radian
    fillStyle: FillStyle; //type FillStyle = "hachure" | "cross-hatch" | "solid"
    strokeWidth: number;
    strokeStyle: StrokeStyle; //type StrokeStyle = "solid" | "dashed" | "dotted"
    roughness: number;
    opacity: number;
    strokeSharpness: StrokeSharpness; //type StrokeSharpness = "round" | "sharp"
    fontFamily: number; //1: Virgil, 2:Helvetica, 3:Cascadia, 4:LocalFont
    fontSize: number;
    textAlign: string; //"left"|"right"|"center"
    verticalAlign: string; //"top"|"bottom"|"middle" :for future use, has no effect currently
    startArrowHead: string; //"triangle"|"dot"|"arrow"|"bar"|null
    endArrowHead: string;
  };
  canvas: {
    theme: string; //"dark"|"light"
    viewBackgroundColor: string;
    gridSize: number;
  };
    constructor(plugin: ExcalidrawPlugin, view?: ExcalidrawView);
    /**
     *
     * @returns
     */
    getAPI(view?: ExcalidrawView): ExcalidrawAutomate;
    /**
     * @param val //0:"hachure", 1:"cross-hatch" 2:"solid"
     * @returns
     */
    setFillStyle(val: number): "hachure" | "cross-hatch" | "solid";
    /**
     * @param val //0:"solid", 1:"dashed", 2:"dotted"
     * @returns
     */
    setStrokeStyle(val: number): "solid" | "dashed" | "dotted";
    /**
     * @param val //0:"round", 1:"sharp"
     * @returns
     */
    setStrokeSharpness(val: number): "round" | "sharp";
    /**
     * @param val //1: Virgil, 2:Helvetica, 3:Cascadia
     * @returns
     */
    setFontFamily(val: number): "Virgil, Segoe UI Emoji" | "Helvetica, Segoe UI Emoji" | "Cascadia, Segoe UI Emoji" | "LocalFont";
    /**
     * @param val //0:"light", 1:"dark"
     * @returns
     */
    setTheme(val: number): "light" | "dark";
    /**
     * @param objectIds
     * @returns
     */
    addToGroup(objectIds: string[]): string;
    /**
     * @param templatePath
     */
    toClipboard(templatePath?: string): Promise<void>;
    /**
     * get all elements from ExcalidrawAutomate elementsDict
     * @returns elements from elemenetsDict
     */
    getElements(): ExcalidrawElement[];
    /**
     * get single element from ExcalidrawAutomate elementsDict
     * @param id
     * @returns
     */
    getElement(id: string): ExcalidrawElement;
    /**
     * create a drawing and save it to filename
     * @param params
     *   filename: if null, default filename as defined in Excalidraw settings
     *   foldername: if null, default folder as defined in Excalidraw settings
     * @returns
     */
    create(params?: {
        filename?: string;
        foldername?: string;
        templatePath?: string;
        onNewPane?: boolean;
        frontmatterKeys?: {
            "excalidraw-plugin"?: "raw" | "parsed";
            "excalidraw-link-prefix"?: string;
            "excalidraw-link-brackets"?: boolean;
            "excalidraw-url-prefix"?: string;
            "excalidraw-export-transparent"?: boolean;
            "excalidraw-export-dark"?: boolean;
            "excalidraw-export-svgpadding"?: number;
            "excalidraw-export-pngscale"?: number;
            "excalidraw-default-mode"?: "view" | "zen";
        };
    }): Promise<string>;
    /**
     *
     * @param templatePath
     * @param embedFont
     * @param exportSettings use ExcalidrawAutomate.getExportSettings(boolean,boolean)
     * @param loader use ExcalidrawAutomate.getEmbeddedFilesLoader(boolean?)
     * @param theme
     * @returns
     */
    createSVG(templatePath?: string, embedFont?: boolean, exportSettings?: ExportSettings, loader?: EmbeddedFilesLoader, theme?: string, padding?: number): Promise<SVGSVGElement>;
    /**
     *
     * @param templatePath
     * @param scale
     * @param exportSettings use ExcalidrawAutomate.getExportSettings(boolean,boolean)
     * @param loader use ExcalidrawAutomate.getEmbeddedFilesLoader(boolean?)
     * @param theme
     * @returns
     */
    createPNG(templatePath?: string, scale?: number, exportSettings?: ExportSettings, loader?: EmbeddedFilesLoader, theme?: string, padding?: number): Promise<any>;
    /**
     *
     * @param text
     * @param lineLen
     * @returns
     */
    wrapText(text: string, lineLen: number): string;
    private boxedElement;
    /**
     *
     * @param topX
     * @param topY
     * @param width
     * @param height
     * @returns
     */
    addRect(topX: number, topY: number, width: number, height: number): string;
    /**
     *
     * @param topX
     * @param topY
     * @param width
     * @param height
     * @returns
     */
    addDiamond(topX: number, topY: number, width: number, height: number): string;
    /**
     *
     * @param topX
     * @param topY
     * @param width
     * @param height
     * @returns
     */
    addEllipse(topX: number, topY: number, width: number, height: number): string;
    /**
     *
     * @param topX
     * @param topY
     * @param width
     * @param height
     * @returns
     */
    addBlob(topX: number, topY: number, width: number, height: number): string;
    /**
     *
     * @param topX
     * @param topY
     * @param text
     * @param formatting
     *   box: if !null, text will be boxed
     * @param id
     * @returns
     */
    addText(topX: number, topY: number, text: string, formatting?: {
        wrapAt?: number;
        width?: number;
        height?: number;
        textAlign?: string;
        box?: boolean | "box" | "blob" | "ellipse" | "diamond";
        boxPadding?: number;
    }, id?: string): string;
    /**
     *
     * @param points
     * @returns
     */
    addLine(points: [[x: number, y: number]]): string;
    /**
     *
     * @param points
     * @param formatting
     * @returns
     */
    addArrow(points: [x: number, y: number][], formatting?: {
        startArrowHead?: string;
        endArrowHead?: string;
        startObjectId?: string;
        endObjectId?: string;
    }): string;
    /**
     *
     * @param topX
     * @param topY
     * @param imageFile
     * @returns
     */
    addImage(topX: number, topY: number, imageFile: TFile): Promise<string>;
    /**
     *
     * @param topX
     * @param topY
     * @param tex
     * @returns
     */
    addLaTex(topX: number, topY: number, tex: string): Promise<string>;
    /**
     *
     * @param objectA
     * @param connectionA type ConnectionPoint = "top" | "bottom" | "left" | "right" | null
     * @param objectB
     * @param connectionB when passed null, Excalidraw will automatically decide
     * @param formatting
     *   numberOfPoints: points on the line. Default is 0 ie. line will only have a start and end point
     *   startArrowHead: "triangle"|"dot"|"arrow"|"bar"|null
     *   endArrowHead: "triangle"|"dot"|"arrow"|"bar"|null
     *   padding:
     * @returns
     */
    connectObjects(objectA: string, connectionA: ConnectionPoint | null, objectB: string, connectionB: ConnectionPoint | null, formatting?: {
        numberOfPoints?: number;
        startArrowHead?: "triangle" | "dot" | "arrow" | "bar" | null;
        endArrowHead?: "triangle" | "dot" | "arrow" | "bar" | null;
        padding?: number;
    }): string;
    /**
     * Adds a text label to a line or arrow. Currently only works with a straight (2 point - start & end - line)
     * @param lineId id of the line or arrow object in elementsDict
     * @param label the label text
     * @returns undefined (if unsuccessful) or the id of the new text element
     */
    addLabelToLine(lineId: string, label: string): string;
    /**
     * clear elementsDict and imagesDict only
     */
    clear(): void;
    /**
     * clear() + reset all style values to default
     */
    reset(): void;
    /**
     * returns true if MD file is an Excalidraw file
     * @param f
     * @returns
     */
    isExcalidrawFile(f: TFile): boolean;
    /**
     *
     * @param view
     * @returns
     */
    setView(view: ExcalidrawView | "first" | "active"): ExcalidrawView;
    /**
     *
     * @returns https://github.com/excalidraw/excalidraw/tree/master/src/packages/excalidraw#ref
     */
    getExcalidrawAPI(): any;
    /**
     * get elements in View
     * @returns
     */
    getViewElements(): ExcalidrawElement[];
    /**
     *
     * @param elToDelete
     * @returns
     */
    deleteViewElements(elToDelete: ExcalidrawElement[]): boolean;
    /**
     * get the selected element in the view, if more are selected, get the first
     * @returns
     */
    getViewSelectedElement(): any;
    /**
     *
     * @returns
     */
    getViewSelectedElements(): any[];
    /**
     *
     * @param el
     * @returns TFile file handle for the image element
     */
    getViewFileForImageElement(el: ExcalidrawElement): TFile | null;
    /**
     * copies elements from view to elementsDict for editing
     * @param elements
     */
    copyViewElementsToEAforEditing(elements: ExcalidrawElement[]): void;
    /**
     *
     * @param forceViewMode
     * @returns
     */
    viewToggleFullScreen(forceViewMode?: boolean): void;
    /**
     * connect an object to the selected element in the view
     * @param objectA ID of the element
     * @param connectionA
     * @param connectionB
     * @param formatting
     * @returns
     */
    connectObjectWithViewSelectedElement(objectA: string, connectionA: ConnectionPoint | null, connectionB: ConnectionPoint | null, formatting?: {
        numberOfPoints?: number;
        startArrowHead?: "triangle" | "dot" | "arrow" | "bar" | null;
        endArrowHead?: "triangle" | "dot" | "arrow" | "bar" | null;
        padding?: number;
    }): boolean;
    /**
     * Adds elements from elementsDict to the current view
     * @param repositionToCursor default is false
     * @param save default is true
     * @param newElementsOnTop controls whether elements created with ExcalidrawAutomate
     *   are added at the bottom of the stack or the top of the stack of elements already in the view
     *   Note that elements copied to the view with copyViewElementsToEAforEditing retain their
     *   position in the stack of elements in the view even if modified using EA
     *   default is false, i.e. the new elements get to the bottom of the stack
     * @returns
     */
    addElementsToView(repositionToCursor?: boolean, save?: boolean, newElementsOnTop?: boolean): Promise<boolean>;
    /**
     * Register instance of EA to use for hooks with TargetView
     * By default ExcalidrawViews will check window.ExcalidrawAutomate for event hooks.
     * Using this event you can set a different instance of Excalidraw Automate for hooks
     * @returns true if successful
     */
    registerThisAsViewEA(): boolean;
    /**
     * Sets the targetView EA to window.ExcalidrawAutomate
     * @returns true if successful
     */
    deregisterThisAsViewEA(): boolean;
    /**
     * If set, this callback is triggered when the user closes an Excalidraw view.
     */
    onViewUnloadHook: (view: ExcalidrawView) => void;
    /**
     * If set, this callback is triggered, when the user changes the view mode.
     * You can use this callback in case you want to do something additional when the user switches to view mode and back.
     */
    onViewModeChangeHook: (isViewModeEnabled: boolean, view: ExcalidrawView, ea: ExcalidrawAutomate) => void;
    /**
    * If set, this callback is triggered, when the user hovers a link in the scene.
    * You can use this callback in case you want to do something additional when the onLinkHover event occurs.
    * This callback must return a boolean value.
    * In case you want to prevent the excalidraw onLinkHover action you must return true, it will stop the native excalidraw onLinkHover management flow.
    */
    onLinkHoverHook: (element: NonDeletedExcalidrawElement, linkText: string, view: ExcalidrawView, ea: ExcalidrawAutomate) => boolean;
    /**
    * If set, this callback is triggered, when the user clicks a link in the scene.
    * You can use this callback in case you want to do something additional when the onLinkClick event occurs.
    * This callback must return a boolean value.
    * In case you want to prevent the excalidraw onLinkClick action you must return false, it will stop the native excalidraw onLinkClick management flow.
    */
    onLinkClickHook: (element: ExcalidrawElement, linkText: string, event: MouseEvent, view: ExcalidrawView, ea: ExcalidrawAutomate) => boolean;
    /**
     * If set, this callback is triggered, when Excalidraw receives an onDrop event.
     * You can use this callback in case you want to do something additional when the onDrop event occurs.
     * This callback must return a boolean value.
     * In case you want to prevent the excalidraw onDrop action you must return false, it will stop the native excalidraw onDrop management flow.
     */
    onDropHook: (data: {
        ea: ExcalidrawAutomate;
        event: React.DragEvent<HTMLDivElement>;
        draggable: any;
        type: "file" | "text" | "unknown";
        payload: {
            files: TFile[];
            text: string;
        };
        excalidrawFile: TFile;
        view: ExcalidrawView;
        pointerPosition: {
            x: number;
            y: number;
        };
    }) => boolean;
    /**
     * utility function to generate EmbeddedFilesLoader object
     * @param isDark
     * @returns
     */
    getEmbeddedFilesLoader(isDark?: boolean): EmbeddedFilesLoader;
    /**
     * utility function to generate ExportSettings object
     * @param withBackground
     * @param withTheme
     * @returns
     */
    getExportSettings(withBackground: boolean, withTheme: boolean): ExportSettings;
    /**
     * get bounding box of elements
     * bounding box is the box encapsulating all of the elements completely
     * @param elements
     * @returns
     */
    getBoundingBox(elements: ExcalidrawElement[]): {
        topX: number;
        topY: number;
        width: number;
        height: number;
    };
    /**
     * elements grouped by the highest level groups
     * @param elements
     * @returns
     */
    getMaximumGroups(elements: ExcalidrawElement[]): ExcalidrawElement[][];
    /**
     * gets the largest element from a group. useful when a text element is grouped with a box, and you want to connect an arrow to the box
     * @param elements
     * @returns
     */
    getLargestElement(elements: ExcalidrawElement[]): ExcalidrawElement;
    /**
     * Gets the groupId for the group that contains all the elements, or null if such a group does not exist
     * @param elements
     * @returns null or the groupId
     */
    getCommonGroupForElements(elements: ExcalidrawElement[]): string;
    /**
     * Gets all the elements from elements[] that share one or more groupIds with element.
     * @param element
     * @param elements - typically all the non-deleted elements in the scene
     * @returns
     */
    getElementsInTheSameGroupWithElement(element: ExcalidrawElement, elements: ExcalidrawElement[]): ExcalidrawElement[];
    /**
     * @param element
     * @param a
     * @param b
     * @param gap
     * @returns 2 or 0 intersection points between line going through `a` and `b`
     *   and the `element`, in ascending order of distance from `a`.
     */
    intersectElementWithLine(element: ExcalidrawBindableElement, a: readonly [number, number], b: readonly [number, number], gap?: number): Point[];
    /**
     * See OCR plugin for example on how to use scriptSettings
     * Set by the ScriptEngine
     */
    activeScript: string;
    /**
     *
     * @returns script settings. Saves settings in plugin settings, under the activeScript key
     */
    getScriptSettings(): {};
    /**
     * sets script settings.
     * @param settings
     * @returns
     */
    setScriptSettings(settings: any): Promise<void>;
    /**
     * Open a file in a new workspaceleaf or reuse an existing adjacent leaf depending on Excalidraw Plugin Settings
     * @param file
     * @returns
     */
    openFileInNewOrAdjacentLeaf(file: TFile): WorkspaceLeaf;
    /**
     * measure text size based on current style settings
     * @param text
     * @returns
     */
    measureText(text: string): {
        width: number;
        height: number;
    };
    /**
     * verifyMinimumPluginVersion returns true if plugin version is >= than required
     * recommended use:
     * if(!ea.verifyMinimumPluginVersion || !ea.verifyMinimumPluginVersion("1.5.20")) {new Notice("message");return;}
     * @param requiredVersion
     * @returns
     */
    verifyMinimumPluginVersion(requiredVersion: string): boolean;
    /**
     * Check if view is instance of ExcalidrawView
     * @param view
     * @returns
     */
    isExcalidrawView(view: any): boolean;
    /**
     * sets selection in view
     * @param elements
     * @returns
     */
    selectElementsInView(elements: ExcalidrawElement[]): void;
    /**
     * @returns an 8 character long random id
     */
    generateElementId(): string;
    /**
     * @param element
     * @returns a clone of the element with a new id
     */
    cloneElement(element: ExcalidrawElement): ExcalidrawElement;
    /**
     * Moves the element to a specific position in the z-index
     */
    moveViewElementToZIndex(elementId: number, newZIndex: number): void;
    /**
     *
     * @param color
     * @returns
     */
    hexStringToRgb(color: string): number[];
    /**
     *
     * @param color
     * @returns
     */
    rgbToHexString(color: number[]): string;
    /**
     *
     * @param color
     * @returns
     */
    hslToRgb(color: number[]): number[];
    /**
     *
     * @param color
     * @returns
     */
    rgbToHsl(color: number[]): number[];
    /**
     *
     * @param color
     * @returns
     */
    colorNameToHex(color: string): string;
}
```
