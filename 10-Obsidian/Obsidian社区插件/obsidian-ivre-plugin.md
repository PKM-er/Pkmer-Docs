---
uid: 2024052909193388
title: Obsidian 插件：IVRE
tags: ['第三方工具集成', '数据分析', '编辑工具', 'obsidian插件']
description: IVRE集成到Obsidian：从IVRE抓取数据并将其带入Obsidian笔记中。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：IVRE

> [!Note] 插件名片
> - 插件名称：IVRE
> - 插件作者：The IVRE contributors
> - 插件说明：IVRE 集成到 Obsidian：从 IVRE 抓取数据并将其带入 Obsidian 笔记中。
> - 插件分类：[' 第三方工具集成 ', ' 数据分析 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/ivre/obsidian-ivre-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-ivre-plugin)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ivre/obsidian-ivre-plugin/master/README.md)

![IVRE](https://cdn.pkmer.cn/covers/obsidian-ivre-plugin.png!pkmer)

## 概述

Obsidian IVRE 插件是一个将 IVRE 数据导入 Obsidian 笔记的插件。它需要安装 IVRE CLI，并结合 Obsidian 的组织方式，使渗透测试、红队行动、事件响应、网络威胁情报等的笔记记录变得更加简单。插件仅使用 `ipdata`（Maxmind GeoIP，地址类型）和 `view`。如果您有扫描结果或被动数据需要使用，只需运行 `ivre db2view` 来创建或更新 `view`。使用该插件，您可以选择包含 IP 地址、网络或主机名的文本，然后点击“martini”图标（或运行命令 `ivre-analyze-selection`）进行分析。您还可以为 `ivre-analyze-selection` 命令添加热键。详情请参阅 README。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



