---
uid: 1793625621935001
title: "Obsidian 插件：Sync Churn Watch"
tags: ["文件管理", "数据分析", "效率工具", "obsidian插件"]
description: "Find files rewritten often by your vault, such as settings files, to see what fills your sync history size. Start a watch session, use your vault, then read the table. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Sync Churn Watch

> [!Note] 插件名片
> - 插件名称：Sync Churn Watch
> - 插件作者：theluckystrike
> - 插件说明：Find files rewritten often by your vault, such as settings files, to see what fills your sync history size. Start a watch session, use your vault, then read the table. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '数据分析', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/sync-churn-watch)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sync-churn-watch)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/sync-churn-watch/master/README.md)



## 概述

Sync Churn Watch 旨在解决 Obsidian 用户因频繁修改特定文件而导致同步历史体积膨胀的问题。该插件的核心功能是监控并识别那些被 Vault 反复重写的文件，例如设置文件或其他高频变动的文档。通过启动一个监控会话，插件会记录在用户使用 Vault 期间发生的文件变更，最终生成一份清晰的表格，展示哪些文件占据了大量的同步历史记录空间，帮助用户直观地定位“数据 churn”的来源。

典型的使用场景包括排查同步异常或优化存储效率。例如，当你发现 Obsidian 的同步历史突然变得巨大，或者同步速度变慢时，可以启动 Sync Churn Watch，正常进行笔记编辑、插件操作等日常使用，结束后查看报告，即可发现是否有某个配置文件或临时文件在后台不断被重写。另一个场景是评估新安装插件的影响，通过监控会话观察该插件是否导致某些文件频繁变动，从而判断其是否对同步负载造成了不必要的压力。

相比其他仅显示文件大小的插件，Sync Churn Watch 的特色在于它关注的是“变更频率”而非静态大小。它专门针对同步机制中的历史体积问题，能够揭示那些虽然文件本身不大，但因频繁修改而累积大量版本历史的“隐形杀手”。这种动态监控能力使得用户能够区分出真正需要关注的文件，而不是盲目地清理大文件，从而更精准地优化同步体验。

需要注意的是，该插件目前未经过 Obsidian 官方团队的人工审核，使用时需留意其稳定性。此外，它不适合用于查找静态的大文件，如果你的问题仅仅是某个 PDF 或图片文件太大，此插件无法提供有效帮助。它仅适用于诊断由频繁写入操作引起的同步历史膨胀问题，对于一次性的大文件存储问题，建议直接检查文件属性或使用其他文件管理工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


