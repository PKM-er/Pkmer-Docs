---
uid: 1791709367472000
title: 'Obsidian 插件：Heading View'
tags: ['文件管理', '界面优化', '效率工具', 'obsidian插件']
description: 'Show the first heading of a Markdown note instead of its file name in the file explorer. Files are never renamed. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Heading View

> [!Note] 插件名片
> - 插件名称：Heading View
> - 插件作者：菅原ユリア
> - 插件说明：Show the first heading of a Markdown note instead of its file name in the file explorer. Files are never renamed. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yin-ori/heading-view)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?heading-view)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yin-ori/heading-view/master/README.md)



## 概述

**1. 主要功能**
该插件将 Obsidian 文件侧边栏中的文件名替换为笔记内的**第一个标题**。它仅改变显示标签，不会修改磁盘上的实际文件名或笔记内容，禁用插件后立即恢复原状。

**2. 适用场景**
特别适用于习惯使用**时间戳**（如 `202408191342.md`）或**ID**（如 `zk-0421.md`）命名文件的用户。当文件名缺乏语义时，该插件能让侧边栏直观展示笔记主题，提升浏览效率。

**3. 核心特色**
*   **非破坏性**：只改显示，不改文件，安全无副作用。
*   **智能识别**：读取任意级别的第一个标题；无标题笔记或非 Markdown 文件保持原名。
*   **高性能**：基于 Obsidian 元数据缓存读取，无额外 I/O 开销。
*   **Zettlr 体验**：复刻了 Zettlr 的默认阅读体验，兼顾稳定文件名与直观阅读。

**4. 使用建议**
*   确保笔记开头包含一级或二级标题，以便插件正确提取。
*   若希望侧边栏显示更简洁，建议在笔记开头添加简短且具概括性的标题。
*   安装后无需复杂配置，启用即生效；如需还原，直接禁用插件即可。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


