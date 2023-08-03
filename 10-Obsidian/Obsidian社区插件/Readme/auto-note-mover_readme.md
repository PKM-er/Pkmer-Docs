---
uid: 20230803203507
title: Obsidian 插件：【Readme】Auto Note Mover
tags: ['obsidian插件', 'readme']
description: Auto Note Mover会根据规则自动将活动笔记移动到各自的文件夹中。
author: faru
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Auto Note Mover

> [!Note] 插件名片
> - 插件名称：Auto Note Mover
> - 插件作者：faru
> - 插件说明：Auto Note Mover会根据规则自动将活动笔记移动到各自的文件夹中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/farux/obsidian-auto-note-mover)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-note-mover)

## 概述

Auto Note Mover会根据规则自动将活动笔记移动到各自的文件夹中。

![Auto Note Mover](https://cdn.pkmer.cn/covers/auto-note-mover.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/farux/obsidian-auto-note-mover/main/README.md)
> 

---

## Readme(翻译）

下面是 [[auto-note-mover]] 插件的自述翻译


# 自动笔记移动器

自动笔记移动器将根据规则自动将活动笔记移动到它们各自的文件夹中。

如何工作

注册您想要移动到规则的标签或标题。

当活动笔记与规则匹配时，自动笔记移动器将把笔记移动到目标文件夹。

如果您从现有笔记或其他插件的链接中创建新笔记，自动笔记移动器将把这些笔记移动到您想要的文件夹，因此您不必担心在哪里或如何创建笔记。

如果规则匹配但找不到目标文件夹，或者目标文件夹中有同名的笔记，将显示警告并中止移动。

触发器

Auto Note Mover有两种类型的触发器。

### 自动

当您创建、编辑或重命名一个笔记时触发，如果符合规则，则移动该笔记。

您也可以通过命令来激活触发器。

### 手动

不会自动移动笔记。

您可以通过命令触发。

## 规则

1. 设置目标文件夹。
2. 设置与要移动的笔记匹配的标签或标题。**可以设置标签或标题中的任意一个。**
3. 规则按照从上到下的顺序进行检查。笔记将被移动到**第一个匹配的规则所在的文件夹**。

标签：请确保在开头添加**\#**。

标题：通过JavaScript正则表达式进行测试。

## 注意事项

1. 附加的文件将不会被移动，但它们仍然会出现在笔记中。
2. 自动笔记移动器不会移动在前置元数据中包含“**AutoNoteMover: disable**”的笔记。

## 使用示例

### 标签
![Food0](https://user-images.githubusercontent.com/33874906/152721614-45a65095-3af2-4e80-8973-26be686ca585.png)

![Food2](https://user-images.githubusercontent.com/33874906/152721697-7cf722fc-bc82-4c5d-8bbe-6c087755d29c.png)

### 嵌套标签
![nest0](https://user-images.githubusercontent.com/33874906/152721876-58b19020-eb75-4324-a8ba-2110dba11ea6.png)

![nest1](https://user-images.githubusercontent.com/33874906/152721897-be270fc9-6381-46b6-99d0-1d5a08260a06.png)

### 每日笔记
![day0](https://user-images.githubusercontent.com/33874906/152721914-48ed5cc5-ec08-4f80-9425-8c68b719107a.png)

![day1](https://user-images.githubusercontent.com/33874906/152721927-659d0ad4-ce9f-4aea-8752-8eb668500af5.png)

### 任务备注
![task0](https://user-images.githubusercontent.com/33874906/152723161-6a8d9999-15e9-4e97-8b71-e07ff30fb330.png)

![task1](https://user-images.githubusercontent.com/33874906/152723175-839e724c-4437-42ff-ba05-f458e45c3f21.png)

### 星星笔记
![sta0](https://user-images.githubusercontent.com/33874906/152721996-74f29153-4266-4aff-88e6-e765ef031d65.png)

![sta1](https://user-images.githubusercontent.com/33874906/152722006-54f5c315-8d5b-457b-8cfc-ec982a2b088c.png)

### 如何做笔记
![how0](https://user-images.githubusercontent.com/33874906/152722040-e100961b-8398-485d-bc64-f3fa784b79be.png)

![how1](https://user-images.githubusercontent.com/33874906/152722054-820441a1-a244-43cb-b8f2-fcde06310d40.png)

### 命令
![comm](https://user-images.githubusercontent.com/33874906/152723205-70599951-75ee-4915-a160-17a3faed67b0.png)

### 在前置事项中禁用自动笔记移动器。
![fm0](https://user-images.githubusercontent.com/33874906/152722074-d550e13c-2955-40ab-b324-7e934d86ea1a.png)

故障排除

1. 笔记不会移动。

确保规则正确，没有设置排除的文件夹，并且在前言中没有禁用它们。
另一个可能性是，如果存储库受到实时同步软件（如Dropbox）的监视，如果编辑与同步的时间重叠，同步软件可能会锁定笔记并阻止其移动。

### 2. 重复的笔记
检查您的同步软件。

有关iCloud故障导致的重复笔记的报告已经出现。
https://github.com/farux/obsidian-auto-note-mover/issues/19

## 归属
suggest.ts和file-suggest.ts是Liam Cain（https://github.com/liamcain）的版权作品，obsidian-periodic-notes（https://github.com/liamcain/obsidian-periodic-notes）。

popper.js https://popper.js.org/

## 特别感谢
感谢[@pjeby](https://github.com/pjeby)在创建这个插件时的帮助。



