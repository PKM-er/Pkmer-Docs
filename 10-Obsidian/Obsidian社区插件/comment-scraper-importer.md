---
uid: 1793625611127001
title: "Obsidian 插件：Comment Scraper Importer"
tags: ["第三方工具集成", "数据处理", "社交与社区", "obsidian插件"]
description: "Import Reddit and Hacker News threads exported by the Comment Scraper browser extension as notes, with nested replies, times, links and scores where available. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Comment Scraper Importer

> [!Note] 插件名片
> - 插件名称：Comment Scraper Importer
> - 插件作者：Super Lede
> - 插件说明：Import Reddit and Hacker News threads exported by the Comment Scraper browser extension as notes, with nested replies, times, links and scores where available. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '数据处理', '社交与社区', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/supertj/comment-scraper-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?comment-scraper-importer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/supertj/comment-scraper-importer/master/README.md)



## 概述

Comment Scraper Importer 将浏览器扩展 Comment Scraper 导出的 Reddit 和 Hacker News 讨论串转化为 Obsidian 笔记。它把每个帖子作为独立笔记，保留原始链接、时间戳及分数，并将所有评论以嵌套引用块形式呈现，完整还原回复层级结构，方便在本地知识库中查阅和整理网络讨论内容。

适合需要归档特定话题讨论的场景。例如，你可以导出关于“小型团队 CRM 选择”的 Reddit 帖子，插件会生成包含主帖和 48 条评论的笔记，每条评论都标注了发布时间和得分；或者整理 Hacker News 上的技术辩论，虽然 HN 不显示分数，但插件仍会保留完整的嵌套回复结构，便于追踪观点演变。

相比直接保存网页或 Markdown 导出，该插件的核心优势在于安全性与结构化。所有评论正文均包裹在代码块中，防止 Dataview 或 Templater 等插件意外执行评论中的恶意代码或嵌入指令。此外，它支持折叠长回复分支，对超过六层的深层回复进行扁平化处理以保持可读性，并明确标记已删除或移除的评论位置，确保讨论脉络完整。

使用前需注意，该插件仅支持 CSV 和 JSON 格式导出，不支持 Markdown 格式，因为后者缺乏单条评论链接且时间为相对值。若评论以特殊符号开头，建议使用 JSON 格式以避免 CSV 解析时的字符丢失。此外，插件不记录作者用户名，且仅创建新笔记，不会覆盖现有文件。如果你需要实时同步或自动抓取新评论，此插件并不适用，它仅处理一次性导出的静态文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


