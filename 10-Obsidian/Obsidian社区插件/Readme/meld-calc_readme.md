---
uid: 20231220112631
title: Obsidian 插件：Meld Calc
tags: ['obsidian插件', 'readme']
description: 做数学！在你的笔记中评估数学表达式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Meld Calc

> [!Note] 插件名片
> - 插件名称：Meld Calc
> - 插件作者：meld-cp
> - 插件说明：做数学！在你的笔记中评估数学表达式。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/meld-cp/obsidian-calc)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?meld-calc)

## 概述

做数学！在你的笔记中评估数学表达式。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/meld-cp/obsidian-calc/main/README.md)

---

## Readme(翻译）

下面是 [[meld-calc]] 插件的自述翻译

# Obsidian 计算器插件

该插件使用<https://github.com/5anthosh/fcal> 来计算 Obsidian 笔记中的数学表达式。>

> 使用 fcal，您可以进行基本的算术运算和百分比运算，具有精确度。它具有灵活的表达式解析器，内置了大量的单位、函数和常量。

请参阅<https://github.com/5anthosh/fcal/wiki> 获取更多信息。>

使用方法

### 示例 1，插入答案

编写一个以等号结尾的表达式，如：

```
PI * 4cm ^ 2 = 
```

选择表达式并从命令面板中选择 "evaluate"：

<img alt="选择表达式" src="https://raw.githubusercontent.com/meld-cp/obsidian-calc/main/docs/assets/eg1-exp.png" />

<img alt="从命令面板中选择evaluate" src="https://raw.githubusercontent.com/meld-cp/obsidian-calc/main/docs/assets/select-command.png" />

表达式应该被计算出来：

```
PI * 4cm ^ 2 = 50.265482457436691815 厘米
```

### 示例 2，复制到剪贴板

不要以等号符号结尾写出一个表达式：

```
23 % of 1023
```

选择该表达式，并像示例 1 中那样从命令面板中选择评估。

评估后的表达式将被复制到剪贴板上。

<img alt="评估后的表达式将被复制到剪贴板上" src="https://raw.githubusercontent.com/meld-cp/obsidian-calc/main/docs/assets/eg2-clipboard.png" />

### 示例 3，变量和多行表达式

支持变量和多行表达式。

```
x=56.43
y=x/2
z+y=
```

选择这 3 行并从调色板中运行评估命令将得到：

```
x=56.43
y=x/2
x+y=84.645
```

## 设置

目前没有任何设置。

## 安装

您可以通过在 Obsidian 中的 Community Plugins 选项卡中搜索 "Calc" 来安装插件。

你觉得这个插件有用吗？

感谢您的支持 🙏
