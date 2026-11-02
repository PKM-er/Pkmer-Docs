---
uid: 1793625616999000
title: "Obsidian 插件：Muesli"
tags: ["自动化与AI", "文字处理", "效率工具", "obsidian插件"]
description: "Record meetings without a bot and get a diarized transcript, an AI summary and action items in your vault. Also turns spoken journal entries into daily-note bullets. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Muesli

> [!Note] 插件名片
> - 插件名称：Muesli
> - 插件作者：kevin
> - 插件说明：Record meetings without a bot and get a diarized transcript, an AI summary and action items in your vault. Also turns spoken journal entries into daily-note bullets. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/azilone/obsidian-muesli)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?muesli)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/azilone/obsidian-muesli/master/README.md)



## 概述

Muesli 是一款无需机器人加入会议的 AI 笔记插件，核心功能是在本地录制通话或面对面交流，并自动生成包含说话人区分、AI 摘要及待办事项的 Markdown 文件。它直接在你的 Obsidian 库中创建会议文件夹，将原始笔记、转录文本和音频归档在一起，确保所有数据完全由你掌控，无需依赖第三方云端服务。

典型场景包括远程会议和日常语音日记。例如，在参加 Zoom 或 Teams 会议时，你只需点击录音，期间随手记录关键词，停止后几秒内即可在库中获得一份结构清晰的会议纪要，其中行动项已格式化为待办清单，可直接被 Tasks 或 Dataview 插件识别。此外，你还可以对着手机或电脑口述当天的计划与心情，插件会自动将其转化为每日笔记中的列表项，省去手动打字的时间。

相比 Granola 或 Otter 等竞品，Muesli 的最大特色是开源且无机器人介入，它通过本地麦克风与系统音频捕获技术工作，兼容任何通话应用。其生成的摘要支持自定义模板，并默认使用英文或法文，同时具备“防遗忘”机制，若长时间无语音会自动结束录音。所有原始数据优先写入本地库，即使 API 调用失败也不会丢失会议记录，且支持从 iPhone 语音备忘录自动导入转录。

使用前需注意，该插件依赖 OpenRouter API，你需要拥有账户并充值，因为转录和摘要服务是付费的。此外，macOS 用户需安装特定的原生辅助程序以捕获系统音频，而 Windows 和 Linux 目前仅支持麦克风录音，无法捕获对方声音。如果你需要实时字幕、复杂的日历集成，或希望完全离线运行而不使用任何外部 API，这款插件可能不适合你。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


