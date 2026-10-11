---
uid: 1791709365393000
title: 'Obsidian 插件：Atlas Explorer'
tags: ['文件管理', '导航与状态栏', '界面优化', '效率工具', 'obsidian插件']
description: 'A replacement file explorer that shows every meaningful unit in the vault (blocks, files, folders) as one flat list, and lets you arrange those units into as many hierarchies as you like, without ever moving anything on disk. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Atlas Explorer

> [!Note] 插件名片
> - 插件名称：Atlas Explorer
> - 插件作者：Dan
> - 插件说明：A replacement file explorer that shows every meaningful unit in the vault (blocks, files, folders) as one flat list, and lets you arrange those units into as many hierarchies as you like, without ever moving anything on disk. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '导航与状态栏', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/danrfletcher/atlas-explorer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?atlas-explorer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/danrfletcher/atlas-explorer/master/README.md)



## 概述

**1. 主要功能**
Atlas Explorer 是一款替代 Obsidian 默认文件浏览器的插件。它将库中的所有内容（块、文件、文件夹）展示为单一扁平列表，允许用户将这些单元组织成任意数量的层级视图，且无需在磁盘上移动任何文件。

**2. 适用场景**
适用于需要频繁调整笔记结构、但希望保持底层文件路径稳定以避免破坏相对链接的场景。特别适合管理复杂知识库、代理系统或大型代码库等需要多视角分类的内容。

**3. 核心特色**
*   **视图与存储分离**：将文件夹层级作为固定地址，通过“视图”（Views）作为覆盖层进行组织。重排内容仅修改视图结构，不改变磁盘路径，彻底解决因移动文件导致链接失效的问题。
*   **统一单元模型**：将块、文件和文件夹视为同等地位的“单元”，支持基于链接的自动提升机制（Promotion），即内部内容被外部链接时自动升级为独立单元。
*   **非破坏性管理**：实现“捕获最大自包含单元，链接时提升”的管理逻辑，保持数据完整性。

**4. 使用建议**
该插件目前处于预发布阶段，尚未上架社区插件商店。建议仅在测试环境中使用，并关注 TASKS.md 了解最新验证进度。用户应适应“视图即绘图”的新思维，利用其灵活的多层级组织能力优化知识管理流程。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


