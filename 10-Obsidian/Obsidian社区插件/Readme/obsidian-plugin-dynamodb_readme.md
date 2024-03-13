---
uid: 2023080322144906
title: Obsidian 插件：AWS DynamoDB For Obsidian
tags: ['obsidian插件', 'readme']
description: 查询AWS DynamoDB并在文档内渲染表格
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：AWS DynamoDB For Obsidian

> [!Note] 插件名片
> - 插件名称：AWS DynamoDB For Obsidian
> - 插件作者：Lee Nattress
> - 插件说明：查询 AWS DynamoDB 并在文档内渲染表格
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/leenattress/obsidian-plugin-dynamodb)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-plugin-dynamodb)

## 概述

查询 AWS DynamoDB 并在文档内渲染表格

![AWS DynamoDB For Obsidian](https://cdn.pkmer.cn/covers/obsidian-plugin-dynamodb.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/leenattress/obsidian-plugin-dynamodb/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-plugin-dynamodb]] 插件的自述翻译

# Obsidian 的 DynamoDB 查询插件

![header.png](header.png)

> 这个 Obsidian.md 插件允许您在 markdown 文档中执行简单的 AWS DynamoDB 查询。它最初是为了在单表设计中提供快速原型和查询文档，以便在数据访问模式发现过程中提供帮助。

您可以创建一个类型为 `dynamodb` 的代码块，并在其中编写您的查询。您可以使用 PartiQL 或者像在使用 AWS SDK 中的 DynamoDB 客户端时一样传递参数。

- [DynamoDB的PartiQL选择语句 - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.select.html)
- [查询 - Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Query.html)

**功能：**

- ✅ 基本凭证管理（密钥/密钥对）
- ✅ 使用 PartiQL 查询
- ✅ 使用 SDK 参数查询
- ✅ 渲染为简单的内联表格
- ✅ 有用的错误消息
- ✅ 区域选择器
- ✅ 快速表信息（包括 GSI 和 LSI 的详细信息）
- ❌ 处理复杂嵌套对象
- ❌ 处理大量记录（记得限制）

## 命令

> 按下 cmd + p 打开命令搜索框，然后输入...

- `dynamodb-set-region` 来更改表所在的区域
- `dynamodb-info-command` 来列出该区域中的表并获取一些基本信息，例如它们的全局索引或记录数量

请注意，`dynamodb-info-command` 也可以通过点击位于 Obsidian 左上方的功能区上的 Dynamo 图标来访问。

## 例子

### 像在 SDK 中一样带参数的查询

```
```dynamodb
参数:
	TableName: Dynamotable
	KeyConditionExpression: pk = :v1 AND sk = :v2
	ExpressionAttributeValues:
	  ":v1":
	    S: "ORG#3t"
	  ":v2":
	    S: "ORG#3t"
```

### 使用 begins_with 在 sk 上的 PartiQL 查询

```
```dynamodb
查询：SELECT * FROM Dynamotable WHERE pk = 'ORG#Microsoft' AND begins_with("sk", 'ROLE#') 
```

### PartiQL 查询 pk 和 sk

```
```dynamodb
查询：SELECT * FROM Dynamotable WHERE pk = 'ORG#Microsoft' AND sk = 'ORG#Microsoft'
```

### 有标题并支持表情符号

```
```dynamodb
标题: 🍏 在特定区域中进行 PartiQL 扫描
查询: SELECT * FROM Dynamotable
区域: us-east-1
```