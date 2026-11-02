---
uid: 1793625620631001
title: "Obsidian 插件：Recall Lab"
tags: ["学习与教育", "自动化与AI", "效率工具", "obsidian插件"]
description: "Spaced-repetition reviews, tiered exams, CTF-style labs and a skill radar over your notes, marked and written by Claude through the Claude Code CLI. No API key. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Recall Lab

> [!Note] 插件名片
> - 插件名称：Recall Lab
> - 插件作者：Muhammad Younas
> - 插件说明：Spaced-repetition reviews, tiered exams, CTF-style labs and a skill radar over your notes, marked and written by Claude through the Claude Code CLI. No API key. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/myounas126/recall-lab)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?recall-lab)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/myounas126/recall-lab/master/README.md)



## 概述

Recall Lab 旨在将 Obsidian 笔记转化为长期记忆系统，核心功能是基于 FSRS 算法的间隔重复复习。它利用 Claude Code CLI 自动从笔记内容生成题目，并负责批改主观题，无需用户配置 API 密钥。除了常规的选择题，它还支持手写答案、Shell 命令执行、点击找错、排序匹配等多种题型，甚至能将笔记中的高亮部分自动转化为填空题，融入每日复习队列。

典型使用场景包括备考和硬核技术学习。例如，在复习操作系统课程时，你可以标记笔记为“完成”，插件会生成包含“简单回忆”、“困难应用”和“残酷综合”三个层级的考试，只有掌握前一层 80% 的内容才能解锁下一层。另一个场景是 CTF 风格实验室，插件会根据笔记内容生成源码阅读、x86-64 二进制逆向或漏洞利用任务，你可以使用 Ghidra、gdb 等外部工具进行实战演练，系统仅存储 Flag 的哈希值以验证结果。

相比同类插件，Recall Lab 的特色在于其深度的 AI 集成与本地化批改能力。客观题在本地即时判分，主观题通过 Claude 进行严格评分，若连接失败则保留答案但不扣分，确保学习进度不受网络影响。此外，它提供技能雷达图，直观展示各知识领域的掌握程度，并在笔记标题旁显示记忆状态点，让用户清晰了解哪些内容即将遗忘。

使用前需注意，该插件仅支持 macOS 和 Linux 桌面端，Windows 未经验证，且必须安装并登录 Claude Code CLI。它不适合仅希望进行简单闪卡记忆、或无法使用命令行工具的用户。如果你不需要 CTF 实战或复杂的技能雷达分析，仅追求轻量级的单词背诵，此插件可能显得过于复杂。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


