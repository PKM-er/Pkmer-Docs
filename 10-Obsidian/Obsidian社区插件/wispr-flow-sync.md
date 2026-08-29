---
uid: 1786577083805001
title: 'Obsidian 插件：Wispr Flow Sync'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: '把 Wispr Flow 会议笔记和文字记录同步到你的仓库里。只读取本地文件，绝不联网。——此插件尚未经过 Obsidian 工作人员手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Wispr Flow Sync

> [!Note] 插件名片
> - 插件名称：Wispr Flow Sync
> - 插件作者：Muhammad Bilal
> - 插件说明：把 Wispr Flow 会议笔记和文字记录同步到你的仓库里。只读取本地文件，绝不联网。——此插件尚未经过 Obsidian 工作人员手动审核。
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/madforstrength/obsidian-wispr-flow-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wispr-flow-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/madforstrength/obsidian-wispr-flow-sync/master/README.md)



## 概述

### Wispr Flow Sync插件总结
1. **主要功能**：将Wispr Flow会议笔记和转录内容同步到Obsidian库中，以Markdown格式存储，每个会议对应一个笔记，包含带有`wispr_id`字段的YAML前置元数据，还可选择生成配套转录文件。
2. **适用场景**：适用于使用Obsidian桌面版且在macOS系统上安装了Wispr Flow并使用过其Notetaker功能的用户。
3. **核心特色**：仅读取本地文件，不连接网络，不与Wispr Flow交互，不使用其API，也不修改Wispr Flow的数据。
4. **使用建议**：
    - 安装方式有两种，可从社区插件浏览器搜索安装，也可手动复制文件到指定目录后启用。
    - 命令面板中有“Sync now”和“Full sync (re-read everything)”两个命令，前者同步上次同步后创建或修改的会议，后者重新读取所有匹配会议。
    - 默认笔记存储在`Meetings/Wispr`，转录文件（若启用）在`Meetings/Wispr/Transcripts`，存储位置可在设置中配置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


