---
uid: 2023102611082840
title: Obsidian 插件：【Readme】Send to Ghost
tags: ['obsidian插件', 'readme']
description: 一键发送和发布笔记到你的Ghost博客
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Send to Ghost

> [!Note] 插件名片
> - 插件名称：Send to Ghost
> - 插件作者：Southpaw1496
> - 插件说明：一键发送和发布笔记到你的 Ghost 博客
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/southpaw1496/obsidian-send-to-ghost)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?send-to-ghost)

## 概述

一键发送和发布笔记到你的 Ghost 博客

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Southpaw1496/obsidian-send-to-ghost/master/README.md)
>

---

## Readme(翻译）

下面是 [[send-to-ghost]] 插件的自述翻译

# 发送到 Ghost

这是 Jay Nguyen 的 [obsidian-ghost-publish](https://github.com/jaynguyens/obsidian-ghost-publish) 的维护分支。它允许你将 Obsidian 笔记发送到 [Ghost](https://ghost.org) 博客平台，可以选择发布或者保存为草稿。

## 使用方法

- 在 Ghost 中，按照 [此指南](https://ghost.org/integrations/custom-integrations/) 创建一个新的自定义集成。稍后您将需要**管理员 API 密钥**和**API URL**。
- 安装并启用插件
- 在插件设置中，填写先前创建的自定义集成的 API URL 和管理员 API 密钥。
- 现在，您可以通过单击侧边栏中的小幽灵或使用命令面板来发布文档。

## 前置格式

Send to Ghost 使用前置格式来设置 Ghost 特定的设置，如标题、标签和特色图片。您可以通过在笔记的开头用 `---` 将其括起来来添加前置格式。

支持以下选项：

```md
---
title: 字符串（默认值：文件名）
tags: （默认值：无）
- 标签1
- 标签2
featured: 布尔值（默认值：false）
published: 布尔值（默认值：false）
excerpt: 字符串（默认值：空白）
feature_image: 字符串（默认值：空白）
---
```

### 开发

该插件使用 PNPM 进行依赖管理。

- 克隆存储库。
- 运行 `pnpm i` 安装必要的依赖项。
- 运行 `pnpm dev` 在项目文件更改时自动重新编译。

### 手动安装

- 运行 `pnpm build`
- 将 `main.js` 和 `manifest.json` 复制到 `VaultFolder/.obsidian/plugins/send-to-ghost/`，其中 `Vaultfolder` 是你的 Obsidian vault 的位置。

### 问题与支持

如果您发现了一个错误，请提交一个 [问题](https://github.com/Southpaw1496/obsidian-send-to-ghost)。否则，请通过 [我的网站](https://southpaw1496.me) 与我联系。
