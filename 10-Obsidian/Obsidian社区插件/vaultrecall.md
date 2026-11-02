---
uid: 1793625624224001
title: "Obsidian 插件：VaultRecall Spaced Repetition"
tags: ["学习与教育", "自动化与AI", "效率工具", "obsidian插件"]
description: "Spaced repetition for your vault with SM-2 scheduling and optional BYOK AI-generated quizzes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：VaultRecall Spaced Repetition

> [!Note] 插件名片
> - 插件名称：VaultRecall Spaced Repetition
> - 插件作者：Chris
> - 插件说明：Spaced repetition for your vault with SM-2 scheduling and optional BYOK AI-generated quizzes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chrisnmorrison/vaultrecall-sr)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vaultrecall)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisnmorrison/vaultrecall-sr/master/README.md)



## 概述

VaultRecall Spaced Repetition 将间隔重复算法直接集成到 Obsidian 桌面端，利用 SM-2 调度系统帮助你按科学节奏复习笔记。它不修改你的 Markdown 文件内容，而是将复习状态独立存储在插件内部的数据文件中。除了基础的阅读复习模式，它还支持通过自带密钥（BYOK）调用 AI 接口，根据笔记内容自动生成测验题目，让复习过程从被动阅读转变为主动回忆。

典型场景包括定期回顾学习笔记或工作文档。例如，你可以右键点击“考研复习”文件夹启动会话，插件会按优先级展示到期笔记，你只需阅读后按 1-4 键评分，系统便会自动计算下次复习时间。若希望加深记忆，可开启 AI 测验模式，针对单篇笔记生成问答题，在弹窗中作答并评分，从而更有效地检验理解程度。

相比其他插件，其核心特色在于完全本地化的数据隔离与灵活的 AI 集成。复习历史不嵌入笔记元数据，避免了同步冲突和文件污染；同时，AI 功能允许用户自定义 API 端点、模型及提示词，且请求直接由本地发出，不经过第三方服务器。此外，插件提供了详细的统计面板和孤儿记录清理工具，方便管理长期积累的复习数据。

需要注意的是，该插件目前仅支持桌面端，且处于 Beta 阶段，大型库或特殊格式下可能出现错误，建议重要数据先备份。API 密钥以明文形式存储，若 Vault 同步至云端需格外注意隐私安全。如果你需要移动端支持，或希望复习数据随单个笔记文件迁移，此插件并不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


