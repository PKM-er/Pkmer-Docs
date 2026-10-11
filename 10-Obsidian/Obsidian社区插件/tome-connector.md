---
uid: 1791709370489000
title: 'Obsidian 插件：Tome Connector'
tags: ['第三方工具集成', '图片与PDF', '文件管理', '数据处理', 'obsidian插件']
description: 'Sends statblocks, maps, props, encounters and characters to a Tome server, and compiles a folder of notes into a PDF for its reference library. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tome Connector

> [!Note] 插件名片
> - 插件名称：Tome Connector
> - 插件作者：tome-vtt
> - 插件说明：Sends statblocks, maps, props, encounters and characters to a Tome server, and compiles a folder of notes into a PDF for its reference library. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '图片与PDF', '文件管理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tome-vtt/tome-connector)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tome-connector)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tome-vtt/tome-connector/master/README.md)



## 概述

**Tome Connector** 是一款专为 D&D 5e 和 Pathfinder 2e 玩家设计的 Obsidian 插件，旨在将笔记内容同步至 Tome 服务器。

**主要功能**：支持将状态块、地图、道具、遭遇战及角色数据发送至 Tome 服务器，并能将笔记文件夹编译为 PDF 供参考库使用。

**适用场景**：适用于使用 Obsidian 管理 TRPG 战役资料、角色卡及怪物数据的玩家，特别是需要与 Tome 平台（如 Tomes Gaming）进行数据互通的用户。

**核心特色**：
1. **规则集兼容**：v1.1.0 起采用命名记录格式（如 `dnd5e`），确保数据被现代 Tome 服务器正确识别，旧版服务器需保留 v1.0.4。
2. **安全同步**：API 密钥通过 Obsidian SecretStorage 存储，不写入本地配置文件；支持通过标签（如 `#tome`）筛选特定笔记进行同步。
3. **灵活配置**：支持自定义服务器地址，默认连接官方托管服务，并可选在发送前压缩图片以优化传输。

**使用建议**：
- 确保 Obsidian 版本 ≥1.11.4，且连接的是 2026 年 9 月 11 日之后的 Tome 服务器版本。
- 安装后需在设置中配置 API 密钥和同步标签。
- 若使用旧版 Tome 服务器，请降级至 v1.0.4 以避免数据格式不兼容问题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


