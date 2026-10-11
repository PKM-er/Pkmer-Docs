---
uid: 1791709368579000
title: "Obsidian 插件：Memanto"
tags: ['自动化与AI', '文件管理', '搜索与排序', 'obsidian插件']
description: "Sync your agents' memory estate into the vault as Markdown, and recall or question it from a side pane. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Memanto

> [!Note] 插件名片
> - 插件名称：Memanto
> - 插件作者：Moorcheh.ai
> - 插件说明：Sync your agents' memory estate into the vault as Markdown, and recall or question it from a side pane. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文件管理', '搜索与排序', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/moorcheh-ai/obsidian-memanto)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?memanto)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/moorcheh-ai/obsidian-memanto/master/README.md)



## 概述

**Memanto** 是一款将 AI 编码代理（如 Claude Code、Cursor、Codex）的记忆同步至 Obsidian 库的插件，支持在侧边栏检索与问答。

**主要功能**：自动将代理学到的决策、偏好、事实及错误同步为带 Frontmatter（类型、置信度、来源）的 Markdown 笔记，并集成聊天侧边栏，支持“回忆”（列出匹配记忆）和“回答”（基于记忆生成回复）两种模式。

**适用场景**：适用于需要长期管理 AI 编程助手历史学习内容的开发者，特别是希望利用 Dataview 查询记忆、追溯代理决策逻辑或基于过往经验进行代码问答的场景。

**核心特色**：
1. **结构化同步**：笔记包含元数据，完美兼容 Dataview 查询。
2. **智能保护**：手动编辑过的笔记在后续同步中会被跳过，防止覆盖。
3. **交互灵活**：结果可直接复制或插入当前笔记，支持按时间范围或最新状态筛选。

**使用建议**：
1. **环境要求**：仅限桌面端（需 Obsidian 1.7.2+），依赖 Python 3.11+ 及本地运行的 Memanto 服务器。
2. **配置便捷**：插件不自动安装依赖，通过命令面板查看缺失项并复制安装命令；API 密钥和代理配置读取自 `~/.memanto` 目录。
3. **移动端限制**：同步的 Markdown 笔记可在移动端查看，但聊天功能因依赖本地服务器而无法使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
