---
uid: 1793625613557000
title: "Obsidian 插件：Hangul Manuscript"
tags: ["文字处理", "编辑工具", "学术与科研", "obsidian插件"]
description: "Write Korean manuscripts: corner-bracket input, auto-renumbered footnotes, paragraph styles, manuscript count, and HWPX export with real footnotes. A port of the VS Code extension HanMark by gkman1. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hangul Manuscript

> [!Note] 插件名片
> - 插件名称：Hangul Manuscript
> - 插件作者：hw725
> - 插件说明：Write Korean manuscripts: corner-bracket input, auto-renumbered footnotes, paragraph styles, manuscript count, and HWPX export with real footnotes. A port of the VS Code extension HanMark by gkman1. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hw725/hangul-manuscript)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hangul-manuscript)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hw725/hangul-manuscript/master/README.md)



## 概述

Hangul Manuscript 专为在 Obsidian 中撰写韩文原稿的用户设计，核心功能包括韩文角括号（「」『』）的智能输入、脚注的自动编号管理、段落样式快速切换，以及基于 200 字原稿纸的篇幅统计。它解决了在 Markdown 环境中处理韩文排版细节的痛点，让写作过程更贴近传统韩文文档的编辑体验，无需频繁切换工具即可处理复杂的韩文标点与格式需求。

典型使用场景包括撰写学术论文或长篇小说。例如，在写作过程中，你可以直接输入方括号，插件会根据上下文自动将其转换为韩文角括号，同时保护 Obsidian 的链接和嵌入语法不被误改；当需要添加脚注时，插入后系统会自动调整后续脚注的编号顺序，确保引用逻辑清晰。此外，状态栏会实时显示当前文档相当于多少张 200 字原稿纸，方便你快速把控篇幅进度。

相比同类插件，其最大特色在于能够导出为 HWPX 格式，并保留真正的韩文脚注/尾注对象及图片嵌入，而非简单的文本转换。这意味着导出的文件在 Hancom Office 中打开时，脚注格式、图片位置和段落样式均能完美还原，极大提升了与韩文出版流程的兼容性。此外，它还提供了半角/全角字符的一键批量转换功能，有助于清理从 OCR 或日文资料中混入的格式错误。

使用前需注意，该插件不预设默认快捷键，用户需手动在设置中配置以匹配个人习惯；且脚注重排和 HWPX 导出仅在执行显式保存命令（如 Ctrl+S）时触发，以避免自动保存导致的干扰。它不适合需要频繁双向编辑 HWPX 文件的场景，因为导出是单向的，HWPX 中的修改会被覆盖；若你主要使用英文写作或不需要韩文特有的角括号排版，此插件可能并非必需。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


