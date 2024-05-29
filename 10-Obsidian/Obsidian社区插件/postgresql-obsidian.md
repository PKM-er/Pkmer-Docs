---
uid: 2024052908394427
title: Obsidian 插件：PostgreSQL Obsidian
tags: ['数据处理', '数据库', '文件管理', 'obsidian插件']
description: 将您的笔记的元数据上传到PostgreSQL数据库
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PostgreSQL Obsidian

> [!Note] 插件名片
> - 插件名称：PostgreSQL Obsidian
> - 插件作者：Camille Louédoc-Eyries
> - 插件说明：将您的笔记的元数据上传到 PostgreSQL 数据库
> - 插件分类：[' 数据处理 ', ' 数据库 ', ' 文件管理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/clouedoc/postgresql-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?postgresql-obsidian)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/clouedoc/postgresql-obsidian/master/README.md)

![PostgreSQL Obsidian](https://cdn.pkmer.cn/covers/postgresql-obsidian.png!pkmer)

## 概述

这个 Obsidian 插件可以将你的笔记元数据上传到 PostgreSQL 数据库中，让你可以使用 SQL 查询数据，并与其他工具集成，比如 Grafana。安装插件后，设置 PostgreSQL 连接字符串，然后可以通过命令面板将页面的 Dataview 注释发送到数据库中。你可以自行搭建 PostgreSQL 数据库或使用托管服务提供商，如 Amazon RDS、ElephantSQL 或 Heroku。上传数据到 PostgreSQL 数据库可以让你利用其他工具探索数据，比如 Grafana。插件生成的数据存储在 `obsidian` 数据库模式下，你可以使用 PostgreSQL 视图提取和格式化所需信息。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



