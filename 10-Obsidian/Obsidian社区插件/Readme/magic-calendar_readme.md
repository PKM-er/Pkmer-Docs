---
uid: 2023120522255753
title: Obsidian 插件：【Readme】MagicCalendar
tags: ['obsidian插件', 'readme']
description: 使用自然语言处理技术在Markdown笔记中查找日历事件，并将其与所选日历无缝同步的基于人工智能的黑曜石插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】MagicCalendar

> [!Note] 插件名片
> - 插件名称：MagicCalendar
> - 插件作者：Vaccarini Lorenzo
> - 插件说明：使用自然语言处理技术在 Markdown 笔记中查找日历事件，并将其与所选日历无缝同步的基于人工智能的黑曜石插件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Vaccarini-Lorenzo/MagicCalendar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?magic-calendar)

## 概述

使用自然语言处理技术在 Markdown 笔记中查找日历事件，并将其与所选日历无缝同步的基于人工智能的黑曜石插件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Vaccarini-Lorenzo/MagicCalendar/main/README.md)
>

---

## Readme(翻译）

下面是 [[magic-calendar]] 插件的自述翻译

# MagicCalendar

AI 驱动的 Obsidian 插件，利用自然语言处理技术在 Markdown 笔记中查找日历事件，并将其与所选的日历无缝同步。 <br>
该插件目前仍处于测试阶段，支持的日历有：

- Apple 日历
- Google 日历

# 功能

NLP 日历事件识别

只需编写您的事件，并与您的日历无缝同步

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/Vaccarini-Lorenzo/MagicCalendar/main/materials/MagicCalendarNLPDemo.gif">
</p>

有时可能会将某些模式错误地识别为日历事件。**只需禁止它们！**

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/Vaccarini-Lorenzo/MagicCalendar/main/materials/MagicCalendarNLPBanDemo.gif">
</p>

另一方面，可能会有一些模式无法识别。您可以使用自定义分隔符来定义事件：

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/Vaccarini-Lorenzo/MagicCalendar/main/materials/CustomEventDemo.gif">
</p>

## 内联事件视图

使用简单的语法将事件嵌入到您的笔记中。<br>
内联事件视图是双向同步的（目前仅由 Apple Calendar 支持。Google Calendar 推送通知需要一个 HTTPS 服务器）。

# 入门指南

### 自动安装

浏览社区插件，寻找 "MagicCalendar"。

### 手动安装

- 检查 [最新版本](https://github.com/Vaccarini-Lorenzo/MagicCalendar/releases/latest)
- 下载 ```magic-calendar.zip```
- 解压文件并将 ```magic-calendar``` 文件夹移动到 Obsidian 插件文件夹中
- 从 Obsidian 设置中启用插件。

### 登录

要登录，只需点击日历丝带图标以选择您的日历提供程序。

不幸的是，苹果不提供 OAuth2 身份验证，要与苹果日历进行交互，您需要登录到 iCloud 帐户。

您的凭据将<ins>仅</ins>存储在本地设备中（加密）。有关更多信息，请查看**如何工作**部分。<br>

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/Vaccarini-Lorenzo/MagicCalendar/main/materials/AppleLogin.gif">
</p>

另一方面，谷歌支持 OAuth2 身份验证。

目前，该应用正在接受谷歌信任与安全团队的审核，因此将显示一个安全页面。

<p align="center">
  <img width="650" src="https://raw.githubusercontent.com/Vaccarini-Lorenzo/MagicCalendar/main/materials/GoogleLogin.gif">
</p>

### 享受

就是这样。只需编写一个事件，插件将尽力识别它。 </br>

要在笔记中嵌入您的日历，只需使用以下语法**在代码块中**：<br>
```<magic> from:YYYY/MM/DD to:YYYY/MM/DD```

它是如何工作的

### NLP 模块

该插件基于一个 NLP 库（NLP wink）进行工作。首先，将句子分割为标记、实体和词性。一旦句子被分解为可理解的组成部分，就可以根据包括日期、时间、持续时间、与事件相关的名词和目的在内的常见模式对它们进行过滤。为了保持 iCalSync 的轻量级，模式的数量并不多，然而识别过程具有高精度水平。

### iCloud 模块

在没有 [iCloud.js](https://github.com/foxt/icloud.js.git) 的帮助下，与 iCloud 的通信是不可能的。该库已经被适当修改以支持 POST 请求并绕过 CORS 策略。<br>
由于苹果不支持 OAuth，因此需要使用电子邮件和密码进行登录。这些插入的凭据仅存储在您的本地设备上（AES 加密），以避免每次需要刷新令牌时手动登录。加密密钥在安装插件时随机生成。可以在设置部分手动更改（不推荐）。

有什么新的？

### v.1.1.6

- 主要项目重构
- Google 日历集成
- 内联事件视图功能开发

### v.1.1.3

- 内联事件视图测试版
- Bug 修复：不可编辑的小部件错误
- NPL 模块改进：

	1. 微调

### v.1.1.2

- 实现内部计数器，以跟踪累积同步的数量
- 社区审查调整

### v.1.1.1

- 修复错误：日期解析

### v.1.1.0

- 不再需要 CORS 代理
- NPL 模块改进：

	1. 实体相关属性识别
	2. 事件目的识别
	3. 修复了实体重叠的错误
