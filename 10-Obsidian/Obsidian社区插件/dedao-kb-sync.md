---
uid: 1791709366471000
title: 'Obsidian 插件：Dedao KB Sync'
tags: ['第三方工具集成', '文件管理', '效率工具', '自动化与AI', 'obsidian插件']
description: 'Sync notes and subscribed blogger content from Dedao Brain (GetNotes) into your vault with folders and tags. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dedao KB Sync

> [!Note] 插件名片
> - 插件名称：Dedao KB Sync
> - 插件作者：曹猛
> - 插件说明：Sync notes and subscribed blogger content from Dedao Brain (GetNotes) into your vault with folders and tags. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/leschamy4-del/obsidian-dedao-kb-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dedao-kb-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/leschamy4-del/obsidian-dedao-kb-sync/master/README.md)



## 概述

**1. 主要功能**
该插件专为得到大脑（GetNotes）会员设计，可将选定的知识库、订阅主题及博主内容同步至本地 Obsidian 库。它支持按知识库和博主自动创建文件夹，并将语音转写文本直接渲染进 Markdown 笔记，同时支持定时增量同步。

**2. 适用场景**
适用于重度使用得到大脑获取知识，且希望将在线笔记本地化、结构化管理的用户。特别适合需要离线阅读、二次加工笔记，或希望将分散的订阅内容集中归档的场景。

**3. 核心特色**
*   **结构化归档**：每个知识库独立文件夹，博主内容按名称分组，层级清晰。
*   **增量同步**：基于 UID 跳过已存在笔记，仅同步新内容，不删除本地文件，安全保守。
*   **轻量附件策略**：默认不下载图片、音视频等附件，避免产生冗余资源文件夹，保持库的整洁。
*   **定时任务**：支持最小5分钟间隔的自动同步，从上次成功检查点恢复。

**4. 使用建议**
*   安装后需在设置中手动选择要同步的知识库，未选择时定时同步将跳过。
*   建议定期手动检查同步状态，确保网络连接正常以维持增量同步的准确性。
*   若需保留原始媒体文件，需自行调整配置开启附件下载，但需注意这会显著增加本地存储占用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


