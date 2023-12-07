---
uid: 2023120719425560
title: Obsidian 插件：【Readme】Simple Dice Roller
tags: ['obsidian插件', 'readme']
description: 一个即插即用的解决方案，可以让你平均和模拟骰子公式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Simple Dice Roller

> [!Note] 插件名片
> - 插件名称：Simple Dice Roller
> - 插件作者：yeeshue99
> - 插件说明：一个即插即用的解决方案，可以让你平均和模拟骰子公式。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/yeeshue99/SimpleDiceRoller)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?simple-dice-roller)

## 概述

一个即插即用的解决方案，可以让你平均和模拟骰子公式。

![Simple Dice Roller](https://cdn.pkmer.cn/covers/simple-dice-roller.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/yeeshue99/SimpleDiceRoller/master/README.md)
>

---

## Readme(翻译）

下面是 [[simple-dice-roller]] 插件的自述翻译

这是一个简单的即插即用的骰子掷筛器，它会搜索当前活动的叶子，并模拟或计算所有骰子公式的结果，无论它们在哪里。

### 如何使用

- 只需安装插件，然后打开命令面板（默认为 CTRL+P），搜索“Simple Dice Roller”以查看所有可用命令。
- 您可以通过转到“设置”->“热键”然后搜索“Simple Dice Roller”来为命令分配快捷键。
- 在“设置”->“插件选项”->“Simple Dice Roller”中提供了功能区图标。
- 调用任何命令时，插件将在当前页面中搜索任何骰子公式，定义为（XdY+Z）。这是一个数字，后面跟着一个“d”，再跟着另一个数字，以及一个可选的“+”。可以有任意数量的骰子。例如，1d10+2d6+4 是一个有效的公式，并将作为一个单一的公式计算。
- 如果没有骰子，插件将简单地退出，并提供适当的警报错误信息。

### 截图

- `平均所有骰子` 的操作截图

![平均图像](https://cdn.pkmer.cn/covers/simple-dice-roller_2_0.png!pkmer)

- `模拟所有骰子` 的操作截图

![模拟图像](https://cdn.pkmer.cn/covers/simple-dice-roller_2_1.png!pkmer)

- 当前页面没有骰子时的截图

![没有骰子](https://cdn.pkmer.cn/covers/simple-dice-roller_2_2.png!pkmer)

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的笔记库 `VaultFolder/.obsidian/plugins/simple-dice-roller/` 目录下。

### 许可证

本项目使用 MIT 许可证授权。
