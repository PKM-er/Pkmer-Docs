---
uid: 20240417151716
title: QuickAdd 脚本 - 自定义外部应用打开当前文档
tags: [编辑器, quickadd脚本]
description: 使用自定义外部软件打开当前文档的，可以通过设置 ⚙编辑外部应用 选项，通过添加软件的系统文件路径，自定义喜欢使用的外部编辑器。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240417153421
---

# QuickAdd 脚本 - 自定义外部应用打开当前文档

使用自定义外部软件打开当前文档的，可以通过设置 `⚙编辑外部应用` 选项，通过添加软件的系统文件路径，自定义喜欢使用的外部编辑器。

![2024-04-10_QuickAdd脚本-自定义外部应用打开当前文档_IMG-1](https://cdn.pkmer.cn/images/202404171518376.png!pkmer)

![2024-04-10_QuickAdd脚本-自定义外部应用打开当前文档_IMG-2](https://cdn.pkmer.cn/images/202404171518377.png!pkmer)

> [!tip] 默认为当前文档，也可以打开嵌入文件  
> 如果有选中的文本或光标所在行有嵌入文件，则打开的是该嵌入文档  
> ![2024-04-10_QuickAdd脚本-自定义外部应用打开_IMG-3](https://cdn.pkmer.cn/images/202404201654788.gif!pkmer)

```js
const { exec } = require('child_process');
const path = require('path');

// 获取笔记的基本路径
let filePath = app.workspace.getActiveFile().path;
console.log(filePath);
let fileFullPath = app.vault.adapter.getFullPath(filePath);

// 如果有选中文本或光标所在行有嵌入文件，则获取所在的文件路径
try {
    const editor = app.workspace.activeEditor.editor;
    // 选择所在的一行
    const line = editor.getLine(editor.getCursor().line);
    // 获取选中的文本否则自动获取当前行的文本
    const selection = editor.getSelection() ? editor.getSelection() : line;

    if (selection) {
        const files = app.vault.getFiles();
        let selectionEmbed = matchSelectionEmbed(selection);
        filePath = getFilePath(files, selectionEmbed);
        fileFullPath = app.vault.adapter.getFullPath(filePath);
    }
} catch (error) {
    // 如果报错则跳过
    console.log(error);
}


module.exports = {
    entry: async (QuickAdd, settings, params) => {
        let editors = settings["Editor"] ? settings["Editor"].split("\n") : [];
        editors.unshift(...['💡默认应用', '📂打开文件夹', "⚙编辑外部应用", "🗃FolderNotes", "🎐Hover"]);
        // 输入界面
        let choice = await QuickAdd.quickAddApi.suggester(editors.map(i => {
            if (i.includes("\\")) {
                return "⚡" + i.split("\\").at(-1).replace("\.exe", "");

            } else {
                return i;
            }
        }), editors);
        if (!choice) return;

        // 选择判断
        if (choice === editors[0]) {
            // 使用默认应用程序打开文件
            app.openWithDefaultApp(filePath);
        } else if (choice === editors[1]) {
            // 使用打开当前笔记文件夹
            app.showInFolder(filePath);
        } else if (choice === editors[2]) {
            let inputText = await QuickAdd.quickAddApi.wideInputPrompt("编辑外部软件绝对路径，多个以换行分割", null, settings["Editor"]);
            if (!inputText) return;
            settings["Editor"] = inputText;
        } else {
            exec(`"${choice}" "${fileFullPath}"`);
        }
    },

    settings: {
        name: "打开外部软件",
        author: "熊猫别熬夜",
        options: {
            "Editor": {
                type: "format",
                defaultValue: "",
                description: "",
            },
        }
    }
};

function matchSelectionEmbed(text) {
    const regex = /\[\[?([^\]]*?)(\|.*)?\]\]?\(?([^)\n]*)\)?/;
    const matches = text.match(regex);
    if (!matches) return;
    if (matches[3]) return decodeURIComponent(matches[3]);
    if (matches[1]) return decodeURIComponent(matches[1]);
}

function getFilePath(files, baseName) {
    let files2 = files.filter(f => path.basename(f.path).replace(".md", "") === path.basename(baseName).replace(".md", ""));
    let filePath = files2.map((f) => f.path);
    return filePath[0];
}

```
