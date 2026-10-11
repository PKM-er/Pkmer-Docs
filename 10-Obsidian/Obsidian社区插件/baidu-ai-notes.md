---
uid: 1791709368796000
title: 'Obsidian 插件：Netdisk AI Notes Importer'
tags: ['第三方工具集成', '文件管理', '多媒体', '自动化与AI', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Netdisk AI Notes Importer

> [!Note] 插件名片
> - 插件名称：Netdisk AI Notes Importer
> - 插件作者：hyq
> - 插件说明：
> - 插件分类：['第三方工具集成', '文件管理', '多媒体', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hyq2890-blip/netdisk-ai-notes-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?baidu-ai-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hyq2890-blip/netdisk-ai-notes-importer/master/README.md)



## 概述

**Netdisk AI Notes Importer** 是一款专为 Obsidian 设计的插件，主要功能是将百度网盘的 AI 视频笔记转换为本地 Markdown 文件。它支持批量导入、自动下载图片，并保留原视频时间戳链接，实现笔记与视频的精准同步。

该插件适用于需要整理和管理百度网盘 AI 视频笔记的用户，特别是希望将云端笔记本地化、便于离线查阅或结合其他插件（如 Media Extended）进行深度视频笔记管理的场景。目前仅确认在 Windows 桌面端可用，且需启用 Obsidian 核心的 Web Viewer 插件。

核心特色包括：
1. **批量导入与同步**：支持一次性导入多篇笔记，并具备增量同步功能。
2. **时间戳跳转**：笔记中的时间点可直接点击跳转至原视频对应位置。
3. **灵活存储管理**：v0.8.1 版本新增保存文件夹选择功能，支持指定已有或新建文件夹，图片自动存入 `attachments` 子目录，简化了目录结构。
4. **本地化独立**：无需内部 API 集成，完全基于本地文件操作。

使用建议：
1. 确保在 Windows 系统下使用，并提前登录百度网盘。
2. 在 Obsidian 中通过 Web Viewer 打开目标 AI 笔记页面，等待内容加载完毕。
3. 点击左侧边栏按钮启动导入，根据提示选择保存位置。
4. 升级插件时请保留 `data.json` 配置文件，以确保原有笔记和图片链接不失效。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


