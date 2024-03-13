---
uid: 2023080322271147
title: Obsidian 插件：Snippet Downloader
tags: ['obsidian插件', 'readme']
description: 一个黑曜石插件，可以帮助从仓库中管理CSS片段（下载/更新）
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Snippet Downloader

> [!Note] 插件名片
> - 插件名称：Snippet Downloader
> - 插件作者：Mara-Li
> - 插件说明：一个黑曜石插件，可以帮助从仓库中管理 CSS 片段（下载/更新）
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Lisandra-dev/obsidian-snippet-downloader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-snippet-downloader)

## 概述

一个黑曜石插件，可以帮助从仓库中管理 CSS 片段（下载/更新）

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Lisandra-dev/obsidian-snippet-downloader/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-snippet-downloader]] 插件的自述翻译

# Obsidian 代码片段下载器

该插件旨在帮助您下载和更新存储在 GitHub 仓库中的 CSS 代码片段。

该插件将下载仓库中的所有 CSS 代码片段，除非：

- 它们很大（<1MB）
- 它们的名称为 `obsidian.css`（使用 BRAT 进行主题）
- 它们被排除在外（请参阅设置和排除项）

在设置中，您可以：

- 删除一个仓库。警告！这不会从您的 `.obsidian/snippet` 文件夹中删除代码片段。
- 从下载/更新中排除文件。您可以使用名称或通配符。

因此，插件添加的命令有：

- **添加新的代码片段**：使用 `https://github.com/username/repo` 或 `username/repo` 添加一个新的仓库并下载其中的 CSS 代码片段。
- **更新所有代码片段**：更新所有仓库及其代码片段（除非您将它们排除在外）。
- **更新特定代码片段**：您可以只更新一个代码片段，使用其名称。
- **更新特定仓库**：您可以只更新一个仓库，使用其名称。

💡注意：只有在有新的提交时，文件才会被更新！它不是基于文件内容。

此外，您还可以使用设置选项卡来添加仓库、删除仓库、排除代码片段等。

<table>
<tbody>
	<tr>
		<td>⚠️</td>
		<td><ul><li>如果您的`obsidian`中没有`snippets`文件夹，插件将无法工作：您需要在首次使用插件之前创建它。</li><li>每次更新都会覆盖您对代码片段所做的任何编辑！</li></ul></td>
	</tr>
</tbody>
</table>

## 安装

- 使用 [BRAT-42](https://github.com/TfTHacker/obsidian42-brat) 来安装插件。
- 使用社区插件市场。

## 开发步骤

- `git clone git@github.com:Mara-Li/obsidian-snippet-downloader.git`
- `npm install`
- `npm run dev`

*感谢 BRAT-42，我在这里借鉴了一些想法和代码！*

💡如果有一天 BRAT-42 或 Obsidian 添加了类似的功能，这个插件将被删除！

🗒️对于未经身份验证的用户，存在 60 次 API 调用的限制...这意味着您可以连续下载超过 60 次！
