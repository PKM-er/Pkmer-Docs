---
uid: 1793625609646001
title: "Obsidian 插件：CJK Emphasis Fix"
tags: ["样式与美化", "文字处理", "编辑工具", "obsidian插件"]
description: "Render bold and italic next to CJK punctuation, which otherwise shows up as literal asterisks. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CJK Emphasis Fix

> [!Note] 插件名片
> - 插件名称：CJK Emphasis Fix
> - 插件作者：Jiayu REN
> - 插件说明：Render bold and italic next to CJK punctuation, which otherwise shows up as literal asterisks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '文字处理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jiayuren1127/cjk-emphasis-fix)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cjk-emphasis-fix)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jiayuren1127/cjk-emphasis-fix/master/README.md)



## 概述

CJK Emphasis Fix 旨在解决 Obsidian 实时预览中，中文标点符号紧邻加粗或斜体标记时无法正确渲染的问题。由于 CommonMark 规范对标记符位置有严格限制，而中文书写习惯通常不留空格，导致 `**文字。**` 这类写法常被解析器拒绝，显示为原始星号。该插件通过扫描可见行，自动识别被拒绝的 CJK 强调语法，应用 Obsidian 原生的加粗、斜体、高亮或删除线样式，并隐藏标记符，确保文本在编辑状态下也能正常显示格式。

典型场景包括撰写包含大量中文标点的笔记时，例如在句子中间使用 `**重点。**` 进行强调，或在列表项中混合使用高亮 `==术语。==` 和后续文字。插件能即时修正这些视觉错误，让你无需中断写作去调整标点位置。此外，它还支持将标点移至标记符外部，如将 `**文字。**继续` 重写为 `**文字**。继续`，这一操作符合中文排版规范，确保笔记导出为 PDF 或在其他 Markdown 编辑器中打开时格式依然正确。

相比同类插件，其核心特色在于“主题无关性”和“源码重写”能力。它不创建自定义样式，而是复用 Obsidian 核心变量，确保任何主题下的颜色、字重和高亮背景都保持一致。同时，它提供了可选的源码重写命令，能智能处理行内代码和数学公式，避免误改。这种设计既保证了视觉一致性，又解决了跨平台兼容性问题，是早期类似插件所不具备的完整解决方案。

使用前需注意，该插件仅处理星号 `*` 和波浪线 `~` 相关的标记，不支持下划线 `_` 强调，因为这在中文笔记中极少使用。它不会自动修改你的笔记文本，源码重写需手动触发命令。阅读视图无需此插件，因为 Obsidian 已能正确渲染。如果你主要使用下划线强调，或不需要跨平台导出兼容性，仅依赖 Obsidian 默认行为可能已足够，此插件更适合对排版细节有较高要求的中文写作者。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


