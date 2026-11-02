---
uid: 1793625605536000
title: "Obsidian 插件：Agent Brain"
tags: ["自动化与AI", "图表与可视化", "第三方工具集成", "obsidian插件"]
description: "Watch your AI coding agent work as live activity on a real MRI brain: sessions, subagents, every tool call and its result. Works with Claude Code for now. Local only; uses no tokens. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agent Brain

> [!Note] 插件名片
> - 插件名称：Agent Brain
> - 插件作者：clouvra
> - 插件说明：Watch your AI coding agent work as live activity on a real MRI brain: sessions, subagents, every tool call and its result. Works with Claude Code for now. Local only; uses no tokens. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '图表与可视化', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mucahitkumlay/agent-brain)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agent-brain)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mucahitkumlay/agent-brain/master/README.md)



## 概述

Agent Brain 将 AI 编码代理的工作过程可视化为真实 MRI 大脑上的实时活动，核心功能是监控 Claude Code 的会话、子代理及每一次工具调用。它通过本地钩子捕获数据，将读取、编辑、命令执行等操作映射到大脑特定区域，让你直观看到代理正在做什么、思考什么以及结果如何。整个过程完全在本地运行，不消耗任何模型 Token，也不向外部发送数据。

典型场景包括监控长时任务与排查异常。例如，当代理运行耗时较长的命令时，你可以看到对应脑区持续活跃；若代理陷入死循环或执行了危险命令，顶部的状态栏会立即提示你需要介入。你还可以按空格键冻结时间，点击任意信号查看具体的参数、输出及操作树，快速定位问题根源。

相比同类插件，其特色在于内置了四个实时“观察者”：Guard 拦截破坏性命令，Shield 识别外部内容注入，Reality 纠正代理的错误认知，Stuck 检测卡死状态。此外，它还能将你的笔记库映射为大脑神经元，展示代理使用文件间的关联，并提供基于本地数据的效率改进建议，帮助优化与代理的协作方式。

使用前需注意，该插件目前仅支持 Claude Code，且仅限桌面端使用。首次启动需下载约 3MB 的大脑解剖数据。它不适合需要监控其他 AI 代理（如 Cursor 或 Copilot）的用户，也不适合希望代理能自动阻断危险操作的需求，因为观察者仅负责提示，不会主动停止代理执行。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


