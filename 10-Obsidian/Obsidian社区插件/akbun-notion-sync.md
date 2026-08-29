---
uid: 1786577076002000
title: 'Obsidian 插件：Akbun Notion Sync'
tags: ['第三方工具集成', '发布工具', '效率工具', 'obsidian插件']
description: '把你仓库里的 Markdown 笔记同步到 Notion 页面。——Obsidian 官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Akbun Notion Sync

> [!Note] 插件名片
> - 插件名称：Akbun Notion Sync
> - 插件作者：choisungwook
> - 插件说明：把你仓库里的 Markdown 笔记同步到 Notion 页面。——Obsidian 官方人员尚未对该插件进行人工审核。
> - 插件分类：['第三方工具集成', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/choisungwook/obsidian-plugins)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?akbun-notion-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/choisungwook/obsidian-plugins/master/README.md)



## 概述

### Akbun Notion Sync插件总结
1. **主要功能**：将Obsidian库中的所有Markdown笔记同步到Notion，作为一个父页面的子页面。会遍历整个库，用sha256对笔记进行哈希处理，与上次同步状态对比，新笔记创建为Notion页面，修改的笔记就地更新，库中删除的笔记在Notion中存档。
2. **适用场景**：适用于需要在Obsidian和Notion之间同步笔记的用户，方便在两个平台间共享和管理笔记。
3. **核心特色**：仅支持桌面端；提供集成令牌和OAuth两种认证方式，且凭证存储在库外，保障安全；对Notion API调用进行限流，每秒3次请求，并通过Obsidian通知显示进度。
4. **使用建议**：若选择OAuth认证，需先在Notion创建公共集成，添加特定的重定向URI。使用时留意同步状态文件和凭证文件的位置，避免误删影响同步。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


