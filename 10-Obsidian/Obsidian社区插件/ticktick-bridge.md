---
uid: 1793625623105000
title: "Obsidian 插件：TickTick Bridge"
tags: ["第三方工具集成", "任务管理", "效率工具", "obsidian插件"]
description: "A standalone TickTick task bridge for Obsidian. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TickTick Bridge

> [!Note] 插件名片
> - 插件名称：TickTick Bridge
> - 插件作者：puria
> - 插件说明：A standalone TickTick task bridge for Obsidian. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '任务管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/puriakazemieh/ticktick-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ticktick-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/puriakazemieh/ticktick-bridge/master/README.md)



## 概述

TickTick Bridge 是一款专为 Obsidian 设计的独立任务桥接插件，旨在安全同步 TickTick 的项目、任务及习惯数据。它不捆绑任何账户令牌或个人数据，通过用户自行配置的 API Token 实现连接。核心功能包括在笔记中嵌入“今日任务”和“习惯”仪表盘，支持对任务进行增删改查，并能正确处理重复任务的完成逻辑，确保下次执行日期由 TickTick 官方接口准确计算，而非本地猜测。

典型使用场景包括将 TickTick 任务直接嵌入每日笔记。例如，你可以在日常模板中添加 `ticktick-today` 代码块，直接在 Obsidian 中查看并勾选当天的待办事项，包括那些已逾期的任务。此外，通过 `ticktick-habits` 块，你可以将习惯打卡面板集成到日记中，点击即可在 TickTick 中记录当天的习惯完成状态，无需切换应用。

相比其他同类插件，TickTick Bridge 强调“安全同步”与“数据隔离”。它采用预览与确认机制，仅在 TickTick 返回唯一标识后才绑定任务，避免重复创建或冲突。插件在本地 `.ticktick` 目录下生成可恢复的快照和报告，且严格确保这些文件中不包含任何敏感令牌或密码。此外，它提供独立的周计划器和项目看板视图，支持拖拽操作，但仅限于已验证绑定的任务，且对重复任务系列采取保守策略，防止误操作。

使用前需注意，该插件目前不支持自动迁移本地习惯文件至 TickTick，相关导入功能处于禁用状态，直到官方提供验证过的接口。任务清单的编辑功能也暂时只读，需等待官方 API 行为明确。因此，如果你依赖复杂的本地习惯历史数据自动同步，或需要频繁编辑子任务结构，此插件可能暂时无法满足需求。它更适合希望将 TickTick 作为单一事实来源，并在 Obsidian 中安全、轻量地查看和管理任务的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


