---
uid: 1793625612182000
title: "Obsidian 插件：Documents Activity Tracker"
tags: ["效率工具", "数据分析", "日历与时间", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Documents Activity Tracker

> [!Note] 插件名片
> - 插件名称：Documents Activity Tracker
> - 插件作者：InVerse
> - 插件说明：
> - 插件分类：['效率工具', '数据分析', '日历与时间', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lmce72/documents-activity-tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?documents-activity-tracker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lmce72/documents-activity-tracker/master/README.md)



## 概述

Documents Activity Tracker 旨在解决 Obsidian 用户难以量化阅读投入的问题，通过自动记录每个文档的阅读时长，并区分窗口内与脱离窗口的状态，提供精准的时间统计。除了文档追踪，它还内置了独立的手动秒表与倒计时功能，所有数据均存储于 SQLite 数据库中，确保记录的持久性与查询效率，帮助用户清晰掌握知识管理过程中的时间分布。

典型场景包括深度阅读长文时，插件能自动累计有效阅读时间，排除后台或锁屏期间的无效时长；若需进行专注工作，可启动独立的番茄钟或自定义倒计时，结束后自动记录专注时长。例如，你在阅读一篇技术文章时切换去回复消息，插件会准确标记这段离开时间，而不会将其计入阅读时长，从而保证统计数据的真实性。

相比同类插件，其特色在于“四轨总热力图”与精细的状态管理。它能将文档阅读、插件视图、手动计时与倒计时在同一时间轴上独立展示，且支持毫秒级精度。特别值得注意的是，它引入了“空闲通道”，将超时未操作的时间单独记账而非直接丢弃，避免了传统插件中因空闲导致的数据断层，让时间统计更加完整和透明。

使用前需注意，该插件重构后不再迁移旧版 JSON 数据，新库从空开始记录，适合愿意从零开始追踪的用户。它不适合需要复杂报表导出或跨设备同步历史数据的场景，因为数据主要服务于本地回顾。此外，若你主要使用移动端，需留意其后台结算机制，确保在锁屏或后台时能正确停止计时，以获得最准确的阅读时长统计。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


