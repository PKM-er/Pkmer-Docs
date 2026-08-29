---
uid: 1786577077953000
title: 'Obsidian 插件：Frontmatter Timestamps'
tags: ['文件管理', '自动化与AI', '效率工具', '日历与时间', 'obsidian插件']
description: '让创建和更新的前置元数据时间戳与Markdown文件事件保持同步。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Frontmatter Timestamps

> [!Note] 插件名片
> - 插件名称：Frontmatter Timestamps
> - 插件作者：Pat
> - 插件说明：让创建和更新的前置元数据时间戳与Markdown文件事件保持同步。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['文件管理', '自动化与AI', '效率工具', '日历与时间', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jqml/frontmatter-timestamps)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?frontmatter-timestamps)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jqml/frontmatter-timestamps/master/README.md)



## 概述

### Frontmatter Timestamps插件总结
1. **主要功能**：该插件能让配置的`created`和`updated` YAML前置属性与Markdown文件的创建和编辑活动保持同步。包括在创建笔记或编辑时缺少创建时间戳时添加，内容改变后更新时间戳，支持多种时间戳模式，可配置属性名和忽略路径，提供预览、更新、重命名和清理等命令。
2. **适用场景**：适用于需要精确记录Markdown笔记创建和更新时间，且希望这些时间与文件实际操作同步的场景。
3. **核心特色**：独立控制创建和更新属性的启用或禁用，不影响已有前置属性值；使用Obsidian的`app.fileManager.processFrontMatter()`处理前置属性；提供安全的属性重命名工作流和清理旧格式时间值的命令。
4. **使用建议**：在重要库中启用插件、更改属性名或运行全库更新命令前，先备份库或使用版本控制；执行文件夹或全库更新前使用预览命令；批量操作前核实忽略路径。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


