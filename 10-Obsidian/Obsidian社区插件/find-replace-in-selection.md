---
uid: 1793625612912000
title: "Obsidian 插件：Find + Replace in Selection"
tags: ["编辑工具", "文字处理", "效率工具", "obsidian插件"]
description: "Find and replace limited to the selected text. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Find + Replace in Selection

> [!Note] 插件名片
> - 插件名称：Find + Replace in Selection
> - 插件作者：Manoj
> - 插件说明：Find and replace limited to the selected text. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/manojkarthick/obsidian-find-replace-selection)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?find-replace-in-selection)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/manojkarthick/obsidian-find-replace-selection/master/README.md)



## 概述

Find + Replace in Selection 解决了 Obsidian 原生查找替换功能无法限定范围的问题。它允许用户仅在当前选中的文本块内执行查找与替换操作，避免误改文档其他部分的内容。核心功能包括在选区内高亮匹配项、显示匹配数量，并支持逐个或批量替换，操作逻辑与原生搜索保持一致，即区分大小写但匹配为字面量。

典型场景如整理长文档中的特定段落。例如，当你选中一段代码或笔记片段，想将其中的变量名 `old_var` 统一改为 `new_var`，而不影响全文其他地方的同名变量时，该插件能精准锁定选区进行替换。另一个例子是处理多段选区，你可以同时选中文档中分散的几个部分，插件会在这几个选区内同时执行查找替换，极大提升了局部编辑的效率。

相比同类插件，该工具支持多选区操作，这是许多简单替换插件不具备的能力。此外，它提供了直观的交互体验，匹配项会在笔记中实时高亮，对话框内可显示匹配总数，并通过箭头按钮在匹配项间跳转。对话框本身支持拖拽移动，方便在复杂布局中调整位置，且位置在会话期间保持不变。插件仅使用 Obsidian 公共 API，确保了与核心功能的兼容性和稳定性。

使用前需注意，该插件的匹配规则与 Obsidian 内置搜索相同，即忽略大小写且为字面量匹配，不支持正则表达式。如果你需要基于正则表达式的复杂替换，或者希望替换操作跨越整个文档而非限定于选区，此插件可能无法满足需求。此外，虽然“全部替换”操作支持一次性撤销，但在进行大规模替换前，建议先确认选区范围准确，以避免意外修改。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


