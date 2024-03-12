---
uid: 20240227160841
title: Obsidian 插件：【Readme】Better Math in Callouts & Blockquotes
tags: ['obsidian插件', 'readme']
description: 在引用和块引用中添加更好的数学渲染支持的实时预览。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Better Math in Callouts & Blockquotes

> [!Note] 插件名片
> - 插件名称：Better Math in Callouts & Blockquotes
> - 插件作者：Ryota Ushio
> - 插件说明：在引用和块引用中添加更好的数学渲染支持的实时预览。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/RyotaUshio/obsidian-math-in-callout)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?math-in-callout)

## 概述

在引用和块引用中添加更好的数学渲染支持的实时预览。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/RyotaUshio/obsidian-math-in-callout/master/README.md)

---

## Readme(翻译）

下面是 [[math-in-callout]] 插件的自述翻译

【机翻】

# 在 Callouts 和 Blockquotes 中更好的数学支持

这是一个 [Obsidian.md](https://obsidian.md) 插件，用于在 Callouts 和 Blockquotes 中添加更好的实时预览支持数学渲染。

> 注意：此插件的功能最初是我另一个社区插件 [LaTeX-like Theorem & Equation Referencer](https://ryotaushio.github.io/obsidian-latex-theorem-equation-referencer/) 的一部分。我完全重写了它，并进行了一系列改进，决定将其作为一个独立插件发布，以实现更好的模块化。

## 特点

### 在标注中的数学公式

在实时预览中，原始的 Obsidian 在编辑标注时不会渲染 MathJax 公式。

这个插件解决了这个问题。

此外，它还可以正确处理多行数学块；请参见下面的 [下一节](math-in-lockquotes)。

没有这个插件                 | 有了这个插件
:-----------------------------------:|:----------------------------------:
![Before](fig/callout-before.png) | ![After](https://cdn.pkmer.cn/covers/math-in-callout_2_0.png!pkmer)

### 块引用中的数学

在实时预览中，原始的 Obsidian 将块引用或标注中一行开头的 ">" 符号误解为多行数学块中的不等号符号（" 大于 "），而阅读视图正确识别它们。此插件使它们与阅读视图保持一致。

#### 例子

```
> $$
> \begin{align}
> a &= b \\
>   &= c
> \end{align}
> $$
```

 没有这个插件                 | 使用这个插件
:-----------------------------------:|:----------------------------------:
![Before](fig/blockquote-before.png) | ![After](https://cdn.pkmer.cn/covers/math-in-callout_2_1.png!pkmer)

## 安装

您可以在 Obsidian 中的社区插件浏览器中找到这个插件。

您也可以使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装最新的测试版。

1. 安装最新版本的 BRAT 并启用它。
2. 在浏览器中打开以下 URL：`obsidian://brat?plugin=RyotaUshio/obsidian-math-in-callout`。
3. 点击“添加插件”按钮。
4. _(可选但强烈建议)_ 在 BRAT 设置中，在页面顶部打开 `启动时自动更新插件`。

## 伴侣插件

这里是我开发的其他与数学相关的插件列表：

- [类似 LaTeX 的定理和方程引用器](https://github.com/RyotaUshio/obsidian-latex-theorem-equation-referencer)
- [不再闪烁的内联数学公式](https://github.com/RyotaUshio/obsidian-inline-math)
- [MathJax 前导管理器](https://github.com/RyotaUshio/obsidian-mathjax-preamble-manager)
- [自动\\displaystyle 内联数学公式](https://github.com/RyotaUshio/obsidian-auto-displaystyle-inline-math)

## 支持开发

如果您发现这个插件有用，请通过给我买杯咖啡来支持我的工作！
