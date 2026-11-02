---
uid: 1793625623618000
title: "Obsidian 插件：Todo Panel"
tags: ["任务管理", "效率工具", "界面优化", "obsidian插件"]
description: "A side panel with a simple todo list, stored as checkbox lines in markdown files in your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Todo Panel

> [!Note] 插件名片
> - 插件名称：Todo Panel
> - 插件作者：Yannick Vergeylen
> - 插件说明：A side panel with a simple todo list, stored as checkbox lines in markdown files in your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yannickvergeylen/obsidian-todo-panel)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?todo-panel)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yannickvergeylen/obsidian-todo-panel/master/README.md)



## 概述

Todo Panel 将你的待办事项集中展示在 Obsidian 的侧边栏中，核心功能是在不离开当前笔记的情况下，快速勾选、编辑、删除或重新排序任务。它直接读取库中指定的 Markdown 文件，将普通的复选框行转化为可视化的任务列表，让你能像操作原生笔记一样管理待办，同时保持数据的纯文本属性，方便随时搜索、链接或手动修改。

想象一下，当你正在撰写项目文档时，突然想起需要补充某个细节，无需切换窗口去查找任务清单，只需在侧边栏直接勾选完成项，或拖拽调整优先级。另一个场景是跨项目协作，你可以将不同项目的任务文件设为不同分组，在面板中通过拖拽手柄将任务从一个分组移动到另一个，实现任务的灵活流转，所有操作实时同步回源文件。

与许多扫描整个库以查找待办项的插件不同，Todo Panel 强调“控制与简洁”，仅处理你明确指定的文件，避免无关干扰。它支持类似 todo.txt 的 `@tag` 标签系统，这些标签以彩色标签显示，但刻意不与 Obsidian 原生的 `#tags` 混淆，从而保持笔记标签系统的纯净。此外，面板支持多分组管理，每个分组对应一个 Markdown 文件，你可以为文件设置别名，并在设置中调整分组顺序，面板会记住你的折叠状态，提升多任务管理的效率。

需要注意的是，该插件目前未发布在官方社区插件列表中，需手动安装，且仅支持 Obsidian 1.7.2 及以上版本。它不适合那些希望插件自动扫描全库所有待办项，或依赖 Obsidian 原生标签系统进行复杂关联的用户。如果你更倾向于使用外部专业任务管理软件，或者对插件的自动化同步能力有极高要求，这款侧重手动控制和本地文件管理的插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


