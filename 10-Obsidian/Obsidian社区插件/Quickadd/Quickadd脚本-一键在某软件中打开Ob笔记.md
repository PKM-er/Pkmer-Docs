---
uid: 20231208015601
title: Quickadd 脚本：一键在某软件中打开 Ob 笔记
tags:
  - quickadd
  - quickadd脚本
  - VSCode
description: 一键在第三方软件中打开笔记的quickadd脚本
author: 熊猫不熬夜，ProudBenzene
type: advanced
draft: false
editable: false
modified: 20231208113905
---

# Quickadd 脚本：一键在某软件中打开 Ob 笔记

## 功能需求

在使用 Obsidian 对笔记进行编辑时，我们可能会需要在第三方软件中打开该篇笔记进行编辑，以使用一些 Obsidian 并不擅长的功能。例如，在 Typora 中打开笔记进行表格编辑、在 VSCode 中打开笔记文件夹进行大型文本查找替换、修改格式为 md、内容为 javascript 的脚本……

对于一些用户而言，这些需求可能需求频次较高。这时候，如果有一个一键将笔记在某软件中打开的命令或按钮，会省去很多麻烦。

相比于单独的插件，脚本更加轻量、简单，因此这里使用脚本完成诉求。

下面两个版本的脚本：

- 版本一可以在==默认软件、VSCode、Cursor 和打开文件夹== 四个选项中选择一个打开笔记
- 版本二可以在==默认软件、VSCode、Sublime Text 和打开文件夹== 四个选项中选择一个打开笔记，并且选择后两个软件时，会先在软件中打开笔记所在的 Obsidian 库根目录

## 版本一

```js
// 获取笔记的基本路径
const filePath = app.workspace.getActiveFile().path;
const fileFullPath = app.vault.adapter.getFullPath(filePath);
console.log(fileFullPath);

let QuickAdd;
module.exports = async function openExternalEditors(params) {
    QuickAdd = params;
    let editors = ['默认应用', 'VS Code', "Cursor", "打开文件夹"];
    // 输入界面
    let inputText = await QuickAdd.quickAddApi.suggester(editors, editors);

    // 选择判断
    if (inputText === '默认应用') {
        // 使用默认应用程序打开文件
        app.openWithDefaultApp(filePath);
    } else if (inputText === 'VS Code') {
        // 使用 VS Code 打开文件
        const editorPath = "D:\\Microsoft VS Code\\Code.exe"; // 替换为你的 VS Code 安装路径
        const { exec } = require('child_process');
        exec(`"${editorPath}" "${fileFullPath}"`);
    } else if (inputText === 'Cursor') {
        // 使用 Cursor 打开文件
        const editorPath = "C:\\Users\\94359\\AppData\\Local\\Programs\\Cursor\\Cursor.exe"; // 替换为你的 Cursor 安装路径
        const { exec } = require('child_process');
        exec(`"${editorPath}" "${fileFullPath}"`);
    } else if (inputText === '打开文件夹') {
        // 使用打开当前笔记文件夹
        app.showInFolder(filePath);
    }
};


```

## 版本二

```js
const { exec } = require('child_process');
const path = require("path");

// 获取笔记的基本路径
const filePath = app.workspace.getActiveFile().path;
const fileFullPath = app.vault.adapter.getFullPath(filePath);
const basePath = (app.vault.adapter).getBasePath()
console.log(fileFullPath);

// 调用QuickAdd
let QuickAdd;
module.exports = async function openExternalEditors(params) {
    QuickAdd = params;
    let editors = ['默认应用', '打开文件夹', 'VSCode', "Sublime Text"];
    // 输入界面
    let inputText = await QuickAdd.quickAddApi.suggester(editors, editors);

    // 选择判断
    if (inputText === '默认应用') {
        // 使用默认应用程序打开文件
        app.openWithDefaultApp(filePath);
    } else if (inputText === '打开文件夹') {
        // 使用打开当前笔记文件夹
        app.showInFolder(filePath);
    } else if (inputText === 'VSCode') {
        // 使用 VSCode 打开文件
        const editorPath = "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"; // 替换为你的 VS Code 安装路径
        exec(`"${editorPath}" -n "${basePath}"`);
        setTimeout(() => {
            exec(`"${editorPath}" "${fileFullPath}"`);
        }, 1000); // 等待 1 秒
    } else if (inputText === 'Sublime Text') {
        const editorPath = "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl"; // 替换为你的 Cursor 安装路径
        // 使用 Sublime Text 打开文件
        exec(`"${editorPath}" -n "${basePath}"`);
        setTimeout(() => {
            exec(`"${editorPath}" "${fileFullPath}"`);
        }, 1000); // 等待 2 秒
    }
};
```

> [!warning] 注意
> Windows 和 macOS 系统中部分软件的安装路径差别较大，版本一的中软件的安装路径均为 **Windows 系统下**，版本二为 **macOS 系统下**

## 使用方法

- Quickadd 脚本的使用方法，参见 [Obsidian 插件：QuickAdd 自动化操作的编辑器]( https://pkmer.cn/show/20230508001129 ) 中的 Macro 部分
- 粘贴代码后，注意修改脚本中注释提示的部分为**你电脑上的软件路径**
- 如果想要使用该脚本打开其他软件，可以修改脚本中的 `inputText`、`editorPath` 等参数为**目标软件的名称或路径**