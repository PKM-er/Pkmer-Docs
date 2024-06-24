---
uid: 2024052909161757
title: Obsidian 插件：Update time on edit
tags: ['编辑工具', '自定义命令', '数据处理', 'obsidian插件']
description: 保持 frontmatter 和最后编辑时间同步
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Update time on edit

> [!Note] 插件名片
> - 插件名称：Update time on edit
> - 插件作者：beaussan
> - 插件说明：保持 frontmatter 和最后编辑时间同步
> - 插件分类：[' 编辑工具 ', ' 自定义命令 ', ' 数据处理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/beaussan/update-time-on-edit-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?update-time-on-edit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/beaussan/update-time-on-edit-obsidian/main/README.md)

## 概述

这个 Obsidian 插件可以在保存时更新文件的元数据，包括最后修改时间和创建时间（对于新文件）。它提供以下功能：

- 将 `mtime`（最后修改时间）同步到属性键中（默认为 `updated`）
- 将 `ctime`（文件创建时间）同步到属性键中（默认为 `created`）
- 自定义日期格式，默认为 Obsidian 日期格式
- 可以忽略某些文件夹的更新，适用于模板文件
- 可以忽略某些文件夹的创建属性
- 可在移动设备和桌面上使用

请注意，该插件会读取 Obsidian 和文件系统中的 `ctime` 和 `mtime`。如果文件从外部来源更改，头部键将被更新。使用该插件时，请记得备份您的 Vault。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



