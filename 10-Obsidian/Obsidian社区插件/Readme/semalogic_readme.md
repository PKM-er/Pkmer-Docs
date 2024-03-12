---
uid: 20240227160841
title: Obsidian 插件：【Readme】UseSemaLogic
tags: ['obsidian插件', 'readme']
description: 实时使用SemaLogic形式语言
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】UseSemaLogic

> [!Note] 插件名片
> - 插件名称：UseSemaLogic
> - 插件作者：SemaLogic UG
> - 插件说明：实时使用 SemaLogic 形式语言
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/MM-GO/UseSemaLogic)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?semalogic)

## 概述

实时使用 SemaLogic 形式语言

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/MM-GO/UseSemaLogic/main/README.md)

---

## Readme(翻译）

下面是 [[semalogic]] 插件的自述翻译

# 黑曜石 SemaLogic 插件

可以在 Obsidian 中使用 SemaLogic（<https://semalogic.de>）。

SemaLogic 是一种符号人工智能，可以适应自然语言，以便在一种既能被计算机理解又能被用户理解的连贯语言中明确表示逻辑关系。 SemaLogic 的三种形式（自然语言、技术语言和实际表示）可以随时相互转换，而不会在各自用户的理解中丢失逻辑关系。

**注意：** SemaLogic-Obsidian API 仍处于早期阶段，随时可能发生变化！

目前，该插件处于开发状态，用于测试 SemaLogic 以显示技术语言、实时图形图片，例如将 SVG 的一部分直接转换为 pdf。

## pdf-display 的首次使用案例

首先可用的 SemaLogic 命令包括

1. 在单独视图中显示技术语言（通过左侧控件上的骰子）
2. 通过使用 "SemaLogic()" 来预览 HTML 命令，例如

- 显示帮助
- 显示版本
- 使用模板设置方言

1. 将 SemaLogic 的结果传递给一个特定的 asp-SemaLogic 服务进行解决（开发者友好的特殊机会）

## 如何使用

安装后，应该有一个用于连接 SemaLogic 服务的第一个配置文件，在 service.semalogic.ddns.net 上使用默认设置。之后可能会有一个在本地主机或私人网络上运行的 SemaLogic 服务，因此可能会有多个配置文件设置。

我们正在建立一个概述文档，以使用 SemaLogic 的形式和技术语言。然后它将在这里链接，发布在 SemaLogic.de 上，然后您就能够创建自己的 SemaLogic 实时笔记。

要测试使用 SemaLogic - 打开一个新的笔记并写入以下内容：

笔记 1 - 示例技术语言：

OR-Rule 1|2 { 选择 A，选择 B }

选择 A [AND-Rule D,E]

AND-Rule D [选择 A，F]

并查看在 SemaLogicView 中发生了什么

笔记 2 - 示例：

Formalsprachliche Definition einer Und-Regel inkl. notwendiger SymToken - Configuration（德语）

该学位包括毕业论文，必修课程和选修课程。

在选修课程中，可以选择 19 世纪历史，现代历史，罗马历史或希腊历史的 2 至 3 个替代模块。

SymTokenAndOpen≡ 由以下组成

SymTokenSpace≡该

SymTokenSpace≡的

SymTokenElement≡，

SymTokenSpace≡该

SymTokenEoS≡。

SymTokenElement≡ 和

SymTokenOrOpen≡ 替代

SymTokenOrClose≡被选择

SymTokenSpace≡从

SymTokenSpace≡可以

SymTokenInterval≡ 至

SymTokenSpace≡模块

SymTokenElement≡ 或
