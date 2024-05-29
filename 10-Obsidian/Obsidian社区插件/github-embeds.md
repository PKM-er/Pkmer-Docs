---
uid: 2024052908591003
title: Obsidian 插件：GitHub Embeds
tags: ['第三方工具集成', '编辑工具', '文件管理', 'obsidian插件']
description: 在Obsidian中直接嵌入GitHub问题、PR和代码片段。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GitHub Embeds

> [!Note] 插件名片
> - 插件名称：GitHub Embeds
> - 插件作者：Gino Valente
> - 插件说明：在 Obsidian 中直接嵌入 GitHub 问题、PR 和代码片段。
> - 插件分类：[' 第三方工具集成 ', ' 编辑工具 ', ' 文件管理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/MrGVSV/obsidian-github-embeds)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?github-embeds)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/MrGVSV/obsidian-github-embeds/main/README.md)

![GitHub Embeds](https://cdn.pkmer.cn/covers/github-embeds.gif!pkmer)

## 概述

Obsidian GitHub Embeds 是一个 Obsidian 插件，可以在 Obsidian 中直接嵌入 GitHub 问题、PR 和代码片段。当处于“阅读模式”时，该插件会查找所有的 GitHub 链接，并尝试在下方嵌入预览。

该插件支持以下链接类型的显示：

- `https://github.com/<OWNER>/<REPO>/issues/<ISSUE NUMBER>`
- `https://github.com/<OWNER>/<REPO>/pull/<PR NUMBER>`
- `https://github.com/<OWNER>/<REPO>/blob/<REF>/<PATH TO FILE>`

此外，插件还支持显示文件片段，可以通过在 URL 中添加 `#L12` 或 `#L12-L19` 来限制显示的行数。

为了使用 GitHub 的 API，需要进行身份验证。因此，该插件需要用户创建一个个人访问令牌，并在插件设置中进行配置。

该插件可以提供更好的 Obsidian 和 GitHub 集成，方便用户在 Obsidian 中直接查看和处理 GitHub 相关内容。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



