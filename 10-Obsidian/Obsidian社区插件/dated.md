---
uid: 1791709366446000
title: 'Obsidian 插件：Dated'
tags: ['日历与时间', '文件管理', '编辑工具', 'obsidian插件']
description: 'Writes created and modified date-times into the frontmatter of notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dated

> [!Note] 插件名片
> - 插件名称：Dated
> - 插件作者：spwx
> - 插件说明：Writes created and modified date-times into the frontmatter of notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['日历与时间', '文件管理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/spwx/obsidian-dated)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dated)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/spwx/obsidian-dated/master/README.md)



## 概述

**1. 主要功能**
该插件自动将笔记的创建时间（created）和修改时间（modified）写入YAML Frontmatter中。新笔记会同时记录两个时间；编辑笔记时，停止输入5秒后更新修改时间，并补全缺失的创建时间（基于文件系统时间）。

**2. 适用场景**
适用于需要跨设备同步、复制文件或Git检出时保持时间戳准确的场景。解决文件系统在同步或版本控制中重置文件时间戳的问题，确保笔记元数据的一致性。

**3. 核心特色**
*   **防干扰机制**：文件出现后的前2秒写入不计为编辑，避免复制完成时误触发。
*   **智能忽略**：自动跳过核心模板文件夹，默认忽略`CLAUDE.md`、`AGENTS.md`和`README.md`，支持自定义忽略列表（支持文件名或路径匹配）。
*   **非破坏性**：绝不修改已存在的`created`值；仅处理Markdown文件；提供手动命令为旧笔记补全时间戳。
*   **格式规范**：统一使用`YYYY-MM-DD HH:mm`本地时间格式。

**4. 使用建议**
*   安装后，旧笔记需手动运行“Dated: Add timestamps”命令或进行编辑才会添加时间戳。
*   建议在设置中根据实际需求调整“忽略文件”列表，防止非笔记文件被标记。
*   注意该插件未经Obsidian官方人工审查，使用前建议备份数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


