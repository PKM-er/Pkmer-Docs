---
uid: 1786577080825005
title: 'Obsidian 插件：MySync'
tags: ['第三方工具集成', '数据处理', '效率工具', '备份与恢复', 'obsidian插件']
description: '用MySync插件把笔记同步到你家里的CouchDB数据库。——Obsidian官方人员尚未手动审核此插件。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MySync

> [!Note] 插件名片
> - 插件名称：MySync
> - 插件作者：Henrique Manduca
> - 插件说明：用MySync插件把笔记同步到你家里的CouchDB数据库。——Obsidian官方人员尚未手动审核此插件。
> - 插件分类：['第三方工具集成', '数据处理', '效率工具', '备份与恢复', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/henriquemanduca/mysync-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mysync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/henriquemanduca/mysync-plugin/master/README.md)



## 概述

### MySync插件总结
1. **主要功能**：用于通过用户自己的CouchDB服务器同步Obsidian库文件。可同步整个库或自定义文件夹，能跟踪Markdown文件、PDF和常见图片格式，支持将本地库更改推送到CouchDB数据库，也能将远程更改拉回库中，还可测试远程连接、显示同步进度和上次推送时间，可选择在插件加载时自动同步。
2. **适用场景**：适用于希望运行自己的同步后端，而非依赖托管同步服务提供商的用户。
3. **核心特色**：借助本地PouchDB索引实现文件同步，用户可自主掌控同步过程，灵活选择同步范围。
4. **使用建议**：使用前备份重要笔记，因从CouchDB拉取数据可能根据远程数据库状态恢复、覆盖或删除本地文件。需先创建CouchDB数据库，再在插件设置中配置其URL、数据库名、用户名和密码。Obsidian需1.12.7及以上版本，开发构建需Node.js 22.22.0及以上版本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


