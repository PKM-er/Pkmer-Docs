---
uid: 1791709366669000
title: 'Obsidian 插件：Dynamic Lock'
tags: ['编辑工具', '文件管理', '界面优化', '效率工具', 'obsidian插件']
description: 'Dynamically switch between Reading and Editing modes based on file properties, folders, or time. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dynamic Lock

> [!Note] 插件名片
> - 插件名称：Dynamic Lock
> - 插件作者：ryeom
> - 插件说明：Dynamically switch between Reading and Editing modes based on file properties, folders, or time. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文件管理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ryeom/obsidian-dynamic-lock)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dynamic-lock)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ryeom/obsidian-dynamic-lock/master/README.md)



## 概述

**1. 主要功能**
Dynamic Lock 允许根据文件属性、所在文件夹或文件年龄，自动将笔记打开为“阅读模式”或“编辑模式”。支持手动切换，并可设置“锁定”规则强制保持阅读状态。

**2. 适用场景**
适用于需要区分参考类与草稿类笔记的用户。例如：将 `References/` 文件夹设为阅读模式，`Drafts/` 设为编辑模式；或自动将超过30天的日记设为阅读模式，减少手动切换操作的频率。

**3. 核心特色**
*   **多维度规则**：支持基于文件夹、YAML属性（如 `status: done`）及时间（创建/修改日期）的灵活配置。
*   **智能锁定**：可针对特定规则启用“保持阅读模式”，防止误操作进入编辑状态，但不会真正锁定文件权限。
*   **全局控制**：提供 Auto、Locked、Editing 等全局状态，通过状态栏或命令面板快速切换整体行为。

**4. 使用建议**
建议先为常用参考文件夹添加阅读模式规则，并将全局默认设为 Auto。若需强制某些笔记只读，请在对应规则中启用“Keep Reading mode”。注意该插件仅控制视图模式，不阻止外部工具修改文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


