---
uid: 20230803231105
title: Obsidian 插件：Copy Search URL
tags: ['obsidian插件', 'readme']
description: 在搜索视图中添加一个按钮，用于复制Obsidian搜索URL。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232527
---

# Obsidian 插件：Copy Search URL

> [!Note] 插件名片
> - 插件名称：Copy Search URL
> - 插件作者：Carlo Zottmann
> - 插件说明：在搜索视图中添加一个按钮，用于复制 Obsidian 搜索 URL。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/czottmann/obsidian-copy-search-url)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-copy-search-url)

## 概述

在搜索视图中添加一个按钮，用于复制 Obsidian 搜索 URL。

![Copy Search URL](https://cdn.pkmer.cn/covers/obsidian-copy-search-url_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/czottmann/obsidian-copy-search-url/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-copy-search-url]] 插件的自述翻译

<img src="https://raw.githubusercontent.com/czottmann/obsidian-copy-search-url/main/readme-assets/copy-search-url-256.png" height="128" alt="插件标志物：一个列表图标，一个加号，一个链接图标">

# 复制搜索 URL

该插件在 [Obsidian](https://obsidian.md) 的搜索视图的“X results”上下文菜单中添加了一个菜单项。点击它将会将当前搜索的 [Obsidian URL](https://help.obsidian.md/Advanced+topics/Using+obsidian+URI#Action+search) 复制到剪贴板中。这样可以更方便地收藏预定义的搜索。

## 展示

![展示GIF：编辑器和搜索视图都打开，搜索了“hello”，然后鼠标点击了新的“复制Obsidian搜索URL”上下文菜单项，结果手动粘贴到了编辑器中，然后又搜索了“dazuma”，点击了菜单项，结果也被粘贴到了编辑器中，然后又搜索了“plugins”，点击了菜单项，该结果也被粘贴到了编辑器中。然后Obsidian切换到阅读模式，依次点击了这三个链接，显示它们的相关搜索结果。](https://raw.githubusercontent.com/czottmann/obsidian-copy-search-url/main/readme-assets/showcase.gif)

## 安装

1. 在 Obsidian 的社区插件浏览器中搜索“Copy Search URL”。([点击此链接](https://obsidian.md/plugins?id=zottmann) 可以打开它)
2. 安装插件。
3. 在 Obsidian 的设置中启用插件，找到“Community plugins”选项。

就是这样。

## 通过 BRAT 安装（用于预发布或测试版）

1. 安装 [BRAT](https://github.com/TfTHacker/obsidian42-brat)。
2. 将“Copy Search URL”添加到 BRAT 中：
    1. 通过设置→社区插件打开“Obsidian42 - BRAT”。
    2. 点击“添加 Beta 插件”。
    3. 使用存储库地址 `czottmann/obsidian-copy-search-url`。
3. 在设置→选项→社区插件下启用“Copy Search URL”。

请注意

该插件为核心插件添加了功能（一个按钮）。关于这个想法是否明智，还没有定论，但无论如何，我们都在这里。 ;)

我想要这个功能已经有一段时间了，所以我自己构建了它。这对我来说是一个很好的学习经验。

开发

克隆存储库，运行 `pnpm install` 或 `npm install` 来安装依赖项。然后，运行 `pnpm dev` 或 `npm run dev` 来编译并监视文件更改。

感谢 [obsidian-tasks](https://github.com/obsidian-tasks-group/obsidian-tasks) 团队提供的 GitHub Action 工作流程的“起始模板”和方便的 `release.sh` 脚本

感谢 [Discord 频道 `#plugin-dev`](https://discord.com/channels/686053708261228577/840286264964022302) 的成员指导我正确的方向

## 作者

Carlo Zottmann，<carlo@zottmann.org>，<https://zottmann.org/>

## 许可证

MIT，详见 [LICENSE.md](https://github.com/czottmann/obsidian-copy-search-url/blob/main/LICENSE.md)。
