---
uid: 1793625609008000
title: "Obsidian 插件：Canvas Word + PDF Export"
tags: ["图片与PDF", "文字处理", "效率工具", "obsidian插件"]
description: "Export a canvas to PDF or Word, either as drawn or as running text that follows the arrows. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Canvas Word + PDF Export

> [!Note] 插件名片
> - 插件名称：Canvas Word + PDF Export
> - 插件作者：Henrik Korslind
> - 插件说明：Export a canvas to PDF or Word, either as drawn or as running text that follows the arrows. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/sm7urw/canvas-word-pdf-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-word-pdf-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/sm7urw/canvas-word-pdf-export/master/README.md)



## 概述

Canvas Word + PDF Export 解决了 Obsidian 画布（Canvas）难以直接转化为正式文档的痛点。它提供两种核心导出模式：一是“按箭头顺序”将画布内容重组为连贯的文本流，保留 Markdown 格式；二是“按原样”将画布布局直接渲染为 PDF，完整保留节点位置、颜色及箭头关系。这种双模式设计让用户既能获得结构化的阅读文档，也能保留视觉化的思维地图。

典型场景包括将头脑风暴后的画布整理成会议记录或项目大纲。例如，你可以将分散的灵感节点通过箭头连接，导出为一份逻辑清晰的 Word 文档，其中分组名称自动转为标题，箭头标签变为引导性文字。另一个场景是制作演示材料，通过“按原样”导出功能，将复杂的流程图或架构图直接转为 PDF，方便在无法安装 Obsidian 的设备上查看，且支持文本选中与搜索。

相比同类插件，该工具的最大特色在于对移动端（iOS/iPadOS）的完整支持，允许在平板上直接导出文档。此外，它不依赖浏览器打印引擎，确保跨平台输出一致性。在“按原样”导出时，若遇到空白页问题，插件会自动回退到基于图像的 PDF 生成，并附带不可见文本层，既保证视觉效果又维持了可搜索性。所有处理均在本地完成，无网络请求或数据追踪，隐私安全性高。

使用前需注意，PDF 文档导出使用 Roboto 字体，可能导致表情符号或生僻字符缺失，而 Word 格式则能完整保留。此外，“按原样”导出仅限桌面端使用，且节点内长文本会被裁剪以适配框体。该插件不适合需要复杂排版或自动更新链接的场景，若你的需求是生成可交互的网页或需要频繁同步外部数据，此插件可能无法满足。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


