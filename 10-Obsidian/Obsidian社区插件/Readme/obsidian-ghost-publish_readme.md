---
uid: 2023080322232232
title: Obsidian 插件：【Readme】Obsidian Ghost Publish
tags: ['obsidian插件', 'readme']
description: 一键发布到Ghost站点
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Ghost Publish

> [!Note] 插件名片
> - 插件名称：Obsidian Ghost Publish
> - 插件作者：@jaynguyens
> - 插件说明：一键发布到 Ghost 站点
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jaynguyens/obsidian-ghost-publish)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-ghost-publish)

## 概述

一键发布到 Ghost 站点

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jaynguyens/obsidian-ghost-publish/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-ghost-publish]] 插件的自述翻译

# Obsidian Ghost Publish

使用一键发布功能，将 [Obsidian](https://obsidian.md/) 中的内容发布到 [Ghost](https://ghost.org/) 网站的插件。

## 如何使用

- 创建一个自定义集成，按照此 [链接](https://ghost.org/integrations/custom-integrations/)。您需要一个**管理员 API 密钥**和**API URL**。
- 安装插件后，启用插件并将 API 密钥和 API URL 添加到设置中。
- 就这样！您现在可以通过单击侧边栏上的 Ghost 图标或使用命令面板（CMD+P）来发布当前文档。

## 前言格式

Obsidian Ghost Publish 使用前言来指定您希望如何发布您的帖子。

目前，格式限于：

```md
title: string（默认值：文件名）
tags:（默认值：[]）
- tag1
- tag2
featured: boolean（默认值：false）
published: boolean（默认值：false）
excerpt: string（默认值：未定义）
feature_image: string（默认值：未定义）
```

注意：

- `published` 允许您指定是立即发布帖子还是起草帖子。

### 如何在开发环境中运行

- 克隆这个仓库。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动编译并进入监听模式。

### 手动安装插件

- 运行 `npm run build`
- 将 `main.js` 和 `manifest.json` 复制到你的 vault `VaultFolder/.obsidian/plugins/your-plugin-id/`。

### 问题和请求

- 对于功能请求，请使用讨论区。
- 对于当前版本的任何问题，请使用问题区。



