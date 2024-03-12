---
uid: 20231220112631
title: Obsidian 插件：【Readme】Numerals
tags: ['obsidian插件', 'readme']
description: .Numerals可以将任何代码块变成一个高级计算器。评估代码块中每一行的数学表达式，包括单位、货币以及可选的TeX渲染。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Numerals

> [!Note] 插件名片
> - 插件名称：Numerals
> - 插件作者：RyanC
> - 插件说明：.Numerals 可以将任何代码块变成一个高级计算器。评估代码块中每一行的数学表达式，包括单位、货币以及可选的 TeX 渲染。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/gtg922r/obsidian-numerals)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?numerals)

## 概述

.Numerals 可以将任何代码块变成一个高级计算器。评估代码块中每一行的数学表达式，包括单位、货币以及可选的 TeX 渲染。

![Numerals](https://cdn.pkmer.cn/covers/numerals.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/gtg922r/obsidian-numerals/master/README.md)

---

## Readme(翻译）

下面是 [[numerals]] 插件的自述翻译

# 数字黑曜石插件

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22numerals%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json) ![GitHub 发布版本（按日期排序）](https://img.shields.io/github/v/release/gtg922r/obsidian-numerals?color=%23483699)

*数字黑曜石* 在 `math` 代码块中为您提供了一个高级计算器的功能，包括货币、单位、变量和数学函数！现在您可以在笔记中进行内联计算，并查看输入和计算结果。*数字黑曜石* 可与实时预览和阅读器视图一起使用，并提供 TeX 风格的渲染或语法高亮以及自动补全建议。可以使用 `#` 添加注释或解释，并可以在计算后使用 `=>` 指示重要结果。

![数字黑曜石柠檬摊 - 并排显示](https://cdn.pkmer.cn/covers/numerals_1_2.png!pkmer)

![数字黑曜石 TeX 示例](https://cdn.pkmer.cn/covers/numerals_1_3.png!pkmer)

## 特点

- 单位
 	- `1ft + 12in` → `2ft`
	- `20 mi / 4 hr to m/s` → `2.235 m / s`
	- `9.81 m/s^2 * 100 kg * 40 m` → `39.24 kJ`
- 货币
	- `$1,000 * 2` → `2,000 USD`
	- `£10 + £0.75` → `10.75 GBP`
- 数学函数
	- `sqrt`, `sin`, `cos`, `abs`, `log` 等（完整列表请参见 [mathjs](https://mathjs.org/docs/reference/functions.html)）
- 十六进制、二进制、八进制等进制
	- `0xff + 0b100` → `259`
	- `hex(0xff + 0b100)` → `"0x103"`
- 自然常数
	- `e`, `i`, `pi`, `speedOfLight`, `gravitationConstant`, `vacuumImpedance`, `avogadro`
	- 还有更多（请参见 [mathjs: Constants](https://mathjs.org/docs/reference/constants.html) 和 [mathjs: Units](https://mathjs.org/docs/datatypes/units.html)）
- 自动完成建议
	- 默认情况下，将为正在编辑的数学代码块中定义的任何变量提供自动完成建议
	- 可选设置以包括所有可用的函数、常数和物理常数
- 分数：
	- `fraction(1/3) + fraction(1/4)` → `7/12`
- 注释和标题：
	- 行末的 `#` 将被忽略，但以淡色文本形式呈现为注释
	- 以 `#` 开头的行将被数学引擎忽略，但在呈现时将加粗显示
- 结果注释：
	- 行末的 `=>`（但在注释之前）将告诉*Numerals*需要突出显示结果。该代码块中没有 `=>` 注释的任何行将以淡色（或根据设置而隐藏）呈现。

*Numerals*使用 [mathjs](https://mathjs.org/) 库进行所有计算。*Numerals*实现了一个预处理器，以允许更人性化的语法，例如货币符号和千位分隔符。有关所有可用的函数和功能（包括矩阵、向量、符号代数和微积分等），请参见 [mathjs文档](https://mathjs.org/docs/index.html)。

## 样式选项

*Numerals* 已经在默认主题和大多数其他顶级主题上进行了测试。它使用默认值，以便与任何其他主题兼容。还有几个可配置的设置，可以修改 *Numerals* 渲染数学块的方式。

### 渲染样式

*Numerals* 支持将输入/输出渲染为以下任一格式：

1. 纯文本
2. TeX
3. 语法高亮

可以从 *Numerals* 设置中选择其中一种选项作为默认样式，或者可以通过使用 `math-plain`、`math-tex` 或 `math-highlight` 而不是 `math` 代码块来在每个块上应用不同的样式。

![Numerals 渲染样式并排显示](https://cdn.pkmer.cn/covers/numerals_1_4.png!pkmer)

布局

#### 2-panes

- 答案显示在输入框的右侧，带有背景颜色和分隔符。
- 独特的样式将输入与评估的答案分开。

![Numerals 2 Panes](https://cdn.pkmer.cn/covers/numerals_1_5.png!pkmer)

#### 答案居右

- 答案居右：答案在与输入相同的行中显示，但右对齐
- 比两个窗格更微妙，适用于只有少量计算的情况

![Numerals answer right](https://cdn.pkmer.cn/covers/numerals_1_6.png!pkmer)

#### 答案如下

- 答案显示在输入的下方，下一行。
- 垂直上不太紧凑，但水平上更紧凑。

### 交替行颜色

选择一个一致的代码块背景颜色（左侧），或者交替行来帮助从输入到结果的跟踪（右侧）。

![数字交替行样式比较](https://cdn.pkmer.cn/covers/numerals_1_7.png!pkmer)

### 自动完成建议

默认情况下，*Numerals* 将为在特定的 `math` 代码块中定义的变量提供自动完成建议。打开 *在建议中包括函数和常量* 还将为 *Numerals* 支持的所有函数、数学常量和物理常量提供建议。

![函数的自动完成](https://cdn.pkmer.cn/covers/numerals_1_8.png!pkmer)

### 渲染结果的数字格式

*Numerals* 允许用户指定渲染结果的格式。

- **系统格式**（默认）：使用本地系统设置的数字格式（包括千位分隔符和小数点）
- **固定格式**：没有千位分隔符和完整精度。小数点作为小数分隔符（例如 `100000.1`）
- **指数格式**：始终使用指数表示法（例如 `1.000001e5`）
- **工程格式**：指数表示法的指数为 3 的倍数（例如 `100.0001e3`）
- **格式化格式**：强制使用特定类型的格式化表示法。
  - 样式 1：`100,000.1`
  - 样式 2：`100.000,1`
  - 样式 3：`100 000,1`
  - 样式 4：`1,00,000.1`

## 安装

*Numerals* 可以在 Obsidian 社区插件列表中找到。

### 使用 BRAT

在发布之前尝试 * Numerals*的最新功能，并提供有用的反馈和测试，请使用 [Obsidian BRAT插件](https://github.com/TfTHacker/obsidian42-brat) 尝试* Numerals*。**所有新的 * Numerals* 功能将首先推送给测试人员。**

1. 确保已安装 BRAT
2. 触发命令 `Obsidian42 - BRAT：添加用于测试的beta插件`
3. 输入此存储库 `gtg922r/obsidian-numerals`
4. 在社区插件列表中激活 * Numerals* 插件

## 进展中的功能和路线图

- [x] 支持将货币符号映射到不同的货币（[#17](https://github.com/gtg922r/obsidian-numerals/issues/17)）
	在设置中可以将 `$` 和 `¥` 映射到不同的货币
- [x] 样式设置支持所有颜色和其他样式选项（[#13](https://github.com/gtg922r/obsidian-numerals/issues/13)）
	- 在 1.0.5 中添加了部分支持
- [x] 结果注释，类似于 Calca 功能（[#4](https://github.com/gtg922r/obsidian-numerals/issues/4)）
	- 在 1.0.5 中添加了支持
- [x] 在数学代码块中自动完成函数和变量（[#15](https://github.com/gtg922r/obsidian-numerals/issues/15)）
	- 在 1.0.8 中添加了支持
- [ ] 内联计算内联代码块（[#5](https://github.com/gtg922r/obsidian-numerals/issues/5)）

欢迎通过创建一个 [问题](https://github.com/gtg922r/obsidian-numerals/issues) 来提出其他功能的建议！

相关

Obsidian 中有许多其他插件可以处理数学和计算的用例。

- 如果您主要关注评估数学表达式并将结果插入到笔记中，请查看 [meld-cp/obsidian-calc](https://github.com/meld-cp/obsidian-calc)
- 如果您正在寻找一个包含绘图功能并具有类似代码块渲染的完整功能的计算机代数系统，请考虑 [Canna71/obsidian-mathpad: Computer Algebra System (CAS) for Obsidian.md](https://github.com/Canna71/obsidian-mathpad)

还有一些“计算器作为笔记”应用程序，这些应用程序是 * Numerals * 的灵感来源。如果您正在寻找 Obsidian 之外的专用应用程序，请考虑：

- [Numi. Beautiful calculator app for Mac.](https://numi.app/)
- [Numbr](https://numbr.dev/)
- [Soulver 3 - Notepad Calculator App for Mac](https://soulver.app/)



