---
uid: 1791709371130000
title: 'Obsidian 插件：Write Tweet Thread'
tags: ['文字处理', '编辑工具', '社交与社区', 'obsidian插件']
description: 'Write social threads from Markdown notes with a live Chirr-style preview, word-aware 280-character slicing, counters, and manual split markers. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Write Tweet Thread

> [!Note] 插件名片
> - 插件名称：Write Tweet Thread
> - 插件作者：thehumaneclub
> - 插件说明：Write social threads from Markdown notes with a live Chirr-style preview, word-aware 280-character slicing, counters, and manual split markers. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '社交与社区', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/thehumaneclub/write-tweet-thread)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?write-tweet-thread)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/thehumaneclub/write-tweet-thread/master/README.md)



## 概述

**主要功能**
该插件允许用户在 Obsidian 中直接撰写社交媒体长推文（Thread）。它将 Markdown 笔记实时转换为 Chirr 风格的线程预览界面，支持自动将文本切分为符合 280 字符限制的卡片，并提供实时字数统计。

**适用场景**
适合需要在 Obsidian 中起草、修改并预览社交媒体帖子（如 Twitter/X 长推）的用户。特别适合习惯使用 Markdown 记录内容，且希望在不离开笔记软件的情况下完成社交内容创作的场景。

**核心特色**
1. **智能切片**：具备“词感知”能力，自动在 280 字符处换行，尽量避免切断单词。
2. **手动控制**：支持通过输入 `[...]` 标记手动强制开启新的线程卡片。
3. **实时反馈**：侧边栏显示实时预览，每张卡片带有字数徽章（如 145/280），并高亮显示超出限制的文本。

**使用建议**
1. **安装**：从 GitHub Release 下载 `main.js`、`manifest.json` 和 `styles.css`，放入 Vault 的 `.obsidian/plugins/chirr-thread-preview` 文件夹，并在设置中启用。
2. **排版技巧**：利用 `[...]` 精确控制段落分割，确保阅读节奏；关注高亮提示，及时调整内容以符合字符限制。
3. **开发注意**：若需修改源码，需使用 esbuild 将 TypeScript 编译为 JavaScript 后替换插件文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


