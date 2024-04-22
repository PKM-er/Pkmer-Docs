---
uid: 2024042221334726
title: Obsidian 插件：【Readme】Telegram Inbox
tags: ['obsidian插件', 'readme']
description: 从Telegram机器人接收消息并将其添加到每日笔记中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Telegram Inbox

> [!Note] 插件名片
> - 插件名称：Telegram Inbox
> - 插件作者：icealtria
> - 插件说明：从 Telegram 机器人接收消息并将其添加到每日笔记中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/icealtria/obsidian-telegram-inbox)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?telegram-inbox)

## 概述

从 Telegram 机器人接收消息并将其添加到每日笔记中。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/icealtria/obsidian-telegram-inbox/master/README.md)

---

## Readme(翻译）

下面是 [[telegram-inbox]] 插件的自述翻译

# 电报收件箱

此插件可以接收来自电报机器人的消息，并将其添加到 Obsidian 的每日笔记中。

## 使用方法

1. 使用 [@BotFather](https://telegram.me/BotFather) 创建一个机器人。
2. 复制 [@BotFather](https://telegram.me/BotFather) 提供的机器人令牌。
3. 将令牌粘贴到插件设置中的 `Bot Token` 字段中。
4. 将您的用户名或 Telegram ID 添加到 `Allowed Users` 中。
5. 点击 `Restart` 按钮。

## 手动安装插件

需要 Node.js 环境。

### 构建

- 克隆这个仓库。`git clone https://github.com/icealtria/telegram-inbox`
- 运行 `pnpm i` 或其他包管理器来安装依赖项。
- 运行 `pnpm build` 来构建插件。
- 将 `main.js`、`manifest.json`、`styles.css` 复制到您的保险库 `VaultFolder/.obsidian/plugins/telegram-inbox/` 中。



