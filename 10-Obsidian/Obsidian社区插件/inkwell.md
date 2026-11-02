---
uid: 1793625614233000
title: "Obsidian 插件：Inkwell"
tags: ["样式与美化", "文字处理", "编辑工具", "obsidian插件"]
description: "Color, highlight, size and style font families for selected text with inline HTML spans. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inkwell

> [!Note] 插件名片
> - 插件名称：Inkwell
> - 插件作者：westkronos147
> - 插件说明：Color, highlight, size and style font families for selected text with inline HTML spans. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '文字处理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/martinbixente89-lab/obsidian-inkwell)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inkwell)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/martinbixente89-lab/obsidian-inkwell/master/README.md)



## 概述

Inkwell 是一款专为 Obsidian 设计的视觉内联样式插件，旨在解决标准 Markdown 语法无法支持文字颜色、自定义高亮、字体大小及字体家族等丰富排版需求的问题。它通过一个简洁的上下文浮动工具栏，让用户能够直接对选中的文本应用加粗、斜体、下划线、删除线以及更复杂的视觉样式。所有格式均以标准 HTML `<span>` 标签直接存储在 Markdown 笔记中，既保持了笔记的纯文本可读性，又确保了样式在任何支持 HTML 的渲染器中都能正常显示，避免了私有格式带来的兼容性问题。

典型使用场景包括在撰写文档时，需要突出关键术语或区分不同层级的信息。例如，你可以将核心概念设置为红色加粗，将次要说明设置为灰色小字，或者为不同章节的标题应用特定的字体家族。另一个场景是整理学习笔记时，利用自定义高亮功能调整背景色的透明度和圆角，使重点标记既醒目又不刺眼，同时通过快速编辑弹窗在不破坏标签结构的前提下修改文字内容，极大提升了排版效率。

相比同类插件，Inkwell 的最大特色在于其“零 Markdown 分隔符污染”的设计。它不会生成 `**` 或 `~~` 等符号，而是将所有样式整合在统一的 HTML 标签中，支持独立移除某种样式（如仅去除颜色而保留加粗），并在样式全部移除时自动清理标签。此外，它提供了精细的高亮外观定制选项，包括不透明度、圆角、行高和垂直偏移，以及本地字体导入功能，允许用户加载 `.ttf` 或 `.woff` 文件，实现高度个性化的视觉体验。

使用前需注意，Inkwell 的格式跨度不能跨越多个段落，若需对多段文字应用相同样式，需逐段操作。此外，在不支持 HTML 渲染的纯文本编辑器中，用户将看到原始的 `<span>` 标签而非格式化效果。因此，如果你主要依赖纯文本环境进行协作，或需要频繁在跨段落的大范围文本上应用统一样式，该插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


