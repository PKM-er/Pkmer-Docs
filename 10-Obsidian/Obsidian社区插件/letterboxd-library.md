---
uid: 1793625614760000
title: "Obsidian 插件：Letterboxd Library"
tags: ["第三方工具集成", "数据分析", "效率工具", "obsidian插件"]
description: "Browse watched films, ratings and stats from Letterboxd. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Letterboxd Library

> [!Note] 插件名片
> - 插件名称：Letterboxd Library
> - 插件作者：Jasper Mceligot
> - 插件说明：Browse watched films, ratings and stats from Letterboxd. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '数据分析', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jasperdevs/obsidian-letterboxd-library)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?letterboxd-library)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jasperdevs/obsidian-letterboxd-library/master/README.md)



## 概述

Letterboxd Library 将你的观影记录从网页迁移至 Obsidian 本地，构建一个包含海报、评分及详细统计的个人电影库。它支持浏览已看影片、查看文字影评，并生成关于评分分布、上映年代及片长的可视化图表。该插件旨在让你无需切换浏览器，即可在笔记软件中直接管理、检索和分析自己的观影历史，实现观影数据与知识管理的无缝融合。

典型场景包括在撰写影评或观影笔记时，通过侧边栏快速查阅过往评分与短评，或直接在笔记中嵌入电影库代码块，让观影记录成为文档的一部分。例如，当你想回顾某部老片的评分变化，或统计自己十年间观看的科幻片数量时，无需登录 Letterboxd 网站，只需在插件中应用筛选器或查看统计图表，即可即时获取所需信息，保持写作与回顾的连贯性。

相比其他仅展示列表的插件，其特色在于深度的数据整合与隐私保护。它支持导入完整的 Letterboxd 导出包，保留历史影评与日记日期，且所有数据仅存储在本地 `data.json` 中，不请求密码或 API 密钥。此外，它提供精细的 CSV 导出选项，允许用户独立选择是否包含评分或影评，并支持将影片标题复制到剪贴板，方便与其他工具联动，同时确保复制内容仅包含标题和年份，避免泄露敏感元数据。

使用前需注意，该插件依赖 Letterboxd 的公开资料或导出文件，无法直接访问私有或已删除的条目。它不提供云端同步功能，若使用 Obsidian 同步服务，需自行确认插件数据是否被同步。此外，实时刷新仅获取近期 RSS 数据，非完整档案，因此建议定期导入完整 ZIP 文件以补全历史数据。如果你需要管理非 Letterboxd 来源的影片，或需要复杂的数据库查询功能，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


