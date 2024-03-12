---
uid: 20231220112631
title: Obsidian 插件：【Readme】Auto Note Mover
tags: ['obsidian插件', 'readme']
description: Auto Note Mover会根据规则自动将活动笔记移动到各自的文件夹中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Auto Note Mover

> [!Note] 插件名片
> - 插件名称：Auto Note Mover
> - 插件作者：faru
> - 插件说明：Auto Note Mover 会根据规则自动将活动笔记移动到各自的文件夹中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/farux/obsidian-auto-note-mover)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-note-mover)

## 概述

Auto Note Mover 会根据规则自动将活动笔记移动到各自的文件夹中。

![Auto Note Mover](https://cdn.pkmer.cn/covers/auto-note-mover.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/farux/obsidian-auto-note-mover/main/README.md)

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

Auto Note Mover 有两种类型的触发器。

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

标题：通过 JavaScript 正则表达式进行测试。

## 注意事项

1. 附加的文件将不会被移动，但它们仍然会出现在笔记中。
2. 自动笔记移动器不会移动在前置元数据中包含“**AutoNoteMover: disable**”的笔记。

## 使用示例

### 标签

![Food0](https://cdn.pkmer.cn/covers/auto-note-mover_1_0.png!pkmer)

![Food2](https://cdn.pkmer.cn/covers/auto-note-mover_1_1.png!pkmer)

### 嵌套标签

![nest0](https://cdn.pkmer.cn/covers/auto-note-mover_1_2.png!pkmer)

![nest1](https://cdn.pkmer.cn/covers/auto-note-mover_1_3.png!pkmer)

### 每日笔记

![day0](https://cdn.pkmer.cn/covers/auto-note-mover_1_4.png!pkmer)

![day1](https://cdn.pkmer.cn/covers/auto-note-mover_1_5.png!pkmer)

### 任务备注

![task0](https://cdn.pkmer.cn/covers/auto-note-mover_1_6.png!pkmer)

![task1](https://cdn.pkmer.cn/covers/auto-note-mover_1_7.png!pkmer)

### 星星笔记

![sta0](https://cdn.pkmer.cn/covers/auto-note-mover_1_8.png!pkmer)

![sta1](https://cdn.pkmer.cn/covers/auto-note-mover_1_9.png!pkmer)

### 如何做笔记

![how0](https://cdn.pkmer.cn/covers/auto-note-mover_1_10.png!pkmer)

![how1](https://cdn.pkmer.cn/covers/auto-note-mover_1_11.png!pkmer)

### 命令

![comm](https://cdn.pkmer.cn/covers/auto-note-mover_1_12.png!pkmer)

### 在前置事项中禁用自动笔记移动器

![fm0](https://cdn.pkmer.cn/covers/auto-note-mover_1_13.png!pkmer)

故障排除

1. 笔记不会移动。

确保规则正确，没有设置排除的文件夹，并且在前言中没有禁用它们。

另一个可能性是，如果存储库受到实时同步软件（如 Dropbox）的监视，如果编辑与同步的时间重叠，同步软件可能会锁定笔记并阻止其移动。

### 2. 重复的笔记

检查您的同步软件。

有关 iCloud 故障导致的重复笔记的报告已经出现。

<https://github.com/farux/obsidian-auto-note-mover/issues/19>

## 归属

suggest.ts 和 file-suggest.ts 是 Liam Cain（<<https://github.com/liamcain>）的版权作品，obsidian-periodic-notes（<https://github.com/liamcain/obsidian-periodic-notes>）。>

popper.js <https://popper.js.org/>

## 特别感谢

感谢 [@pjeby](https://github.com/pjeby) 在创建这个插件时的帮助。
