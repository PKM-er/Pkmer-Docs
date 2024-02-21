---
uid: 2024022121215597
title: Obsidian 插件：【Readme】Persistent Key-Value Store
tags: ['obsidian插件', 'readme']
description: 提供一个持久的键值存储，用于在Obsidian中的脚本中使用。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Persistent Key-Value Store

> [!Note] 插件名片
> - 插件名称：Persistent Key-Value Store
> - 插件作者：Ara Adkins
> - 插件说明：提供一个持久的键值存储，用于在 Obsidian 中的脚本中使用。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/iamrecursion/obsidian-pkvs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pkvs)

## 概述

提供一个持久的键值存储，用于在 Obsidian 中的脚本中使用。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/iamrecursion/obsidian-pkvs/master/README.md)
>

---

## Readme(翻译）

下面是 [[pkvs]] 插件的自述翻译

# 为 Obsidian 提供持久化键值存储

该插件为 Obsidian 中的脚本提供了一个持久化的键值存储。这意味着你可以在 [Templater](https://github.com/SilentVoid13/Templater) 模板或 [Dataview](https://github.com/blacksmithgu/obsidian-dataview)（或 [Datacore](https://github.com/blacksmithgu/datacore)）查询之间持久化数据。

请注意，该插件在内部使用 eval 与 [serialize-javascript](https://github.com/yahoo/serialize-javascript) 结合，以允许对丰富的 JS 对象进行序列化。你绝对**不要存储或加载不受信任的数据**，并且**使用该插件存在风险**。

## 用法

此插件旨在从 _ 其他插件 _（如上述提到的那些）中使用，这些插件允许您在 Obsidian JS 虚拟机中执行 JavaScript 代码。它不打算面向用户或在其设置之外提供非代码界面。如果您不熟悉 JavaScript，或者不了解如何使用它来编写 Obsidian 脚本，则此插件**不适合您**。

### 接口

数据存储在窗口范围内以名称 `window.pkvs`（隐式地可访问为 `pkvs`）提供给您。您可以使用以下接口提供的操作。

```ts
// 持久化键值存储的用户界面接口。
interface PKVS {
  // 加载持久数据中 `key` 处的值，如果存在则返回该值，否则返回 `undefined`。
  async load(key: PropertyKey): Promise<any>;

  // 在数据存储中以提供的 `key` 存储提供的 `value`，如果之前已写入，则返回该 `key` 处的先前值，否则返回 `undefined`。
  //
  // 如果启用了急切持久化，这将在返回之前将更改写入磁盘。
  async store(key: PropertyKey, value: any): Promise<any>;

  // 删除提供的 `key` 处的任何值，如果之前已写入，则返回先前的值，否则返回 `undefined`。
  //
  // 如果启用了急切持久化，这将在返回之前将更改写入磁盘。
  async delete(key: PropertyKey): Promise<any>;

  // 如果 `key` 存在于数据存储中，则返回 `true`，否则返回 `false`。
  async exists(key: PropertyKey): Promise<boolean>;

  // 强制将数据存储中的任何内存更改写入磁盘。一旦返回，磁盘状态和内存状态将保证相同。
  async persist(): Promise<void>;

  // 设置存储使用懒惰持久化，而不考虑设置中的选项。
  setLazyPersistance(): void;

  // 设置存储使用急切持久化，而不考虑设置中的选项。
  setEagerPersistence(): void;

  // 根据设置中的选项设置存储持久化。
  disablePersistenceOverride(): void;
```

## 性能

如果您一次写入和读取大量数据或大数据量，您可能希望在设置中启用“延迟持久化”选项。这将仅在应用程序关闭时尽力将数据持久化到磁盘，并要求您手动持久化。您还可以通过调用上面显示的 `setLazyPersistance` 和 `setEagerPersistence` 来以编程方式启用此选项。这些操作不会更改插件的设置，而只会更改当前活动的行为。

可以通过调用上面的 `persist` 并等待结果返回以确保写入完成，或者从命令面板运行“持久化数据”命令来执行手动持久化。

> ### 警告
>
> 请注意，如果在关闭 Obsidian 之前不进行持久化，使用延迟持久化可能会导致数据丢失。这在移动设备上尤为重要，因为应用程序可能随时在后台被关闭。

## 安装

您可以使用以下两种安装方法安装插件。

### 社区插件

目前正在等待批准加入社区插件注册表。

### BRAT

1. 安装 [BRAT](https://github.com/TfTHacker/obsidian42-brat).
2. 在 BRAT 设置中，选择“添加 Beta 插件”，并粘贴
   `https://github.com/iamrecursion/obsidian-pkvs` 作为 URL。
3. 转到“Community Plugins”选项卡并启用插件。

## 贡献

如果您有兴趣为这个项目贡献代码、文档或想法，请查看 `[CONTRIBUTING](./CONTRIBUTING.md)` 指南。
