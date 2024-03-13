---
uid: 2024022121200108
title: Obsidian 插件：【Readme】My Bible
tags: ['obsidian插件', 'readme']
description: 您自己可定制的Markdown圣经，适用于您的个人保险库！
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】My Bible

> [!Note] 插件名片
> - 插件名称：My Bible
> - 插件作者：GsLogimaker
> - 插件说明：您自己可定制的 Markdown 圣经，适用于您的个人保险库！
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/GsLogiMaker/my-bible-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gslogimaker-my-bible)

## 概述

您自己可定制的 Markdown 圣经，适用于您的个人保险库！

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/GsLogiMaker/my-bible-obsidian-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[gslogimaker-my-bible]] 插件的自述翻译

# 我的圣经

您自己可定制的 Markdown 圣经，适用于您的个人保险库！

![](https://github.com/GsLogiMaker/my-bible-obsidian-plugin/blob/444be699b5a81baddc5453856fc5da9fdadfce02/example.gif)

- 在您的 Obsidian 保险库中阅读圣经！
- 自动设置圣经的文件夹结构，随着您的阅读而填充经文！
- 定制整个布局以满足您的喜好！文件夹、名称、经文、链接，一应俱全！
- 从服务器访问不同的圣经翻译，或将它们下载到您的本地设备！
- 从您的笔记中链接到任何经文！例如：`[[创世记1#1]]`
- 在不复制圣经或破坏链接的情况下切换到您喜欢的任何翻译！
- 查看圣经如何与您的思想联系在一起在图形视图中！

这些功能还不够吗？[在这里提交您自己的想法！](https://github.com/GsLogiMaker/my-bible-obsidian-plugin/issues/new)

### 灵感

我受到 Obsidian 用户 [Joschua](https://joschua.io/) 的 [将所有笔记与经文链接起来](https://notes.joschua.io/60+Outputs/62+Projects/Bible+Study+Kit/Connecting+makes+you+engage+Scripture) 的想法启发。他通过在他的保险库中包含一本圣经副本，将每一章作为一个笔记，每一节作为其中的一个标题来实现这一点。我按照他的指示做了这个，也在我的保险库中得到了圣经，能够在我的保险库中链接到圣经真是太棒了。我可以直观地看到圣经如何与我的研究、梦想等联系起来！然而，这个过程很技术化，我不认为我能说服任何非程序员为他们自己的保险库做这个。我想改变这一点，所以我制作了 My Bible，将这个过程简化为几个简单的步骤，而不必离开 Obsidian。

### 它是如何工作的

我的圣经建立了一个文件夹结构，并为每一章节填充了一个笔记。这些章节并不包含圣经的文本；文本是在阅读时插入的，允许您拥有任何您想要的翻译，由相同的文件/章节/笔记表示。因此，您甚至不需要下载整本圣经（除非您想要）。

### 注意

此插件会向 [https://bolls.life/api/](https://bolls.life/api/) 发出请求，以下载有关圣经翻译、书籍和章节的文本和元数据。该插件本身不包含翻译内容。

### 开始

1. 从 Obsidian 设置中的*社区插件*列表中下载插件。
2. 在*设置*中的*社区插件*选项卡中激活*My Bible*。
3. 前往*My Bible*的设置并根据自己的喜好进行更改（如果愿意，稍后也可以这样做）。
4. 关闭设置菜单，然后按 `ctrl+p` 打开命令列表，然后搜索并选择命令 `Build Bible`。
5. 现在您的 vault 中有圣经，可以开始将笔记链接到它了！

### Commands

* `构建圣经` - 在您的保险库中构建圣经的文件结构。
* `下载翻译` - 从您的设置中下载翻译以供离线使用。
* `清除缓存` - 从您的文件系统中删除所有缓存的章节，包括您下载的翻译。

### 故障排除

如果您在使用插件时遇到问题，请 [在此处报告](https://github.com/GsLogiMaker/my-bible-obsidian-plugin/issues/new)。

### 支持

如果您想支持我的工作，请给我买杯咖啡！如果您想关注《我的圣经》的开发，请在 [X/Twitter](https://twitter.com/GsLogiMaker) 上关注我。

享受《我的圣经》！愿上帝保佑！
