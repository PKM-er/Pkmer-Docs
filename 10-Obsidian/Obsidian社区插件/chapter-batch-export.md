---
uid: 1793625609273000
title: "Obsidian 插件：Chapter Batch Export"
tags: ["文件管理", "文字处理", "效率工具", "obsidian插件"]
description: "Save each manuscript chapter as a separate Markdown file. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Chapter Batch Export

> [!Note] 插件名片
> - 插件名称：Chapter Batch Export
> - 插件作者：theluckystrike
> - 插件说明：Save each manuscript chapter as a separate Markdown file. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/chapter-batch-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chapter-batch-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/chapter-batch-export/master/README.md)



## 概述

Chapter Batch Export 专为使用 Longform 插件管理长篇手稿的用户设计，核心功能是将手稿中的根场景及其子场景批量导出为独立的 Markdown 文件。它严格遵循手稿索引中的层级结构，将每个根场景视为一章，并按索引顺序合并其下属子场景的正文。导出过程完全在 Vault 内部完成，生成带有源场景链接的章节文件及一个汇总索引，方便后续进行文档转换或归档，但插件本身不执行任何格式转换操作。

典型场景适用于论文作者或技术写作者，在 Longform 中完成章节草稿后，需要将其拆分为独立文件以便导入其他排版工具。例如，你可以将“引言”章节及其下的“研究背景”、“问题陈述”等子场景合并导出为 `01 Introduction.md`。在导出前，插件提供预览功能，展示合并后的文本效果，帮助你检查是否有场景被错误地归类到不同的根章节下，确保内容结构符合预期。

相比同类工具，该插件强调路径的精确性与安全性。它采用精确路径匹配机制，若源场景缺失，导出按钮将保持禁用状态，防止因文件名相似而误读其他笔记。此外，它支持自定义文件名和标题格式（Pro 功能），并允许保存预设配置，便于在不同草稿版本间快速切换导出参数。生成的索引文件不仅链接到各章节，还反向链接至源场景，建立了清晰的内容溯源链条。

使用前需注意，该插件仅支持导出 Markdown 格式，不直接生成 PDF、DOCX 或 LaTeX 文件，也不运行 Pandoc 等转换脚本。它要求手稿索引具备标准的 Longform YAML 结构，且不支持单场景项目或超过 64 层深度的复杂树状结构。若你的需求是直接在 Obsidian 内完成最终排版，或依赖自动化的文档编译流程，此插件可能无法满足需求，它更适合作为工作流中“拆分与整理”的中间环节。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


