---
uid: 1791709370149000
title: 'Obsidian 插件：Structurizr Diagrams'
tags: ['图表与可视化', '第三方工具集成', '编程与脚本', 'obsidian插件']
description: 'Embed interactive Structurizr views in Obsidian notes with local rendering. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Structurizr Diagrams

> [!Note] 插件名片
> - 插件名称：Structurizr Diagrams
> - 插件作者：kdas
> - 插件说明：Embed interactive Structurizr views in Obsidian notes with local rendering. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '第三方工具集成', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/okdas/obsidian-structurizr)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?structurizr-diagrams)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/okdas/obsidian-structurizr/master/README.md)



## 概述

**主要功能**
该插件允许在 Obsidian 笔记中嵌入交互式 Structurizr 架构图。它通过本地渲染读取工作区文件，将复杂的系统架构视图直接展示在阅读视图中，无需依赖外部云服务。

**适用场景**
适用于软件架构师、系统设计师及开发者团队。特别适合需要在技术文档、设计笔记或项目知识库中直观展示系统组件、容器及动态交互的场景，尤其适合对数据隐私敏感、要求本地化处理的企业环境。

**核心特色**
1. **完全本地化**：所有渲染均在本地完成，不向任何公共服务器发送笔记或工作区数据，确保绝对隐私。
2. **灵活配置**：支持通过 YAML 属性为不同笔记指定不同的 `.dsl` 或 `.json` 工作区文件，也可设置全局默认工作区。
3. **自动布局**：集成 Graphviz，支持 DSL 视图的自动布局功能，简化图表维护。
4. **桌面端专属**：利用本地 Node.js 服务器和 Structurizr CLI 实现高性能渲染。

**使用建议**
1. **环境准备**：必须安装 Structurizr CLI 和 Graphviz 工具，并配置好默认工作区路径。
2. **文件管理**：建议将架构定义文件（.dsl/.json）存放在 Vault 内的统一目录（如 `architecture/`），便于版本控制和引用。
3. **版本注意**：该插件仅支持桌面版 Obsidian，移动端用户无法使用此功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


