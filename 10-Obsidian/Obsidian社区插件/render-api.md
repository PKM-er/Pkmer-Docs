---
uid: 1786577082229001
title: 'Obsidian 插件：Render API'
tags: ['第三方工具集成', '编程与脚本', '自动化与AI', 'obsidian插件']
description: '通过REST API和MCP服务器公开Dataview/Tasks的渲染结果。让AI工具能够以编程方式访问你仓库里的渲染内容。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Render API

> [!Note] 插件名片
> - 插件名称：Render API
> - 插件作者：caesarloo
> - 插件说明：通过REST API和MCP服务器公开Dataview/Tasks的渲染结果。让AI工具能够以编程方式访问你仓库里的渲染内容。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '编程与脚本', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/caesarloo/render-api)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?render-api)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/caesarloo/render-api/master/README.md)



## 概述

### Render API 插件总结
1. **主要功能**：这是一款仅适用于桌面端的 Obsidian 插件，通过本地 REST API 公开 Dataview、Tasks 和通用 Markdown 的渲染结果，让 AI 工具（如 Hermes Agent、Claude Code 或自定义脚本）能以编程方式访问 Vault 的渲染内容。
2. **适用场景**：适用于需要让 AI 工具获取 Obsidian Vault 渲染内容的场景，方便进行数据处理和分析。
3. **核心特色**：提供本地 REST API 接口，可将渲染结果暴露给外部工具；虽涉及一些权限调用，但均为实现功能所需，且不访问外部网络（除非用户配置），部分权限调用有明确用途且数据处理均为本地操作。
4. **使用建议**：使用前了解插件的权限调用情况，如启动本地 HTTP 服务器、调用 Dataview 插件 API、访问系统剪贴板等；若在 WSL 环境使用，可利用系统身份信息自动检测网关 IP；首次加载时会自动分发 MCP 标准输入输出桥接脚本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


