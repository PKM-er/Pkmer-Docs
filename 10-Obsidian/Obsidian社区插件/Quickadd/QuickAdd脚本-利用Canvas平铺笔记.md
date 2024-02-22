---
uid: 20240222233410
title: QuickAdd 脚本 - 利用 Canvas 平铺笔记
tags: [Canvas, quickadd脚本]
description: 利用 Canvas 平铺笔记
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240222233822
---

# QuickAdd 脚本 - 利用 Canvas 平铺笔记

在 Obsidian 中文论坛看到这篇 [在Excalidraw中列出某笔记所有二级Heading - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/30401) ，我就想用 Canvas 来平铺一下，这样笔记可以全局预览和编辑。

## Canvas 的标题引用格式

Canvas 是可以只显示文档的块和标题的，具体格式如下，标题是在 `subpath` 中且前面有个 `#` 号。

```json
{
	"nodes":[
		{"id":"d9f2b88a08cb0f1c","type":"file","file":"QuickDraft-20240221200235533.md","subpath":"#PkmerFAQ","x":-447,"y":-333,"width":960,"height":760},
		{"id":"6b050e9a6fa81b69","type":"file","file":"QuickDraft-20240221200235533.md","subpath":"#PkmerDocs","x":560,"y":-333,"width":960,"height":760},
		{"id":"454248a7b980b488","type":"file","file":"QuickDraft-20240221200235533.md","subpath":"#Fix","x":1580,"y":-333,"width":960,"height":760},
		{"id":"207cfe3dd7b01f03","type":"file","file":"QuickDraft-20240221200235533.md","subpath":"#Fix","x":-447,"y":500,"width":960,"height":760}
	],
	"edges":[]
}
```

## 实现过程和效果

