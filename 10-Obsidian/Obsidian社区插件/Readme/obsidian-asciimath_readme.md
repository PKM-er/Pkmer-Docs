---
uid: 20230803204415
title: Obsidian 插件：【Readme】Obsidian asciimath
tags: ['obsidian插件', 'readme']
description: 为Obsidian添加Asciimath支持。
author: widcardw
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian asciimath

> [!Note] 插件名片
> - 插件名称：Obsidian asciimath
> - 插件作者：widcardw
> - 插件说明：为Obsidian添加Asciimath支持。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/widcardw/obsidian-asciimath)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-asciimath)

## 概述

为Obsidian添加Asciimath支持。

![Obsidian asciimath](https://cdn.pkmer.cn/covers/obsidian-asciimath.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/widcardw/obsidian-asciimath/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-asciimath]] 插件的自述翻译


# Obsidian Asciimath

## 安装

- （推荐）前往Obsidian插件市场，搜索`obsidian-asciimath`并安装。
- （手动）前往[发布页面](https://github.com/widcardw/obsidian-asciimath/releases)，下载zip文件，解压并将其添加到插件文件夹中。

## 用法

您可以使用[asciimath](http://asciimath.org)的语法编写数学公式。
我最近重构了这个库，您可以参考[asciimath-parser](https://github.com/widcardw/asciimath-parser)和[其在线演示](https://asciimath.widcard.win)。

**警告**：一些规则与http://asciimath.org不完全一致，特别是矩阵。更多信息，请参考https://asciimath.widcard.win。

#### 代码块

~~~text
```am (或者asciimath)
sum _(n=1) ^oo 1/n^2 = pi^2/6
```
~~~

![](screenshots/codeblock.png)

多行公式对齐（特别感谢[asciimath-js](https://github.com/zmx0142857/asciimathml)）

~~~text
```am
f: RR & -> S^1
                         <-- 这里有一个空行
x & |-> "e"^(2pi "i" x)
```
~~~

![](screenshots/multiline.png)

> asciimath 简单易读，而在 LaTeX 中，你需要用很多反斜杠来书写长公式，有时可能会令人困惑...
>
> ```tex
> \begin{aligned}
> f: \mathbb{R} & \to S^{1} \\
> x & \mapsto \mathrm{e}^{2 \pi \mathrm{i} x }
> \end{aligned}
> ```

#### 内联ASCIIMath

默认情况下，内联公式应该用\`\$和\$\`包裹起来，也就是说，你应该像这样输入公式：

```markdown
The integral `$int _0^(+oo) "e"^(-x) dx = 1$`.
```

![](screenshots/inline.png)

配置

您可以在设置中添加其他代码块的前缀别名。默认值为`asciimath`和`am`。

内联公式**只能**用特殊转义符包裹起来。请看下面的示例。

```diff
- 开始：``   !!! 无效 !!!
- 结束：``   !!! 无效 !!!

- 开始：`    !!! 无效 !!!
- 结束：`    !!! 无效 !!!

+ 开始：`$   √√√  有效  √√√  // 默认
+ 结束：$`   √√√  有效  √√√  // 默认

+ 开始：`$$  √√√  有效  √√√
+ 结束：$$`  √√√  有效  √√√

+ 开始：`*   √√√  有效  √√√
+ 结束：*`   √√√  有效  √√√

+ 开始：`{   √√√  有效  √√√
+ 结束：}`   √√√  有效  √√√

+ 开始：`[   √√√  有效  √√√
+ 结束：]`   √√√  有效  √√√

(... 其他有效的转义符 ...)
```

更改设置后，**不要忘记点击“保存”按钮**。

## 命令

- 插入 AsciiMath 代码块
- 将当前文件中的 AsciiMath 转换为 MathJax

![](screenshots/out.gif)

## 开发

```sh
git clone git@github.com:widcardw/obsidian-asciimath.git
pnpm i
pnpm run dev
```

支持

在我的使用过程中，这个插件经常会导致Obsidian的渲染问题（尤其是在实时预览模式下）。如果你有兴趣帮助我改进它，请随时在github的[issues](https://github.com/widcardw/obsidian-asciimath/issues)或[pull requests](https://github.com/widcardw/obsidian-asciimath/pulls)上提出建议。谢谢！



