---
uid: 1791709365616000
title: 'Obsidian 插件：Better Relative Wikilinks'
tags: ['模板与链接处理', '文件管理', '编辑工具', 'obsidian插件']
description: 'Uses relative wikilink paths instead of absolute paths when filenames conflict. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Better Relative Wikilinks

> [!Note] 插件名片
> - 插件名称：Better Relative Wikilinks
> - 插件作者：Fractal
> - 插件说明：Uses relative wikilink paths instead of absolute paths when filenames conflict. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '文件管理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/fractalscripts/Better-Relative-Wikilinks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?better-relative-wikilinks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/fractalscripts/Better-Relative-Wikilinks/master/README.md)



## 概述

**1. 主要功能**
该插件优化 Obsidian 中的双链（Wikilinks）显示格式。当笔记名称冲突时，它自动将默认的全局绝对路径（如 `[[work/summer/meetings/notes]]`）替换为相对于当前笔记的相对路径（如 `[[../meetings/notes]]`），使链接更短且直观。

**2. 适用场景**
适用于拥有大量同名笔记或深层文件夹结构的 Vault。特别适合希望保持笔记间链接简洁，同时避免路径冗长的用户。

**3. 核心特色**
*   **智能路径缩短**：根据笔记相对位置动态生成最短路径（如 `[[./notes]]` 或 `[[../../notes]]`）。
*   **自动回退机制**：若相对路径比绝对路径更长（如回溯至根目录），则自动回退为标准的绝对路径，确保始终最优。
*   **极致轻量**：代码量极少，无额外性能负担。

**4. 使用建议**
*   **前置设置**：必须将 Obsidian 设置中的“新链接格式”设为“尽可能使用最短路径”（Shortest path when possible），否则插件行为可能异常。
*   **兼容性**：若未使用上述设置，建议关闭插件。
*   **注意**：该插件未经 Obsidian 官方人工审核，建议备份数据后使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


