---
uid: 1791709370348000
title: 'Obsidian 插件：Tasks Bridge'
tags: ['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
description: 'Tasks Bridge is an integration layer for connecting Obsidian with external task-management services, currently supporting Todoist with more backends planned. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tasks Bridge

> [!Note] 插件名片
> - 插件名称：Tasks Bridge
> - 插件作者：Haiqiang Zhang
> - 插件说明：Tasks Bridge is an integration layer for connecting Obsidian with external task-management services, currently supporting Todoist with more backends planned. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/haiqiang-zhang/obsidian-tasks-bridge-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tasks-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/haiqiang-zhang/obsidian-tasks-bridge-plugin/master/README.md)



## 概述

**1. 主要功能**
Tasks Bridge 是连接 Obsidian 与外部任务管理服务的集成插件，目前主要支持 Todoist。它提供两种核心工作流：一是在笔记中通过查询块实时渲染 Todoist 过滤器；二是将 Todoist 项目单向同步至 Vault 指定文件夹，生成 Markdown 文件。

**2. 适用场景**
适合希望将外部任务数据引入 Obsidian 进行本地化查看、整理或管理的用户。特别适用于需要利用 Obsidian 强大的笔记关联能力，同时保持 Todoist 作为任务数据源（System of Record）的场景。

**3. 核心特色**
- **架构清晰**：明确区分外部服务为数据源，Obsidian 为交互层。
- **灵活同步**：支持将 Todoist 项目映射为嵌套文件夹，任务转为 Markdown 文件，兼容 Obsidian Bases 管理。
- **安全机制**：采用基于所有权的保护模式，保留用户自定义属性及非插件管理的笔记内容，避免数据覆盖。
- **扩展性**：基于成熟的 Todoist Sync 开发，未来计划支持 TickTick、Microsoft To Do 等后端。

**4. 使用建议**
- 初次使用建议先测试“查询块”功能，体验只读查看效果。
- 启用“项目同步”前，请指定独立的 Vault 文件夹，避免与现有笔记结构冲突。
- 注意该插件目前未经 Obsidian 官方人工审核，建议定期备份数据。
- 同步为单向（Todoist 到 Obsidian），在 Obsidian 中的修改不会反向同步至 Todoist，请据此规划工作流。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


