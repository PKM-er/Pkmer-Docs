---
uid: 1786577076913007
title: 'Obsidian 插件：CloudBeaver'
tags: ['第三方工具集成', '编程与脚本', '数据分析', '数据处理', 'obsidian插件']
description: '可以在控制台标签页或者笔记里的代码块中，针对CloudBeaver服务器运行SQL语句。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CloudBeaver

> [!Note] 插件名片
> - 插件名称：CloudBeaver
> - 插件作者：DBeaver
> - 插件说明：可以在控制台标签页或者笔记里的代码块中，针对CloudBeaver服务器运行SQL语句。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '编程与脚本', '数据分析', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/daelynum/obsidian-cloudbeaver-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cloudbeaver)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/daelynum/obsidian-cloudbeaver-plugin/master/README.md)



## 概述

### 主要功能
CloudBeaver 是一款 Obsidian 社区插件，可让用户直接在 Obsidian 库中对连接到 CloudBeaver 服务器的任意数据库运行 SQL 查询，支持从侧边栏或标签页的结果面板执行，还能将查询以 `cloudbeaver` 代码块形式保留在笔记中。

### 适用场景
适用于需要在 Obsidian 笔记里进行数据库 SQL 查询操作，且希望将查询与笔记内容关联记录的场景。

### 核心特色
- 默认只读，仅允许特定查询语句，开启写入需手动设置。
- 可指定连接到特定数据库或模式。
- 能浏览最近 50 条查询并复制到剪贴板。

### 使用建议
启用插件后，通过丝带图标或命令打开结果面板，在“设置 - CloudBeaver”中配置服务器和连接。在笔记的 `cloudbeaver` 代码块中编写 SQL，指定连接别名（可省略使用默认连接），将光标置于代码块内，点击面板“运行”或按 `Cmd/Ctrl+Enter` 执行查询。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


