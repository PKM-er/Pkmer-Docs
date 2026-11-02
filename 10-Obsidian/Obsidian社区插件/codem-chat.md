---
uid: 1793625611047000
title: "Obsidian 插件：CodeM Chat"
tags: ["自动化与AI", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Embeds CodeM (Feishu AI coding agent) as a sidebar chat in your vault. Your vault becomes its working directory. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CodeM Chat

> [!Note] 插件名片
> - 插件名称：CodeM Chat
> - 插件作者：孙鹏飞
> - 插件说明：Embeds CodeM (Feishu AI coding agent) as a sidebar chat in your vault. Your vault becomes its working directory. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/spenf710/codem-obsidian-chat)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?codem-chat)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/spenf710/codem-obsidian-chat/master/README.md)



## 概述

CodeM Chat 将飞书 AI 研发智能体 CodeM 嵌入 Obsidian 侧边栏，让你的笔记库直接成为 AI 的工作目录。它通过 ACP 协议实现流式响应，支持实时思考过程展示和工具调用卡片渲染。核心功能包括多会话并行管理、历史会话回放、智能标题生成，以及通过 `/` 命令调用技能、`@` 引用笔记内容，让 AI 能直接读取你的知识库上下文进行协作。

典型场景如：在撰写技术文档时，直接 `@` 引用相关代码笔记，让 AI 基于上下文生成解释或优化建议；或者在调试问题时，粘贴报错截图并描述现象，AI 结合本地笔记中的架构说明给出修复方案。另一个例子是并行处理多个任务，比如在一个标签页让 AI 重构代码，同时在另一个标签页让它总结会议记录，互不干扰。

相比通用 AI 插件，CodeM Chat 深度整合了 CodeM 的权限体系，提供“请求批准”、“自动批准只读”和“完全访问”三档权限，确保文件操作安全。它支持检查点回滚，可撤销 AI 对文件的修改，并具备提示词队列功能，允许在 AI 忙碌时排队、重排或编辑后续指令。此外，它原生支持从飞书或终端恢复历史会话，且所有数据本地处理，无遥测上报。

使用前需确保在 Windows 10/11 系统上已安装并登录 CodeM CLI，且 Obsidian 版本不低于 1.7.2。该插件不适合需要跨平台（如 macOS/Linux）使用的用户，也不适合希望完全离线运行、不依赖 CodeM 后端服务的场景。若你主要使用其他 AI 编码助手或仅需简单问答，此插件可能过于复杂。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


