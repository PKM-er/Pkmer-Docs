---
uid: 1786577077780001
title: 'Obsidian 插件：FlowTick'
tags: ['任务管理', '图表与可视化', '自动化与AI', '效率工具', 'obsidian插件']
description: '用flowtick代码块根据复选框比例自动更新进度条。——Obsidian官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：FlowTick

> [!Note] 插件名片
> - 插件名称：FlowTick
> - 插件作者：dbachelor110
> - 插件说明：用flowtick代码块根据复选框比例自动更新进度条。——Obsidian官方人员尚未对该插件进行人工审核。
> - 插件分类：['任务管理', '图表与可视化', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dbachelor110/flow-tick)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?flow-tick)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dbachelor110/flow-tick/master/README.md)



## 概述

### FlowTick插件总结
1. **主要功能**：自动生成并更新进度条，依据笔记中清单项目的完成情况计算进度。
2. **适用场景**：适用于跟踪长任务列表、项目里程碑或任何包含清单的文档进度。
3. **核心特色**：
    - 自动更新：可按配置间隔自动刷新进度条。
    - 支持嵌套清单：能正确计算嵌套清单的进度，父任务进度取子任务平均。
    - 多进度条：单笔记中可存在多个 `flowtick` 块，各自跟踪后续清单进度。
    - 动态变色：根据完成状态，进度条颜色不同（<21%为红色，21% - 99%为绿色，100%为蓝色）。
    - 轻量简单：添加代码块即可使用，无需复杂设置。
4. **使用建议**：在笔记中输入 ` ```flowtick ``` ` 创建代码块，在其下方添加清单项目（`- [ ]` 或 `- [x]`），进度条会自动跟踪该 `flowtick` 块到下一个 `flowtick` 块（或文件末尾）间清单项目的完成情况。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


