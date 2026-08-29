---
uid: 1786577077441001
title: 'Obsidian 插件：Docs Sync'
tags: ['第三方工具集成', '备份与恢复', '安全与隐私', '效率工具', 'obsidian插件']
description: '通过私人GitHub仓库安全同步笔记和附件。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Docs Sync

> [!Note] 插件名片
> - 插件名称：Docs Sync
> - 插件作者：luhaifeng666
> - 插件说明：通过私人GitHub仓库安全同步笔记和附件。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '备份与恢复', '安全与隐私', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/luhaifeng666/obsidian-docs-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?docs-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/luhaifeng666/obsidian-docs-sync/master/README.md)



## 概述

### Docs Sync插件总结
1. **主要功能**：通过私有GitHub仓库的分支同步Obsidian笔记和小附件，支持手动、启动、前台及定时同步。
2. **适用场景**：适用于桌面和移动版Obsidian用户，无需Git CLI、Node文件系统或Electron依赖。
3. **核心特色**：
    - 每次同步操作有一次有效的Git提交，乐观检查分支头且不强制推送。
    - 从上次成功的共同提交进行三方更改检测。
    - 冲突时复制保留两个版本，避免覆盖笔记。
    - 远程删除使用Obsidian回收站。
    - 排除特定文件和自定义文件，GitHub令牌存储在Obsidian秘密存储中。
4. **使用建议**：
    - 启用前备份保险库，不要与其他同步工具同时运行。
    - 按步骤设置：创建或选择私有仓库和分支，生成细粒度访问令牌，在插件中输入相关信息，测试连接并确认首次同步。
    - 自动同步默认禁用，插件仅在Obsidian打开时运行。开发时使用隔离保险库。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


