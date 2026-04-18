---
uid: 20260410105545
title: QuickAdd 脚本更新说明 - 新增标题分割&关联笔记重组的功能
tags: [笔记重组, quickadd脚本]
description: QuickAdd 脚本更新说明 - 新增标题分割&关联笔记重组的功能
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20260410175913
---

# QuickAdd 脚本更新说明 - 新增标题分割&关联笔记重组的功能

> 文本的脚本是在 [[QuickAdd脚本-移动子笔记或附件到当前文件夹]] 脚本的基础上后续更新的版本。

### 前言

在 Obsidian 中处理长文档时，我习惯按大纲章节拆分，分别记录各小节内容，并配合 Multiple Notes Outline 插件来查看整体结构。但后续的合并整理与导出操作比较繁琐，打算采用笔记重组的方式来完成这些任务，主要用于实现大纲笔记的合并&分割，或者撰写文章的时候标题分割小章节撰写之后合并，预期功能：

- 笔记分割>按选定标题分割，嵌入文件名需要添加 `YYMMDD_` 或 `文件名_` 前缀
- 笔记合并>只合并关联笔记内容，跟嵌入笔记在原文里面存在形式无关

> Tip：此脚本非常适合 FolderNote 格式的笔记。

![260408_QuickAdd 脚本更新说明：新增标题分割&关联笔记重组的功能.md](https://cdn.pkmer.cn/images/File-20260408072336009.png!pkmer)

### 功能 1：🧩 合并关联的子笔记

![260408_QuickAdd 脚本更新说明：新增标题分割&关联笔记重组的功能.md](https://cdn.pkmer.cn/images/File-20260408071511782.png!pkmer)

- 一键提取当前文档关联的子笔记内容，按顺序合并到新文件
- 合并完成后自动创建 `当前文件名_merged.md` 并在编辑器中打开
- 支持批量处理多个关联笔记，保持原始文档结构
- 支持选中区域识别，从选中的多行文本中提取所有的 `[[双链]]` 或 `[Markdown](链接)`
- 智能内容处理
    - YAML 自动剔除：删除每个子笔记顶部的 YAML 元数据，保持合并后文档纯净
    - 标题深度清理：自动移除文件名中的日期前缀（如 `24.03.15_` 或 `240315_`）以及 `【标签】` 字样
    - 文件过滤：精准识别并排除 `.excalidraw.md` 绘图文件

### 功能 2：✂️ 按标题分割当前笔记

![260408_QuickAdd 脚本更新说明：新增标题分割&关联笔记重组的功能.md](https://cdn.pkmer.cn/images/File-20260408071557499.png!pkmer)

- 按标题分割当前笔记并引用到当前文件
- 自动识别文档的标题类型，可自定义分割标题等级：H1~H6
- 支持不同类型的嵌入格式：None、嵌入笔记、双链链接、无序列表、有序列表

### 效果演示

![260408_QuickAdd 脚本更新说明：新增标题分割&关联笔记重组的功能.md](https://cdn.pkmer.cn/images/File-20260408075613158.gif)

### 注意事项

1. 如果合并效果有问题，在不删除原文件的情况下可以通过 Ctrl+Z 来撤销操作，如果删除了原文件的话，请到 `.trash` 文件夹中进行恢复。
2. 本脚本的笔记重组功能不支持脚本的引用的识别功能，就是单纯的内容读写操作，如果笔记重组后中存在引用脚本的丢失请撤回操作。
3. 笔记分割的嵌入式的文件名处理（添加日期前缀 + 移除 `【标签】` 标识）是根据我自己的使用情况来处理的，如果跟你的笔记格式有冲突，请自行修改源码，或者拿给 AI 修改。

### 更新说明

#### 2026-04-10

![260408_QuickAdd 脚本更新说明：新增标题分割&关联笔记重组的功能.md](https://cdn.pkmer.cn/images/File-20260409105634078.png!pkmer)

1. 在设置「删除原文件」的选项之后，「复制到剪切板」的选项会复制内容后自动删除原文件
2. 「标题分割」可以设置 4 种前缀格式：
    1. 分割的文件名作为前缀（`filename_head`）
    2. 时间戳前缀（`timestamp_head`）
    3. 日期前缀（`YYMMDD_head`）
    4. 无前缀（`head`）
3. 「标题分割」支持指定的分割的标题（显示的是处理后的标题）
    - ![260408_QuickAdd 脚本更新说明：新增标题分割&关联笔记重组的功能.md](https://cdn.pkmer.cn/images/File-20260409110721966.png!pkmer)
4. 「标题分割」可以设置是否保留标题在分割的笔记中
5. 优化路径检测逻辑，自动识别并排除处于当前目录子文件夹中的 Folder Note 笔记（笔记名与父文件夹同名）。

### 脚本源码

```js
/*
 * @Author: 熊猫别熬夜 
 * @Date: 2024-03-18 02:30:36 
 * @Last Modified by: 熊猫别熬夜
 * @Last Modified time: 2026-04-13 10:41:28
*/

// 导入所需模块
const path = require('path');
const fs = require('fs');
const quickAddApi = app.plugins.plugins.quickadd.api;
const files = app.vault.getFiles();
// 获取当前活动文件和缓存的元数据
const file = app.workspace.getActiveFile();
const cachedMetadata = app.metadataCache.getFileCache(file);
let listPaths = app.vault.getAllFolders().map(f => f.path);
listPaths.unshift("/");

// 导出异步函数
module.exports = {
    entry: async (QuickAdd, settings, params) => {
        let editor;
        let selection;
        try {
            // 获取选中的文本
            editor = app.workspace.activeEditor.editor;
            // 选择所在的一行
            const line = editor.getLine(editor.getCursor().line);
            // 获取选中的文本否则自动获取当前行的文本
            selection = editor.getSelection() ? editor.getSelection() : line;
        } catch {
            new Notice("❌获取选中文本失败");
            return;
        }
        let selectionLinks = [];
        if (selection) {
            selectionLinks = extractAllWikiLinks(selection);
        }
        console.log("选中链接:", selectionLinks);

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

        // 提取外部文件链接 (file://)
        let externalFiles = [];
        let fileContent = '';
        try {
            fileContent = await app.vault.read(file);
            externalFiles = extractExternalFileLinks(fileContent);
            console.log('外部文件:', externalFiles);
        } catch (error) {
            console.error('读取文件内容失败:', error);
        }

        // 获取所有文件和链接文件路径
        let linkFilePaths = [];
        const sourceLinks = selectionLinks.length > 0 ? selectionLinks : allLinks;

        for (let i = 0; i < sourceLinks.length; i++) {
            const link = sourceLinks[i];
            const filePath = getFilePath(files, link);
            if (filePath) {
                linkFilePaths.push(filePath);
            }
        };
        console.log("最终链接路径:", linkFilePaths);

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

        // 筛选关联子笔记用于合并 (仅限当前文件夹内的笔记)
        let mergeNotes = [...new Set(linkFilePaths.filter(p => p.endsWith('.md') && !p.endsWith('.excalidraw.md')))];

        // 提示用户选择移动类型
        const choices = [
            `📁移动当前文件夹至其他位置`,
            `📄移动笔记到当前文件夹(${notes.length})`,
            `📦移动附件到当前文件夹(${attachments.length})`,
            `🌐移动外部文件到当前文件夹(${externalFiles.length})`,
            `🧩合并关联的子笔记(${mergeNotes.length})`,
            `✂️按标题分割当前笔记`,
            `📥归档当前文件到指定文件夹`
        ];
        const choice = await quickAddApi.suggester(choices, choices);
        if (!choice) return;

        if (choice === choices[0]) {
            const choice = await quickAddApi.suggester(listPaths, listPaths);
            if (!choice) return;
            const newFilePath = path.join(choice, path.basename(path.dirname(activefile.path)));
            const oldFolderPath = path.dirname(activefile.path);
            await app.fileManager.renameFile(app.vault.getAbstractFileByPath(oldFolderPath), newFilePath);
            new Notice(`📁已移动${oldFolderPath}文件夹至${newFilePath}`, 1000);
            return;
        } else if (choice === choices[6]) {
            const archiveFolder = settings["归档路径"] + (settings["归档格式"] ? "/" + quickAddApi.date.now(settings["归档格式"]) : "");
            if (!(await app.vault.getFolderByPath(archiveFolder))) {
                await app.vault.createFolder(archiveFolder);
            }
            const fileName = path.basename(activefile.path);
            const oldFilePath = activefile.path;
            const isFolderNote = path.basename(path.dirname(oldFilePath)) === fileName.replace(".md", "").replace(".canvas", "");
            if (isFolderNote) {
                const newFilePath = path.join(archiveFolder, fileName.replace(".md", "").replace(".canvas", ""));
                const oldFolderPath = path.dirname(oldFilePath);
                await app.fileManager.renameFile(app.vault.getAbstractFileByPath(oldFolderPath), newFilePath);
                new Notice(`📥已归档📁${oldFolderPath}`, 1000);
            } else {
                const newFilePath = path.join(archiveFolder, fileName);
                await app.fileManager.renameFile(app.vault.getAbstractFileByPath(oldFilePath), newFilePath);
                new Notice(`📥已归档📝${fileName}`, 1000);
            }
            return;
        } else if (choice === choices[5]) {
            // ✂️按标题分割当前笔记
            const activeFile = app.workspace.getActiveFile();
            const cachedMetadata = app.metadataCache.getFileCache(activeFile);
            const fileContent = await app.vault.read(activeFile);

            if (!cachedMetadata.headings || cachedMetadata.headings.length === 0) {
                new Notice("❌该笔记中没有标题！");
                return;
            }

            const levels = new Set(cachedMetadata.headings.map(h => h.level));
            const sortedLevels = Array.from(levels).sort();

            // 默认参数配置
            let selectedLevel = sortedLevels[0];
            const linkFormats = ["None", "双链链接", "嵌入笔记", "无序列表", "有序列表"];
            let selectedFormat = "无序列表";
            let prefixType = "文件名前缀";
            const prefixTypes = ["文件名前缀", "时间戳前缀", "日期前缀", "无前缀"];
            let keepHeadingInSubnote = true; // 默认保留标题

            // 参数配置循环
            while (true) {
                const options = [
                    `📌 标题级别： H${selectedLevel} (按选定的标题层级进行切分)`,
                    `🔗 引用格式：${selectedFormat} (原笔记中生成的引用链接样式)`,
                    `🏷️ 前缀格式：${prefixType} (循环切换：文件名/时间戳/日期/无)`,
                    `📝 子笔记保留标题：${keepHeadingInSubnote ? "✅" : "❌"}`,
                    "✔️ 确定，开始分割",
                    "❌ 取消，退出分割"
                ];

                const select = await quickAddApi.suggester(options, options);
                if (!select || select === options[5]) return;

                if (select === options[0]) {
                    const levelStr = await quickAddApi.suggester(
                        sortedLevels.map(l => `H${l}`),
                        sortedLevels.map(l => l.toString())
                    );
                    if (levelStr) selectedLevel = parseInt(levelStr);
                } else if (select === options[1]) {
                    const format = await quickAddApi.suggester(linkFormats, linkFormats);
                    if (format) selectedFormat = format;
                } else if (select === options[2]) {
                    const currentIndex = prefixTypes.indexOf(prefixType);
                    prefixType = prefixTypes[(currentIndex + 1) % prefixTypes.length];
                } else if (select === options[3]) {
                    keepHeadingInSubnote = !keepHeadingInSubnote;
                } else if (select === options[4]) {
                    break;
                }
            }

            const allHeadings = cachedMetadata.headings;
            const targetHeadings = allHeadings.filter(h => h.level === selectedLevel);
            if (targetHeadings.length === 0) {
                new Notice(`❌未找到 H${selectedLevel} 标题`, 2000);
                return;
            }

            let filePrefix = "";
            if (prefixType === "文件名前缀") {
                filePrefix = activeFile.basename.replace(/[*"\\/<>:|?]/g, '_') + "_";
            } else if (prefixType === "时间戳前缀") {
                filePrefix = Date.now().toString() + "_";
            } else if (prefixType === "日期前缀") {
                filePrefix = quickAddApi.date.now("YYMMDD") + "_";
            } else {
                filePrefix = "";
            }

            const headingLabels = targetHeadings.map((h, i) => {
                const cleanTitle = h.heading.replace(/[*"\\/<>:|?]/g, '_').trim();
                return `${filePrefix}${cleanTitle}.md` + "\u200B".repeat(i);
            });
            const selectedLabels = await quickAddApi.checkboxPrompt(headingLabels, headingLabels);
            if (!selectedLabels || selectedLabels.length === 0) return;
            const selectedIndices = new Set(selectedLabels.map(l => headingLabels.indexOf(l)));
            const currentDir = path.dirname(activeFile.path);

            const sectionRanges = targetHeadings.map((heading) => {
                const startOffset = heading.position.start.offset;
                const replaceStartOffset = startOffset;
                let endOffset = fileContent.length;

                for (const nextHeading of allHeadings) {
                    if (nextHeading.position.start.offset <= startOffset) continue;
                    if (nextHeading.level <= heading.level) {
                        endOffset = nextHeading.position.start.offset;
                        break;
                    }
                }

                return { heading, startOffset, replaceStartOffset, endOffset };
            });

            let updatedFileContent = "";
            let cursorOffset = 0;
            let linkCount = 0;

            for (let i = 0; i < sectionRanges.length; i++) {
                const { heading: currentHeading, startOffset, replaceStartOffset, endOffset } = sectionRanges[i];
                updatedFileContent += fileContent.substring(cursorOffset, replaceStartOffset);

                if (!selectedIndices.has(i)) {
                    updatedFileContent += fileContent.substring(replaceStartOffset, endOffset);
                    cursorOffset = endOffset;
                    continue;
                }

                linkCount++;

                // 截取当前标题子树，到下一个层级小于等于当前标题的标题为止
                const contentStart = keepHeadingInSubnote ? startOffset : currentHeading.position.end.offset;
                const sectionContent = fileContent.substring(contentStart, endOffset).trim();

                const cleanTitle = currentHeading.heading.replace(/[*"\\/<>:|?]/g, '_').trim();
                const newFileName = `${filePrefix}${cleanTitle}.md`;
                const newFilePath = path.join(currentDir, newFileName).replace(/\\/g, '/');

                let subFile = app.vault.getAbstractFileByPath(newFilePath);
                if (!subFile) {
                    subFile = await app.vault.create(newFilePath, sectionContent);
                    new Notice(`📄已创建: ${newFileName}`, 500);
                } else {
                    await app.vault.modify(subFile, sectionContent);
                    new Notice(`⚠️已更新: ${newFileName}`, 500);
                }

                let linkStr = "";
                const linkText = currentHeading.heading;

                switch (selectedFormat) {
                    case "None":
                        linkStr = "";
                        break;
                    case "双链链接":
                        linkStr = `[[${newFileName}|${linkText}]]\n\n`;
                        break;
                    case "嵌入笔记":
                        linkStr = `![[${newFileName}]]\n\n`;
                        break;
                    case "无序列表":
                        linkStr = `- [[${newFileName}|${linkText}]]\n`;
                        break;
                    case "有序列表":
                        linkStr = `${linkCount}. [[${newFileName}|${linkText}]]\n`;
                        break;
                }
                updatedFileContent += linkStr;
                cursorOffset = endOffset;
            }

            updatedFileContent += fileContent.substring(cursorOffset);

            await app.vault.modify(activeFile, updatedFileContent.trim());
            new Notice(`✅笔记分割完成 (格式: ${selectedFormat})`);
            return;
        } else if (choice === choices[4]) {
            // 🧩合并关联的子笔记
            if (mergeNotes.length === 0) {
                new Notice('❌未找到关联子笔记', 2000);
                return;
            }

            const labels = mergeNotes.map(p => path.basename(p));
            let selectedLabels = [];
            if (mergeNotes.length > 1) {
                selectedLabels = await quickAddApi.checkboxPrompt(labels, labels);
            } else {
                selectedLabels = labels;
            }
            if (!selectedLabels || selectedLabels.length === 0) return;

            let includeTitle = true;
            let mergeTarget = true;
            let deleteSource = false;

            while (true) {
                const options = [
                    `📑 是否将保留文件名：${includeTitle ? "✅ 文件名作为一级标题" : "❌ 不保留文件名，只合并文档内容"}`,
                    `🎯 是否合并到新文件：${mergeTarget ? "✅ 创建并打开新笔记" : "❌ 覆盖当前文档正文 (保留YAML)"}`,
                    `🗑️ 是否删除原文件：${deleteSource ? "✅ 删除 (需配合“覆盖当前”/“复制到剪贴板”)" : "❌ 不删除"}`,
                    "📋 复制合并内容到剪贴板 (复制成功后自动退出)",
                    "✔️ 确定，开始合并",
                    "❌ 取消，退出合并"
                ];

                const select = await quickAddApi.suggester(options, options);
                if (!select || select === options[5]) return;

                if (select === options[0]) {
                    includeTitle = !includeTitle;
                } else if (select === options[1]) {
                    mergeTarget = !mergeTarget;
                    if (mergeTarget) deleteSource = false;
                } else if (select === options[2]) {
                    deleteSource = !deleteSource;
                    if (deleteSource) mergeTarget = false;
                } else if (select === options[3]) {
                    let mergedContent = "";
                    let sourceFiles = [];
                    for (const label of selectedLabels) {
                        const notePath = mergeNotes.find(p => path.basename(p) === label);
                        const noteFile = app.vault.getAbstractFileByPath(notePath);
                        if (noteFile) {
                            sourceFiles.push(noteFile);
                            const content = getMarkdownText(notePath);
                            if (mergedContent) mergedContent += "\n\n";
                            if (includeTitle) {
                                const activeName = activeFile.basename.replace(/[*"\\/<>:|?]/g, '-');
                                const cleanTitle = noteFile.basename
                                    .replace(/^(\d{2,4}[-.]?\d{2}[-.]?\d{2}[_ ]?)/, '')
                                    .replace(new RegExp(`^${escapeRegExp(activeName)}[_ -]?`, 'i'), '')
                                    .replace(/【.*?】/g, '')
                                    .trim();
                                mergedContent += `# ${cleanTitle}\n\n${content}`;
                            } else {
                                mergedContent += content;
                            }
                        }
                    }
                    copyToClipboard(mergedContent);

                    if (deleteSource) {
                        const activeFile = app.workspace.getActiveFile();
                        let deleteCount = 0;
                        for (const fileToDelete of sourceFiles) {
                            if (fileToDelete.path !== activeFile.path) {
                                await app.vault.trash(fileToDelete, true);
                                deleteCount++;
                            }
                        }
                        new Notice(`📋 已复制并删除了 ${deleteCount} 个原文件`, 2000);
                    } else {
                        new Notice("📋 已复制合并内容到剪贴板", 2000);
                    }
                    return;
                } else if (select === options[4]) {
                    break;
                }
            }

            let mergedContent = "";
            let sourceFiles = [];
            for (const label of selectedLabels) {
                const notePath = mergeNotes.find(p => path.basename(p) === label);
                const noteFile = app.vault.getAbstractFileByPath(notePath);
                if (noteFile) {
                    sourceFiles.push(noteFile);
                    const content = getMarkdownText(notePath);
                    if (mergedContent) mergedContent += "\n\n";
                    if (includeTitle) {
                        const activeName = activeFile.basename.replace(/[*"\\/<>:|?]/g, '-');
                        const cleanTitle = noteFile.basename
                            .replace(/^(\d{2,4}[-.]?\d{2}[-.]?\d{2}[_ ]?)/, '')
                            .replace(new RegExp(`^${escapeRegExp(activeName)}[_ -]?`, 'i'), '')
                            .replace(/【.*?】/g, '')
                            .trim();
                        mergedContent += `# ${cleanTitle}\n\n${content}`;
                    } else {
                        mergedContent += content;
                    }
                }
            }

            const activeFile = app.workspace.getActiveFile();

            if (!mergeTarget) {
                const currentFullContent = await app.vault.read(activeFile);
                const yamlMatch = currentFullContent.match(/^---[\s\S]*?---\n*/);
                const yamlPart = yamlMatch ? yamlMatch[0] : "";
                await app.vault.modify(activeFile, yamlPart + mergedContent);
                new Notice("✅已更新当前文件 (保留YAML，覆盖正文)", 2000);
            } else {
                const currentDir = path.dirname(activeFile.path);
                const newFileName = `${activeFile.basename}_merged.md`;
                const newFilePath = path.join(currentDir, newFileName).replace(/\\/g, '/');

                let newFile = app.vault.getAbstractFileByPath(newFilePath);
                if (newFile) {
                    await app.vault.modify(newFile, mergedContent);
                    new Notice(`✅已覆盖更新: ${newFileName}`, 2000);
                } else {
                    newFile = await app.vault.create(newFilePath, mergedContent);
                    new Notice(`✅已创建新笔记: ${newFileName}`, 2000);
                }
                await app.workspace.getLeaf().openFile(newFile);
            }

            if (deleteSource) {
                for (const fileToDelete of sourceFiles) {
                    if (fileToDelete.path !== activeFile.path) {
                        await app.vault.trash(fileToDelete, true);
                    }
                }
                new Notice(`🗑️已删除 ${sourceFiles.length} 个原文件`, 2000);
            }
            return;
        } else if (choice === choices[3]) {
            // 🌐移动外部文件
            if (externalFiles.length === 0) {
                new Notice('❌未找到外部文件链接', 2000);
                return;
            }

            const labels = externalFiles.map(p => path.basename(p));
            const selectedItems = await quickAddApi.checkboxPrompt(labels, labels);
            if (!selectedItems || selectedItems.length === 0) return;

            const activefile = app.workspace.getActiveFile();
            const targetDir = path.dirname(activefile.path);
            const vaultBasePath = app.vault.adapter.basePath;

            const linkReplacements = new Map();
            let updatedContent = fileContent;

            for (const label of selectedItems) {
                const externalFilePath = externalFiles.find(p => path.basename(p) === label);
                try {
                    if (!fs.existsSync(externalFilePath)) {
                        new Notice(`❌文件不存在: ${path.basename(externalFilePath)}`, 2000);
                        continue;
                    }

                    const targetFilePath = path.join(targetDir, path.basename(externalFilePath)).replace(/\\/g, '/');
                    const vaultTargetPath = path.join(vaultBasePath, targetFilePath);

                    if (fs.existsSync(vaultTargetPath)) {
                        new Notice(`⚠️文件已存在: ${path.basename(externalFilePath)}`, 2000);
                    } else {
                        const targetDirPath = path.dirname(vaultTargetPath);
                        if (!fs.existsSync(targetDirPath)) {
                            fs.mkdirSync(targetDirPath, { recursive: true });
                        }
                        fs.copyFileSync(externalFilePath, vaultTargetPath);
                        new Notice(`📋已复制 ${path.basename(externalFilePath)}`, 1000);
                    }

                    const fileName = path.basename(externalFilePath);
                    const newLink = `![[${fileName}]]`;
                    const originalUrl = findFileUrlInContent(fileContent, externalFilePath);
                    if (originalUrl) {
                        linkReplacements.set(originalUrl, newLink);
                    }
                } catch (error) {
                    console.error('复制外部文件失败:', error);
                    new Notice(`❌复制失败: ${path.basename(externalFilePath)}`, 2000);
                }
            }

            if (linkReplacements.size > 0) {
                try {
                    for (const [originalUrl, newLink] of linkReplacements.entries()) {
                        const escapedUrl = escapeRegExp(originalUrl);
                        const imgPattern = new RegExp(`!\\[([^\\]]*)\\]\\(${escapedUrl}\\)`, 'g');
                        updatedContent = updatedContent.replace(imgPattern, (match, altText) => {
                            return altText ? `![${altText}]${newLink}` : newLink;
                        });
                    }

                    if (updatedContent !== fileContent) {
                        await app.vault.modify(activefile, updatedContent);
                        new Notice("✅已更新文件中的链接格式", 2000);
                    }
                } catch (error) {
                    console.error('更新文件链接失败:', error);
                    new Notice('⚠️文件已复制，但更新链接失败', 2000);
                }
            }

            new Notice("✅已复制外部文件到当前文件夹");
            return;
        }

        const filteredLinks = choice === choices[1] ? notes : attachments;
        const labels = filteredLinks.map(p => path.basename(p));
        const selectedItems = await quickAddApi.checkboxPrompt(labels, labels);
        if (!selectedItems) return;

        const matchedLinkFilePaths = selectedItems.map((label) => {
            return linkFilePaths.find((linkFilePath) => path.basename(linkFilePath) === label);
        });
        if (!matchedLinkFilePaths) return;

        for (let i = 0; i < matchedLinkFilePaths.length; i++) {
            const oldFilePath = matchedLinkFilePaths[i];
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
    },
    settings: {
        name: "移动子笔记或附件",
        author: "熊猫别熬夜",
        options: {
            "归档路径": {
                type: "dropdown",
                defaultValue: "800【存档】Archive",
                options: listPaths,
            },
            "归档格式": {
                type: "text",
                defaultValue: "YYYY",
                description: "可以设置以时间格式划分子文件夹，YYYY(年)，MM(月)，DD(日)",
            },
        }
    }
};

function getFilePath(files, baseName) {
    let files2 = files.filter(f => path.basename(f.path).replace(".md", "") === path.basename(baseName).replace(".md", ""));
    let filePath = files2.map((f) => f.path);
    return filePath[0];
}

function checkLinkNotesInSameFolder(activeFilePath, linkFilePaths) {
    const activeFileDir = path.dirname(activeFilePath);
    let check = [];
    for (let i = 0; i < linkFilePaths.length; i++) {
        const linkFilePath = linkFilePaths[i];
        const linkFileDir = path.dirname(linkFilePath);

        if (activeFileDir === linkFileDir) {
            check.push(true);
        } else {
            const fileName = path.basename(linkFilePath);
            const pureFileName = fileName.replace(".md", "").replace(".canvas", "");
            const parentFolderName = path.basename(linkFileDir);

            if (pureFileName === parentFolderName) {
                const grandparentDir = path.dirname(linkFileDir);
                if (activeFileDir === grandparentDir) {
                    check.push(true);
                    continue;
                }
            }
            check.push(false);
        }
    }
    return check;
};

function extractAllWikiLinks(text) {
    const wikiRegex = /!?\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g;
    const links = [];
    let match;
    while ((match = wikiRegex.exec(text)) !== null) {
        links.push(match[1]);
    }
    const mdLinkRegex = /!?\[[^\]]*\]\(([^)\n\s]+)\)/g;
    while ((match = mdLinkRegex.exec(text)) !== null) {
        links.push(decodeURIComponent(match[1]));
    }
    return [...new Set(links)];
}

