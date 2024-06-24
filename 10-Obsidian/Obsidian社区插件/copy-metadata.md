---
uid: 2024052909163373
title: Obsidian 插件：Copy Metadata
tags: ['第三方工具集成', '编辑工具', '文件管理', 'obsidian插件']
description: 复制文件元数据，例如创建时间，到剪贴板。将复制的元数据插入到文件名中。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Copy Metadata

> [!Note] 插件名片
> - 插件名称：Copy Metadata
> - 插件作者：wenlzhang
> - 插件说明：复制文件元数据，例如创建时间，到剪贴板。将复制的元数据插入到文件名中。
> - 插件分类：[' 第三方工具集成 ', ' 编辑工具 ', ' 文件管理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/wenlzhang/obsidian-copy-metadata)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copy-metadata)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wenlzhang/obsidian-copy-metadata/main/README.md)

## 概述

Copy Metadata 是一个 Obsidian 插件，用于将文件元数据（例如创建时间）复制到剪贴板，并将其插入到活动文件名中。该插件的主要功能包括将文件的创建时间复制到剪贴板中，以及将文件的创建时间追加到活动文件名中。使用场景包括在 Obsidian 移动版上快速创建笔记，在文件名中插入 Zettelkasten 时间戳可能不太方便。当在 Obsidian 桌面版上工作时，可以使用该插件自动将笔记的创建时间追加到活动文件名中。该插件的开发主要是为了解决在移动设备上频繁记录笔记和在桌面设备上重命名笔记的问题。使用时需要使用 [moment.js](https://momentjs.com/docs/#/displaying/format/) 来格式化元数据时间信息，并使用方括号将非格式字符串内容括起来。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