![2024-02-21_QuickAdd脚本-利用Canvas平铺笔记_IMG-1](https://cdn.pkmer.cn/images/202402222335490.gif!pkmer)

- 获取当前笔记路径
	- 提取所有标题 (可选范围，即标题参数)，暂定二级标题
- 设定间距、宽度、高度参数
- 循环排列即生成 JSON 数据
- 生成 canvas 即可

我是固定一个 Canvas 用来编辑，我这边直接随便设置的一个 `未命名.canvas`，可以 2 种模式可以相互转换，转换的参数通过代码参数来调节。

### 可调整的参数

```js
// 大纲等级
const level = 2;
// 卡片参数
const width = 960;
const height = 760;
// 卡片间隔
const space = 50;
// 每行卡片的数量限制
const limit = 4;
// 基于库的相对路径的Canvas
const canvasPath = "未命名.canvas"; 
```

## Quickadd 配置 Macro 代码

将下述脚本放在 Quickadd 的配置文件夹下，保存为 `convertMdToCanvas.js` 文件，在 Quickadd 插件设置添加 Macro 动作：

![[2024-02-21_QuickAdd脚本-利用Canvas平铺笔记_IMG-2.png]]

在 Scripts 中选择对应的 `convertMdToCanvas` 脚本，点击添加即可：

![2024-02-21_QuickAdd脚本-利用Canvas平铺笔记_IMG-3](https://cdn.pkmer.cn/images/202402222335491.png!pkmer)

### 脚本

```js
const path = require('path');
const fs = require('fs');
// 获取笔记的基本路径
const file = app.workspace.getActiveFile();
const fileFullPath = app.vault.adapter.getFullPath(file.path);

// 可调节的参数
// 大纲等级
const level = 2;
// 卡片参数
const width = 960;
const height = 760;
// 卡片间隔
const space = 50;
// 每行卡片的数量限制
const limit = 3;
// 基于库的相对路径的Canvas
const canvasPath = "未命名.canvas";

module.exports = async () => {
    const canvasData = {
        nodes: [],
        edges: []
    };
    if (file.extension === 'md') {
        console.log("开始获取二级标题");
        const heads = getHeadings(fileFullPath, level);
        console.log(heads);

        let x = 0;
        let y = 0;
        let n = 1;
        let nodes = [];
        const length = heads.length;

        for (let i = 1; i <= length; i++) {
            const node = {
                id: "",
                type: "file",
                file: file.path,
                subpath: "",
                x: 0,
                y: 0,
                width: width,
                height: height,
            };

            node.subpath = heads[i - 1];
            node.id = i;
            node.x = x;
            node.y = y;
            console.log([heads[i - 1], x, y]);

            x += width + space;
            if (i >= limit * n) {
                y += height + space;
                x = 0;
                n = n + 1;
            }
            console.log([heads[i - 1], node.x, y]);

            nodes.push(node);
        }
        canvasData.nodes = nodes;
        console.log(canvasData);
        const canvasFile = app.vault.getAbstractFileByPath(canvasPath);
        const canvasJson = JSON.stringify(canvasData, null, 2);
        if (canvasFile) {
            app.vault.modify(canvasFile, canvasJson);
        } else {
            file = await app.vault.create(canvasFile, canvasJson);
        }
        app.workspace.activeLeaf.openFile(canvasFile);

    } else if (file.extension === 'canvas') {
        fs.readFile(fileFullPath, 'utf8', (err, data) => {
            if (err) throw err;
            const canvasData = JSON.parse(data);
            // 获取nodes中的object.file
            canvasData.nodes;
            const mdFilePath = canvasData.nodes[0].file;
            app.workspace.activeLeaf.openFile(app.vault.getAbstractFileByPath(mdFilePath));
        });

    }

};


function getHeadings(fileFullPath, level) {
    // 读取文件内容
    const fileContent = fs.readFileSync(fileFullPath, 'utf-8');

    // 使用正则表达式提取指定级别的标题
    const regex = new RegExp(`^#{2,${level}}\\s(.+)`, 'gm');
    const matches = [];
    let match;

    while ((match = regex.exec(fileContent)) !== null) {
        matches.push("#" + match[1]);
    }
    return matches;
}
```

## 配合 Modal Form 插件来调节参数

![2024-02-21_QuickAdd脚本-利用Canvas平铺笔记_IMG-4](https://cdn.pkmer.cn/images/202402222335492.png!pkmer)

> 配合 ModalForm 插件写了个表单，可以设置参数，不过体验下来，还不如提前把参数设置好一键切换来的方便，还不需要额外安装插件。

### 脚本

配置同上述一样，不过需要安装 Modal Form 插件

```js

// 基于库的相对路径的Canvas
const canvasPath = "未命名.canvas";

const path = require('path');
const fs = require('fs');
const modalForm = app.plugins.plugins.modalforms.api;
// 获取笔记的基本路径
const file = app.workspace.getActiveFile();
const fileFullPath = app.vault.adapter.getFullPath(file.path);


module.exports = async () => {

    const editorForm1 = {
        "title": "ConvertMdToCanvas",
        "name": "ConvertMdToCanvas",
        "fields": [
            {
                "name": "level",
                "label": "level",
                "description": "提取至第几级标题，忽略一级标题",
                "input": {
                    "type": "slider",
                    "min": 2,
                    "max": 6
                }
            },
            {
                "name": "width",
                "label": "Width",
                "description": "卡片宽度",
                "isRequired": true,
                "input": {
                    "type": "number"
                }
            },
            {
                "name": "height",
                "label": "height",
                "description": "卡片高度",
                "isRequired": true,
                "input": {
                    "type": "number"
                }
            },
            {
                "name": "space",
                "label": "space",
                "description": "卡片间距",
                "isRequired": true,
                "input": {
                    "type": "number"
                }
            },
            {
                "name": "limit",
                "label": "limit",
                "description": "每行卡片的数量限制",
                "input": {
                    "type": "slider",
                    "min": 1,
                    "max": 10
                }
            },
        ]
    };
    const canvasData = {
        nodes: [],
        edges: []
    };
    if (file.extension === 'md') {
        // 设定默认值
        let result = await modalForm.openForm(
            editorForm1,
            {
                values: {
                    level: 2,
                    width: 960,
                    height: 760,
                    limit: 4,
                    space: 50,
                }
            }
        );


        // 大纲等级
        const level = result.getValue('level').value;
        // 卡片参数
        const width = result.getValue('width').value;
        const height = result.getValue('height').value;
        // 卡片间隔
        const space = result.getValue('space').value;
        // 每行卡片的数量限制
        const limit = result.getValue('limit').value;

        console.log("开始获取二级标题");
        const heads = getHeadings(fileFullPath, level);
        console.log(heads);

        let x = 0;
        let y = 0;
        let n = 1;
        let nodes = [];
        const length = heads.length;

        for (let i = 1; i <= length; i++) {
            const node = {
                id: "",
                type: "file",
                file: file.path,
                subpath: "",
                x: 0,
                y: 0,
                width: width,
                height: height,
            };

            node.subpath = heads[i - 1];
            node.id = i;
            node.x = x;
            node.y = y;
            console.log([heads[i - 1], x, y]);

            x += width + space;
            if (i >= limit * n) {
                y += height + space;
                x = 0;
                n = n + 1;
            }
            console.log([heads[i - 1], node.x, y]);

            nodes.push(node);
        }
        canvasData.nodes = nodes;
        console.log(canvasData);
        const canvasFile = app.vault.getAbstractFileByPath(canvasPath);
        const canvasJson = JSON.stringify(canvasData, null, 2);
        if (canvasFile) {
            app.vault.modify(canvasFile, canvasJson);
        } else {
            file = await app.vault.create(canvasFile, canvasJson);
        }
        app.workspace.activeLeaf.openFile(canvasFile);

    } else if (file.extension === 'canvas') {
        fs.readFile(fileFullPath, 'utf8', (err, data) => {
            if (err) throw err;
            const canvasData = JSON.parse(data);
            // 获取nodes中的object.file
            canvasData.nodes;
            const mdFilePath = canvasData.nodes[0].file;
            app.workspace.activeLeaf.openFile(app.vault.getAbstractFileByPath(mdFilePath));
        });

    }


};

function getHeadings(fileFullPath, level) {
    // 读取文件内容
    const fileContent = fs.readFileSync(fileFullPath, 'utf-8');

    // 使用正则表达式提取指定级别的标题
    const regex = new RegExp(`^#{2,${level}}\\s(.+)`, 'gm');
    const matches = [];
    let match;

    while ((match = regex.exec(fileContent)) !== null) {
        matches.push("#" + match[1]);
    }
    return matches;
}
```

## 拓展想法

如果确定每个标题的格式 (如：草稿、提示、总结)，是否可以按照康奈尔笔记布局一样生成对应的 Canvas 来编辑：

![2024-02-21_QuickAdd脚本-利用Canvas平铺笔记_IMG-5](https://cdn.pkmer.cn/images/202402222335493.png!pkmer)

## References

- [在Excalidraw中列出某笔记所有二级Heading - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/30401)
