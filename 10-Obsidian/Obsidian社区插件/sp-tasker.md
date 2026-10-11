---
uid: "1791709370078000"
title: "Obsidian 插件：SP Tasker"
tags: ['任务管理', '第三方工具集成', '自动化与AI', 'obsidian插件']
description: "One-way sync: editing a note's frontmatter creates or updates a matching task in Super Productivity via its local REST API. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：SP Tasker

> [!Note] 插件名片
> - 插件名称：SP Tasker
> - 插件作者：cbuelo
> - 插件说明：One-way sync: editing a note's frontmatter creates or updates a matching task in Super Productivity via its local REST API. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['任务管理', '第三方工具集成', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cjbuelomp/SP-Tasker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sp-tasker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cjbuelomp/SP-Tasker/master/README.md)



## 概述

**SP Tasker 插件总结**

**主要功能**
该插件实现 Obsidian 到 Super Productivity (SP) 的单向同步。通过编辑笔记的 Frontmatter（如 `next`、`waiting_on`、`start` 等字段），自动在 SP 中创建或更新对应任务。

**适用场景**
适合使用 Obsidian 管理笔记、同时依赖 SP 进行任务执行与时间追踪的用户。适用于需要快速将笔记中的待办事项转化为结构化任务，并自动关联项目、截止日期及等待依赖的场景。

**核心特色**
1. **智能映射**：支持字符串、列表等多种格式，自动处理“等待中”状态的前缀及提醒标签。
2. **项目关联**：通过笔记中的 `Project/<name>` 标签自动匹配 SP 项目，支持多级标签折叠，避免歧义。
3. **日期逻辑**：智能解析 `start` 字段，自动处理逾期、今日及未来日期的任务创建与更新逻辑。
4. **安全机制**：若 SP 中不存在对应项目则中止发送并提示，防止数据静默丢失；仅支持单向同步，不反向覆盖 Obsidian 内容。

**使用建议**
1. 确保 SP 中已预先创建好所需的项目和提醒标签，因为 API 不支持自动创建。
2. 合理配置 Frontmatter 键名（如 `next`、`waiting_on`）以匹配个人笔记习惯。
3. 注意标签命名规范，避免同一笔记出现多个不同项目标签导致同步失败。
4. 若无需指定项目，可设置默认项目（如 Inbox）或留空由 SP 决定。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

