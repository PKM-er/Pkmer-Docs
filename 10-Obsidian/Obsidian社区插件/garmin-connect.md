---
uid: 1793625613273000
title: "Obsidian 插件：Garmin Connect"
tags: ["第三方工具集成", "图表与可视化", "数据处理", "移动端优化", "obsidian插件"]
description: "Garmin Connect directly in your Obsidian vault. Data is synced, stored in your vault, and rendered in a dashboard. View your data fully offline, compatible on mobile and desktop. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Garmin Connect

> [!Note] 插件名片
> - 插件名称：Garmin Connect
> - 插件作者：Tareq Alansari
> - 插件说明：Garmin Connect directly in your Obsidian vault. Data is synced, stored in your vault, and rendered in a dashboard. View your data fully offline, compatible on mobile and desktop. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '图表与可视化', '数据处理', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tareqayz/Obsidian-Garmin-Connect)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?garmin-connect)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tareqayz/Obsidian-Garmin-Connect/master/README.md)



## 概述

Garmin Connect 插件将你的 Garmin 健康、运动及活动数据同步至 Obsidian 库中，并在内置仪表盘上直观呈现。它解决了数据分散在云端或 App 中的问题，让你能在笔记软件内直接查看睡眠评分、身体电量、训练状态及详细的活动记录。所有数据以纯 JSON 文件形式存储在本地，确保你拥有完整的数据所有权，并支持在桌面端和移动端完全离线浏览。

典型场景包括晨间快速回顾：打开首页即可看到昨日的睡眠得分、今日的身体电量变化及本周活动概览，无需切换 App。对于跑步爱好者，你可以查看某次跑步的详细页面，包括按配速着色的路线地图、分段数据及图表，方便复盘训练表现。此外，你还可以在“所有活动”页面中搜索、筛选和排序历史记录，快速定位特定日期的运动数据。

相比其他同类插件，其核心特色在于数据本地化与隐私安全。数据以明文 JSON 存储，不仅便于离线访问，也方便用户自行备份或分析。插件不存储密码，而是将会话令牌保存在 Obsidian 的安全存储中，且无遥测或分析功能。此外，它支持自动同步机制，在 Obsidian 启动或打开首页时自动检查更新，确保数据新鲜度，同时允许用户手动控制同步频率。

使用前需注意，首次设置需下载全部历史数据，耗时取决于数据量，且每年数据约占 50 MB 空间。若使用 Obsidian Sync，需开启“同步所有其他类型”以确保 JSON 文件同步至其他设备。该插件不适合需要实时流式数据监控或复杂自定义主题的用户，目前布局定制功能尚在计划中。此外，它未获 Garmin 官方背书，且地图瓦片默认请求 OpenStreetMap 服务器，若介意网络请求可在设置中关闭地图瓦片以仅显示路线。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


