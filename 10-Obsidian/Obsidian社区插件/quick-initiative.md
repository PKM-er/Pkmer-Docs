---
uid: 1793625620456000
title: "Obsidian 插件：Quick Initiative"
tags: ["效率工具", "数据处理", "文字处理", "obsidian插件"]
description: "A light initiative tracker that keeps the whole fight as plain text in your note. Reads HP, AC and Dex from Fantasy Statblocks creature notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Quick Initiative

> [!Note] 插件名片
> - 插件名称：Quick Initiative
> - 插件作者：Walker Brown
> - 插件说明：A light initiative tracker that keeps the whole fight as plain text in your note. Reads HP, AC and Dex from Fantasy Statblocks creature notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '数据处理', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/walkertbrown/quick-initiative)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quick-initiative)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/walkertbrown/quick-initiative/master/README.md)



## 概述

Quick Initiative 是一款轻量级的战斗先攻追踪工具，旨在解决 Obsidian 中战斗记录易丢失、格式混乱的痛点。它将整个战斗过程以纯文本形式直接保存在笔记中，确保数据同步、重启不丢失，且即使卸载插件，记录依然可读。核心功能包括自动读取生物笔记中的生命值、护甲值和敏捷属性，支持一键掷骰排序先攻，以及通过简单的文本指令管理回合、伤害和治疗。

在典型的桌游跑团场景中，你可以预先在设置中录入玩家队伍信息，战斗时只需在笔记中插入 `party` 指令，即可自动带入所有玩家。对于怪物，直接链接到使用 Fantasy Statblocks 格式的生物笔记，插件会自动填充其属性。例如，面对三只哥布林，只需输入 `3x [[Goblin]]`，插件便会自动编号并读取其数据，无需手动输入每个怪物的具体数值，极大简化了战斗准备过程。

相比其他复杂的战斗插件，Quick Initiative 的最大特色在于其“纯文本”架构和与 Fantasy Statblocks 的深度集成。它不仅支持在战斗中动态添加或移除单位，还能通过工作区事件与其他插件（如 Session Log）联动，自动记录战斗日志。此外，它完全离线运行，无账号、无数据收集，所有操作仅修改当前笔记中的特定代码块，隐私安全性极高，且对笔记其他部分零干扰。

需要注意的是，该插件主要服务于基于 Fantasy Statblocks 格式的生物笔记，若怪物仅存在于插件自带的图鉴而未建立独立笔记，则需手动输入属性。它不适合需要复杂状态效果自动化计算或多人实时同步战斗的场景。此外，虽然它支持在战斗中修改文本，但建议熟悉其特定的文本语法（如 `hp 5/7` 表示当前/最大生命值），以免手动编辑时出错。对于追求极致自动化或需要手机端实时同步战斗画面的用户，可能需要搭配作者的其他付费或免费插件使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


