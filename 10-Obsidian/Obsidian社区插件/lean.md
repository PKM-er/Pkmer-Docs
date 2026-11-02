---
uid: 1793625614740000
title: "Obsidian 插件：Lean4"
tags: ["编程与脚本", "学术与科研", "效率工具", "obsidian插件"]
description: "Check independent Lean 4 blocks or shared sessions and inspect proof goals with an automatically managed basic environment. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Lean4

> [!Note] 插件名片
> - 插件名称：Lean4
> - 插件作者：ewigmidori
> - 插件说明：Check independent Lean 4 blocks or shared sessions and inspect proof goals with an automatically managed basic environment. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '学术与科研', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ewigmidori/obsidian-lean4)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lean)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ewigmidori/obsidian-lean4/master/README.md)



## 概述

Lean4 插件让 Obsidian 用户无需配置复杂的外部项目，即可在笔记中直接编写和检查 Lean 4 代码。它内置了自动管理的基础环境，包含 Lean 4.35.0 和 Std 库，支持对独立的代码块进行即时检查，或查看证明过程中的剩余目标。对于需要跨代码块共享定义的场景，插件提供了会话机制，允许将同一笔记内的多个代码块关联起来，实现定义的复用，同时保持不同笔记或不同会话间的隔离。

典型场景包括数学笔记的撰写与验证。例如，你可以先在一个代码块中定义一个自然数 `base`，并在旁边的 Markdown 中解释其含义；随后在另一个标记了相同 `session` 的代码块中，利用该定义编写证明。此外，插件支持在编辑模式下通过光标位置动态展示证明上下文，当你将光标置于某个战术（tactic）之前时，侧边栏会清晰列出当前已知的假设和待证目标，帮助你直观理解证明逻辑的推进过程。

相比其他需要手动配置 Lake 项目或依赖外部 IDE 的方案，该插件的最大特色是“开箱即用”的独立性。默认情况下，每个代码块都是独立的，避免了不同示例间因变量名冲突导致的错误，非常适合将零散的数学实验或教学示例整理在同一篇笔记中。同时，它支持 `check=off` 选项，允许用户展示未完成的证明草图或故意错误的示例，而不会触发报错，这在制作教学材料时非常实用。

需要注意的是，该插件目前仅支持桌面端，且基础环境不包含 Mathlib 等大型数学库。如果你需要依赖 Mathlib 或自定义库，必须切换到“现有项目”模式并手动配置 Lake 项目路径。此外，插件尚不支持代码补全、悬停类型提示及跳转定义等高级 IDE 功能，也不支持嵌套在列表或引用块中的代码围栏。因此，它更适合轻量级的数学记录、教学演示或独立逻辑验证，而非大型形式化数学库的开发。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