function extractExternalFileLinks(content) {
    const fileProtocolRegex = /file:\/\/[\/]?([^\s\)"\]]+)/g;
    const matches = [];
    let match;

    while ((match = fileProtocolRegex.exec(content)) !== null) {
        try {
            let filePath = decodeURIComponent(match[1]);
            if (filePath.startsWith('/')) {
                filePath = filePath.substring(1);
            }
            filePath = filePath.replace(/\//g, path.sep);
            if (fs.existsSync(filePath)) {
                matches.push(filePath);
            }
        } catch (error) {
            console.error('处理外部文件路径失败:', match[1], error);
        }
    }
    return [...new Set(matches)];
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function findFileUrlInContent(content, filePath) {
    const fileUrlPattern = /file:\/\/[\/]?([^\s\)"\]]+)/g;
    let match;

    while ((match = fileUrlPattern.exec(content)) !== null) {
        try {
            let decodedPath = decodeURIComponent(match[1]);
            if (decodedPath.startsWith('/')) {
                decodedPath = decodedPath.substring(1);
            }
            decodedPath = decodedPath.replace(/\//g, path.sep);
            const normalizedFilePath = path.normalize(filePath);
            const normalizedDecodedPath = path.normalize(decodedPath);

            if (normalizedFilePath === normalizedDecodedPath ||
                normalizedFilePath.toLowerCase() === normalizedDecodedPath.toLowerCase()) {
                return match[0];
            }
        } catch (error) { }
    }
    return null;
}

function getMarkdownText(filePath) {
    const fileFullPath = app.vault.adapter.getFullPath(filePath);
    const fileContent = fs.readFileSync(fileFullPath, 'utf8');
    const markdownText = fileContent.replace(/^---[\s\S]*?---\n*/, '').replace(/\n\n/, "\n");
    return markdownText;
}

function copyToClipboard(extrTexts) {
    const txtArea = document.createElement('textarea');
    txtArea.value = extrTexts;
    document.body.appendChild(txtArea);
    txtArea.select();
    document.execCommand('copy');
    document.body.removeChild(txtArea);
}
```