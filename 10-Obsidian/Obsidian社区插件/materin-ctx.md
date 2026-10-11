---
uid: 1791709368506000
title: 'Obsidian 插件：Materin Ctx'
tags: ['编辑工具', '数据处理', '文件管理', 'obsidian插件']
description: 'Open JSON / YAML files in a native-feeling editor view with formatting, folding and search. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Materin Ctx

> [!Note] 插件名片
> - 插件名称：Materin Ctx
> - 插件作者：leapord
> - 插件说明：Open JSON / YAML files in a native-feeling editor view with formatting, folding and search. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '数据处理', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/leapord/Materin-ctx)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?materin-ctx)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/leapord/Materin-ctx/master/README.md)



## 概述

**1. 主要功能**
Materin Ctx 允许在 Obsidian 内直接打开、编辑并保存 JSON、YAML 及 JSONC 文件。它基于 CodeMirror 6 提供原生编辑器体验，支持语法高亮、行号显示、代码折叠、全文搜索（含正则与替换）以及一键格式化。

**2. 适用场景**
适用于需要频繁查看或修改配置文件的场景，如管理 Obsidian 插件设置、API 数据文件、CI/CD 配置或任何基于 JSON/YAML 的结构化数据，无需切换至外部编辑器。

**3. 核心特色**
- **原生体验**：与 Obsidian 编辑器手感一致，支持折叠、搜索及未保存状态提示。
- **智能格式化**：JSON 格式化容错且保留注释；YAML 格式化保留注释并支持行宽限制（自动处理 Tab 缩进违规）。
- **实时同步**：自动检测外部修改并刷新，冲突时提供重载选项。
- **灵活配置**：可自定义缩进、换行及行号显示。

**4. 使用建议**
安装后直接点击 vault 中的 `.json`/`.yaml` 文件即可打开。建议根据团队规范在设置中调整缩进宽度。注意 YAML 规范禁止 Tab 缩进，插件会自动回退为空格以保证格式正确。编辑完成后按 `Ctrl/Cmd + S` 保存。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


