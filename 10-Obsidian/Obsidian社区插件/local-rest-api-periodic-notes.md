---
uid: 1786577079644003
title: 'Obsidian 插件：Local REST API - Periodic Notes'
tags: ['第三方工具集成', '日历与时间', '编程与脚本', '效率工具', 'obsidian插件']
description: '在本地REST API里添加每日、每周、每月、每季度和每年笔记的定期笔记端点，还配备一个用于解析当前笔记路径的MCP工具。 - 此插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local REST API - Periodic Notes

> [!Note] 插件名片
> - 插件名称：Local REST API - Periodic Notes
> - 插件作者：Adam Coddington
> - 插件说明：在本地REST API里添加每日、每周、每月、每季度和每年笔记的定期笔记端点，还配备一个用于解析当前笔记路径的MCP工具。 - 此插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['第三方工具集成', '日历与时间', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/coddingtonbear/obsidian-local-rest-api-periodic-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-rest-api-periodic-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/coddingtonbear/obsidian-local-rest-api-periodic-notes/master/README.md)



## 概述

### 主要功能
为 Obsidian Local REST API 增加周期性笔记支持，提供 `/periodic/{period}/` 等 REST 端点，可对每日、每周、每月、每季度和每年的笔记进行读取、创建、追加、修改或删除操作；还有 `periodic_note_get_path` 工具，能返回当前周期性笔记在库中的相对路径，必要时可创建笔记。

### 适用场景
适用于需要通过 REST API 对周期性笔记进行自动化管理和操作的场景，如与外部程序集成，实现定时创建、更新周期性笔记等。

### 核心特色
借助 `obsidian - daily - notes - interface` 委托核心“每日笔记”和社区“周期性笔记”插件的文件夹、格式、模板和创建逻辑，遵循 `/vault/` 的内容协商和写入语义，不重复实现宿主私有方法。

### 使用建议
需先安装并启用 Obsidian Local REST API（扩展 API 版本 2 或更高），同时配置好核心“每日笔记”插件和/或社区“周期性笔记”插件。未在这些插件中启用的周期会返回 `400` 错误。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


