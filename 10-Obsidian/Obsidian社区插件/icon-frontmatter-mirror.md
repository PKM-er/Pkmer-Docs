---
uid: 1793625614029000
title: "Obsidian 插件：Icon Frontmatter Mirror"
tags: ["文件管理", "第三方工具集成", "自动化与AI", "obsidian插件"]
description: "Copies the file icons that you set in Iconize to a property in each note, and keeps the property current. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Icon Frontmatter Mirror

> [!Note] 插件名片
> - 插件名称：Icon Frontmatter Mirror
> - 插件作者：theluckystrike
> - 插件说明：Copies the file icons that you set in Iconize to a property in each note, and keeps the property current. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/icon-frontmatter-mirror)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?icon-frontmatter-mirror)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/icon-frontmatter-mirror/master/README.md)



## 概述

Icon Frontmatter Mirror 解决了 Iconize 插件图标数据仅存储在独立文件中、无法直接用于笔记属性管理的问题。它会自动读取 Iconize 的数据，将你在文件资源管理器中设置的图标和颜色，实时同步写入对应笔记的 Frontmatter 属性中。这意味着你的图标信息不再只是视觉装饰，而是变成了笔记结构的一部分，方便后续通过 Dataview 等插件进行检索或展示。

想象一下，你希望根据图标对笔记进行分类，或者在笔记列表中直接显示图标名称。以前你需要手动在每篇笔记的头部添加属性，现在只需在 Iconize 中点击“更改图标”，几秒后笔记属性栏就会自动出现对应的 `icon` 和 `iconColor` 字段。即使你重命名或移动了笔记，插件也能确保属性跟随笔记保留，无需手动调整。

与同类插件相比，它的核心特色是“非侵入性”和“冲突保护”。它只读取 Iconize 数据，绝不修改 Iconize 的原始数据文件，确保两者独立运行。更重要的是，如果笔记中已存在手动设置的图标属性，插件不会覆盖，而是将其列入冲突列表供你选择保留哪个值。这种机制避免了自动同步可能带来的数据丢失风险，让你对笔记内容拥有最终控制权。

使用前请注意，该插件必须配合 Iconize 使用，且仅支持 Markdown 笔记，文件夹图标和 Canvas 等文件类型会被跳过。如果你不需要将图标转化为可查询的属性，或者希望完全手动管理 Frontmatter，此插件可能并非必需。此外，部分高级功能如写入额外属性格式或文件夹笔记图标需要 Pro 订阅，但基础同步功能完全免费。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


