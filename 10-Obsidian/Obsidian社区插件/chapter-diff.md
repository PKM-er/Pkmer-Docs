---
uid: 1791709365953000
title: 'Obsidian 插件：Chapter Diff'
tags: ['编辑工具', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Compare the working version of a note with any past Git commit, side by side with inline diff highlighting. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Chapter Diff

> [!Note] 插件名片
> - 插件名称：Chapter Diff
> - 插件作者：Beppe
> - 插件说明：Compare the working version of a note with any past Git commit, side by side with inline diff highlighting. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/beppepic/chapter-diff)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chapter-diff)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/beppepic/chapter-diff/master/README.md)



## 概述

**Chapter Diff** 是一款专为长篇写作设计的 Obsidian 插件，核心功能是将当前笔记与 Git 历史版本进行并排对比。

**主要功能**：左侧显示只读的历史版本，右侧为可编辑的当前工作区。插件自动高亮显示文本差异（红色为删除，绿色为新增），并将未修改的长段落折叠，方便快速定位变更。

**适用场景**：适用于依赖 Git 进行版本管理的桌面端 Obsidian 库，特别适合长文写作、章节修订及需要回溯特定历史状态进行对照修改的场景。

**核心特色**：
1. **实时同步编辑**：右侧编辑内容自动保存至笔记，且与常规编辑器标签页保持同步。
2. **智能追踪**：即使笔记在 Git 中重命名，仍能正确关联旧版本。
3. **安全无副作用**：仅写入当前编辑的笔记，绝不执行 Git 提交、推送或分支切换等危险操作。
4. **流畅体验**：支持在不关闭对比窗口的情况下切换不同历史版本。

**使用建议**：需配合 obsidian-git 插件使用。建议在设置中手动绑定快捷键（如 `⌥⇧⌘D`）以快速唤起对比视图，从而提升长篇内容的修订效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


