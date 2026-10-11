---
uid: 1791709365263000
title: 'Obsidian 插件：AI PM Tool'
tags: ['自动化与AI', '任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Turn requirement notes into a live project overview: parse frontmatter, sync SVN snapshots, track milestone progress with AI reminders, and send milestone emails. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI PM Tool

> [!Note] 插件名片
> - 插件名称：AI PM Tool
> - 插件作者：caesarloo
> - 插件说明：Turn requirement notes into a live project overview: parse frontmatter, sync SVN snapshots, track milestone progress with AI reminders, and send milestone emails. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '任务管理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/caesarloo/ai-pm-tool)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-pm-tool)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/caesarloo/ai-pm-tool/master/README.md)



## 概述

**主要功能**
AI PM Tool 是一款桌面端 Obsidian 插件，旨在通过 LLM 自动化项目管理流程。它能解析笔记 Frontmatter 生成实时项目概览，利用 SVN 快照同步历史记录，追踪里程碑进度，并在关键节点通过 AI 生成提醒及发送里程碑邮件。

**适用场景**
适用于使用 Obsidian 进行需求管理和项目跟踪的个人开发者或小型团队，特别是那些习惯将需求文档作为任务载体，并依赖 SVN 进行版本控制的用户。

**核心特色**
1. **人机协作安全机制**：LLM 仅负责分析与提醒，所有写入操作（如更新 Frontmatter、创建笔记）均需人工确认，确保数据可控。
2. **SVN 深度集成**：通过安全的命令行调用实现快照同步与提交，支持输入验证以防注入攻击。
3. **隐私透明**：明确披露权限，仅在用户主动触发时执行 Shell 命令，且仅扫描指定目录下的 Markdown 文件。
4. **模板联动**：支持调用 Templater 插件 API，快速将需求模板实例化为新笔记。

**使用建议**
使用前请确保系统已安装 SVN 客户端。建议在设置中严格限定需求与模板目录范围，以优化扫描效率并保护隐私。对于 SMTP 邮件功能，仅在配置并点击发送时才会产生网络请求。注意该插件未经 Obsidian 官方人工审核，请谨慎评估其安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


