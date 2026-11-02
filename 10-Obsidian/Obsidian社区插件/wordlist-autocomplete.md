---
uid: 1793625624623000
title: "Obsidian 插件：Wordlist Autocomplete"
tags: ["编辑工具", "文字处理", "效率工具", "obsidian插件"]
description: "Autocomplete suggestions from JSON wordlist files with domain and category filtering. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Wordlist Autocomplete

> [!Note] 插件名片
> - 插件名称：Wordlist Autocomplete
> - 插件作者：elouahabi-naoufal
> - 插件说明：Autocomplete suggestions from JSON wordlist files with domain and category filtering. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/elouahabi-naoufal/obsidian-wordlist-autocomplete)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wordlist-autocomplete)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/elouahabi-naoufal/obsidian-wordlist-autocomplete/master/README.md)



## 概述

Wordlist Autocomplete 允许用户通过自定义 JSON 词库在 Obsidian 中实现智能补全，彻底摆脱对内置拼写检查的依赖。它不预置任何词汇，而是扫描你指定的文件夹，将其中所有启用的 JSON 文件作为数据源。当你输入文字时，插件会实时匹配并展示建议，每条建议都带有“领域”和“类别”标签，让你能清晰识别词汇来源。这种机制特别适合管理专业术语、项目专用词汇或团队内部风格指南，确保写作时用词准确且符合特定语境。

想象一下，你在撰写技术文档时输入“orcl”，插件能立即识别出这是“Oracle”的缩写并给出建议；或者在整理笔记时，输入“base”能提示“Database”。除了实时补全，它还提供了“修正当前文件”命令，能自动检测并建议修复拼写错误，同时支持一键将全文转换为大写、小写或首字母大写，极大提升了文本格式化的效率。

与通用拼写插件不同，该插件的核心优势在于其高度可定制性和上下文感知能力。它支持前缀、缩写（去元音）和包含三种匹配模式，并允许你调整全局排序规则。更独特的是其可选的个性化学习功能：一旦启用，插件会记录你接受建议时的上下文环境，下次遇到相似语境时会优先推荐你曾选择过的词汇，使补全体验随使用逐渐变得更懂你。

需要注意的是，该插件本身不包含任何词库，你需要自行准备符合特定 JSON 格式的文件并放入指定文件夹，否则无法使用。此外，它主要服务于词汇补全和格式转换，并不具备传统的语法纠错或句子结构分析功能。如果你希望开箱即用、无需维护词库，或者需要复杂的语法检查，这款插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


