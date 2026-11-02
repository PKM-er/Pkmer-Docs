---
uid: 1793625622616001
title: "Obsidian 插件：Terminology Replacer"
tags: ["文字处理", "编辑工具", "效率工具", "obsidian插件"]
description: "Replace selected or preceding terminology with configurable literal text. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Terminology Replacer

> [!Note] 插件名片
> - 插件名称：Terminology Replacer
> - 插件作者：Shangrui
> - 插件说明：Replace selected or preceding terminology with configurable literal text. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wool0312/obsidian-terminology-replacer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?terminology-replacer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wool0312/obsidian-terminology-replacer/master/README.md)



## 概述

Terminology Replacer 旨在解决 Obsidian 笔记中术语不统一及中英文转换繁琐的问题。它允许用户通过命令面板或自定义快捷键，将选中的文本或光标前的特定术语替换为预设的固定内容。该插件支持配置包含 Markdown 格式（如反引号、加粗、链接）的替换文本，帮助用户快速插入代码片段或标准化专业词汇，确保文档风格的一致性。

典型使用场景包括技术文档的术语标准化和快速输入。例如，在撰写操作系统笔记时，你可以将中文“内核”自动替换为带反引号的英文代码 `kernel`，或者将“系统调用”替换为 `system call`。只需选中该词或将其置于光标前，执行替换命令即可瞬间完成转换，无需手动查找替换或记忆复杂的 Markdown 语法。

相比同类插件，Terminology Replacer 提供了更精细的匹配逻辑和友好的配置界面。它采用“最长后缀匹配”策略，当光标前存在多个匹配项时，优先替换最长的术语，避免误替换。设置页采用逐行编辑模式，支持即时保存与自动诊断，能直观显示有效规则数量、未填完整的行及重复术语，降低了配置出错的风险。此外，它兼容旧版文本格式词典，方便用户迁移数据。

使用前需注意，该插件仅支持手动触发，不会在输入时自动替换。匹配过程区分大小写，且不检查单词边界或 Markdown 上下文，因此不适合需要复杂正则表达式匹配或自动实时替换的场景。如果您的需求是全局自动替换或基于语法的智能转换，此插件可能无法满足。建议先备份 `data.json` 文件，以便在更新插件时保留已有的词典配置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


