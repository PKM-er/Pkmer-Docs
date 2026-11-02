---
uid: 1793625613599000
title: "Obsidian 插件：Heading Guard"
tags: ["文字处理", "模板与链接处理", "编辑工具", "obsidian插件"]
description: "Auto-number Markdown headings with per-level rules: brackets, level separators and suffixes. Keeps [[note#heading]] links pointing at the right heading when numbers change. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Heading Guard

> [!Note] 插件名片
> - 插件名称：Heading Guard
> - 插件作者：OLanO
> - 插件说明：Auto-number Markdown headings with per-level rules: brackets, level separators and suffixes. Keeps [[note#heading]] links pointing at the right heading when numbers change. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '模板与链接处理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nnq7/obsidian-heading-guard)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?heading-guard)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nnq7/obsidian-heading-guard/master/README.md)



## 概述

Heading Guard 是一款专为 Obsidian 设计的标题自动编号插件，旨在解决 Markdown 文档中手动维护层级编号繁琐且易错的问题。它允许用户为 H1 至 H6 各级标题独立定义编号规则，包括数字序列（如阿拉伯数字、罗马数字、中文数字）、括号样式、层级分隔符及后缀。插件的核心价值在于其智能同步机制：当标题编号因内容增删而发生变化时，它会自动更新笔记中所有指向该标题的 `[[note#heading]]` 内部链接，确保引用始终准确无误，彻底告别手动修正链接的噩梦。

在典型使用场景中，如果你正在撰写结构严谨的技术文档或长篇报告，Heading Guard 能确保章节编号随内容调整自动重排，无需人工干预。例如，当你在第二章中间插入一个新的小节时，后续所有小节及其子标题的编号会自动顺延，同时其他笔记中指向这些标题的链接也会同步更新。此外，对于需要频繁调整大纲结构的用户，该插件能大幅减少因编号错位导致的排版混乱，让内容创作更专注于文字本身。

相比同类插件，Heading Guard 的特色在于其高度灵活的规则配置与隐私保护。它支持通过 Frontmatter 为单篇笔记指定不同的编号风格，或保存多套命名风格以便一键切换，适应不同文档的格式需求。同时，它提供了精细的控制手段，如使用 `%%skip%%` 标记跳过特定标题，或在父级标题缺失时选择“补全层级”或“上移一级”的编号策略。值得注意的是，该插件完全离线运行，不发送任何网络请求，不收集遥测数据，也不访问库外文件，确保用户数据绝对安全。

使用前需注意，自动编号功能默认关闭，需在设置中手动开启。若选择“仅针对指定笔记”模式，必须在笔记 Frontmatter 中明确添加 `heading-guard: on` 才能生效。此外，插件仅处理 Markdown 文件，不支持其他格式。如果你需要的是复杂的目录生成、PDF 导出排版，或者对非标题文本进行自动编号，此插件并不适合。它专注于标题编号与链接同步，对于不需要严格层级编号的简单笔记库，其功能可能显得过于复杂。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


