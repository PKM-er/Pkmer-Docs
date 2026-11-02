---
uid: 1793625618239000
title: "Obsidian 插件：Nested list numbers"
tags: ["样式与美化", "编辑工具", "界面优化", "obsidian插件"]
description: "Shows parent numbers on nested numbered lists (1.2.3.) in Live Preview, stable while scrolling. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Nested list numbers

> [!Note] 插件名片
> - 插件名称：Nested list numbers
> - 插件作者：jase
> - 插件说明：Shows parent numbers on nested numbered lists (1.2.3.) in Live Preview, stable while scrolling. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编辑工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jaskaran-sethy/obsidian-nested-list-numbers)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?nested-list-numbers)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jaskaran-sethy/obsidian-nested-list-numbers/master/README.md)



## 概述

Nested list numbers 旨在解决 Obsidian 中嵌套有序列表编号显示不完整的问题。在 Live Preview 和 Source 模式下，它会自动计算并显示完整的层级编号，例如将第二层下的第一项显示为 2.2.1. 而非简单的 1.。该插件的核心优势在于其编号逻辑基于整篇笔记内容而非当前屏幕可见行，因此即使快速滚动页面，编号也能保持准确稳定，避免了因局部渲染导致的编号错乱或重置现象。

典型使用场景包括撰写结构化文档或技术手册。例如，在编写包含多级步骤的操作指南时，你可以清晰地看到“3.1.2.”这样的具体步骤编号，方便读者快速定位和引用。另一个场景是整理复杂的会议记录或项目计划，当列表层级较深时，完整的层级编号能极大提升文档的可读性和逻辑清晰度，让读者一目了然地理解条目之间的从属关系。

相比其他仅处理当前视口或简单替换文本的同类插件，Nested list numbers 特别强调了滚动时的稳定性。它通过全局计算确保编号在任何滚动位置都正确无误，这在处理长文档时尤为关键。此外，该插件支持移动端，无论是浅色还是深色主题，都能正常显示嵌套编号，保证了跨设备阅读体验的一致性。对于需要频繁编辑长列表的用户来说，这种无需手动维护编号、自动同步全局状态的能力显著降低了维护成本。

需要注意的是，该插件仅适用于编辑视图（Live Preview 和 Source mode）。如果你希望在阅读视图（Reading view）中也看到相同的编号效果，需要额外复制并启用插件提供的 CSS 代码片段。因此，如果你主要依赖阅读模式浏览笔记，或者对编号格式有非常特殊的自定义需求（如非数字层级），该插件可能无法直接满足。此外，由于它依赖笔记整体结构，在极端复杂的混合列表结构中，建议先测试其兼容性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


