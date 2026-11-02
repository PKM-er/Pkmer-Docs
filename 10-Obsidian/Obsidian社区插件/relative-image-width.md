---
uid: 1793625620721001
title: "Obsidian 插件：Relative Image Width"
tags: ["图片与PDF", "样式与美化", "界面优化", "obsidian插件"]
description: "Sizes embedded images with percent, em, rem and viewport units in Reading view and Live Preview. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Relative Image Width

> [!Note] 插件名片
> - 插件名称：Relative Image Width
> - 插件作者：theluckystrike
> - 插件说明：Sizes embedded images with percent, em, rem and viewport units in Reading view and Live Preview. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '样式与美化', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/relative-image-width)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?relative-image-width)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/relative-image-width/master/README.md)



## 概述

Relative Image Width 解决了 Obsidian 原生仅支持像素单位调整图片宽度的局限，允许你在嵌入图片的链接中直接使用百分比、em、rem、vw 和 vh 等相对单位。这意味着你不再需要为不同屏幕尺寸手动计算像素值，而是可以定义图片相对于文本栏或视口的比例，从而在 Live Preview 和阅读视图中自动呈现一致的布局效果。

典型场景包括制作跨设备兼容的笔记或发布文档。例如，当你希望一张截图在手机上占据半屏宽度，而在电脑上保持适中大小时，只需写入 `![[photo.png|50%]]`，图片便会始终占据文本栏的一半宽度。另一个例子是使用 `![[chart.png|70em]]`，让图表宽度跟随字体大小变化，确保在调整全局字号时，图片与文字的比例依然协调，无需反复修改数值。

相比其他仅支持固定像素的插件，该工具的核心特色在于对相对单位的全面支持及 Pandoc 属性块的兼容。它不仅能处理简单的宽度设置，还支持 `50%x30%` 这样的宽高混合定义，并能在表格单元格中正确解析转义字符。此外，它提供了 Pro 功能，允许为未指定尺寸的图片设置默认大小，或通过笔记属性 `image-width` 单独控制特定笔记的图片宽度，提供了更精细的排版控制能力。

使用前需注意，该插件仅改变图片的显示方式，不会修改笔记文件内容，且仅作用于图片嵌入，不影响笔记或 PDF 嵌入。它不适合需要绝对像素精度的场景，因为相对单位会随容器变化。另外，部分高级功能如默认尺寸设置属于 Pro 付费功能，免费版本仅支持基础相对单位解析。若你的笔记中大量使用 Pandoc 属性块，需手动开启相应设置以避免格式冲突。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


