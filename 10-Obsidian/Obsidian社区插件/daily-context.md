---
uid: 1791709366381000
title: 'Obsidian 插件：Daily Context'
tags: ['地图与位置', '移动端优化', '第三方工具集成', '日历与时间', 'obsidian插件']
description: 'Enrich daily notes with real-world context: GPS location, addresses, and daily weather on mobile using AMap. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Daily Context

> [!Note] 插件名片
> - 插件名称：Daily Context
> - 插件作者：Li Zhentang
> - 插件说明：Enrich daily notes with real-world context: GPS location, addresses, and daily weather on mobile using AMap. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['地图与位置', '移动端优化', '第三方工具集成', '日历与时间', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/leegent/obsidian-daily-context)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?daily-context)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/leegent/obsidian-daily-context/master/README.md)



## 概述

**Daily Context** 是一款专为 Obsidian 移动端设计的插件，旨在为每日笔记自动补充现实世界上下文。

1.  **主要功能**：自动获取并记录 GPS 坐标、详细地理位置（通过高德地图解析）及当日天气信息，以 YAML 属性形式写入笔记。
2.  **适用场景**：适用于移动端 Obsidian 用户，特别适合需要记录日常行程、旅行日志或希望日记包含具体时空背景的场景。
3.  **核心特色**：基于高德地图 API，提供精准的地址与天气数据；支持手动触发或打开今日笔记时自动捕获；具备智能去重机制，若已有天气属性则跳过，已有坐标则复用，避免重复请求。
4.  **使用建议**：需配置高德 Web 服务 Key；确保笔记标题以 `YYYY-MM-DD` 格式开头；注意 API Key 以明文存储，同步设置时需留意隐私安全；若需重新记录，需先清除原有的 location、address 和 weather 属性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


