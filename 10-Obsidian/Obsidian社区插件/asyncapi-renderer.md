---
uid: 1791709365388000
title: 'Obsidian 插件：AsyncAPI Renderer'
tags: ['图表与可视化', '编辑工具', '编程与脚本', 'obsidian插件']
description: 'Render AsyncAPI specification files (2.x and 3.x) with a source editor. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AsyncAPI Renderer

> [!Note] 插件名片
> - 插件名称：AsyncAPI Renderer
> - 插件作者：Grancar
> - 插件说明：Render AsyncAPI specification files (2.x and 3.x) with a source editor. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '编辑工具', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/grancar/obsidian-asynapi-renderer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?asyncapi-renderer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/grancar/obsidian-asynapi-renderer/master/README.md)



## 概述

**1. 主要功能**
该插件允许在 Obsidian 中直接渲染 AsyncAPI 2.x 和 3.x 规范文件（.yaml/.yml/.json）。支持在笔记中通过代码块嵌入内联规范或引用库内文件，并提供“源编辑器”与“预览”模式的切换功能。

**2. 适用场景**
适用于 API 设计师、后端开发人员及文档维护者，特别是在使用 Obsidian 管理异步 API 文档、微服务架构设计或技术规格说明时，可实现规范的可视化阅读与快速编辑。

**3. 核心特色**
- **深度集成**：支持通过 `obsidian://` 协议进行深度链接，并在文件资源管理器中提供右键“在 AsyncAPI 视图中打开”的快捷菜单。
- **灵活配置**：可自定义默认打开模式、渲染防抖延迟，以及是否接管 .json 文件（避免与其他插件冲突）。
- **官方渲染引擎**：基于官方 `@asyncapi/react-component` 构建，确保渲染效果准确。

**4. 使用建议**
- 若需处理 .json 文件，请确保没有其他插件（如 OpenAPI Renderer）占用该扩展名，否则需手动禁用冲突插件。
- 首次使用外部深度链接时，需在 Obsidian 中授权 `asyncapi-open` 动作。
- 注意插件体积较大（约 3MB），因包含完整渲染库，建议在性能较好的设备上使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


