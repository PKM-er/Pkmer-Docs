---
uid: 20231029232811
title: 自定义 Excalidraw 脚本 - 制作 Excalidraw 悬浮大纲以及一键生成线型笔记
tags:
  - Excalidraw
  - 工作流
  - 工作流搭建
  - Excalidraw脚本
description: 本文仅仅是一个尝试将Ex画板转为线型笔记和生成大纲，不能保证大纲和线型笔记的效果达到非常完美，特别是排序只是从大到小的排序，而不是针对列表的顺序排序，存在很多漏洞。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20231029232937
---

# 自定义 Excalidraw 脚本 - 制作 Excalidraw 悬浮大纲以及一键生成线型笔记

![封面：Excalidraw大纲_thumbnail](https://cdn.pkmer.cn/images/%E5%B0%81%E9%9D%A2%EF%BC%9AExcalidraw%E5%A4%A7%E7%BA%B2_thumbnail.png!pkmer)

灵感来源于 [从excalidraw视觉笔记到obsidian线性输出](https://www.bilibili.com/video/BV1D44y1P7uD/?share_source=copy_web&vd_source=71b5851b6744265a191d3ec972be4787)，参考了这个视频的脚本，想把 Excalidraw 的画板内容制作线型笔记，一开始尝试添加特殊文本编号按大小排序来制作 Excalidraw 的悬浮大纲，后来通过特定的组和 Frame 区域来用于构建 Excalidraw 的连接：分 Frame、Group、Link 的连接形式一键制作线型笔记，并把嵌入的 Frame 笔记给嵌入到线型笔记中来，排除省略了只包含少量的元素的 Frame 或者 Group 让生成的线型笔记更加简洁。

本文仅仅是一个尝试，不能保证大纲和线型笔记的效果达到非常完美，特别是排序只是从大到小的排序，而不是针对列表的顺序排序，存在很多漏洞。

## 几个脚本的思路

### 悬浮 Excalidraw 大纲脚本：GenerateExcalidrawOutline

- 以 Excalidraw 回链为主：
	- 提取特殊文本符号的文本的 id；
	- 以文本 id 构建 frameId 或者 groupIds 的 Excalidraw 的块引用：
		- Excalidraw 的块引用有 4 种形式：Frame、Group、Area、Link：
			- Frame 链接是以 Frame 框架为主，在一个 Frame 里面的元素都会被显示；
			- Group 则是以组为主，只显示一个分组的元素；
			- Area 与 Group、Frame 相似，会显示这个组的区域，但不是该组的元素在这个区域也会显示；
			- Link 则只会定位并显示这一个元素。
- 提取特殊文本的排序方案：
	- 特殊文本格式：`#1 二级标题1`、`#2.3 三级标题2.3`……
		- 只识别以 `#` + 数字 + 空格 开头的文本为标题，其中 `#2.3 标题2.3` 的 **2** 表示顺序，即第 2 行的列表，**3**表示缩进次数。
	- 排序以从小到大的排序，如果存在同级标题，如：`#1.2 同级1`、`#1.2 同级2` 则以 Y 轴从上到下，X 轴从左到右来排序
	- 只适用于 2、3 级标题，不生成 1 级标题，4 级标题后面排序会混乱。
		- `#1 二级标题`、`#2 二级标题`、`#3 三级标题`。
- 生成预览文件 Excalidraw.Outline.md、Excalidraw.Markdown.md；
	- Excalidraw.Outline.md：用于生成当前画板的大纲，每次运行一次脚本都会刷新。
		- 构建并嵌入提取的 EX 块引用链接到文档
		- 以列表的形式构建，方便修改和移动
	- Excalidraw.Markdown.md：用于生成当前画板的线性笔记，每一次大纲更新后都会进行更新。
- 复制线型大纲到剪切板。
	- 每次运行脚本都会自动复制线型列表到剪切板。

> [!tip]+ 只复制一个或多个大纲的连接
> 如果只想复制一个或多个大纲的连接可以选择一个标题组再运行脚本就只会复制选择的大纲。

```js
let settings = ea.getScriptSettings();
//set default values on first run
if (!settings["Excalidraw Outline Path"]) {
    settings = {
        "Auto Update Excalidraw Markdown": {
            value: false,
            description: "⚠自动刷新已创建的线型笔记？<br>请注意注意：启用这个脚本会强制覆盖线型笔记，如有意外请在核心插件的文件恢复里面进行恢复。"
        },
        "Excalidraw Outline Path": {
            value: "Y-图形文件存储/Excalidraw图形",
            description: "Excalidraw.Outline.md和Excalidraw.Markdown.md的相对路径文件夹"
        },
        "Excalidraw OutLine Yaml": {
            value: "---\ncssclasses:\n  - Excalidraw-Markdown\n---\n\n",
            height: "250px",
            description: "设定线型大纲和线型笔记的开始区域，主要用于设定Yaml"
        }
    };
    ea.setScriptSettings(settings);
}
const outlineFileName = `${settings["Excalidraw Outline Path"].value}/Excalidraw.Outline.md`;
const markdownFileName = `${settings["Excalidraw Outline Path"].value}/Excalidraw.Markdown.md`;

// map = ld.plugin.filesMaster;
// 获取笔记的基本路径和笔记名
const filePath = app.workspace.getActiveFile().path;
const path = require('path');
const { off } = require('process');
const fileName = path.basename(filePath);

function copyToClipboard(extrTexts) {
    const txtArea = document.createElement('textarea');
    txtArea.value = extrTexts;
    document.body.appendChild(txtArea);
    txtArea.select();
    if (document.execCommand('copy')) {
        console.log('copy to clipboard.');
    } else {
        console.log('fail to copy.');
    }
    document.body.removeChild(txtArea);
}


const selectEls = ea.getViewSelectedElements().filter(el => el.type === "text").filter(el => /^#(\d+\.*\d*)\s([\w\W]*)/.test(el.text));
if (selectEls) {
    let titleLinks = [];
    for (i of selectEls) {
        let elText = i.text;
        let elID = i.id;
        // 只提取标题文本的连接
        let regex = /^#(\d+)\.*(\d*)\s([\w\W]*)/;
        let elOutline = elText.match(regex)[3];

        let titleLink = "";
        if (i.groupIds) {
            titleLink = `[[${fileName}#^area=${elID}|${elOutline.replace(/(\[|\])+/g, '')}]]`;
        } else {
            titleLink = `[[${fileName}#^${elID}|${elOutline.replace(/(\[|\])+/g, '')}]]`;
        }
        titleLinks.push(titleLink);
    }

    exlinks = titleLinks.join('\r\n');
    copyToClipboard(exlinks);
    if (exlinks) {
        new Notice(`🍀已复制\n${exlinks}`, 1000)
    }
}

if (!exlinks) {
    // 只提取满足条件的文本
    let allEls = ea.getViewElements().filter(el => el.type === "text").filter(el => /^#(\d+\.*\d*)\s([\w\W]*)/.test(el.text));
    let allEmbeddables = ea.getViewElements().filter(el => el.type === "embeddable");

    // let allGroups = ea.getViewElements().filter(el => el.type === "embeddable");

    function elementsSort(elements, key = 'y') {
        let result = elements.slice(0);
        if (key == 'text') {
            let regex = /^#(\d+\.*\d*)\s([\w\W]*)/;
            return result.sort((a, b) => Number(a[key].match(regex)[1]) - Number(b[key].match(regex)[1]));
        } else {
            return result.sort((a, b) => Number(a[key]) - Number(b[key]));
        }
    }

    // selectedEl = elementsSort(selectedEl);
    allEls = elementsSort(allEls, "x");
    allEls = elementsSort(allEls, 'y');
    allEls = elementsSort(allEls, 'text');

    allEmbeddables = elementsSort(allEmbeddables, "x");
    allEmbeddables = elementsSort(allEmbeddables, 'y');


    let titleLinks = [];
    let titleTexts = [`# [[${fileName.replace(".md", "")}]]\n`];
    let frameIds = [];

    for (i of allEls) {
        let elText = i.text;
        // let elGroupIDs = i.groupIds;
        let elID = i.id;
        // 只提取标题文本的连接
        let regex = /^#(\d+)\.*(\d*)\s([\w\W]*)/;
        let numTabs = Number((elText.match(regex)[2]));
        let elOutline = elText.match(regex)[3];
        // let elOutline = elText.replace(/^#/,'');
        let tabs = '\t'.repeat(numTabs);
        let heads = '#'.repeat(numTabs + 2);
        let titleText = "";
        let titleLink = "";
        let embedlinks = [];
        let nums = 99;

        let textComments = [];

        // 提取大纲
        if (i.frameId && !frameIds.includes(i.frameId)) {

            elID = i.frameId;

            let elComments = ea.getViewElements().filter(el => el.type === "text").filter(el => /^@\s/.test(el.text)).filter(el => el.frameId === elID);
            for (k of elComments) {
                // alert(k.text);
                textComments.push(k.text.replace(/^@\s/, ""));
            }

            frameIds.push(elID);
            titleLink = `${fileName}#^frame=${elID}`;
            for (j of allEmbeddables) {
                if (j.frameId == elID) {
                    // alert(j.link)
                    embedlinks.push(`\n!${j.link} `)
                    let objectFrame = ea.getViewElements().filter(el => el.frameId === elID);
                    nums = Number(objectFrame.map(obj => obj.id).length);
                    // alert(nums)
                } else {
                    let objectFrame = ea.getViewElements().filter(el => el.frameId === elID);
                    nums = Number(objectFrame.map(obj => obj.groupIds != null).length);
                }
            }

        } else if (i.groupIds) {
            titleLink = `${fileName}#^group=${elID}`;


            let elComments = ea.getViewElements().filter(el => el.type === "text").filter(el => /^@\s/.test(el.text)).filter(el => el.groupIds.some(groupId => i.groupIds.includes(groupId)));
            for (k of elComments) {
                // alert(k.text);
                textComments.push(k.text.replace(/^@\s/, ""));
            }

            for (j of allEmbeddables) {
                if (j.groupIds.some(groupId => i.groupIds.includes(groupId))) {
                    embedlinks.push(`\n!${j.link} `)
                    let objectFrame = ea.getViewElements().filter(el => el.groupIds.some(groupId => i.groupIds.includes(groupId)));
                    nums = Number(objectFrame.map(obj => obj.id).length);

                } else {
                    let objectFrame = ea.getViewElements().filter(el => el.groupIds.some(groupId => i.groupIds.includes(groupId)));
                    nums = Number(objectFrame.map(obj => obj.id).length);
                }

            }


        } else {
            titleLink = `${fileName}#^${elID}`;
        }

        // 组合为列表
        let listStyle = '1. ';

        // titleLinks.push(`${tabs}${listStyle}[[${titleLink}|${elOutline.replace(/(\[|\])+/g, '').split('\n')[0]}]]`);
        titleLinks.push(`${tabs}${listStyle}[[${titleLink}|${elOutline.replace(/(\[|\])+/g, '')}]]`);

        // 提取线型文档
        // 如果frame或者group里面只包含嵌入式文档(不包含文本)，则逃过嵌入区域，直接添加链接：
        let extrEmbedlinks = embedlinks.join('\r\n')

        let textComment = textComments.join('\n')

        if (extrEmbedlinks) {
            if (nums <= 3) {
                titleText = `${heads} ${elOutline}\n\n${extrEmbedlinks}\n${textComment}\n`;
            } else {
                titleText = `${heads} ${elOutline}\n\n![[${titleLink}]]\n${extrEmbedlinks}\n${textComment}\n`;
            }
        } else if (nums <= 2) {
            titleText = `${heads} ${elOutline}\n${textComment}`;
        } else {
            titleText = `${heads} ${elOutline}\n\n![[${titleLink}]]\n${textComment}\n`;
        }

        // titleText = `${heads} ${elOutline}\n\n![[${titleLink}]]\n`;
        titleTexts.push(titleText);

    }

    // 输出大纲
    titleLinks.push('\n');
    exlinks = titleLinks.join('\r\n');

    let outlineFile = '';
    outlineFile = app.vault.getAbstractFileByPath(outlineFileName);


    // 设定一些yaml，特别定义csscalss好修改
    let outlineYaml = "";
    outlineYaml = settings["Excalidraw OutLine Yaml"].value;

    exlinks = outlineYaml + exlinks;

    if (outlineFile) {
        app.vault.modify(outlineFile, exlinks);
        new Notice(`✅Excalidraw线型大纲更新`, 1000)
    } else {
        file = await app.vault.create(outlineFileName, exlinks)
        // new Notice(`创建${outlineFileName}`, 1000)
    }

    // 线型笔记输入到剪切板
    extrTexts = titleTexts.join('\r\n');
    new Notice(`📋线型笔记已输入剪切板`, 3000)
    copyToClipboard(extrTexts)
    extrTexts = outlineYaml + extrTexts;

    let markdownFile = app.vault.getAbstractFileByPath(markdownFileName);

    if (markdownFile) {
        app.vault.modify(markdownFile, extrTexts);
    } else {
        file = await app.vault.create(markdownFileName, extrTexts)
    }

    let mdFileName = await ea.targetView.file.path.replace('.md', `.markdown.md`)
    let markdownFile2 = app.vault.getAbstractFileByPath(mdFileName);

    if (markdownFile2 && settings["Auto Update Excalidraw Markdown"].value) {
        app.vault.modify(markdownFile2, extrTexts);
        new Notice(`✅Excalidraw线型文档更新`, 3000)
    }

}

```

> [!tip]+ 脚本设置
> ![Pasted image 20231029225430](https://cdn.pkmer.cn/images/Pasted%20image%2020231029225430.png!pkmer)

#### 辅助脚本 1：OpenOutlineByHover

用于以悬浮面板打开当前画板的列表大纲。

- 以 Hover 悬浮面板打开 Excalidraw.Outline.md
- 需要配合 [Opener 插件](https://github.com/aidan-gibson/obsidian-opener) 的 New Tab Default 优化点击事件，防止点击后窗口替换
	- Opener 插件并没有上架插件市场，可以用 New Tab Default 替代
- 可以配合 Commander 插件在首页安装这个按钮，方便运行
	- ![Pasted image 20231029222947](https://cdn.pkmer.cn/images/Pasted%20image%2020231029222947.png!pkmer)

```js
let settings = ea.getScriptSettings();
//set default values on first run
if (!settings["Excalidraw Outline Path"]) {
    settings = {
        "Excalidraw Outline Path": {
            value: "Y-图形文件存储/Excalidraw图形",
            description: "Excalidraw.Outline.md和Excalidraw.Markdown.md的相对路径文件夹"
        }
    };
    ea.setScriptSettings(settings);
}
const outlineFileName = `${settings["Excalidraw Outline Path"].value}/Excalidraw.Outline.md`;

let outlineFile = app.vault.getAbstractFileByPath(outlineFileName);

let newLeaf = app.plugins.plugins["obsidian-hover-editor"].spawnPopover(undefined, () => this.app.workspace.setActiveLeaf(newLeaf, false, true));
newLeaf.openFile(outlineFile);
```

可以直接修改脚本的生成 Outline 的相对路径，或者单击运行一次后在 Excalidraw 插件设置里面修改。

#### 辅助脚本 2：OpenMarkdown

在侧边打开线型笔记，如果当前笔记存在线型笔记则可以选择性打开线型笔记或者 Excalidraw.Markdown.md 预览笔记。

> [!tip]+ Excalidraw.Markdown.md 文件存放路径
> Excalidraw.Markdown.md 文件最好存放在 Excalidraw 的文件夹下，这个路径文件夹不会被 Obsidian 检测双链：
> ![Pasted image 20231029223449](https://cdn.pkmer.cn/images/Pasted%20image%2020231029223449.png!pkmer)
>
> > 可以配合 Commander 插件在首页安装这个按钮，方便运行：
> > ![Pasted image 20231029230546](https://cdn.pkmer.cn/images/Pasted%20image%2020231029230546.png!pkmer)

```js
let settings = ea.getScriptSettings();
//set default values on first run
if (!settings["Excalidraw Outline Path"]) {
    settings = {
        "Excalidraw Outline Path": {
            value: "Y-图形文件存储/Excalidraw图形",
            description: "Excalidraw.Outline.md和Excalidraw.Markdown.md的相对路径文件夹"
        }
    };
    ea.setScriptSettings(settings);
}

const markdownFileName = `${settings["Excalidraw Outline Path"].value}/Excalidraw.Markdown.md`;

let mdFileName = await ea.targetView.file.path.replace('.md', `.markdown.md`)
let markdownFile2 = app.vault.getAbstractFileByPath(mdFileName);

let outlineFile = '';
let openFile = null;
if (markdownFile2) openFile = confirm("检测已存在线型笔记，是否打开？");

if (openFile) {
    outlineFile = app.vault.getAbstractFileByPath(mdFileName);
} else {

    outlineFile = app.vault.getAbstractFileByPath(markdownFileName);
}

ea.openFileInNewOrAdjacentLeaf(outlineFile);
```

可以直接修改脚本的生成 Excalidraw Outline Path 的相对路径，或者单击运行一次后在 Excalidraw 插件设置里面修改。

### 通过列表来调整线型笔记顺序：ModOutlineByList

借助 Outliner 插件可以便捷调整线型列表，在 GenerateExcalidrawOutline 脚本中会生成 Excalidraw.Ouline 的线型大纲笔记，该脚本的作用是通过 Outline 的修改 (可以更改文字和列表顺序和缩进) 来反馈给线型笔记，等待调整好后，运行改脚本就可以调整编号和文字了。

```js
let settings = ea.getScriptSettings();
//set default values on first run
if (!settings["Excalidraw Outline Path"]) {
    settings = {
        "Excalidraw Outline Path": {
            value: "Y-图形文件存储/Excalidraw图形",
            description: "Excalidraw.Outline.md和Excalidraw.Markdown.md的相对路径文件夹"
        }
    };
    ea.setScriptSettings(settings);
}
const outlineFileName = `${settings["Excalidraw Outline Path"].value}/Excalidraw.Outline.md`;

const fs = require('fs');
// 获取库的基本路径
const basePath = (app.vault.adapter).getBasePath()
// alert(basePath)
const outlineFilePath = `${basePath}\\${outlineFileName}`

// 获取笔记的基本路径和笔记名
const filePath = app.workspace.getActiveFile().path;
const path = require('path');
const fileName = path.basename(filePath);
// alert(fileName)
const api = ea.getExcalidrawAPI();
const selectedEls = ea.getViewElements().filter(el => el.type === "text").filter(el => /^#(\d+\.*\d*)\s([\w\W]*)/.test(el.text));
ids = [selectedEls.id]


fs.readFile(outlineFilePath, 'utf8', (err, data) => {
    if (err) {
        alert(err);
        return;
    }
    // let modOutline = confirm("确认修改大纲？");
    
    // if (modOutline) {
    const lines = data.split('\n');
    const regex = new RegExp(`${fileName}`);
    let j = 0;
    for (let i = 0; i < lines.length; i++) {
        // if (lines[i].includes(`- [[${fileName}#`)) {
        if (regex.test(lines[i])) {
            let regex = /(\t*)[-\d.]+ \[\[.*\.md#\^(\w+)=([a-zA-Z0-9-_]+)\|([\w\W]*?)]]/;
            let tabs = lines[i].match(regex)[1];
            let numTabs = 0;
            if (tabs) {
                numTabs = tabs.match(/\t/g).length;
            }
            if (numTabs == 0) {
                j = j + 1; // 编号上下顺序
            }
            let elLinkStyle = lines[i].match(regex)[2];
            let elID = lines[i].match(regex)[3];
            let elText = lines[i].match(regex)[4]

            // alert(`第${j}行：${elID} ${numTabs} ${elLinkStyle} ${elText}`);
            // 只提取满足条件的文本
            if (elLinkStyle == 'frame') {
                // alert(`第${j}行：${elID} ${numTabs} ${elLinkStyle} ${elText}`);
                for (selectedEl of selectedEls) {
                    if (selectedEl.frameId == elID) {
                        // alert("匹配成功")
                        let modText = '';
                        if (numTabs == '0') {
                            modText = `#${j} ${elText}`;
                        } else {
                            modText = `#${j}.${numTabs} ${elText}`;
                        }
                        selectedEl.originalText = selectedEl.rawText = selectedEl.text = modText;
                        // alert(modText);
                        ea.copyViewElementsToEAforEditing([selectedEl]);
                        ea.addElementsToView(false, false);
                    }
                }
            } else {
                for (selectedEl of selectedEls) {
                    if (selectedEl.id == elID) {
                        // alert("匹配成功")
                        let modText = '';
                        if (numTabs == '0') {
                            modText = `#${j} ${elText}`;
                        } else {
                            modText = `#${j}.${numTabs} ${elText}`;
                        }
                        selectedEl.originalText = selectedEl.rawText = selectedEl.text = modText;
                        // alert(modText);
                        ea.copyViewElementsToEAforEditing([selectedEl]);
                        ea.addElementsToView(false, false);
                    }
                }
            }
            

            continue;
        }
    }

});

// ea.copyViewElementsToEAforEditing([selectedEls]);
ea.addElementsToView(true,false, false);
new Notice(`画板大纲已更新`, 2000)
```

### 一键生成线型笔记的脚本：CreateAndUpdateLinearNotes

这是配合线型大纲的或者预览 Excalidraw.Markdown.md 笔记直接生成线型笔记，实际上生成的线型笔记和 Excalidraw.Markdown.md 笔记一模一样，生成以当前画板文件名一样以.markdown.md 结尾的线型笔记在该画板路径下。

- 就是保存 Excalidraw.Markdown.md 到具体的线型笔记，Excalidraw.Markdown.md 会随着画板变化而变化，而 CreateAndUpdateLinearNotes 则是转换成线型笔记。
- 在 GenerateExcalidrawOutline 脚本设置中，如果开启自动更新的设置，则每一次刷新大纲，这个笔记都会被刷新，如果选择关闭则不会被覆盖：
	- ![Pasted image 20231029230338](https://cdn.pkmer.cn/images/Pasted%20image%2020231029230338.png!pkmer)

```js
// 获取笔记的基本路径和笔记名
const filePath = await ea.targetView.file.path;
const path = require('path');
const fileName = path.basename(filePath);

// 只提取满足条件的文本
let allEls = ea.getViewElements().filter(el => el.type === "text").filter(el => /^#(\d+\.*\d*)\s([\w\W]*)/.test(el.text));
let allEmbeddables = ea.getViewElements().filter(el => el.type === "embeddable");

// let allGroups = ea.getViewElements().filter(el => el.type === "embeddable");

function elementsSort(elements, key = 'y') {
    let result = elements.slice(0);
    if (key == 'text') {
        let regex = /^#(\d+\.*\d*)\s([\w\W]*)/;
        return result.sort((a, b) => Number(a[key].match(regex)[1]) - Number(b[key].match(regex)[1]));
    } else {
        return result.sort((a, b) => Number(a[key]) - Number(b[key]));
    }
}

// selectedEl = elementsSort(selectedEl);
allEls = elementsSort(allEls, "x");
allEls = elementsSort(allEls, 'y');
allEls = elementsSort(allEls, 'text');

allEmbeddables = elementsSort(allEmbeddables, "x");
allEmbeddables = elementsSort(allEmbeddables, 'y');


let titleLinks = [];
let titleTexts = [`# [[${fileName.replace(".md", "")}]]\n`];
let frameIds = [];
for (i of allEls) {
    let elText = i.text;
    // let elGroupIDs = i.groupIds;
    let elID = i.id;
    // 只提取标题文本的连接
    let regex = /^#(\d+)\.*(\d*)\s([\w\W]*)/;
    let numTabs = Number((elText.match(regex)[2]));
    let elOutline = elText.match(regex)[3];
    // let elOutline = elText.replace(/^#/,'');
    let tabs = '\t'.repeat(numTabs);
    let heads = '#'.repeat(numTabs + 2);
    let titleText = "";
    let titleLink = "";
    let embedlinks = [];
    let nums = 99;

    // 提取大纲
    if (i.frameId && !frameIds.includes(i.frameId)) {
        elID = i.frameId;
        frameIds.push(elID);
        titleLink = `${fileName}#^frame=${elID}`;
        for (j of allEmbeddables) {
            if (j.frameId == elID) {
                // alert(j.link)
                embedlinks.push(`\n!${j.link} `)
                let objectFrame = ea.getViewElements().filter(el => el.frameId === elID);
                nums = Number(objectFrame.map(obj => obj.id).length);
                // alert(nums)
            } else {
                let objectFrame = ea.getViewElements().filter(el => el.frameId === elID);
                nums = Number(objectFrame.map(obj => obj.groupIds != null).length);
            }
        }

    } else if (i.groupIds) {
        titleLink = `${fileName}#^group=${elID}`;
        for (j of allEmbeddables) {
            if (j.groupIds.some(groupId => i.groupIds.includes(groupId))) {
                embedlinks.push(`\n!${j.link} `)

                let objectFrame = ea.getViewElements().filter(el => el.groupIds.some(groupId => i.groupIds.includes(groupId)));
                nums = Number(objectFrame.map(obj => obj.id).length);

            } else {
                let objectFrame = ea.getViewElements().filter(el => el.groupIds.some(groupId => i.groupIds.includes(groupId)));
                nums = Number(objectFrame.map(obj => obj.id).length);
            }

        }


    } else {
        titleLink = `${fileName}#^${elID}`;
    }

    // 组合为列表
    let listStyle = '1. ';
    titleLinks.push(`${tabs}${listStyle}[[${titleLink}|${elOutline.replace(/(\[|\])+/g, '')}]]`);

    // 提取线型文档
    // 如果frame或者group里面只包含嵌入式文档(不包含文本)，则逃过嵌入区域，直接添加链接：
    let extrEmbedlinks = embedlinks.join('\r\n')

    if (extrEmbedlinks) {
        if (nums <= 3) {
            titleText = `${heads} ${elOutline}\n${extrEmbedlinks}\n`;
        } else {
            titleText = `${heads} ${elOutline}\n\n![[${titleLink}]]\n${extrEmbedlinks}\n`;
        }
    } else if (nums <= 2) {
        titleText = `${heads} ${elOutline}\n`;
    } else {
        titleText = `${heads} ${elOutline}\n\n![[${titleLink}]]\n`;
    }

    // titleText = `${heads} ${elOutline}\n\n![[${titleLink}]]\n`;
    titleTexts.push(titleText);
}

// 设定一些yaml，特别定义csscalss好修改
let outlineYaml = "";
// outlineYaml = "---\ncssclasses:\n  - Excalidraw-Markdown\n---\n";

// 线型笔记输入到文件
extrTexts = titleTexts.join('\r\n');
extrTexts = outlineYaml + extrTexts;

let mdFileName = await ea.targetView.file.path.replace('.md', `.markdown.md`)
const mdFileBaseName = path.basename(mdFileName);
let markdownFile = app.vault.getAbstractFileByPath(mdFileName);

if (markdownFile) {
    app.vault.modify(markdownFile, extrTexts);
    new Notice(`✅Excalidraw线型文档更新`, 1000);
} else {
    let confirmCreat = confirm(`⚠确认生成线型笔记：\n\n${mdFileBaseName}`);
    if (confirmCreat) {
        file = await app.vault.create(mdFileName, extrTexts);
        new Notice(`✅Excalidraw线型文档已更新`, 1000)
    }
}
```

## Excalidraw 的嵌入图片设置

![Pasted image 20231029215820](https://cdn.pkmer.cn/images/Pasted%20image%2020231029215820.png!pkmer)

> [!tip]+ 推荐模式
> 如果电脑性能一般的情况下，建议在编辑或者快速查看的时候采用 PNG 模式，当你需要真正的复制文本的话，再去切换 SVG 格式。

## 总结

总体配置下来非常麻烦，画板转换的线型笔记也不尽完美，不过这也算是一个简单的尝试，今后有改进的地方会逐步完善。
