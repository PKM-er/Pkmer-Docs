---
uid: 2024052908352171
title: Obsidian 插件：Pocketbook Cloud Highlight Importer
tags: ['数据处理', '第三方工具集成', '备份与恢复', 'obsidian插件']
description: 将您的Pocketbook Cloud帐户中的笔记和高亮导入到您的保险库中。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Pocketbook Cloud Highlight Importer

> [!Note] 插件名片
> - 插件名称：Pocketbook Cloud Highlight Importer
> - 插件作者：Lena Brüder
> - 插件说明：将您的 Pocketbook Cloud 帐户中的笔记和高亮导入到您的保险库中。
> - 插件分类：[' 数据处理 ', ' 第三方工具集成 ', ' 备份与恢复 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/lenalebt/obsidian-pocketbook-cloud-highlight-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pocketbook-cloud-highlight-importer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lenalebt/obsidian-pocketbook-cloud-highlight-importer/main/README.md)

![Pocketbook Cloud Highlight Importer](https://cdn.pkmer.cn/covers/pocketbook-cloud-highlight-importer.png!pkmer)

## 概述

Obsidian Pocketbook Cloud Highlights 插件可以将您在 Pocketbook Cloud 账户上创建的笔记和高亮导入到您的 Obsidian Vault 中。该插件需要 "dataview" 插件的支持，并且不会检查是否已安装。它适用于使用密码登录的情况。

插件的工作方式如下：

- 读取您 Pocketbook 账户上的所有高亮
- 将它们转储为带有 yaml frontmatter 的小型 Markdown 文件
- 创建 dataview 查询以将所有评论一起获取

安装完成后，您需要在设置页面填写用户名，并点击 "Log in" 开始登录过程。登录过程中需要输入密码，但密码不会被保存，刷新令牌会被保存。如果您的 Pocketbook 账户下有多个商店，您可以填写要使用的 "Shop name"（名称的子字符串即可）。"Import Folder" 是您的高亮将保存的位置。

设置完成后，您可以在命令面板中找到 Pocketbook Cloud 高亮导入功能。该插件的许可证为 AGPL-3.0，因为使用的库 "epub-cfi-resolver" 为 AGPL-3.0。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



