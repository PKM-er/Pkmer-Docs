---
uid: 1791709369835000
title: 'Obsidian 插件：Secret Copy'
tags: ['安全与隐私', '编辑工具', '效率工具', 'obsidian插件']
description: 'Blurs {{secrets}} in your notes and adds a one-click copy button. Reveal on hover, copy without showing the value on screen. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Secret Copy

> [!Note] 插件名片
> - 插件名称：Secret Copy
> - 插件作者：lordhelmchen
> - 插件说明：Blurs {{secrets}} in your notes and adds a one-click copy button. Reveal on hover, copy without showing the value on screen. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lordheimchen/obsidian-secret-copy)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?secret-copy)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lordheimchen/obsidian-secret-copy/master/README.md)



## 概述

**Secret Copy** 是一款用于 Obsidian 的隐私保护插件，主要功能是将笔记中用 `{{双花括号}}` 包裹的敏感信息（如密码、API Key）默认模糊显示，并提供一键复制按钮。

**适用场景**：
适合在共享屏幕、公开演示或周围有人围观时，保护笔记中的敏感数据不被窥视。

**核心特色**：
1. **视觉隐藏**：内容默认模糊，鼠标悬停可临时查看，点击 `⎘` 图标即可复制且无需在屏幕上明文显示。
2. **全模式兼容**：支持阅读视图、实时预览、源码模式及表格，且能精确复制包含特殊字符的值。
3. **智能识别**：自动忽略代码块内的语法及 Obsidian 核心模板占位符，支持与普通高亮语法共存。

**使用建议**：
请在笔记中将敏感值用 `{{ }}` 包裹。注意该插件仅做视觉遮挡，**不提供加密**，文件底层仍为明文，因此不能替代密码管理器。它主要用于防止物理层面的偷看，对于数据静态存储的安全，仍建议将高敏感凭证存入专业密码管理工具中。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


