---
uid: 1791709367388000
title: 'Obsidian 插件：Grimmory Sync'
tags: ['第三方工具集成', '数据处理', '效率工具', 'obsidian插件']
description: 'Sync book highlights and notes from a self-hosted Grimmory instance into your vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Grimmory Sync

> [!Note] 插件名片
> - 插件名称：Grimmory Sync
> - 插件作者：medusero
> - 插件说明：Sync book highlights and notes from a self-hosted Grimmory instance into your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/medusero/grimmory-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?grimmory-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/medusero/grimmory-obsidian-plugin/master/README.md)



## 概述

**Grimmory Sync** 是一款将自托管 Grimmory 实例中的书籍高亮与笔记同步至 Obsidian 库的插件。

**主要功能**：自动抓取并整理书籍内容，每本书生成独立的 Markdown 笔记。高亮以引用块形式呈现，下方附带对应笔记，并按章节及书中位置排序。

**适用场景**：适用于使用自托管 Grimmory 管理阅读笔记，并希望将数据无缝集成到 Obsidian 进行二次编辑或知识管理的用户。支持桌面端与移动端。

**核心特色**：
1. **增量同步保护**：仅重写笔记中 `gs:start` 和 `gs:end` 标记之间的“管理区域”，保留用户手动添加的前言、元数据（Frontmatter）及其他自定义内容，避免覆盖个人修改。
2. **结构化输出**：自动按章节分组，保持阅读逻辑清晰。
3. **社区插件**：虽未经 Obsidian 官方人工审核，但已通过自动化检查，安装与更新流程正常。

**使用建议**：
1. 确保本地已部署并运行 Grimmory 实例。
2. 在 Obsidian 设置中配置正确的 Base URL。
3. 同步前请检查笔记结构，避免在管理标记区间内手动输入关键内容，以防被覆盖。
4. 注意该插件为非官方社区作品，使用前建议备份重要数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


