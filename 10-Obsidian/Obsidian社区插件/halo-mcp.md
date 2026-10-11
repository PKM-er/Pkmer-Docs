---
uid: 1791709367422000
title: 'Obsidian 插件：Halo-MCP'
tags: ['第三方工具集成', '发布工具', '自动化与AI', 'obsidian插件']
description: 'Publish content to Halo sites through the official Halo MCP Server - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Halo-MCP

> [!Note] 插件名片
> - 插件名称：Halo-MCP
> - 插件作者：LHY
> - 插件说明：Publish content to Halo sites through the official Halo MCP Server - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lhy0125/obsidian-halo)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?halo-mcp)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lhy0125/obsidian-halo/master/README.md)



## 概述

**1. 主要功能**
该插件通过官方 Halo MCP Server 后端，实现 Obsidian 笔记与 Halo 站点的双向同步。支持文章/单页的发布、更新、拉取及预览，提供全文搜索（含草稿）、附件管理、回收站恢复、批量操作及基于路径的站点路由功能。

**2. 适用场景**
适用于使用 Halo 2.26+ 作为个人博客或内容管理平台，且习惯使用 Obsidian 进行笔记管理和内容创作的开发者或博主。

**3. 核心特色**
*   **MCP 架构**：基于官方 MCP Server，区别于传统 REST API 插件，可与原版插件共存。
*   **元数据映射**：支持在笔记 Frontmatter 中直接读写 Halo 的可见性、置顶、发布时间等 6 个核心字段。
*   **批量处理**：支持全库批量推送为草稿或发布，仅需一次确认。
*   **灵活路由**：通过 Glob 模式将不同路径的笔记自动分发至不同的 Halo 站点。

**4. 使用建议**
*   确保 Halo 版本 ≥ 2.26 并启用官方 MCP Server 插件。
*   需在 Halo 控制台“工具 → MCP 服务”中创建 Access Key。
*   注意该插件 ID 为 `halo-mcp`，与上游 `halo` 插件独立，可根据需求选择安装。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


