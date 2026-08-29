---
uid: 1786577082850001
title: 'Obsidian 插件：Strava Periodic Note Sync'
tags: ['第三方工具集成', '数据处理', '自动化与AI', '效率工具', 'obsidian插件']
description: '把Strava活动同步到你的定期笔记里。——这款插件还没经过Obsidian官方人员手动审核呢。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Strava Periodic Note Sync

> [!Note] 插件名片
> - 插件名称：Strava Periodic Note Sync
> - 插件作者：jamesjarvis
> - 插件说明：把Strava活动同步到你的定期笔记里。——这款插件还没经过Obsidian官方人员手动审核呢。
> - 插件分类：['第三方工具集成', '数据处理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jamesjarvis/obsidian-strava-periodic-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?strava-periodic-note-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jamesjarvis/obsidian-strava-periodic-sync/master/README.md)



## 概述

### Strava Periodic Note Sync插件总结
1. **主要功能**：通过OAuth2认证将Strava活动同步到Obsidian每日笔记。支持按配置间隔自动同步，可展示活动的表情、配速/速度、距离、时长、海拔等信息，还能添加前置元数据指标，支持最多90天的历史数据回填。
2. **适用场景**：适合喜欢运动并使用Obsidian记录日常的用户，可将运动数据整合到每日笔记中，方便回顾和分析。
3. **核心特色**：采用OAuth2认证保障安全，利用Obsidian的SecretStorage API安全存储凭证；能自动检测Periodic Notes或Daily Notes插件生成的每日笔记；可通过BRAT自动更新。
4. **使用建议**：插件待社区插件商店审核，审核通过前推荐用BRAT安装。安装BRAT后，在其设置中添加`jamesjarvis/obsidian-strava-periodic-sync`。手动安装时仅复制`main.js`和`manifest.json`到指定文件夹。使用前需在Strava创建API应用，设置回调域为`localhost`。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


