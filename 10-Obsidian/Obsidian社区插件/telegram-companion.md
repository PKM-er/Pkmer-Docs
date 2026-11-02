---
uid: 1793625622594000
title: "Obsidian 插件：Telegram Companion"
tags: ["第三方工具集成", "自动化与AI", "效率工具", "obsidian插件"]
description: "Capture Telegram messages into your daily note, and chat with a bot that has read your recent notes. It keeps a profile note about you and works with the model you choose. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Telegram Companion

> [!Note] 插件名片
> - 插件名称：Telegram Companion
> - 插件作者：马自立
> - 插件说明：Capture Telegram messages into your daily note, and chat with a bot that has read your recent notes. It keeps a profile note about you and works with the model you choose. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/matsurimw/telegram-companion)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?telegram-companion)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/matsurimw/telegram-companion/master/README.md)



## 概述

Telegram Companion 将 Telegram 机器人接入 Obsidian，核心功能分为记录与对话两部分。在记录模式下，你发送的文本、图片或链接会自动存入当天的日记笔记，实现手机端的快速捕捉。在对话模式下，机器人能读取你近期的笔记内容，基于上下文进行互动，并维护一份随时间更新的个人档案，让你无需重复背景信息即可与 AI 交流。

典型场景包括碎片化记录与智能回顾。例如，当你突然想到一个灵感但手边只有手机时，直接发给机器人即可存入当日日记；或者在睡前发送“睡了”，机器人会总结当天完成的事项并建议明日优先处理的任务。若你希望获得更个性化的反馈，如表达疲惫时，它能结合你本周的忙碌程度给出具体回应，而非通用的安慰话语。

相比同类插件，其特色在于具备“记忆”与“人格”。它通过读取最近一周的日记来理解你的现状，并避免重复提及近期已讨论过的内容。此外，你可以自定义机器人的性格和口头禅，使其语气更贴近朋友而非客服。在模型选择上，它支持 Claude Code CLI、Anthropic API 及任何 OpenAI 兼容接口，包括本地 Ollama，确保数据隐私或灵活切换后端。

使用前需注意，该插件仅支持桌面端，且 Obsidian 必须保持开启状态才能响应消息，电脑休眠期间发送的消息会在唤醒后补录。它不适合需要完全离线运行或移动端独立使用的场景。若你仅需要简单的消息存档功能，无需 AI 对话能力，或希望数据完全不出本地且不使用任何云端模型，则需确保配置了本地模型后端，否则默认设置可能涉及网络请求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


