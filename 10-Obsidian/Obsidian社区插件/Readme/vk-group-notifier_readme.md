---
uid: 2024022122530940
title: Obsidian 插件：【Readme】Vk group notifier
tags: ['obsidian插件', 'readme']
description: 跟踪来自vk.com群组的新闻帖子。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Vk group notifier

> [!Note] 插件名片
> - 插件名称：Vk group notifier
> - 插件作者：Filichev.Evgeny
> - 插件说明：跟踪来自 vk.com 群组的新闻帖子。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/filichev-evgeny/obsidianvkupdatenotifier)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vk-group-notifier)

## 概述

跟踪来自 vk.com 群组的新闻帖子。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/filichev-evgeny/obsidianvkupdatenotifier/master/README.md)
>

---

## Readme(翻译）

下面是 [[vk-group-notifier]] 插件的自述翻译

# 黑曜石 Vk 群组帖子检查器

This plugin gives you ability to check new posts on the vk.com website

## 如何使用

- **需要 vk.com 账户**。您可以在插件的设置选项卡中登录。所请求的权限是：groups, offline。授权由 vk.com 处理，插件无法访问用户的登录/密码。
- 创建带有 "name:" 参数的代码块 ``vk-group-notifier``。（在块的开头使用\```，在结尾处使用\```）（如果不知道如何操作，请查看 [Obsidian Markdown教程](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Code%20blocks)）

```vk-group-notifier
  name:nameOfTheGroup
```

* 如果群组没有简称，您可以使用其“id”。如果同时存在“name”和“id”，将使用“id”。

```vk-group-notifier
id: 12345
```

* 您可以为每个代码部分覆盖任何特定参数

```vk-group-notifier
 name:groupName
 maxDays:23
 pinLast:true
 maxTextLength:15
 dateFormat:DD-MMMM-YYYY
```

- 将 `main.js`、`manifest.json` 复制到您的 vault `VaultFolder/.obsidian/plugins/anyFolderName/`。

## Android 问题

我无法弄清楚如何使用 webview，因此需要手动将授权链接复制粘贴到输入字段中。是的，我知道这看起来不太用户友好。您也可以在 PC 上登录，任何类型的同步都应携带授权令牌。
