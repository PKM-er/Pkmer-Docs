---
uid: 1793625606743000
title: "Obsidian 插件：Banxin Typography"
tags: ["样式与美化", "文字处理", "模板与链接处理", "学术与科研", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Banxin Typography

> [!Note] 插件名片
> - 插件名称：Banxin Typography
> - 插件作者：simon chen
> - 插件说明：
> - 插件分类：['样式与美化', '文字处理', '模板与链接处理', '学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/simoneven/obsidian-banxin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?banxin)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/simoneven/obsidian-banxin/master/README.md)



## 概述

Banxin Typography 旨在解决 Obsidian 中文笔记排版依赖代码或主题限制的问题，提供类似 Word 的图形化排版界面。它允许用户直观地设置中文字号、中英文分字体、行距、段前段后及首行缩进，并支持标题自动编号。插件内置国标公文、学术论文等现成模板，让用户无需编写任何 CSS 代码，即可通过可视化操作完成从字体选择到段落间距的精细调整，实现所见即所得的排版体验。

典型使用场景包括起草正式公文和撰写学术论文。例如，在起草通知或报告时，套用「国标公文」模板后，文档格式即接近正式文件标准，导出 PDF 后无需再回 Word 重新排版；在写论文时，可一键应用宋体小四、1.5 倍行距及 1/1.1/1.1.1 章节编号，快速满足学术规范。此外，长文作者也可利用「舒适阅读」模板优化字体与行距，提升阅读体验。

相比同类插件，其特色在于三层继承机制（主题→全局→元素），未设置的属性自动沿用主题，避免样式冲突。中英文分字体功能能自动拼合字体并调用真实粗体字面，确保加粗效果准确。标题编号仅在显示时生成，不修改 Markdown 原文，且能同步至 PDF 导出。此外，支持保存多套样式集并一键切换，甚至可通过 frontmatter 为单篇笔记指定独立样式，灵活应对不同文档需求。

使用前需注意，该插件仅限桌面版使用，且国标公文所需的方正小标宋等字体需自行安装（部分为商业字体）。编辑视图中，引用块和列表的段距仅在阅读视图和 PDF 中生效，且段距实现方式可能导致视觉上的细微差异。它不适合需要频繁修改表格边框背景、或在移动端使用、以及希望完全自定义底层 CSS 逻辑的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


