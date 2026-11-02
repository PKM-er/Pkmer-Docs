---
uid: 1793625620798000
title: "Obsidian 插件：Research Source Review"
tags: ["学术与科研", "效率工具", "文件管理", "obsidian插件"]
description: "Check whether a source passage changed after you approved it for a note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Research Source Review

> [!Note] 插件名片
> - 插件名称：Research Source Review
> - 插件作者：theluckystrike
> - 插件说明：Check whether a source passage changed after you approved it for a note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '效率工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/research-source-review)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?research-source-review)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/research-source-review/master/README.md)



## 概述

Research Source Review 旨在解决研究笔记中引用来源随时间发生变动，导致结论失效的问题。其核心功能是将笔记中引用的特定段落“固定”为基准，并定期扫描源文件，对比当前文本与已批准文本的差异。它不修改源文件或依赖笔记，仅在本地保存引用记录，确保你能准确追踪哪些依据发生了改变，从而维护研究结论的准确性。

典型场景如：你的结论笔记引用了源文档中“30天”的数据。若源文档后续被修改为“14天”，插件扫描后会高亮显示这两处文本差异。你只需查看对比窗口，判断结论是否需要更新，确认无误后标记为已检查。另一场景是源文档段落被移动或删除，插件会报告“缺失块”或“缺失源”，但保留原有的批准文本供你参考，避免数据丢失。

相比同类工具，该插件专注于 Markdown 显式 ID 段落的字面文本比对，支持同一源段落被多个笔记独立引用。它具备严格的审批机制，若源文本在审批过程中再次变动，会强制刷新对比，防止误批。此外，Pro 版本提供命名审查组和带日期的本地 Markdown 报告功能，便于按项目批量管理引用并生成审计记录，适合需要长期维护大型研究库的用户。

使用前需注意，该插件仅支持带有显式 ID 的 Markdown 段落，不支持标题、列表、代码块或 PDF 等格式。它检测的是本地文本变化，不验证事实正确性或远程文章更新。若源文件重命名时插件未运行，可能导致路径失效，需手动修复。不适合需要自动同步远程数据、处理非文本媒体或希望插件自动修改笔记内容的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


