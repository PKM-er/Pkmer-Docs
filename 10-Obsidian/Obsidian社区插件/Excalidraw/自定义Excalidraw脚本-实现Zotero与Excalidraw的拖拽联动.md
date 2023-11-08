---
uid: 20230929013043
title: 自定义 Excalidraw 脚本：实现 Zotero 与 Excalidraw 的拖拽联动
tags:
  - zotero
  - workflow
  - Excalidraw脚本
  - Excalidraw
description: 
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231029203445
---

# 自定义 Excalidraw 脚本：实现 Zotero 与 Excalidraw 的拖拽联动

![image.png](https://cdn.pkmer.cn/images/202310052312620.png!pkmer)

## 概述

之前分享过 [Quicker 动作之 BookxNote 和 Obsidian 联动实现 PDF 笔记自由化]( https://pkmer.cn/show/20230726003600 ) 实现了 Excalidraw 画板与 BookxNote 的联动，需要借助 Quicker 来点击 2 次才能完成一个过程，整体下来还是比较麻烦的（不过我自己还是经常在用），这次将介绍 Zotero 与 Excalidraw 的无缝连接，不需要借助 Quicker，而是通过自定义 Excalidraw 的脚本，直接拖拽 Zotero 的文本或者图片就可以实现 Zotero 到 Excalidraw 的笔记了，**拖拽过来的包含注释和选择的内容**。

> PS：本文使用的的是 Zotero 7，按理说 Zotero 6 也可以正常使用。

## 实现过程

具体实现过程非常简单，第一步修改对应的路径，第二步保存 md 文件到指定文件夹，之后点击运行脚本就完成了。

### 保存为 md 文件保存到指定文件夹

将下面代码保存为 md 文件，修改放入 Excalidraw 指定的 Scripts 的文件夹中，在 Excalidraw 的画板中的工具面板中就会出现一个齿轮按钮，需要时点击运行。

![Pasted image 20230929010229](https://cdn.pkmer.cn/images/Pasted%20image%2020230929010229.png!pkmer)

### 修改📌注释的文件路径

第一次运行时，需要修改路径，==在第一次单击运行后==，在 Excalidraw 插件的设置中会出现以下选项：

![Pasted image 20231029202243](https://cdn.pkmer.cn/images/Pasted%20image%2020231029202243.png!pkmer)

> [!caution]+ 注意：需要单击运行后，插件设置才会加载这个选项。

- 第一个为 Zotero 的图形存储路径；
	- Zotero 的标注图片一般在你定义的数据库的文件夹的**cache->library**下面：
		- ![Pasted image 20230929011210](https://cdn.pkmer.cn/images/Pasted%20image%2020230929011210.png!pkmer)
- 第二个就是你自定义拖拽过来的图片存放的存储路径了，注意要在 Obsidian 的笔记库中的==相对路径==。

### Zotero to Excalidraw 脚本

该脚本的中心思想就是通过拖拽的文本，定位到图片名，从而复制该图片到 OB 的笔记库中，并对拖拽的文本进行处理，去除多余的空格以及全角转半角，拆分为 zotero_txt、zotero_author、zotero_link、zotero_comment、zotero_image 这 5 个文本，自定义组合：

- 如果拖拽文本包含 "zotero://" 则进行拆分组合，否则只对文本进行格式化处理
	- 判断 zotero_txt 是否包含文本？
		- True：为文本标注，组合文本为需要的格式
			- 判断 zotero_comment、zotero_author 是否包含文本？
				- True：包含文本，即添加
				- False：为空值
			- 组合 zotero_txt、zotero_author、zotero_comment
			- 添加组合文本并带有回链 zotero_link 到 Excalidraw 画板
		- False：为图片标注
			- 通过 match_zotero_image 来图片名 zotero_image
				- 复制 Zotero 的图片到指定文件夹
					- 等待 0.2 秒来复制文件
			- 添加图片并带有回链 zotero_link 到 Excalidraw 画板

> [!tip]+ 如果你是拖拽替他文本，该脚本可以帮你格式化处理一下的

```javascript
/*

```javascript
*/

let settings = ea.getScriptSettings();
//set default values on first run
if (!settings["Zotero Libarary Path"]) {
    settings = {
        "Zotero Libarary Path": {
            value: "D:/Zotero/cache/library",
            description: "Zotero Library的路径，比如：D:/Zotero/cache/library"
        },
        "Zotero Images Path": {
            value: "Y-图形文件存储/ZoteroImages",
            description: "Obsidian库内存放Zotero的图片的相对路径，比如：Y-图形文件存储/ZoteroImages"
        }
    };
    ea.setScriptSettings(settings);
}

const path = require('path');
const fs = require("fs");

// 获取库的基本路径
const basePath = (app.vault.adapter).getBasePath();
// 📌修改到Zotero的library文件夹
const zotero_library_path = settings["Zotero Libarary Path"].value;
// 设置相对路径
const relativePath = settings["Zotero Images Path"].value;

// let api = ea.getExcalidrawAPI();
let el = ea.targetView.containerEl.querySelectorAll(".excalidraw-wrapper")[0];

const fillStyles = ["文字", "背景"];
let InsertStyle = await utils.suggester(fillStyles, fillStyles, "选择插入卡片颜色的形式，ESC退出(默认白底黑字)");

el.ondrop = async function (event) {
    console.log("ondrop");
    event.preventDefault();
    var insert_txt = event.dataTransfer.getData("Text");

    // 清空原本投入的文本
    event.stopPropagation();
    ea.clear();

    // 设定一些样式
    ea.style.strokeStyle = "solid";
    
    let zotero_color = match_zotero_color(insert_txt);
    // alert(zotero_color);

    if (zotero_color) {
        // 卡片背景颜色
        if (InsertStyle == "背景") {
            ea.style.backgroundColor = zotero_color;
            ea.style.strokeColor = "#1e1e1e"
        } else if (InsertStyle == "文字") {
            ea.style.backgroundColor = "#ffffff";
            ea.style.strokeColor = zotero_color;
        } else {
            ea.style.backgroundColor = "#ffffff";
            ea.style.strokeColor = "#1e1e1e"
        }
    } else {
        ea.style.backgroundColor = "#ffffff";
        ea.style.strokeColor = "#1e1e1e"
    }

    ea.style.fillStyle = 'solid';
    ea.style.roughness = 0;
    // ea.style.roundness = { type: 3 }; // 圆角
    ea.style.strokeWidth = 2;
    ea.style.fontFamily = 4;
    ea.style.fontSize = 20;

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

            let id = await ea.addText(0, 0, `📖：${zotero_txt}${zotero_author}${zotero_comment}`, { width: 600, box: true, wrapAt: 90, textAlign: "left", textVerticalAlign: "middle", box: "box" });
            let el = ea.getElement(id);
            el.link = zotero_link;
            await ea.addElementsToView(true, false, false);
            if (ea.targetView.draginfoDiv) {
                document.body.removeChild(ea.targetView.draginfoDiv);
                delete ea.targetView.draginfoDiv;
            };
        } else {
            console.log("ZoteroImage");
            let zotero_image = match_zotero_image(insert_txt);
            let zotero_image_name = `${zotero_image}.png`;
            let Obsidian_image_Path = `${basePath}/${relativePath}/${zotero_image_name}`;

            // 如果Ob的路径不存在则创建
            if (!fs.existsSync(`${basePath}/${relativePath}`)) {
                fs.mkdirSync(path.dirname(`${basePath}/${relativePath}`), { recursive: true });
            }
            let zotero_image_path = `${zotero_library_path}/${zotero_image_name}`;

            // 复制zotero的图片到Obsidian的笔记库
            fs.copyFileSync(zotero_image_path, Obsidian_image_Path);

            await new Promise((resolve) => setTimeout(resolve, 200)); // 暂停0.2秒，等待复制文件的过程

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
        let id = await ea.addText(0, 0, `${insert_txt} `, { width: 400, box: true, wrapAt: 90, textAlign: "left", textVerticalAlign: "middle", box: "box" });
        let el = ea.getElement(id);
        await ea.addElementsToView(true, false, false);
        if (ea.targetView.draginfoDiv) {
            document.body.removeChild(ea.targetView.draginfoDiv);
            delete ea.targetView.draginfoDiv;
        };

    };
};

new Notice("ZoteroToExcalidraw脚本已启动！");

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

function match_zotero_color(text) {
    const regex = /#[a-zA-Z0-9]{6}/;
    const matches = text.match(regex);
    return matches ? matches[0] : "";
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
    const regex = /.*\)\).*\)\)([\s\S]*)/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}

