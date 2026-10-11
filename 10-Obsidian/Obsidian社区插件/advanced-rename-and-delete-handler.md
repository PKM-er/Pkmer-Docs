---
uid: 1791709365206000
title: 'Obsidian 插件：Advanced Rename and Delete Handler'
tags: ['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
description: 'Handles renames and deletes for the whole vault in one place: updates links, moves attachment files and folders, and cleans up what a deletion leaves behind. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Advanced Rename and Delete Handler

> [!Note] 插件名片
> - 插件名称：Advanced Rename and Delete Handler
> - 插件作者：Michael Naumov
> - 插件说明：Handles renames and deletes for the whole vault in one place: updates links, moves attachment files and folders, and cleans up what a deletion leaves behind. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-advanced-rename-and-delete-handler)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?advanced-rename-and-delete-handler)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-advanced-rename-and-delete-handler/master/README.md)



## 概述

**1. 主要功能**
该插件统一接管 Obsidian 库中的文件重命名与删除操作。在重命名时，不仅更新笔记链接，还自动移动关联的附件文件和文件夹；在删除时，根据用户设定清理遗留的孤立文件及空文件夹，确保库内整洁。

**2. 适用场景**
适用于对笔记库结构有较高要求，且频繁进行文件重组、重命名或清理的用户。特别适合拥有大量内嵌图片、附件，且希望避免链接失效或产生“孤儿文件”的知识管理场景。

**3. 核心特色**
*   **全局一致性**：解决原生 Obsidian 仅更新链接而不处理附件的痛点，实现“文件随笔记走”。
*   **智能冲突处理**：作为库内重命名/删除行为的唯一所有者，若检测到其他插件拥有相同功能，会自动让位并提示用户更新，避免双处理器导致链接损坏，无需重启即可自动接管。

**4. 使用建议**
安装后请检查设置选项，确认删除时的清理策略是否符合预期。若库中已安装其他具有重命名处理功能的插件，请留意插件状态提示，及时更新旧插件以启用本插件功能。建议定期备份，以防批量操作带来的意外变更。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


