---
uid: 1791709366994000
title: 'Obsidian 插件：Feishu Lark Sync'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: 'Sync Feishu and Lark documents into your local vault. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Feishu Lark Sync

> [!Note] 插件名片
> - 插件名称：Feishu Lark Sync
> - 插件作者：zktww
> - 插件说明：Sync Feishu and Lark documents into your local vault. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zktww/feishu-lark-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?feishu-lark-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zktww/feishu-lark-sync/master/README.md)



## 概述

**1. 主要功能**
该插件将飞书（Feishu）和 Lark 文档同步至本地 Obsidian 仓库。支持递归扫描 Wiki 和云盘文件夹，将 Docx/旧版 Doc 转换为 Markdown，并自动下载图片及附件至同级 `_attachments` 文件夹。支持基于版本和修改时间的增量同步。

**2. 适用场景**
适合需要离线访问、本地备份或深度编辑飞书/Lark 文档的用户。适用于希望将云端知识库镜像到本地笔记系统，实现统一管理的工作流。

**3. 核心特色**
*   **安全隔离**：App Secret 通过 stdin 传递且不持久化；远程内容被标记在特定 HTML 注释区域内。
*   **冲突保护**：保留本地 Frontmatter 和个人笔记，若用户编辑了受管区域则标记为冲突并停止覆盖，防止数据丢失。
*   **智能同步**：支持启动时及定时（15/30/60分钟）自动同步，提供同步中心界面监控进度、手动触发及失败重试。
*   **结构保持**：本地笔记保留远程文件夹层级结构。

**4. 使用建议**
*   通过 Ribbon 图标或命令打开“同步中心”进行首次配置和手动同步。
*   在 `<!-- feishu-sync:end -->` 标记之外添加个人笔记，以避免触发冲突保护。
*   注意：目前仅支持 Doc/Docx 转换，Sheet、Base 等类型仅发现不转换；远程删除不会导致本地笔记被删除。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


