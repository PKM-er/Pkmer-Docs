---
uid: 1793625622591001
title: "Obsidian 插件：Telegram AI Gateway"
tags: ["第三方工具集成", "自动化与AI", "安全与隐私", "obsidian插件"]
description: "Send notifications and approval requests with buttons to Telegram from AI agents and scripts, with strict security limits. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Telegram AI Gateway

> [!Note] 插件名片
> - 插件名称：Telegram AI Gateway
> - 插件作者：Emanuell
> - 插件说明：Send notifications and approval requests with buttons to Telegram from AI agents and scripts, with strict security limits. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/emanuellcarvalhopires/obsidian-telegram-ai-gateway)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?telegram-ai-gateway)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/emanuellcarvalhopires/obsidian-telegram-ai-gateway/master/README.md)



## 概述

Telegram AI Gateway 旨在解决 AI 代理与用户之间缺乏高效移动端交互通道的问题。它允许 Claude Code 等 AI 代理或自动化脚本通过 Telegram 发送富文本通知，并发起带有交互按钮的审批请求或选择题。核心功能包括异步审批机制，用户可直接在手机上点击按钮确认或拒绝，无需等待客户端超时，实现了从桌面端 AI 任务到移动端即时决策的无缝连接。

典型场景包括远程监控 AI 长任务或处理敏感操作确认。例如，当 AI 代理执行代码重构或文件删除前，插件会向你的 Telegram 发送审批请求，你在通勤路上即可点击“批准”或“拒绝”，AI 随即继续执行。另一个场景是 AI 需要用户从多个方案中选择，插件会发送带有选项按钮的问题，你甚至可以直接输入自由文本作为补充答案，AI 会实时获取你的选择以调整后续步骤。

相比同类插件，其最大特色是严格的安全控制与零开放端口设计。所有通信均通过 AI Ecosystem 本地服务器路由，不暴露额外网络端口，且 Bot Token 通过 Environment Keys 加密存储，避免泄露。此外，它支持精细化的速率限制、静默时段、接收者白名单及字符限制，确保通知不会滥用。界面完全遵循 Obsidian 原生设计系统，无多余表情符号，保持视觉整洁。

使用前需注意，该插件深度依赖 AI Ecosystem 核心模块，且需配合 Environment Keys 管理密钥，单独安装可能无法正常工作。它不适合需要完全离线运行或希望避免任何第三方网络服务（如 Telegram API）的用户。若你仅需要简单的本地通知，或不想将 AI 交互数据经过 Telegram 服务器，此插件可能过于复杂且存在隐私顾虑。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


