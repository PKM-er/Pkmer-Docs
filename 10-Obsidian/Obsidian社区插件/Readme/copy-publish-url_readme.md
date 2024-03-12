---
uid: 20230817224052
title: Obsidian 插件：Publish and GitHub URL
tags: ['obsidian插件', 'readme']
description: 复制或打开你发布网站上相应笔记的URL。你也可以在GitHub上打开它的提交历史记录。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Publish and GitHub URL

> [!Note] 插件名片
> - 插件名称：Publish and GitHub URL
> - 插件作者：kometenstaub
> - 插件说明：复制或打开你发布网站上相应笔记的 URL。你也可以在 GitHub 上打开它的提交历史记录。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kometenstaub/copy-publish-url)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?copy-publish-url)

## 概述

复制或打开你发布网站上相应笔记的 URL。你也可以在 GitHub 上打开它的提交历史记录。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kometenstaub/copy-publish-url/main/README.md)

---

## Readme(翻译）

下面是 [[copy-publish-url]] 插件的自述翻译

发布和 GitHub URL 插件

该插件添加了一个命令，允许您复制 Obsidian Publish 网站上的笔记的 URL。

从 v0.2.0 开始，您还可以选择启用文件菜单项。感谢 [@Mara-Li](https://github.com/Mara-Li) 的贡献。

如果将 `publish` 标志设置为 `false`，它不会复制 URL（或显示文件菜单项）。

从 v0.3.0 开始，您还可以直接在浏览器中打开已发布站点上的当前笔记。此功能默认启用。

从 v0.4.0 开始，您可以在 GitHub 上打开当前笔记的 Git 提交历史记录。默认情况下关闭。您需要设置存储库 URL 和分支名称才能使其工作。

### 配置

在设置中，您需要设置您的发布“索引”笔记，以及您的 Obsidian Publish 站点的基本路径。
