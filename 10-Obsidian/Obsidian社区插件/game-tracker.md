---
uid: 1793625613266000
title: "Obsidian 插件：Game Tracker"
tags: ["效率工具", "搜索与排序", "数据处理", "obsidian插件"]
description: "Track the games you play, retro or modern. Search for a game to add it with box art and details, and log when you beat it. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Game Tracker

> [!Note] 插件名片
> - 插件名称：Game Tracker
> - 插件作者：austinwilcox
> - 插件说明：Track the games you play, retro or modern. Search for a game to add it with box art and details, and log when you beat it. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '搜索与排序', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/austinwilcox/obsidian-game-tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?game-tracker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/austinwilcox/obsidian-game-tracker/master/README.md)



## 概述

Game Tracker 是一款专为游戏玩家设计的笔记管理工具，核心功能是将你玩过的游戏转化为结构化的 Obsidian 笔记。它允许你搜索并添加游戏，自动抓取封面图、发行年份、开发商等详细信息，并记录通关时间、评分和游玩时长。无论是复古经典还是现代新作，你都能在一个统一的库中追踪自己的游戏历程，实现从“想玩”到“通关”的全流程记录。

想象一下，当你通关一款 SNES 经典游戏时，只需在插件中搜索标题，选择对应版本，插件便会自动生成包含封面和详情的笔记，并自动将其归类到“Beaten”文件夹。或者，当你开始玩一款新游戏时，将其状态设为“Playing”，笔记会随之移动，方便你在仪表盘上快速查看当前正在进行的任务。这种自动化的文件夹管理让你无需手动整理文件，只需关注游戏本身。

该插件的一大特色是深度整合了 RetroArch 使用的 Libretro 数据库，无需 API 密钥即可离线搜索大量复古主机游戏，且首次下载后支持永久离线使用。对于现代游戏，它也支持通过 RAWG API 获取数据。此外，所有游戏信息均以标准 YAML 属性存储，这意味着你可以轻松利用 Dataview 等插件进行高级查询和统计，例如生成年度通关图表或分析平均游玩时长，这是许多同类插件所不具备的灵活性。

需要注意的是，复古游戏搜索仅覆盖特定主机列表，如 NES、PS1 等，暂不支持街机（MAME）和 GameCube/Wii。若需记录现代游戏，必须自行申请免费的 RAWG API 密钥并配置。此外，插件会下载游戏列表缓存，首次使用需联网。如果你主要玩 PC 独立游戏或主机游戏且不需要复杂的属性统计，或者对复古游戏不感兴趣，这款插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


