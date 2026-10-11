---
uid: 1791709365407000
title: 'Obsidian 插件：Attachment Cloud Cache'
tags: ['文件管理', '第三方工具集成', '图片与PDF', 'obsidian插件']
description: 'Upload attachments to your own S3-compatible storage and keep a local cache, so images still render with no network. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Attachment Cloud Cache

> [!Note] 插件名片
> - 插件名称：Attachment Cloud Cache
> - 插件作者：udarent
> - 插件说明：Upload attachments to your own S3-compatible storage and keep a local cache, so images still render with no network. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '图片与PDF', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/udarent/obsidian-plugins-attachment-cloud-cache)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?attachment-cloud-cache)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/udarent/obsidian-plugins-attachment-cloud-cache/master/README.md)



## 概述

**插件名称**：Attachment Cloud Cache（附件云端缓存）

**1. 主要功能**
该插件允许用户将笔记中的附件（如图片、PDF、音频等）自动上传至用户自有的 S3 兼容存储（如 Cloudflare R2、AWS S3、MinIO 等）。同时，它在本地保留一份可丢弃的缓存副本，确保笔记中的媒体文件始终能正常渲染。

**2. 适用场景**
适用于希望将附件数据存储在自有云服务以节省本地磁盘空间，同时又不希望因网络波动或存储服务中断导致笔记内容无法查看的用户。特别适合需要长期归档大量多媒体资料且对离线阅读有要求的场景。

**3. 核心特色**
- **零网络请求渲染**：依赖本地缓存显示内容，即使断网或云端存储停机，笔记中的图片等附件依然清晰可见。
- **私有存储支持**：支持任意 S3 兼容端点，数据主权归用户所有，无需依赖第三方图床。
- **无缝体验**：粘贴文件即自动上传，笔记中保留可分享的链接，本地保留副本，兼顾便携性与稳定性。

**4. 使用建议**
- 需确保 Obsidian 版本在 **1.13.0** 及以上。
- 使用前请配置好有效的 S3 存储凭证（Access Key/Secret Key）。
- 建议定期清理本地缓存目录以释放磁盘空间，因为该缓存设计为“可丢弃”，核心数据已存储在云端。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


