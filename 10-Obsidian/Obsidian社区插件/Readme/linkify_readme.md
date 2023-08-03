---
uid: 2023080322213504
title: Obsidian 插件：【Readme】Linkify
tags: ['obsidian插件', 'readme']
description: 将匹配文本转换为链接
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Linkify

> [!Note] 插件名片
> - 插件名称：Linkify
> - 插件作者：Matthew Chan
> - 插件说明：将匹配文本转换为链接
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/matthewhchan/linkify)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?linkify)

## 概述

将匹配文本转换为链接



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/matthewhchan/linkify/main/README.md)
> 

---

## Readme(翻译）

下面是 [[linkify]] 插件的自述翻译


# Linkify
该插件根据正则表达式将文本转换为链接。可以在插件的选项页面上配置正则表达式和链接目标。

例如，您可以使Twitter用户名链接到相应的Twitter个人资料。

<img width="715" alt="image" src="https://user-images.githubusercontent.com/37097379/171934159-a8b2b751-1b6b-4b2d-944b-939f3e56d41b.png">

在上面的示例中，点击“@obsdmd”将在浏览器中打开http://twitter.com/obsdmd。

或者，您可能想要为GitHub仓库创建快捷方式，这样点击“gh:user/repo”将链接到`user/repo`的GitHub仓库。

<img width="715" alt="image" src="https://user-images.githubusercontent.com/37097379/171542746-de76396e-c31f-41f4-a155-7510688379b5.png">

在此示例中，点击“gh:obsidianmd/obsidian-releases”将在浏览器中打开http://github.com/obsidianmd/obsidian-releases。

您要匹配的文本和要链接到的URL是在插件的选项页面上配置的。

_注意：底层文本不会被修改。该插件仅更改您的笔记的外观和功能。它不会对您的`.md`文件进行任何更改。_

使用方法

### 添加链接模式
要添加链接模式：
- 转到Linkify的选项页面。
- 单击“添加新链接”按钮。
- 在第一个文本框中，输入一个正则表达式。
- 在第二个文本框中，写入您希望文本链接到的URL。[^1]
- 关闭选项页面。

[^1]: URL允许包含替换模式，如[`String.prototype.replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_a_parameter)中所述。

下面是Linkify“选项”页面的样子：

<img width="947" alt="image" src="https://user-images.githubusercontent.com/37097379/174934488-bc067504-4844-4697-9099-08c6f61378c5.png">

现在，任何与正则表达式匹配的文本都会在“实时预览”模式下突出显示，就像它是一个链接一样，单击文本将在浏览器中打开链接。

例如，如果正则表达式是`@(\w+)`，链接模式是`http://twitter.com/$1`，那么您的笔记中的任何`@obsdmd`都会链接到http://twitter.com/obsdmd。对于以`@`开头的任何其他Twitter用户名也是如此。

您可以拥有多个正则表达式-链接条目。每个条目都是独立应用的。

您可以通过点击条目右侧的垃圾桶图标来删除条目。

### 默认链接模式
默认情况下，插件会使用三个示例条目：

1. 匹配文本 `g:([a-zA-Z0-9.-]*)` 将链接到 `http://google.com/search?q=$1`，例如点击 "g:obsidian" 将在 Google 上搜索 "obsidian"。
2. 匹配文本 `gh:([a-zA-Z0-9.-/]*)` 将链接到 `http://github.com/$1`，例如点击 "gh:obsidianmd/obsidian-releases" 将打开 `obsidianmd/obsidian-releases` 的 Github 页面。
3. 匹配文本 `@([a-zA-Z0-9]*)` 将链接到 `http://twitter.com/$1`，例如点击 "@obsdmd" 将打开 Obsidian 的 Twitter 页面。



