---
uid: 1791709366451000
title: 'Obsidian 插件：DayDAV'
tags: ['日历与时间', '第三方工具集成', '任务管理', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DayDAV

> [!Note] 插件名片
> - 插件名称：DayDAV
> - 插件作者：haoenz
> - 插件说明：
> - 插件分类：['日历与时间', '第三方工具集成', '任务管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/haoenz/obsidian-daydav)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?daydav)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/haoenz/obsidian-daydav/master/README.md)



## 概述

**1. 主要功能**
DayDAV 允许用户在 Obsidian 日记中以纯文本列表形式创建和编辑日程，并通过 CalDAV 协议与外部日历双向同步。它不内置日历视图或登录功能，而是依赖 Full Calendar Remastered 插件作为日历客户端，将远程 CalDAV 集合作为数据源。

**2. 适用场景**
适合习惯在 Markdown 中进行日记记录，但需要使用专用日历应用（如手机系统日历）查看日程或接收系统提醒的用户。只需在日记中编写一次事件，即可自动同步至手机等设备。

**3. 核心特色**
- **极简集成**：复用 Obsidian 原生日记插件的路径设置，无需额外配置文件夹结构。
- **纯文本友好**：日程以易读的列表项形式存在，支持直接编辑，而非复杂的 UI 交互。
- **单一数据源**：明确以远程 CalDAV 为唯一真实来源，避免本地与远程数据冲突。
- **依赖明确**：必须配合 Full Calendar Remastered 使用，且需确保该插件已配置可写的 CalDAV 源。

**4. 使用建议**
- **前置要求**：确保 Obsidian 版本 ≥1.13.0，并正确配置 Full Calendar Remastered 的 CalDAV 连接。
- **避免冲突**：切勿同时在 Full Calendar Remastered 中启用“Daily Note calendar”功能处理同一行事件，否则会导致事件所有权重复。
- **安全测试**：正式使用前，请务必在临时日历中测试，并定期备份 Vault 及日历数据，以防数据丢失。
- **模板设置**：在日记模板中添加 `## Events` 标题及 `daydav` 代码块，以便快速访问“新建事件”和“立即同步”按钮。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


