---
uid: 1791709371219000
title: 'Obsidian 插件：YouTube Transcript Notes'
tags: ['第三方工具集成', '自动化与AI', '文字处理', 'obsidian插件']
description: 'Save a public YouTube transcript and a grounded OpenRouter summary as linked Markdown notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：YouTube Transcript Notes

> [!Note] 插件名片
> - 插件名称：YouTube Transcript Notes
> - 插件作者：Carlo
> - 插件说明：Save a public YouTube transcript and a grounded OpenRouter summary as linked Markdown notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '自动化与AI', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/blossomz37/youtube-transcript-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?youtube-transcript-notes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/blossomz37/youtube-transcript-obsidian/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户将公开的 YouTube 视频链接导入 Obsidian，自动生成包含完整字幕（Transcript）和基于 OpenRouter AI 生成的摘要（Summary）的 Markdown 笔记。支持单独导入字幕、单独生成摘要或同时创建两者，并自动建立笔记间的链接。

**2. 适用场景**
适用于需要快速整理 YouTube 视频内容的知识工作者、学生或研究人员。特别适合将长视频转化为可检索、可编辑的结构化笔记，便于后续复习、引用或二次创作。仅限桌面版 Obsidian 使用。

**3. 核心特色**
*   **零依赖运行**：无需安装 Python、服务器或额外的 Node.js 环境，直接利用 Obsidian 内置的 Node HTTPS 支持。
*   **AI 增强**：通过 OpenRouter API 调用大模型生成高质量摘要，支持配置模型及搜索功能。
*   **结构清晰**：生成的摘要笔记包含嵌入式视频播放器、字幕链接及 AI 总结文本，便于快速回顾。
*   **独立安全**：拥有独立插件 ID，不冲突其他插件；API 密钥通过 Obsidian 安全选择器管理，不硬编码。

**4. 使用建议**
*   **环境准备**：确保 Obsidian 版本在 1.12.3 以上，并提前在 OpenRouter 创建 API Key。
*   **设置配置**：在插件设置中指定笔记保存文件夹，并配置好 OpenRouter 模型。建议先点击“Test settings”测试连接及费用。
*   **操作技巧**：通过侧边栏图标或命令面板导入 URL，根据需求选择“仅字幕”、“仅摘要”或“两者”。注意摘要生成会产生少量 API 费用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


