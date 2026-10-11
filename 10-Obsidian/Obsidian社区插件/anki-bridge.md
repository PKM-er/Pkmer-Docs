---
uid: 1791709365310000
title: 'Obsidian 插件：Anki Bridge'
tags: ['ANKI', '第三方工具集成', '学习与教育', '效率工具', 'obsidian插件']
description: 'Creates and syncs Anki flashcards from Markdown while preserving review history. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Anki Bridge

> [!Note] 插件名片
> - 插件名称：Anki Bridge
> - 插件作者：Aaron Ade
> - 插件说明：Creates and syncs Anki flashcards from Markdown while preserving review history. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['ANKI', '第三方工具集成', '学习与教育', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/aaronade0/obsidian-anki-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?anki-bridge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/aaronade0/obsidian-anki-bridge/master/README.md)



## 概述

**Anki Bridge** 是一款连接 Obsidian 与 Anki 的记忆卡片同步插件，旨在实现从 Markdown 笔记直接创建和管理 Anki 闪卡，同时完整保留复习历史。

**主要功能**：
该插件通过 AnkiConnect 在桌面端建立连接，支持在 Obsidian 中直接生成、更新 Anki 卡片。卡片身份标识存储于插件私有数据文件中，不污染 Markdown 笔记内容。移动端采用无服务器“发件箱”机制，将变更暂存于同步文件夹，待桌面端启动时自动处理，无需额外服务器或账号。

**适用场景**：
适合需要结合知识管理（Obsidian）与间隔重复复习（Anki）的用户，特别是希望在笔记中直接嵌入闪卡，并实现多设备（手机/电脑）无缝同步的学习者或学生。

**核心特色**：
1. **无侵入性**：不向 Markdown 写入生成的 ID，保持笔记整洁。
2. **跨平台同步**：移动端离线编辑，桌面端自动同步，无需复杂配置。
3. **数据迁移友好**：支持从旧版本平滑迁移，保留原有笔记 ID 及复习记录。
4. **便捷操作**：提供简单的快捷键（如 `>>` + `Tab`）快速创建卡片。

**使用建议**：
1. 桌面端需安装 AnkiConnect 并启动 Anki 应用，通过插件设置测试连接。
2. 移动端需同步包含 `.obsidian/plugins/anki-bridge` 的完整仓库，无需额外连接设置。
3. 若从旧版本升级，请安装 1.0.0 版本至新文件夹，验证迁移无误后再移除旧插件文件夹。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


