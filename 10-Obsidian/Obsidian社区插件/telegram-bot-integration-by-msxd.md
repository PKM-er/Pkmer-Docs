---
uid: 1791709370367000
title: 'Obsidian 插件：Telegram Vault Bot'
tags: ['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
description: 'Send messages to your own Telegram bot to file them into notes, and ask it what tasks are due. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Telegram Vault Bot

> [!Note] 插件名片
> - 插件名称：Telegram Vault Bot
> - 插件作者：Alex
> - 插件说明：Send messages to your own Telegram bot to file them into notes, and ask it what tasks are due. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/msxd/obsidian-telegram-bot-integration)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?telegram-bot-integration-by-msxd)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/msxd/obsidian-telegram-bot-integration/master/README.md)



## 概述

**Telegram Vault Bot** 是一款连接个人 Telegram 机器人与 Obsidian 库的桌面端插件，实现双向信息交互。

**主要功能**：支持“接收”与“发送”双向模式。接收模式下，机器人将用户发送的消息按预设规则自动归档至笔记；发送模式下，用户可查询库中内容，如获取到期任务列表。

**适用场景**：适合单人使用的私密知识库管理。适用于希望随时随地通过手机快速记录灵感、待办事项，并在桌面端自动整理归档的用户。

**核心特色**：
1. **完全私有化**：无需第三方服务器或账号，仅连接 `api.telegram.org`，数据安全性高。
2. **规则驱动**：支持自定义消息归档规则，灵活决定内容落位。
3. **低门槛**：仅需 Obsidian 1.11+ 桌面版及 @BotFather 创建的 Bot Token，无其他依赖。

**使用建议**：
1. 通过 @BotFather 获取 Token 并配置插件。
2. 务必在“Allowed chats”中授权自己的聊天窗口，否则无法接收消息。
3. 根据需求配置归档规则，默认规则接收所有未匹配消息。
4. 开启“Receiving”功能以启动监听，并可启用命令提示以优化交互体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


