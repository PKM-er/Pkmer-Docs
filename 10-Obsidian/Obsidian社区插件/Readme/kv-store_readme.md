---
uid: 2024042221313615
title: Obsidian 插件：【Readme】KV Store
tags: ['obsidian插件', 'readme']
description: Adds a key-value store. Use it to store and retrieve key-value pairs in your vault.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】KV Store

> [!Note] 插件名片
> - 插件名称：KV Store
> - 插件作者：Darren-project
> - 插件说明：Adds a key-value store. Use it to store and retrieve key-value pairs in your vault.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Darren-project/obsidian-kv)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kv-store)

## 概述

Adds a key-value store. Use it to store and retrieve key-value pairs in your vault.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Darren-project/obsidian-kv/main/README.md)

---

## Readme(翻译）

下面是 [[kv-store]] 插件的自述翻译

# Obsidian 的键值存储插件

此插件为 Obsidian 添加了一个键值存储，允许您在您的保险库中存储和检索键值对。

## 安装

1. 打开 Obsidian。
2. 转到 `设置 > 第三方插件`。
3. 确保 `安全模式` 已关闭。
4. 点击 `浏览` 并搜索 "KV Store"。
5. 点击 `安装`。
6. 安装完成后，切换开关以启用插件。

## 用法

一旦插件安装并启用，您可以从设置页面访问键值存储。

1. 转到 `Settings > KV Store`。
2. 在这里，您将看到一个文本框，您可以查看、添加、修改或删除您的键值数据。

数据应该是 JSON 格式，像这样：

```json
{
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
}
```

要添加新的键值对，只需添加一行新的键和值，像这样：

```json
{
    "key1": "value1",
    "key2": "value2",
    "key3": "value3",
    "key4": "value4"
}
```

要修改值，请更改键旁边的值，像这样：

```json
{
    "key1": "value1",
    "key2": "value2",
    "key3": "new value"
}
```

要删除键值对，请删除带有键和值的行，像这样：

```json
{
    "key1": "value1",
    "key2": "value2"
}
```

进行更改后，插件将自动保存您的数据。如果您的数据不是有效的 JSON，插件将显示错误消息。

```js
kv.set(name: string, value: any)

kv.get(name: string)

kv.delete(name: string)

kv.has(name: string)

kv.keys()

kv.values()

kv.entries()
```

## 服务器 URL

服务器用于将 kv 更新传输给其他客户端

服务器可以在存储库 [链接](https://github.com/Darren-project/obsidian-kv-wss.git) 中找到。

## 支持

如果您遇到任何问题或对此插件有任何疑问，请在 GitHub 存储库上打开一个问题。

## 许可证

此插件根据 Apache 许可证获得许可。有关更多信息，请参阅 `LICENSE` 文件。
