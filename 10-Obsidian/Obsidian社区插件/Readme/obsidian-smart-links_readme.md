---
uid: 2023120719431930
title: Obsidian 插件：【Readme】Smart Links
tags: ['obsidian插件', 'readme']
description: 可定制字符串的自动链接
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Smart Links

> [!Note] 插件名片
> - 插件名称：Smart Links
> - 插件作者：David Lynch
> - 插件说明：可定制字符串的自动链接
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kemayo/obsidian-smart-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-smart-links)

## 概述

可定制字符串的自动链接

![Smart Links](https://cdn.pkmer.cn/covers/obsidian-smart-links.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kemayo/obsidian-smart-links/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-smart-links]] 插件的自述翻译

# Obsidian 智能链接

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，它允许您定义自定义的“智能”链接，在阅读文档时会自动链接。

如果您习惯于在自动链接某些字符串的环境中编写，并且不想养成新的习惯，这将对您有所帮助。例如，在 phabricator 中的 `T12345`，或者在 github 中的 `#4324`。

它将把这个...

![编辑模式](https://cdn.pkmer.cn/covers/obsidian-smart-links_1_0.png!pkmer)

变成这个...

![阅读模式](https://cdn.pkmer.cn/covers/obsidian-smart-links_1_1.png!pkmer)

![目标焦点](https://cdn.pkmer.cn/covers/obsidian-smart-links_1_2.png!pkmer)

您可以在 Obsidian 的设置中添加自己的替换模式：

![设置](https://cdn.pkmer.cn/covers/obsidian-smart-links_1_3.png!pkmer)

使用方法

安装并启用插件。一旦安装完成，您会发现在设置中有一个名为“智能链接”的新部分。在这里，您可以添加/删除替换规则。您需要编写一个正则表达式和一个替换字符串。这可以是非常简单的，也可以是非常复杂的。

| 正则表达式 | 替换                             |
|--------------------|-----------------------------------------|
| `T\d+`             | `https://phabricator.wikimedia.org/$&`  |
| `\$([A-Z]+)`       | `https://finance.yahoo.com/quote/$1`    |
| `go\/[_\d\w-/]+`   | `http://$&`                             |

替换使用普通的 Javascript 正则表达式替换语法。非常抱歉。请记住，您需要转义在正则表达式中具有特殊含义的字符。匹配是受限的，因此它们只会在行的开头或某些空白字符之后立即发生。

## 鸣谢

阅读模式的代码受到了 [Obsidian GoLinks](https://github.com/xavdid/obsidian-golinks) 的很大影响 - 这个插件（可以说）是那个功能的可定制超集。
