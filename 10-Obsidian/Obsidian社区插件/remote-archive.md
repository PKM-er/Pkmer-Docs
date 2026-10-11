---
uid: 1791709369667000
title: 'Obsidian 插件：Remote Archive'
tags: ['文件管理', '备份与恢复', '第三方工具集成', 'obsidian插件']
description: 'Move vault files to remote storage and restore them when needed. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Remote Archive

> [!Note] 插件名片
> - 插件名称：Remote Archive
> - 插件作者：StarPanda
> - 插件说明：Move vault files to remote storage and restore them when needed. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/starpandabeg/webdav-archive)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?remote-archive)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/starpandabeg/webdav-archive/master/README.md)



## 概述

**Remote Archive** 是一款专为 Obsidian 设计的空间优化插件，旨在将大型文件（如视频、音频、PDF等）移至远程存储，以释放本地磁盘空间，同时保持文件在库内的无缝访问。

**适用场景**：适合拥有大量媒体附件、面临本地存储压力，且希望在不牺牲笔记完整性的前提下管理大文件的用户。

**核心特色**：
1. **多后端支持**：兼容 AWS S3、Cloudflare R2、Nextcloud 及通用 WebDAV。
2. **数据安全保障**：采用“先上传校验、后删除本地”及“恢复后哈希验证”机制，确保数据零丢失。
3. **智能链接更新**：归档时自动将 `[[file]]` 更新为 `[[file.remote]]`，恢复时还原，维护笔记结构完整性。
4. **内置查看器**：支持直接在 Obsidian 内流式播放音视频、预览图片及查看文本，无需下载原文件。

**使用建议**：
- 此插件**非备份工具**，请勿依赖其作为唯一数据副本，建议配合其他备份方案使用。
- 操作前请确保远程存储配置正确，并理解其通过 `.remote` 标记文件管理状态的工作机制。
- 对于频繁访问的大文件，需权衡网络延迟对体验的影响。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


