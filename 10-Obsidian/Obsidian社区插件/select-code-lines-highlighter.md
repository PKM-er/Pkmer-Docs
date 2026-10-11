---
uid: 1791709369855000
title: 'Obsidian 插件：Select Code Lines Highlighter'
tags: ['样式与美化', '编程与脚本', '编辑工具', 'obsidian插件']
description: 'Highlight selected lines in fenced code blocks without modifying the code itself. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Select Code Lines Highlighter

> [!Note] 插件名片
> - 插件名称：Select Code Lines Highlighter
> - 插件作者：Jacopo Gori
> - 插件说明：Highlight selected lines in fenced code blocks without modifying the code itself. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编程与脚本', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tc-xonor/select-code-lines-highlighter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?select-code-lines-highlighter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tc-xonor/select-code-lines-highlighter/master/README.md)



## 概述

**Select Code Lines Highlighter** 是一款专为 Obsidian 设计的代码高亮插件，主要功能是在不修改原始代码内容的情况下，对围栏代码块中的选中文本或整行进行视觉高亮。

**适用场景**：非常适合处理终端输出、Nmap 扫描结果、日志文件、堆栈跟踪及配置片段等场景。当需要强调特定代码行但又不希望为了高亮而复制或重写代码时，该插件能极大提升效率。

**核心特色**：
1. **双模式高亮**：支持“精确文本”和“整行”两种模式。精确文本高亮存储在插件本地数据中，保持笔记完全不变；整行高亮则通过紧凑的 `hl:` 围栏元数据实现。
2. **视觉独立**：无需依赖 Codeblock Customizer 等外部插件或自定义 CSS，即可在编辑器和阅读视图中直接渲染高亮背景。
3. **灵活配置**：提供黄色（重要）和红色（关键）双色高亮，支持多行选择，并能自动合并、排序及去重高亮范围，同时保留代码块原有的语言标识和格式。

**使用建议**：
- 默认模式为“精确文本”，若偏好传统行高亮，请在设置中切换为“整行”模式。
- 由于精确文本高亮数据存储在插件本地，**请务必将插件数据纳入备份**，以防数据丢失导致高亮失效。
- 可通过编辑器右键菜单快速添加或移除高亮，操作便捷。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


