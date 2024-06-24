---
uid: 2024052909080709
title: Obsidian 插件：Persistent Key-Value Store
tags: ['数据处理', '第三方工具集成', '编程与脚本', 'obsidian插件']
description: 提供一个持久的键值存储，用于在Obsidian中的脚本中使用。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Persistent Key-Value Store

> [!Note] 插件名片
> - 插件名称：Persistent Key-Value Store
> - 插件作者：Ara Adkins
> - 插件说明：提供一个持久的键值存储，用于在 Obsidian 中的脚本中使用。
> - 插件分类：[' 数据处理 ', ' 第三方工具集成 ', ' 编程与脚本 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/iamrecursion/obsidian-pkvs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pkvs)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/iamrecursion/obsidian-pkvs/main/README.md)

## 概述

Obsidian 的 Persistent Key-Value Store 插件提供了一个持久的键值存储，用于在脚本中使用。可以在 Templater 模板、Dataview 或 Datacore 查询之间保留数据。插件使用 eval 和 serialize-javascript 进行序列化，但不应存储或加载不受信任的数据。主要用于其他插件中，通过 JavaScript 在 Obsidian 中执行代码。提供 load、store、delete、exists 等操作。对于大量数据，可启用“Lazy Persistence”选项，手动持久化数据。可通过 BRAT 安装插件。适合熟悉 JavaScript 和脚本编写的用户。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



