---
uid: 1793625614804000
title: "Obsidian 插件：Linearis"
tags: ["界面优化", "样式与美化", "编辑工具", "obsidian插件"]
description: "Linearis: source-line gutters on the left or right of your notes in editor and reading mode. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Linearis

> [!Note] 插件名片
> - 插件名称：Linearis
> - 插件作者：aceofspadesomelette
> - 插件说明：Linearis: source-line gutters on the left or right of your notes in editor and reading mode. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '样式与美化', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/aceofspadesomelette/obsidian-linearis)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?linearis)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/aceofspadesomelette/obsidian-linearis/master/README.md)



## 概述

Linearis 为 Obsidian 笔记提供基于 Markdown 源码的行号显示功能，支持在编辑和阅读模式下于左侧或右侧展示行号栏。它严格遵循笔记的原始 Markdown 结构进行编号，确保每一行源码都有对应的数字标识。该插件兼容桌面端与移动端，允许用户根据习惯选择行号位置或完全关闭，并在行号与正文之间保留细微边距，避免文字被遮挡，从而在保持界面整洁的同时提供精确的行位置参考。

典型使用场景包括代码片段调试或长文档定位。例如，当你在笔记中嵌入一段复杂的代码时，行号能帮助你快速定位特定逻辑行；或者在撰写长篇论文时，若需引用某段文字的具体位置，阅读模式下的行号能直接显示该渲染块起始的源码行号，方便与原始文本对照。对于跨越多行的表格，插件会显示表格起始行的行号，而非为每一行重复编号，保持了视觉上的简洁。

相比其他仅显示简单序号的插件，Linearis 的特色在于其“源码行”逻辑。在编辑模式下，即使空行也会被编号，且自动换行的长行仅在第一行显示一个数字，避免了视觉混乱。在阅读模式下，它智能地映射渲染块与源码行的关系，而非简单地为每个视觉元素编号。此外，插件提供了便捷的命令面板操作，允许用户通过快捷键快速循环切换行号的左、右或关闭状态，无需频繁进入设置页面调整。

使用前需注意，行号是基于 Markdown 源码计算的，因此所见行号可能与纯文本编辑器中的行号存在差异，特别是在处理复杂格式时。该插件主要服务于需要精确行定位的用户，如程序员或严谨的学术研究者。如果你只是普通用户，对行号没有特定需求，或者更倾向于使用 Obsidian 原生的折叠功能而非行号导航，那么安装此插件可能并非必要。它不提供代码高亮或语法检查功能，仅专注于行号显示这一单一职责。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


