---
uid: 1793625623727000
title: "Obsidian 插件：Transclusion Extractor"
tags: ["编辑工具", "模板与链接处理", "效率工具", "obsidian插件"]
description: "Export notes built from transclusions with every embed expanded, or inline a single transclusion for separate editing. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Transclusion Extractor

> [!Note] 插件名片
> - 插件名称：Transclusion Extractor
> - 插件作者：Andrew Brož
> - 插件说明：Export notes built from transclusions with every embed expanded, or inline a single transclusion for separate editing. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/andrewbroz/obsidian-transclusion-extractor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?transclusion-extractor)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/andrewbroz/obsidian-transclusion-extractor/master/README.md)



## 概述

Transclusion Extractor 专为依赖嵌入（Transclusion）构建笔记的用户设计，核心功能是解决导出或编辑时嵌入内容无法独立处理的问题。它提供两种主要操作：一是将包含嵌入的笔记完整导出为独立 Markdown 文件，递归展开所有引用；二是将编辑器中的单个嵌入“内联”为纯文本，使其脱离源笔记，成为可独立编辑的段落。

典型场景包括整理长期项目文档或准备对外分享。例如，当你用多个子笔记拼装一份报告时，可直接右键选择“Export expanded”生成一份无依赖的完整文档，方便发送给未安装 Obsidian 的同事；或者在写作过程中，发现某段引用需要大幅修改，可将其内联，直接修改文本而不必跳转回源笔记，修改完成后通过撤销操作即可恢复原状。

相比其他导出插件，该插件的特色在于对嵌入结构的深度处理与来源追溯。内联操作会自动添加 HTML 注释标记，记录文本来源及日期，便于后续核对；同时支持自定义导出预设，如“Publish”模式会清理块 ID 和注释，适合正式发布，而“Snapshot”模式保留元数据，适合存档。此外，若配合 Inkling 插件使用，还能在导出时自动还原笔记的原始文本，过滤掉待审建议和评论，确保输出内容的纯净性。

使用前需注意，该插件仅支持桌面端 Obsidian，且依赖 BRAT 进行安装和更新。它不适合需要实时同步嵌入内容的场景，因为内联后的文本与源笔记彻底断开，后续源笔记的更新不会反映在内联部分。此外，若笔记中存在循环引用或缺失的嵌入，插件会将其转换为引用块并提示，而非报错中断，用户需自行检查这些标记以确认内容完整性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


