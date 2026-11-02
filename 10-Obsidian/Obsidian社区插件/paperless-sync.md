---
uid: 1793625619904000
title: "Obsidian 插件：Paperless Sync"
tags: ["第三方工具集成", "文件管理", "数据处理", "obsidian插件"]
description: "Sync document metadata from Paperless-ngx into notes. Creates one note per document with properties you can link and query. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Paperless Sync

> [!Note] 插件名片
> - 插件名称：Paperless Sync
> - 插件作者：Duc Anh Nguyen
> - 插件说明：Sync document metadata from Paperless-ngx into notes. Creates one note per document with properties you can link and query. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/itsanhreal/obsidian-paperless-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?paperless-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/itsanhreal/obsidian-paperless-sync/master/README.md)



## 概述

Paperless Sync 将 Paperless-ngx 中的文档元数据同步为 Obsidian 笔记，实现“第二大脑”与文档归档的无缝连接。它不复制 PDF 文件，而是为每份文档生成包含标题、发件人、类型、标签及自定义字段等属性的轻量级笔记。这些属性可直接用于链接和查询，让你能在 Obsidian 中通过 Dataview 或 Bases 快速检索发票、合同等文件，同时保留在 Paperless-ngx 中查看原件的能力。

典型场景包括整理家庭财务或健康管理。例如，你可以将 2024 年的所有电费账单通过查询语句按金额排序，快速核对支出；或者将医生的检查报告链接到健康笔记中，方便回顾病史。当新文档进入 Paperless-ngx 时，插件会自动在 Obsidian 中创建对应笔记，你只需在笔记下方添加个人思考，无需手动整理文件结构。

相比其他同步工具，该插件强调“只读安全”与“数据主权”。它仅执行 GET 请求，绝不修改或删除 Paperless-ngx 中的任何数据，确保归档系统稳定。同时，它严格区分插件管理的 `paperless_*` 属性与用户自定义内容，你添加的文本和属性永远不会被覆盖。此外，笔记通过 `paperless_id` 而非路径匹配，允许你自由移动或重命名笔记而不破坏同步关系，且支持通过标签过滤同步范围，避免隐私文档泄露。

使用前需注意，该插件仅支持桌面端 Obsidian，且需要配置 Paperless-ngx 的 API Token。它不适合需要直接在 Obsidian 内编辑 PDF 内容或双向同步文档正文的用户，因为默认情况下文档全文仍保留在 Paperless-ngx 中，除非你手动开启特定标签的全文同步。若你依赖移动端进行文档扫描或重度编辑，此插件可能无法满足需求，因为它主要服务于元数据管理和知识关联，而非文档处理本身。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


