---
uid: 1791709367848000
title: 'Obsidian 插件：Javis Wiki Sync'
tags: ['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
description: 'Mirrors your Javis wiki into this vault, and optionally uploads notes from folders you choose. Never deletes a file. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Javis Wiki Sync

> [!Note] 插件名片
> - 插件名称：Javis Wiki Sync
> - 插件作者：Samuel Wei
> - 插件说明：Mirrors your Javis wiki into this vault, and optionally uploads notes from folders you choose. Never deletes a file. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/deepshareai/javis-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?javis-wiki-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/deepshareai/javis-obsidian/master/README.md)



## 概述

**Javis Wiki Sync** 是一款 Obsidian 桌面插件，旨在将 Javis Wiki 内容镜像至本地库，并支持可选的双向同步。

**主要功能**：自动将 Wiki 页面转换为 Markdown 文件，保留 Wikilinks、反向链接及图谱视图。插件仅写入特定标记间的文本，且**绝不删除**任何现有文件，确保数据安全性。

**适用场景**：适用于需要离线查阅 Javis Wiki 或希望将个人笔记上传至 Wiki 的用户。建议先在临时库中测试，确认同步效果后再用于正式库。

**核心特色**：
1. **安全机制**：利用系统钥匙串存储令牌，避免敏感信息泄露；
2. **非破坏性**：只增不删，仅清理空的旧版文件夹；
3. **可选上传**：上传功能默认关闭，需手动指定文件夹启用。

**使用建议**：
1. 确保 Obsidian 版本 ≥1.11.4 且使用桌面端；
2. 首次使用前请备份重要库，防止意外覆盖；
3. 若库中已有 `Javis-wiki/` 文件夹，请注意文件可能混排，建议提前整理。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


