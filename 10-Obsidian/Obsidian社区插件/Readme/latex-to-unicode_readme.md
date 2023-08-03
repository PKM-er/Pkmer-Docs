---
uid: 2023080322211894
title: Obsidian 插件：【Readme】LaTeX to Unicode converter
tags: ['obsidian插件', 'readme']
description: 将LaTeX命令转换为Unicode序列
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：LaTeX to Unicode converter

> [!Note] 插件名片
> - 插件名称：LaTeX to Unicode converter
> - 插件作者：fjdu
> - 插件说明：将LaTeX命令转换为Unicode序列
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/fjdu/obsidian-latex-unicode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latex-to-unicode)

## 概述

将LaTeX命令转换为Unicode序列



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/fjdu/obsidian-latex-unicode/master/README.md)
> 

---

## Readme(翻译）

下面是 [[latex-to-unicode]] 插件的自述翻译


# 将简单的LaTeX符号转换为Unicode

Obsidian支持LaTeX，但有些情况下Unicode符号就足够了。

## 工作原理

运行命令“LaTeX to Unicode”。在弹出框中输入LaTeX命令，然后插入转换结果。

```
输入：3^2 + 4^2 = 5^2
输出：3² + 4² = 5²

输入：(x+y)^2 = x^2 + 2xy + y^2
输出：(x+y)² = x² + 2xy + y²

输入：H_2 + \sfrac{1}{2}O_2 \to H_2O
输出：H₂ + ½O₂ → H₂O

输入：-\mathbf{r} \times i\hbar\nabla
输出：−𝐫 × iℏ∇

输入：\sqrt(2) = 1.4142\cdots
输出：√(2) = 1.4142⋯

输入：x \in y \Rightarrow y \ni x
输出：x ∈ y ⇒ y ∋ x

输入：\mathbb{N} \equiv {1, 2, 3, \ldots}
输出：ℕ ≡ {1, 2, 3, …}
```

## 致谢
- 该插件基于[unicodeit](https://www.unicodeit.net/)，具体来说是基于[这个GitHub仓库](https://github.com/svenkreiss/unicodeit/)。`unicodeit`的许可证和源代码已包含在`unicodeit`目录中。



