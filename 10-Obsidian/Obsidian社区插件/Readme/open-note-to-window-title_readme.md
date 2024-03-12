---
uid: 20230817224055
title: Obsidian 插件：Custom window title
tags: ['界面相关', 'obsidian插件', 'readme']
description: 这个插件在窗口标题中显示当前打开的音符。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Custom window title

> [!Note] 插件名片
> - 插件名称：Custom window title
> - 插件作者：Joost Plattel
> - 插件说明：这个插件在窗口标题中显示当前打开的音符。
> - 插件分类：[' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jplattel/open-note-to-window-title)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-note-to-window-title)

## 概述

这个插件在窗口标题中显示当前打开的音符。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jplattel/open-note-to-window-title/main/README.md)

---

## Readme(翻译）

下面是 [[open-note-to-window-title]] 插件的自述翻译

# 将活动笔记添加到窗口标题

这可能是最小的 Obsidian 插件，但它会将当前打开的笔记添加到窗口标题中，如下所示：

`Obsidian v0.11.0 - obsidian - testing/currently-open-note-for-project-xyz.md`

当您使用 [Timing](https://timingapp.com/?lang=en)（或任何其他使用窗口标题的应用程序）跟踪应用程序使用情况时，这非常有用。否则，如果您的应用程序切换器允许像 [contexts.app](https://contexts.co/) 这样的过滤，那么在使用 alt-tab 切换时，它可能对于了解您正在做什么很有用。

## 模板化

通过此插件的设置，可以对 Obsidian 应用程序的窗口标题进行模板化。您可以指定 `{{filename}}`、`{{filepath}}`、`{{vault}}` 或 `{{workspace}}`。还支持前置元数据。例如，如果您有一个带有以下前置元数据的文件：

```yaml
category: "Testing"
```

您可以使用以下模板：`Obsidian - {{frontmatter.category}}`。这将导致打开文件后窗口标题为 `Obsidian - Testing`。如果文件没有相应的前置元数据键，则会被删除，结果只剩下：`Obsidian -`。
