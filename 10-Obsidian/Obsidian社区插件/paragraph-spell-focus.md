---
uid: 1793625619922000
title: "Obsidian 插件：Paragraph Spell Focus"
tags: ["编辑工具", "文字处理", "效率工具", "obsidian插件"]
description: "Limit native spellcheck to the paragraph under the cursor. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Paragraph Spell Focus

> [!Note] 插件名片
> - 插件名称：Paragraph Spell Focus
> - 插件作者：theluckystrike
> - 插件说明：Limit native spellcheck to the paragraph under the cursor. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/paragraph-spell-focus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?paragraph-spell-focus)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/paragraph-spell-focus/master/README.md)



## 概述

Paragraph Spell Focus 旨在解决 Obsidian 原生拼写检查在长文档中产生的视觉干扰问题。它通过限制拼写检查的范围，仅对光标所在的段落进行标记，从而屏蔽其他区域的红色波浪线。该插件不修改笔记内容，也不引入额外的词典或语言设置，而是直接调用 Obsidian 现有的原生拼写服务。其核心逻辑是将连续的非空行视为一个段落，确保列表等相邻行保持在同一检查范围内，让写作时的拼写辅助更加聚焦且不打断思路。

典型使用场景包括处理包含大量专有名词或代码片段的笔记。例如，当你在撰写技术文档时，笔记中可能包含许多未被识别的变量名或缩写，原生拼写检查会在全文中显示大量误报。启用该插件后，只有你当前正在编辑的段落会显示拼写提示，其他部分的干扰标记会被自动抑制。此外，如果你正在修改某一段落，移动光标到其他段落时，检查范围会随之动态切换，始终跟随你的编辑焦点。

相比同类插件，Paragraph Spell Focus 的特色在于其轻量级与原生集成。它不依赖外部服务器或复杂的配置，免费版本即可实现核心的段落聚焦功能，并支持通过命令快速切换聚焦状态。Pro 版本则提供了更高级的“章节聚焦”功能，允许检查范围扩展至最近的标题层级，适合编辑包含多个段落的长章节。此外，Pro 用户还可以为不同文件夹设置独立的检查规则，例如在草稿文件夹启用章节模式，而在代码文件夹关闭聚焦，实现更精细化的管理。

使用前请注意，该插件仅控制检查范围，不会自动纠正错误，且必须开启 Obsidian 的原生拼写选项才能生效。它不适用于需要全文统一拼写检查的场景，也不支持 Setext 标题格式。对于超过两百万字符的超大笔记，章节聚焦功能会自动回退到段落模式以限制性能开销。此外，插件不会改变笔记的格式、Frontmatter 或文本内容，禁用插件后所有更改均可通过正常生命周期恢复，适合追求简洁编辑体验的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


