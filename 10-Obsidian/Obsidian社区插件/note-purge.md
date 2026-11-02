---
uid: 1793625618549000
title: "Obsidian 插件：Note Purge"
tags: ["文件管理", "搜索与排序", "效率工具", "obsidian插件"]
description: "Delete every note in the current search results at once, for example all notes with a given tag. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note Purge

> [!Note] 插件名片
> - 插件名称：Note Purge
> - 插件作者：Joel Reymont
> - 插件说明：Delete every note in the current search results at once, for example all notes with a given tag. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '搜索与排序', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/joelreymont/obsidian-note-purge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-purge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/joelreymont/obsidian-note-purge/master/README.md)



## 概述

Note Purge 旨在解决 Obsidian 中批量删除笔记繁琐的痛点，其核心功能是允许用户一次性删除当前搜索结果中的所有文件。通过集成到搜索界面，它让用户无需逐个手动移除，即可快速清理大量重复或过时的内容，极大提升了库管理的效率。

典型的使用场景包括定期归档或清理特定标签下的笔记。例如，当你想删除所有标记为 `#archive` 的旧笔记时，只需在搜索栏输入 `tag:#archive`，点击结果数量即可触发删除流程。同样，如果你点击标签视图中的某个标签，也能直接对匹配的所有笔记执行批量删除操作，省去了反复勾选的麻烦。

相比其他同类插件，Note Purge 的一个显著特点是其删除行为严格遵循 Obsidian 的全局设置。文件会被移至系统回收站、Vault 的 `.trash` 文件夹或永久删除，对话框会以红色醒目提示永久删除风险。此外，它支持嵌套标签匹配，且能兼容移动端，在手机上以底部弹窗形式呈现，确保跨设备体验一致。

使用前需注意，该插件依赖 Obsidian 内部事件机制，若未来版本更新导致事件变更，删除选项可能暂时消失。它仅删除笔记文件本身，不会连带删除笔记中引用的附件。因此，它不适合需要精细控制单个文件去留或希望保留附件关联的场景，更适合用于大规模、确定性的批量清理任务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


