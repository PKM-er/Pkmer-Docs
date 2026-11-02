---
uid: 1793625612306000
title: "Obsidian 插件：Drag and Drop Lines"
tags: ["编辑工具", "效率工具", "界面优化", "obsidian插件"]
description: "Drag and drop lines, list items, headings, callouts and code blocks in the editor. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Drag and Drop Lines

> [!Note] 插件名片
> - 插件名称：Drag and Drop Lines
> - 插件作者：anluhen
> - 插件说明：Drag and drop lines, list items, headings, callouts and code blocks in the editor. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/anluhen/obsidian-drag-drop)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?drag-n-drop-lines)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/anluhen/obsidian-drag-drop/master/README.md)



## 概述

Drag and Drop Lines 插件旨在解决 Obsidian 编辑器中手动调整内容顺序繁琐的问题，允许用户像使用大纲软件一样，通过鼠标拖拽直接移动笔记中的行、列表项、标题、引用块及代码块。其核心机制是识别行首的结构特征，当你拖动某一行时，插件会自动判断该行的层级关系，从而移动整个逻辑单元，而非孤立的单行文本，极大地提升了重组笔记结构的效率。

典型的使用场景包括快速调整文章段落顺序或重新排列待办事项。例如，当你撰写一篇长文时，若发现第二段的内容应移至文末，只需悬停该行左侧边缘出现的 `::` 手柄，将其拖至目标位置即可；或者在整理会议记录时，你可以直接拖动某个二级标题，将其下属的所有子标题和正文内容一并移动，无需逐行剪切粘贴，操作直观且符合直觉。

相比其他仅支持单行移动的插件，该工具的最大特色在于对复杂 Markdown 结构的智能识别。它能准确区分代码块内的注释与真正的标题，确保代码块作为整体移动，同时严格保护笔记顶部的 Frontmatter 属性区域不被误拖。此外，每次拖拽操作被视为单次编辑，这意味着你可以随时通过撤销快捷键恢复原状，降低了误操作的风险，让结构重组过程更加安全可控。

需要注意的是，该插件目前仅支持桌面端使用，因为拖拽功能依赖鼠标事件，移动端无法体验。它仅在实时预览和源码模式下生效，阅读视图不支持此功能。此外，嵌套的引用块和普通块引用目前仍按单行处理，无法作为整体拖动。如果你主要在手机端编辑，或频繁在只读模式下浏览笔记，此插件可能无法满足你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


