---
uid: 1793625605918000
title: "Obsidian 插件：Anchored Sort"
tags: ["文件管理", "搜索与排序", "界面优化", "obsidian插件"]
description: "Drag files and folders to a fixed spot in the file explorer while everything else keeps following the live sort order. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Anchored Sort

> [!Note] 插件名片
> - 插件名称：Anchored Sort
> - 插件作者：mehmet
> - 插件说明：Drag files and folders to a fixed spot in the file explorer while everything else keeps following the live sort order. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '搜索与排序', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mehmetaktas/obsidian-anchored-sort)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?anchored-sort)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mehmetaktas/obsidian-anchored-sort/master/README.md)



## 概述

Anchored Sort 解决了 Obsidian 文件资源管理器中“固定位置”与“实时排序”难以兼得的痛点。它允许你将选定的文件或文件夹拖拽到列表中的特定位置并锁定，同时让其余所有文件继续遵循你设置的排序规则（如按修改时间排序）。这意味着新创建或刚编辑过的笔记依然会自动跳到顶部，而被你锚定的项目则稳稳地留在你指定的地方，无需手动重新排序。

想象一下，你正在整理一个包含大量笔记的项目。你希望将“项目计划”和“待办清单”始终固定在列表最底部，以便随时快速访问，但又不希望它们干扰其他笔记按时间更新的动态顺序。使用 Anchored Sort，你只需将这两个文件拖到底部，它们就会保持不动；当你编辑其他笔记时，列表会自动更新，而这两个文件依然坚守原位。这种“动静结合”的方式让文件浏览既有序又灵活。

与传统的文件排序插件不同，Anchored Sort 不通过重命名文件、添加数字前缀或移动文件夹来维持顺序，而是通过记忆相对位置（从顶部或底部计数）来实现锚定。它采用了一种兼容性的技术实现方式，能够与大多数其他插件共存，且当 Obsidian 内部机制更新导致兼容性问题时，插件会安全地回退到默认排序，而不会破坏文件浏览器的功能。此外，它支持多选操作，并提供了右键菜单和命令面板等多种操作入口，方便不同习惯的用户使用。

需要注意的是，由于 Obsidian 没有公开的文件排序 API，该插件通过包装内部方法工作，因此不建议与其他同样用于重排文件资源管理器的插件（如 Custom File Explorer sorting）同时使用，以免产生冲突。如果你需要的是完全静态的文件列表，或者希望插件能自动根据内容智能分类文件，那么 Anchored Sort 可能不是最佳选择，因为它仅处理手动锚定的位置，不改变文件的实际存储结构。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


