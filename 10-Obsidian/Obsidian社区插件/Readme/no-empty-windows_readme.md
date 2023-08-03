---
uid: 20230803231105
title: Obsidian 插件：No Empty Windows
tags: ['obsidian插件', 'readme']
description: 当最后一个标签关闭时，使用cmd+W在Mac上关闭Obsidian窗口。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232540
---

# Obsidian 插件：No Empty Windows

> [!Note] 插件名片
> - 插件名称：No Empty Windows
> - 插件作者：L Fahn-Lai
> - 插件说明：当最后一个标签关闭时，使用 cmd+W 在 Mac 上关闭 Obsidian 窗口。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/popscallion/obsidian-no-empty-windows)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?no-empty-windows)

## 概述

当最后一个标签关闭时，使用 cmd+W 在 Mac 上关闭 Obsidian 窗口。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/popscallion/obsidian-no-empty-windows/master/README.md)
>

---

## Readme(翻译）

下面是 [[no-empty-windows]] 插件的自述翻译

# no-empty-windows

这个插件为那些更喜欢浏览器般行为的用户提供了一个替代 Obsidian 中的“关闭当前标签页”命令（"workspace:close"）。在这种行为中，关闭最后一个打开的标签页会关闭窗口，但保留应用在后台运行，以便更快地重新启动。

“关闭当前标签页或空窗口”会关闭当前焦点的标签页，除非它被固定，此时它要么取消固定标签页，要么直接关闭它（可以通过插件设置进行切换）。如果在多个标签组/弹出窗口中打开了标签页，插件将循环遍历所有打开的标签页，直到主窗口中只剩下一个标签页。

使用方法

要使用此命令，可以从命令面板中调用它，也可以将其映射到关闭当前标签页的热键（默认情况下，在 MacOS 上为 cmd+W）。

## 安装

在 Obsidian 设置的 Community Plugins 中寻找此插件，或将其解压到 [vault]/.obsidian/plugins/目录中。
