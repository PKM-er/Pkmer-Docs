---
uid: 2023080322244633
title: Obsidian 插件：【Readme】Pipe tricks
tags: ['obsidian插件', 'readme']
description: 支持Wikilink管道技巧。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Pipe tricks

> [!Note] 插件名片
> - 插件名称：Pipe tricks
> - 插件作者：Marcus Olsson
> - 插件说明：支持Wikilink管道技巧。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/marcusolsson/obsidian-pipe-tricks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-pipe-tricks)

## 概述

支持Wikilink管道技巧。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/marcusolsson/obsidian-pipe-tricks/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-pipe-tricks]] 插件的自述翻译


# Obsidian的管道技巧插件

[![Build Obsidian plugin](https://github.com/marcusolsson/obsidian-pipe-tricks/actions/workflows/release.yml/badge.svg)](https://github.com/marcusolsson/obsidian-pipe-tricks/actions/workflows/release.yml)
[![Buy me a coffee](https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/marcusolsson)

> **该插件已停止维护：** 虽然我一直希望能够为Obsidian 1.0更新此插件，但我选择将重点放在我的另一个插件[Projects](https://github.com/marcusolsson/obsidian-projects)上。我不知道我何时（或是否）能够回到这个插件。
>
> 如果你有兴趣接手维护工作，请告诉我！

这是一个Obsidian插件，为Obsidian使用的Wikilink格式添加了[管道技巧](https://en.wikipedia.org/wiki/Help:Pipe_trick)。

来自维基百科：

> **管道技巧**使用[管道字符](https://en.wikipedia.org/wiki/Pipe_character "Pipe character")（"`|`"）来节省输入[管道链接](https://en.wikipedia.org/wiki/Help:Piped_link "Help:Piped link")的标签的时间，适用于多种[维基链接](https://en.wikipedia.org/wiki/Wikilink "Wikilink")。这样可以避免在输入标签时出现错误。
>
> 当链接的最后一个字符是管道字符时，管道技巧会自动生成该链接的显示文本。它的处理会删除链接标题中的括号部分，处理标题中的逗号，并删除命名空间前缀。所描述的处理发生在保存页面数据的时候，生成的文本与页面的其余维基标记一起保存 - 因此，它只是编辑的辅助工具。
>
> 一个更好的节省按键的方法是简单地将文本附加到链接上，例如`[[train]]s`。

## 已知限制

- 该插件不会删除命名空间前缀。主要是因为我还没有看到它的必要性。如果你觉得有用，请告诉我。

维基百科中的例子

这些例子也被用作测试案例：

- [[Pipe (computing)|]] -> [[Pipe (computing)|Pipe]]
- [[Phoenix, Arizona|]] -> [[Phoenix, Arizona|Phoenix]]
- [[pipe (computing)|]]s -> [[pipe (computing)|pipes]]
- [[pipe (computing)|]]mill -> [[pipe (computing)|pipemill]]
- [[Yours, Mine and Ours (1968 film)|]] -> [[Yours, Mine and Ours (1968 film)|Yours, Mine and Ours]]
- [[Il Buono, il Brutto, il Cattivo|]] -> [[Il Buono, il Brutto, il Cattivo|Il Buono]]
- [[pipe (computing)|]]! -> [[pipe (computing)|pipe]]!

## 管道函数

您还可以使用__管道函数__来转换链接文本。

您的链接仍然必须以`|`结尾，但在此之前加上一个额外的`|`可以使用内置的管道函数来转换您的文本。

例如：`[[布鲁斯特角|_|]]s` ⟶ `[[布鲁斯特角]]`

这些函数也可以链接在一起使用（目前这样做没有太大用处...）：`[[布鲁斯特角|_|^|swap|]]s`

管道函数之间的符号和字符串是管道函数的名称。

内置的管道函数列表：

- `lower`：_Hello World_ ⟶ _hello world_
- `_`：`lower`的别名
- `upperFirst`：_hello world_ ⟶ _Hello world_
- `upper_first`：`upperFirst`的别名
- `upperfirst`：`upperFirst`的别名
- `^`：`upperFirst`的别名
- `capital`：_hello of world_ ⟶ _Hello Of World_
- `^^`：`capital`的别名
- `upper`：_hello world_ ⟶ _HELLO WORLD_
- `^^^`：`upper`的别名
- `title`：_hello of world_ ⟶ _Hello of World_
- `#`：`title`的别名



