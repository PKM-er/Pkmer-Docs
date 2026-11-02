---
uid: 1793625620303001
title: "Obsidian 插件：Propex"
tags: ["效率工具", "数据处理", "任务管理", "obsidian插件"]
description: "Track project-specific and general expenses. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Propex

> [!Note] 插件名片
> - 插件名称：Propex
> - 插件作者：emberunderwater
> - 插件说明：Track project-specific and general expenses. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '数据处理', '任务管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/emberunderwater/obsidian-propex)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?propex)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/emberunderwater/obsidian-propex/master/README.md)



## 概述

Propex 是一款专为 Obsidian 设计的本地化财务追踪插件，旨在解决项目支出与收入记录分散、难以关联的问题。它允许你在笔记库内直接记录交易，并将这些财务数据与具体的项目笔记绑定。通过统一的账本界面，你可以管理所有收支明细，同时利用嵌入笔记的实时报告功能，直观地查看特定项目的成本结构、收入情况及整体余额，让财务上下文与项目决策紧密相连。

典型使用场景包括自由职业者管理多个客户项目，或团队追踪共享开销。例如，你可以为每个项目笔记添加 `propex` 代码块，自动生成该项目的支出饼图或收支对比柱状图，无需切换应用即可在笔记中审阅财务状况。此外，对于服务器租金等共享成本，Propex 支持将其标记为“Overhead”，并在报告中按配置规则分摊到各项目，从而清晰呈现每个项目的真实净成本。

相比其他记账插件，Propex 的核心特色在于其“项目感知”能力与本地化存储。它不依赖云端服务，所有数据均保存在本地 `data.json` 中，确保隐私安全。插件支持灵活的项目识别方式（通过 Frontmatter 或文件夹），并允许自定义分类、货币及 CSV 导入导出格式。其报告引擎支持多种图表类型，如甜甜圈图展示分类占比，折线图展示累计净余额，且支持按日、周、月或年进行时间维度筛选，满足多样化的分析需求。

使用前需注意，Propex 不进行货币自动换算，需手动选择基础货币；且数据完全依赖本地备份，建议定期备份 Vault 以防数据丢失。该插件不适合需要复杂会计分录、多币种自动折算或实时银行同步的用户。如果你只需要简单的个人日常记账，而非基于项目维度的成本分析，可能会觉得其功能过于侧重项目管理场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


