---
uid: 1791709369113000
title: 'Obsidian 插件：Page Lock'
tags: ['安全与隐私', '编辑工具', '文件管理', 'obsidian插件']
description: 'Lock notes against editing until unlocked, with a frontmatter-synced lock that blocks the editor and other plugins. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Page Lock

> [!Note] 插件名片
> - 插件名称：Page Lock
> - 插件作者：Robert Fleming
> - 插件说明：Lock notes against editing until unlocked, with a frontmatter-synced lock that blocks the editor and other plugins. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '编辑工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/haivri/obsidian-page-lock)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?page-lock)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/haivri/obsidian-page-lock/master/README.md)



## 概述

**1. 主要功能**
Page Lock 允许用户锁定笔记，阻止所有编辑操作（包括打字、粘贴、拖放及撤销），并拦截其他插件（如 Templater）的写入。锁定状态通过 frontmatter 属性（`locked: true`）存储，支持跨设备同步。

**2. 适用场景**
适用于需要临时保护笔记内容不被误改的场景，或作为“只读”参考页。特别适合在移动设备上防止误触修改，或在协作/同步环境中确保特定笔记的稳定性。

**3. 核心特色**
*   **全面阻断**：不仅锁定编辑器，还屏蔽阅读模式下的任务复选框及属性控件，同时允许保留链接跳转。
*   **智能同步**：文件重命名或移动时，自动更新内部链接引用，无需解锁即可保持引用准确。
*   **隐私与轻量**：本地优先，无遥测、无网络请求；阅读视图无干扰横幅，不影响 PDF 导出。
*   **多端适配**：支持桌面与移动端，提供图标、横幅、命令面板等多种解锁方式，且锁定状态下移动端不会弹出键盘。

**4. 使用建议**
建议将锁定状态作为笔记元数据的一部分进行管理，利用其自动链接更新特性来维护引用完整性。若需严格防止任何变更，可启用解锁前的确认提示。适合追求简洁、本地化且注重隐私的用户，作为 Notion 页面锁定功能的 Obsidian 替代方案。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


