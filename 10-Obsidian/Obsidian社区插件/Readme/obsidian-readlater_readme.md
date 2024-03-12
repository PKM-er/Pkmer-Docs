---
uid: 20230817224054
title: Obsidian 插件：Read Later
tags: ['obsidian插件', 'readme']
description: 将网页同步到Markdown，并与阅读稍后应用（Pocket，Instapaper）集成。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Read Later

> [!Note] 插件名片
> - 插件名称：Read Later
> - 插件作者：Gabriele Cannata
> - 插件说明：将网页同步到 Markdown，并与阅读稍后应用（Pocket，Instapaper）集成。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Canna71/obsidian-readlater)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-readlater)

## 概述

将网页同步到 Markdown，并与阅读稍后应用（Pocket，Instapaper）集成。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Canna71/obsidian-readlater/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-readlater]] 插件的自述翻译

# Obsidian 稍后阅读

用于保存和跟踪网页的离线版本的插件

- 将网页下载为 Markdown 格式
- 与“Pocket”（<<https://getpocket.com>）和>“Instapaper”（<<https://www.instapaper.com>）等稍后阅读服务集成>
- 将笔记映射到网页并保持同步

下载或更新一个页面到 markdown

使用一个 [书签脚本](https://canna71.github.io/obsidian-readlater/)

使用命令 `从剪贴板保存URL`

在 frontmatter 中设置 `url` 属性并使用命令 `同步当前页面`

与稍后阅读服务集成

转到设置并授权插件访问您的 Pocket 或 Instapaper 图书馆。可选择设置定期同步和每个服务的自定义文件夹。

您可以使用以下命令强制同步：

`同步 Pocket 未读列表`

或

`同步 Instapaper 未读列表`

插件将从服务中获取书签并将其存储为 Markdown 笔记。

它还可以通过定期获取新书签来选择保持同步。

您还可以从相应的笔记中“归档”书签。

## 自动同步

如果您希望您的笔记与在线版本保持同步，只需设置 `synch` 属性：

```
---
url: https://time.is/
readlater:
  synch: Hourly
  synchtime: 1670768616110
---
```

`synch` 属性可以取以下值：`Manual`（默认值），`Hourly`，`Daily`，`Weekly`，`Monthly`，`Yearly`

提示

这个插件非常适合与共享白板（如 [Arc浏览器](https://arc.net/) 的*easel*）同步使用。

它也非常适合从 [Medium](https://medium.com/) 等网站离线阅读。
