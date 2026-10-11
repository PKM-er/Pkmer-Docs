---
uid: 1791709365749000
title: 'Obsidian 插件：Calendar and Contact Notes'
tags: ['日历与时间', '第三方工具集成', '文件管理', 'obsidian插件']
description: 'Mirror CalDAV events and CardDAV contacts as notes; the server stays the source of truth. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Calendar and Contact Notes

> [!Note] 插件名片
> - 插件名称：Calendar and Contact Notes
> - 插件作者：Johannes Kaindl
> - 插件说明：Mirror CalDAV events and CardDAV contacts as notes; the server stays the source of truth. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '第三方工具集成', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/johannes-kaindl/calendar-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?calendar-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/johannes-kaindl/calendar-notes/master/README.md)



## 概述

**主要功能**
该插件将 CalDAV 日历事件、任务及 CardDAV 联系人镜像为 Obsidian 库中的 Markdown 笔记。服务器作为唯一数据源，插件定期同步，确保本地笔记与服务器状态一致。

**适用场景**
适用于希望将分散在服务器上的日程、待办事项和联系人整合进 Obsidian 工作流的用户，特别是需要利用 Obsidian 强大的链接、查询和笔记管理能力来组织个人信息的场景。

**核心特色**
1. **单向写入保护**：采用“双向可见，单向写入”机制。本地笔记仅用于查看，手动修改 Frontmatter 不会直接同步至服务器，避免数据冲突。
2. **显式变更控制**：对服务器的修改（如移动事件、更改电话）必须通过特定命令执行，且每次操作前都会显示差异对比（Diff）供用户确认，确保数据安全。
3. **全类型支持**：不仅支持事件，还将日历服务器中的任务（Tasks）和联系人（Contacts）统一转化为笔记。

**使用建议**
1. 请勿直接编辑笔记的 Frontmatter 来修改服务器数据，务必使用插件提供的命令进行变更。
2. 在发送任何更改前，仔细检查差异预览，确保无误后再确认。
3. 定期检查同步状态，确保本地镜像与服务器保持最新同步。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


