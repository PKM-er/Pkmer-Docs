---
uid: 1793625621901001
title: "Obsidian 插件：Super Useful Claudian"
tags: ["自动化与AI", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Run Oh My Pi, DeepSeek Harness, Claude Code, Codex, Grok, OpenCode and Pi inside your vault as chat collaborators. A fork of Claudian with provider readiness checks, a capability matrix and a token usage meter. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Super Useful Claudian

> [!Note] 插件名片
> - 插件名称：Super Useful Claudian
> - 插件作者：chengmiaofan
> - 插件说明：Run Oh My Pi, DeepSeek Harness, Claude Code, Codex, Grok, OpenCode and Pi inside your vault as chat collaborators. A fork of Claudian with provider readiness checks, a capability matrix and a token usage meter. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/serena-sheng/super-useful-claudian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?super-useful-claudian)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/serena-sheng/super-useful-claudian/master/README.md)



## 概述

Super Useful Claudian 将 Claude Code、Codex、Grok 等主流 AI 编程代理直接嵌入 Obsidian 库中，作为你的聊天协作伙伴。它不仅仅是一个简单的聊天窗口，更是一个强大的本地化代理管理中枢，支持在笔记环境中直接驱动这些 CLI 工具进行代码生成、文件编辑和逻辑推理。通过整合多种提供商，它让你无需切换终端，即可在熟悉的笔记界面中完成从构思到实现的完整工作流，极大提升了知识管理与代码开发的协同效率。

想象一下，当你正在撰写技术文档时，可以直接在侧边栏调用 Claude Code 解释一段复杂代码，或者让 Codex 根据笔记中的需求描述生成函数原型。另一个场景是，当你需要调试一个脚本时，可以使用内置的 Bash 模式直接执行命令并查看输出，同时利用“转向”功能实时调整 AI 的执行路径。这种无缝集成使得 AI 不再是孤立的工具，而是深度融入你日常笔记工作流的智能助手，让思考与执行在同一空间内流畅发生。

相比原版 Claudian，该插件最大的特色在于其透明的资源监控与强大的会话恢复能力。它提供了详细的 Token 用量仪表盘，让你清晰掌握每日及每次会话的消耗情况，避免意外超额。此外，其“本地会话归档”功能会将对话记录保存为 JSON 文件，即使原始 CLI 的历史记录被清除或迁移，你依然可以完整还原之前的对话上下文。配合提供商就绪检查面板和能力矩阵，它能实时告知你哪些功能可用，哪些配置缺失，消除了配置黑盒带来的不确定性。

需要注意的是，该插件仅支持桌面端（macOS, Linux, Windows），且要求你本地已安装相应的 AI CLI 工具并配置好 API 密钥，插件本身不会自动下载或安装这些依赖。如果你主要使用移动端 Obsidian，或者希望插件能自动处理所有环境配置，那么它可能不适合你。此外，虽然插件默认不发起网络请求，但 AI 代理本身会连接外部服务，请确保你了解并信任所使用的模型提供商。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


