---
uid: 1793625619924000
title: "Obsidian 插件：Parallel Paragraph Reader"
tags: ["文字处理", "学习与教育", "效率工具", "obsidian插件"]
description: "Read two existing language versions in matched paragraph rows. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Parallel Paragraph Reader

> [!Note] 插件名片
> - 插件名称：Parallel Paragraph Reader
> - 插件作者：theluckystrike
> - 插件说明：Read two existing language versions in matched paragraph rows. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '学习与教育', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/parallel-paragraph-reader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?parallel-paragraph-reader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/parallel-paragraph-reader/master/README.md)



## 概述

Parallel Paragraph Reader 专为已拥有双语对照文本的用户设计，核心功能是将两篇 Markdown 笔记按段落顺序并排显示。它不执行翻译，也不判断句意是否对应，而是通过识别空行分隔的文本块，将左侧笔记的第一段与右侧笔记的第一段置于同一行。这种基于顺序的自动配对机制，让读者能在单一视图中直观对比两种语言的段落结构，且源文件在读取过程中保持完全不变。

典型场景适用于阅读已整理好的双语教材或对照译本。例如，当你有一篇英文原文和一篇中文译文，且两者段落划分大致一致时，插件能自动将它们对齐，方便逐段对照阅读。若某侧多出一个段落，另一侧会显示“无段落”标记，清晰呈现长度差异。此外，在窄屏模式下，右侧文本会自动堆叠在左侧下方，适应移动端或分屏阅读需求。

相比其他双栏阅读插件，该工具的特色在于严格的“行高同步”机制：每行高度由两侧中较长的文本决定，确保下一对段落始终从同一水平线开始，避免视觉错位。它支持自动检测文本方向，阿拉伯语等从右向左书写的文字能与英语自然并排。Pro 版本还允许手动保存对齐映射，即使段落顺序不一致，也能通过自定义规则强制匹配，并记忆上次阅读位置。

使用前需注意，该插件仅适用于段落结构相对规整的文本。如果原文将两段合并，或译文拆分了段落，自动配对可能会错位，此时需依赖 Pro 版的手动映射功能，但无法自动合并或推断语义。插件不修改源文件，但 Pro 版保存的对齐数据属于 Vault 备份的一部分。若你的需求是实时翻译、自动语义匹配或编辑源文本，此插件并不适合。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


