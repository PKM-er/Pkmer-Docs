---
uid: 1793625620010000
title: "Obsidian 插件：PDF Report Exporter"
tags: ["图片与PDF", "样式与美化", "模板与链接处理", "效率工具", "obsidian插件"]
description: "Export notes as polished PDF reports: cover page, header and footer, clickable table of contents, styled tables, callouts and Mermaid diagrams, with reusable templates. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF Report Exporter

> [!Note] 插件名片
> - 插件名称：PDF Report Exporter
> - 插件作者：Maxence HAEGMAN
> - 插件说明：Export notes as polished PDF reports: cover page, header and footer, clickable table of contents, styled tables, callouts and Mermaid diagrams, with reusable templates. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '样式与美化', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/phdhebde/Obisidian-pdf-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-report-exporter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/phdhebde/Obisidian-pdf-export/master/README.md)



## 概述

PDF Report Exporter 将 Obsidian 笔记转化为具备专业排版质量的 PDF 报告。它自动处理封面、页眉页脚、可点击的目录以及样式化的表格，完美保留 Obsidian 特有的 Callout 图标和 Mermaid 矢量图表。通过可复用的模板系统，你可以自定义报告结构，并在导出时灵活选择不同版本，确保输出内容既美观又符合文档规范。

典型场景包括向客户交付项目报告或生成内部技术文档。例如，你可以利用“Confidential passages”功能，在一份笔记中同时维护内部详细版和对外精简版：标记为内部信息的段落会在导出客户版时彻底移除，而非简单遮盖。此外，通过右键点击文件夹，你可以批量将多个笔记导出为独立的 PDF 文件，极大提升了整理和分发文档的效率。

相比同类插件，该工具完全离线运行，不发起任何网络请求，所需字体内置于插件中，保障了数据隐私与导出稳定性。其特色在于对 Obsidian 生态的深度整合，如支持 Columns 插件的列布局，并能智能处理图片格式转换与缺失提示。预览功能直接在 Obsidian 内打开 PDF，方便快速调整模板，无需反复导出文件，显著提升了排版调试的体验。

使用前需注意，该插件仅支持桌面端，且依赖笔记的 Frontmatter 属性来填充封面和元数据，若未正确配置 YAML 字段，部分信息可能缺失。它不适合需要频繁在线协作编辑或依赖云端实时同步的场景。此外，虽然支持多种 Markdown 语法，但复杂的交互式元素或动态脚本无法在静态 PDF 中呈现，因此它更适用于最终交付物的生成，而非作为日常笔记的实时预览工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


