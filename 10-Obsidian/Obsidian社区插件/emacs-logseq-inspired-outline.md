---
uid: 1793625612508000
title: "Obsidian 插件：Emacs Logseq Inspired Outline"
tags: ["编辑工具", "快捷键", "效率工具", "obsidian插件"]
description: "Outliner editing inspired by Logseq and Emacs: Esc to select whole list blocks, move between blocks, wrap selections in pairs, jump to the parent block, create a sibling at the end of the level, group rows, and convert block types. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Emacs Logseq Inspired Outline

> [!Note] 插件名片
> - 插件名称：Emacs Logseq Inspired Outline
> - 插件作者：马自立
> - 插件说明：Outliner editing inspired by Logseq and Emacs: Esc to select whole list blocks, move between blocks, wrap selections in pairs, jump to the parent block, create a sibling at the end of the level, group rows, and convert block types. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '快捷键', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/matsurimw/emacs-logseq-inspired-outline)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?emacs-logseq-inspired-outline)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/matsurimw/emacs-logseq-inspired-outline/master/README.md)



## 概述

Emacs Logseq Inspired Outline 旨在弥补 Obsidian 在大纲编辑上的缺失，将 Logseq 的块级操作与 Emacs 的导航逻辑引入列表编辑。核心功能包括按 Esc 键选中整个列表块及其子项，支持在块之间移动、扩展选区、删除块，以及通过快捷键为选中的块批量设置任务状态（如 TODO、DONE）。此外，它允许将选中文本包裹在括号或引号中，并支持在无序列表、有序列表和段落之间快速转换格式，让列表操作更贴近专业大纲工具的体验。

典型场景如撰写项目计划时，你可以用 Esc 选中一个包含多个子任务的主条目，直接按方向键将其移动到文档其他位置，无需手动剪切粘贴。在整理笔记时，若需将一组平级条目归纳为子项，只需选中它们并按 ⌘⌥↓，插件会自动插入父级标题并调整缩进。这种操作方式特别适合处理层级复杂、需要频繁重组结构的长文档，能显著减少鼠标点击和手动调整缩进的繁琐步骤。

相比其他增强列表功能的插件，该插件的特色在于深度融合了 Emacs 的导航习惯，例如 ⌘⌥↑ 可快速跳转至父级条目，⌘Enter 能在同级末尾自动创建新项并延续编号。它还提供了类似 Logseq 的侧边栏体验，支持在右侧栏堆叠打开多个笔记，并保留折叠状态。这种设计不仅提升了编辑效率，还通过统一的侧边栏管理逻辑，让多笔记并行查看更加直观，尤其适合习惯使用 Emacs 或 Logseq 的用户无缝迁移工作流。

使用前需注意，该插件主要优化列表编辑，若你的笔记以纯文本段落为主，其价值可能有限。部分快捷键如 Esc 和方向键被固定用于块操作，可能与原有习惯冲突，建议在设置中检查并调整其他命令的绑定。此外，插件依赖列表结构，对非列表内容的支持较少，不适合需要复杂表格或代码块高级编辑的场景。安装后请确认未与其他修改列表行为的插件产生冲突，以确保操作逻辑的一致性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


