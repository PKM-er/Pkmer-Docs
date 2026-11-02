---
uid: 1793625622097000
title: "Obsidian 插件：Task Click Status"
tags: ["任务管理", "效率工具", "界面优化", "obsidian插件"]
description: "Click to complete, double-click to cancel, or right-click for in-progress, deferred, and other task statuses. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Task Click Status

> [!Note] 插件名片
> - 插件名称：Task Click Status
> - 插件作者：Joel Payippara Shibu
> - 插件说明：Click to complete, double-click to cancel, or right-click for in-progress, deferred, and other task statuses. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jpayippa/task-click-status)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?task-click-status)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jpayippa/task-click-status/master/README.md)



## 概述

Task Click Status 旨在解决 Obsidian 默认任务状态过于单一的问题，将原本仅有的“待办”和“完成”两种状态扩展为五种。它通过重新定义鼠标交互逻辑，让用户能够更精细地管理任务生命周期。核心功能包括单击标记完成、双击标记取消，以及通过右键菜单灵活切换“进行中”和“延期”等状态，从而在笔记中构建出更丰富的任务管理视图。

在日常使用中，你可以快速处理待办事项：单击未勾选的任务即可将其标记为完成，此时任务会显示绿色高亮且无删除线；若需标记任务失败或放弃，只需在 450 毫秒内双击复选框，任务便会变为红色叉号并加上删除线。对于复杂项目，你可以右键选择“进行中”或“延期”，分别以黄色时钟图标和蓝色箭头标识，清晰区分任务当前的实际进展，而无需手动修改 Markdown 代码。

相比其他任务插件，该插件的特色在于其轻量级与无依赖设计。它不访问网络，也不依赖外部服务，仅读写当前库内的 Markdown 文件，确保数据隐私与安全。此外，它兼容 Live Preview 和阅读视图，且不会干扰由 Tasks 或 Dataview 等插件生成的查询结果，也不会误改无法识别的自定义状态，保证了与其他插件的共存稳定性。

需要注意的是，该插件会改变默认的单击行为，单击后会有短暂延迟以区分单击与双击，这可能需要用户适应。它仅改变任务状态标记，不会自动移动任务到其他笔记，因此不适合需要自动归档或跨笔记同步任务位置的场景。如果你依赖复杂的自动化工作流或需要任务自动跳转，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


