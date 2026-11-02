---
uid: 1793625613391001
title: "Obsidian 插件：Glossary Term Audit"
tags: ["文字处理", "效率工具", "学术与科研", "obsidian插件"]
description: "Check translated paragraph pairs against approved and forbidden glossary terms. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Glossary Term Audit

> [!Note] 插件名片
> - 插件名称：Glossary Term Audit
> - 插件作者：theluckystrike
> - 插件说明：Check translated paragraph pairs against approved and forbidden glossary terms. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '效率工具', '学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/glossary-term-audit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?glossary-term-audit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/glossary-term-audit/master/README.md)



## 概述

Glossary Term Audit 是一款专注于翻译术语合规性检查的工具，旨在解决多语言文档中术语不一致的问题。它通过对比源笔记与目标笔记中的段落，依据你提供的术语表（CSV 格式），自动识别目标文本中缺失的“批准术语”或误用的“禁用术语”。该插件仅进行字面匹配，不会修改笔记内容，也不具备翻译功能，其核心价值在于提供一份精确的审查辅助报告，帮助译者快速定位需要人工复核的具体段落和词汇。

典型使用场景包括本地化项目的术语校对。例如，在将英文技术文档翻译为法文时，你可以加载包含 `pump`（源词）、`pompe`（批准译法）和 `pompa`（禁用译法）的术语表。插件会逐段比对，若目标段落中出现了 `pompa` 或缺少 `pompe`，报告将直接标记该位置。你只需点击结果下方的“打开目标”，光标便会自动跳转至对应段落，方便你立即修正。

相比其他翻译辅助工具，该插件的特色在于其严格的“字面匹配”逻辑和灵活的匹配选项。默认启用“整词匹配”，避免 `pump` 误匹配 `pumping`，同时支持忽略大小写和重音符号差异。Pro 版本还增加了文件夹批量检查和客户术语档案保存功能，允许你为不同客户预设不同的术语表，无需每次重新加载。这种设计特别适合需要频繁切换不同项目术语标准的团队。

使用前需注意，该插件仅检查 Markdown 纯文本块，标题、代码块和表格会被排除，且依赖段落顺序严格对齐。如果源文和目标文的段落数量不一致，检查将中止并提示对齐错误。它不适合用于检查语法、流畅度或语义准确性，也不支持 PDF 或富文本格式。此外，由于它不进行词形变化分析，若需检查不同变体，必须在术语表中单独列出每一行。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


