---
uid: 2024042221333209
title: Obsidian 插件：【Readme】Tag Links
tags: ['obsidian插件', 'readme']
description: 使用快捷键将打开标签作为链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Tag Links

> [!Note] 插件名片
> - 插件名称：Tag Links
> - 插件作者：Zacchary Dempsey-Plante
> - 插件说明：使用快捷键将打开标签作为链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/zedseven/obsidian-tag-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tag-links)

## 概述

使用快捷键将打开标签作为链接。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zedseven/obsidian-tag-links/main/README.md)

---

## Readme(翻译）

下面是 [[tag-links]] 插件的自述翻译

# 黑曜石标签链接

一个用于 [Obsidian](https://obsidian.md) 的插件，允许使用热键将标签作为链接打开。

您可以定义正则表达式来匹配特定的标签，然后定义链接替换，使用捕获的值来构建一个 URL，然后自动打开。

这旨在与 Obsidian 的 [嵌套标签](https://help.obsidian.md/Editing+and+formatting/Tags#Nested+tags) 功能配合使用。我个人用它们来处理任何属于同一系统的多个条目的值：工单系统 ID，拉取请求等。

**这使您可以使用嵌套标签（使您的笔记更易追踪），同时仍然能够轻松访问它们引用的数据。**

## 安装

1. 像安装其他插件一样安装它。
2. 在设置中为插件的命令设置一个热键
   (`设置 -> 社区插件 -> 标签链接 -> 快捷键（看起来像加号）`)。
   - 如果您不确定要使用什么键盘快捷键，我建议使用 <kbd>Ctrl</kbd>+<kbd>Space</kbd>。
3. 在设置中配置一些标签链接替换
   (`设置 -> 社区插件 -> 标签链接 -> 选项（看起来像齿轮）`)。
   - 如果您是第一次使用正则表达式，您可以使用 <https://regex101.com/> 和 `ECMAScript` 风格来构建您的正则表达式和替换。

## 用法

要使用它，在设置中配置替换后，只需在文本光标位于标签上时按下配置的键盘快捷键。

你可能想要使用标签来引用 [Jira](https://www.atlassian.com/software/jira) 票据，并且需要能够轻松地打开它们。这正是最初激发这个插件的用例。

我的 Jira 标签看起来像这样：`#jira/<TICKET_ID>`（例如 `#jira/PROJ-1234`）

- 标签正则表达式看起来像：`jira/(.+)`（请注意，它不包括前导的 `#` 字符）
- 替换看起来像：`https://jira.example.com/browse/$1`

当我在 `#jira/PROJ-1234` 上使用我的配置的热键时，插件会在我的浏览器中打开 `https://jira.example.com/browse/PROJ-1234`。

为什么使用正则表达式，而不是简单的前缀？

最初，插件计划使用简单的前缀来匹配以特定值开头的标签。

为了适应更复杂的情况，其中标签结构中有多个相关值，或者替换需要放置在 URL 的多个位置。这种解决方案提供了更大的灵活性。
