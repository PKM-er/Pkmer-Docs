---
uid: 1791709367944000
title: 'Obsidian 插件：Kobo Highlight Sync'
tags: ['第三方工具集成', '数据处理', '效率工具', 'obsidian插件']
description: 'Sync Kobo e-reader highlights into your vault without ever rewriting your notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kobo Highlight Sync

> [!Note] 插件名片
> - 插件名称：Kobo Highlight Sync
> - 插件作者：musingfox
> - 插件说明：Sync Kobo e-reader highlights into your vault without ever rewriting your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/musingfox/kobo-highlight-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kobo-highlight-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/musingfox/kobo-highlight-sync/master/README.md)



## 概述

**Kobo Highlight Sync** 是一款专为 Obsidian 设计的插件，用于将 Kobo 电子书阅读器中的划线同步至笔记库。

**主要功能**：通过 USB 连接设备，自动提取 Kobo 中的划线内容并生成或更新 Markdown 笔记。每本书对应一个笔记，包含标题、作者、ISBN 等元数据，划线按章节顺序排列，并附带阅读进度标记。

**适用场景**：适合使用 Kobo 阅读器且希望将阅读笔记整合进 Obsidian 知识管理体系的用户，特别是那些在同步后仍需手动编辑、移动或重命名笔记，且担心原有内容丢失的场景。

**核心特色**：采用“增量追加”机制，绝不重写或覆盖现有笔记，确保用户自定义的内容安全保留；通过隐藏的 `%%kobo:…%%` 标记识别已同步内容，避免重复导入；具备严格的安全机制，只读设备数据库，保护受保护文件夹，且永不删除文件。

**使用建议**：同步前请确保 Kobo 已正确弹出，避免数据库未保存导致同步失败；编辑笔记时请保留划线后的隐藏标记，以便插件识别状态；若笔记位于受保护文件夹，新划线将生成独立的续篇笔记并链接回原文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


