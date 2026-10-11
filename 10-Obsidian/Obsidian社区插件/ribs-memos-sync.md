---
uid: 1791709369718000
title: 'Obsidian 插件：Ribs Memos Sync'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: 'Sync notes in a folder with a Memos server (usememos.com) via its REST API. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ribs Memos Sync

> [!Note] 插件名片
> - 插件名称：Ribs Memos Sync
> - 插件作者：cuteribs
> - 插件说明：Sync notes in a folder with a Memos server (usememos.com) via its REST API. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cuteribs/ribs-memos-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ribs-memos-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cuteribs/ribs-memos-sync/master/README.md)



## 概述

**Ribs Memos Sync** 是一款连接 Obsidian 与 Memos 服务器（usememos.com）的同步插件。

1. **主要功能**：通过 REST API 将 Obsidian 指定文件夹与 Memos 服务器双向同步。每条备忘录映射为以 UID 命名的 Markdown 笔记，支持拉取服务器新内容或推送本地新笔记。
2. **适用场景**：适合需要统一管理碎片化想法与结构化笔记的用户，实现 Obsidian 知识库与轻量级 Memos 服务的数据互通。
3. **核心特色**：
   - **智能冲突处理**：采用“最后写入胜出”策略，同时修改时优先保留服务器版本。
   - **友好浏览面板**：提供侧边栏列表，按时间和首行内容展示笔记，解决 UID 文件名不可读问题。
   - **灵活同步**：支持手动触发或设置自动同步间隔。
4. **使用建议**：
   - 需在 Memos 后台生成 Access Token 并在插件中配置服务器 URL。
   - 建议通过插件提供的“Memos List”面板浏览笔记，而非直接查看文件夹。
   - 注意当前不支持删除同步、标签/附件往返及复杂的冲突合并，仅同步正文内容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


