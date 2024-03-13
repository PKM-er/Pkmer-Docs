---
uid: 2023120522265512
title: Obsidian 插件：【Readme】RescueTime
tags: ['obsidian插件', 'readme']
description: 在Obsidian中查看您的RescueTime数据。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】RescueTime

> [!Note] 插件名片
> - 插件名称：RescueTime
> - 插件作者：Tatsuya Hayashi
> - 插件说明：在 Obsidian 中查看您的 RescueTime 数据。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Tatz884/RescueTime-Obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?rescuetime)

## 概述

在 Obsidian 中查看您的 RescueTime 数据。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Tatz884/RescueTime-Obsidian/master/README.md)

---

## Readme(翻译）

下面是 [[rescuetime]] 插件的自述翻译

# RescueTime Obsidian 插件

在 Obsidian 中查看您的 RescueTime 活动日志。

<img src="./assets/AppOverview.png" walt="概览图片" />

<img src="./assets/LiveDemo.gif" alt="实时演示 GIF" />
安装

### 先决条件

- 在您的设备上拥有 RescueTime 账户和应用程序 [在此安装](https://www.rescuetime.com/get_rescuetime)
- Obsidian 桌面客户端 > v 0.13.0 [在此安装](https://obsidian.md/)
> [!NOTE]
> 此插件仅与 Obsidian 桌面客户端兼容，不支持移动设备。

### 下载 RescueTime Obsidian 插件

有两个选项 - 1. 手动下载，或者 2. 从社区插件列表中下载。

#### 手动下载

1. 从 [最新版本](https://github.com/Tatz884/RescueTime-Obsidian/releases/latest/) 下载 `rescuetime-<latest-version>.zip` 文件。
2. 将 zip 文件解压到 `<vault>/.obsidian/plugins/rescuetime` 目录中。
3. 重新加载 Obsidian（CTRL + R）。
4. 禁用受限模式。
5. 启用 `RescueTime` 插件。

#### 从社区插件列表下载

<img src="./assets/Installation.png" alt="安装图片" />

1. 打开 Obsidian 客户端左下角的设置选项卡。
2. 在“选项”中，点击“社区插件”。
3. 点击“浏览”，然后搜索“RescueTime”，并安装它。
4. 禁用受限模式，并启用“RescueTime”插件。

要在 Obsidian 中显示 RescueTime 的数据，您需要在插件设置中设置 API 令牌 - 请参见下文。

### 设置 API 令牌

<img src="./assets/ObtainAPIkeyFromRT.png" width="300px" alt="从RescueTime获取API密钥的图像" />

1. 从 [RescueTime的API管理页面](https://www.rescuetime.com/anapi/manage) 获取 API 令牌。在“创建新的 API 密钥”中，使用一个你可以输入任何内容的参考标签（比如“obsidian integration”）。你不需要更改“允许查询来自：”的选项。点击“激活此密钥”并复制密钥。

<img src="./assets/SetAPItoken.png" alt="在插件设置中设置API令牌的图像" />

1. 在设置选项卡中，现在“社区插件”中有“RescueTime”。将复制的密钥粘贴到“API 令牌”中。
2. 要测试 API 连接，请在“API 连接测试”中点击“连接”。

就是这样！现在你应该能够查看来自 RescueTime 的数据了。

## 查看今天的 RescueTime 仪表板

<img src="./assets/RightPane.png" alt="右侧窗格图片" />

点击右上角的 " 展开 " 图标以展开右侧窗格，并找到 RescueTime 图标。

所有图表都基于今天的数据。

> [!NOTE]
> 您的 RescueTime 客户端每 30 分钟向 RescueTime 服务器发送一次数据（免费用户），专业版用户为 3 分钟。因此，您将在这些时间间隔内获得数据更新。

## 查看由您指定的时间段的 RescueTime 数据

<img src="./assets/CodeBlock.png" width="600px" alt="Code Block Image" />
<img src="./assets/CodeBlockProcessed.png" width="600px" alt="Code Block Processed Image" />

如果您按照以下格式输入代码块，则会显示出在您定义的时间段内的数据图表。

`````markdown
```rescuetime
从 YYYY-MM-DD 到 YYYY-MM-DD
```
`````

> [!NOTE]
> 目前，此代码块仅支持跨越 31 天或更少天数的时间段。此外，您需要指定在今天之前的 92 天或更少天数的时间范围。查询 93 天或更早的数据将需要 RescueTime Pro 订阅，而开发者没有订阅...