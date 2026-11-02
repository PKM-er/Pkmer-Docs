---
uid: 1793625623698000
title: "Obsidian 插件：TraceWeave"
tags: ["搜索与排序", "文件管理", "学术与科研", "图谱", "obsidian插件"]
description: "Research graphs, dossiers and files stored in your vault with centralized metadata. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TraceWeave

> [!Note] 插件名片
> - 插件名称：TraceWeave
> - 插件作者：Andrey Torlopov
> - 插件说明：Research graphs, dossiers and files stored in your vault with centralized metadata. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['搜索与排序', '文件管理', '学术与科研', '图谱', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/andrey-torlopov/TraceWeaveObsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?traceweave)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/andrey-torlopov/TraceWeaveObsidian/master/README.md)



## 概述

TraceWeave 旨在解决研究资料分散在笔记、文档和录音中难以梳理的问题。它允许你在 Obsidian 库中建立显式的关系图谱，将现有的 Markdown 笔记、PDF、音频、视频等二进制文件连接起来。所有关系、属性及历史数据集中存储在隐藏的 `.twdata/` 文件夹中，保持原有笔记文件不变，让你能清晰追踪来源、区分假设并回顾结论。

典型场景包括构建文献综述或案件档案。例如，你可以将多篇论文笔记与原始 PDF 附件连接，用虚线标记尚未证实的假设关系，形成可视化的证据链；或者将访谈录音、现场照片与文字记录整合为一份“档案”，通过卡片视图浏览，既保留原始材料又维持调查脉络，无需在多个文件夹间来回切换。

相比仅依赖双向链接的插件，TraceWeave 的特色在于支持混合文件类型的统一图谱管理，并具备“导出报告”功能。你可以将研究项目导出为包含 `summary.md` 和原生 Canvas 文件的可见文件夹，无需安装插件即可在手机或桌面端阅读。此外，它提供项目诊断功能，能自动检测缺失的链接或文件，并提示修复，确保图谱的完整性。

使用前需注意，Obsidian Sync 默认排除隐藏的 `.twdata` 文件夹，因此仅同步笔记无法备份图谱数据，必须手动包含该文件夹。此插件不适合需要多用户实时协作或依赖服务器端同步的场景，它主要服务于单人本地研究。若你偏好 Web 应用界面或需要跨设备实时同步，应考虑其独立的 Web 版本，两者数据不互通。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


