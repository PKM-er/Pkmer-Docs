---
uid: 1791709366127000
title: 'Obsidian 插件：Codex Share'
tags: ['自动化与AI', '文件管理', '效率工具', 'obsidian插件']
description: 'Copy explicitly selected notes and embedded attachments into a separate AI workspace. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Codex Share

> [!Note] 插件名片
> - 插件名称：Codex Share
> - 插件作者：ctrlvish
> - 插件说明：Copy explicitly selected notes and embedded attachments into a separate AI workspace. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ctrlvish/codex-share)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?codex-share)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ctrlvish/codex-share/master/README.md)



## 概述

**1. 主要功能**
Codex Share 允许用户将显式选中的 Obsidian 笔记及其直接嵌入的非 Markdown 附件，复制到一个独立的 AI 工作区或外部工具目录中。它采用“允许列表”机制，仅同步用户手动开启共享属性的笔记，并自动同步文件变更。

**2. 适用场景**
适用于需要将特定笔记安全、隔离地提供给 AI Agent（如 Codex）或其他外部工具进行分析、处理或代码生成的场景，同时保护 Vault 中其他隐私数据不被暴露。

**3. 核心特色**
*   **白名单机制**：通过 YAML 属性（默认 `codex: true`）精确控制共享范围，非递归处理普通链接。
*   **路径与同步**：保留 Vault 相对路径，支持实时同步笔记及附件更新。
*   **智能清理**：取消共享时自动将 Markdown 副本移至系统回收站，但保留附件以防其他共享笔记引用。
*   **灵活配置**：支持自定义属性名及目标文件夹，提供“仅使用文件夹”或“使用并同步”两种模式。

**4. 使用建议**
*   务必将目标文件夹设置在私有 Vault 之外，以确保隔离性。
*   该插件不替代沙箱，需确保外部 AI 工具以该目标文件夹为工作区启动。
*   初次使用建议先通过“Initialise simple sharing toggles”初始化现有笔记的共享状态，并仔细检查同步后的文件结构。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


