---
uid: 1793625618444000
title: "Obsidian 插件：Note Attachment Sorter"
tags: ["文件管理", "搜索与排序", "效率工具", "obsidian插件"]
description: "Sort attachments directly beneath related notes using filename prefixes or note links, without moving files. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note Attachment Sorter

> [!Note] 插件名片
> - 插件名称：Note Attachment Sorter
> - 插件作者：Poro
> - 插件说明：Sort attachments directly beneath related notes using filename prefixes or note links, without moving files. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '搜索与排序', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/artificialgarden/Note-Attachment-Sorter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-attachment-sorter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/artificialgarden/Note-Attachment-Sorter/master/README.md)



## 概述

Note Attachment Sorter 旨在解决 Obsidian 文件资源管理器中附件与笔记分离的视觉混乱问题。它通过识别文件名前缀或笔记内的链接，将相关附件在显示层级上自动归类到对应笔记下方。该插件仅改变文件的视觉排列顺序，不会执行任何重命名、移动、复制或删除操作，确保你的文件结构保持原样，仅优化浏览体验。

典型场景包括整理带有统一前缀的图片，例如将 `@预算表.png` 和 `@预算表-01.png` 自动归入 `预算表.md` 之下；或者当笔记中通过 `[[数据源.pdf]]` 引用了同文件夹内的 PDF 文件时，即使文件名不同，该 PDF 也会显示在笔记下方。这种机制让相关资源在视觉上形成逻辑分组，无需手动整理文件夹结构。

相比其他排序插件，其特色在于支持自然排序（如 `-01` 排在 `-10` 前）以及基于链接的智能匹配，且无需依赖 YAML 或额外的配置文件。它允许不同文件夹独立处理同名文件，避免跨文件夹干扰。此外，插件完全本地运行，无遥测或外部请求，保护隐私。对于未明确归属或存在歧义的链接文件，插件会将其保留在文件夹末尾，避免错误归类。

使用前需注意，该插件目前仅支持桌面端，且依赖于 Obsidian 未公开的内部 API，未来版本兼容性存在风险。建议先在测试库中试用并备份重要数据。它不适合需要物理移动文件、跨文件夹自动归档或移动端使用的用户。若同时使用其他修改文件排序的插件，需禁用它们以避免冲突。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


