---
uid: 1793625615736000
title: "Obsidian 插件：Margin AI Proofreader"
tags: ["自动化与AI", "文字处理", "编辑工具", "obsidian插件"]
description: "An AI second pass after Harper: catches what grammar rules can't and rewrites on request. Local model or Gemini. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Margin AI Proofreader

> [!Note] 插件名片
> - 插件名称：Margin AI Proofreader
> - 插件作者：Ahmed Khaled
> - 插件说明：An AI second pass after Harper: catches what grammar rules can't and rewrites on request. Local model or Gemini. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/phoenixak/margin-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?margin-ai-proofreader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/phoenixak/margin-obsidian/master/README.md)



## 概述

Margin AI Proofreader 旨在弥补传统语法检查工具的盲区，作为 Harper 插件的智能补充层。它利用 AI 模型捕捉规则引擎无法识别的细微错误，如主谓不一致、时态混乱、误用真实存在的单词以及冗长句。插件通过紫色下划线标记这些问题，并提供悬停卡片供用户选择“应用”或“忽略”。此外，它还支持对选中文本进行 AI 重写，操作可通过命令面板或右键菜单触发，确保不会重复标记 Harper 已发现的问题。

典型使用场景包括深度校对技术文档或长篇笔记。例如，当 Harper 仅能指出拼写错误时，Margin 能进一步指出句子结构松散或逻辑连接词使用不当的问题。另一个例子是当你需要润色一段生硬的翻译文本时，可以直接选中该段落使用“重写”功能，让 AI 根据上下文优化表达，而无需手动逐句修改。

相比单纯的语法检查器，该插件的核心特色在于其“去重”机制与隐私灵活性。它主动查询 Harper 插件的状态，跳过已标记区域，避免视觉干扰。在隐私方面，用户可选择本地模型（如 Ollama 或 LM Studio），确保文本完全留在设备本地，无需配置复杂的网络参数；若使用 Gemini API，密钥则安全存储在 Obsidian 的本地秘密存储中，不会同步或明文保存。

使用前需注意，该插件必须与 Harper 插件同时安装并启用，且目前仅支持桌面端 Obsidian。它不适合希望完全离线且无本地大模型运行环境的用户，也不适合对数据隐私有极端要求、无法接受任何云端 API 调用的场景。此外，由于依赖 Harper 的接口，若 Harper 插件未正确加载，Margin 的去重功能可能失效。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


