---
uid: 1793625620155000
title: "Obsidian 插件：Pocket Note Quiz"
tags: ["学习与教育", "移动端优化", "效率工具", "obsidian插件"]
description: "Quiz yourself on question lines in the current note and mark each one right or wrong, on phone or desktop. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pocket Note Quiz

> [!Note] 插件名片
> - 插件名称：Pocket Note Quiz
> - 插件作者：theluckystrike
> - 插件说明：Quiz yourself on question lines in the current note and mark each one right or wrong, on phone or desktop. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', '移动端优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/pocket-note-quiz)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pocket-note-quiz)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/pocket-note-quiz/master/README.md)



## 概述

Pocket Note Quiz 将当前笔记中的特定标记行转化为即时问答卡片，核心功能是在阅读问题后手动揭示答案，并标记正确或错误。它支持在桌面端和移动端使用，允许用户通过简单的交互完成自我测试，并在结束后查看得分。该插件旨在简化复习流程，让用户无需离开当前文档即可进行快速的知识回顾，同时提供将测试结果写回源文件的选项，以便追踪学习进度。

典型场景包括复习生物或化学等学科笔记。例如，在笔记中用 `?` 标记问题行，下一行写答案，运行插件后逐题作答。若某题答错，插件会在源文件对应行末尾添加 `❌` 标记。下次复习时，可选择“仅显示错误”或“仅显示未标记”的选项，从而只针对薄弱环节进行强化训练，避免重复已掌握的内容。

相比同类插件，Pocket Note Quiz 的特色在于其轻量级与安全性。它仅处理当前笔记，不自动扫描全库，减少资源占用。写回结果时采用严格比对机制，若源文件在测验期间被修改，相关标记会被跳过而非强制覆盖，防止数据损坏。此外，答案渲染支持 Obsidian 原生 Markdown 格式，如加粗、列表和本地链接，使复杂答案也能清晰展示。

使用前需注意，问题行必须包含指定标记（默认为 `?`），且答案需位于问题行下方、空行之前。代码块和 Frontmatter 中的内容会被自动忽略。该插件不适合需要跨文件夹批量测验或生成详细统计报告的用户，这些高级功能属于 Pro 版本。若笔记中问题行频繁变动，建议重新发起测验以确保标记准确。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


