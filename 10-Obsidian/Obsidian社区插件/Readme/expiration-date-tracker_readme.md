---
uid: 20231220112631
title: Obsidian 插件：【Readme】Expiration-Date-Tracker
tags: ['obsidian插件', 'readme']
description: 跟踪所有过期日期，例如，您的食品杂货。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Expiration-Date-Tracker

> [!Note] 插件名片
> - 插件名称：Expiration-Date-Tracker
> - 插件作者：Marius Wörfel
> - 插件说明：跟踪所有过期日期，例如，您的食品杂货。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Raboro/obsidian-expiration-date-tracker-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?expiration-date-tracker)

## 概述

跟踪所有过期日期，例如，您的食品杂货。

![Expiration-Date-Tracker](https://cdn.pkmer.cn/covers/expiration-date-tracker.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Raboro/obsidian-expiration-date-tracker-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[expiration-date-tracker]] 插件的自述翻译

# Obsidian- 到期日期跟踪插件

使用此插件，您可以跟踪您的物品（如杂货）的所有到期日期。

![主要演示图片](https://cdn.pkmer.cn/covers/expiration-date-tracker_2_0.png!pkmer)

使用方法

您需要一个包含所有过期日期的文件。要找到该文件，您需要在设置中添加位置。之后，您可以在表格中添加您的物品：

| 名称 | 日期 | 元素数量 |
| --- | --- | --- |
| 苹果 | 2023 年 08 月 29 日 | 3 |
| 香蕉 | 2023 年 12 月 22 日 | 200 克 |

之后，您可以点击丝带图标或使用“跟踪过期日期”命令来触发数据收集。然后，所有物品都会显示在一个单独的视图中。您还会收到所有过期物品的通知。

过期类别包含类别名称、该类别中的物品和展开按钮。此按钮将显示/隐藏该类别中的所有物品。物品包含名称、元素数量（可以是数字，如 10 个苹果，也可以是字符串，如 200 克香蕉）和距离过期的天数。

## 命令

您可以搜索特定的项目或类别，或跟踪所有的到期日期。您搜索的数据将显示在一个模态窗口中。

![命令演示图片](https://cdn.pkmer.cn/covers/expiration-date-tracker_2_1.png!pkmer)

## 设置

您可以设置日期格式。默认值为：``DD/MM/YYYY``。这是为了收集和显示日期而需要的。您还可以设置包含到期数据的文件的位置。这个文件必须以 `.md` 作为后缀。默认值为：`expirationDateNode.md`。\

您还可以设置所有到期类别的阈值。默认值为（以天为单位）：

- 已过期：0，
- 紧急：1，
- 非常高：2，
- 高：3，
- 中：5，
- 低：10

例如，如果您的物品将在 6 天后过期，则属于低到期类别。

![设置演示图片](https://cdn.pkmer.cn/covers/expiration-date-tracker_2_2.png!pkmer)
