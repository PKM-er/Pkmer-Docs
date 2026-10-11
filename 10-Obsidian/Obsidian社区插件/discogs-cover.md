---
uid: "1791709366544000"
title: "Obsidian 插件：Discogs Cover"
tags: ['第三方工具集成', '图片与PDF', '样式与美化', 'obsidian插件']
description: "Shows the Discogs cover art for a note's 'discogs' release ID, cached locally and usable in Bases image columns. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：Discogs Cover

> [!Note] 插件名片
> - 插件名称：Discogs Cover
> - 插件作者：Florent
> - 插件说明：Shows the Discogs cover art for a note's 'discogs' release ID, cached locally and usable in Bases image columns. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '图片与PDF', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/3f3l0/obsidian-discogs-cover)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?discogs-cover)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/3f3l0/obsidian-discogs-cover/master/README.md)



## 概述

**1. 主要功能**
该插件根据笔记 Frontmatter 中的 `discogs` 属性（发行ID或URL），在标题上方显示 Discogs 唱片封面。图片首次下载后自动缓存至本地 `_discogs-covers` 文件夹，支持离线查看。

**2. 适用场景**
适用于使用 Obsidian 管理音乐收藏、构建唱片库或媒体资料库的用户，特别是在需要可视化浏览专辑封面的场景中。

**3. 核心特色**
*   **本地缓存**：图片仅下载一次，节省流量且支持离线使用。
*   **Bases 集成**：缓存文件可直接用于 Obsidian Bases 的图片列公式，实现画廊式展示。
*   **批量预缓存**：提供“Cache all Discogs covers”命令，可一次性为所有笔记预加载封面。
*   **灵活配置**：支持自定义图片大小、对齐方式，并可选填入个人 API Token 以提高请求速率限制。

**4. 使用建议**
在笔记 Frontmatter 中添加 `discogs: "ID"` 或完整 URL 即可生效。建议在浏览 Bases 画廊前，先运行批量缓存命令以优化加载体验。若频繁访问，建议申请个人 API Token 以避免触发速率限制。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

