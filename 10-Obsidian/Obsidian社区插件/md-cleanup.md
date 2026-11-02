---
uid: 1793625615766000
title: "Obsidian 插件：Markdown Cleanup"
tags: ["文字处理", "编辑工具", "效率工具", "obsidian插件"]
description: "Strip bold markers, remove non-breaking spaces, merge single-sentence paragraphs, fix colon spacing, and break lines at sentence boundaries. Tuned for Korean text. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Markdown Cleanup

> [!Note] 插件名片
> - 插件名称：Markdown Cleanup
> - 插件作者：cge
> - 插件说明：Strip bold markers, remove non-breaking spaces, merge single-sentence paragraphs, fix colon spacing, and break lines at sentence boundaries. Tuned for Korean text. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/goeun23/obsidian-md-cleanup)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?md-cleanup)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/goeun23/obsidian-md-cleanup/master/README.md)



## 概述

Markdown Cleanup 旨在解决从聊天助手、网页或其他编辑器复制 Markdown 内容时产生的格式杂乱问题。它提供了一组核心清理命令，能够一键去除加粗标记、清除不间断空格、合并被错误拆分的单句段落、修正冒号间距，并在句子边界处重新换行。虽然其规则针对韩语文本进行了优化，但加粗、空格和段落转换功能适用于任何语言，能帮助用户快速将粘贴的原始文本转化为整洁的笔记格式。

典型使用场景包括整理 AI 生成的回答或从网页抓取的文章。例如，当从聊天机器人复制一段包含大量 `**` 加粗符号和 `&nbsp;` 空格的文本时，执行“清理全部”命令即可瞬间去除这些干扰元素。另一个场景是处理被强制换行打散的单句段落，插件能自动将分散在多行的短句合并为连贯的段落，同时保留标题、列表和代码块的结构不变，让阅读体验更加流畅。

相比同类插件，Markdown Cleanup 的特色在于其对韩文标点规则（2014 版）的精准适配，特别是冒号间距的自动修正，能智能跳过代码、链接和时间格式。此外，它具备强大的保护机制，确保代码块、数学公式和 YAML 前置元数据绝不被误改。插件还可选集成 Prettier 插件，在清理后自动执行格式化，实现从内容清洗到排版规范的一站式处理。

使用前需注意，若需配合 Prettier 使用行断功能，应将 Prettier 的 `proseWrap` 设置为默认的 `preserve`，否则会导致重复换行。该插件不适合需要复杂语法重构或自动翻译的场景，它仅专注于格式清理。如果笔记中大量使用非标准 Markdown 结构，或主要需求是内容生成而非格式修正，此插件可能无法完全满足预期。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


