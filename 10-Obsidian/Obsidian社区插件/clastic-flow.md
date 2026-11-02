---
uid: 1793625609652001
title: "Obsidian 插件：Clastic Flow"
tags: ["效率工具", "数据分析", "界面优化", "obsidian插件"]
description: "Minimalist lightweight real-time wpm monitor for Obsidian with stats dashboard - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Clastic Flow

> [!Note] 插件名片
> - 插件名称：Clastic Flow
> - 插件作者：miaobo
> - 插件说明：Minimalist lightweight real-time wpm monitor for Obsidian with stats dashboard - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '数据分析', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/atmiaobo/clastic-flow)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?clastic-flow)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/atmiaobo/clastic-flow/master/README.md)



## 概述

Clastic Flow 是一款极简且轻量的实时打字速度监控插件，旨在为 Obsidian 用户提供精准的 WPM（每分钟字数）统计。它通过监听编辑器底层的代码变更事务，而非依赖简单的挂钟时间，来实时计算并显示当前的打字速度。该插件不仅能在状态栏即时反馈当前的 WPM 数值，还内置了一个统计仪表盘，能够聚合展示当前文档、整个库以及单篇笔记的详细数据，包括输入字数、平均速度、活跃时间及打字爆发记录，帮助用户直观掌握自己的写作节奏。

对于习惯在 Obsidian 中进行长篇写作或知识整理的用户而言，这款插件非常实用。例如，当你撰写一篇长文时，状态栏会实时显示当前的打字速度，让你随时调整节奏；当你完成写作后，可以打开统计视图，查看这篇笔记的总输入字数、平均 WPM 以及具体的活跃时间段。此外，你还能浏览整个库的全局统计，对比不同笔记之间的打字效率，从而发现自己在不同主题或时间段内的写作习惯差异。

与同类插件相比，Clastic Flow 的核心优势在于其“活跃时间”追踪逻辑。它采用更精细的算法，仅统计实际发生文本变更的时间段，自动过滤掉光标移动、快捷键操作、撤销重做、粘贴大段文本以及长时间闲置等无效行为。这意味着，即使笔记打开数小时，只要没有持续输入，就不会拉低平均速度。这种基于实际编辑事务的测量方式，避免了传统“总字数除以总打开时间”导致的统计失真，提供了更具参考价值的效率数据。

需要注意的是，该插件主要服务于关注打字效率的用户，如果你仅将 Obsidian 作为静态知识库，对实时速度监控无需求，则无需安装。此外，由于插件会过滤掉粘贴和批量编辑，如果你的工作流主要依赖复制粘贴而非手动输入，统计结果可能无法完全反映你的实际工作量。建议在使用前检查设置中的字符阈值，以确保自动补全或生成内容被正确识别，避免统计偏差。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


