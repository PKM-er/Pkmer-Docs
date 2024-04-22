---
uid: 2024042221324147
title: Obsidian 插件：【Readme】Foodiary
tags: ['obsidian插件', 'readme']
description: 食物追踪器，宏量营养素和卡路里计算器。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Foodiary

> [!Note] 插件名片
> - 插件名称：Foodiary
> - 插件作者：vkostyanetsky
> - 插件说明：食物追踪器，宏量营养素和卡路里计算器。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/vkostyanetsky/ObsidianFoodiary)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?foodiary)

## 概述

食物追踪器，宏量营养素和卡路里计算器。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vkostyanetsky/ObsidianFoodiary/main/README.md)

---

## Readme(翻译）

下面是 [[foodiary]] 插件的自述翻译

# 食物日记 🍅 🍒 🍊

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，旨在帮助您监控您所吃食物的营养价值。

## 🙂 如何使用它？

### 创建产品文件夹

首先，您应该在插件的设置中指定“产品文件夹”设置（默认为“Products”）。它指的是您的存储库中应该包含您所吃食物的营养数据的文件夹。

这里是 [一个示例](sample/Products) 文件夹在 [示例存储库](sample) 中。请注意：

1. 每个文件都代表一个产品。它的名称是您在笔记中将要引用的名称。
2. 每个文件都有四个属性：`卡路里`，`蛋白质`，`脂肪` 和 `碳水化合物`。所有这些属性都应该包含所代表产品的营养价值，并且必须按照每 100 克来表示。

请注意，您可以在插件的设置中重命名这些属性。

### 在日常笔记中使用代码块

我猜你会做日常笔记。所以，每天，你会添加一个 `foodiary` 代码块来列出你吃的食物。你可以手动添加，也可以通过“插入食物日记”命令来完成。

这里是 [一个例子](sample/Daily%20Notes) 在 [示例库](sample) 中。

例如，你添加了这个：

````
```foodiary
Apples 150
Donuts 85
```
````

这意味着你吃了 150 克的苹果和 85 克的甜甜圈。因此，代码块会显示类似于这样的内容：

| 产品    | 卡路里 | 蛋白质 | 脂肪 | 碳水化合物 |
| ------- | -------- | ------- | --- | ----- |
| 甜甜圈  | 252      | 5       | 12  | 33    |
| 苹果    | 71       | 1       | 1   | 15    |
| 总计    | 323      | 6       | 13  | 48    |

因此，插件会获取你在代码块中提到的食物，在产品目录中找到它，然后显示你一天中消耗的每种产品的总营养价值。
