---
uid: 1793625624939000
title: "Obsidian 插件：YouTube Tracker"
tags: ["第三方工具集成", "多媒体", "效率工具", "obsidian插件"]
description: "Track YouTube channel uploads manually in Obsidian, with Shorts filtering. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：YouTube Tracker

> [!Note] 插件名片
> - 插件名称：YouTube Tracker
> - 插件作者：Luis Angel
> - 插件说明：Track YouTube channel uploads manually in Obsidian, with Shorts filtering. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '多媒体', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/offluisangel/obsidian-yt-tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?youtube-tracker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/offluisangel/obsidian-yt-tracker/master/README.md)



## 概述

YouTube Tracker 旨在解决在 Obsidian 中分散管理 YouTube 频道更新的问题，其核心功能是手动追踪指定频道的最新视频。用户只需添加频道链接，插件便会通过 YouTube 公共 RSS 源获取数据，并在笔记库内生成一个仪表盘，集中展示每个频道最近符合条件的视频及其数据获取时间。整个过程无需登录 YouTube 账号、配置 API 密钥或依赖外部后端服务，所有设置与缓存数据均直接存储在 Obsidian 的插件数据目录中，实现了轻量级的本地化内容聚合。

典型的使用场景包括个人知识管理者和内容创作者的日常信息收集。例如，你可以将几位常看的技术博主或新闻频道加入追踪列表，每天打开 Obsidian 时手动点击“刷新”，即可快速浏览这些频道是否有新发布的长视频。另一个场景是监控特定领域的行业动态，通过筛选掉短视频，专注于获取深度内容，避免被碎片化的 Shorts 干扰，从而更高效地规划阅读或观看时间。

相比其他同类插件，YouTube Tracker 的显著特色在于其对 Shorts 的过滤机制。当 YouTube 的源数据明确标识视频为 Shorts 时，插件会自动将其排除，确保仪表盘只展示常规视频。此外，它具备容错设计，若刷新失败，会保留最后一次成功获取的视频信息，并提示用户重试是否可能有效。这种“尽力而为”的检测方式虽然依赖 YouTube 页面结构，但在无需复杂配置的情况下，提供了比简单链接列表更智能的内容筛选体验。

使用前需注意，该插件的刷新操作完全依赖手动触发，不具备自动定时检查功能，适合有固定查看习惯的用户。Shorts 的过滤基于 YouTube 数据的最佳努力识别，若 YouTube 更改页面结构，过滤效果可能暂时失效。因此，它不适合需要全自动后台同步、实时推送通知，或对短视频内容也有追踪需求的用户。如果你希望完全自动化或需要复杂的 API 集成，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


