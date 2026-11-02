---
uid: 1793625620045000
title: "Obsidian 插件：Persistent Folded State"
tags: ["效率工具", "文件管理", "编辑工具", "obsidian插件"]
description: "Preserves your folded and unfolded blocks and tasks in a note across external file modifications (an AI agent, another program, a git pull or a sync tool) and across quitting and relaunching Obsidian. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Persistent Folded State

> [!Note] 插件名片
> - 插件名称：Persistent Folded State
> - 插件作者：Dan
> - 插件说明：Preserves your folded and unfolded blocks and tasks in a note across external file modifications (an AI agent, another program, a git pull or a sync tool) and across quitting and relaunching Obsidian. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '文件管理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/danrfletcher/obsidian-persistent-folded-state)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?persistent-folded-state)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/danrfletcher/obsidian-persistent-folded-state/master/README.md)



## 概述

Persistent Folded State 旨在解决笔记折叠状态在外部修改或重启后丢失的痛点。它通过记录具体的文本块而非行号来保存折叠信息，确保当 AI 代理、同步工具或 Git 操作在 Obsidian 外部修改文件，以及应用重启后，你精心整理的折叠视图依然完整保留，无需每次重新手动折叠。

想象一下，你正在阅读一篇长文，折叠了不需要的章节，此时同步工具更新了文件内容，或者你关闭并重新打开了 Obsidian。通常这些操作会重置所有折叠，但使用该插件后，那些被折叠的标题和任务列表会自动恢复原状。即使某些段落被 AI 改写或位置微调，插件也能通过文本匹配准确找回并应用之前的折叠状态。

相比同类插件，其核心特色在于强大的容错匹配机制。它优先匹配块文本，其次匹配父级下的位置，最后参考相似文本，因此即使内容发生轻微变动或移动，折叠状态仍能正确恢复。此外，它支持在嵌入块（如 `![[Note#Heading]]`）中保存和恢复折叠状态，并能在笔记重命名或移动时自动携带存储的折叠数据，无需手动干预。

需要注意的是，折叠状态仅存储在当前设备的本地数据中，不会通过 Obsidian Sync 同步到其他设备，因此多设备用户需各自维护状态。此外，插件对单个笔记最多处理 500 个折叠项，且对于渲染文本与源码差异过大的嵌入块，可能无法记录折叠状态。如果你需要跨设备同步折叠视图，或笔记结构极其复杂导致匹配失败，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


