---
uid: 1793625614490001
title: "Obsidian 插件：Keep Sorted"
tags: ["搜索与排序", "编辑工具", "效率工具", "obsidian插件"]
description: "Automatically keep marked list regions sorted in your notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Keep Sorted

> [!Note] 插件名片
> - 插件名称：Keep Sorted
> - 插件作者：torazaburo
> - 插件说明：Automatically keep marked list regions sorted in your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rtm/obsidian-keep-sorted)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?keep-sorted)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rtm/obsidian-keep-sorted/master/README.md)



## 概述

Keep Sorted 旨在解决笔记中列表和表格手动排序繁琐且易错的问题。它通过识别 Obsidian 注释语法中的特定标记，自动维持指定区域内内容的有序状态。无论是无序列表还是 Markdown 表格，只要被标记包裹，插件就会在文件停止编辑五秒后自动执行排序，确保数据始终按既定规则排列，无需用户反复手动调整。

典型场景包括维护动态更新的资源清单或数据表。例如，当你记录待办事项时，若希望按字母顺序自动排列任务，只需在列表前后添加标记，输入新任务后稍作停顿，列表便会自动重排。对于包含姓名和属性的表格，插件能智能识别表头与分隔行，确保它们始终位于顶部，而数据行则根据首列内容自动排序，保持表格结构清晰且符合阅读习惯。

该插件的特色在于对 Obsidian 语法的深度适配。它支持在标记中配置排序方向、大小写敏感性及数字比较等选项，且默认行为与 Google 的 keep-sorted 工具保持一致。特别值得注意的是，排序时会自动忽略列表符号、链接语法及加粗等格式标记，仅依据可见文本进行比对，这使得包含复杂格式的内容也能准确排序。此外，它支持多行项目作为整体处理，避免长条目被拆分。

使用前需注意，排序基于字符编码而非语言规则，因此带重音符号的字母可能不符合直觉预期。该插件不支持去重功能，也不处理 Google 原版的其他高级选项。如果你需要实时即时排序（无五秒延迟），或依赖复杂的语言本地化排序规则，此插件可能无法满足需求。它更适合追求“设置后遗忘”、希望笔记内容在编辑间隙自动保持整洁的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


