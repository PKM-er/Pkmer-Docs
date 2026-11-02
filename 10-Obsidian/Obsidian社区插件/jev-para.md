---
uid: 1793625614352000
title: "Obsidian 插件：Jev PARA"
tags: ["文件管理", "效率工具", "自动化与AI", "obsidian插件"]
description: "Organize Inbox notes into PARA folders using Jev and criteria from each folder. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Jev PARA

> [!Note] 插件名片
> - 插件名称：Jev PARA
> - 插件作者：Juwoong Bae
> - 插件说明：Organize Inbox notes into PARA folders using Jev and criteria from each folder. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/juwoong/jev-para)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?jev-para)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/juwoong/jev-para/master/README.md)



## 概述

Jev PARA 是一款基于 PARA 方法论的笔记整理插件，旨在解决收件箱笔记堆积的问题。它利用 Jev API 分析笔记内容，并依据各 PARA 文件夹中 `INDEX.md` 文件定义的描述与筛选标准，自动将笔记分类至项目、领域、资源或归档目录。该插件的核心价值在于通过结构化的元数据驱动智能分类，帮助用户维持知识库的有序状态，而非简单的文件同步。

典型使用场景包括日常笔记的快速归档与项目文档的自动归位。例如，当你记录一条关于“新服务上线计划”的笔记时，插件会识别其内容并匹配到“项目”文件夹中对应项目的描述，将其自动移动至该目录；若笔记涉及日常业务运营，则会被归类至“领域”文件夹。这种机制特别适合那些习惯先快速记录、后统一整理的用户，能有效减少手动拖拽文件的时间成本。

相比同类插件，Jev PARA 的特色在于其高度可配置的文件夹标准。用户不仅可定义文件夹描述，还能设置“包含”与“排除”的具体条件，从而提升分类的精准度。此外，插件提供手动预览与自动排序两种模式，自动模式设有严格的置信度阈值，确保只有高确定性的笔记才会被移动，低置信度笔记则保留在收件箱供人工复核，兼顾了效率与安全性。

使用前需注意，该插件依赖 Jev/TypeSafe 的 API 服务，分类操作会产生相应的 API 费用，且需保持网络连接。它仅处理 Markdown 格式笔记，不支持 PDF 或图片等附件的移动，且仅扫描收件箱根目录下的直接子文件。如果你希望插件能自动推断项目完成状态并归档，或需要离线运行、不产生额外 API 成本，那么该插件可能不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


