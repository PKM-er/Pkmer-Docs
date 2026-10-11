---
uid: 1791709366478000
title: 'Obsidian 插件：DeepSeek Harness Native'
tags: ['第三方工具集成', '自动化与AI', '界面优化', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DeepSeek Harness Native

> [!Note] 插件名片
> - 插件名称：DeepSeek Harness Native
> - 插件作者：wuruihi
> - 插件说明：
> - 插件分类：['第三方工具集成', '自动化与AI', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wuruihi/obsidian-deepseek-harness-native)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?deepseek-harness-native)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wuruihi/obsidian-deepseek-harness-native/master/README.md)



## 概述

**1. 主要功能**
该插件将本地 DeepSeek Harness (DSH) 嵌入 Obsidian 侧边栏，提供原生对话界面。支持双向桥接，可一键发送笔记内容至 DSH 并回写结果。具备自动管理 DSH 服务的能力，能自动探测、拉起本地服务或执行一键安装，并支持模型切换（Flash/Pro）及执行权限控制。

**2. 适用场景**
适用于需要高频使用 AI 辅助写作、代码生成或文档检索的知识工作者。特别适合希望在不切换浏览器或终端的情况下，直接在笔记工作流中调用本地 AI 智能体的用户，强调数据隐私与本地化处理。

**3. 核心特色**
*   **原生集成**：无需浏览器，直接在 Obsidian 内交互，支持流式回复与思考链渲染。
*   **自动化服务管理**：智能探测本机 DSH 实例，未运行时自动启动，支持“附身”桌面版或 CLI 版。
*   **隐私安全**：仅连接本机 `127.0.0.1`，数据不经过第三方服务器。
*   **双向桥接**：实现笔记与 AI 上下文的无缝同步。

**4. 使用建议**
*   **前置准备**：需先安装 DSH 桌面版或 CLI 版，插件仅作为界面，不含引擎。
*   **安装方式**：推荐手动放置插件文件夹至 `.obsidian/plugins/` 目录，简单可靠；若需自动更新可选用 BRAT 安装。
*   **故障排查**：若连接失败，请在设置中检查“连接的 DSH 实例”是否为“自动”，并使用面板内的“诊断 DSH”功能查看探活结果及下一步指引。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


