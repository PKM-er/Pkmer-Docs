---
uid: 1791709368551000
title: 'Obsidian 插件：Media Archive'
tags: ['文件管理', '图片与PDF', '备份与恢复', '效率工具', 'obsidian插件']
description: 'Move deleted media to an archive folder instead of the trash, and archive media that no note uses anymore. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Media Archive

> [!Note] 插件名片
> - 插件名称：Media Archive
> - 插件作者：bishop67
> - 插件说明：Move deleted media to an archive folder instead of the trash, and archive media that no note uses anymore. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '图片与PDF', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bishop67/media-archive)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?media-archive)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bishop67/media-archive/master/README.md)



## 概述

**1. 主要功能**
Media Archive 插件旨在优化 Obsidian 中媒体文件（图片、视频、音频、PDF）的生命周期管理。它拦截删除操作，将文件移至 `Media/Archive` 归档文件夹而非系统回收站，并自动清理不再被笔记引用的闲置文件，实现存储空间的自动整理。

**2. 适用场景**
适用于频繁插入媒体文件、且希望保持 Vault 整洁的用户。特别适合那些担心误删重要素材，或希望自动清理历史遗留无用附件的场景。

**3. 核心特色**
*   **智能自动归档**：未被笔记引用（链接、嵌入、Frontmatter或Canvas）的文件会自动从 `Uploads` 移至 `Archive`；若笔记重新引用归档文件，会自动移回。
*   **安全保护机制**：删除仍在使用的文件时会被拦截并提示；从归档中删除才是永久移除。
*   **无感链接更新**：文件移动时自动更新笔记中的链接，无需手动确认“是否更新链接”。
*   **缓冲期设计**：新上传文件有60秒缓冲期，防止刚上传即被误归档。

**4. 使用建议**
*   将 Obsidian 的“附件存放路径”设置为 `Media/Uploads`。
*   定期使用命令面板中的“Sort media by usage now”手动触发一次整理，或依赖其自动运行。
*   注意：修改插件设置中的文件夹路径不会移动现有文件，需手动迁移。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


