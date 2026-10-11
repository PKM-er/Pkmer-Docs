---
uid: 1791709367416000
title: 'Obsidian 插件：Habr Importer'
tags: ['第三方工具集成', '数据处理', '文件管理', 'obsidian插件']
description: 'Download Habr articles, convert to Markdown, and save into your vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Habr Importer

> [!Note] 插件名片
> - 插件名称：Habr Importer
> - 插件作者：playmean
> - 插件说明：Download Habr articles, convert to Markdown, and save into your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '数据处理', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/playmean/obsidian-habr-importer-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?habr-importer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/playmean/obsidian-habr-importer-plugin/master/README.md)



## 概述

**1. 主要功能**
该插件用于从 Habr.com 下载技术文章，自动转换为 Markdown 格式并保存至 Obsidian 库中。同时支持将文章图片下载至指定文件夹，并自动管理文件命名以避免覆盖。

**2. 适用场景**
适合经常阅读 Habr 技术博客的用户，特别是希望将优质技术文章离线归档、整理进个人知识库或进行后续笔记引用的场景。

**3. 核心特色**
*   **智能导入**：通过 URL 一键导入，自动提取标题、发布时间等元数据写入 Frontmatter。
*   **图片管理**：图片独立存储并使用哈希命名，确保唯一性且整洁。
*   **更新与归档**：支持根据 Frontmatter 链接更新现有文章，以及将旧文章归档至 `Archive` 子文件夹并记录时间。
*   **灵活配置**：可自定义图片保存路径及导入后是否自动打开笔记。

**4. 使用建议**
*   **安装注意**：目前尚未发布在官方社区插件市场，需手动下载 Release 包并放入 `.obsidian/plugins/habr-importer` 目录。
*   **操作习惯**：建议先配置好图片保存路径，保持库结构清晰；定期使用“归档”功能整理已读或过时文章，避免根目录杂乱。
*   **数据同步**：利用 Frontmatter 中的 `source` 字段，方便日后快速回溯原文或进行版本更新。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


