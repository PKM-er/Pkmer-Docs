---
uid: 1793625620126000
title: "Obsidian 插件：Plain Text Tables"
tags: ["表格", "编辑工具", "界面优化", "obsidian插件"]
description: "Shows a Markdown table as plain text in Live Preview while the cursor is in it, and renders it again when the cursor leaves. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Plain Text Tables

> [!Note] 插件名片
> - 插件名称：Plain Text Tables
> - 插件作者：theluckystrike
> - 插件说明：Shows a Markdown table as plain text in Live Preview while the cursor is in it, and renders it again when the cursor leaves. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '编辑工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/plain-text-tables)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plain-text-tables)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/plain-text-tables/master/README.md)



## 概述

Plain Text Tables 旨在解决 Obsidian 1.5.3 版本后 Live Preview 模式下无法直接编辑 Markdown 表格源码的问题。该插件的核心功能是在光标进入表格时，自动将该表格还原为带有管道符的纯文本行，允许用户像源码模式一样直接编辑表格结构；当光标移出表格后，表格会立即恢复为 Obsidian 默认的可视化渲染样式，其余部分的笔记内容始终保持 Live Preview 状态，无需手动切换整个笔记的模式。

典型使用场景包括需要频繁调整表格列宽或添加新行的情况。例如，当你正在整理一份包含大量数据的阅读清单时，可以直接在 Live Preview 中通过键盘上下键进入表格，快速插入以管道符开头的新行，而无需退出当前视图。另一个场景是修复复杂的表格格式，你可以直接修改分隔行的对齐符号，编辑完成后将光标移开，表格便会自动重新渲染，极大提升了编辑效率。

相比同类插件，Plain Text Tables 的最大特色在于其“局部化”处理机制：它仅改变光标所在表格的显示形式，同一笔记中的其他表格仍保持正常的可视化渲染，避免了全局切换源码模式带来的视觉干扰。此外，Pro 版本提供了列对齐功能，在光标离开表格时自动填充空格以对齐管道符，并支持一键对齐当前表格，使 Markdown 源码在文件中更加整洁易读。

使用前需注意，该插件仅作用于 Live Preview 模式，在源码模式或阅读视图中无效。它依赖 Obsidian 内部非公开 API 机制，若 Obsidian 更新导致兼容性问题，插件可能会停止工作并提示用户。此外，免费版不会修改表格内容，但 Pro 版的对齐功能会在你编辑并离开表格时自动调整空格，若你希望保持原始空格格式不变，建议关闭此设置。该插件不适合需要在阅读视图中编辑表格，或完全依赖 Obsidian 原生表格编辑器拖拽功能的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


