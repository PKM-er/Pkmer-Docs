---
uid: 1793625607994001
title: "Obsidian 插件：BoardMD"
tags: ["任务管理", "效率工具", "图表与可视化", "obsidian插件"]
description: "Plan work with a Jira-style backlog, sprints and boards. Issues and sprints are plain notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：BoardMD

> [!Note] 插件名片
> - 插件名称：BoardMD
> - 插件作者：Eric Fisher
> - 插件说明：Plan work with a Jira-style backlog, sprints and boards. Issues and sprints are plain notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '效率工具', '图表与可视化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ericfisherdev/boardmd)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?boardmd)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ericfisherdev/boardmd/master/README.md)



## 概述

BoardMD 将 Jira 风格的项目管理引入 Obsidian，提供待办事项列表、冲刺规划和看板视图。其核心优势在于所有 Issue 和 Sprint 均为纯 Markdown 笔记，数据完全由用户掌控，既便于搜索和链接，也方便人工或 AI 直接读取与编辑，避免了数据被锁定在专有格式中。

典型场景包括团队迭代规划与个人任务追踪。例如，你可以将 GitHub 仓库的 Issue 拉取到项目中，通过拖拽卡片在“待办”、“进行中”和“已完成”列之间移动来更新状态；或者在冲刺结束时，系统会自动记录完成的工作并将未完成任务顺延至下一冲刺，同时保留完整的进度历史。

相比其他插件，BoardMD 支持自定义工作流状态，允许定义如“受阻”、“审查中”等特定阶段，并自动在卡片上标记被阻塞的任务。此外，它原生支持多项目管理，每个项目拥有独立的文件夹、Key 前缀和工作流配置。特别值得一提的是，插件会在项目文件夹生成 `index.json` 和 `AGENTS.md`，使 AI 助手能高效查询冲刺进度或任务依赖关系，无需解析所有笔记。

使用前需注意，该插件目前仅在桌面端经过测试，且要求 Obsidian 版本不低于 1.13.0。它不适合需要复杂权限管理、实时多人协作或移动端同步的场景。如果你只需要简单的待办清单，或者希望数据存储在云端数据库而非本地 Markdown 文件中，BoardMD 可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


