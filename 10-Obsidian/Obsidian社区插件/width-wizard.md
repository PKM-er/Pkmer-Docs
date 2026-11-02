---
uid: 1793625624501000
title: "Obsidian 插件：Width Wizard"
tags: ["界面优化", "表格", "编辑工具", "obsidian插件"]
description: "Widen the text column of your notes and resize table columns by dragging their borders. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Width Wizard

> [!Note] 插件名片
> - 插件名称：Width Wizard
> - 插件作者：Ferhat Yurdakul
> - 插件说明：Widen the text column of your notes and resize table columns by dragging their borders. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '表格', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ferhatyurdakul/width-wizard)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?width-wizard)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ferhatyurdakul/width-wizard/master/README.md)



## 概述

Width Wizard 旨在解决 Obsidian 默认 700px 窄文本栏导致的阅读局限，以及 Markdown 表格无法直观调整列宽的痛点。它提供两项核心功能：一是允许用户将笔记文本栏宽度自定义为 400 至 3000px 或占满整个面板，打破默认限制；二是支持通过鼠标拖拽表格列边框来实时调整列宽，操作直观且即时生效，让笔记排版更符合视觉习惯。

典型场景包括撰写长文时希望利用更宽的屏幕空间以提升阅读舒适度，或制作包含多列数据的对比表格时，需要手动调整各列比例以优化信息呈现。例如，在整理项目进度表时，你可以直接拖动“备注”列的边框使其变宽，以便容纳更多文字，而无需修改代码或调整字体大小。

相比其他同类插件，Width Wizard 的特色在于其灵活的宽度存储机制。用户可选择将列宽保存在插件数据中，保持笔记文件纯净；或选择写入笔记文件，通过隐藏注释实现宽度随文件同步、复制和 Git 版本控制。此外，它支持在实时预览、源码和阅读模式下切换自定义行宽，且拖拽操作支持取消与重置，细节处理完善。

使用前需注意，若选择“写入笔记”模式，每次调整列宽都会在表格下方生成一行隐藏注释，虽然插件会自动隐藏该注释，但在源码模式下可见，且极端情况下可能影响光标行为。该插件不支持在嵌入片段中直接调整表格宽度，也不支持嵌套表格或由其他插件生成的动态表格。如果你主要使用触控设备，虽然可以看到已保存的宽度，但无法进行拖拽调整。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


