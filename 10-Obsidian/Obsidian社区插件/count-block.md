---
uid: 1791709366287000
title: 'Obsidian 插件：Count Block'
tags: ['编辑工具', '文字处理', '效率工具', 'obsidian插件']
description: 'Add editable text blocks with a live count beneath them. Supports customizable metrics, including NEIS bytes! - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Count Block

> [!Note] 插件名片
> - 插件名称：Count Block
> - 插件作者：Jongwoo Lee
> - 插件说明：Add editable text blocks with a live count beneath them. Supports customizable metrics, including NEIS bytes! - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lee-jongwoo/count-block)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?count-block)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lee-jongwoo/count-block/master/README.md)



## 概述

**1. 主要功能**
Count Block 插件允许在 Obsidian 笔记中插入可编辑的文本块，并在块下方实时显示字数统计。它本质上是一个语言标记为 `count` 的代码块，支持多种统计指标，包括单词数、字符数（含/不含空格）、UTF-8 字节数以及韩国学校特有的 NEIS 字节计数标准。

**2. 适用场景**
适用于需要严格控制文本长度的写作场景，如撰写摘要、社交媒体帖子、考试作文或任何有字数限制的内容。特别适合需要即时反馈是否超出或低于指定字数范围的创作者。

**3. 核心特色**
- **原生集成**：直接嵌入 Markdown 代码块，无需外部存储，数据完全保存在 Vault 内。
- **灵活配置**：支持全局默认设置，也可通过内联选项（如 `metric=`, `min=`, `max=`）为单个块自定义指标和字数边界。
- **视觉反馈**：当文本字数超出设定的最小或最大限制时，底部计数器会变红警示，确保内容合规。
- **快速操作**：提供专用命令，可快速插入新块或包裹选中文本。

**4. 使用建议**
建议在插件设置中预设常用的默认字数范围（如摘要的 100-200 字）。在代码块起始围栏处使用 `metric=` 指定统计方式，用 `min=` 和 `max=` 设定边界。注意，配置错误（如最小值大于最大值）会在底部显示错误提示。适合习惯用代码块管理结构化内容的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


