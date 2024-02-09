---
uid: 2023120719321523
title: Obsidian 插件：【Readme】Latex Suite
tags: ['obsidian插件', 'readme']
description: 通过片段、文本扩展和编辑增强功能，使LaTeX数学排版速度接近手写速度。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Latex Suite

> [!Note] 插件名片
> - 插件名称：Latex Suite
> - 插件作者：artisticat1
> - 插件说明：通过片段、文本扩展和编辑增强功能，使 LaTeX 数学排版速度接近手写速度。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/artisticat1/obsidian-latex-suite)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-latex-suite)

## 概述

通过片段、文本扩展和编辑增强功能，使 LaTeX 数学排版速度接近手写速度。

![Latex Suite](https://cdn.pkmer.cn/covers/obsidian-latex-suite_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/artisticat1/obsidian-latex-suite/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-latex-suite]] 插件的自述翻译

# Obsidian Latex Suite

Obsidian 的一个插件，旨在使排版 LaTeX 数学公式的速度与手写一样快。

灵感来自 [Gilles Castel使用UltiSnips的设置](https://castel.dev/post/lecture-notes-1/)。

![演示](https://cdn.pkmer.cn/covers/obsidian-latex-suite_1_0.gif)

该插件的主要功能是**片段**，通过快捷方式和文本扩展帮助您更快地编写 LaTeX！例如，输入

- "sqx" 代替 "\sqrt{x}"
- "a/b" 代替 "\frac{a}{b}"
- "par x	y	" 代替 "\frac{\partial x}{\partial y}"

有关更多信息，请参见 [Gilles Castel的说明](https://castel.dev/post/lecture-notes-1/)。

该插件附带了一组 [默认片段](https://github.com/artisticat1/obsidian-latex-suite/blob/main/src/default_snippets.ts)，基于 [Gilles Castel的片段](https://castel.dev/post/lecture-notes-1/#other-snippets)。您可以修改它们，删除它们，并编写自己的片段。

## 用法

要开始使用，请输入“dm”进入显示数学模式。尝试输入以下内容：

- “xsr” → “x^{2}”。
- “x/y <kbd>Tab</kbd>” → “\\frac{x}{y}”。
- “sin @t” → “\\sin \\theta”。

**请查看 [速查表](#cheatsheet)**，了解常用默认片段的列表。

一旦熟悉了这些内容，您可以查看 [默认片段](https://github.com/artisticat1/obsidian-latex-suite/blob/main/src/default_snippets.ts) 以获取更多命令。例如：

- “par <kbd>Tab</kbd> f <kbd>Tab</kbd> x <kbd>Tab</kbd>” → “\\frac{\\partial f}{\\partial x}”。
- “dint <kbd>Tab</kbd> 2pi <kbd>Tab</kbd> sin @t <kbd>Tab</kbd> @t <kbd>Tab</kbd>” → “\\int_{0}^{2\pi} \\sin \\theta \\, d\\theta”。

您还可以添加自己的片段！[在此处查看有关编写片段的更多信息](#snippets)。您可以 [在此处查看其他人编写的片段并分享您自己的片段](https://github.com/artisticat1/obsidian-latex-suite/discussions/50)。

## 特点

### 自动分数

允许您输入 "1/x" 而不是 "\frac{1}{x}"。

例如，它会进行以下扩展：

- `x/` → `\frac{x}{}`
- `(a + b(c + d))/` → `\frac{a + b(c + d)}{}`

并将光标移动到括号内。

完成输入分母后，按下<kbd>Tab</kbd>键退出分数。

![auto-fraction](https://cdn.pkmer.cn/covers/obsidian-latex-suite_1_1.gif)

### 矩阵快捷键

在矩阵、数组、align 或 cases 环境中，

- 按下<kbd>Tab</kbd>键将插入 "&" 符号
- 按下<kbd>Enter</kbd>键将插入 "\\\\" 并移动到新的一行
- 按下<kbd>Shift + Enter</kbd>键将移动到下一行的末尾（可用于退出矩阵）

![矩阵快捷键](https://cdn.pkmer.cn/covers/obsidian-latex-suite_1_2.gif)

### Conceal

*此功能必须在设置中启用！*

通过隐藏 LaTeX 代码，使您的方程更易读，而不是以漂亮的格式呈现。

例如，"\dot{x}^{2} + \dot{y}^{2}" 将显示为 "ẋ² + ẏ²"。

要显示 LaTeX 代码，请将光标移到其上。

![conceal demo](https://cdn.pkmer.cn/covers/obsidian-latex-suite_1_3.png!pkmer)

![conceal demo 2](https://cdn.pkmer.cn/covers/obsidian-latex-suite_1_4.gif)

### Tabout

- 当光标位于方程的末尾时，按下<kbd>Tab</kbd>键将把光标移动到 $ 符号之外。
- 否则，按下<kbd>Tab</kbd>键将使光标前进到下一个闭合括号：），]，}，>或|。

### 预览行内数学公式

当光标位于行内数学公式内时，将显示一个弹出窗口，显示渲染后的数学公式。

<img width=500 src="https://raw.githubusercontent.com/artisticat1/obsidian-latex-suite/main/gifs/inline_math_preview_1.png">
<img width=650 src="https://raw.githubusercontent.com/artisticat1/obsidian-latex-suite/main/gifs/inline_math_preview_2.png">

### 颜色和突出显示匹配的括号

- 匹配的括号以相同的颜色呈现，以提高可读性。
- 当光标靠近一个括号时，该括号及其配对括号将被突出显示。
- 当光标位于括号内部时，将突出显示封闭的括号。

![颜色和突出显示匹配的括号演示](https://cdn.pkmer.cn/covers/obsidian-latex-suite_1_5.gif)

### 可视化片段

有时候你想要注释数学公式，或者划掉一些项。使用光标选择一些数学公式，然后输入以下内容：

- "U" 将用 "\\underbrace" 包围它。
- "C" 将用 "\\cancel" 包围它。
- "K" 将用 "\\cancelto" 包围它。
- "B" 将用 "\\underset" 包围它。

![可视化片段](https://cdn.pkmer.cn/covers/obsidian-latex-suite_1_6.gif)

### 自动扩大括号

当触发包含 "\\sum"、"\\int" 或 "\\frac" 的代码片段时，任何包围的括号都会使用 "\\left" 和 "\\right" 进行扩大。

![自动扩大括号](https://cdn.pkmer.cn/covers/obsidian-latex-suite_1_7.gif)

### 编辑器命令

- 将当前光标所在的方程用方框包围起来。
- 选择当前光标所在的方程。

### 代码片段

代码片段的格式如下：

```typescript
{trigger: string, replacement: string, options: string, description?: string, priority?: number}
```

- `trigger`：触发此代码片段的文本。
- `replacement`：用于替换 `trigger` 的文本。
- `options`：见下文。
- `description`（可选）：此代码片段的描述。
- `priority`（可选）：此代码片段的优先级。默认为 0。优先级较高的代码片段先执行。可以为负数。

#### 选项

- `m`：数学模式。只在数学环境中运行此代码片段
- `t`：文本模式。只在数学环境外运行此代码片段
- `A`：自动。一旦输入触发器，即展开此代码片段。如果省略，则必须按下<kbd>Tab</kbd>键才能展开代码片段
- `r`：正则表达式。将 `trigger` 视为正则表达式
- `w`：单词边界。只在触发器前后有单词分隔符（如 `.`、`,` 或 `-`）时运行此代码片段。

通过在 `replacement` 中写入 "$0"、"$1" 等来插入**标签位置**，以便光标跳转。

有关编写代码片段的更多详细信息，包括**正则表达式**代码片段，请参阅 [此处的文档](DOCS.md)。您可以在 [此处查看其他人编写的代码片段并分享您自己的代码片段](https://github.com/artisticat1/obsidian-latex-suite/discussions/50)。

## 快捷键表

| 触发器              | 替换内容          |
| ------------------ | ---------------- |
| mk                 | \$ \$            |
| dm                 | \$\$<br><br>\$\$ |
| sr                 | ^{2}             |
| cb                 | ^{3}             |
| rd                 | ^{ }             |
| \_                 | \_{ }            |
| sq                 | \\sqrt{ }        |
| x/y <kbd>Tab</kbd> | \\frac{x}{y}     |
| //                 | \\frac{ }{ }     |
| te <kbd>Tab</kbd>  | \\text{ }        |
| x1                 | x_{1}            |
| x,.                | \\mathbf{x}      |
| x.,                | \\mathbf{x}      |
| xdot               | \\dot{x}         |
| xhat               | \\hat{x}         |
| xbar               | \\bar{x}         |
| xvec               | \\vec{x}         |
| xtilde             | \\tilde{x}       |
| xund               | \\underline{x}   |
| ee                 | e^{ }            |

当运行一个将光标移动到大括号{}内的代码片段时，按下<kbd>Tab</kbd>键退出大括号。

### 希腊字母

| 触发词 | 替换文本     | 触发词 | 替换文本     |
|---------|--------------|---------|-------------|
| @a      | \\alpha      | eta     | \\eta       |
| @b      | \\beta       | mu      | \\mu        |
| @g      | \\gamma      | nu      | \\nu        |
| @G      | \\Gamma      | xi      | \\xi        |
| @d      | \\delta      | Xi      | \\Xi        |
| @D      | \\Delta      | pi      | \\pi        |
| @e      | \\epsilon    | Pi      | \\Pi        |
| :e      | \\varepsilon | rho     | \\rho       |
| @z      | \\zeta       | tau     | \\tau       |
| @t      | \\theta      | phi     | \\phi       |
| @T      | \\Theta      | Phi     | \\Phi       |
| @k      | \\kappa      | chi     | \\chi       |
| @l      | \\lambda     | psi     | \\psi       |
| @L      | \\Lambda     | Psi     | \\Psi       |
| @s      | \\sigma      |         |             |
| @S      | \\Sigma      |         |             |
| @o      | \\omega      |         |             |
| ome     | \\omega      |         |             |

对于名称较短（2-3 个字符）的希腊字母，只需输入其名称，例如 "pi" → "\\pi"

## 贡献

欢迎任何贡献和 PR！

## 致谢

- [@tth05](https://github.com/tth05) 的 [Obsidian Completr](https://github.com/tth05/obsidian-completr) 为制表位代码提供了基础
- [Dynamic Highlights](https://github.com/nothingislost/obsidian-dynamic-highlights/blob/master/src/settings/ui.ts) 作为参考
- [Quick Latex for Obsidian](https://github.com/joeyuping/quick_latex_obsidian) 为灵感来源

## 支持

如果你喜欢这个插件并想要表示感谢，你可以在这里给我买杯咖啡！
