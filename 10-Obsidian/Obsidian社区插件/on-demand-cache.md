---
uid: 1791709368963000
title: 'Obsidian 插件：On-Demand Cache'
tags: ['文件管理', '效率工具', '第三方工具集成', 'obsidian插件']
description: 'Cache remote attachments on demand. Downloads files only when you open a note, then serves the local copy instead of the network file while keeping your original links unchanged. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：On-Demand Cache

> [!Note] 插件名片
> - 插件名称：On-Demand Cache
> - 插件作者：czhhbp
> - 插件说明：Cache remote attachments on demand. Downloads files only when you open a note, then serves the local copy instead of the network file while keeping your original links unchanged. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '效率工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/czhhbp/obsidian-on-demand-cache)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?on-demand-cache)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/czhhbp/obsidian-on-demand-cache/master/README.md)



## 概述

**1. 主要功能**
该插件实现远程附件（图片、视频、音频、文档）的按需缓存。仅在打开笔记时下载文件，并在渲染时透明替换为本地副本，同时保持笔记中的原始网络链接不变。

**2. 适用场景**
适用于依赖大量远程媒体资源的笔记库，特别适合需要在弱网、离线或飞行模式下阅读笔记的用户，以及多设备同步但希望节省同步带宽的场景。

**3. 核心特色**
*   **无损链接**：笔记内容不被修改，原始 URL 保留，同步时仅同步文本。
*   **按需加载**：避免批量预下载，节省带宽，打开即加载。
*   **持久缓存**：文件存储于 `.cache` 目录（不参与同步），支持完全离线阅读。
*   **智能去重**：基于内容哈希去重，节省磁盘空间。
*   **多端自动补全**：在新设备打开笔记时自动下载缺失附件。
*   **双语界面**：自动跟随 Obsidian 语言设置。

**4. 使用建议**
建议开启该插件以优化远程媒体体验。注意 `.cache` 文件夹通常应加入同步排除列表，以避免缓存文件被同步。若需清理空间，可定期手动清理缓存目录。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


