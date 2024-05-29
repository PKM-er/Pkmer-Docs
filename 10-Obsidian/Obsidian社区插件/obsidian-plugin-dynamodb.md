---
uid: 2024052908520743
title: Obsidian 插件：AWS DynamoDB For Obsidian
tags: ['数据处理', '表格', '第三方工具集成', 'obsidian插件']
description: 查询AWS DynamoDB并在文档内渲染表格
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AWS DynamoDB For Obsidian

> [!Note] 插件名片
> - 插件名称：AWS DynamoDB For Obsidian
> - 插件作者：Lee Nattress
> - 插件说明：查询 AWS DynamoDB 并在文档内渲染表格
> - 插件分类：[' 数据处理 ', ' 表格 ', ' 第三方工具集成 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/leenattress/obsidian-plugin-dynamodb)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-plugin-dynamodb)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/leenattress/obsidian-plugin-dynamodb/main/README.md)

![AWS DynamoDB For Obsidian](https://cdn.pkmer.cn/covers/obsidian-plugin-dynamodb.png!pkmer)

## 概述

Obsidian 的 DynamoDB 查询插件允许用户在文档中执行 AWS DynamoDB 查询，并将表格渲染在文档中。通过创建类型为“dynamodb”的代码块并在其中编写查询，用户可以使用 PartiQL 或像使用 AWS SDK 中的 DynamoDB 客户端一样传递参数。该插件具有基本的凭据管理、PartiQL 查询、SDK 参数查询、渲染为简单的内联表格、有用的错误消息、区域选择器、快速表格信息等功能。然而，它无法处理复杂嵌套对象和大量记录。用户可以通过命令来更改表格所在的区域、获取表格的基本信息。插件的使用示例包括使用 SDK 参数进行查询、使用 PartiQL 查询和在特定区域进行 PartiQL 扫描等。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



