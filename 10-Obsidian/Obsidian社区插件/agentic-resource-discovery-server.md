---
uid: 1791709365233000
title: 'Obsidian 插件：Agentic Resource Discovery Server'
tags: ['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
description: '本地优先的智能体资源发现发布与注册中心，通过本地 HTTP 和 MCP 服务器，将你的 AI 技能和工具提供给智能体使用。- 此插件尚未经过 Obsidian 官方团队的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agentic Resource Discovery Server

> [!Note] 插件名片
> - 插件名称：Agentic Resource Discovery Server
> - 插件作者：Sébastien Dubois
> - 插件说明：本地优先的智能体资源发现发布与注册中心，通过本地 HTTP 和 MCP 服务器，将你的 AI 技能和工具提供给智能体使用。- 此插件尚未经过 Obsidian 官方团队的人工审核。
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dsebastien/obsidian-agentic-resource-discovery-server)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agentic-resource-discovery-server)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dsebastien/obsidian-agentic-resource-discovery-server/master/README.md)



## 概述

**1. 主要功能**
该插件将Obsidian库转化为本地优先的AI资源发现（ARD）发布器和注册中心。它自动扫描库中的AI技能（SKILL.md）及子代理定义，生成丰富的`ai-catalog.json`目录，并在本地启动HTTP/MCP服务器。AI代理可通过自然语言搜索、探索或获取特定技能与代理详情，实现按需加载。

**2. 适用场景**
适用于拥有大量AI技能或MCP服务器，但不希望将所有内容加载到每个代理上下文窗口中的用户。适合需要让本地AI代理在隐私安全前提下，动态发现并调用特定工具或子代理的高级工作流。

**3. 核心特色**
- **本地优先**：数据不离开计算机，保障隐私安全。
- **智能发现**：支持自然语言搜索，按相关性排序，并可通过`/explore`接口查看资源分布。
- **非阻塞扫描**：启动时后台扫描技能与子代理，不干扰Obsidian正常操作。
- **丰富元数据**：自动提取描述、标签、能力等，支持精确过滤与分页列表。

**4. 使用建议**
- 确保技能文件夹符合Anthropic Agent Skill格式（含frontmatter）。
- 配置好Bearer Token以保护本地服务器访问。
- 建议先通过`/explore`接口了解现有资源分布，再使用`/search`进行精准查找。
- 注意该插件未经Obsidian官方人工审核，建议在非关键环境测试使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


