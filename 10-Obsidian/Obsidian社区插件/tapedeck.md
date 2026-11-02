---
uid: 1793625622082001
title: "Obsidian 插件：Tapedeck"
tags: ["自动化与AI", "第三方工具集成", "文字处理", "obsidian插件"]
description: "Import agent transcripts (Claude Code, ChatGPT / Codex, Pi) as readable notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tapedeck

> [!Note] 插件名片
> - 插件名称：Tapedeck
> - 插件作者：tyler-dot-earth
> - 插件说明：Import agent transcripts (Claude Code, ChatGPT / Codex, Pi) as readable notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tyler-dot-earth/obsidian-tapedeck)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tapedeck)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tyler-dot-earth/obsidian-tapedeck/master/README.md)



## 概述

Tapedeck 将 Claude Code、ChatGPT/Codex 或 Pi 的会话记录转化为结构清晰、易于阅读的 Obsidian 笔记。它解决了 AI 代理原始日志难以归档和回顾的问题，通过自动识别会话来源，将杂乱的交互数据整理为带有标题、项目标签和时间戳的标准化文档，让你能像翻阅磁带一样轻松回溯每一次 AI 协作过程。

想象你刚结束一个复杂的代码调试会话，只需在插件侧边栏的“磁带架”中找到对应条目，点击即可生成一篇包含完整上下文和关键指令的笔记。或者，当你想批量整理过去一周的工作时，可以使用“磁带选择器”按项目或日期筛选，一次性导入多个会话。这些笔记会自动关联到对应的项目目录，方便你在知识库中按主题检索。

相比其他仅做简单文本转换的工具，Tapedeck 的核心优势在于其智能的元数据提取与去重机制。它能从会话文件中精准提取用户自定义标题或首个有效提示词作为笔记标题，并自动识别 Git worktree 结构以正确归类项目。此外，基于 `session_id` 的唯一性校验确保了重复导入时只会更新现有笔记而非创建副本，同时保留了用户手动修改的项目标签，避免了数据冗余。

需要注意的是，该插件目前仅支持桌面版 Obsidian，且要求版本在 1.13.0 以上。它主要面向需要长期管理 AI 代理会话历史的开发者或知识工作者。如果你只是偶尔使用 AI 助手，或者不需要将对话记录纳入个人知识体系进行长期检索，那么这款插件可能显得过于复杂。此外，自动导入功能仅在 Obsidian 运行时生效，若你依赖后台静默同步，需留意这一限制。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


