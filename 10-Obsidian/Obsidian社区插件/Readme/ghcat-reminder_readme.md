---
uid: 2023120522251419
title: Obsidian 插件：【Readme】GChat Reminder
tags: ['obsidian插件', 'readme']
description: 根据Obsidian任务的到期日期，将通知发送到Google Chat Webhook。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】GChat Reminder

> [!Note] 插件名片
> - 插件名称：GChat Reminder
> - 插件作者：Anil Erdogan
> - 插件说明：根据 Obsidian 任务的到期日期，将通知发送到 Google Chat Webhook。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/anil-e/obsidian_gchat_plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ghcat-reminder)

## 概述

根据 Obsidian 任务的到期日期，将通知发送到 Google Chat Webhook。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/anil-e/obsidian_gchat_plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[ghcat-reminder]] 插件的自述翻译

# Obsidian 的 Google Chat 提醒插件

这个 Obsidian 插件允许在笔记中标记具有特定格式的任务，当它们到期时触发自动提醒发送到 Google Chat。一旦任务被确定为到期，通知将通过 webhook 发送到 Google Chat。

## 详细信息

**任务标记格式**：
可以使用格式 `(gChat@YYYY-MM-DD HH:MM)` 来标记任务的截止日期和时间。

**Webhook URL 配置**：
在 Obsidian 中导航到插件设置，并输入您的 Google Chat 房间的 Webhook URL。

**扫描间隔**：
该插件每 3 分钟检查所有笔记中的到期任务。

**网络注意事项**：
该插件通过互联网与 Google Chat 进行通信。它只发送标记提醒的内容及其相关的截止日期。您的 Obsidian Vault 中的其他数据不会被传输或存储在外部。

## 使用方法

1. **标记您的任务**：在 Obsidian 笔记中，使用指定的格式标记任何任务。
   <img width="598" alt="image" src="https://github.com/anil-e/obsidian_gchat_plugin/assets/81299222/fe2d9235-60ca-4f83-a348-061c505147ac">
2. **设置 Webhook**：在插件设置中输入 Webhook URL。
   <img width="820" alt="image" src="https://github.com/anil-e/obsidian_gchat_plugin/assets/81299222/0f53e222-1adb-4320-be1d-a33ce5792f4e">
3. **接收通知**：一旦任务达到截止日期和时间，您将在 Google Chat 中收到通知。
   <img width="820" alt="image" src="https://github.com/anil-e/obsidian_gchat_plugin/assets/81299222/908f618a-eead-4511-883f-f3414b02d5fe">



