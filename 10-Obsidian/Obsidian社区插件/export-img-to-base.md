---
uid: 1791709366921000
title: 'Obsidian 插件：Export as Base64 MD'
tags: ['文件管理', '图片与PDF', '效率工具', 'obsidian插件']
description: 'Exports the active note as a single markdown file with every image embed inlined as a base64 data URI. Vault note stays untouched. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Export as Base64 MD

> [!Note] 插件名片
> - 插件名称：Export as Base64 MD
> - 插件作者：anonymouse66
> - 插件说明：Exports the active note as a single markdown file with every image embed inlined as a base64 data URI. Vault note stays untouched. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '图片与PDF', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bharathhonnappa/export-img-to-base64)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?export-img-to-base)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bharathhonnappa/export-img-to-base64/master/README.md)



## 概述

**插件名称**：Export as Base64 MD

**主要功能**
该插件可将当前打开的 Obsidian 笔记导出为单个独立的 Markdown 文件。核心机制是将笔记中所有嵌入的图片（支持 `![[...]]` 和 `![...](...)` 语法）自动转换为 Base64 数据 URI 并内联到文本中，生成完全自包含的文件。

**适用场景**
1. **静态网站部署**：适合将笔记发布到不支持外部图片引用或希望简化资源管理的静态博客/CMS。
2. **数据迁移与备份**：生成无需依赖外部图片文件的单一 MD 文件，便于跨平台分享或归档。
3. **特殊存储需求**：如作者所述，适用于需要将图片直接存入数据库（如 MongoDB）以节省磁盘空间或配合 CDN 重写的场景。

**核心特色**
*   **非破坏性导出**：仅生成副本，原始 Vault 笔记保持完全不变。
*   **原生保存体验**：调用操作系统原生的“另存为”对话框，默认文件名与笔记标题一致。
*   **广泛格式支持**：兼容 PNG、JPG、GIF、WebP、BMP 及 SVG 等常见图片格式。
*   **零冲突设计**：不预设默认快捷键，避免与用户现有设置冲突。

**使用建议**
1. 安装后，通过命令面板（Ctrl/Cmd+P）运行“Export active note”。
2. 建议在设置中手动绑定一个常用快捷键以提高效率。
3. 导出前请确保笔记中的图片路径正确，因为插件依赖 Obsidian 元数据缓存来解析图片位置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


