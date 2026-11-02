---
uid: 1793625622026000
title: "Obsidian 插件：Tabletop Clocks"
tags: ["图表与可视化", "效率工具", "界面优化", "obsidian插件"]
description: "Segmented progress clocks for tabletop games, drawn from plain text in a note. Click a segment to tick it, race two clocks, and the note keeps the count. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tabletop Clocks

> [!Note] 插件名片
> - 插件名称：Tabletop Clocks
> - 插件作者：Walker Brown
> - 插件说明：Segmented progress clocks for tabletop games, drawn from plain text in a note. Click a segment to tick it, race two clocks, and the note keeps the count. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/walkertbrown/tabletop-clocks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tabletop-clocks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/walkertbrown/tabletop-clocks/master/README.md)



## 概述

Tabletop Clocks 将笔记中的纯文本转化为可视化的分段进度时钟，专为桌面角色扮演游戏设计。它允许你在笔记中直接定义时钟、计数器和计时器，无需复杂的图形界面。核心功能包括点击分段以推进进度、支持两个时钟进行竞速对比，以及实时记录资源消耗和时间流逝。所有操作均基于文本行，确保数据以纯文本形式保存在笔记中，即使卸载插件，数据依然完整可读。

在典型的跑团场景中，你可以用它追踪剧情关键节点，例如“警报 1/4”或“逃离 0/4 vs 追捕 1/6”，直观展示双方进度。同时，它也能管理游戏资源，如“箭矢：18/20”或“火把：3”，通过加减操作快速更新库存。对于限时任务，如“仪式：4:12/10:00”，插件提供带进度条的计时器，并在时间耗尽时发出提示，帮助主持人掌控节奏。

相比其他插件，Tabletop Clocks 的最大特色是“文本即状态”。每次点击或修改都会直接写回笔记文本，这意味着数据天然支持同步、备份，且不会因插件故障而丢失。此外，它支持在时钟名称中嵌入笔记链接，点击即可跳转相关文档。插件还开放了工作区事件接口，可与 Session Log 等插件联动，自动将每次进度变化记录到会话日志中，实现自动化复盘。

使用前需注意，该插件仅编辑特定的 `clocks` 代码块，不会干扰笔记其他内容。它完全离线运行，不收集任何用户数据，隐私安全。然而，它不适合需要复杂图形交互或多人实时协作的场景，因为它是单人本地工具。若你需要在玩家手机上同步显示时钟，需额外安装付费的 DM Screen 插件。对于纯文字记录或不需要可视化进度的用户，此插件可能显得多余。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


