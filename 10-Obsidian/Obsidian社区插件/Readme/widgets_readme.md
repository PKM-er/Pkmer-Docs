---
uid: 2024022122531593
title: Obsidian 插件：【Readme】Widgets
tags: ['obsidian插件', 'readme']
description: Adds widgets to your notes like clock, countdown and quotes.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Widgets

> [!Note] 插件名片
> - 插件名称：Widgets
> - 插件作者：Rafael Veiga
> - 插件说明：Adds widgets to your notes like clock, countdown and quotes.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/rafaelveiga/obsidian-widgets)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?widgets)

## 概述

Adds widgets to your notes like clock, countdown and quotes.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/rafaelveiga/obsidian-widgets/master/README.md)

---

## Readme(翻译）

下面是 [[widgets]] 插件的自述翻译

# 黑曜石小部件

在 Obsidian 笔记中添加酷炫的小部件

## 用法

要插入一个小部件，只需添加一个语言为 `widgets` 的代码块，并将选项添加到正文中

````
```widgets
<OPTIONS>
```
````

目前可用的小部件有：

## 时钟

![时钟](public/clock.png)

`类型`: 时钟

````
```小部件
类型：时钟
```
````

## 引用

![引用](public/quote.png)

#### 配置主体

`type`: 引语

`quote`: 您想要显示的引语

`author`: 引语的作者（可选）

````
```widgets
type: quote
quote: 拉丁文 Lorem ipsum dolor 坐 amet
author: Lorem Ipsum
```
````

## 倒计时

![倒计时](public/countdown.png)

#### 配置主体

`type`: 倒计时

`date`: 必须是 `YYYY-MM-DD HH:MM:SS` 格式

`to`: 倒计时描述（可选）

```widgets
type: 倒计时
date: 2024-01-01 00:00:00
to: 新年快乐！🎉
```

## 命令面板

Obsidian Widgets 还配备了一个方便的命令面板命令（Ctrl+P），可以随时添加小部件

![命令面板](public/command-pallete.png)

## 建议

- [小部件请求、错误、新功能请求](https://github.com/rafaelveiga/obsidian-widgets/issues)

## 支持

如果您发现这个插件很有用并希望支持它的开发，您可以在 Ko-Fi 上赞助我

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Z8Z0SNIS3)
