---
uid: 1791709365579000
title: 'Obsidian 插件：Beancount'
tags: ['编辑工具', '第三方工具集成', '数据处理', 'obsidian插件']
description: 'Edit Beancount ledgers with completion, alignment, outline, and bean-check validation. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Beancount

> [!Note] 插件名片
> - 插件名称：Beancount
> - 插件作者：thomaszdxsn
> - 插件说明：Edit Beancount ledgers with completion, alignment, outline, and bean-check validation. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '第三方工具集成', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/thomaszdxsn/obsidian-beancount)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?beancount)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/thomaszdxsn/obsidian-beancount/master/README.md)



## 概述

**插件名称**：Beancount

**主要功能**：该插件允许用户在 Obsidian 中直接编辑 Beancount 账本，提供语法高亮、账户/收款人自动补全、指令片段、自动缩进、小数点对齐、大纲视图及余额显示。核心亮点是保存时自动调用 `bean-check` 进行校验，并将错误映射回笔记中的代码块。

**适用场景**：专为使用 Beancount 进行个人记账或财务管理的用户设计，适合希望在 Markdown 笔记中嵌入并管理账本代码的场景。注意：仅支持桌面端，且需本地安装 Beancount 环境。

**核心特色**：
1. **实时对齐**：输入小数点时即时对齐金额，支持自定义分隔列及显示辅助虚线。
2. **无缝校验**：支持在 Markdown 代码块（`beancount` 或 `bean`）中直接运行校验，无需切换文件。
3. **智能格式化**：保存时可自动重新对齐金额，保持账本整洁。

**使用建议**：
1. 确保 Obsidian 版本不低于 1.7.2。
2. 通过 `pip install beancount` 安装依赖，并在插件设置中配置 `bean-check` 可执行文件路径（若已在 PATH 中可留空）。
3. 在笔记中使用 ```beancount 代码块编写账本，保存即可触发校验与格式化。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


