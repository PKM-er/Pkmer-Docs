---
uid: 20240221010235
title: 自定义 Excalidraw 脚本 - 双击添加圆圈编号
tags:
  - Excalidraw脚本
  - 图片注释
description: 给Excalidraw添加圆圈编号功能
author: 熊猫别熬夜,一鸣惊人
type: other
draft: false
editable: false
modified: 20240221010515
---

# 自定义 Excalidraw 脚本 - 双击添加圆圈编号

## 效果

参考了 [一鸣惊人的脚本](https://www.bilibili.com/video/BV1XZ421m74S/?share_source=copy_web&vd_source=71b5851b6744265a191d3ec972be4787) 和 大叔的 `Scribble Helper` 脚本，用于添加有序的圆圈编号。

![2024-01-13_自定义Excalidraw脚本-编号模式-添加圆圈编号_IMG-1](https://cdn.pkmer.cn/images/202402210103272.gif!pkmer)

> ✅已启动编号模式，双击添加 num
> ⏩双击 num 可以重新编辑编号
> ⏹再次运行脚本即可退出编号模式

## 脚本

```js
if (!ea.verifyMinimumPluginVersion || !ea.verifyMinimumPluginVersion("1.8.25")) {
    new Notice("This script requires a newer version of Excalidraw. Please install the latest version.");
    return;
}

const DBLCLICKTIMEOUT = 300;
const padding = 6;

const api = ea.getExcalidrawAPI();
const win = ea.targetView.ownerWindow;
if (!win.NumberMode) win.NumberMode = {};

if (typeof win.NumberMode.penOnly === "undefined") {
    win.NumberMode.penOnly = false;
}

let windowOpen = false; //to prevent the modal window to open again while writing with scribble
let prevZoomValue = api.getAppState().zoom.value; //used to avoid trigger on pinch zoom

let selectedTextElements = ea.getViewSelectedElements().filter(el => el.type === "text");

//-------------------------------------------
// Functions to add and remove event listners
//-------------------------------------------
const addEventHandler = (handler) => {
    if (win.NumberMode.eventHandler) {
        win.removeEventListner("pointerdown", handler);
    }
    win.addEventListener("pointerdown", handler);
    win.NumberMode.eventHandler = handler;
    win.NumberMode.window = win;
};

const removeEventHandler = (handler) => {
    win.removeEventListener("pointerdown", handler);
    delete win.NumberMode.eventHandler;
    delete win.NumberMode.window;
};

//Stop the script if scribble helper is clicked and no eligable element is selected
let silent = false;
if (win.NumberMode?.eventHandler) {
    removeEventHandler(win.NumberMode.eventHandler);
    delete win.NumberMode.eventHandler;
    delete win.NumberMode.window;
    if (!(containerElements.length === 1 || selectedTextElements.length === 1)) {
        new Notice("🟠已退出编号模式", 1000);
        return;
    }
    silent = true;
}

// ----------------------
// Custom dialog controls
// ----------------------
if (typeof win.NumberMode.penOnly === "undefined") {
    win.NumberMode.penOnly = undefined;
}
if (typeof win.NumberMode.penDetected === "undefined") {
    win.NumberMode.penDetected = false;
}
let timer = Date.now();
let eventHandler = () => { };

// -------------------------------
// Click / dbl click event handler
// -------------------------------
eventHandler = async (evt) => {
    if (windowOpen) return;
    if (ea.targetView !== app.workspace.activeLeaf.view) removeEventHandler(eventHandler);
    if (evt && evt.target && !evt.target.hasClass("excalidraw__canvas")) return;
    if (evt && (evt.ctrlKey || evt.altKey || evt.metaKey || evt.shiftKey)) return;

    const st = api.getAppState();

    //don't trigger text editor when editing a line or arrow
    if (st.editingElement && ["arrow", "line"].contains(st.editingElment.type)) return;

    if (typeof win.NumberMode.penOnly === "undefined") {
        win.NumberMode.penOnly = false;
    }
    const now = Date.now();
    //the <50 condition is to avoid false double click when pinch zooming
    if ((now - timer > DBLCLICKTIMEOUT) || (now - timer < 50)) {
        prevZoomValue = st.zoom.value;
        timer = now;
        containerElements = ea.getViewSelectedElements()
            .filter(el => ["arrow", "rectangle", "ellipse", "line", "diamond"].contains(el.type));
        selectedTextElements = ea.getViewSelectedElements().filter(el => el.type === "text");
        return;
    }

    //further safeguard against triggering when pinch zooming
    if (st.zoom.value !== prevZoomValue) return;

    //sleeping to allow keyboard to pop up on mobile devices
    await sleep(100);
    ea.clear();

    //if a single element with text is selected, edit the text
    //(this can be an arrow, a sticky note, or just a text element)
    if (selectedTextElements.length === 1) {
        editExistingTextElement(selectedTextElements);
        return;
    }

    //if no text elements are selected (i.e. not multiple text  elements selected),
    //check if there is a single eligeable container selected
    let containerID;
    let container;
    if (selectedTextElements.length === 0) {
        if (containerElements.length === 1) {
            ea.copyViewElementsToEAforEditing(containerElements);
            containerID = containerElements[0].id;
            container = ea.getElement(containerID);
        }
    }

    if (ea.targetView !== app.workspace.activeLeaf.view) return;

    // 开始编号
    windowOpen = true;
    bulletedNumberIndex = window.bulletedNumberIndex ? window.bulletedNumberIndex : 1;
    if (st) {
        for (s in st) {
            if (s.startsWith("currentItem")) {
                ea.style[`${s.charAt(11).toLowerCase() + s.slice(12)}`] = st[s];
                // console.log(`${s}: ${ea.style[s]}`)
            }
        }
    }
    // 字体设置
    ea.style.strokeColor = '#1e1e1e';
    // 最好选用3号等宽字体
    ea.style.fontFamily = 3;
    // 边框设置
    ea.style.roughness = 0;
    ea.style.strokeWidth = 1;
    const { width, height } = ea.measureText(`${bulletedNumberIndex}`);
    const maxSize = Math.max(width, height) + 2;
    const padding = maxSize * 0.5;
    const id = ea.addText(0, 0, `${bulletedNumberIndex}`, {
        width: maxSize,
        height: maxSize,
        box: "ellipse",
        wrapAt: 0,
        boxPadding: padding,
        textAlign: "center",
        textVerticalAlign: "middle",
        boxStrokeColor: "black",
        boxPadding: 2
    });
    const box = ea.getElement(id);
    const colorList = ["#FF595E", "#FFCA3A", "#8AC926", "#1982C4", "#6A4C93"];
    box.backgroundColor = colorList[(bulletedNumberIndex - 1) % colorList.length];
    box.width = maxSize + 2 * padding;
    box.height = maxSize + 2 * padding;
    window.bulletedNumberIndex += 1;
    ea.addElementsToView(true, true,true);
    windowOpen = false;
};

// ---------------------
// Edit Existing Element
// ---------------------
const editExistingTextElement = async (elements) => {
    windowOpen = true;
    let isModified = false;
    ea.copyViewElementsToEAforEditing(elements);
    const el = ea.getElements()[0];
    ea.style.strokeColor = el.strokeColor;
    const text = await utils.inputPrompt(
        "重新设置编号",
        "输入数字",
        elements[0].rawText,
        [
            {
                caption: "取消",
                action: () => { isModified = false; return; }
            },
            {
                caption: "编辑",
                action: () => { isModified = true; return; }
            }
        ],
        1,
        true
    );
    if (isModified) {
        window.bulletedNumberIndex = Number(text) + 1;
    }
    windowOpen = false;
    if (!text) return;
    el.originalText = text;
    el.text = text;
    el.rawText = text;
    ea.refreshTextElementSize(el.id);
    await ea.addElementsToView(false, false);

    if (el.containerId) {
        const containers = ea.getViewElements().filter(e => e.id === el.containerId);
        api.updateContainerSize(containers);
        ea.selectElementsInView(containers);
    }
};

//--------------
// Start actions
//--------------
if (!win.NumberMode?.eventHandler) {
    if (!silent) new Notice(
        "✅已启动编号模式，双击添加num\n" +
        "⏩双击num可以重新编辑编号\n" +
        "⏹再次运行脚本即可退出编号模式",
        5000
    );
    addEventHandler(eventHandler);
}

if (containerElements.length === 1 || selectedTextElements.length === 1) {
    timer = timer - 100;
    eventHandler();
}
```

## References

- [Obsidian Excalidraw 增加日历元素、圆圈编号小功能](https://www.bilibili.com/video/BV1XZ421m74S/?share_source=copy_web&vd_source=71b5851b6744265a191d3ec972be4787)
