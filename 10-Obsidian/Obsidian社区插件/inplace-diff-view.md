---
uid: 1791709367763000
title: 'Obsidian 插件：In-place Diff View'
tags: ['编辑工具', '文字处理', '效率工具', 'obsidian插件']
description: 'Renders {old | new} and {note|...} correction markers with a hover tooltip to accept, reject, or delete them. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：In-place Diff View

> [!Note] 插件名片
> - 插件名称：In-place Diff View
> - 插件作者：glech
> - 插件说明：Renders {old | new} and {note|...} correction markers with a hover tooltip to accept, reject, or delete them. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/glechic/inplace-diff-view)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inplace-diff-view)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/glechic/inplace-diff-view/master/README.md)



## 概述

**1. 主要功能**
该插件在 Obsidian 中渲染“原位差异”标记，支持将 `{old | new}` 修正显示为红色删除线转绿色新文本，将 `{note|...}` 显示为蓝色笔记芯片，并支持插入/删除标记。用户可通过悬停标记访问工具提示，执行“接受新文本”、“保留旧文本”或“删除笔记”操作，所有变更以可撤销事务写入。

**2. 适用场景**
适用于配合 AI 智能体或人工校对工作流。当 AI 对笔记副本进行润色或纠错后，生成特定语法的差异标记，用户可在 Obsidian 中直观审查并批量处理这些修改，实现高效的内容审核。

**3. 核心特色**
- **直观可视化**：红绿对比修正、蓝色芯片笔记，视觉清晰。
- **交互便捷**：悬停即现操作菜单，支持单条处理及“全部接受/保留/删除”命令。
- **安全稳健**：变更支持 ⌘Z 撤销，自动保护 Frontmatter 和代码块，仅在 Live Preview 和阅读视图生效，且光标处保持原始标记以便编辑。

**4. 使用建议**
该插件仅负责渲染，需由 AI 或人工按特定语法生成标记。建议将其与具备文本编辑能力的 AI 代理配合使用，先让 AI 输出带标记的文本，再在 Obsidian 中通过此插件进行最终确认和清理，从而提升笔记校对的效率与准确性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


