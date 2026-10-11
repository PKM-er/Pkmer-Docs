---
uid: 1791709367756000
title: 'Obsidian 插件：Immich Picker'
tags: ['第三方工具集成', '图片与PDF', '文件管理', 'obsidian插件']
description: 'Insert images from a self-hosted Immich photo server. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Immich Picker

> [!Note] 插件名片
> - 插件名称：Immich Picker
> - 插件作者：Eiko Wagenknecht
> - 插件说明：Insert images from a self-hosted Immich photo server. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '图片与PDF', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/eikowagenknecht/obsidian-immich-picker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?immich-picker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/eikowagenknecht/obsidian-immich-picker/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户从自托管的 Immich 照片服务器中选取并插入图片到 Obsidian 笔记中。支持浏览最近上传的照片、搜索特定图片、浏览相册，并可将单张或整个相册的图片嵌入笔记。

**2. 适用场景**
适用于拥有自托管 Immich 服务器（2.x 或 3.x 版本）的用户，特别是希望在笔记中快速引用个人照片库、利用 AI 搜索功能查找特定场景图片，或需要将照片 URL 转换为本地缩略图/链接的场景。

**3. 核心特色**
*   **AI 智能搜索**：利用 Immich 的 CLIP 技术，支持通过自然语言（如“海滩日落”）搜索照片。
*   **灵活存储模式**：支持将图片存储为本地缩略图、服务器链接或公开分享链接，并可批量转换。
*   **日期智能过滤**：能根据笔记标题或 Frontmatter 中的日期自动筛选对应日期的照片。
*   **安全性高**：API 密钥存储在操作系统凭证管理器中，不嵌入笔记文件。

**4. 使用建议**
需确保 Immich 服务器版本兼容，并配置具有 `asset.read`、`asset.view` 及可选 `album.read` 权限的 API 密钥。插件支持本地局域网及公网 URL。目前尚未进入官方社区插件列表，需手动安装。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


