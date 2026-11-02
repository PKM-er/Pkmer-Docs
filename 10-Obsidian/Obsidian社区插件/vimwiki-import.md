---
uid: 1793625624273001
title: "Obsidian 插件：Vimwiki Import"
tags: ["文字处理", "文件管理", "第三方工具集成", "obsidian插件"]
description: "Convert default Vimwiki pages into Markdown notes with working local links. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vimwiki Import

> [!Note] 插件名片
> - 插件名称：Vimwiki Import
> - 插件作者：theluckystrike
> - 插件说明：Convert default Vimwiki pages into Markdown notes with working local links. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '文件管理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/vimwiki-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vimwiki-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/vimwiki-import/master/README.md)



## 概述

Vimwiki Import 专为从 Vimwiki 迁移至 Obsidian 的用户设计，核心功能是将 Vault 内已有的 `.wiki` 页面转换为标准的 Markdown 笔记。它支持标题、基础列表、任务项、代码块及本地 Wiki 链接的自动转换，并保留相对文件夹路径。转换前提供预览界面，让你检查输出路径与文本内容，确保源文件保持原样以便对比，避免直接覆盖导致的数据丢失。

典型场景适用于整理旧有的 Vimwiki 知识库。例如，你可以将 `Wiki/diary/` 下的日记文件批量导入到 Obsidian 的 Daily Notes 文件夹，实现日期格式的自动映射；或者将项目文档从 `Projects/` 目录迁移至 `Notes/`，同时确保 `[[b|Label]]` 这样的链接正确指向新的 Markdown 文件，无需手动修复断链。

相比其他迁移工具，该插件强调“默认语法”模式的明确选择，防止误转 Markdown 或媒体模式文件。它具备严格的路径安全检查，拒绝处理包含不支持字符或超出 Vault 范围的路径。此外，导入后会生成详细的 Markdown 报告，列出已创建路径及需人工审查的语法警告，如未闭合的代码块或无法解析的链接，帮助用户精准定位问题。

使用前请注意，该插件仅处理默认 `.wiki` 语法，Markdown 模式和媒体模式不在支持范围内。图片、附件、表格及锚点等复杂元素需手动调整，且附件不会被自动复制。如果你使用的是非默认 Vimwiki 配置，或希望自动处理外部网络链接请求，此插件并不适合。建议先备份 Vault，并在小范围测试后确认转换效果，再执行全量导入。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


