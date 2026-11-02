---
uid: 1793625605533000
title: "Obsidian 插件：Agenda Panel"
tags: ["日历与时间", "任务管理", "界面优化", "obsidian插件"]
description: "Show dated tasks and events from a plain Markdown file as a four-week calendar and agenda list in the right sidebar. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Agenda Panel

> [!Note] 插件名片
> - 插件名称：Agenda Panel
> - 插件作者：emirhanoguz0
> - 插件说明：Show dated tasks and events from a plain Markdown file as a four-week calendar and agenda list in the right sidebar. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '任务管理', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/emirhanoguz0/obsidian-agenda-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?agenda-panel)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/emirhanoguz0/obsidian-agenda-plugin/master/README.md)



## 概述

Agenda Panel 将分散在笔记中的日期任务与事件，集中展示在右侧边栏的专用面板中。它通过读取一个指定的纯 Markdown 文件，在顶部呈现包含过去一周、本周及未来两周的四周日历视图，并在下方以“今日”、“本周”、“即将”和“过去”分组列出具体事项。每个条目旁会显示剩余天数，点击即可直接跳转至关联的笔记，帮助你在不离开当前工作区的情况下快速掌握时间线。

典型场景包括管理个人待办与项目截止日期。例如，你可以将“提交报告”标记为 deadline 类型并链接到项目笔记，当临近日期时，日历上的彩色圆点和列表中的剩余天数提醒会直观地提示你注意。另一个场景是规划家庭活动，将“生日聚会”设为 event 类型，通过自定义颜色区分于工作任务，让日程安排一目了然。

该插件的核心特色在于“单一数据源”与“只读安全”。它不扫描库中其他笔记，仅依赖一个文件，且绝不修改该文件内容，确保数据纯净。相比其他需要复杂配置或依赖网络服务的插件，它完全离线运行，无遥测数据，隐私性极高。此外，条目类型（如 task、event）支持自定义名称和颜色，你可以将其重命名为中文，以适应本地化使用习惯。

使用前需注意，日期格式必须与插件设置严格一致，若更改设置中的日期格式，旧格式的行将不再显示，需手动重写。该插件适合喜欢手动维护清单或配合 AI 助手生成条目的用户。如果你希望插件自动从所有笔记中提取日期，或需要复杂的任务依赖关系管理，此插件并不适合，因为它仅解析符合特定格式的单行文本，且不支持跨笔记扫描。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


