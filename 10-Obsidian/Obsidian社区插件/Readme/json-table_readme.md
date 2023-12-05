---
uid: 2023120522254742
title: Obsidian 插件：【Readme】JSON table
tags: ['obsidian插件', 'readme']
description: 简单地在JSON和表格之间切换。在你的笔记中，从JSON字符串或返回JSON的URL生成一个表格。从你的笔记中生成JSON表格。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】JSON table

> [!Note] 插件名片
> - 插件名称：JSON table
> - 插件作者：Dario Baumberger
> - 插件说明：简单地在 JSON 和表格之间切换。在你的笔记中，从 JSON 字符串或返回 JSON 的 URL 生成一个表格。从你的笔记中生成 JSON 表格。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dario-baumberger/obsidian-json-table)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?json-table)

## 概述

简单地在 JSON 和表格之间切换。在你的笔记中，从 JSON 字符串或返回 JSON 的 URL 生成一个表格。从你的笔记中生成 JSON 表格。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dario-baumberger/obsidian-json-table/master/README.md)
>

---

## Readme(翻译）

下面是 [[json-table]] 插件的自述翻译

[![构建和测试](https://github.com/dario-baumberger/obsidian-json-table/actions/workflows/build.yml/badge.svg)](https://github.com/dario-baumberger/obsidian-json-table/actions/workflows/build.yml)

[![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?color=7e6ad6&labelColor=34208c&label=Obsidian%20下载量&query=$['json-table'].downloads&url=https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json&)](obsidian://show-plugin?id=json-table)

![GitHub stars](https://img.shields.io/github/stars/dario-baumberger/obsidian-json-table?style=flat)

[![许可证：MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/dario-baumberger/obsidian-json-table/blob/master/LICENCE)

# Obsidian JSON 表格

简单地在 JSON 和表格之间切换。

在你的笔记中，从 JSON 字符串或返回 JSON 的 URL 生成一个表格。从你的笔记中生成一个 JSON 表格。

## 命令

| 命令                                  | 描述                                                                                               |
| ------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 从选定的 JSON 生成表格                   | 根据选定的 JSON 创建一个 Markdown 表格。JSON 需要是有效的。                                              |
| 从选定的 JSON URL 生成表格               | 根据选定 URL 返回的 JSON 数据创建一个 Markdown 表格。URL 需要返回有效的 JSON。                              |
| 从选定的表格生成 JSON                   | 根据选定的表格创建 JSON。                                                                             |

### 示例

#### 表格

```
| 姓名 | 年龄 | 城市    |
| ---- | --- | ------ |
| Doe  | 22  | 柏林   |
| Pan  | 34  | 孟买   |
```

![表格转JSON](demo/table-to-json.gif)

#### JSON

```
[{"姓名":"Doe","年龄":"22","城市":"柏林"},{"姓名":"Pan","年龄":"34","城市":"孟买"}]
```

![JSON转表格](demo/json-to-table.gif)

#### URL

- `https://raw.githubusercontent.com/dario-baumberger/obsidian-json-table/master/demo/example.json`
- `https://jsonplaceholder.typicode.com/todos`

![URL转表格](demo/url-to-table.gif)

安装

### 社区插件

- 点击此链接 [Obsidian Plugin](https://obsidian.md/plugins?id=json-table)
- 或者打开 Obsidian 设置，进入 Community Plugins，浏览 "JSON Table"，点击安装并激活。

### 手动安装插件

- 前往最新的 [Releases](https://github.com/dario-baumberger/obsidian-json-table/releases)
- 下载 `main.js`、`manifest.json`
- 保存到你的 vault 中的 `VaultFolder/.obsidian/plugins/obsidian-json-to-table/` 目录中

## 贡献

- 如果你有任何遗漏的内容，请随时 [提出问题](https://github.com/dario-baumberger/obsidian-json-table/issues)
- 如果你想要实现一个功能，请随时提交拉取请求
    - 如果你添加了逻辑，请扩展测试