function match_zotero_image(text) {
    const regex = /annotation=(\w*)/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}
```

## 添加卡片颜色

如果你想添加标注的卡片颜色，可以在**首选项 ->高级中编辑器 ->搜索：`annotations.noteTemplates`**，修改高亮标注的模板，添加{{color}}属性，其他属性见官方文档：[note templates [Zotero Documentation]](https://www.zotero.org/support/note_templates)：

![Pasted image 20231017234906](https://cdn.pkmer.cn/images/Pasted%20image%2020231017234906.png!pkmer)

```
<p>{{color}} {{highlight}} {{citation}} {{comment}}</p>
```


> [!caution]+ 不要随意修改 NoteTemplate
> 因为该脚本是通过文本正则匹配的，所以当你修改了高亮的模板时，这个脚本可能会失效，如果你想匹配自己的模板，可以自行修改匹配条件。

设置完成之后，再运行该脚本，插入的卡片就可以根据匹配标注的颜色了，根据选择可以设置 2 种卡片颜色方案：

> [!cite]+ [[Memos20231017105429]]
> ![Pasted image 20231017233449](https://cdn.pkmer.cn/images/Pasted%20image%2020231017233449.png!pkmer)

> [!tip]+ 禁用卡片文字弹窗
> 如果你不需要设定颜色，可以 ESC，或者注释掉这个弹窗的代码。
> ![Pasted image 20231017233512](https://cdn.pkmer.cn/images/Pasted%20image%2020231017233512.png!pkmer)

> 注释掉这一行：
>
> ```
> let InsertStyle = await utils.suggester(fillStyles, fillStyles, "选择插入卡片颜色的形式，ESC退出(默认白底黑字)");
> ```