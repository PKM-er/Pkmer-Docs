---
uid: 1791709366461000
title: 'Obsidian 插件：DBML Studio'
tags: ['图表与可视化', '数据处理', '编程与脚本', 'obsidian插件']
description: 'Draws DBML database models as ER diagrams in notes, reading the .dbml files from disk, also outside the vault, with the tables, height and theme a block asks for. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DBML Studio

> [!Note] 插件名片
> - 插件名称：DBML Studio
> - 插件作者：konyshev.av
> - 插件说明：Draws DBML database models as ER diagrams in notes, reading the .dbml files from disk, also outside the vault, with the tables, height and theme a block asks for. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '数据处理', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/akonyshev/obsidian-dbml-studio)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dbml-studio)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/akonyshev/obsidian-dbml-studio/master/README.md)



## 概述

**1. 主要功能**
DBML Studio 允许在 Obsidian 笔记中直接渲染 `.dbml` 数据库模型文件，生成实体关系图（ER Diagram）。它通过读取磁盘上的文件（支持 Vault 外部路径）来驱动图表，无需依赖 Web 服务器。

**2. 适用场景**
适用于需要维护数据库文档的技术团队。特别适合模型文件位于文档站点（如 Antora、MkDocs）目录中而非 Vault 内部的情况，避免文件复制导致的版本不一致。仅限桌面端使用。

**3. 核心特色**
*   **外部文件支持**：可读取 Vault 外部路径的 `.dbml` 文件，保持源文件与文档同步。
*   **本地安全**：完全离线运行，不发送网络请求，仅读取指定文件且不写入。
*   **原生集成**：复用官方文档站点的图表框架，确保视觉一致性。

**4. 使用建议**
安装后，在笔记中通过代码块指定 `model:` 路径（支持相对路径及 `..` 跳出 Vault）。修改模型后，需手动执行“Refresh diagrams”命令刷新视图。请确保路径指向正确的 `.dbml` 文件位置，以实现文档与模型的最佳同步。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


