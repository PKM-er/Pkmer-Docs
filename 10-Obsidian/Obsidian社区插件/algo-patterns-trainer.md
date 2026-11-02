---
uid: 1793625605778000
title: "Obsidian 插件：Algo Patterns"
tags: ["学习与教育", "效率工具", "任务管理", "obsidian插件"]
description: "Practice algorithm patterns, record attempts, and review older problems with spaced repetition. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Algo Patterns

> [!Note] 插件名片
> - 插件名称：Algo Patterns
> - 插件作者：Vlad Topchu
> - 插件说明：Practice algorithm patterns, record attempts, and review older problems with spaced repetition. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', '效率工具', '任务管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/vladtopchu/algo-patterns-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?algo-patterns-trainer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/vladtopchu/algo-patterns-obsidian-plugin/master/README.md)



## 概述

Algo Patterns 是一款专为算法刷题设计的本地化训练工具，核心在于将“主题-模式-题目”结构化，并引入间隔重复机制。它内置了包含 15 个主题、94 种模式及 413 道唯一题目的完整目录，支持手动录入 LeetCode 解题结果。通过记录每次尝试是独立解决、借助提示还是仅看懂解法，插件能精准追踪你的掌握程度，并据此安排复习计划，帮助你从单纯刷题转向对解题模式的深度内化。

假设你正在准备面试，需要巩固“滑动窗口”这一特定模式。你可以直接在插件中筛选该模式下的题目，设定练习计划。当遇到一道新题时，启动内置计时器开始解题；若中途卡住，可标记为“使用提示”或“查看解法”。几天后，插件会根据你之前的表现，自动将这道题重新推送到复习队列中，确保你在遗忘曲线到来前再次巩固，避免“刷完就忘”的尴尬。

与依赖云端同步或复杂算法的同类工具不同，Algo Patterns 强调数据本地化与透明性。它不采用 FSRS 等黑盒算法，而是使用直观的间隔阶梯，且所有进度数据以 JSON 格式存储在 Vault 中，方便备份与迁移。此外，它支持为同一道题关联多个备选模式，并允许通过 Markdown 笔记直接记录解题思路，实现了代码练习与知识沉淀的无缝结合。

需要注意的是，该插件目前不支持自动同步 LeetCode 账号、运行代码或设置每日刷题上限，所有结果需手动录入。如果你希望完全自动化地追踪刷题进度，或依赖插件直接提交代码，它可能无法满足需求。此外，由于采用本地间隔算法，对于追求极致科学记忆曲线的用户，其复习效率可能略逊于基于 FSRS 的工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


