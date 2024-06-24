---
uid: 2024052909144819
title: Obsidian 插件：Update Time
tags: ['编辑工具', '第三方工具集成', '插件', 'obsidian插件']
description: Update front matter to include creation and last update times.
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Update Time

> [!Note] 插件名片
> - 插件名称：Update Time
> - 插件作者：Sébastien Dubois
> - 插件说明：Update front matter to include creation and last update times.
> - 插件分类：[' 编辑工具 ', ' 第三方工具集成 ', ' 插件 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/dsebastien/obsidian-update-time)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?update-time)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dsebastien/obsidian-update-time/main/README.md)

## 概述

Obsidian Update Time 是一个 Obsidian 插件，用于更新笔记的 front matter，包括创建时间和最后更新时间。安装并启用插件后，它会自动添加或更新元数据中的属性。该插件是 [update-time-on-edit插件](https://github.com/beaussan/update-time-on-edit-obsidian) 的简化重制版，因为原始插件无法与 Obsidian Publish 一起使用。每当检测到文件更改时（无论是在 Obsidian 中还是在其他地方），该插件会更新文件的元数据，包括最新的创建和修改日期。默认情况下，信息存储在 "created" 和 "updated" 属性中。创建时间和修改时间是根据文件的 ctime（文件创建时间）和 mtime（最后修改时间）设置的。该插件支持文件夹排除功能，以避免更新某些文件（例如模板）。请记得备份您的文档库，因为该插件会修改文件。安装后，您需要进入插件的设置中启用它。默认情况下，它是禁用的，以确保您有时间配置它。在配置中，您可以添加要排除的文件夹列表。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



