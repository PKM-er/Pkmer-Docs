---
uid: 1791709368557000
title: 'Obsidian 插件：Media Importer'
tags: ['文件管理', '图片与PDF', '第三方工具集成', 'obsidian插件']
description: 'Download remote media referenced in your notes and store it locally or on a remote backend (WebDAV, S3). - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Media Importer

> [!Note] 插件名片
> - 插件名称：Media Importer
> - 插件作者：Aki Hakune
> - 插件说明：Download remote media referenced in your notes and store it locally or on a remote backend (WebDAV, S3). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '图片与PDF', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/git-akihakune/media-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?media-importer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/git-akihakune/media-importer/master/README.md)



## 概述

**1. 主要功能**
Media Importer 自动扫描笔记中引用的远程媒体（图片、音视频），将其下载并存储到本地库或远程后端（WebDAV/S3），同时自动重写笔记中的链接以指向新位置。

**2. 适用场景**
适用于依赖外部链接保存媒体资源的用户，特别是希望将临时网络资源归档至个人知识库，或需要集中管理媒体文件以优化同步性能的场景。

**3. 核心特色**
*   **多后端支持**：支持本地、WebDAV 及任意 S3 兼容服务。
*   **幂等与安全**：重复运行自动跳过已处理项，具备防冲突重命名机制。
*   **预览模式**：提供“Dry-run”功能，允许在修改前预览所有变更。
*   **灵活过滤**：支持按主机名黑白名单及文件大小限制进行筛选。

**4. 使用建议**
建议首次使用前启用“Dry-run”模式检查扫描结果，确保无误后再执行正式导入。可根据网络环境配置允许列表，避免下载无关或过大的文件，保持库的整洁与高效。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


