---
uid: 20240222233410
title: QuickAdd 脚本 - 利用 Canvas 平铺笔记
tags: [Canvas, quickadd脚本]
description: 利用 Canvas 平铺笔记
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240311182455
---

# QuickAdd 脚本 - 利用 Canvas 平铺笔记

## 前言

在 Obsidian 中文论坛看到这篇 [在Excalidraw中列出某笔记所有二级Heading - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/30401) ，我就想用 Canvas 来平铺一下，这样笔记可以全局预览和编辑。

## 实现过程和效果

![2024-02-21_QuickAdd脚本-利用Canvas平铺笔记_IMG-1](https://cdn.pkmer.cn/images/202403111759579.gif!pkmer)

- 获取当前笔记路径
	- 提取所有标题 (可选范围，即标题参数)，暂定二级标题
- 设定间距、宽度、高度参数
- 循环排列即生成 JSON 数据
- 生成 canvas 即可

我是固定一个 Canvas 用来编辑，我这边直接随便设置的一个 `未命名.canvas`，可以 2 种模式可以相互转换，转换的参数通过代码参数来调节。

## Quickadd 配置 Macro 代码

将下述脚本放在 Quickadd 的配置文件夹下，保存为 `convertMdToCanvas.js` 文件，在 Quickadd 插件设置添加 Macro 动作：

![2024-02-21_QuickAdd脚本-利用Canvas平铺笔记_IMG-2](https://cdn.pkmer.cn/images/202403111759581.png!pkmer)

在 Scripts 中选择对应的 `convertMdToCanvas` 脚本，点击添加即可：

![2024-02-21_QuickAdd脚本-利用Canvas平铺笔记_IMG-3](https://cdn.pkmer.cn/images/202403111759582.png!pkmer)

### QuickAdd Macro 脚本

```js
const path = require('path');
const fs = require('fs');
// 获取笔记的基本路径
const file = app.workspace.getActiveFile();
const fileFullPath = app.vault.adapter.getFullPath(file.path);

module.exports = {
    entry: async (QuickAdd, settings, params) => {
        // 可调节的参数
        // 大纲等级
        const level = Number(settings["level"]);
        // 卡片参数
        const width = Number(settings["width"]);
        const height = Number(settings["height"]);
        // 卡片间隔
        const space = Number(settings["space"]);
        // 每行卡片的数量限制
        const limit = Number(settings["limit"]);
        // 基于库的相对路径的Canvas
        const canvasPath = settings["canvasPath"];

        const canvasData = {
            nodes: [],
            edges: []
        };
        if (file.extension === 'md') {
            console.log("开始获取二级标题");
            const { heads, counts } = getHeadings(fileFullPath, level);
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
                node.id = String(i);
                node.x = x;
                node.y = y;
                node.color = String(counts[i - 1]-1)
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
                app.workspace.activeLeaf.openFile(canvasFile);
            } else {
                canvasFile = app.vault.create(canvasPath, canvasJson);
                app.workspace.activeLeaf.openFile(canvasFile);
            }

            // 尝试重新加载缩略图
            setTimeout(() => {
                try {
                    app.commands.executeCommandById("canvas-minimap:reload");
                } catch (error) {
                    console.log(error);
                }
            }, 1000);


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

    },
    settings: {
        name: "Convert md to canvas",
        author: "熊猫别熬夜",
        options: {
            "canvasPath": {
                type: "text",
                defaultValue: "MdToCanvas.canvas",
                placeholder: "相对路径",
                description: "设置Canvas路径，可以嵌套子文件夹",
            },
            "level": {
                type: "dropdown",
                defaultValue: 2,
                options: [2, 3, 4, 5, 6],
                description: "设置平铺的大纲等级，每个等级对应不同颜色",
            },
            "width": {
                type: "text",
                defaultValue: "1080",
                placeholder: "卡片参数",
                description: "卡片宽度",

            },
            "height": {
                type: "text",
                defaultValue: "1000",
                placeholder: "卡片参数",
                description: "卡片高度",
            },

            "limit": {
                type: "text",
                defaultValue: "3",
                placeholder: "每行卡片数量",
                description: "每行卡片数量",
            },
            "space": {
                type: "text",
                defaultValue: "250",
                placeholder: "卡片间隔",
                description: "卡片之间的间隔",

            },
        }
    }

};


function getHeadings(fileFullPath, level) {
    // 读取文件内容
    const fileContent = fs.readFileSync(fileFullPath, 'utf-8');
    // 使用正则表达式提取指定级别的标题
    const regex = new RegExp(`^#{2,${level}}\\s(.+)`, 'gm');
    const heads = [];
    let head;
    let counts = [];

    while ((head = regex.exec(fileContent)) !== null) {
        heads.push("#" + head[1]);
        counts.push(head[0].match(/#/g).length);
    }
    return { heads, counts };
}

```

## 可调整的参数

![2024-02-21_QuickAdd脚本-利用Canvas平铺笔记_IMG-4](https://cdn.pkmer.cn/images/202403111759583.gif!pkmer)

![2024-02-21_QuickAdd脚本-利用Canvas平铺笔记_IMG-5](https://cdn.pkmer.cn/images/202403111759584.jpg!pkmer)

## 配合 Canvas Minimal 插件

另外推荐 [Canvas Minimal](https://github.com/ifree/Obsidian-canvas-minimap)，可以给 Canvas 生成缩略图并点击可跳转。

![2024-02-21_QuickAdd脚本-利用Canvas平铺笔记_IMG-6](https://cdn.pkmer.cn/images/202403111759585.gif!pkmer)

## References

- [在Excalidraw中列出某笔记所有二级Heading - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/30401)
