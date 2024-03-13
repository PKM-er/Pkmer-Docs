---
uid: 2023080322251995
title: Obsidian 插件：Quick Latex for Obsidian
tags: ['obsidian插件', 'readme']
description: 一款简单的插件，用于简化和加速Latex数学输入。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Quick Latex for Obsidian

> [!Note] 插件名片
> - 插件名称：Quick Latex for Obsidian
> - 插件作者：joeyuping
> - 插件说明：一款简单的插件，用于简化和加速 Latex 数学输入。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/joeyuping/quick_latex_obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quick-latex)

## 概述

一款简单的插件，用于简化和加速 Latex 数学输入。

![Quick Latex for Obsidian](https://cdn.pkmer.cn/covers/quick-latex.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joeyuping/quick_latex_obsidian/master/README.md)

---

## Readme(翻译）

下面是 [[quick-latex]] 插件的自述翻译

# Obsidian 的快速 LaTeX 插件

**【新功能】v 2.4.0**

* 用户现在可以设置在 align 和 cases 块中使用回车键还是 Shift+ 回车键来自动添加下一行符号\\。（请参见设置页面）注意：按下回车键后，&符号将不再自动添加，但是添加了一个用于对齐的附加功能（请参见下一个功能）。
* **新功能**：在 align 块中，插件会自动在用户定义的符号（默认为= > < \\le \\ge \\neq \\approx）之前添加对齐符号 "&"。

例如：x =(在此处按下 " 空格 " 键)，=符号之前将添加 "&"。

* 在 align、matrix 或 cases 块的末尾，按下 "tab" 键一次（对于 align 块）或两次（对于 matrix 和 cases 块）将使光标跳出该块。
* 如果下一行是双重美元符号，再次按下 "tab" 键将跳出双重美元符号。

## 描述

这个简单的插件添加了各种快捷方式，以加快 LaTeX 数学输入的速度。

## 功能

**注意：** 下面的所有功能都可以在插件设置页面中切换。

### 1. 自动闭合\$ 符号 + 在\$\$ 符号之间移动光标

* 输入**\$**将自动闭合为**\$**并将光标移动到**\$\$**符号之间。
* **提示：**如果您经常使用 $ 符号作为货币符号，可以在插件设置中切换关闭 " 自动闭合数学符号 " 功能。

![自动进入数学模式](https://raw.githubusercontent.com/joeyuping/quick_latex_obsidian/master/demo_gif/g_autoCloseMath.gif)

### 2. 自动关闭 {}, [], () 括号

* 输入 **"{"**, **"["** 和 **"("** 会自动闭合为 **"}"**,**"]"** 或 **")"**。
* **注意：** 该功能仅在光标后面跟着 "$"、空格、制表符或什么都没有（行尾）时激活。

### 3. 在 "\sum" 后自动添加 "\limits"

* 输入**"\sum"**将自动添加**"\limits"**以简化求和符号的限制显示语法。

### 4. 自动放大包含 \sum、\int 或 \frac 的括号

* 将光标放在包含 \sum、\int 或 \frac 的 () 或 [] 括号表达式之后，然后按下空格键，最外层的括号将添加 \left 和 \right，以显示更大的括号来包围这些大表达式。例如：(\sum\limits_{i=1}^n x+1) => **\left**(\sum\limits_{i=1}^n x+1 **\right**)

![自动放大括号](https://raw.githubusercontent.com/joeyuping/quick_latex_obsidian/master/demo_gif/g_autoEnlargeBracket.gif)

### 5. 在上标和下标后自动用{}括起表达式

* 在上标符号**"^"**和下标符号**"_"**后面输入表达式，然后按下**" 空格键 "**，将自动用**"{}"**括起表达式。
* 注意：如果你习惯在不用{}括起下标索引的情况下输入，那么当你在下标符号后按下空格键时，autoEncloseSubscript 函数可能会误触发。在这种情况下，建议关闭此功能。

![自动括起上标](https://raw.githubusercontent.com/joeyuping/quick_latex_obsidian/master/demo_gif/g_autoEncloseSup.gif)

### 6. 用数学符号将选定的表达式括起来

* 选择一个表达式并按下 "$" 键，将自动用数学符号将表达式括起来。

### 7. 自动分数 - 使用“/”代替\frac{}{}

* 输入**\$e/2\$**，然后按下**“空格键”**，系统会自动将表达式替换为**\$\frac{e}{2}\$**。

![自动分数](https://raw.githubusercontent.com/joeyuping/quick_latex_obsidian/master/demo_gif/g_autoFraction.gif)

* **提示 1：** 将分数表达式括在圆括号 () 中有助于系统识别分数的边界。

![自动分数 1](https://raw.githubusercontent.com/joeyuping/quick_latex_obsidian/master/demo_gif/g_autoFraction1%20-%20enclose%20with%20round%20bracket.gif)

* **提示 2：** 在分数前面加上**空格**表示分数的开始。对于一系列分数特别有用！

![自动分数 2](https://raw.githubusercontent.com/joeyuping/quick_latex_obsidian/master/demo_gif/g_autoFraction2%20-%20space.gif)

* **提示 3：** 对于较长的分子或分母表达式（特别是当表达式中有可能触发分数替换的空格时），请将表达式括在圆括号**()**中。

![自动分数 3](https://raw.githubusercontent.com/joeyuping/quick_latex_obsidian/master/demo_gif/g_autoFraction3%20-%20numeratordenominator.gif)

* **提示 4：** 插件会删除分子和分母中最外层的括号。

### 8. 对齐块的快捷方式

* 使用快捷键 "Alt+Shift+A"（Mac: "Option+Shift+A"）快速插入**\begin{align\*} \end{align\*}**块
* **提示 1：**如果您已经输入了一些表达式，并希望在前后添加\begin{align\*}和\end{align\*}，您可以先选择文本，然后按下 "Alt+Shift+A"（Mac: "Option+Shift+A"）。
* **提示 2：在 align 块内快速换行语法**
    * 在 align 块内按下**"enter"**（可以在设置中更改为 "shift-enter"）将自动在行尾插入**\\\\**并进入下一行。
    * 按下**"shift+enter"**进入下一行**而不**添加这些符号。
* **提示 3：更改参数**
    * 默认参数 "align*" 可以在插件设置中更改。
* **提示 4：编辑快捷键**
    * 您可以在**设置 -> 快捷键**中编辑快捷键

![添加对齐块](https://raw.githubusercontent.com/joeyuping/quick_latex_obsidian/master/demo_gif/g_alignblock.gif)

### 9. 矩阵块的快捷方式

* 使用快捷键 "Alt+Shift+M"（Mac： "Option+Shift+M"）快速插入**\begin{pmatrix} \end{pmatrix}**块
* **提示 1：在矩阵块内快速切换项目和下一行语法**
    * 在矩阵块内按下**"tab"**将自动插入**" & "**。
    * 在矩阵块内按下**"enter"**将自动插入**" \\\\ "**。
    * 按下**"shift+enter"**可在**不添加**这些符号的情况下进入下一行。
* **提示 2：更改参数**
    * 默认参数 "pmatrix" 可以在插件设置中更改。例如：matrix，bmatrix，Bmatrix，vmatrix，Vmatrix
* **提示 3：编辑快捷键**
    * 您可以在**设置 -> 快捷键**中编辑快捷键

![添加矩阵块](https://raw.githubusercontent.com/joeyuping/quick_latex_obsidian/master/demo_gif/g_matrixblock.gif)

使用 Tab 和 Shift-Tab 在数学表达式中快速跳转从括号到括号。

### 【增强！】11. 自定义速记

* 使用多字母的自定义速记来代替常见的 LaTeX 片段。例如，输入 "al" 后按下空格键将替换为 "\\alpha"
* 您可以在插件设置页面中设置自己的自定义速记。使用 ":" 将速记和片段分开；每组片段以 ";" 和换行符结束。

例如：

al:\\alpha;

bi:\\binom{#cursor}{#tab};

* **提示 1：** 如果表达式以花括号 "{}" 结尾，光标将自动放置在括号内。
* **提示 2：** 在片段中使用 "#cursor" 来设置替换后的光标位置。
* **提示 3：** 在片段中使用 "#tab" 来处理多个参数的情况。例如，bi:\\binom{#cursor}{#tab}，输入 bi 和空格后，速记将扩展为\\binom{|}{#tab}，光标位于第一个括号内。在输入第一个括号内的值后，按下 tab 键跳转到#tab 位置继续输入。
* **注意：** 如果速记前面是一个字母，则系统将忽略该速记。例如，"ta" 是 "\tau" 的速记。输入 "del**ta**" 后跟空格将**不会**触发替换。
* 下面是默认速记列表：

|速记|字符串|速记|字符串|速记|字符串|
|:---:|:---:|:---:|:---:|:---:|:---:|
|sq|\\sqrt{}|bb|\\mathbb{}|bf|\\mathbf{}|
|te|\\text{}|inf|\\infty|bi|\\binom{#cursor}{#tab}|
|cd|\\cdot|qu|\\quad|ti|\\times|
|al|\\alpha|be|\\beta|ga|\\gamma|
|Ga|\\Gamma|de|\\delta|De|\\Delta|
|ep|\\epsilon|ze|\\zeta|et|\\eta|
|th|\\theta|Th|\\Theta|io|\\iota|
|ka|\\kappa|la|\\lambda|La|\\Lambda|
|mu|\\mu|nu|\\nu|xi|\\xi|
|Xi|\\Xi|pi|\\pi|Pi|\\Pi|
|rh|\\rho|si|\\sigma|Si|\\Sigma|
|ta|\\tau|up|\\upsilon|Up|\\Upsilon|
|ph|\\phi|Ph|\\Phi|ch|\\chi|
|ps|\\psi|Ps|\\Psi|om|\\omega|
|Om|\\Omega|

## 注意

* 该仓库依赖于最新的 Obsidian API（obsidian.d.ts），它是以 TypeScript 定义格式编写的，目前仍处于早期阶段，可能随时会出现问题！
* 这是我第一个 Obsidian 插件项目，可能存在错误。请谨慎使用。
* 与内置的 vim 模式兼容。

请参见<https://github.com/joeyuping/quick_latex_obsidian>

## 支持

真的希望这个插件对你有所帮助！
