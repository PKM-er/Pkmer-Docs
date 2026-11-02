---
uid: 1793625613845000
title: "Obsidian 插件：HTML Frontmatter"
tags: ["编辑工具", "文件管理", "效率工具", "obsidian插件"]
description: "Edit HTML metadata with native Properties and include it in the vault property catalog. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：HTML Frontmatter

> [!Note] 插件名片
> - 插件名称：HTML Frontmatter
> - 插件作者：loonghappy
> - 插件说明：Edit HTML metadata with native Properties and include it in the vault property catalog. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/thhapp/obsidian-html-frontmatter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?html-frontmatter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/thhapp/obsidian-html-frontmatter/master/README.md)



## 概述

HTML Frontmatter 让 Obsidian 原生属性面板直接管理 HTML 文件的元数据。它无需创建伴生 Markdown 文件或依赖第三方 HTML 插件，而是将属性以 JSON 数据块形式直接嵌入 HTML 文件内部。你可以像编辑普通笔记一样，使用原生控件添加、重命名或删除文本、列表、日期、标签等属性，所有修改都会安全地保存回 HTML 源文件中，且不会破坏原有的样式或脚本内容。

典型场景包括管理个人知识库中的 HTML 模板或静态页面。例如，当你维护一个包含多个 HTML 页面的项目时，可以为每个页面添加“项目状态”或“最后更新”属性，并通过原生属性视图快速筛选。另一个例子是，如果你习惯用 HTML 编写阅读笔记，现在可以直接在 Obsidian 中为这些笔记打上标签或设置复习计划，无需切换到其他编辑器。

相比其他方案，该插件的核心特色在于将 HTML 属性完全纳入 Obsidian 的全库属性目录。这意味着 HTML 文件中的属性会与 Markdown 笔记的属性一起显示在全局目录中，并统计出现次数，支持属性值建议。此外，它能在文件移动、删除或排除规则变更后自动刷新目录，确保元数据索引的实时性。这种深度集成让 HTML 笔记不再是孤岛，而是真正融入了 Obsidian 的元数据管理体系。

需要注意的是，该插件目前处于预览阶段，仅支持桌面版 Obsidian 1.14.4，且经过 Windows 环境验证。它不支持跨库重命名或删除涉及 HTML 的属性，也不将 HTML 标签集成到原生标签侧边栏。此外，插件不负责渲染 HTML 内容，也不支持图谱链接、反向链接或 Bases 功能。如果你需要复杂的 HTML 渲染或跨版本兼容性，此插件可能不适合你。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


