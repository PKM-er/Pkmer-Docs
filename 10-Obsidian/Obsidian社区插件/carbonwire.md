---
uid: 1793625609016001
title: "Obsidian 插件：CarbonWire"
tags: ["编程与脚本", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Test REST APIs with a fast HTTP client. Send requests, inspect JSON responses, and import collections from Postman, Insomnia, Bruno, HTTPie and curl, kept as plain files in your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CarbonWire

> [!Note] 插件名片
> - 插件名称：CarbonWire
> - 插件作者：CarbonConfig
> - 插件说明：Test REST APIs with a fast HTTP client. Send requests, inspect JSON responses, and import collections from Postman, Insomnia, Bruno, HTTPie and curl, kept as plain files in your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/carbonconfig/CarbonWire_Obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?carbonwire)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/carbonconfig/CarbonWire_Obsidian/master/README.md)



## 概述

CarbonWire 是一款专为 Obsidian 打造的快速 REST API 客户端，旨在解决在笔记软件中测试接口时响应迟缓与数据分散的痛点。它允许用户直接发送 HTTP 请求、查看格式化后的 JSON 响应，并将 API 集合以纯文本 YAML 文件的形式保存在库中。这种设计让 API 测试与日常笔记管理无缝融合，无需切换工具即可在侧边栏快速索引和筛选数千个请求，同时保持 Obsidian 界面的流畅响应。

典型使用场景包括从其他工具迁移工作流以及快速调试接口。例如，你可以直接导入 Postman、Insomnia 或 Bruno 的现有集合，甚至粘贴一条 curl 命令即可自动填充请求参数。在开发过程中，你可以利用内置的环境变量功能，通过切换 dev、test 或 prod 等环境来快速验证不同配置下的接口表现，所有请求和响应都会自动记录在本地历史中，方便随时回溯查看。

相比同类插件，CarbonWire 的核心特色在于“文件即数据”的隐私与灵活性。所有集合均为纯文本文件，支持版本控制和差异对比，且完全离线运行，无账号、无云端、无遥测。它支持 OAuth 2.0、API Key 等多种认证方式，并能将请求导出为 curl 命令。此外，其性能优化显著，能在毫秒级时间内完成大规模请求的索引与过滤，确保即使面对大型 JSON 响应也能保持操作顺滑。

使用前需注意，该插件目前仅支持桌面端 Obsidian，且尚未支持 GraphQL、WebSocket 或移动端。如果你需要复杂的预请求脚本、自动化测试运行器或云端协作功能，它可能无法满足需求。此外，虽然它支持导入多种格式，但导出功能目前尚未完全实现，主要侧重于本地化管理与快速调试，适合追求隐私和轻量化的个人开发者使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


