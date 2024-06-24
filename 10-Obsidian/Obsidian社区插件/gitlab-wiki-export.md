---
uid: 2024052909155094
title: Obsidian 插件：Gitlab Wiki Exporter
tags: ['第三方工具集成', '数据分析', '编辑工具', 'obsidian插件']
description: 使您的整个保险库与Gitlab Wiki兼容，并将其导出到指定位置。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Gitlab Wiki Exporter

> [!Note] 插件名片
> - 插件名称：Gitlab Wiki Exporter
> - 插件作者：Josef Rabmer
> - 插件说明：使您的整个保险库与 Gitlab Wiki 兼容，并将其导出到指定位置。
> - 插件分类：[' 第三方工具集成 ', ' 数据分析 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/jrabmer/obsidian-to-gitlab-wiki)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gitlab-wiki-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jrabmer/obsidian-to-gitlab-wiki/master/README.md)

## 概述

Obsidian Gitlab Wiki Converter 是一个插件，用于将整个 Obsidian Vault 导出为 Gitlab Wiki，并将其导出到指定位置。该插件通过以下操作实现 Gitlab Flavoured Markdown（GFM）和 Gitlab Wiki 的兼容性：

- 将文件名中的空格替换为“-”，因为 Gitlab 使用页面 slug 进行链接
- 选择一个文件作为起始页面，将其重命名为“home”
- 删除链接中的文件扩展名，以告诉 Gitlab 这是一个 wiki 页面而不仅仅是一个文件
- 将文件导出到指定文件夹

该插件只是临时重命名文件，并不会对您的 Vault 进行永久更改。

使用该插件前提是您的 Vault 不使用 WikiLinks，而是使用相对路径进行链接格式。如果您有一个使用 WikiLinks 的现有 Vault，可以使用 Ozan Tellioglu 的插件（具有相对路径设置）来转换。使用该插件后，可以使用“将 Vault 导出为 Gitlab Wiki”命令来导出 Vault。在设置中指定导出位置和主页。

未来的计划包括修复 Gitlab 上的换行问题，使用带有空格的名称而不是页面 slug 来链接文件，以及实现更多的 GFM 功能。如果有任何问题或建议，请直接通过 jrabmer@outlook.com 与作者联系。如果您喜欢该插件，可以通过购买作者一杯咖啡来支持他的工作。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



