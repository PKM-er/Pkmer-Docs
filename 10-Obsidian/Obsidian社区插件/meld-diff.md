---
uid: 1793625616253001
title: "Obsidian 插件：Meld Diff"
tags: ["编辑工具", "效率工具", "文件管理", "obsidian插件"]
description: "Meld-style split diff and merge, plus configurable sync-conflict discovery. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Meld Diff

> [!Note] 插件名片
> - 插件名称：Meld Diff
> - 插件作者：Andrew Pullins
> - 插件说明：Meld-style split diff and merge, plus configurable sync-conflict discovery. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '效率工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/android272/meld-diff-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?meld-diff)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/android272/meld-diff-obsidian/master/README.md)



## 概述

Meld Diff 在 Obsidian 内部实现了类似桌面版 Meld 的双栏差异对比与合并功能。它允许用户直接比较库中的任意两个笔记，或者将尚未保存的粘贴文本与现有笔记进行对照。除了基础的文本比对，该插件还具备同步冲突发现能力，能自动识别并配对由 Syncthing、Nextcloud 等工具生成的冲突文件，帮助用户在手动合并时快速定位原始版本与冲突版本，从而在笔记库内完成完整的差异处理流程。

典型场景包括处理同步软件留下的 `.sync-conflict` 文件。当 Syncthing 或 Dropbox 在笔记旁生成冲突副本时，插件的冲突视图会列出这些文件对，点击即可加载到差异编辑器中，通过点击箭头或 Shift 点击来保留或删除特定代码块。另一个场景是内容整合，你可以从外部复制一段文字，将其与库内笔记进行差异对比，确认修改后直接保存为新笔记，无需离开 Obsidian 界面即可完成跨来源的内容比对与合并。

相比其他仅做简单文本高亮的插件，Meld Diff 的核心特色在于其操作逻辑与桌面版 Meld 完全一致，熟悉该工具的用户可无缝上手。它支持精细的块级操作，如仅在两侧均有文本时通过 Ctrl/Cmd 插入，以及自动保存已存在的笔记侧。此外，它原生支持移动端，在手机上以堆叠视图呈现，并通过文件栏按钮替代鼠标手势，确保在移动设备上也能高效处理差异。

需要注意的是，Meld Diff 并非 Git 客户端，也不直接连接 Syncthing 等同步服务，仅处理已存在的文件。它仅支持纯文本和 Markdown 格式，无法对比图片、PDF 或 Canvas 文件。如果你需要自动化的同步冲突解决、Git 版本控制集成，或者处理非文本文件的差异，此插件并不适合。它主要服务于手动合并和人工审阅场景，依赖用户自行判断保留哪部分内容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


