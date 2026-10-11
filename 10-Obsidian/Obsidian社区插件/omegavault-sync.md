---
uid: 1791709368950000
title: 'Obsidian 插件：OmegaVault Sync'
tags: ['第三方工具集成', '文件管理', '数据处理', 'obsidian插件']
description: 'Pulls your OmegaVault memories into this vault as beautifully frontmattered markdown. One-way sync (OmegaVault → vault). - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：OmegaVault Sync

> [!Note] 插件名片
> - 插件名称：OmegaVault Sync
> - 插件作者：Ayoub CHALABI
> - 插件说明：Pulls your OmegaVault memories into this vault as beautifully frontmattered markdown. One-way sync (OmegaVault → vault). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/iayvob/obsidian-public-plugin-omegaVault)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?omegavault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/iayvob/obsidian-public-plugin-omegaVault/master/README.md)



## 概述

**OmegaVault Sync** 是一款将 OmegaVault 记忆同步至 Obsidian 的插件，主要功能是通过单向同步（OmegaVault → Obsidian）将云端记忆转化为带有 Frontmatter 的标准 Markdown 笔记。

**适用场景**：适合使用 OmegaVault 管理个人知识或记忆，并希望将其整合进 Obsidian 工作流的用户，特别是需要利用 Obsidian 强大的链接、搜索及插件生态来回顾和组织 OmegaVault 数据的人群。

**核心特色**：
1. **结构化数据**：生成的笔记包含 ID、标题、分类、标签及时间戳等完整元数据，便于自动化处理。
2. **智能同步机制**：基于 `omegavault_id` 管理文件，标题变更会自动重命名文件，删除操作对应移除本地文件，确保数据一致性。
3. **灵活配置**：支持自定义服务器地址、API 令牌、存储文件夹及轮询间隔，提供“立即同步”和“全量重置”功能。

**使用建议**：
1. **单向同步意识**：由于 v1 版本为单向同步，Obsidian 中的本地修改会在下次拉取时被覆盖，请勿直接在同步文件夹内编辑内容。
2. **配置检查**：确保在 OmegaVault 生成有效的 API Token，并正确设置轮询间隔以平衡实时性与资源消耗。
3. **安装方式**：开发者可通过 npm 构建后手动安装，或使用 BRAT 插件直接指向仓库安装，建议定期使用“全量重置”功能清理潜在的状态偏差。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


