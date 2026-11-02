---
uid: 1793625620215000
title: "Obsidian 插件：Presenter"
tags: ["样式与美化", "界面优化", "效率工具", "obsidian插件"]
description: "Present your Markdown notes as clean, styled slides with frontmatter theming and multi-column grids. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Presenter

> [!Note] 插件名片
> - 插件名称：Presenter
> - 插件作者：Hisashi
> - 插件说明：Present your Markdown notes as clean, styled slides with frontmatter theming and multi-column grids. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xhisashix/obsidian-plugin-presenter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markdown-presenter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xhisashix/obsidian-plugin-presenter/master/README.md)



## 概述

Presenter 将 Markdown 笔记直接转换为风格整洁的演示幻灯片，核心在于保留你原有的笔记工作流。它利用标准的标题层级（H1 为标题页，H2 为分页符）自动识别幻灯片结构，无需额外标记。插件提供实时分屏预览，边写边看，并支持通过 Frontmatter 灵活定制主题、页眉页脚及 Logo，让内容从草稿到成品的转换过程自然且低摩擦。

典型场景包括快速制作内部汇报或客户提案。例如，你可以直接基于 AI 生成的结构化大纲，利用 `<!-- columns 2 -->` 注释实现左右分栏布局，左侧放置图表，右侧解释要点；或者使用 `<!-- columns 3 step -->` 将流程步骤转化为渐进式卡片。此外，演讲者备注功能会自动将 `[!note]` 类型的 Callout 从投影画面中隐藏，仅保留在演讲者视图中，确保观众看到的内容干净专注。

相比传统幻灯片软件，Presenter 的最大特色是“零配置”与“高保真导出”。它支持非均匀列宽比例（如 2:1）和 KPI 指标自动高亮，能智能识别纯标题页为分隔页。最值得关注的是其导出能力：不仅支持生成可编辑的 PowerPoint (.pptx) 文件，保留所有样式和布局，还能导出单文件 HTML，接收方无需安装 Obsidian 或联网即可在浏览器中查看，并支持一键切换幻灯片视图与讲义视图。

使用前需注意，该插件依赖标准 Markdown 结构，若笔记格式混乱可能导致布局异常。它不适合需要复杂动画效果或逐字稿精细控制的场景。此外，虽然支持 PDF 导出，但主要优势在于快速生成静态或半静态演示文稿，若你的工作流重度依赖 PowerPoint 的高级交互功能，可能仍需将其作为最终交付前的中间格式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


