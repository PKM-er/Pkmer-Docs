---
uid: 1786577082850004
title: 'Obsidian 插件：Strip Images'
tags: ['编辑工具', '文件管理', '图片与PDF', '效率工具', 'obsidian插件']
description: '右键点击笔记，就能移除所有嵌入的图片，还能删除仅被该笔记引用的图片文件（这些文件会被移到 .trash 文件夹）。 - 此插件尚未经过 Obsidian 官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Strip Images

> [!Note] 插件名片
> - 插件名称：Strip Images
> - 插件作者：dwSun
> - 插件说明：右键点击笔记，就能移除所有嵌入的图片，还能删除仅被该笔记引用的图片文件（这些文件会被移到 .trash 文件夹）。 - 此插件尚未经过 Obsidian 官方人员的手动审核。
> - 插件分类：['编辑工具', '文件管理', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dwsun/obs-StripImages)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?strip-images)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dwsun/obs-StripImages/master/README.md)



## 概述

### Strip Images 插件总结
1. **主要功能**：右键点击 Markdown 笔记，可移除该笔记内所有图片嵌入。若图片文件仅被此笔记引用，会将其移动到 `.trash/` 文件夹；若图片被多个笔记共享，仅移除嵌入。支持检测 `![[wiki]]`、`![](markdown)` 嵌入及网络 URL 嵌入。
2. **适用场景**：适用于需要清理笔记中图片嵌入，或删除仅本笔记引用图片文件的场景。
3. **核心特色**：能准确识别网络嵌入和共享图片，对不同类型图片采取不同处理方式；操作前会弹出确认窗口显示嵌入和文件数量；可保留文件原文件夹结构。
4. **使用建议**：可通过社区插件搜索 “Strip Images” 安装，或手动复制文件到指定目录后在设置中启用。开发时可使用提供的 npm 命令。注意该插件未经过 Obsidian 官方人工审核。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


