---
uid: 1793625607974000
title: "Obsidian 插件：Block Drag Links"
tags: ["模板与链接处理", "编辑工具", "效率工具", "obsidian插件"]
description: "Drag a heading or a block to another note to insert a link or an embed to it, and add a block ID to the source when it has none. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Block Drag Links

> [!Note] 插件名片
> - 插件名称：Block Drag Links
> - 插件作者：theluckystrike
> - 插件说明：Drag a heading or a block to another note to insert a link or an embed to it, and add a block ID to the source when it has none. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/block-drag-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?block-drag-links)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/block-drag-links/master/README.md)



## 概述

Block Drag Links 旨在解决 Obsidian 原生功能中无法直接拖拽段落、列表项或引用块生成链接的痛点。该插件允许用户将编辑器中的标题或特定内容块直接拖拽至另一篇笔记，自动插入指向源内容的链接或嵌入代码。若源内容原本没有块 ID，插件会在拖拽时自动为其生成并添加，确保链接的持久性和准确性。

典型场景包括在撰写草稿时，需要引用研究笔记中的某段具体论述。你只需将鼠标悬停在该段落左侧，出现手柄后将其拖入草稿，即可瞬间生成 `[[Research#^k3x9qa]]` 这样的链接。若按住 Ctrl（macOS 为 Cmd）键释放，则直接插入嵌入代码，在实时预览中直接显示原文内容，无需手动复制粘贴或查找块 ID。

相比其他同类插件，Block Drag Links 的核心特色在于其“拖拽即链接”的直观交互，且严格遵循 Obsidian 的链接规范。它支持对已有 ID 的块直接复用，避免重复生成；对于标题链接，会自动清理特殊字符以符合核心链接规则。此外，插件在写入 ID 前会校验内容是否变更，防止因编辑冲突导致数据错误，这种安全性在同类工具中较为少见。

需要注意的是，该插件仅支持桌面端，手机或平板用户无法使用。它不支持从阅读视图、搜索结果或画布中拖拽，手柄仅出现在编辑器的实时预览或源码模式下。代码块、数学公式、脚注及笔记属性等区域因安全原因不支持拖拽生成 ID。若你主要依赖移动端笔记，或习惯通过搜索而非拖拽来建立引用，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


