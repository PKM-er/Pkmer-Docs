---
uid: 2023120719225861
title: Obsidian 插件：【Readme】Auto Link Title
tags: ['链接处理', '效率', '自动化', 'obsidian插件', 'readme']
description: 该插件在粘贴网页时，自动获取网页以提取链接标题，从而创建具有正确标题集的markdown链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Auto Link Title

> [!Note] 插件名片
> - 插件名称：Auto Link Title
> - 插件作者：Matt Furden
> - 插件说明：该插件在粘贴网页时，自动获取网页以提取链接标题，从而创建具有正确标题集的 markdown 链接。
> - 插件分类：[' 链接处理 ', ' 效率 ', ' 自动化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/zolrath/obsidian-auto-link-title)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-auto-link-title)

## 概述

该插件在粘贴网页时，自动获取网页以提取链接标题，从而创建具有正确标题集的 markdown 链接。

![Auto Link Title](https://cdn.pkmer.cn/covers/obsidian-auto-link-title.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zolrath/obsidian-auto-link-title/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-auto-link-title]] 插件的自述翻译

## Obsidian 自动链接标题

![自动链接示例](https://cdn.pkmer.cn/covers/obsidian-auto-link-title_2_0.gif)

### 自动为新链接添加标题

该插件在链接被粘贴时自动获取网页并提取链接标题，创建一个带有正确标题的 markdown 链接。

例如：

当粘贴 `https://github.com/zolrath/obsidian-auto-link-title` 时，插件会获取页面并检索标题，从而得到以下粘贴内容：`[zolrath/obsidian-auto-link-title: Automatically fetch the titles of pasted links](https://github.com/zolrath/obsidian-auto-link-title)`

### 为现有的原始 URL 添加标题

此外，您可以使用 `ctrl-shift-e`（Windows）或 `cmd-shift-e`（OS X）来将现有的原始链接转换为带有正确标题的 markdown 格式链接。

如果您的文本光标位于 URL `https://github.com/zolrath/obsidian-auto-link-title` 内，按下 `ctrl-shift-e` 或 `cmd-shift-e` 将文本转换为 `[zolrath/obsidian-auto-link-title: Automatically fetch the titles of pasted links](https://github.com/zolrath/obsidian-auto-link-title)`。

此外，使用 `ctrl-shift-e`（Windows）或 `cmd-shift-e`（OS X），您可以使用从 URL 获取的标题覆盖现有的 Markdown 链接的标题。

如果您的文本光标位于 `[some plugin](https://github.com/zolrath/obsidian-auto-link-title)` 内，按下 `ctrl+shift+e` 将获取网站的标题并替换它，结果为 `[zolrath/obsidian-auto-link-title: Automatically fetch the titles of pasted links](https://github.com/zolrath/obsidian-auto-link-title)`。

### 手机粘贴

为了粘贴 URL，请确保您执行“点击并按住 -> 粘贴”操作将 URL 粘贴到您的文档中。

Gboard

Google 的 [Gboard](https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en_US&gl=US) 键盘在键盘上方有一个剪贴板助手快捷方式，可以快速粘贴。

由于该功能的实现方式，它不会触发“粘贴”事件，从而阻止了该插件与文本的交互。

### 隐私声明

为了获取标题，该插件会下载粘贴的 URL 所在的页面并提取标题。

`<head><title>Title</title></head>`

在桌面设备上，使用 Electron 的 `BrowserWindow` 来实现，可以处理包括中文在内的扩展字符集，没有问题。

然而，在移动设备上，由于我们没有使用 Electron 平台，我们只能简单地使用 `fetch` 来获取页面。

由于 Web 服务器上的 CORS 限制不允许直接的 `fetch`，它使用 [allorigins.win](https://allorigins.win) 代理来下载页面。该代理不支持其他字符集，并将它们返回为问号。
