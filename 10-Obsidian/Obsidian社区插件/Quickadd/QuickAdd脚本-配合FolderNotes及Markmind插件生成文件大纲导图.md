---
uid: 20240316224305
title: QuickAdd 脚本 - 配合 FolderNotes 及 Markmind 插件生成文件大纲导图
tags: [quickadd脚本, 文件夹管理, 思维导图]
description: " 配合 FolderNotes 及 Markmind 插件生成文件大纲导图"
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240316224519
---

# QuickAdd 脚本 - 配合 FolderNotes 及 Markmind 插件生成文件大纲导图

## 背景

![2024-03-13_QuickAdd脚本-配合FolderNotes及Markmind插件生成文件大纲导图_IMG-1](https://cdn.pkmer.cn/images/202403162247188.png!pkmer)

需求来源于一个群友 [^1] 对文件夹想要以思维导图的形式展开，我个人最近开始采用杜威十进制来给文件夹加编号以及一直以来都是用 Folder Notes 插件 (作者：Lost Paul)，对这个话题就比较感兴趣，尝试做了一下，用 js 自动检测生成一个 Obsidian index 的 FolderMind.md 文件，借助 Markmind 插件来显示思维导图，如果有 FolderNote 则会嵌入进去。

## 脚本设置

![2024-03-13_QuickAdd脚本-配合FolderNotes及Markmind插件生成文件大纲导图_IMG-2](https://cdn.pkmer.cn/images/202403162247190.png!pkmer)

- 设置选项：
	- 根目录大纲导图
	- 当前 Root 文件夹大纲导图
	- 当前 FolderNote 大纲导图
- 可控制变量：
	- folderMindPath：生成的 TreeFolderMind 的文件所在的位置，默认在根目录。
	- maxDepth：文件夹检索深度 1~6 层；
	- level：默认导图限制展开的深度，可调 1~5 级；
	- ignoreFolders：忽略的文件夹表单，即不在导图中显示，不填路径只填文件夹名称。
	- ignoreSubfoldersList：不进行进一步深度拓展的文件夹，不填路径只填文件夹名称，即分支到这节之后不会继续延伸。
- 自动变量：
	- 根据主题的深浅，生成的 Markmind 的主题不一样：
		- 深色 (Cold)、浅色 (Warm)
- 进阶需求：
	- 根据导图移动方式来移动文件夹？
	- 依据杜威十进制自动排序的机制？

## QuickAdd Macro 脚本

```js
const fs = require('fs');
const path = require('path');
const folderPath = (app.vault.adapter).getBasePath();

module.exports = {
    entry: async (QuickAdd, settings, params) => {
        const folderMindPath = settings["folderMindPath"];
        const maxDepth = Number(settings["maxDepth"]);
        const level = Number(settings["level"]);
        const ignoreFolders = settings["ignoreFolders"].split(',');
        console.log(ignoreFolders);
        const ignoreSubfoldersList = settings["ignoreSubfoldersList"].split(',');
        console.log(ignoreSubfoldersList);
        const listPaths = traverseFolder(folderPath, '', ignoreFolders, ignoreSubfoldersList, maxDepth);
        // console.log(listPaths);

        // 设定固定Yaml

        // 根据主题生成配色
        const currentMode = app.vault.config.theme;
        let mindmapTheme = "cold";
        if (currentMode !== "obsidian") {
            mindmapTheme = "warm";
        }

        const markmindYaml = `---\nmindmap-plugin: basic\nmindmap-theme: ${mindmapTheme}\ndisplay-mode: mind\n---\n`;
        const text = markmindYaml + `# FolderMind\n` + listPaths.join("\n");

        let mindFile = app.vault.getAbstractFileByPath(folderMindPath);

        if (mindFile) {
            app.vault.modify(mindFile, text);
        } else {
            mindFile = app.vault.create(folderMindPath, text);
        }
        app.workspace.activeLeaf.openFile(mindFile);
        // await app.workspace.activeLeaf.rebuildView();
        new Notice("文件夹导图生成成功！");

        setTimeout(() => {
            try {
                app.commands.executeCommandById(`obsidian-markmind:Expand to node level ${level}`);
            } catch (error) {
                console.log(error);
            }
        }, 1000);

    },
    settings: {
        name: "Tree Folder Mind",
        author: "熊猫别熬夜",
        options: {
            "folderMindPath": {
                type: "text",
                defaultValue: "FolderNote.markmind.md",
                placeholder: "相对路径",
                description: "设置文件夹导图路径，可以嵌套子文件夹",
            },
            "maxDepth": {
                type: "dropdown",
                defaultValue: 3,
                options: [1, 2, 3, 4, 5, 6],
                description: "设置挖掘文件夹的深度",
            },
            "level": {
                type: "dropdown",
                defaultValue: 2,
                options: [1, 2, 3, 4, 5],
                description: "设置mind默认展开的深度",
            },
            "ignoreFolders": {
                type: "text",
                defaultValue: "@【熊阿莫】赞美太阳！",
                placeholder: "忽略文件夹",
                description: "设置忽略文件夹，多个用逗号隔开"
            },
            "ignoreSubfoldersList": {
                type: "text",
                defaultValue: "900【素材】Assets,510_Bookxnote库,700【模板】Template,550_CodeSnippet,540_图形文件存储",
                description: "忽略某个文件夹下的子文件夹，即不展开，多个用逗号隔开"
            }
        }
    }
};

function traverseFolder(folderPath, indent = '', ignoreFolders = [], ignoreSubfoldersList = [], maxDepth = 4, currentDepth = 1, listPaths = []) {
    if (currentDepth > maxDepth) {
        return listPaths;
    }
    const files = fs.readdirSync(folderPath);

    files.forEach(file => {
        const filePath = path.join(folderPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory() && !file.startsWith('.') && !ignoreSubfoldersList.some(folder => filePath.includes(folder + "\\")) && !ignoreFolders.includes(file)) {
            const fileName = path.basename(filePath);
            const mocFile = `${filePath}/${fileName}.md`;
            let mocNote = fs.existsSync(mocFile);
            let listPath = "";
            if (mocNote) {
                listPath = indent + '- [[' + file + ']]';
            } else {
                listPath = indent + "- " + file;
            }
            console.log(listPath);
            listPaths.push(listPath);

            listPaths = traverseFolder(filePath, indent + '  ', ignoreFolders, ignoreSubfoldersList, maxDepth, currentDepth + 1, listPaths);
        }
    });

    return listPaths;
}

```

[^1]: 2024-03-13_ 文件夹展开的需求 by 吅