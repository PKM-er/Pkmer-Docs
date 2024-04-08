---
uid: 20240323205607
title: QuickAdd 脚本 - 移动子笔记或附件到当前文件夹
tags: [笔记管理, quickadd脚本]
description: 移动子笔记或附件到当前文件夹
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 
---

# QuickAdd 脚本 - 移动子笔记或附件到当前文件夹

## 脚本介绍

> 以复选框显示文档中不处于同一文件夹的嵌入文件，可筛选📄笔记或者📦附件，复选框选择 `true` 提交 (Submit) 后则移动到当前笔记所在的文件夹，如果 `false` 或者不提交 (Submit) 则不移动。

![2024-03-15_QuickAdd脚本-移动子笔记或附件到当前文件夹_IMG-1](https://cdn.pkmer.cn/images/202403232057894.png!pkmer)

## QuickAdd Macro 脚本

```js
/*
 * @Author: 熊猫别熬夜 
 * @Date: 2024-03-18 02:30:36 
 * @Last Modified by: 熊猫别熬夜
 * @Last Modified time: 2024-04-01 19:11:23
*/

// 导入所需模块
const path = require('path');
const fs = require('fs');
const quickAddApi = app.plugins.plugins.quickadd.api;

// 导出异步函数
module.exports = async (params) => {
    // 获取当前活动文件和缓存的元数据
    const file = app.workspace.getActiveFile();
    const cachedMetadata = app.metadataCache.getFileCache(file);
    let links = [];
    let embeds = [];

    // 提取链接和嵌入的文件
    if (cachedMetadata.links) {
        links = cachedMetadata.links.map(l => l.link);
    }

    if (cachedMetadata.embeds) {
        embeds = cachedMetadata.embeds.map(e => e.link);
    }

    let allLinks = [...links, ...embeds];
    console.log(allLinks);

    // // 如果没有链接和嵌入文件，则提示并返回
    // if (!allLinks.length) {
    //     new Notice("💬当前笔记没有检测到嵌入的笔记或附件");
    //     return;
    // };

    // 获取所有文件和链接文件路径
    const files = app.vault.getFiles();
    let linkFilePaths = [];
    for (let i = 0; i < allLinks.length; i++) {
        const link = allLinks[i];
        const filePath = getFilePath(files, link);
        if (filePath) {
            linkFilePaths.push(filePath);
        }
    };
    console.log(linkFilePaths);

    // 检查链接文件是否在同一文件夹中
    const activefile = app.workspace.getActiveFile();
    console.log(activefile);
    const check = checkLinkNotesInSameFolder(activefile.path, linkFilePaths);

    // 筛选可移动的文件类型
    const moveFiles = linkFilePaths.filter((filePath, index) => !check[index]);

    // 筛选附件和笔记
    const attachmentTypes = ['md', 'canvas', 'excalidraw'];
    const notes = moveFiles.filter(link => attachmentTypes.some(type => link.endsWith('.' + type)));
    const attachments = moveFiles.filter(link => !notes.includes(link));

    // 提示用户选择移动类型
    const choices = [`📁移动当前文件夹至其他位置`, `📄移动笔记到当前文件夹(${notes.length})`, `📦移动附件到当前文件夹(${attachments.length})`];
    const choice = await quickAddApi.suggester(choices, choices);
    if (!choice) return;

    if (choice === choices[0]) {
        let listPaths = app.vault.getAllFolders().map(f => f.path);
        listPaths.unshift("/");
        const choice = await quickAddApi.suggester(listPaths, listPaths);
        if (!choice) return;
        const newFilePath = path.join(choice, path.basename(path.dirname(activefile.path)));
        const oldFolderPath = path.dirname(activefile.path);
        await app.fileManager.renameFile(app.vault.getAbstractFileByPath(oldFolderPath), newFilePath);
        new Notice(`📁已移动${oldFolderPath}文件夹至${newFilePath}`, 1000);
        return;
    };

    // 根据用户选择筛选链接
    const filteredLinks = choice === choices[1] ? notes : attachments;

    // 用户选择具体文件
    const selectedItems = await quickAddApi.checkboxPrompt(filteredLinks, filteredLinks);
    if (!selectedItems) return;

    // 匹配选择的文件路径
    const matchedLinkFilePaths = selectedItems.map((filePath) => {
        return linkFilePaths.find((linkFilePath) => linkFilePath.replace(".md", "").endsWith(filePath.replace(".md", "")));
    });
    if (!matchedLinkFilePaths) return;

    console.log(matchedLinkFilePaths);

    // 移动文件到当前文件夹
    for (let i = 0; i < matchedLinkFilePaths.length; i++) {
        const oldFilePath = matchedLinkFilePaths[i];

        // 2024-03-22_11:41：如果存在FolderNote，则移动的是整个文件夹
        const fileName = path.basename(oldFilePath);
        const isFolderNote = path.basename(path.dirname(oldFilePath)) === fileName.replace(".md", "").replace(".canvas", "");

        if (isFolderNote) {
            const newFilePath = path.join(path.dirname(activefile.path), fileName.replace(".md", "").replace(".canvas", ""));
            const oldFolderPath = path.dirname(oldFilePath);
            await app.fileManager.renameFile(app.vault.getAbstractFileByPath(oldFolderPath), newFilePath);
            new Notice(`📁已移动${oldFolderPath}文件夹至${newFilePath}`, 1000);
        } else {
            const newFilePath = path.join(path.dirname(activefile.path), path.basename(oldFilePath));
            await app.fileManager.renameFile(app.vault.getAbstractFileByPath(oldFilePath), newFilePath);
            new Notice(`📄已移动${matchedLinkFilePaths[i]}`, 1000);
        }
    }
    new Notice("✅已移动文件到当前文件夹");
};

// 获取文件路径函数
function getFilePath(files, baseName) {
    let files2 = files.filter(f => path.basename(f.path).replace(".md", "") === baseName.replace(".md", ""));
    let filePath = files2.map((f) => f.path);
    return filePath[0];
}

// 检查链接文件是否在同一文件夹中函数
function checkLinkNotesInSameFolder(activeFilePath, linkFilePaths) {
    const activeFileDir = path.dirname(activeFilePath);
    let check = [];
    for (let i = 0; i < linkFilePaths.length; i++) {
        const linkFileDir = path.dirname(linkFilePaths[i]);

        if (activeFileDir === linkFileDir) {
            check.push(true);
        } else {
            check.push(false);
        }
    }
    return check;
};

```

## References

1. [[QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)]]

## ChangeLog

- 2024-03-22_11:33：如果嵌入的是 FolderNote 则移动整个 FolderNote 文件夹。 ✅ 2024-03-22
- 2024-04-01_19:09：添加移动当前文件夹至其他位置的选项，方便 Folder 笔记的移动
	- ![image.png](https://cdn.pkmer.cn/images/202404012231274.png!pkmer)
