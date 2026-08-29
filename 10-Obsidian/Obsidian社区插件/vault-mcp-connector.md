---
uid: 1786577083586001
title: 'Obsidian 插件：Vault MCP Connector'
tags: ['第三方工具集成', '文件管理', '安全与隐私', '效率工具', 'obsidian插件']
description: '通过明确的访问控制，将已批准的仓库上下文和直接的本地文件工具连接到MCP客户端。 - 此插件尚未经过Obsidian工作人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault MCP Connector

> [!Note] 插件名片
> - 插件名称：Vault MCP Connector
> - 插件作者：tristanedu
> - 插件说明：通过明确的访问控制，将已批准的仓库上下文和直接的本地文件工具连接到MCP客户端。 - 此插件尚未经过Obsidian工作人员的手动审核。
> - 插件分类：['第三方工具集成', '文件管理', '安全与隐私', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/vault-mcp/platform)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-mcp-connector)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/vault-mcp/platform/master/README.md)



## 概述

### 主要功能
Vault MCP Connector 是一款将 Obsidian 与 ChatGPT、Claude、Codex 等 MCP 客户端连接的插件。它能控制索引内容，可启动本地 MCP 服务器，提供本地读写的访问级别选择，托管部署仅提供经插件批准的派生索引，还能对可审查的库写入提案进行排队。

### 适用场景
适用于需要在 Obsidian 中与各类 MCP 客户端交互，利用外部智能服务辅助笔记处理的场景。

### 核心特色
有明确的访问控制，可灵活配置索引内容；支持本地和托管两种模式，本地模式无需外部 Node 安装，且不依赖托管服务；远程同步仅发送符合索引策略的 Markdown 内容和元数据，保障数据安全。

### 使用建议
当前为公开 alpha 版本，可通过 BRAT 安装 0.2.1 版本或手动放置文件。启用插件后在设置中进行配置，本地使用可选择本地文件访问级别并开启本地 MCP 服务器，将本地客户端连接 JSON 复制到支持本地连接的 MCP 客户端；使用 ChatGPT 等托管客户端则按插件指引完成部署和 OAuth 设置。设置完成后可通过右侧边栏查看操作信息。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


