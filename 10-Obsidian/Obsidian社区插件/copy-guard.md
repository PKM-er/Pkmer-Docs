---
uid: 1791709366278000
title: 'Obsidian 插件：CopyGuard'
tags: ['文件管理', '备份与恢复', '效率工具', 'obsidian插件']
description: 'Find sync-conflict copies, empty files, and leftover temp files. Compare with the original (name-only if bytes match). Restore from the Trash Box. Two-step delete. Does not merge. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CopyGuard

> [!Note] 插件名片
> - 插件名称：CopyGuard
> - 插件作者：k-tech-studio
> - 插件说明：Find sync-conflict copies, empty files, and leftover temp files. Compare with the original (name-only if bytes match). Restore from the Trash Box. Two-step delete. Does not merge. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/crossbeat461-a11y/copy-guard)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copy-guard)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/crossbeat461-a11y/copy-guard/master/README.md)



## 概述

**CopyGuard 插件总结**

**1. 主要功能**
CopyGuard 是一款文件清理与维护工具，核心功能包括：自动检测同步冲突副本（支持 Dropbox、Syncthing、Nextcloud 等多语言命名）、空文件及临时残留文件；提供“仅名称匹配”的字节级对比徽章；支持从专属回收站恢复文件至原路径（不覆盖）；以及两步式删除机制。

**2. 适用场景**
适用于使用云同步服务（如 Dropbox、Proton Drive 等）的 Obsidian 用户，特别是那些因多设备同步导致笔记库中出现大量重复、冲突或临时文件的场景，适合用于定期清理和维护笔记库的整洁度。

**3. 核心特色**
*   **安全优先**：绝不自动合并文件，所有移动和删除操作均需用户手动确认，防止误删。
*   **智能识别**：能识别多种语言（中、英、日、德等）的冲突命名规则，即使原文件缺失也能列出副本。
*   **精准对比**：通过字节比对判断副本是否仅文件名不同，并提供“选择相同副本”快捷筛选功能。
*   **可逆操作**：内置回收站索引，允许将文件恢复到原始路径，且具备防覆盖保护。

**4. 使用建议**
建议定期运行扫描以发现潜在冲突。在处理文件时，务必仔细审查列表，利用“Compare”功能对比原文与副本内容后再决定移动。注意，该插件不会自动合并内容，需用户自行处理差异。对于 1.3.0 版本前移动的文件，因无索引记录，无法恢复至原路径，请谨慎操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


