---
uid: 1793625620837000
title: "Obsidian 插件：Revision Session Marks"
tags: ["编辑工具", "文字处理", "效率工具", "obsidian插件"]
description: "Save a writing baseline and turn later edits into a new CriticMarkup review note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Revision Session Marks

> [!Note] 插件名片
> - 插件名称：Revision Session Marks
> - 插件作者：theluckystrike
> - 插件说明：Save a writing baseline and turn later edits into a new CriticMarkup review note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/revision-session-marks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?revision-session-marks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/revision-session-marks/master/README.md)



## 概述

Revision Session Marks 专为纯文本写作设计，旨在解决修改过程中难以直观对比前后差异的痛点。其核心机制是允许用户保存当前笔记作为“写作基线”，随后在编辑结束后，插件会自动生成一份独立的 CriticMarkup 格式审查笔记。这份新笔记会清晰标记出新增、删除及替换的内容，而原始笔记保持原样不动，从而让你能专注于审阅具体的文字变动，无需在版本历史中反复切换。

典型场景适用于需要精细打磨的散文或草稿创作。例如，当你完成初稿后想回顾刚才半小时内的修改逻辑，只需启动会话、编辑并停止，插件便会生成一份带标记的副本。另一个场景是多人协作或自我复盘，通过 Pro 版本的命名基线功能，你可以为不同章节保存特定版本的基准，方便后续对比不同阶段的修改幅度，甚至批量生成文件夹内的审查副本。

相比通用的版本控制工具，该插件的特色在于其严谨的“双向还原校验”。在生成审查文件前，它会模拟接受和拒绝所有修改，确保能完美还原当前文本和基线文本，防止因空格或标点差异导致标记错乱。此外，它严格限制输入为纯文本，拒绝包含代码、链接或 Markdown 格式，这种“笨拙”的设计反而保证了纯文字对比的极高准确性，避免了格式干扰。

使用前需注意，该插件仅支持 100KB 以内的纯文本笔记，且不支持手机、平板及 Windows/Linux 系统。如果你的笔记包含大量代码块、表格或复杂格式，或者需要跨设备同步复杂的版本历史，此插件并不适合。它更适合在单一设备上，对短篇幅纯文字进行局部、即时的修改审查。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


