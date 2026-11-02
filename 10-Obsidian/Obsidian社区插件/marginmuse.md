---
uid: 1793625615742000
title: "Obsidian 插件：MarginMuse"
tags: ["自动化与AI", "文字处理", "学术与科研", "第三方工具集成", "效率工具", "obsidian插件"]
description: "An AI writing, research, and vault assistant with chat, tools, Canvas, web search, and MCP support. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MarginMuse

> [!Note] 插件名片
> - 插件名称：MarginMuse
> - 插件作者：熊喵呜哇
> - 插件说明：An AI writing, research, and vault assistant with chat, tools, Canvas, web search, and MCP support. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '学术与科研', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/vic-athens/MarginMuse)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?marginmuse)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/vic-athens/MarginMuse/master/README.md)



## 概述

MarginMuse 是一款集 AI 写作、研究与库管理于一体的双语助手，旨在将模型对话、笔记上下文、文件工具、Canvas 编辑及网络搜索整合至单一桌面面板。它支持 OpenAI 兼容的云端或本地模型，允许用户通过聊天界面直接调用 AI 能力，同时提供对笔记库的深度操作权限，如读取、创建、编辑及删除笔记，并支持 Canvas 的创建与编辑，实现从内容生成到库结构维护的一站式处理。

典型场景包括利用 AI 辅助整理杂乱笔记或进行深度研究。例如，你可以选中多篇相关笔记作为上下文，让 AI 总结核心观点并生成新的综述笔记；或者在写作时，通过内置工具让 AI 自动检索库内资料并补充引用，甚至直接修改 Canvas 中的流程图结构，无需在多个应用间切换。

相比同类插件，MarginMuse 的特色在于其强大的 MCP（模型上下文协议）支持与自定义 Skills 机制。它允许用户通过标准 `SKILL.md` 格式定义专属技能，实现自动任务匹配或显式调用，且默认不捆绑任何预设技能，保持灵活性。此外，它提供了独立的 Web 搜索与 MCP 工具开关，以及针对 Agent 模式的长任务超时与确认机制，适合需要复杂工作流自动化的用户。

使用前需注意，该插件仅限桌面端使用，且需自行配置 OpenAI 兼容的提供商与 API 密钥，新安装时 MCP 与 Web 访问默认关闭。它不适合希望开箱即用、无需配置本地环境或仅进行简单文本润色的用户。由于 AI 可能产生错误，建议在使用具备工具调用能力的模型时，仔细审查生成的文件编辑与 Canvas 变更，并留意隐私设置，确保敏感数据不被意外发送至外部服务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


