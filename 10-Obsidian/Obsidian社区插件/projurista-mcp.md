---
uid: 1793625620278000
title: "Obsidian 插件：Projurista MCP"
tags: ["自动化与AI", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Expose your vault to Claude Desktop and Claude Code through a local MCP server, with one-click setup and no Node.js install. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Projurista MCP

> [!Note] 插件名片
> - 插件名称：Projurista MCP
> - 插件作者：Jaime Zacarias
> - 插件说明：Expose your vault to Claude Desktop and Claude Code through a local MCP server, with one-click setup and no Node.js install. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ja1mez/projurista-mcp)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?projurista-mcp)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ja1mez/projurista-mcp/master/README.md)



## 概述

Projurista MCP 旨在解决 AI 助手无法直接访问 Obsidian 笔记库的痛点。它通过在 Obsidian 内部运行一个本地 MCP 服务器，让 Claude Desktop 或 Claude Code 能够像使用工具一样操作你的笔记。核心功能包括列出文件夹、读取笔记内容、搜索文本、查询标签及链接关系。若开启写入权限，AI 还能创建、编辑、移动或删除笔记，实现从“只读”到“读写”的完整交互闭环。

典型场景如法律或学术工作流：你可以直接询问 Claude“列出我所有关于‘合同违约’的笔记”，它会自动检索并汇总相关内容；或者让 AI 根据对话内容自动创建新笔记并归档到指定文件夹。另一个例子是快速整理，当你在 Obsidian 中打开某篇笔记时，Claude 能识别当前活动笔记，并根据其上下文提供建议或补充信息，无需手动复制粘贴。

相比其他同类插件，其最大特色是“零依赖”的一键连接。无需安装 Node.js、无需配置复杂证书或手动编辑 JSON 文件，点击按钮即可完成与 Claude Desktop 的对接。此外，它支持可选的语义搜索：若安装了 Smart Connections 插件，AI 即可利用本地嵌入模型进行基于含义的搜索，而不仅仅是关键词匹配。所有数据均保留在本地，服务器仅监听本地回环地址，确保隐私安全。

使用前需注意，Obsidian 必须保持打开状态，因为服务器运行在应用内部。默认模式下 AI 仅具备读取权限，若需写入，必须手动开启“允许写入”开关。该插件不适合需要远程访问笔记库的用户，因为它仅支持本地连接；也不适合对 AI 自动修改笔记持极度保守态度、希望完全隔离 AI 与笔记库交互的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


