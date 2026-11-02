---
uid: 1793625615996001
title: "Obsidian 插件：MCP Server"
tags: ["自动化与AI", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Expose your vault to AI agents via Model Context Protocol (MCP). - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MCP Server

> [!Note] 插件名片
> - 插件名称：MCP Server
> - 插件作者：leonezz
> - 插件说明：Expose your vault to AI agents via Model Context Protocol (MCP). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/leonezz/obsidian-mcp-server)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mcp-server)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/leonezz/obsidian-mcp-server/master/README.md)



## 概述

MCP Server 插件在 Obsidian 内部运行一个本地 Model Context Protocol 服务器，旨在让外部 AI 工具直接接入你的知识库。它打破了笔记应用与 AI 助手之间的壁垒，允许 Claude Desktop、Cursor 等客户端读取当前活跃文件、检索全库内容，甚至直接执行创建、编辑、重命名笔记等操作。这意味着 AI 不再只是被动回答，而是能基于你实时的工作上下文，主动参与知识管理流程。

典型场景包括：当你正在撰写一篇长文时，AI 助手可以通过 `get_active_file` 获取当前内容，结合 `search_notes` 查找库中相关历史笔记，辅助你补充引用或整理思路。另一个场景是快速记录灵感，通过 `append_daily_note` 工具，AI 可以直接将对话中的关键结论追加到今日日记中，无需你手动切换窗口或复制粘贴，实现从思考到记录的无缝衔接。

相比其他仅支持只读或简单查询的插件，MCP Server 提供了完整的笔记管理闭环，包括附件处理（AI 可直接“看”图片）和细粒度的搜索功能（支持正则、元数据过滤）。其特色在于内置了会话追踪与使用统计，让你能清晰看到 AI 调用了哪些工具、成功率如何。此外，它默认启用 Bearer Token 认证，并支持通过黑名单路径和标签来隔离敏感内容，在开放接口的同时兼顾了数据隐私安全。

需要注意的是，该插件目前处于 Beta 阶段，虽然核心逻辑已稳定，但建议先备份重要数据再启用。它不适合那些希望 AI 完全离线运行、或不需要 AI 直接修改笔记内容的用户。如果你仅需要简单的文本生成，而不希望 AI 拥有对库文件的写权限，或者对本地端口暴露有极高安全顾虑且无法配置防火墙，则可能不适合安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


