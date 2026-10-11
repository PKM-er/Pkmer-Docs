---
uid: 1791709365414000
title: 'Obsidian 插件：Attachment Steward'
tags: ['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
description: 'Organizes attachments into templated folders and filenames - never loses the original filename, never breaks links elsewhere, and catches bulk imports (e.g. from Apple Notes) the moment they land. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Attachment Steward

> [!Note] 插件名片
> - 插件名称：Attachment Steward
> - 插件作者：Miroff
> - 插件说明：Organizes attachments into templated folders and filenames - never loses the original filename, never breaks links elsewhere, and catches bulk imports (e.g. from Apple Notes) the moment they land. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/m1roff/obsidian-attachment-steward)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?attachment-steward)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/m1roff/obsidian-attachment-steward/master/README.md)



## 概述

**插件名称**：Attachment Steward

**主要功能**
该插件用于将笔记中的附件（图片、文件等）自动整理到自定义的模板文件夹和文件名结构中。它能精准处理批量导入、重命名冲突及多链接引用等复杂场景，确保附件管理既整洁又安全。

**适用场景**
适用于从 Apple Notes、Evernote 等工具批量导入 Markdown 笔记的场景，或需要长期维护大量附件且希望保持链接完整性的用户。特别适合那些经常从其他平台迁移数据、担心附件散落或链接失效的知识工作者。

**核心特色**
1. **即时捕获**：通过监控元数据缓存而非仅依赖笔记编辑事件，能在附件落盘瞬间（包括批量导入）立即执行整理，无遗漏。
2. **幂等性设计**：首次捕获并冻结“原始文件名”，后续重复应用规则不会导致文件名前缀或哈希值层层叠加，避免命名混乱。
3. **全局链接修复**：移动附件时，自动扫描并更新所有引用该文件的笔记及 Canvas 画布，确保没有任何断链。

**使用建议**
建议配置清晰的文件夹模板（如按日期或项目分类）。在批量导入外部笔记后，无需手动编辑笔记，插件会自动完成整理。若需调整规则，可放心重复运行，无需担心文件名被重复修饰。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


