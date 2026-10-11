---
uid: 1791709371134000
title: 'Obsidian 插件：Writing Asset'
tags: ['文件管理', '编辑工具', '模板与链接处理', 'obsidian插件']
description: 'Link local files into an asset group and insert them while writing. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Writing Asset

> [!Note] 插件名片
> - 插件名称：Writing Asset
> - 插件作者：creative781
> - 插件说明：Link local files into an asset group and insert them while writing. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '编辑工具', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/creative781/writing-asset)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?writing-asset)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/creative781/writing-asset/master/README.md)



## 概述

**主要功能**
该插件允许用户将电脑本地的文件（如照片、图表、PDF等）链接至Obsidian笔记，而无需将文件复制进仓库。它通过“资产组”管理文件，每个组对应一个存储元数据的目录笔记，支持通过ID引用文件，实现一处更新、多处同步。

**适用场景**
适用于需要引用大量本地媒体或文档进行写作、研究或项目管理的用户，特别是希望保持仓库轻量、避免文件冗余，且主要在桌面端（Windows/macOS/Linux）工作的场景。

**核心特色**
1. **非侵入式引用**：仅链接本地路径，不复制文件，节省仓库空间。
2. **ID引用机制**：笔记中存储稳定的ID而非绝对路径，文件移动后可通过“批量路径修复”快速更新，避免链接失效。
3. **资产分组共享**：多个笔记可共享同一资产组，统一浏览和管理资源。
4. **灵活导出**：支持将笔记及相关资产打包导出至指定文件夹，便于分享或打印。

**使用建议**
1. 建议为不同项目建立独立的“资产组”，通过Frontmatter中的`asset-group`属性关联笔记。
2. 定期使用“批量路径修复”功能检查并更新因文件移动导致的失效链接。
3. 利用“编辑信息”功能完善资产的标题和描述，以提升浏览时的识别效率。
4. 注意该插件仅支持桌面端，移动端无法使用文件对话框功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


