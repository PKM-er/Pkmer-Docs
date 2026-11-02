---
uid: 1793625611390000
title: "Obsidian 插件：Craft Link Repair"
tags: ["模板与链接处理", "文件管理", "效率工具", "obsidian插件"]
description: "Restore Craft page links from exported note identifiers. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Craft Link Repair

> [!Note] 插件名片
> - 插件名称：Craft Link Repair
> - 插件作者：theluckystrike
> - 插件说明：Restore Craft page links from exported note identifiers. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/craft-link-repair)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?craft-link-repair)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/craft-link-repair/master/README.md)



## 概述

Craft Link Repair 专为解决从 Craft 导出到 Obsidian 后，页面链接仍指向 Craft 云端的问题。它通过读取本地导出文件夹中的 `info.json` 标识符，将原本指向 Craft 的链接转换为 Obsidian 内部的 Wiki 链接，同时支持将 `day://` 日期链接转换为标准的日期笔记链接。整个过程完全在本地进行，无需连接 Craft 账户，确保数据隐私与安全。

典型场景适用于你已将 Craft 笔记导出为 Markdown 并放入 Obsidian 库中，但发现点击链接无法跳转至本地笔记的情况。例如，当你导入了一份包含大量内部引用的项目文档，插件能自动识别 `craftdocs://` 链接并映射到对应的本地 `.md` 文件；或者在周记中，将 `day://2026-10-12` 自动转为指向 `2026-10-12` 笔记的链接，方便后续建立日期索引。

相比其他导入工具，该插件的核心特色在于“预览-修复”机制。它不会直接修改原始文件，而是生成带有 `.repaired` 后缀的副本，并生成详细的修复报告，列出未解析的链接和元数据冲突，让你能安全地对比源文件与修复结果。此外，它具备严格的日期校验能力，能识别无效日期并保留原链接供人工检查，避免了盲目转换带来的错误。

使用前请注意，免费版每次仅能修复 10 个笔记，且不支持参考链接、HTML 链接或加密导出文件。如果你需要处理大规模导出、自定义输出路径或自动监控新文件，需订阅 Pro 版本。该插件不替代导入过程，也不负责创建缺失的日期笔记，仅专注于链接修复。若你的导出文件结构混乱或缺少 `info.json`，此插件无法通过显示名称匹配来恢复链接，需手动处理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


