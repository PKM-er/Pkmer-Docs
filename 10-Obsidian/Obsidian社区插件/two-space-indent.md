---
uid: 1793625614192000
title: "Obsidian 插件：Indent with Spaces"
tags: ["编辑工具", "快捷键", "效率工具", "obsidian插件"]
description: "Make Tab indent by 2 spaces and Shift+Tab unindent by 2 spaces. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Indent with Spaces

> [!Note] 插件名片
> - 插件名称：Indent with Spaces
> - 插件作者：leondgarse
> - 插件说明：Make Tab indent by 2 spaces and Shift+Tab unindent by 2 spaces. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '快捷键', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/leondgarse/obsidian-indent-with-spaces)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?two-space-indent)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/leondgarse/obsidian-indent-with-spaces/master/README.md)



## 概述

Indent with Spaces 旨在解决 Obsidian 1.8 版本后，关闭“使用制表符缩进”时 Tab 键固定插入 4 个空格的问题。该插件的核心功能是重新定义 Tab 和 Shift+Tab 的行为，使其默认按 2 个空格进行缩进和反缩进。用户可以在设置中灵活调整每次缩进的空格数，范围从 1 到 8 个，从而让代码块或列表的层级结构更符合个人习惯，避免过宽的缩进导致行宽浪费。

典型使用场景包括整理多层级列表或代码块。例如，当你选中一段多行代码或列表项时，按下 Tab 键即可整体向右移动两个空格，Shift+Tab 则向左移动。这在将代码块嵌入列表项下方，或调整 Markdown 表格与正文的相对位置时非常实用，能够保持文档视觉上的整齐划一，无需手动逐个添加空格。

相比原生行为，该插件在细节处理上更为智能。它仅在光标位于行首空白处或列表项上时生效，若光标在普通文本中间，则不会拦截 Tab 键，从而保留其他插件或 Obsidian 默认行为。此外，它与 Advanced Tables 插件深度兼容，在表格中 Tab 键可正常切换单元格，而非错误地增加缩进，确保了在复杂文档编辑中的流畅体验。

需要注意的是，该插件仅处理行首缩进，若缩进列表项，其子项不会自动跟随移动，需手动选中子项一起操作。因此，它不适合需要复杂自动缩进逻辑或依赖 Tab 键在文本中间执行特定命令的高级工作流。如果你主要使用制表符（Tab 字符）而非空格进行排版，或者对缩进宽度没有特定偏好，安装此插件可能并无必要。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


