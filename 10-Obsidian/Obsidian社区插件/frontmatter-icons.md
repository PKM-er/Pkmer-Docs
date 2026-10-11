---
uid: 1791709367200000
title: "Obsidian 插件：Frontmatter Icons"
tags: ['文件管理', '界面优化', '样式与美化', 'obsidian插件']
description: "Displays file_icon and folder_icon properties directly in Obsidian's file explorer. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Frontmatter Icons

> [!Note] 插件名片
> - 插件名称：Frontmatter Icons
> - 插件作者：Loren Klemesrud
> - 插件说明：Displays file_icon and folder_icon properties directly in Obsidian's file explorer. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '界面优化', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/loren3737/obsidian-frontmatter-icons)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?frontmatter-icons)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/loren3737/obsidian-frontmatter-icons/master/README.md)



## 概述

**1. 主要功能**
该插件读取 Markdown 文件 Frontmatter 中的 `file_icon` 和 `folder_icon` 属性，直接在 Obsidian 文件资源管理器中显示对应的 Emoji 图标。图标随笔记存储，移动文件不会导致图标丢失。

**2. 适用场景**
适用于希望直观区分笔记类型、项目分类或快速视觉定位文件的用户，特别适合构建结构化知识库或需要大量视觉标识的工作流。

**3. 核心特色**
*   **灵活配置**：支持自定义属性名，允许设置全局文件夹图标以覆盖局部设置。
*   **冲突处理**：当多个笔记声明同一文件夹图标时，可按字母顺序决定优先级，并显示冲突标记。
*   **错误提示**：无效值（如超过3个Emoji）会显示问号及警告提示，便于修正。

**4. 使用建议**
*   在笔记 Frontmatter 中添加 `file_icon: "📄"` 或 `folder_icon: "📁"` 来设置图标。
*   若同一文件夹内多个笔记定义了 `folder_icon`，建议在插件设置中明确“文件夹图标搜索顺序”（A-Z 或 Z-A）以避免歧义。
*   对于无需特定笔记关联的固定文件夹，可使用“全局文件夹图标”功能直接绑定路径，简化维护。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
