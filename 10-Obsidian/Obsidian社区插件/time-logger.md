---
uid: 1791709370438000
title: 'Obsidian 插件：Time Logger'
tags: ['日历与时间', '编辑工具', '效率工具', 'obsidian插件']
description: 'Automatic time and date stamps for daily journaling, permanently scoped to timelgr blocks. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Time Logger

> [!Note] 插件名片
> - 插件名称：Time Logger
> - 插件作者：jsux
> - 插件说明：Automatic time and date stamps for daily journaling, permanently scoped to timelgr blocks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/satox69/Time-Logger-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?time-logger)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/satox69/Time-Logger-obsidian-plugin/master/README.md)



## 概述

**Time Logger** 是一款专为 Obsidian 设计的日记时间戳插件，主要功能是在指定代码块或标记区域内，自动为段落添加日期和时间前缀。

**适用场景**：主要适用于日常日记、工作日志或需要精确记录事件发生时间的笔记场景，帮助用户快速建立时间线，无需手动输入时间。

**核心特色**：
1. **双版本支持**：默认使用 V1 版本（基于 ` ```timelgr ` 代码块），保持向后兼容；可选启用 V2 版本，使用独立的前后缀行（默认为 `{` 和 `}`）界定区域，支持自定义标记且能避免普通文本干扰。
2. **智能自动化**：采用事件驱动机制，无轮询延迟。光标所在段落会自动插入时间戳，也可手动触发“重新扫描当前笔记”以处理所有符合条件的段落。
3. **灵活配置**：提供高级设置，允许自定义 V2 的前后缀标记，并支持同时处理 V1 和 V2 区块。

**使用建议**：
- 若从旧版本升级，建议保持默认设置（V1）以确保现有笔记行为不变。
- 若希望更简洁的视觉体验或需要非代码块格式，可开启 V2 模式，并建议自定义前后缀（如 `#start`/`#end`）以避免与常规文本中的括号冲突。
- 日常记录时，只需在标记块内输入内容，光标停留即可自动打标；若需批量更新，使用“重新扫描”功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


