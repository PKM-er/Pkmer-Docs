---
uid: 1793625612918000
title: "Obsidian 插件：Finder PDF"
tags: ["图片与PDF", "文件管理", "效率工具", "obsidian插件"]
description: "Export Markdown files from Finder with the native PDF renderer, including files outside your vault. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Finder PDF

> [!Note] 插件名片
> - 插件名称：Finder PDF
> - 插件作者：roy
> - 插件说明：Export Markdown files from Finder with the native PDF renderer, including files outside your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/schnee013/obsidian-finder-pdf)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?finder-pdf)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/schnee013/obsidian-finder-pdf/master/README.md)



## 概述

Finder PDF 允许用户直接在 macOS 访达中导出 Markdown 文件为 PDF，无需将笔记导入 Obsidian 库或打开应用窗口。它利用 Obsidian 的原生渲染引擎，确保生成的 PDF 样式、主题及插件效果与库内导出完全一致。该功能通过访达右键菜单中的快速操作触发，支持处理库外部的任意文件夹中的 `.md` 或 `.markdown` 文件，极大简化了从文件系统直接生成文档的流程。

典型场景包括整理散落在桌面或下载文件夹中的独立笔记，或批量导出项目文档。例如，当你有一组未纳入 Obsidian 管理的会议记录时，只需在访达中选中这些文件，右键选择“Export PDF with Obsidian”，即可在源文件旁生成同名 PDF。若文件名冲突，插件会自动添加序号（如 `name(1).pdf`）保存，无需手动干预或弹窗确认，适合快速归档或分享。

相比其他导出工具，Finder PDF 的核心优势在于“无侵入性”与“背景运行”。它不修改源 Markdown 文件，也不覆盖已有 PDF，且当目标库已在后台运行时，导出过程不会激活 Obsidian 主窗口，保持工作流专注。此外，它没有独立的设置页面或后台服务，完全依赖库现有的导出配置，减少了维护成本。对于需要保持桌面整洁、避免频繁切换应用的用户，这种轻量级的集成方式尤为实用。

使用前需注意，该插件仅限 macOS 系统，且依赖 Obsidian 1.14.4 及以上版本。首次使用需通过 Python 脚本生成访达快捷操作，并手动在系统设置中启用。若 Obsidian 未运行，冷启动时可能会短暂显示主窗口，建议保持目标库在后台运行以隐藏界面。此外，插件不扫描全盘，仅处理选中的文件，且外部图片链接受限于原生解析权限。如果你需要跨平台支持、自动全盘扫描或复杂的排版定制，此插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


