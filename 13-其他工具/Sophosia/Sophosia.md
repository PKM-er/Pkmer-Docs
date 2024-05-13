---
uid: 20240228165010
title: Sophosia - 你的研究小助手
tags: [sophosia]
description: Sophosia 简介
author: QuantumRose
type: other
draft: false
editable: false
modified: 20240317091900
---

# Sophosia - 你的研究小助手

![icon](https://cdn.pkmer.cn/images/202403062126030.png!pkmer)

官网: <https://sophosia.app>

Github: <https://github.com/sophosia/sophosia-releases>

## 前言

我还记得在两年前我初次开始做研究的时候，我曾经一度烦恼应该如何将自己的笔记和论文有机地结合起来。我曾使用过 Mendeley，Zotero 这些文献管理工具，这些工具都是非常好的文献管理工具，然而在电子笔记越来越普遍的当下，他们并不能很好结合文献和笔记这两个东西。于是，我便开始了小助手的开发......

小助手是一款结合了笔记功能的文献管理工具。相对于一般的文献管理工具，我们能使用 markdown 和 excalidraw 记笔记，满足了几乎所有领域的研究者。一般来说，研究人员需要通过大量的阅读才能摸清自己的领域的大致情况，我不会忘记我当时面对着众多陌生名词时的迷茫感。拥有一个结合了笔记和文献管理功能的软件，能够使得这些知识保存在同一个地方。这样的做法令搜索功能发挥出了它应有的作用：除了能快速地翻找论文的时间，还能够找到你曾经做过的笔记。

Sophosia 是研究小助手的英文名字。在下文中 Sophosia 与小助手是同一款软件 ^v^

![screenshot](https://cdn.pkmer.cn/images/202403062126336.png!pkmer)

## Sophosia 的亮点

### 强大的笔记系统

小助手比其他文献管理工具有着更强大的笔记系统，小助手

- 支持即时渲染 Markdown
- 支持使用 Excalidraw 画板
- 支持双链
- 支持多层笔记

### 文件为中心的设计

所谓的文件为中心，即：文献数据、笔记、以及运行所需的数据均以文件的形式存储在用户选择的文件夹中。这使得

- 小助手兼容大部分同步工具
- 小助手支持用户建立不同的文献库
- 分享文献与笔记变得相当容易
- 与其他 Markdown 编辑器（例如 Obsidian）变得非常简单

## 与其他同类型软件对比

### Zotero

- Zotero 的笔记系统较弱，而 Sopohsia 则支持 Markdown 笔记以及 Excalidraw 画板。
- Zotero 只提供了 300MB 的免费同步额度。但 Sophosia 支持主流的大部分同步工具，您甚至可以选择免费开源的 Syncthing。
- Zotero 以数据库为中心，文献的信息和笔记都是存储在数据库中。进行分享，或者与其他软件进行协作时会不方便。

### EndNote

- EndNote 只支持二级目录，而 Sophosia 支持多级分类。
- EndNote 不支持标签，而在 Sphosia 中你可以轻松的通过标签进行查找、分类和管理。
- Endnote 是一款收费软件：标准版官网售价 1818RMB，教育版官网售价 1218RMB。

### Mendeley

- Mendeley 的使用并不能够完全离线，在国内的网络环境下，你可能偶尔会面临无法登陆 Mendeley 网站以致于无法使用软件的情况。
- Mendeley 同样只提供了有限的同步额度。
- Mendeley 的 linux 版本只是网页版的 Electron 套壳，体验感较差。

### NoteExpress

- NoteExpress 是一款国产文献管理软件，对中文文献和中文数据库的支持较为优秀，但是他同样是一款付费软件，永久授权标准版 1980RMB。
- NoteExpress 只支持 Windows 系统，Mac 和 Linux 系统则被拒之门外。

## Sophosia 基本使用

请移步至 [[Sophosia 基本使用]] 页面。

## 一些 Q&A

Q: 软件如何收费?

A: 小助手将会一直保持免费。但是为了给更多用户提供更优质更长远的服务，小助手将会推出收费的插件作为 VIP 功能。从 VIP 功能上获得的收益将会用于支付服务器、各类 API、数字证书、开发人员等方面费用，以确保小助手能够持续运营并不断提升服务质量。感谢您的理解和支持！

Q: 有插件系统吗？

A: 有的。正如之前所说，VIP 功能将会以插件的形式加入到小助手中。插件系统的原型已经在测试版 [研究小助手 Beta 版](https://github.com/ResearchHelper/research-helper) 中进行了测试。但是在用户实际使用它之前，我们仍需要改进插件系统结构和 API。

Q: 如何在设备之间同步数据

A: 与其他文献管理器不同，Sophosia 的所有数据都存储在用户选择的储存文件夹中。用户只需要将储存文件夹同步到其他设备上即可。这对于类似于 Syncthing 这样的免费同步技术特别友好。

Q: 我可以导出带注释的 PDF 吗？

A: 据我所知，支持 LaTeX 的注释仅在 Sophosia 中可用，它不是 PDF 阅读器的标准功能。目前我们不支持导出带注释的 PDF。

Q: 我可以在其他应用程序中编辑 PDF、Markdown 和 Excalidraw 文件吗？

A: 可以。 Sophosia 是以文件中心的方式设计的，您可以在您喜欢的应用程序中编辑 PDF 及笔记，而不必担心应用程序之间发生数据。
