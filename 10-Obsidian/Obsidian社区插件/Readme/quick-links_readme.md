---
uid: 2023080322252085
title: Obsidian 插件：【Readme】Quick Links
tags: ['obsidian插件', 'readme']
description: 创建快速链接快捷方式到维基百科和其他网站
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Quick Links

> [!Note] 插件名片
> - 插件名称：Quick Links
> - 插件作者：Ian Fisher
> - 插件说明：创建快速链接快捷方式到维基百科和其他网站
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/iafisher/obsidian-quick-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quick-links)

## 概述

创建快速链接快捷方式到维基百科和其他网站

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/iafisher/obsidian-quick-links/master/README.md)
>

---

## Readme(翻译）

下面是 [[quick-links]] 插件的自述翻译

# Obsidian 快速链接

在 [Obsidian](https://obsidian.md) 中创建快捷方式，以便快速链接到外部网站。

例如，您可以通过写入 `[[w:New York City]]` 来链接到维基百科上的“纽约市”。

您还可以定义自己的自定义快捷方式。例如，您可以创建一个 `twitter:` 前缀，以便通过 `[[twitter:some-twitter-handle]]` 链接到 Twitter 个人资料。

常见问题解答

可以。如果您的 vault 名为 `my-vault`，那么在“管理快速链接”设置窗格中将目标 URL 设置为 `obsidian://vault/my-vault/%s`。

有两个选项：

- 在快速链接设置中取消选中“使用维基链接语法”框。这意味着您将需要将快速链接写为 `[](w:Whatever)` 而不是 `[[w:Whatever]]`。
- 在图形视图设置中，启用“仅显示现有文件”选项。

我改变了一个设置/添加了一个新链接，但结果仍然相同。

Obsidian 只有在内容发生变化时才重新渲染，因此打开的标签可能显示过时设置的结果。关闭并重新打开文件将强制 Obsidian 使用最新的设置重新渲染。

## 开发

- 运行 `npm run dev` 以开发模式构建，并在更改时自动重新构建。
- 运行 `npm run build` 以生产模式构建，并运行类型检查器。
- 运行 `npm run check` 以单独运行类型检查器。

要设置插件进行开发，请克隆此存储库，并在您的 vault 的 `.obsidian/plugins` 文件夹中创建一个符号链接。

在每次重新构建后，您需要禁用并重新启用插件以加载最新的代码。

由于 Obsidian 仅重新渲染文件的更改部分，您可能需要关闭并重新打开文件以查看最新代码的渲染结果。
