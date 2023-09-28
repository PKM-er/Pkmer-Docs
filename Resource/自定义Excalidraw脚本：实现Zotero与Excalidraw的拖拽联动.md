---
uid: 20230929013043
title: 自定义 Excalidraw 脚本：实现 Zotero 与 Excalidraw 的拖拽联动
tags:
  - zotero
  - Excalidraw
  - 工作流
description: 
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20230929013723
---

# 自定义 Excalidraw 脚本：实现 Zotero 与 Excalidraw 的拖拽联动

## 概述

之前分享过 [Quicker 动作之 BookxNote 和 Obsidian 联动实现 PDF 笔记自由化]( https://pkmer.cn/show/20230726003600 ) 实现了 Excalidraw 画板与 BookxNote 的联动，需要借助 Quicker 来点击 2 次才能完成一个过程，整体下来还是比较麻烦的（不过我自己还是经常在用），这次将介绍 Zotero 与 Excalidraw 的无缝连接，不需要借助 Quicker，而是通过自定义 Excalidraw 的脚本，直接拖拽 Zotero 的文本或者图片就可以实现 Zotero 到 Excalidraw 的笔记了，**拖拽过来的包含注释和选择的内容**。

> PS：本文使用的的是 Zotero-7.0.0-beta.24，按理说 Zotero 6 也可以正常使用。

![[1ab745a1e779aca8a1c4ca30eb1b6acf.gif]]

## 实现过程

具体实现过程非常简单，第一步修改对应的路径，第二步保存 md 文件到指定文件夹，之后点击运行脚本就完成了。

### 修改📌注释的文件路径

修改 [[#Zotero to Excalidraw 脚本]] 中的两个文件路径：

![[93ba923af767612ad034ed811367fc18.png]]

- 第一个为 Zotero 的图形存储路径；
	- Zotero 的标注图片一般在你定义的数据库的文件夹的**cache->library**下面：
		- ![[c19e0101f275c6dfb8384083b33dc712.png]]
- 第二个就是你自定义拖拽过来的图片存放的存储路径了，注意要在 Obsidian 的笔记库中。

### 保存为 md 文件保存到指定文件夹

修改完路径后将下面代码保存为 md 文件，修改放入 Excalidraw 指定的 Scripts 的文件夹中，在 Excalidraw 的画板中的工具面板中就会出现一个齿轮按钮，需要时点击运行就可以了。

![[087b3d4160fc33203366856a4ec3bb5d.png]]

### Zotero to Excalidraw 脚本

```javascript
function processText(text) {
    // 替换英文之间的多个空格为一个空格
    text = text.replace(/([a-zA-Z])([\u4e00-\u9fa5])/g, '$1 $2');
    // 删除中文之间的空格
    text = text.replace(/([\u4e00-\u9fa5])\s+([\u4e00-\u9fa5])/g, '$1$2');
    text = text.replace(/([\u4e00-\u9fa5])\s+/g, '$1');
    text = text.replace(/\s+([\u4e00-\u9fa5])/g, '$1');
    // 将全角字符转换为半角字符
    text = text.replace(/[\uFF01-\uFF5E]/g, function (match) { return String.fromCharCode(match.charCodeAt(0) - 65248); });

    // // 在中英文之间添加空格
    // text = text.replace(/([\u4e00-\u9fa5])([a-zA-Z])/g, '$1 $2');
    // text = text.replace(/([a-zA-Z])([\u4e00-\u9fa5])/g, '$1 $2');

    return text;
}

function match_zotero_txt(text) {
    const regex = /“(.*)” \(/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}

function match_zotero_author(text) {
    const regex = /\(\[(.*\d+)]\(/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}

function match_zotero_link(text) {
    const regex = /\[pdf\]\((.*)\)\)/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}

function match_zotero_comment(text) {
    const regex = /\)\)([^ ].*)/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}

function match_zotero_image(text) {
    const regex = /annotation=(\w*)/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}

const path = require('path');
const fs = require("fs");

let api = ea.getExcalidrawAPI();
let el = ea.targetView.containerEl.querySelectorAll(".excalidraw-wrapper")[0];

el.ondrop = async function (event) {
    console.log("ondrop");
    event.preventDefault();
    let insert_txt = event.dataTransfer.getData("Text");

    // 清空原本投入的文本
    event.stopPropagation();
    ea.clear();
    // 格式化文本(去空格、全角转半角)  

    insert_txt = processText(insert_txt)

    if (insert_txt.includes("zotero://")) {
        console.log("Zotero");

        zotero_txt = match_zotero_txt(insert_txt);
        zotero_author = match_zotero_author(insert_txt);
        if (zotero_author) {
            zotero_author = `(${zotero_author})`;
        };
        zotero_comment = match_zotero_comment(insert_txt);
        if (zotero_comment) {
            zotero_comment = `\n\n📝：${zotero_comment}`;
        };
        zotero_link = match_zotero_link(insert_txt);

        if (zotero_txt) {
            console.log("ZoteroText");
            let id = await ea.addText(0, 0, `📖：${zotero_txt}${zotero_author}${zotero_comment}`, { width: 600, box: true, wrapAt: 50, textAlign: "left", textVerticalAlign: "middle", box: "box" });
            let el = ea.getElement(id);
            el.link = zotero_link;
            await ea.addElementsToView(true, false, false);
            if (ea.targetView.draginfoDiv) {
                document.body.removeChild(ea.targetView.draginfoDiv);
                delete ea.targetView.draginfoDiv;
            };
        } else {
            console.log("ZoteroImage");
            zotero_image = match_zotero_image(insert_txt);
            zotero_image_name = `${zotero_image}.png`;

            // 📌修改到Zotero的library文件夹
            zotero_image_path = `D:\\Zotero\\cache\\library\\${zotero_image}.png`;
            // 📌定义附件保存的地址，修改到你定义的笔记文件夹
            let Obsidian_image_Path = `D:\\PandaNotes\\Y-图形文件存储\\ZoteroImages\\${zotero_image}.png`

            // 复制zotero的图片到Obsidian的笔记库
            fs.copyFileSync(zotero_image_path, Obsidian_image_Path);

            await new Promise((resolve) => setTimeout(resolve, 300)); // 暂停0.3秒，等待复制文件的过程

            let id = await ea.addImage(0, 0, zotero_image_name);
            let el = ea.getElement(id);
            el.link = zotero_link;
            await ea.addElementsToView(true, false, false);
            if (ea.targetView.draginfoDiv) {
                document.body.removeChild(ea.targetView.draginfoDiv);
                delete ea.targetView.draginfoDiv;
            };
        };

    } else {
        let id = await ea.addText(0, 0, `${insert_txt} `, { width: 400, box: true, wrapAt: 50, textAlign: "left", textVerticalAlign: "middle", box: "box" });
        let el = ea.getElement(id);
        await ea.addElementsToView(true, false, false);
        if (ea.targetView.draginfoDiv) {
            document.body.removeChild(ea.targetView.draginfoDiv);
            delete ea.targetView.draginfoDiv;
        };

    };
};


```
