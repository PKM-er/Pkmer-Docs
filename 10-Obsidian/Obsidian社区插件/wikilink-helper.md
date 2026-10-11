---
uid: 1791709371077000
title: 'Obsidian 插件：Wikilink Helper'
tags: ['模板与链接处理', '编辑工具', '文字处理', 'obsidian插件']
description: 'Automatically adds wikilink display text or normalizes existing wikilinks. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Wikilink Helper

> [!Note] 插件名片
> - 插件名称：Wikilink Helper
> - 插件作者：ivan1248
> - 插件说明：Automatically adds wikilink display text or normalizes existing wikilinks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '编辑工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ivan1248/obsidian-wikilink-helper)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wikilink-helper)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ivan1248/obsidian-wikilink-helper/master/README.md)



## 概述

**1. 主要功能**
自动为 Obsidian 中的 Wikilink 插入显示文本，或规范化现有链接格式。支持在链接末尾输入 `|` 时自动补全显示名（可选首字母小写），并通过命令或保存操作统一链接格式（如 `[[note]]` 转为 `[[Note|note]]`）。

**2. 适用场景**
*   **文件重命名保护**：当源文件重命名时，保持链接显示文本不变，避免阅读体验突变。
*   **外部发布兼容**：解决 Obsidian 链接大小写不敏感与静态站点生成器（如 Quartz、Hugo）大小写敏感之间的冲突，防止发布后链接失效。

**3. 核心特色**
*   **智能自动化**：输入 `|` 即触发显示文本插入，支持自定义首字母大小写。
*   **格式标准化**：确保链接目标路径大小写与实际文件名严格一致，同时保留小写显示文本，兼顾美观与技术规范。
*   **灵活触发**：支持手动命令触发或绑定保存动作自动执行。

**4. 使用建议**
*   需 Obsidian v1.13.0+ 版本。
*   建议通过社区插件市场安装，或通过 BRAT 插件加载。
*   若需发布到外部网站，务必启用规范化功能，确保链接大小写与文件系统完全匹配，以避免死链。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


