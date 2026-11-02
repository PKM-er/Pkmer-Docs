---
uid: 1793625605605000
title: "Obsidian 插件：AI Box"
tags: ["自动化与AI", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Create a local knowledge base and connect DeepSeek Harness, Claude Code, and Codex through global instructions. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Box

> [!Note] 插件名片
> - 插件名称：AI Box
> - 插件作者：beauty
> - 插件说明：Create a local knowledge base and connect DeepSeek Harness, Claude Code, and Codex through global instructions. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/baeauty/obsidian-ai-box)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-box)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/baeauty/obsidian-ai-box/master/README.md)



## 概述

AI Box 旨在解决本地笔记与 AI 编码助手之间的知识断层问题。它通过在 Obsidian 中初始化包含原始数据、维基和规则的结构化知识库，并自动将当前库路径写入 DeepSeek Harness、Claude Code 或 Codex 的全局指令文件。这一机制让 AI 助手能直接读取本地笔记，无需配置复杂的 MCP 服务或申请额外的模型 API Key，实现了本地知识向 AI 工作流的无缝注入。

典型场景包括利用 AI 辅助整理杂乱的项目文档，或让编码助手在编写代码时参考你存储在 Obsidian 中的技术笔记。例如，当你使用 Claude Code 处理一个独立项目时，它可以通过全局指令找到你本地知识库中的架构设计文档，从而生成更符合你个人习惯的代码。另一场景是跨项目复用，即使你在不同的文件夹工作，AI 也能通过全局入口访问你统一管理的知识体系，保持上下文的一致性。

相比其他需要复杂网络配置或第三方服务的插件，AI Box 的核心特色在于极致的本地化与隐私保护。它不发起任何网络请求，不收集遥测数据，也不依赖云端同步。插件仅修改 Agent 的全局规则文件中的特定标记段，并自动备份原文件，确保操作可逆。此外，它支持多 Agent 环境下的路径识别，能处理环境变量差异，且明确区分了“配置完成”与“模型行为验收”，避免用户误以为安装即代表 AI 已具备智能检索能力。

使用前需注意，该插件仅支持桌面端，且卸载插件不会自动移除已写入的全局指令，需手动执行“解除当前库”操作。它不适合需要移动端同步、实时聊天侧栏或自动定时整理笔记的用户。此外，插件不授予跨目录的文件系统权限，若 Agent 因沙箱限制无法读取文件，需按各工具官方机制单独授权。对于依赖云端协作或希望 AI 自动后台运行维护任务的用户，此插件可能无法满足需求，因为它仅生成指令，不启动任何后台进程。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


