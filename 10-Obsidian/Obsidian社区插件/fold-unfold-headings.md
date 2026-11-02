---
uid: 1793625613062000
title: "Obsidian 插件：Fold Unfold Headings"
tags: ["界面优化", "效率工具", "文字处理", "obsidian插件"]
description: "Fold note content under headings to get an outline view, or show only headings up to a chosen level. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Fold Unfold Headings

> [!Note] 插件名片
> - 插件名称：Fold Unfold Headings
> - 插件作者：leondgarse
> - 插件说明：Fold note content under headings to get an outline view, or show only headings up to a chosen level. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '效率工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/leondgarse/obsidian-fold-unfold-headings)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fold-unfold-headings)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/leondgarse/obsidian-fold-unfold-headings/master/README.md)



## 概述

Fold Unfold Headings 旨在解决长文档阅读时缺乏结构概览的痛点，核心功能是将笔记内容折叠至标题层级，实现类似代码编辑器的“折叠到第 N 级”效果。它提供两种主要操作模式：一是将每个标题下的正文全部折叠，使笔记呈现为纯大纲视图；二是仅保留指定层级（1 至 5 级）及更高级别的标题，隐藏其余内容。这种机制允许用户快速从详细阅读模式切换至结构浏览模式，无需手动逐个折叠段落。

典型使用场景包括快速审阅长文结构或定位特定章节。例如，当你需要检查一篇万字长文的逻辑框架时，执行“折叠所有内容至其自身标题”命令，笔记会瞬间变为仅显示各级标题的大纲，便于整体把握脉络。若你只想关注主要章节，可使用“折叠到标题级别 2”，此时仅显示一级和二级标题，所有三级及以下标题及其内容均被隐藏，从而过滤掉细节干扰，聚焦核心主题。

相比其他折叠插件，该工具的特色在于其智能的层级切换逻辑。每次执行折叠命令前，插件会自动先展开所有已折叠内容，确保你能直接从当前状态切换至目标层级，而无需先手动全部展开再重新折叠。此外，它具备精准的识别能力，会自动忽略代码块（fenced code blocks）和 Frontmatter 中的标题，避免误折叠技术文档中的代码示例或元数据，保证了在混合内容笔记中的稳定性。

使用前需注意，该插件默认不设置任何快捷键，用户需在设置中手动分配（如 Ctrl+Alt+0 至 5 及 U 键）以提升操作效率。它不适合需要频繁在折叠状态下编辑正文内容的场景，因为折叠状态下无法直接查看被隐藏的文字。此外，由于它仅处理标题层级，对于没有使用标准 Markdown 标题语法、而是依赖加粗文本作为伪标题的笔记，该插件无法提供有效的结构折叠功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


