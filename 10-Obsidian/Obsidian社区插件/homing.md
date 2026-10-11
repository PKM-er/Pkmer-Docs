---
uid: 1791709367527000
title: 'Obsidian 插件：Homing'
tags: ['文件管理', '模板与链接处理', '编辑工具', '效率工具', 'obsidian插件']
description: 'File inbox notes into existing folders and link mentions to the right notes, with your confirmation, right in the editor. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Homing

> [!Note] 插件名片
> - 插件名称：Homing
> - 插件作者：Yakkemuri
> - 插件说明：File inbox notes into existing folders and link mentions to the right notes, with your confirmation, right in the editor. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '模板与链接处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kineichou/obsidian-homing)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?homing)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kineichou/obsidian-homing/master/README.md)



## 概述

**主要功能**
Homing是一款智能整理插件，核心功能包括：自动为收件箱（Inbox）中的笔记建议归档文件夹，以及在写作时实时建议内部链接。所有操作均需用户确认，确保数据安全可控。

**适用场景**
适合需要高效管理大量笔记、遵循Zettelkasten或PARA等知识管理系统的用户，特别是那些希望减少手动整理时间、保持笔记结构清晰且链接准确的场景。

**核心特色**
1. **非侵入式确认**：文件移动和链接插入前必须手动确认，支持撤销，避免误操作。
2. **智能建议**：基于LLM分析笔记内容，精准推荐归档位置；写作时通过淡色下划线提示潜在链接，支持悬停确认或修改目标。
3. **高效工作流**：编辑器右上角显示归档建议，支持连续处理收件箱；提供批量整理功能及快捷键，如`[[?`快速搜索链接。
4. **灵活配置**：支持连接自有API密钥或本地模型，适应不同隐私需求。

**使用建议**
1. **版本要求**：需Obsidian 1.11.4及以上桌面版。
2. **初始设置**：在设置中指定收件箱文件夹并配置AI分析提供商（API或本地模型），测试连接后开启建议功能。
3. **操作技巧**：处理收件箱时，利用“Next”按钮连续归档；写作时留意淡色下划线提示，善用`homing:accept-link`快捷键快速确认链接。
4. **批量处理**：通过状态栏或右键菜单使用“Organize inbox”功能批量处理未归档笔记，注意查看预估的请求次数以控制成本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


