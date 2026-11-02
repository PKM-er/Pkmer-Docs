---
uid: 1793625609296001
title: "Obsidian 插件：ChatGPT Inbox Community"
tags: ["自动化与AI", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Create Markdown notes through a paired relay, Lite links or an advanced GitHub inbox. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ChatGPT Inbox Community

> [!Note] 插件名片
> - 插件名称：ChatGPT Inbox Community
> - 插件作者：DAVID
> - 插件说明：Create Markdown notes through a paired relay, Lite links or an advanced GitHub inbox. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/davidsegade/chatgpt-inbox-community)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chatgpt-inbox-community)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/davidsegade/chatgpt-inbox-community/master/README.md)



## 概述

ChatGPT Inbox Community 允许你通过 ChatGPT 或兼容的 MCP 客户端，直接在当前的 Obsidian 库中创建 Markdown 笔记。它提供三种连接模式：无需服务器的 Lite 模式、支持队列与确认的 Relay 模式，以及基于 GitHub 的高级模式。核心优势在于你能选择哪些文件夹允许接收笔记，并通过查看投递回执来确认笔记是否真正写入，而不是盲目假设排队中的笔记已经到达。

典型场景包括在手机上利用 ChatGPT 整理思路并直接存入 Obsidian，或在桌面端通过自定义 MCP 连接让 AI 助手自动归档内容。例如，你可以授权仅 `ChatGPT Inbox` 文件夹接收笔记，让 AI 将生成的待办事项直接写入该目录。若使用 Relay 模式，当 AI 创建笔记后，你会收到 `queued` 状态，需在 Obsidian 中点击“立即接收”以完成验证，最终看到 `delivered` 状态才算成功。

相比同类插件，它特别强调投递状态的透明性，明确区分“已排队”和“已验证写入”，避免误判。Relay 模式支持 OAuth 令牌自动刷新，连接有效期长达三十天，无需频繁重新配对。此外，插件具备冲突检测机制，若目标文件已存在，会提示冲突而非覆盖，确保数据安全。所有凭证均存储在本地 SecretStorage，且插件独立运行，不依赖 Node.js 或 Electron。

使用前需注意，Relay 模式需自行托管 HTTPS 服务器及 PostgreSQL 数据库，可能产生额外成本，且插件不包含公共中继服务。iOS 设备在 Obsidian 后台挂起时无法接收 Relay 笔记，需保持应用活跃。Lite 模式无远程回执，仅适合简单场景。若你不需要复杂的队列确认机制，或无法自行部署中继服务器，此插件可能过于复杂。此外，升级插件不会迁移旧版凭证，需重新配置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


