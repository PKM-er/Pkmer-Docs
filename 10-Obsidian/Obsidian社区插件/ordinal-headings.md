---
uid: 1793625619614000
title: "Obsidian 插件：Ordinal Headings"
tags: ["样式与美化", "编辑工具", "文字处理", "obsidian插件"]
description: "Live Word-style numbering for Heading 1–6 with presets and custom patterns (visual by default). - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ordinal Headings

> [!Note] 插件名片
> - 插件名称：Ordinal Headings
> - 插件作者：aceofspadesomelette
> - 插件说明：Live Word-style numbering for Heading 1–6 with presets and custom patterns (visual by default). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编辑工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/aceofspadesomelette/ordinal-headings)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ordinal-headings)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/aceofspadesomelette/ordinal-headings/master/README.md)



## 概述

Ordinal Headings 为 Obsidian 笔记提供类似 Word 的自动层级编号功能，支持从一级到六级标题。其核心机制是“视觉优先”，即在编辑和阅读视图中动态显示编号，但默认不修改 Markdown 源文件，保持笔记内容整洁。当需要固定编号时，可通过“烘焙”命令将数字写入当前笔记，并支持随时移除已写入的编号，实现灵活的内容管理。

典型场景包括撰写结构化文档或准备导出 PDF。例如，在整理长篇报告时，你可以实时查看“1.1”、“2.3”等层级关系，确保逻辑清晰；在最终导出前，执行烘焙命令将编号固化到文本中，确保打印版或发布版包含正确的章节号。此外，若笔记中已手动输入了数字前缀，插件会自动跳过视觉显示，避免重复。

相比其他同类插件，Ordinal Headings 提供了丰富的预设样式，包括十进制、括号式、经典大纲以及中文“第X章”格式，并允许通过自定义令牌构建独特格式。它支持通过 Frontmatter 对单篇笔记进行独立配置，如关闭编号、切换样式或指定起始数字，无需全局修改设置。此外，插件能智能识别并忽略由 Better Export PDF 等工具注入的文件名标题，防止编号冲突。

使用前需注意，视觉编号仅在 Live Preview 和 Reading 视图生效，且烘焙操作仅针对当前打开的笔记，不会批量处理整个库。如果你需要实时在输入过程中自动插入数字，或者希望插件自动同步整个 Vault 的编号，此插件并不适合。它更适合那些重视 Markdown 源码纯净度，且习惯手动控制何时将格式固化到文本中的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


