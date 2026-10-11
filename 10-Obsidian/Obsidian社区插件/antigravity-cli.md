---
uid: 1791709365329000
title: 'Obsidian 插件：Antigravity CLI'
tags: ['自动化与AI', '文字处理', '第三方工具集成', '编辑工具', 'obsidian插件']
description: 'Process notes with Gemini 3.8 Flash through the locally installed Antigravity CLI (agy). Summarize, translate, rewrite, or chat about the current note or selection and write the result back into your vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Antigravity CLI

> [!Note] 插件名片
> - 插件名称：Antigravity CLI
> - 插件作者：Jason
> - 插件说明：Process notes with Gemini 3.8 Flash through the locally installed Antigravity CLI (agy). Summarize, translate, rewrite, or chat about the current note or selection and write the result back into your vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '第三方工具集成', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jsun2020/Obsidian-antigravitycli)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?antigravity-cli)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jsun2020/Obsidian-antigravitycli/master/README.md)



## 概述

**Antigravity CLI** 是一款通过本地安装的 Antigravity CLI 调用 Gemini 3.8 Flash 等模型，在 Obsidian 中处理笔记的插件。

**主要功能**：支持对当前笔记或选中文本执行摘要、翻译、重写、提取关键点及生成标题标签等预设操作。结果可灵活处理，包括复制、插入、替换选区、追加、新建笔记或写入 Frontmatter。此外，提供多标签页流式回复的聊天功能，支持批量处理文件夹内所有笔记。

**适用场景**：适用于需要快速整理、多语言转换或批量优化笔记内容的用户，特别适合依赖 Google 生态且注重数据本地处理的知识工作者。

**核心特色**：
1. **隐私安全**：直接调用本地 `agy` 命令行工具，无需在 Obsidian 中存储 API 密钥或依赖代理，复用 CLI 自身的登录状态。
2. **灵活集成**：结果可直接写回 Vault，支持多种写入方式，无缝融入工作流。
3. **批量效率**：支持文件夹级批量执行预设任务，大幅提升处理效率。

**使用建议**：
1. 仅限桌面版 Obsidian（1.7.2+）使用。
2. 需预先安装并登录 Antigravity CLI，确保终端中 `agy models` 能正常显示模型列表。
3. 插件未通过官方人工审查，建议从社区插件市场或 BRAT 安装，使用前请确认 CLI 环境配置无误。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


