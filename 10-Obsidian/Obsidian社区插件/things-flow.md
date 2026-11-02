---
uid: 1793625623027000
title: "Obsidian 插件：Things Flow"
tags: ["任务管理", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Multi-platform two-way task sync with Things3. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Things Flow

> [!Note] 插件名片
> - 插件名称：Things Flow
> - 插件作者：eldani
> - 插件说明：Multi-platform two-way task sync with Things3. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/eldani37/obsidian-things-flow)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?things-flow)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/eldani37/obsidian-things-flow/master/README.md)



## 概述

Things Flow 实现了 Obsidian 与 Things 3 之间的双向任务同步，支持 iOS 和 macOS 平台。它能够将 Obsidian 笔记中的待办事项和标题结构转换为 Things 项目，并将任务状态（如完成、取消）同步回 Obsidian。这种机制让你可以在熟悉的笔记软件中规划任务，同时在 Things 3 中执行和管理，无需手动复制粘贴，保持了工作流的连贯性。

典型场景包括将项目计划笔记同步到 Things 以便在手机上快速勾选完成项，或者在 Things 中处理完任务后，自动更新 Obsidian 笔记中的状态。例如，你可以将一份包含多个子任务的会议记录笔记转换为 Things 项目，在通勤路上通过 Things 标记已完成事项，回到电脑前打开 Obsidian 时，这些状态已自动更新，无需重复操作。

相比其他同步工具，Things Flow 的特色在于其基于文本匹配的灵活性和对自定义任务状态的支持。它允许用户配置忽略特定状态的任务，并支持通过标签、文件路径或反向链接来识别 Things 区域。此外，它提供了详细的映射规则，如将嵌套子任务扁平化为清单项，以及处理不同任务状态（如 `x` 为完成，`-` 为取消）的逻辑，使得同步过程更加可控。

使用前需注意，该插件目前每次转换都会创建新的 Things 项目，而非更新现有项目，因此需手动删除旧项目以避免重复。同时，同步依赖有效的 Obsidian URL，若重命名或移动笔记可能导致链接失效。此外，它仅同步任务状态，不处理标签或日期等元数据，且基于文本匹配可能在任务重名时出现状态更新错误。不适合需要频繁更新同一项目或依赖复杂元数据同步的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


