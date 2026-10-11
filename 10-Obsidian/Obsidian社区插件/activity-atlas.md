---
uid: 1791709365176000
title: 'Obsidian 插件：Activity Atlas'
tags: ['图表与可视化', '日历与时间', '导航与状态栏', 'obsidian插件']
description: '以基于突发事件的可视化时间轴展示仓库的实时活动，并可选显示只读的 Git 状态。- 该插件尚未经过 Obsidian 官方团队的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Activity Atlas

> [!Note] 插件名片
> - 插件名称：Activity Atlas
> - 插件作者：Alek
> - 插件说明：以基于突发事件的可视化时间轴展示仓库的实时活动，并可选显示只读的 Git 状态。- 该插件尚未经过 Obsidian 官方团队的人工审核。
> - 插件分类：['图表与可视化', '日历与时间', '导航与状态栏', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alekzen/activity-atlas)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?activity-atlas)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alekzen/activity-atlas/master/README.md)



## 概述

**Activity Atlas** 是一款专为大型 Obsidian 仓库设计的本地实时活动可视化插件。

**主要功能**：它将文件创建、修改、重命名和删除等实时事件转化为紧凑的“活动爆发”时间线，并支持可选的 Git 状态显示。插件能追踪所有文件类型的活动，对特定文本格式还可统计行级变更。

**适用场景**：特别适用于文件数量庞大、传统“最近编辑”列表无法清晰展示整体动态的笔记库。它帮助用户快速回顾近期工作轨迹，而非扫描历史数据。

**核心特色**：
1. **纯本地实时**：仅记录 Obsidian 打开期间的变更，不扫描启动时状态，无网络请求、遥测或外部命令执行，隐私安全。
2. **智能分组与过滤**：将邻近事件折叠为可展开的爆发组，支持按路径、日期、操作类型及扩展名过滤。
3. **多实例协调**：通过写锁机制确保多个 Obsidian 实例同时运行时仅有一个记录数据，避免冲突。
4. **可视化日历**：内置六周活动日历，支持键盘导航。

**使用建议**：建议在大型仓库中启用该插件以替代扁平列表查看动态。若需行级统计，请配置支持的文本扩展名。注意其“仅实时”特性，关闭 Obsidian 期间的变更不会被记录。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


