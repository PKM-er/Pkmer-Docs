---
uid: 2023080322133752
title: Obsidian 插件：【Readme】Add an ID to the front matter
tags: ['obsidian插件', 'readme']
description: 为每个markdown文档的前置元数据添加一个全局唯一的ID。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Add an ID to the front matter

> [!Note] 插件名片
> - 插件名称：Add an ID to the front matter
> - 插件作者：llimllib
> - 插件说明：为每个 markdown 文档的前置元数据添加一个全局唯一的 ID。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/llimllib/obsidian-guid-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?guid-front-matter)

## 概述

为每个 markdown 文档的前置元数据添加一个全局唯一的 ID。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/llimllib/obsidian-guid-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[guid-front-matter]] 插件的自述翻译

# Obsidian GUID 插件

该插件将会：

- 在您编辑的每个 Markdown 文件的前置元数据中添加一个唯一的 ID。
- 创建一个名为 `Add an ID to all notes` 的命令，该命令将会为所有笔记添加一个 ID。

Obsidian 文档

请参阅<https://github.com/obsidianmd/obsidian-api 和 https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines>

制作一个发布版本

先决条件：`jq`、`gh` 和 `make`。在 Mac 上：`brew install jq gh make`

- 在 `manifest.json` 和 `package.json` 中更新版本号
- 运行 `make release`
- 按照 [Obsidian文档中的说明提交插件进行审核](https://marcus.se.net/obsidian-plugin-docs/publishing/submit-your-plugin#step-2--submit-your-plugin-for-review)



