---
uid: 1793625614927001
title: "Obsidian 插件：Listkeeper"
tags: ["表格", "搜索与排序", "第三方工具集成", "移动端优化", "数据处理", "obsidian插件"]
description: "Turn any GitHub list, awesome list or best-of list into a sortable, filterable table in your vault: two notes per list, a verdict on every repo, security advisories, and star history kept on a schedule. Works on mobile. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Listkeeper

> [!Note] 插件名片
> - 插件名称：Listkeeper
> - 插件作者：amoslives
> - 插件说明：Turn any GitHub list, awesome list or best-of list into a sortable, filterable table in your vault: two notes per list, a verdict on every repo, security advisories, and star history kept on a schedule. Works on mobile. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '搜索与排序', '第三方工具集成', '移动端优化', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/amoslives/listkeeper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?listkeeper)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/amoslives/listkeeper/master/README.md)



## 概述

Listkeeper 将 GitHub 上的 Awesome 列表或 Best-of 列表转化为 Vault 中可排序、可过滤的表格。它通过两个笔记文件管理整个列表：一个视图笔记展示所有仓库的表格，另一个条目笔记记录每个仓库的详细信息。插件会自动获取 GitHub 数据，为每个仓库生成状态判定，并按设定周期刷新数据，确保你掌握列表的最新动态。

典型场景包括追踪大型技术生态列表。例如，当你关注包含数百个项目的 AI 工具列表时，Listkeeper 能将其整合为单一表格，避免 Vault 中产生大量分散文件。你可以利用过滤器快速筛选出特定语言、高星数或存在安全警告的项目，从而在海量信息中快速定位值得深入研究的仓库，无需手动逐个打开链接查看。

相比其他 GitHub 插件，Listkeeper 的核心特色在于其自动化的“判定”机制。它根据归档状态、弃用标记、安全公告及活跃度等规则，自动将仓库标记为正常、谨慎或需检查，并提供详细理由。此外，它支持安全公告展示和星数历史追踪，且所有手动编辑的内容在刷新后得以保留。插件无需构建步骤，无运行时依赖，也不收集遥测数据，在移动端同样流畅运行。

使用前需注意，判定结果仅作为审查辅助，并非安全保证或安装建议。若你只需查看单个仓库的 README 或管理自己已 Star 的仓库，此插件可能过于复杂。此外，未配置 Token 时受 GitHub 匿名限制，部分活动数据字段将为空，且请求配额较低。对于需要频繁访问大量私有仓库或依赖完整 GraphQL 数据的高级用户，建议配置细粒度 Token 以获得完整功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


