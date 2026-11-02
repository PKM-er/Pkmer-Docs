---
uid: 1793625613654000
title: "Obsidian 插件：Hermes Studio"
tags: ["自动化与AI", "效率工具", "第三方工具集成", "obsidian插件"]
description: "Chat with Hermes Agent in Obsidian — with sessions, model & mode pickers, inline diffs, skills hub, memory review, and live subagent panels. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hermes Studio

> [!Note] 插件名片
> - 插件名称：Hermes Studio
> - 插件作者：Guilherme Ceschiatti B. Moreira
> - 插件说明：Chat with Hermes Agent in Obsidian — with sessions, model & mode pickers, inline diffs, skills hub, memory review, and live subagent panels. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '效率工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/6qat/rea-hermes-studio)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hermes-studio)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/6qat/rea-hermes-studio/master/README.md)



## 概述

Hermes Studio 将 AI 对话、工作区助手和差异对比工作台无缝集成到 Obsidian 中。它允许你在笔记软件内直接与 Hermes Agent 交互，支持会话管理、模型与模式选择，并提供内联差异视图。插件通过动态 CSS 变量注入，完美适配 Obsidian 的当前主题，无论是深色还是浅色模式，都能保持视觉风格的一致性，让 AI 辅助体验融入你的知识库工作流。

典型场景包括在撰写技术文档时，利用侧边栏或浮动模态框调用助手，将当前笔记内容或选中文字作为上下文发送给 AI，获取针对性的建议或代码片段。另一个场景是当 AI 生成代码或笔记修改建议时，你可以使用统一的差异引擎进行并排或统一视图对比，确认无误后再应用更改，确保对知识库的每一次修改都经过人工审核，避免误操作。

相比同类插件，Hermes Studio 的特色在于其完整的 VSCode API 桥接层，能够实时追踪活动笔记、更新选区，并双向生成 WikiLink 和 Obsidian URL。它提供了灵活的 AI 端点集成，允许自定义服务器主机、端口、API 密钥及温度设置。此外，插件还包含技能中心和学习模块，不仅限于对话，更是一个综合性的 AI 工作空间，支持通过热键快速弹出助手，保持对话上下文的持久性。

使用前需注意，该插件仅支持桌面端，且需要本地安装 Hermes Agent CLI 并配置好路径。它依赖于本地 `hermes` 二进制文件通过标准输入输出通信，因此不适合希望完全云端运行或无需本地环境配置的用户。此外，插件会调用本地终端执行特定命令，如模型设置或内存审查，若你对本地进程执行有严格限制，需谨慎评估。插件未由 Obsidian 官方人工审核，请自行评估安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


