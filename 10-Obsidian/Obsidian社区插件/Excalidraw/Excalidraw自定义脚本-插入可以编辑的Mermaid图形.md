---
uid: 20231207020538
title: Excalidraw 自定义脚本 - 插入可以编辑的 Mermaid 图形
tags: [Excalidraw, Excalidraw脚本, Mermaid]
description: Excalidraw 插入 Mermaid 后就不能对该 Mermaid 进行源码编辑，为此可以换个思路添加 Mermaid 图形，那就是将插入的 Mermaid 转为 SVG 格式，且 Ctrl + 鼠标左键单击 可以弹出源码进行二次编辑。
author: 一鸣惊人,熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231207021206
---

# Excalidraw 自定义脚本 - 插入可以编辑的 Mermaid 图形

Excalidraw 插入 Mermaid 后就不能对该 Mermaid 进行源码编辑，为此可以换个思路添加 Mermaid 图形，那就是将插入的 Mermaid 转为 SVG 格式，且 `Ctrl + 鼠标左键单击` 可以弹出源码进行二次编辑。

![Excalidraw 自定义脚本：插入可以编辑的 Mermaid 图形](https://cdn.pkmer.cn/images/202312070208690.gif!pkmer)

> [!tip] `Ctrl + 鼠标左键单击` 可以弹出源码
> ![Excalidraw 自定义脚本：插入可以编辑的 Mermaid 图形](https://cdn.pkmer.cn/images/202312070208227.gif!pkmer)

```JavaScript
/*
```javascript
*/
console.log("add mermaid")

let { insertType, inputText } = await openEditPrompt();
if (!insertType) return;
if (!inputText) return;

let {elements, files} = await ExcalidrawLib.mermaidToExcalidraw(inputText, undefined, true)
if (elements && elements.length) {
    elements[0].fileId = Object.keys(files)[0]
    ea.elementsDict[elements[0].id] = elements[0]
    await ea.addElementsToView(true, false, false);
    await ea.targetView.forceSave(true);
}

// 打开文本编辑器
async function openEditPrompt(Text = "") {
    // 打开编辑窗口
    let insertType = true;
    let inputText = "";
    inputText = await utils.inputPrompt(
        "输入Mermaid内容",
        "输入Mermaid内容，ESC退出输入，Ctrl + Enter完成编辑",
        Text,
        [
            {
                caption: "取消编辑",
                action: () => {
                    insertType = false;
                    return;
                }
            },
            {
                caption: "完成编辑",
                action: () => {
                    insertType = true;
                    return;
                }
            }
        ],
        10,
        true
    );
    return { insertType, inputText };
}
```
