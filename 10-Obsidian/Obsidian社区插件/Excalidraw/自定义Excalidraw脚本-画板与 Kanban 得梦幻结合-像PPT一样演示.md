---
uid: 20240122215722
title: 自定义 Excalidraw 脚本 - 画板与 Kanban 得梦幻结合 - 像 PPT 一样演示
tags: [Excalidraw脚本, Kanban, PPT]
description: "借用 Obsidian 的 Kanban 插件 的 UI 功能，实现一个 Excalidraw 的简单的大纲。\r\r借用 Kanban 的拖拽功能可以按照 Kanban 的自上而下的顺序对 Frame 进行排序，同时用大叔的 SildeShow 脚本演示画布，实现像 PPT 一样的演示。"
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240122223401
---

# 自定义 Excalidraw 脚本 - 画板与 Kanban 得梦幻结合 - 像 PPT 一样演示

![自定义 Excalidraw 脚本 - 画板与 Kanban 得梦幻结合 - 像 PPT 一样演示](https://cdn.pkmer.cn/images/202401222205477.png!pkmer)

## 前言简介

**借用 Obsidian 的 [[obsidian-kanban|Kanban 插件]] 的 UI 功能**，配合 Excalidraw 的 ` Frame 框架` 以及 [[Excalidraw局部嵌入Obsidian|局部引用功能]] 生成一个 `FrameKanban.md` 文件，该 FrameKanban.md 文件其实是一个动态文件，会根据当前的 Excalidraw 而生成对应的缩略图或者标题大纲，实现一个 Excalidraw 的简单的大纲。

![自定义 Excalidraw 脚本 - 画板与 Kanban 得梦幻结合 - 像 PPT 一样演示](https://cdn.pkmer.cn/images/202401222205478.gif!pkmer)

**借用 Kanban 的拖拽功能**可以按照 Kanban 的自上而下的顺序对 Frame 进行排序，然后你可以用该脚本对 Excalidraw 的 Frame 进行排序。同时用大叔的 [[Excalidraw脚本-Slideshow完美实现画板幻灯片演示的脚本|SildeShow]] 脚本演示画布，实现像 PPT 一样的演示。

![自定义 Excalidraw 脚本 - 画板与 Kanban 得梦幻结合 - 像 PPT 一样演示](https://cdn.pkmer.cn/images/202401222205479.gif!pkmer)

> [!tip] Frame 的命名
> 正常的 Fame 命名稍微有点不方便 (仅个人感觉，可能大叔之后会优化)，我之前写过 [[自定义Excalidraw脚本-OCR自动提取图片文字|TextExtractor]] 的一个脚本，是用于对图片进行 OCR 的，其实还可以对 Frame 或者 Text 的元素进行编辑，也就是不仅可以编辑图形文本还是对 Frame 和包含文本元素进行文本编辑。
> ![自定义 Excalidraw 脚本 - 画板与 Kanban 得梦幻结合 - 像 PPT 一样演示](https://cdn.pkmer.cn/images/202401222205480.gif!pkmer)

## 使用教程

### 视频教程

<iframe src="https://player.bilibili.com/player.html?aid=496214790&bvid=BV13K411i7Jy&cid=1405753394&p=1" autoplay="false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500"> </iframe>

### 使用用法

首先感谢群友 @颜凯 提供了以下的使用教程，比我写的好多了，我估计都不会写这些详细，以后注意并学习一下 (by 熊猫 24.01.15)

- 前提条件：
	- 1、安装 kanban 脚本（教程详见：[[Excalidraw如何安装脚本_脚本设置介绍]])
	- 2、安装 kanban 插件
- 脚本设置
	- ![自定义 Excalidraw 脚本 - 画板与 Kanban 得梦幻结合 - 像 PPT 一样演示](https://cdn.pkmer.cn/images/202401222205481.png!pkmer)

#### 第一步：Frame 选定演示范围

![自定义 Excalidraw 脚本 - 画板与 Kanban 得梦幻结合 - 像 PPT 一样演示](https://cdn.pkmer.cn/images/202401222205482.png!pkmer)

#### 第二步：打开 Kanban 文件

一定要先打开 kanban 文件，不然运行脚本找不到对应的显示列表

![自定义 Excalidraw 脚本 - 画板与 Kanban 得梦幻结合 - 像 PPT 一样演示](https://cdn.pkmer.cn/images/202401222205483.png!pkmer)

#### 第三步：运行脚本功能

- 脚本功能介绍
	- `true`：有缩略图
	- `false`：无缩略图
	- `sort`：排序（调整顺序后，再按 `sort`，顺序完成更新）
	- `open`：以 4 种模式 (新标签页 `tab`、垂直标签页 `vertical`、水平标签页 `horizontal`、悬浮标签页 `hover`，需要安装 Hover 插件) 打开 kanban
		- PS：一般固定到侧边后就不需要额外打开了。

![自定义 Excalidraw 脚本 - 画板与 Kanban 得梦幻结合 - 像 PPT 一样演示](https://cdn.pkmer.cn/images/202401222205485.png!pkmer)

## 不足之处

1. 依赖于 kanban，不过拖拽到文本，只能在看板之间移动；
2. 不支持嵌套，没有层级管理，感觉功能太复杂了，反而不好用，也不想折腾了。

## 常见 BUG

### 缩略图没有生成或者刷新

Kanban 文件的刷新稍微有点延迟，而且 Excalidraw 的局部引用视图生成在第一次打开时需要一点时间的，你可以稍微等一会儿。

> [!tip] Excalidraw 的嵌入图片设置
> ![自定义 Excalidraw 脚本 - 画板与 Kanban 得梦幻结合 - 像 PPT 一样演示](https://cdn.pkmer.cn/images/202401222205486.png!pkmer)
>  **推荐模式：** 如果电脑性能一般的情况下，建议在编辑或者快速查看的时候采用 PNG 模式，当你需要真正的复制文本的话，再去切换 Native SVG 格式，不过 Kanban 的图片是不能预览的。

## EA 脚本

[[Excalidraw如何安装脚本_脚本设置介绍]]

```js
const fs = require('fs');
const activefile = app.workspace.getActiveFile();
let settings = ea.getScriptSettings();
// 加载默认值
if (!settings["动态Kanban.md的路径"]) {

    settings = {
        "动态Kanban.md的路径": {
            value: "Excalidraw/Excalidraw.Kanban.md",
            description: "用于存放Frame的Kanban文件的存储路径<br>ob的路径，如：Excalidraw/Excalidraw.Kanban.md"
        },
        "Kanban的宽度": {
            value: 340,
            description: "Kanban的宽度，默认值为330"
        },
        "缩略图是否带连接": {
            value: false,
            description: "如带连接，则单击缩略图即可跳转"
        },
    };
    ea.setScriptSettings(settings);
}
const kanbanFilePath = settings["动态Kanban.md的路径"].value;
const KanbanPath = app.vault.getAbstractFileByPath(kanbanFilePath);
const kanbanFullPath = app.vault.adapter.getFullPath(kanbanFilePath);

const KanbanLaneWidth = settings["Kanban的宽度"].value;

await ea.addElementsToView();
const frameElements = ea.getViewElements().filter(el => el.type === "frame");
const fileName = app.workspace.getActiveFile().name;
const choices = ["生成Frame卡片(有缩略图)", "生成Frame大纲(无缩略图)", "对Frame进行排序", "打开Kanban文件"];

const choice = await utils.suggester(choices, choices, "是否生成缩略图或者排序");
if (typeof choice === "undefined") {
    return; // 退出函数或程序
}

// ! open打开形式
if (choice === choices[3]) {

    const choices = ["新标签页", "垂直标签页", "水平标签页", "悬浮标签页，需要安装Hover插件"];
    const choice = await utils.suggester(choices, choices, "是否生成缩略图或者排序");
    if (choice === choices[0]) {
        // app.workspace.activeLeaf.openFile(KanbanFullPath);
        app.workspace.getLeaf("tab").openFile(KanbanPath);
    } else if (choice === choices[1]) {
        app.workspace.getLeaf('split', 'vertical').openFile(KanbanPath);

    } else if (choice === choices[2]) {
        app.workspace.getLeaf('split', 'horizontal').openFile(KanbanPath);

    } else if (choice === choices[3]) {
        let newLeaf = app.plugins.plugins["obsidian-hover-editor"].spawnPopover(undefined, () => this.app.workspace.setActiveLeaf(newLeaf, false, true));
        newLeaf.openFile(KanbanPath);
    }
    return;
}


// ! 依据看板(kanban)顺序来排序
if (choice === choices[2]) {


    const updatedElements = await processFile(frameElements, kanbanFullPath, fileName);

    let markdownFile = app.vault.getAbstractFileByPath(kanbanFilePath);
    if (markdownFile) app.vault.modify(markdownFile, updatedElements.join("\n"));
    new Notice(`♻FrameKanban已排序`, 3000);

    // ! 给aliaes添加所有Frame的名称
    const allFrameElements = ea.getViewElements().filter(el => el.type === "frame");
    await app.fileManager.processFrontMatter(activefile, fm => {
        fm.aliases = [];
        for (el of allFrameElements) {
            fm.aliases.push(el.name);
        }
    });
    await ea.addElementsToView();
    
    return;
}

// ! 由Excalidraw的Frame生成Kanban
let frameLinks = [];
if (frameElements.length >= 1) {
    frameElements.sort((a, b) => {
        // 根据 fileName 进行排序
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    for (let el of frameElements) {
        let frameLink;
        if (choice === choices[0]) {
            if (settings["缩略图是否带连接"].value) {
                frameLink = `- [ ] [[${fileName}#^frame=${el.id}|${el.name}]]<br>[![[${fileName}#^frame=${el.id}]]](${fileName}#^frame=${el.id})`;
            } else {
                frameLink = `- [ ] [[${fileName}#^frame=${el.id}|${el.name}]]<br>![[${fileName}#^frame=${el.id}]]`;
            }
        } else if (choice === choices[1]) {
            frameLink = `- [ ] [[${fileName}#^frame=${el.id}|${el.name}]]`;
        }
        frameLinks.push(frameLink);
    }
}
const kanbanYaml = "---\n\nkanban-plugin: basic\n\n---\n\n";

const kanbanSetting = {
    "kanban-plugin": "basic",
    "lane-width": KanbanLaneWidth,
    "show-checkboxes": false,
    "archive-with-date": false
};

const kanbanEndText = `\n\n%% kanban:settings\n\`\`\`\n${JSON.stringify(kanbanSetting)}\n\`\`\`\n%%`;
const extrTexts = kanbanYaml + `## [[${fileName.replace(".md", "")}]]\n\n` + frameLinks.join("\n") + kanbanEndText;

if (KanbanPath) {
    app.vault.modify(KanbanPath, extrTexts);
} else {
    file = await app.vault.create(kanbanFilePath, extrTexts);
}

if (choice === choices[0]) {
    new Notice(`🖼FrameKanban已刷新`, 3000);
} else {
    new Notice(`⏩FrameKanban已刷新`, 3000);
}
return;

// 排序
async function processFile(allFrameEls, frameKanbanFullPath, fileName) {
    try {
        const data = await fs.promises.readFile(frameKanbanFullPath, 'utf8');
        const lines = data.split('\n');
        const updatedElements = [];

        const regex = new RegExp(`\\[\\[${fileName}\\#(\\^frame).*\\]\\]`);;
        let j = 0;
        for (let i = 0; i < lines.length; i++) {

            if (regex.test(lines[i])) {
                // 匹配对应的Excalidraw链接
                let regex = /^-\s.*?\[\[(.*?\.md)#\^(\w+)=([a-zA-Z0-9-_]+)\|?(.*?)\]\].*/;
                let elLinkStyle = lines[i].match(regex)[2];
                let elID = lines[i].match(regex)[3];
                let elText = lines[i].match(regex)[4] ? lines[i].match(regex)[4] : `未定义名称`;
                console.log(`第${i}行：${elID} ${elLinkStyle} ${elText}`);

                // 满足条件的修改
                if (elLinkStyle !== 'frame') return;
                for (let selectedEl of allFrameEls) {
                    console.log(selectedEl.id);
                    if (selectedEl.id === elID) {
                        j = j + 1;
                        console.log(selectedEl.name);
                        elText = `Frame${j < 10 ? 0 : ""}${j}_${elText.replace(/Frame\d+_/, "")}`;
                        selectedEl.name = elText;
                        ea.addElementsToView();
                        lines[i] = lines[i].replace(/(^-\s.*?\[\[.*?\.md#\^\w+=[a-zA-Z0-9-_]+\|?)(.*?)(\]\].*)/, `$1${elText}$3`);
                    }
                }
            }
            updatedElements.push(lines[i]);
        }
        // console.log(updatedElements);
        return updatedElements;
    } catch (error) {
        new Notice("🔴读取文件出现错误！");
        console.error(error);
    }
}


```

## Log

> [!caution] 根据修改日志，教程的部分说明可能过时，但基本思路是一致的。

### 2024-03-02：修正正则表达式，添加缩略图是否添加连接选项，修改选项为中文，排序后会添加文档别名方便搜索

- 修复 Sort 排序时正则表达式匹配不到的选项
- 添加缩略图是否添加连接选项，参数修改为中文注释
	- ![自定义Excalidraw脚本-画板与 Kanban 得梦幻结合-像PPT一样演示](https://cdn.pkmer.cn/images/202403021102094.png!pkmer)
- 修改选项为中文：
	- ![自定义Excalidraw脚本-画板与 Kanban 得梦幻结合-像PPT一样演示](https://cdn.pkmer.cn/images/202403021103678.png!pkmer)
- 排序后会将 Frame 名称添加到文档的 aliases 区 (添加文档别名方便搜索)
	-  ![自定义Excalidraw脚本-画板与 Kanban 得梦幻结合-像PPT一样演示](https://cdn.pkmer.cn/images/202403021332452.png!pkmer)