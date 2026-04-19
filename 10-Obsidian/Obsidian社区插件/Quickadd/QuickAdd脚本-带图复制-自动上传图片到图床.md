---
uid: 20240512102955
title: QuickAdd 脚本 - 带图复制 - 自动上传图片到图床
tags: [图床, 笔记分享]
description: 带图复制 - 自动上传图片到图床，便于复制到其他在线平台
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240512140551
---

# QuickAdd 脚本 - 带图复制 - 自动上传图片到图床

![2024-05-06_QuickAdd脚本-带图复制-自动上传图片到图床_IMG-1.gif](https://cdn.pkmer.cn/images/202405121043617.gif!pkmer)

## 需求分析

![2024-05-06_QuickAdd脚本-带图复制-自动上传图片到图床_IMG-4.png](https://cdn.pkmer.cn/images/202405121030951.png!pkmer)

有时候我们想要分享自己的笔记到网络上。但 Obsidian 笔记本身存在 WIKI 链接语法以及图片保存在本地，不太方便转换。希望有一种方法可以将包含本地图片的 Markdown 文章一键转换为在知乎、CSDN 等网站上能够正确显示图片的形式，以便分享更加便捷，内容展示更完整。

## 实现方法

最好的办法就是将图片上传到图床，但又不想改变笔记原来的结构，只想把图片保留到本地，因此该脚本的作用就是自动检测复制文本中存在的本地图片链接，将图片上传到图床替换为在线 Markdown 图片格式。

1. 检测本地图片链接
2. 图片上传至图床
    1. PS: 上传的是 PicGo 的接口，图床设置请自行了解
3. 替换 Markdown 文章中图片链接
4. 发送到剪切板并提示

> PS: 本方法灵感来源于 Ob 群友**新奥尔良烤乳猪**和**简哲**之间的讨论。

直接的 Markdown 可能不能直接转到知乎，微信等平台，目前还不支持自动识别 Markdown 语法，可以借助 [墨滴](https://www.mdnice.com/) 来辅助转换一下哈，这样各个平台都比较好转发，以及知乎、微信之类的会自动识别图片链接上传到它们自己的图床上。

## 脚本思路

最好的办法就是将图片上传到图床，但又不想改变笔记原来的结构，只想把图片保留到本地，因此该脚本的作用就是自动检测复制文本中存在的本地图片链接，将图片上传到图床替换为在线 Markdown 图片格式。

1. 检测本地图片链接
2. 图片上传至图床
    1. PS: 上传的是 PicGo 的接口，图床设置请自行了解
3. 替换 Markdown 文章中图片链接
4. 发送到剪切板并提示

> PS: 本方法灵感来源于 Ob 群友**新奥尔良烤乳猪**和**简哲**之间的讨论。

此脚本只为方便上传图片和复制格式为 Markdown 格式文本，直接的 Markdown 不能直接转到知乎，微信等平台，目前还不支持自动识别 Markdown 语法，但可以借助 [墨滴  5](https://www.mdnice.com/) 来辅助转换一下为对应的格式即可，同时知乎、微信之类的会自动识别图片链接上传到它们自己的图床上。

如果只是少数笔记需要发布的话，可以使用 [[copy-document-as-html|copy document as html]] 插件来通过复制到微信公众号或 CSDN 等富文本编辑器支持的平台，知乎的话其实用 vscode 的 zhihu 插件，持富文本编辑器的直接粘贴 html 就会转换。

## 不足之处

-   相同文档多次复制会重复上传已有图片
-   如果一行多个图片的话，正则匹配不到

## 脚本源码

```js
const path = require('path');

module.exports = async () => {
    // 0. 基础环境检查
    if (typeof app === 'undefined') {
        console.error("未找到 Obsidian 环境");
        return;
    }

    // 1. 获取当前活跃视图
    const activeView = app.workspace.getActiveViewOfType(Object.getPrototypeOf(app.workspace.activeLeaf.view).constructor);
    if (!activeView || activeView.getViewType() !== 'markdown') {
        new Notice("❌ 请在 Markdown 编辑器中使用此脚本");
        return;
    }

    const { editor, file } = activeView;
    const fileName = file ? file.basename : "image";
    const uploadUrl = "http://127.0.0.1:36677/upload";

    // 2. 获取选中文本
    let selection = editor.getSelection();
    if (!selection) {
        new Notice("⚠️ 请先选择包含图片的文本内容");
        return;
    }

    const files = app.vault.getFiles();
    const lines = selection.split("\n");
    let processedContent = [];
    let stats = { total: 0, success: 0, fail: 0 };

    // 3. 预识别图片任务
    const imageTasks = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const embedPath = matchSelectionEmbed(line);
        if (embedPath && /\.(png|jpg|jpeg|gif|bmp|webp)$/i.test(embedPath)) {
            imageTasks.push({ index: i, embedPath, line });
        }
    }

    if (imageTasks.length > 0) {
        new Notice(`🚀 正在上传 ${imageTasks.length} 张图片到目标服务器...`, 2000);
    } else {
        // 如果没有图片，直接复制选中文本并提示
        await copyToClipboard(selection);
        new Notice(`✅ 已成功复制选中文本`);
        return;
    }

    // 4. 遍历处理每一行
    for (let i = 0; i < lines.length; i++) {
        const task = imageTasks.find(t => t.index === i);
        if (!task) {
            processedContent.push(lines[i]);
            continue;
        }

        stats.total++;
        const { embedPath, line } = task;
        const wikiPath = findFilePath(files, embedPath);

        if (!wikiPath) {
            new Notice(`❌ 库中未找到图片: ${embedPath}`, 5000);
            processedContent.push(line);
            stats.fail++;
            continue;
        }

        const absolutePath = app.vault.adapter.getFullPath(wikiPath);
        
        try {
            const data = await uploadFiles([absolutePath], uploadUrl);
            
            if (data && data.success) {
                // 构造新链接。使用当前文档名作为 alt 文本，或保留原始 alt
                const imgWiki = `![[${embedPath}]]`;
                const imgLink = `![${fileName}](${data.result})`;
                
                // 替换逻辑：优先替换 Wiki 链接，如果不匹配则尝试替换 Markdown 链接格式
                let newLine = line.replace(imgWiki, imgLink);
                if (newLine === line) {
                    const mdRegex = /!\[.*?\]\(.*?\)/;
                    newLine = line.replace(mdRegex, imgLink);
                }
                
                processedContent.push(newLine);
                stats.success++;
            } else {
                new Notice(`❌ 上传失败: ${path.basename(absolutePath)}`, 5000);
                processedContent.push(line);
                stats.fail++;
            }
        } catch (error) {
            console.error("Upload error:", error);
            new Notice(`❌ 网络请求失败: ${error.message}`, 5000);
            processedContent.push(line);
            stats.fail++;
        }
    }

    // 5. 组装结果并复制到剪贴板
    const finalResult = processedContent.join("\n");
    await copyToClipboard(finalResult);

    // 6. 最终结果提示
    const noticeMsg = `✅ 处理完成\n成功: ${stats.success}\n失败: ${stats.fail}`;
    new Notice(noticeMsg, 5000);
};

/**
 * 从文本行中提取图片链接路径
 */
function matchSelectionEmbed(text) {
    // 兼容 ![[filename.png]] 和 ![alt](path/to/image.png)
    const regex = /!\[\[?([^\]]*?)(\|.*)?\]\]?\(?([^)\n]*)\)?/;
    const matches = text.match(regex);
    if (!matches) return null;
    
    // matches[3] 为 Markdown 格式路径，matches[1] 为 Wiki 格式路径
    const foundPath = matches[3] || matches[1];
    return foundPath ? decodeURIComponent(foundPath.trim()) : null;
}

/**
 * 在库中查找匹配的文件路径（不区分大小写）
 */
function findFilePath(files, embedPath) {
    const targetBase = path.basename(embedPath).toLowerCase();
    const match = files.find(f => {
        const fBase = path.basename(f.path).toLowerCase();
        return fBase === targetBase;
    });
    return match ? match.path : null;
}

/**
 * 调用接口上传文件。直接使用 Obsidian 的 requestUrl 避免跨域
 */
async function uploadFiles(imagePathList, url) {
    const response = await requestUrl({
        url: url,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ list: imagePathList }),
    });
    return response.json;
}

/**
 * 复制到系统剪贴板
 */
async function copyToClipboard(text) {
    try {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
        } else {
            // 回退方案
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        }
    } catch (err) {
        console.error("Clipboard Error:", err);
        new Notice("❌ 复制到剪贴板失败");
    }
}

```

## Reference

-   [[自定义Excalidraw脚本-上传画板中的图片到图床]]
-   [[QuickAdd脚本-移动子笔记或附件到当前文件夹]]
