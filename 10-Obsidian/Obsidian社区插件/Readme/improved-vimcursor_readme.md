---
uid: 2023080322202911
title: Obsidian 插件：【Readme】Improved VimCursor
tags: ['obsidian插件', 'readme']
description: 在Obsidian中，光标的体验有了改进。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Improved VimCursor

> [!Note] 插件名片
> - 插件名称：Improved VimCursor
> - 插件作者：hhhapz
> - 插件说明：在 Obsidian 中，光标的体验有了改进。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/hhhapz/improved-obsidian-vimcursor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?improved-vimcursor)

## 概述

在 Obsidian 中，光标的体验有了改进。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/hhhapz/improved-obsidian-vimcursor/master/README.md)
>

---

## Readme(翻译）

下面是 [[improved-vimcursor]] 插件的自述翻译

## 改进的 VimCursor

这是一个非常简单的插件，为 Obsidian 中的 Vim 实例定义了 4 个命令。这些命令提供了很好的生活质量，允许在常规 Vim 中使用 0 和 $作为g0和g$。也就是说，当文本换行多行时，上述命令将光标放置在行的可视开头和可视结尾（分别）。

该插件还定义了:pHead 和:nHead 命令，用于转到文档中的下一个 Markdown 标题。如果在光标之前或之后（取决于命令）找不到标题，则转到文档的开头或结尾（分别）。

- `:g0`：转到当前行的可视开头。
- `:g$`：转到当前行的可视结尾。
- `:pHead`：转到文档中最近定义的标题。
- `:nHead`：转到文档中的下一个定义的标题。

该插件隐式依赖于 [obsidian-vimrc-support][vimrc]。

以下是我如何定义我的.obsidian.vimrc：

```vim
nmap j gj
nmap k gk
nmap 0 :g0
nmap $ :gDollar
nmap [[ :pHead
nmap ]] :nHead


vmap j gj
vmap k gk
```

[vimrc]: <https://github.com/esm7/obsidian-vimrc-support>



