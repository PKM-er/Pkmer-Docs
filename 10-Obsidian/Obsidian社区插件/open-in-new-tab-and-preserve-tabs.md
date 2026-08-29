---
uid: 1786577081140001
title: 'Obsidian 插件：Open in New Tab and Preserve Tabs'
tags: ['文件管理', '界面优化', '效率工具', 'obsidian插件']
description: '在新标签页中打开文件，同时保留现有文件标签页。——此插件尚未经过Obsidian官方人员手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Open in New Tab and Preserve Tabs

> [!Note] 插件名片
> - 插件名称：Open in New Tab and Preserve Tabs
> - 插件作者：Zhihao Nan
> - 插件说明：在新标签页中打开文件，同时保留现有文件标签页。——此插件尚未经过Obsidian官方人员手动审核。
> - 插件分类：['文件管理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zhihaonan/open-in-new-tab-and-preserve-tabs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-in-new-tab-and-preserve-tabs)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zhihaonan/open-in-new-tab-and-preserve-tabs/master/README.md)



## 概述

### Open in New Tab and Preserve Tabs插件总结
1. **主要功能**：改变Obsidian打开文件的行为，打开新文件时会在新标签页显示，同时保留当前文件所在标签页。
2. **适用场景**：适用于在文件资源管理器、搜索结果、最近文件、日历每日笔记等使用Obsidian正常 `openFile` 流程打开文件的场景。
3. **核心特色**：若新文件已在其他标签页打开，会直接切换到该标签页，避免重复打开；当前标签页为空时，会复用空标签页；打开已激活的相同文件，会保持当前标签页。
4. **使用建议**：可从Obsidian社区插件中搜索安装并启用该插件；也能手动下载 `manifest.json` 和 `main.js` 文件，放置到指定目录，重新加载Obsidian后在社区插件中启用。该插件会包装Obsidian的 `WorkspaceLeaf.openFile` 方法，卸载时会恢复原始方法。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


