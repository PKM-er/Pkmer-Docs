---
uid: 1793625612105000
title: "Obsidian 插件：Dice Rolls"
tags: ["效率工具", "编辑工具", "界面优化", "obsidian插件"]
description: "Inline dice rolls you click to reroll, in Live Preview and Reading view, with full dice notation, a roll dialog and a roll history. Reads Dice Roller notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dice Rolls

> [!Note] 插件名片
> - 插件名称：Dice Rolls
> - 插件作者：siulved54
> - 插件说明：Inline dice rolls you click to reroll, in Live Preview and Reading view, with full dice notation, a roll dialog and a roll history. Reads Dice Roller notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '编辑工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/perezamadorluisenrique-gif/dice-rolls)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dice-rolls)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/perezamadorluisenrique-gif/dice-rolls/master/README.md)



## 概述

Dice Rolls 允许你在笔记中直接编写骰子公式，将其转化为可交互的实时结果。只需在行内代码中以 `dice:` 开头输入公式，如 `1d20+4`，插件便会立即显示掷骰结果。你可以通过点击结果重新掷骰，或在 Live Preview 和阅读视图中查看每次掷骰的具体细节。该插件支持完整的骰子记号法，包括优势/劣势、爆炸骰、重掷以及成功计数等复杂规则，让桌面与移动端用户都能获得一致的沉浸式体验。

想象一下，你在撰写 D&D 战役笔记时，需要记录哥布林的攻击检定。你可以直接写下 `dice: 1d20+4`，点击结果查看是否命中，而无需切换到外部计算器。另一个场景是构建随机事件表，通过 `dice: [[Note#Table]]` 引用 Markdown 表格，插件会自动随机选取一行并展示内容，甚至支持图片与链接渲染。这种将随机性嵌入文档流的方式，极大地简化了游戏主持或创意写作的流程。

相比同类插件，Dice Rolls 最大的特色在于对笔记内容的尊重与兼容性。它完全兼容 Dice Roller 的语法，你可以一键导入原有公式，但避免了自动重写笔记带来的混乱。只有当你明确点击或执行特定命令时，结果才会写入文档，且支持单次撤销。此外，它提供了侧边栏掷骰历史，方便回溯来源，并支持自定义骰面范围（如 `1d[3,5]` 包含两端），以及通过属性字段（如 `dex`）动态调整公式，这些细节让它在灵活性上更胜一筹。

需要注意的是，该插件不支持基于标签、行号或 Dataview 的批量掷骰，也不包含叙事骰或 3D 骰功能。如果你依赖这些高级特性，可能需要保留 Dice Roller 插件作为补充。此外，虽然它支持将结果写入笔记，但建议谨慎使用 `dice-mod:` 功能，以免意外修改文档结构。对于仅需简单随机数且不需要复杂交互的用户，系统自带的随机数功能可能已足够。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


