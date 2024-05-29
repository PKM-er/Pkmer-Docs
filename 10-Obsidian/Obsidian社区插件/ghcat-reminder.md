---
uid: 2024052908520605
title: Obsidian 插件：GChat Reminder
tags: ['任务管理', '文件管理', 'obsidian插件']
description: 根据Obsidian任务的到期日期，将通知发送到Google Chat Webhook。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GChat Reminder

> [!Note] 插件名片
> - 插件名称：GChat Reminder
> - 插件作者：Anil Erdogan
> - 插件说明：根据 Obsidian 任务的到期日期，将通知发送到 Google Chat Webhook。
> - 插件分类：[' 任务管理 ', ' 文件管理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/anil-e/obsidian_gchat_plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ghcat-reminder)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/anil-e/obsidian_gchat_plugin/main/README.md)

## 概述

该 Obsidian 插件允许在笔记中的任务标记特定格式，当它们到期时触发自动提醒到 Google Chat。一旦任务被确定为到期，插件会通过 webhook 将通知发送到 Google Chat。

功能：

- 任务标记格式：使用 `(gChat@YYYY-MM-DD HH:MM)` 格式标记任务的到期日期和时间。
- Webhook URL 配置：在 Obsidian 的插件设置中输入 Google Chat 房间的 Webhook URL。
- 扫描间隔：插件每 3 分钟检查所有笔记中的到期任务。
- 网络注意事项：插件通过互联网与 Google Chat 通信，仅发送标记提醒的内容和相关到期日期，不传输或存储 Obsidian Vault 的其他数据。

使用场景：

1. 在 Obsidian 笔记中标记任务的到期日期和时间。
2. 在插件设置中输入 webhook URL。
3. 在任务到期时，通过 Google Chat 接收通知。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



