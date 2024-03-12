---
uid: 20231026111420
title: Obsidian 插件：【Readme】File Explorer++
tags: ['obsidian插件', 'readme']
description: 使用自定义过滤器（如通配符和正则表达式），根据文件和文件夹的名称、路径和标签，隐藏和固定文件资源管理器中的文件和文件夹。此外，还可以通过文件菜单中的单击操作实现相同的功能。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】File Explorer++

> [!Note] 插件名片
> - 插件名称：File Explorer++
> - 插件作者：kelszo
> - 插件说明：使用自定义过滤器（如通配符和正则表达式），根据文件和文件夹的名称、路径和标签，隐藏和固定文件资源管理器中的文件和文件夹。此外，还可以通过文件菜单中的单击操作实现相同的功能。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kelszo/obsidian-file-explorer-plus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?file-explorer-plus)

## 概述

使用自定义过滤器（如通配符和正则表达式），根据文件和文件夹的名称、路径和标签，隐藏和固定文件资源管理器中的文件和文件夹。此外，还可以通过文件菜单中的单击操作实现相同的功能。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kelszo/obsidian-file-explorer-plus/master/README.md)

---

## Readme(翻译）

下面是 [[file-explorer-plus]] 插件的自述翻译

# Obsidian.md 的文件浏览器 ++ 插件

**文件浏览器 ++**增强了 [Obsidian.md](https://obsidian.md/) 中内置的文件浏览器。该插件使用户能够高效地隐藏和固定文件和文件夹。您可以根据文件/文件夹名称、路径和标签使用自定义通配符或正则表达式过滤器。此外，文件菜单中的简单点击可以隐藏或固定特定的文件或文件夹。

<p align="center"><img src="assets/example.png" width="350"></p>

## **使用方法**

1. 通过 Obsidian 中的插件设置选项卡或右键单击文件/文件夹并选择“隐藏/固定文件”来设置过滤器。
2. 在设置中切换过滤器的开/关状态，或使用 `切换所有固定/隐藏过滤器` 命令。对于单个过滤器，使用 `切换固定/隐藏过滤器` 命令。

## **特点**

- **灵活的过滤功能**：使用通配符或正则表达式过滤器来隐藏和固定文件和文件夹的名称、路径和标签。
- **快速操作**：通过右键单击即可立即隐藏或固定特定的文件和文件夹。
- **高效性**：通过猴子补丁，在 Obsidian 文件夹排序或过滤器更改时才运行插件。
- **透明度**：查看隐藏或固定的路径，并了解每个路径背后的过滤器。
- **移动设备兼容性**：此插件支持移动设备。

## **功能请求和错误报告**

虽然插件还处于初期阶段，但我们欢迎改进建议。如果您遇到任何错误或有任何功能想法，请开启一个问题进行讨论。

## **许可证**

File Explorer++ 采用 GNU [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) 许可证。更多详细信息，请参阅 `LICENSE` 文件。
