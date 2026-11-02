---
uid: 1793625614242001
title: "Obsidian 插件：Inline Diff"
tags: ["编辑工具", "效率工具", "文字处理", "obsidian插件"]
description: "Review proposed changes with rendered before and after comparisons, then accept or reject individual edits. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Inline Diff

> [!Note] 插件名片
> - 插件名称：Inline Diff
> - 插件作者：Deepal Jayasekara
> - 插件说明：Review proposed changes with rendered before and after comparisons, then accept or reject individual edits. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '效率工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/deepal/obsidian-inline-diff)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inline-diff)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/deepal/obsidian-inline-diff/master/README.md)



## 概述

Inline Diff 专为审查 AI 代理或自动化脚本对笔记提出的修改建议而设计。它能在笔记中直接渲染出修改前后的对比视图，让你直观地看到每一处变动的具体内容。你无需在复杂的代码标记中猜测改动，只需通过直观的视觉差异判断是否采纳，从而高效地管理由外部工具生成的编辑提案。

想象一下，当你让 AI 助手批量更新项目文档中的截止日期或状态标记时，Inline Diff 会将这些变更以高亮形式呈现。例如，表格中的“计划中”变为“可用”，或段落中的数值从 10 秒调整为 30 秒，都会清晰显示删除与新增的内容。你可以悬停查看具体的修改块，并通过鼠标或键盘独立决定接受或拒绝每一条建议，甚至支持一键处理当前笔记中的所有待办变更。

与仅显示纯文本差异的插件不同，Inline Diff 在实时预览模式下提供渲染后的堆叠对比，既保留了阅读体验，又确保了编辑的准确性。它深度集成 Obsidian 的原生撤销历史，任何操作都可通过一次撤销恢复，且具备防冲突机制，若笔记已被其他操作修改，插件会拒绝执行以避免覆盖最新内容。此外，它支持自定义颜色主题，并能在分屏或弹出窗口中独立显示审查状态栏。

需要注意的是，该插件仅支持桌面版 Obsidian 1.14.5 及以上版本，移动端暂不支持。它主要服务于审查已生成的修改提案，而非直接提供 AI 生成内容的能力。如果你的工作流不涉及外部代理或脚本对笔记的批量修改，或者你更倾向于手动逐字编辑而非批量审查，那么这款插件可能并非必需。此外，其存储语法基于 CriticMarkup 风格，其他 Markdown 应用可能无法正确解析这些待审标记。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


