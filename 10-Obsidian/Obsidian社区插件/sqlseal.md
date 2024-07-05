---
uid: 2024070516092004
title: Obsidian 插件：SQLSeal
tags: ['数据处理', '数据可视化', '编辑工具', 'obsidian插件']
description: 使用SQL在您的笔记中查询您的保险库文件和CSV内容。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：SQLSeal

> [!Note] 插件名片
> - 插件名称：SQLSeal
> - 插件作者：hypersphere
> - 插件说明：使用SQL在您的笔记中查询您的保险库文件和CSV内容。
> - 插件分类：['数据处理', '数据可视化', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/h-sphere/sql-seal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sqlseal)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/h-sphere/sql-seal/main/README.md)



## 概述

Obsidian SQLSeal是一个插件，可以将您的CSV文件转换为完整的SQL数据库。您可以使用SQL语句随意查询这些数据。安装插件后，您可以通过在笔记中创建`sqlseal`代码块来使用它。要基于您的vault中的现有CSV文件创建表，请使用以下命令：`TABLE transactions = file(transactions.csv)`。这将创建名为`transactions`的表，基于您的vault中的`transactions.csv`文件。您可以使用常规的`SELECT`语句来引用它。您可以在单个代码块中定义多个表。您还可以指向在同一笔记中定义的不同代码块中定义的表（目前表仅在文件中保留）。插件还会在配置文件夹`.obsidian`中创建名为`sqlseal.db`的数据库文件。请注意，该插件处于早期阶段，基本功能应该可以正常工作，但我不对潜在的数据丢失和对Vault的损坏负责。更全面的文档请参见[hypersphere.blog/sql-seal](https://hypersphere.blog/sql-seal)。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



