---
uid: 2023080322290219
title: Obsidian 插件：Update time on edit
tags: ['obsidian插件', 'readme']
description: 保持 frontmatter 和最后编辑时间同步
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Update time on edit

> [!Note] 插件名片
> - 插件名称：Update time on edit
> - 插件作者：beaussan
> - 插件说明：保持 frontmatter 和最后编辑时间同步
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/beaussan/update-time-on-edit-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?update-time-on-edit)

## 概述

保持 frontmatter 和最后编辑时间同步

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/beaussan/update-time-on-edit-obsidian/main/README.md)

---

## Readme(翻译）

下面是 [[update-time-on-edit]] 插件的自述翻译

# 更新编辑插件上的时间

该插件在保存文件时会更新文件的元数据，包括文件的更新时间和创建时间（对于新文件非常有用）。

该插件提供以下功能：

- 在一个属性键中保持 `mtime`（最后修改时间）的同步（默认为 `updated`）
- 在一个属性键中保持 `ctime`（文件创建时间）的同步（默认为 `created`）
- 自定义日期格式，默认为 Obsidian 日期格式以供属性显示
- 忽略所有更新的文件夹，对于模板文件非常有用
- 忽略创建属性的文件夹
- 在移动设备和桌面上均可使用

该插件将从 Obsidian 和文件系统中读取 `ctime` 和 `mtime`。**如果文件来自外部来源的更改，头部键将被更新**。

请记得备份您的保险库，因为该插件会修改文件。
