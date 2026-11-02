---
uid: 1793625611898001
title: "Obsidian 插件：Date Property Backlinks"
tags: ["日历与时间", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Show notes whose date properties match a daily note in an auto-built Bases view. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Date Property Backlinks

> [!Note] 插件名片
> - 插件名称：Date Property Backlinks
> - 插件作者：theluckystrike
> - 插件说明：Show notes whose date properties match a daily note in an auto-built Bases view. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-date-backlinks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-date-backlinks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-date-backlinks/master/README.md)



## 概述

Date Property Backlinks 旨在解决每日笔记中手动查找关联内容的繁琐问题。它通过自动构建 Bases 视图，实时展示那些日期属性与当前每日笔记日期相匹配的其他笔记。核心功能在于无需手动编写复杂的查询语句，只需配置一次模板或启用自动视图，即可在每日笔记中直接看到相关的会议记录、阅读笔记等，且视图会随当前笔记日期的变化而自动更新。

典型使用场景包括日常知识管理和项目追踪。例如，当你打开 2026 年 10 月 21 日的每日笔记时，插件会自动列出所有标记为该日期的会议记录和阅读笔记。另一个场景是处理带有时间范围的项目，若笔记包含开始和结束日期，插件能识别出与当前日期重叠的项目，帮助你在每日回顾时快速定位正在进行中的任务，无需在多个文件夹间切换搜索。

相比 Date Linker 等同类插件，其最大特色是不修改源笔记的元数据。它不会向匹配笔记的 frontmatter 中写入反向链接属性，而是通过读取现有日期属性生成动态视图，保持笔记结构的整洁。此外，它原生支持日期和时间值，能智能匹配本地日历日期，并允许通过文件夹过滤进一步缩小范围。对于已有 Dataview 或 Bases 查询习惯的用户，若现有查询已能满足需求，此插件并非必需，但它提供了更零配置、更专注于日期匹配的体验。

使用前需注意，该插件依赖 Obsidian 核心 Bases 插件，且必须启用。免费版仅支持匹配单个日期属性，若需周/月汇总、多日期属性匹配或包含范围重叠的高级功能，需购买 Pro 版本。它不适合那些希望直接修改笔记内容或添加反向链接属性的用户，也不适合对非日期属性进行复杂逻辑组合查询的场景。若你的笔记日期格式非标准，需手动配置 Moment 格式令牌以确保匹配准确。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


