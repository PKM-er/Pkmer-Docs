---
uid: 20240316224647
title: QuickAdd 脚本 - 复制 wiki 对应文档内容并删除文件
tags: [工作流, quickadd脚本, 文件重构]
description: 复制 wiki 对应文档内容并删除文件，适用于快速将子笔记内容整理到剪切板，以及删除子文档的操作。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240408190804
---

# QuickAdd 脚本 - 复制 wiki 对应文档内容并删除文件

该脚本的功能是复制通过鼠标选中的 `[[]]` 文本，然后将对应文档的内容（不包括 Yaml）复制到剪贴板，并删除该文档。

![2024-03-13_QuickAdd脚本-复制wiki对应文档内容并删除文件_IMG-1](https://cdn.pkmer.cn/images/202403162248665.gif!pkmer)

适用于快速将子笔记内容整理到剪切板，以及删除子文档的操作。

## QuickAdd Macro 设置

![2024-03-13_QuickAdd脚本-复制wiki对应文档内容并删除文件_IMG-2](https://cdn.pkmer.cn/images/202403162248667.png!pkmer)

第一个命令 `1. Select link on active line` 在 Add editor command 的下拉菜单找，然后配置下面的脚本，即将下面代码复制到 js 文件 (如：`复制并删除文件.js`) 中，并存放到 QuickAdd 对应的脚本文件夹下，即可在 User Scripts 里面找到并添加。

### 脚本

```js
const fs = require('fs');
const path = require('path');
const process = require('process');

module.exports = async (params) => {
    // 获取选中的文本
    const selection = getSelection().toString(); // 将 selection 转换为字符串
    let selectionEmbed = matchSelectionEmbed(selection);
    console.log(selectionEmbed);
    const files = app.vault.getFiles();

    // Wiki: 获取库所有文件列表
    wikiPath = getFilePath(files, selectionEmbed); // 匹配Wiki链接
    console.log(wikiPath);
    if (!wikiPath) {
        new Notice("❌未找到对应文件");
        return;
    };

    let markdownText = getMarkdownText(wikiPath);

    // 复制并删除文件
    copyToClipboard(markdownText);
    await app.vault.trash(app.vault.getAbstractFileByPath(wikiPath));
    new Notice("💡已复制内容到剪切板，并删除文件");
    return;
};

function matchSelectionEmbed(text) {
    const regex = /\[\[(.*)\]\]/;
    const matches = text.match(regex);
    return matches ? matches[1] : "";
}
function getFilePath(files, baseName) {
    let files2 = files.filter(f => path.basename(f.path).replace(".md", "") === baseName.replace(".md", ""));
    let filePath = files2.map((f) => f.path);
    return filePath[0];
}

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

// 获取文件路径下的 md 中的文本(排除 Yaml)
function getMarkdownText(filePath) {
    // 获取文件的完整路径
    const fileFullPath = app.vault.adapter.getFullPath(filePath);
    // 读取文件内容
    const fileContent = fs.readFileSync(fileFullPath, 'utf8');
    // 排除首行YAML区域
    const markdownText = fileContent.replace(/---[\s\S]*?---\n*/, '').replace(/\n*/, '');
    return markdownText;
}
```
