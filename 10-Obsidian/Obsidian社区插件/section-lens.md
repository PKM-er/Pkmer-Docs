---
uid: 1793625621045000
title: "Obsidian 插件：Section Lens"
tags: ["编辑工具", "界面优化", "效率工具", "obsidian插件"]
description: "Focus on one heading section or follow the minimal heading branch at your cursor. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Section Lens

> [!Note] 插件名片
> - 插件名称：Section Lens
> - 插件作者：davison
> - 插件说明：Focus on one heading section or follow the minimal heading branch at your cursor. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chrisdavison/section-lens)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?section-lens)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisdavison/section-lens/master/README.md)



## 概述

Section Lens 旨在解决长文档中上下文丢失的问题，通过聚焦光标所在的标题层级，自动折叠无关内容以突出当前阅读或编辑区域。它提供两种核心模式：一种是展开光标所在顶级章节并折叠其他顶级章节，另一种是仅展开光标标题及其祖先节点，折叠其余所有分支。这种机制让你能始终看清光标周围的逻辑结构，而无需手动反复折叠或展开大纲。

想象你正在撰写一篇包含多个主要章节的技术文档，光标位于“第三章”的某个子标题下。启用“滚动折叠”模式后，插件会立即隐藏第一、二章及第四章的内容，仅保留第三章及其子结构可见，让你专注于当前段落。若你切换到“聚焦章节”模式，则整个第三章的所有子标题都会展开，方便你快速浏览该章节全貌，同时其他章节保持折叠状态，极大减少了视觉干扰。

与依赖滚动位置或手动操作的折叠工具不同，Section Lens 严格跟随光标移动，而非页面滚动，确保你看到的结构始终与当前编辑点一致。它利用 Obsidian 原生折叠 API，兼容“同步大纲折叠”等插件，且支持实时预览和源码模式。此外，每个编辑器面板独立管理状态，互不干扰，适合多窗口工作流。

需注意，该插件不支持阅读视图，且模式不会在应用重启后保留。若你习惯在阅读模式下浏览笔记，或需要跨会话保持特定折叠状态，此插件可能不适用。此外，它仅处理标准 Markdown 标题，列表或代码块内的标题不会被识别为文档结构。建议在开始使用前，根据需求配置“停止模式”下的折叠恢复策略，以避免意外丢失手动调整的折叠状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


