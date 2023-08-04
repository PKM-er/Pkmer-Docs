---
uid: 2023080322194332
title: Obsidian 插件：【Readme】Hider
tags: ['界面相关', '状态栏', 'obsidian插件', 'readme']
description: 隐藏一些 Obsidian 官方的界面元素。包括工具提示，状态，标题栏，仓库名称，标签栏，搜索建议，frontmatter，滚动条。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Hider

> [!Note] 插件名片
> - 插件名称：Hider
> - 插件作者：@kepano
> - 插件说明：隐藏一些 Obsidian 官方的界面元素。包括工具提示，状态，标题栏，仓库名称，标签栏，搜索建议，frontmatter，滚动条。
> - 插件分类：[' 界面相关 ', ' 状态栏 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kepano/obsidian-hider)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-hider)

## 概述

隐藏一些 Obsidian 官方的界面元素。包括工具提示，状态，标题栏，仓库名称，标签栏，搜索建议，frontmatter，滚动条。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kepano/obsidian-hider/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-hider]] 插件的自述翻译

在 [Twitter](https://www.twitter.com/kepano) 或 [Buy me a coffee](https://www.buymeacoffee.com/kepano) 上支持我的插件和主题开发 **@kepano**。

## 概述

此插件使您能够隐藏 Obsidian 用户界面的某些部分。请注意，您的 CSS 主题可能会覆盖 Hider。

- 隐藏应用程序功能区（可绑定到热键）
- 隐藏选项卡栏（可绑定到热键）
- 隐藏状态栏（可绑定到热键）
- 隐藏保险库名称
- 隐藏滚动条
- 隐藏搜索建议
- 隐藏搜索词匹配数量
- 隐藏工具提示
- 隐藏提示中的说明
- 在阅读视图中隐藏元数据

使您的主题与 Hider 兼容

当功能被切换时，Hider 会在 `body` 元素上注入以下类。

| 切换 | 类 |
| ------ | ----- |
| 应用程序标语 | `.hider-ribbon` |
| 状态栏 | `.hider-status` |
| 标签栏 | `.hider-tabs` |
| 保险库名称 | `.hider-vault` |
| 滚动条 | `.hider-scroll` |
| 搜索建议 | `.hider-search-suggestions` |
| 搜索词计数 | `.hider-search-counts` |
| 工具提示 | `.hider-tooltips` |
| 说明 | `.hider-instructions` |
| 元数据 | `.hider-meta` |