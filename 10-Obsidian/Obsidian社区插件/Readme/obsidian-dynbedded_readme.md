---
uid: 2023080322173602
title: Obsidian 插件：【Readme】Dynbedded
tags: ['obsidian插件', 'readme']
description: 动态嵌入为Obsidian.md
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Dynbedded

> [!Note] 插件名片
> - 插件名称：Dynbedded
> - 插件作者：Marcus Breiden
> - 插件说明：动态嵌入为Obsidian.md
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/MMoMM-org/obsidian-dynbedded)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-dynbedded)

## 概述

动态嵌入为Obsidian.md



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/MMoMM-org/obsidian-dynbedded/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-dynbedded]] 插件的自述翻译


嵌入片段、模板和任何可通过将当前范围委派给嵌入文件来链接的内容，可以使用直接引用或以日期命名格式相对于今天的引用。

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22obsidian-dynbedded%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

# 特点

嵌入其他笔记

笔记可以嵌入，并且会在活动笔记的上下文中执行任何动态内容。
您还可以在嵌入的笔记中使用标题。

例如：
~~~
```dynbedded
[[带有Dataview的笔记#选择任何标题级别]]
```
~~~

这将在当前笔记中包含该笔记的内容，并在当前笔记的上下文中执行包含的笔记中的任何动态内容。

例如：一个Dataview脚本用于显示内联链接
~~~
```dataview
LIST FROM [[]]
```
~~~
将显示当前笔记的内联链接，而不是您嵌入的笔记的内联链接。

![Dataview Inliks](images/40-01%20Dataview%20Inlinks.png)

当前日期替换音符名称

### 日期格式化 📅

您可以使用任何您喜欢的日期格式（基于 Moment.js 日期格式）来替换笔记名称的一部分。

例如：
~~~
```dynbedded
[[{{YYYY-MM-DD}}#也可以是标题]]
```
~~~

将以"YYYY-MM-DD"格式的当前日期作为名称，嵌入带有"也可以是标题"部分的笔记内容，例如 2022-10-14。

请注意 💡：您需要在花括号内包含完整的笔记名称，因此如果您想使用类似 DP-2022-10-14 的内容，语法如下：

~~~
```dynbedded
[[{{[DP-]YYYY-MM-DD}}#也可以是标题]]
```
~~~

### 灵活的日期 🚀📆

您还可以通过"添加"一个特定的持续时间到实际日期来更改要使用的日期，可以是：
- 数字（正数或负数）"天数"
- 基于ISO8601格式的字符串，例如**```P-1D```**，[更多信息请点击这里](https://en.wikipedia.org/wiki/ISO_8601#Durations)

例如：
~~~
```dynbedded
[[{{YYYY-MM-DD|P-1D}}#也可以是标题]]
```
~~~
将返回从"昨天"开始的笔记部分，以标题"#也可以是标题"开头

## 样式

您可以使用样式表来为嵌入内容设置样式。以下样式可用：

- .dynbedded = 用于正常显示。目前没有默认值。（如果您重新设置两者，请将此样式放在错误样式之前！）
- .dynbedded-error = 用于错误消息，默认为红色。请参阅 [styles.css](styles.css)

在创建自己的样式表后，您需要将其复制到 .obsidian/snippets 文件夹中，并在外观/ CSS Snippets 中启用样式表。

与其他插件一起使用
有些插件是Dynbedded的完美搭档，也是创建这个插件的原因之一😀
- [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 不仅可以显示从当前笔记引用的信息（如示例中的inlinks），还可以让您处理任务！不是虚假勾选任务框，而是真实的任务。
- [Buttons](https://github.com/shabegom/buttons) 也与Dynbedded非常配合，允许您创建一个带有一些可重复使用按钮的“主笔记”。

如果您想查看更多示例，请查看此存储库中的[Dynbedded](Dynbedded)下的测试保险库。

您还可以在我的网站上阅读有关该插件的更多信息：

- [MMoMM.org英文版](https://www.mmomm.org/en/post/obsidian-dynbedded)
- [MMoMM.org德文版](https://www.mmomm.org/post/obsidian-dynbedded)

或者，如果您更喜欢视频类型的内容，请查看以下视频示例：

- [YouTube英文版](https://youtu.be/pytz0KENhp8)
- [YouTube德文版](https://youtu.be/_0MooUB_sWQ)

## 限制

插件有一些限制（有些可能在将来可以克服，有些则不行）。
- 复选框会显示并可以勾选，但这只是虚假的。原始复选框不会被勾选！对于来自任务插件的任务也是如此。有关解决方法，请参阅[与其他插件一起使用](#与其他插件一起使用)。
- 代码块内的链接用于嵌入其他笔记数据，但这些链接并不是真正的链接，因此如果您重命名目标笔记，连接将断开。
- Dynbedded 不会搜索标题级别之间的内容，它只会搜索标题之间的内容，请参阅[问题 #2](https://github.com/MMoMM-org/obsidian-dynbedded/issues/2)。

## 可能的P+1D功能
PS：不，我明天不会交付这些功能😀

- 嵌入内容的自动刷新
- 以相对日期的形式显示当天的名称，例如本周三为DWed
- 以相对日期的形式显示上周的当天名称，例如上周三为D-1Wed

# 安装

通过Obsidian社区插件安装

一旦插件可用，只需通过社区插件对话框安装插件。启用后，您就可以开始使用了。
目前还没有真正的设置可用，只有调试日志。（以及一个指向我的Ko-Fi支持的链接）

通过BRAT安装

只要它尚未正式可用或者您想测试beta版本（目前没有，所以如果您想知道我何时发布一个，请告诉我），您可以通过BRAT安装此插件。

有关BRAT的更多信息以及如何安装此插件，请查看此处：
https://github.com/TfTHacker/obsidian42-brat#Quick-Guide-for-using-BRAT

手动安装插件

将[build](build)目录中的`main.js`、`styles.css`和`manifest.json`复制到您的Vault文件夹`VaultFolder/.obsidian/plugins/obsidian-dynbedded/`中。

## 致谢

基于[Dynamic Embed](https://github.com/dabravin/obsidian-dynamic-embed)的总体思路。



