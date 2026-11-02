---
uid: 1793625618625000
title: "Obsidian 插件：Noteline"
tags: ["日历与时间", "界面优化", "效率工具", "obsidian插件"]
description: "Arrange existing notes on a horizontal timeline with expandable Markdown cards, tags, and a persistent layout. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Noteline

> [!Note] 插件名片
> - 插件名称：Noteline
> - 插件作者：Andrey Torlopov
> - 插件说明：Arrange existing notes on a horizontal timeline with expandable Markdown cards, tags, and a persistent layout. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/andrey-torlopov/NotelineObsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?noteline)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/andrey-torlopov/NotelineObsidian/master/README.md)



## 概述

Noteline 将现有的 Obsidian 笔记按时间顺序排列在水平时间轴上，以可展开的 Markdown 卡片形式呈现。它通过读取笔记属性或特定标记获取日期，支持从分钟到世纪（含公元前）的多种精度，并允许用户自定义时间轴方向与布局。该插件不修改原始笔记内容，而是通过独立的 `.timeline` 文件保存布局与选择状态，让你能直观地回顾事件发生的先后顺序，在上下文中阅读笔记。

对于需要按时间线梳理内容的用户，Noteline 非常实用。例如，教师可以创建课程时间轴，将每节课的主题笔记按日期排列，清晰展示教学进度；开发者则可以将版本发布、事故记录和技术决策笔记放入同一时间轴，快速回顾项目演进历程。同一篇笔记可以出现在多个不同的时间轴中，方便从不同维度组织信息。

相比其他时间线插件，Noteline 的特色在于其基于文件的时间轴管理，支持在独立标签页中打开多个时间轴，且布局设置持久化保存。它具备完善的元数据缺失提示机制，未包含日期或标签的笔记会以灰色边框标示，避免信息遗漏。此外，插件支持触摸设备的滑动操作，并允许在不改变日期的情况下自由调整卡片位置，提供了灵活的视觉编排能力。

使用前需注意，当前版本界面主要为俄语，文档虽提供英文但操作标签仍为俄语，可能增加上手门槛。同时，`.timeline` 文件需与笔记一同备份和同步，且不支持多设备同时编辑同一时间轴的自动合并。如果你需要复杂的数据库式关联查询，或希望完全自动化生成时间线，Noteline 可能不是最佳选择，它更侧重于手动策展和可视化回顾。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


