---
uid: 2023080322214030
title: Obsidian 插件：【Readme】Literate Haskell
tags: ['obsidian插件', 'readme']
description: 一个黑曜石插件，用于将`.lhs`文件集成到您的PKM中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Literate Haskell

> [!Note] 插件名片
> - 插件名称：Literate Haskell
> - 插件作者：James Jensen
> - 插件说明：一个黑曜石插件，用于将`.lhs`文件集成到您的PKM中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jajaperson/obsidian-literate-haskell)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?literate-haskell)

## 概述

一个黑曜石插件，用于将`.lhs`文件集成到您的PKM中。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jajaperson/obsidian-literate-haskell/master/README.md)
> 

---

## Readme(翻译）

下面是 [[literate-haskell]] 插件的自述翻译


# Obsidian Literate Haskell 插件

[Haskell 提供了原生的可读性编程支持](https://wiki.haskell.org/Literate_programming)，允许在 `.lhs` 文本文件中的 haskell 代码像普通的 `.hs` 文件一样运行。这似乎是在 [Obsidian](https://osidian.md) 中包含可运行的 haskell 代码的好方法，但是为了将文本块标记为 haskell 代码，您需要用以下方式包围它：

```
\begin{code}
...
\end{code}
```

这可能不是您想要的代码块。该插件通过执行以下操作提供了可读性的 haskell 支持：

- 将 `.lhs` 文件视为 markdown
- 在 `.lhs` 文件中的 `.haskell` 块中隐藏 `\begin{code}` 和 `\end{code}`。



