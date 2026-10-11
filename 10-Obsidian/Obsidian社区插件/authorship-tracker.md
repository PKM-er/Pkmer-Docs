---
uid: 1791709365433000
title: 'Obsidian 插件：Authorship Tracker'
tags: ['自动化与AI', '文件管理', '效率工具', 'obsidian插件']
description: 'Tracks who creates and modifies notes — designed for human/AI collaborative vaults. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Authorship Tracker

> [!Note] 插件名片
> - 插件名称：Authorship Tracker
> - 插件作者：bloknayrb
> - 插件说明：Tracks who creates and modifies notes — designed for human/AI collaborative vaults. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bloknayrb/obsidian-authorship-tracker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?authorship-tracker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bloknayrb/obsidian-authorship-tracker/master/README.md)



## 概述

**1. 主要功能**
该插件通过自动在笔记的 YAML 头部添加元数据（如 `created_by`、`last_modified_by`），并记录每日 JSONL 日志，来追踪笔记的创建者与修改者。它能明确区分内容是由人类、AI 助手还是自动化脚本生成。

**2. 适用场景**
专为“人机协作”知识库设计，适用于用户同时使用 Obsidian 手动编辑、通过 CLI 调用 AI 助手修改文件，或运行脚本导入邮件/会议记录等多源写入的场景。

**3. 核心特色**
*   **精准归因**：仅监听 Obsidian 编辑器内的用户输入事件，外部工具（如 AI 或脚本）的文件写入不会触发插件，从而避免误判归属。
*   **信任分级**：支持将特定文件夹映射为特定来源及信任级别，帮助区分一手资料与 AI 生成内容。
*   **轻量审计**：提供人类可读的每日变更日志，便于审计自动化脚本对文件的影响。

**4. 使用建议**
建议将其用于混合作者库，以明确引用来源的可信度。对于接收外部文件（如邮件导入）的文件夹，请配置相应的来源映射和信任等级，以便在引用时快速判断是否需进一步核实，避免将 AI 输出误作原始资料。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


