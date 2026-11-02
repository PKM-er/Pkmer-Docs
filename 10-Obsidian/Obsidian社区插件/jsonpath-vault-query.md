---
uid: 1793625615032000
title: "Obsidian 插件：Local JSON Queries"
tags: ["数据处理", "搜索与排序", "表格", "数据分析", "obsidian插件"]
description: "Run local JSON queries on vault files and show the results as tables or text. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local JSON Queries

> [!Note] 插件名片
> - 插件名称：Local JSON Queries
> - 插件作者：theluckystrike
> - 插件说明：Run local JSON queries on vault files and show the results as tables or text. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '搜索与排序', '表格', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/jsonpath-vault-query)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?jsonpath-vault-query)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/jsonpath-vault-query/master/README.md)



## 概述

Local JSON Queries 允许你在 Obsidian 库内直接对 JSON 或 JSONL 文件执行 JMESPath 查询，并将结果以表格或文本形式展示。它解决了在笔记软件中快速检查数据导出、筛选特定字段或生成小型报告的需求。所有查询均在本地设备运行，无需上传数据，支持标量、对象和数组等多种结果类型，让你能即时验证数据结构或提取关键信息。

典型场景包括处理数据导出文件：例如，你有一个包含人员信息的 `people.json`，想快速查看年龄超过 25 岁的人名，只需输入相应的 JMESPath 表达式即可在表格中列出结果。另一个场景是处理 JSONL 日志，通过查询提取每行记录中的特定字段，如用户 ID 或时间戳，从而在不离开笔记应用的情况下完成数据初步清洗或统计。

相比其他同类插件，Local JSON Queries 的特色在于其严格的本地化处理与清晰的错误反馈。它支持保存最多 100 个命名查询，方便复用文件路径与表达式的组合。此外，它提供“复制 JSON”功能，可将完整结果（包括表格显示中省略的行）复制到剪贴板，便于粘贴到其他工具中。Pro 版本还允许对多个选定文件批量运行同一查询，并生成 CSV 或 Markdown 报告文件，但核心查询功能免费。

使用前需注意，该插件仅支持 JMESPath，不支持 JSONPath 或 SQL。输入文件限制为 5 MiB，表格显示最多 500 行和 50 列，超出部分会被截断显示，但复制功能不受此限。它不适合需要精确十进制计算的场景，因为 JavaScript 对大整数和浮点数的处理可能存在精度问题。若你的需求是复杂的数据转换或依赖 SQL 语法，此插件可能无法满足。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


