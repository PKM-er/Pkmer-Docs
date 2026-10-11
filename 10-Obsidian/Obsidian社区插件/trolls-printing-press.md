---
uid: 1791709370570000
title: 'Obsidian 插件：Trolls Printing Press'
tags: ['图片与PDF', '文字处理', '样式与美化', '效率工具', 'obsidian插件']
description: 'Create print-ready session notes, reference sheets, index cards, and booklets from Markdown. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Trolls Printing Press

> [!Note] 插件名片
> - 插件名称：Trolls Printing Press
> - 插件作者：Daren Thomas
> - 插件说明：Create print-ready session notes, reference sheets, index cards, and booklets from Markdown. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '文字处理', '样式与美化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/daren-thomas/trolls-printing-press)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?trolls-printing-press)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/daren-thomas/trolls-printing-press/master/README.md)



## 概述

**主要功能**
Trolls Printing Press 允许用户将 Obsidian 中的 Markdown 笔记转换为可直接打印的 PDF 文档。它内置 Typst WebAssembly 编译器，支持生成会议记录、参考表、索引卡、A5 书籍及小册子，保持 Markdown 为唯一数据源，确保布局可复现。

**适用场景**
专为桌面角色扮演（TRPG）游戏准备、小型规则书出版及需要高质量打印输出的知识管理场景设计。

**核心特色**
1. **多样化出版配置**：提供紧凑双栏 A4 会议单、A5 阅读版 PDF、适合骑马钉装订的 A4 横向小册子，以及高密度双栏书籍模式。
2. **智能索引卡**：自动将一级标题转换为 A6 横向索引卡并合并为单一 PDF。
3. **Markdown 原生兼容**：通过简单约定控制排版，如 `✂️---` 强制分页，`title:`/`subtitle:` 设置封面标题，`![[img|wide]]` 实现跨栏图片，无需修改源码即可优化打印效果。
4. **灵活输出管理**：默认输出至笔记同级 `publishing/output` 目录，路径可配置，且双栏版本拥有独立文件名后缀，避免覆盖冲突。

**使用建议**
建议用户在 Markdown 中规范使用 frontmatter 定义标题，利用 `✂️---` 手动控制分页以优化版面。对于长列表或密集内容，可选择双栏模式以节省纸张。打印前请检查图片尺寸，避免跨页断裂影响阅读体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


