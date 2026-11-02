---
uid: 1793625624609000
title: "Obsidian 插件：Word Count Property"
tags: ["数据处理", "搜索与排序", "效率工具", "obsidian插件"]
description: "Write word count and reading time properties to notes you choose, for sorting in Bases. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Word Count Property

> [!Note] 插件名片
> - 插件名称：Word Count Property
> - 插件作者：theluckystrike
> - 插件说明：Write word count and reading time properties to notes you choose, for sorting in Bases. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '搜索与排序', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/word-count-property)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?word-count-property)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/word-count-property/master/README.md)



## 概述

Word Count Property 旨在解决写作笔记中字数与阅读时间数据无法被 Bases 视图直接利用的问题。它通过为选定的笔记写入数值型的 `wordCount` 和 `readingTimeMinutes` 属性，使这些字段能够像普通数据一样参与排序、筛选、分组和汇总。与仅显示统计信息的插件不同，它专注于将字数转化为可操作的结构化数据，让 Bases 成为管理写作进度的核心工具。

典型场景包括长篇小说或系列文章的进度追踪。例如，你可以创建一个 Bases 表格，列出所有章节笔记，并显示每章的字数和预计阅读时间。通过按字数排序，你可以快速识别哪些章节篇幅较短需要扩充，或计算整个项目的总阅读量。这种可视化方式比手动统计或查看文件资源管理器中的零散数据更直观，适合需要量化写作产出的用户。

该插件的特色在于其精细的控制机制和对多语言的支持。它采用“逐篇启用”模式，只有标记了 `wordCountTracked: true` 的笔记才会被处理，避免干扰其他笔记。此外，它具备冲突检测能力，若笔记中已存在同名属性，插件会拒绝覆盖并提示冲突，保护用户原有数据。在计数逻辑上，它区分了免费版的源码计数和 Pro 版的渲染文本预览，后者能更准确地模拟读者实际看到的文本长度，且对中日韩字符有专门的计数规则。

使用前需注意，该插件依赖 Bases 核心插件才能发挥视图功能。它通过 Obsidian 核心 API 更新 Frontmatter，可能会规范化 YAML 格式（如注释、引号），因此建议保留备份。如果你需要自动为所有笔记生成属性，或希望插件能执行其他插件的渲染逻辑，此插件可能不适合你。此外，手动修改生成的数值会破坏所有权标记，导致更新暂停，需通过重命名属性来恢复管理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


