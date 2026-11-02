---
uid: 1793625613227000
title: "Obsidian 插件：Frontmatter Link Repair"
tags: ["模板与链接处理", "编辑工具", "备份与恢复", "obsidian插件"]
description: "Quote wikilinks in frontmatter. Find links without quotes in raw YAML frontmatter, preview each change, then add double quotes. It saves a restore copy first. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Frontmatter Link Repair

> [!Note] 插件名片
> - 插件名称：Frontmatter Link Repair
> - 插件作者：theluckystrike
> - 插件说明：Quote wikilinks in frontmatter. Find links without quotes in raw YAML frontmatter, preview each change, then add double quotes. It saves a restore copy first. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '编辑工具', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/frontmatter-link-repair)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?frontmatter-link-repair)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/frontmatter-link-repair/master/README.md)



## 概述

Frontmatter Link Repair 专门解决 Obsidian 笔记中 YAML 前置元数据（Frontmatter）里 Wiki 链接未加引号导致的解析问题。它扫描指定文件夹，识别出 `parent: [[Some note]]` 这类未加引号的链接，并自动将其转换为 `parent: "[[Some note]]"` 的标准格式。插件仅处理你手动编写或导入的原始文件，确保元数据符合 YAML 规范，同时保留链接文本、别名及块引用等细节不变。

典型场景包括整理大量手动创建的笔记库，或导入外部数据后修复格式。例如，当你有一批包含 `related: [[Note A]]` 的笔记时，插件会先展示修改前后的对比行，你确认无误后应用更改。另一个场景是处理包含列表项的元数据，如 `up: - [[Parent]]`，插件能正确识别并添加引号，同时保持原有的缩进和列表结构，避免破坏笔记主体内容。

相比其他格式化工具，该插件的核心特色在于“预览优先”和“安全跳过”机制。它不会盲目修改，而是先展示每一处匹配的旧行与新行，让你逐一勾选确认。对于复杂的 YAML 结构（如嵌套映射、多行值或包含特殊字符的链接），插件会明确跳过并告知原因，绝不猜测。此外，每次应用前都会自动保存原始笔记的备份副本，若笔记在预览后被其他插件修改，还会触发“预览过期”警告，防止数据覆盖。

使用前请务必手动备份整个库，因为插件没有一键撤销按钮，恢复需手动从备份副本中复制文本。它不适合处理已被 Obsidian 属性视图（Properties view）自动重构为嵌套列表的链接，也不支持修复包含逗号或引号的复杂链接。若你的笔记库极大（数千篇），需注意预览上限为 200 篇，建议分文件夹操作。Pro 版本提供预设保存和报告导出功能，但核心修复功能免费。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


