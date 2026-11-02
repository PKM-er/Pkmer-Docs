---
uid: 1793625621901000
title: "Obsidian 插件：Super Tutor"
tags: ["学习与教育", "自动化与AI", "效率工具", "obsidian插件"]
description: "Spaced repetition for notes tagged #review, with manual or ChatGPT questions. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Super Tutor

> [!Note] 插件名片
> - 插件名称：Super Tutor
> - 插件作者：wajsbrot
> - 插件说明：Spaced repetition for notes tagged #review, with manual or ChatGPT questions. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nkthiebaut/super-tutor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?super-tutor)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nkthiebaut/super-tutor/master/README.md)



## 概述

Super Tutor 是一款基于 SM-2 算法的间隔重复复习插件，专门针对标记了 `#review` 标签的笔记进行调度。它的核心功能是将笔记转化为简短的问答集，支持手动编写问题，或通过 ChatGPT 自动生成。生成的题目和参考答案存储在插件数据中，不会直接修改原始笔记内容，确保你的知识库保持整洁。

典型使用场景包括备考或学习新技能。例如，你可以将一篇关于“量子力学”的笔记打上 `#review` 标签，让插件生成三个核心概念问题。在复习时，笔记内容会模糊显示，你需先尝试回答，再查看参考答案并自我评分。此外，你还可以利用其“检查与改进”功能，让 AI 自动扫描笔记中的事实错误、逻辑不一致或表述不清之处，并提议具体的修改方案，经你确认后应用。

相比其他间隔重复插件，Super Tutor 的特色在于深度整合了 AI 辅助能力。它不仅生成题目，还能对笔记内容进行事实核查和润色，提出如补充定义、增加示例等具体建议。所有 AI 生成的修改都需要用户逐条审核并手动接受，避免了 AI 直接篡改原文的风险。此外，题目和答案支持 Obsidian Markdown 语法，包括行内和块级 LaTeX 公式，适合处理包含复杂数学或科学公式的笔记。

使用前需注意，AI 功能需要配置 OpenAI API Key，且默认使用 `gpt-5-mini` 模型。该插件不适合希望完全自动化、无需人工审核笔记修改的用户，因为所有 AI 建议均需手动确认。如果你不需要 AI 生成题目或笔记纠错功能，仅想进行简单的卡片式记忆，可能会觉得其功能略显冗余。另外，移除 `#review` 标签会隐藏笔记但保留进度，重新添加标签可继续之前的复习计划。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


