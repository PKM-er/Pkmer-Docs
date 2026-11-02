---
uid: 1793625620591000
title: "Obsidian 插件：Readable Block Links"
tags: ["模板与链接处理", "编辑工具", "效率工具", "obsidian插件"]
description: "Replaces generated block IDs with readable slugs taken from the start of the block. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Readable Block Links

> [!Note] 插件名片
> - 插件名称：Readable Block Links
> - 插件作者：Jonathan Raines
> - 插件说明：Replaces generated block IDs with readable slugs taken from the start of the block. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jonathanraines/obsidian-readable-block-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?readable-block-links)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jonathanraines/obsidian-readable-block-links/master/README.md)



## 概述

Readable Block Links 旨在解决 Obsidian 中块引用 ID 难以阅读的问题。当使用建议器创建块链接时，系统通常生成如 `^abc123` 这样的随机字符，难以辨识。该插件的核心功能是将这些无意义的 ID 替换为基于块内容开头的可读性 slug，并同步更新源笔记和链接处的标识，使引用变得直观且易于理解。

典型场景适用于需要频繁引用特定段落或引文的笔记。例如，在整理文献时，你可以将 `[[Source note#^abc123]]` 自动转换为 `[[Source note#^some-quote]]`，直接反映被引用内容的主题。这种变化让读者无需跳转即可大致了解引用指向的内容，提升了笔记的可读性和引用效率。

相比同类插件，其特色在于智能的 slug 生成策略。默认使用块的第一句话，也可在设置中限制为特定词数、句数或整块内容，并自动剥离 Markdown 语法。此外，插件具备防冲突机制：若 slug 已存在，会自动添加 `-2`、`-3` 等后缀；且仅在没有其他笔记链接该 ID 时才进行重命名，确保链接稳定性。

使用前需注意，该插件仅在块 ID 未被其他笔记引用时才会重命名，若已有大量外部链接，可能无法自动更新。它不适合需要保持原始随机 ID 不变，或依赖特定 ID 格式进行自动化脚本处理的场景。对于追求链接语义清晰、希望提升笔记引用体验的用户，这是一个实用的增强工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


