---
uid: 1791709366589000
title: "Obsidian 插件：Domain First File Allocator"
tags: ['文件管理', '数据处理', '效率工具', 'obsidian插件']
description: "File notes into folders using a domain property, and set the property from a note's folder. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Domain First File Allocator

> [!Note] 插件名片
> - 插件名称：Domain First File Allocator
> - 插件作者：Anthirayas
> - 插件说明：File notes into folders using a domain property, and set the property from a note's folder. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jrayas/domain-first-file-allocator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?domain-first-file-allocator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jrayas/domain-first-file-allocator/master/README.md)



## 概述

**Domain First File Allocator** 是一款基于 Obsidian 属性的智能文件管理插件，旨在实现笔记与文件夹路径的双向同步。

1.  **主要功能**：核心功能包括“按领域归档”（读取 Frontmatter 中的 `domain` 属性将笔记移入对应文件夹）和“从文件夹设置领域”（将当前文件夹路径写回笔记属性）。支持自动归档，输入特定领域后延迟数秒自动移动文件，并自动更新内部链接。
2.  **适用场景**：适用于采用 PARA 等知识管理体系、需要严格通过元数据管理笔记位置的用户。特别适合希望消除“属性与位置不一致”痛点，且需要在桌面端和移动端无缝切换的场景。
3.  **核心特色**：
    *   **路径即领域**：直接使用 Vault 相对路径作为领域值，无需维护额外的名称映射表，同名文件夹在不同层级视为不同领域。
    *   **双向独立控制**：归档与设置属性是两个独立命令，当两者冲突时，用户可自主决定以哪一方为准。
    *   **安全与灵活**：提供“撤销上次分配”功能；自动归档默认开启但仅对已注册领域生效，可通过侧边栏图标快速开关或休眠。
4.  **使用建议**：建议先注册常用领域路径，再启用自动归档功能。由于插件不预设快捷键，用户需在设置中手动为“按领域归档”等命令分配快捷键，以提升操作效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
