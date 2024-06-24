---
uid: 2024052909104587
title: Obsidian 插件：Link Server
tags: ['第三方工具集成', '数据分析', '编辑工具', 'obsidian插件']
description: 该插件将在端口3333上打开一个反向代理服务器以获取Obsidian API的wikiLink信息。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Link Server

> [!Note] 插件名片
> - 插件名称：Link Server
> - 插件作者：moelody
> - 插件说明：该插件将在端口 3333 上打开一个反向代理服务器以获取 Obsidian API 的 wikiLink 信息。
> - 插件分类：[' 第三方工具集成 ', ' 数据分析 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/moelody/link-to-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-info-server)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/moelody/link-to-server/master/README.md)

## 概述

Link Server 插件通过在端口 3333 打开一个反向代理服务器，从 Obsidian API 中获取 Wiki 链接信息。用户可以通过访问 `http://localhost:3333/?fileLink=<wiki原链接>&sourcePath=<md文件路径>` 来获取 TFile 类型的 json 数据，包括文件信息如文件名、路径等。用户可以在 Obsidian v0.12.2+ 版本中使用该插件，在设置中启用插件或通过 GitHub 下载安装。该插件适用于需要获取 Wiki 链接信息的用户，提供了简便的方式来获取文件信息。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



