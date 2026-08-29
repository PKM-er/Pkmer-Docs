---
uid: 1786577082675001
title: 'Obsidian 插件：Slogs Sync'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: '将 Markdown 笔记与 Slogs 远程 Obsidian 仓库进行同步。——此插件尚未经过 Obsidian 官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Slogs Sync

> [!Note] 插件名片
> - 插件名称：Slogs Sync
> - 插件作者：dimohy
> - 插件说明：将 Markdown 笔记与 Slogs 远程 Obsidian 仓库进行同步。——此插件尚未经过 Obsidian 官方人员的人工审核。
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dimohy/obsidian-slogs-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?slogs-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dimohy/obsidian-slogs-sync/master/README.md)



## 概述

### Slogs Sync插件总结
1. **主要功能**：实现Obsidian本地库与Slogs远程Obsidian库的同步，支持同步Markdown文件，可选择同步附件和`.obsidian`设置。提供同步所有文件、推送当前文件、拉取远程更改等操作命令。
2. **适用场景**：适用于需要在不同设备间同步Obsidian笔记，或希望将本地笔记与Slogs远程库同步的用户。
3. **核心特色**：默认同步`.obsidian/`外的Markdown文件，附件和设置可选择同步；支持通过前置元数据触发映射；遇到冲突时弹出模态框，让用户选择使用远程副本、保留本地副本或跳过文件，避免静默覆盖。
4. **使用建议**：通过Obsidian社区插件安装，版本`0.1.2`需Obsidian `1.6.6`及以上。安装后，在Slogs创建带有`obsidian.sync`范围的令牌，在Obsidian中设置Slogs服务器URL、粘贴令牌并设置远程库名称。使用插件命令进行文件同步操作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


