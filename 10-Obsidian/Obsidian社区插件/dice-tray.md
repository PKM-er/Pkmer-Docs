---
uid: 1793625612107000
title: "Obsidian 插件：Dice Tray"
tags: ["效率工具", "数据处理", "编辑工具", "obsidian插件"]
description: "Roll dice, random tables, lists and note sections inline, reading the same dice: syntax as Dice Roller so existing notes keep working. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dice Tray

> [!Note] 插件名片
> - 插件名称：Dice Tray
> - 插件作者：Walker Brown
> - 插件说明：Roll dice, random tables, lists and note sections inline, reading the same dice: syntax as Dice Roller so existing notes keep working. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '数据处理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/walkertbrown/dice-tray)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dice-tray)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/walkertbrown/dice-tray/master/README.md)



## 概述

Dice Tray 允许你在笔记中直接编写骰子公式，如 `dice: 2d20kh1 + 5`，系统会将其渲染为可交互的小芯片。点击即可重新投掷，悬停或轻触可查看每颗骰子的具体数值。它完全兼容 Dice Roller 插件的语法，确保你现有的笔记无需修改即可继续工作，同时支持行内显示和代码块批量投掷，让随机性融入日常记录。

想象你在进行角色扮演游戏时，需要快速判定遭遇或生成随机事件。你可以直接在战斗日志中写下 `dice: [[Encounters]]`，插件会从指定的笔记中随机选取一段内容作为遭遇描述。或者在整理战利品时，使用 `dice: [[Loot^gems]]` 从表格中随机抽取一行，甚至可以通过 `dice: #npc` 从所有标记为 NPC 的笔记中随机挑选一个角色片段，无需手动翻阅。

相比其他插件，Dice Tray 提供了更丰富的视觉反馈和叙事骰支持。它不仅支持标准的 D&D 骰子，还内置了 Genesys 和 Star Wars 叙事骰的专用语法，能直接显示成功、威胁等结果。此外，它具备“持久化投掷”功能，使用 `dice+` 或 `dice-mod` 可以将结果永久写入笔记，适合生成固定的属性值或 loot，避免每次打开笔记时结果变化。

需要注意的是，该插件主要服务于桌面端和移动端阅读体验，虽然支持动画，但在系统开启“减少动态效果”时会自动关闭。它不适合需要复杂自动化脚本或大量数据处理的场景，其 API 仅用于简单的骰子投掷和显示。如果你依赖网络同步骰子结果或需要多用户实时协作投掷，此插件可能无法满足需求，因为它完全离线运行，不收集任何数据，也不依赖服务器。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


