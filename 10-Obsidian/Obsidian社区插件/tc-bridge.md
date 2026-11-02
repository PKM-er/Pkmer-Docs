---
uid: 1793625622536000
title: "Obsidian 插件：TC Bridge"
tags: ["第三方工具集成", "自动化与AI", "自定义命令", "obsidian插件"]
description: "Companion bridge plugin for The 40 Thieves' vault-access MCP server. Extends Local REST API with command dispatch and plugin firepower bridges. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TC Bridge

> [!Note] 插件名片
> - 插件名称：TC Bridge
> - 插件作者：suavecito
> - 插件说明：Companion bridge plugin for The 40 Thieves' vault-access MCP server. Extends Local REST API with command dispatch and plugin firepower bridges. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '自定义命令', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/the-40-thieves/obsidian-tc)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tc-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/the-40-thieves/obsidian-tc/master/README.md)



## 概述

TC Bridge 是 The 40 Thieves 生态中的配套插件，旨在解决 Obsidian 本地 REST API 无法直接调用核心插件功能的问题。它通过扩展 Local REST API，为外部 AI 代理或自动化脚本提供“命令分发”和“插件能力桥接”。这意味着，原本只能在 Obsidian 界面内手动操作的功能，现在可以通过 API 指令直接触发，让外部智能体能够更深度地操控你的笔记库，而不仅仅是进行简单的文件读写。

典型场景包括自动化工作流与智能体协作。例如，你可以配置 AI 助手在整理笔记时，直接调用 Templater 模板生成新笔记，或通过 Dataview 查询特定标签下的内容并自动更新。另一个例子是结合 Tasks 插件，让外部脚本批量标记任务完成状态，或调用 Excalidraw 接口处理白板数据。这些操作无需人工介入，实现了从“读取笔记”到“执行插件逻辑”的跨越。

相比仅支持基础文件操作的同类工具，TC Bridge 的特色在于其“插件火力”的整合能力。它支持 Templater、Dataview、Tasks、Excalidraw、Git 及 Remotely Save 等主流插件的指令调用，填补了标准 REST API 的功能空白。这种设计使得外部代理不仅能“看”到笔记，还能像人类用户一样“使用”Obsidian 的丰富插件生态，实现了更高级别的自动化治理。

使用前需注意，TC Bridge 仅支持桌面端，且必须预先安装并配置好 Local REST API 插件，复用其 Bearer Token 认证。该 Token 拥有极高的权限，相当于库的根密码，需严格保管。此外，它不适合仅需简单文件读写或纯只读访问的用户，若你不需要调用特定插件功能，直接使用基础 REST API 即可，无需安装此桥接插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


