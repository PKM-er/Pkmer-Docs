---
uid: 1791709369710000
title: 'Obsidian 插件：Review Edit'
tags: ['编辑工具', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Review note edits as a Git-style diff, then keep or revert each hunk. Ideal for reviewing AI edits. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Review Edit

> [!Note] 插件名片
> - 插件名称：Review Edit
> - 插件作者：wenzhi-ding
> - 插件说明：Review note edits as a Git-style diff, then keep or revert each hunk. Ideal for reviewing AI edits. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wenzhi-ding/obsidian-review-edit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?review-edit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wenzhi-ding/obsidian-review-edit/master/README.md)



## 概述

**主要功能**
Review Edit 插件允许用户在 Obsidian 编辑器内以 Git 风格的行内差异视图查看笔记的历史快照，支持对每个变更块（hunk）单独选择保留或回滚。它无需配置 Git，自动管理快照，并能兼容核心插件 File Recovery 的数据。

**适用场景**
特别适用于审查 AI 生成的编辑内容或外部脚本修改。当使用外部工具修改笔记时，插件能自动捕捉编辑会话边界（默认停止编辑1分钟后）的快照，帮助用户精准识别并管理非手动输入的变更。

**核心特色**
1. **零配置自动快照**：启用即自动记录，无需手动操作，首次启动会后台建立全库基线。
2. **本地隐私安全**：所有快照存储于本地 IndexedDB，不上传云端，支持自定义保留期（默认30天）和清理。
3. **多源数据整合**：同时利用自身快照和 File Recovery 插件数据，提供双重保障。
4. **多语言支持**：界面自动跟随 Obsidian 语言设置，内置中英文支持。

**使用建议**
安装后无需额外设置即可使用。建议保持 File Recovery 插件启用以获取更多历史数据。对于重要笔记，可定期检查快照；若需长期保留特定版本，建议在自动清理前手动导出或调整保留期设置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


