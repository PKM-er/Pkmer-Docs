---
uid: 1793625614489001
title: "Obsidian 插件：KDM Planner"
tags: ["任务管理", "日历与时间", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Plan your week in notes and enter tasks, leave days and completions into the KDM work tracker, with a weekly calendar that mirrors KDM. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：KDM Planner

> [!Note] 插件名片
> - 插件名称：KDM Planner
> - 插件作者：Tunahan ALTINTOP
> - 插件说明：Plan your week in notes and enter tasks, leave days and completions into the KDM work tracker, with a weekly calendar that mirrors KDM. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '日历与时间', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tunahanaltintop/kdm-planner)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kdm-planner)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tunahanaltintop/kdm-planner/master/README.md)



## 概述

KDM Planner 旨在解决 Obsidian 笔记与 KDM 工作追踪器之间的数据同步难题。它允许你在笔记中直接规划每周工作，通过“发送到 KDM”功能将任务、请假或完成状态实时同步至 KDM 系统。核心功能包括在普通笔记中嵌入周计划块，以及提供一个镜像 KDM 规划页面的周日历视图，让你无需切换浏览器即可在 Obsidian 内完成所有排程操作。

典型使用场景包括：在撰写项目笔记时，直接点击“发送到 KDM”按钮，插件会自动匹配任务列表并填入空闲时间段，快速将笔记内容转化为 KDM 中的正式工作条目；或者在周初打开周计划块，利用上午/下午分区安排每日任务，并通过拖拽日历视图调整时间，所有修改都会即时反映在 KDM 中，保持两边数据一致。

相比同类插件，KDM Planner 的最大特色是深度还原了 KDM 网页端的交互逻辑与规则。它内置了 KDM 的业务限制，如拒绝超过 4 小时的长任务、强制任务间休息以及避开午休时间，确保同步的数据符合 KDM 规范。此外，它具备智能同步机制，刷新时仅更新已发送的笔记，未发送内容不受影响，且通过 HTTPS 和 Obsidian 秘密存储保护令牌安全，无遥测数据。

使用前需注意，该插件界面为土耳其语，且必须拥有 KDM 账号及网络访问权限。它不适合没有 KDM 账号的用户，也不适合需要多语言界面或希望完全离线管理任务而不依赖外部服务同步的场景。由于 KDM 无公开 API，插件依赖非官方接口，若 KDM 网站结构变更可能导致功能失效。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


