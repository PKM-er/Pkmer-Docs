---
uid: 20240401220812
title: QuickAdd 脚本 - 插入并编辑 SVG 文件
tags:
  - svg
  - 图片注释
  - quickadd脚本
description: 插入并编辑 SVG 文件
author: 熊猫别熬夜,一鸣惊人
type: other
draft: false
editable: false
modified:
---

# QuickAdd 脚本 - 插入并编辑 SVG 文件

Obsidian v1.5 版本之后，Diagrams 插件 (作者：Sam Greenhalgh，v1.5.0) 已经基本用不了了，该脚本是为了快速插入 SVG 并编辑进行而制作的，Draw.io 的详细介绍可参考：[PKMerDoc：关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案]( https://pkmer.cn/show/20231218063354 )，效果如下：

![2024-03-06_QuickAdd脚本-插入并编辑SVG文件_IMG-1](https://cdn.pkmer.cn/images/202404012210401.gif!pkmer)

> [!tip]+ 拓展
> 1. 同时针对 Excalidraw 画板，另外拓展了 [#4](https://forum-zh.obsidian.md/t/topic/31999/4) 的 `OpenSelectImage` 和 `QuickerInserZKCard` 脚本的使用。
> 2. 如果在源码模式下插入后想删除或移动，可以参考 [【QuickAdd脚本】通过wiki链接删除并对应文件，适用于笔记重组 - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/31660)。

设置选项，保持默认模式也行，设置选项是为了提供点灵活性，可以定义不同的 SVG 编辑器，比如 `Vision` 或者 `亿图` 之类的，可以设置多个软件，以换行分离就行：

![2024-03-06_QuickAdd脚本-插入并编辑SVG文件_IMG-2](https://cdn.pkmer.cn/images/202404012209508.png!pkmer)

如何打开设置选项：

![2024-03-06_QuickAdd脚本-插入并编辑SVG文件_IMG-3](https://cdn.pkmer.cn/images/202404012209509.gif!pkmer)

```js quickadd
const path = require('path');
const { exec } = require('child_process');
const quickAddApi = app.plugins.plugins.quickadd.api;

const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="300px" height="300px" viewBox="-0.5 -0.5 1 1" content="&lt;mxGraphModel&gt;&lt;root&gt;&lt;mxCell id=&quot;0&quot;/&gt;&lt;mxCell id=&quot;1&quot; parent=&quot;0&quot;/&gt;&lt;/root&gt;&lt;/mxGraphModel&gt;"></svg>`;

module.exports = {
    entry: async (QuickAdd, settings, params) => {

        const format = quickAddApi.date.now(settings["SVG命名格式"].replace("{{DATE:", "").replace("}}", ""));

        // 获取笔记的基本路径
        const file = app.workspace.getActiveFile();
        const folderPath = path.dirname(file.path);

        let filePath = `${format}.svg`;
        if (settings["SVG文件路径"] === "当前文件夹") {
            filePath = `${folderPath}/${format}.svg`;
        }        

        if (settings["SVG自动打开"]) {
            let choices = settings["SVG编辑器"].split("\n");
            if (!choices) {
                await app.vault.create(filePath, svgContent);
                // 用指定应用打开
                this.app.openWithDefaultApp(filePath);
            } else if (choices.length === 1) {
                await app.vault.create(filePath, svgContent);
                exec(`"${choices[0]}" "${(app.vault.adapter).getBasePath()}/${filePath}"`, (error, stdout, stderr) => {
                    new Notice(`File opened with ${choices[0]}`);
                });
            } else {
                choices.unshift("默认应用");
                const choice = await quickAddApi.suggester(choices.map(i => i.split("\\").at(-1).replace("\.exe", "")), choices, "图片打开的方式");
                if (!choice) return;
                await app.vault.create(filePath, svgContent);
                // 文件创建后打开
                if (choice === "默认应用") {
                    app.openWithDefaultApp(filePath);
                    return;
                }
                exec(`"${choice}" "${(app.vault.adapter).getBasePath()}/${filePath}"`, (error, stdout, stderr) => {
                    new Notice(`File opened with ${choice}`);
                });
            }
        }

        // 获取文档编辑器
        const editor = app.workspace.activeEditor.editor;
        editor.replaceRange(
            `![[${path.basename(filePath)}]]`,
            editor.getCursor());

        return;
    },
    settings: {
        name: "插入SVG文件",
        author: "熊猫别熬夜",
        options: {
            "SVG命名格式": {
                type: "format",
                defaultValue: "{{DATE:YYYY-MM-DD_HHmmss}}",
                description: "默认插入为时间戳的文件名格式：{{DATE:YYYY-MM-DD_HHmmss}}；",
            },
            "SVG文件路径": {
                type: "dropdown",
                defaultValue: "当前文件夹",
                options: [
                    "当前文件夹",
                    "仓库根目录",
                ],
                description: "若想指定文件夹可设为根目录，调整命名格式：{{DATE:[文件夹路径/子文件夹/文件名前缀_]YYYY-MM-DD_HHmmss}}",
            },
            "SVG自动打开": {
                type: "checkbox",
                defaultValue: true,
            },
            "SVG编辑器": {
                type: "format",
                defaultValue: "",
                description: "SVG编辑器，空值则系统默认编辑器，多个以换行分离，多个会出现弹窗来选择应用(包含默认应用)",
            },
        }
    }
};
```

## Reference

1. [[关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案]]
2. [[熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新]]
3. [【QuickAdd脚本】通过wiki链接删除并对应文件，适用于笔记重组 - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/31660)
