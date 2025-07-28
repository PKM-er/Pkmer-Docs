---
uid: 20250524092606
title: Obsidian 插件：Open Tab Settings 简单实用的 obsidian 标签默认行为的管理工具
tags: ['界面优化', '编辑工具', '效率工具', 'obsidian插件']
description: 简单实用的 obsidian 标签默认行为的管理工具
author: OS
type: auto
draft: false
editable: false
modified: 20250728233953
---

# Obsidian 插件：Open Tab Settings 简单实用的 obsidian 标签默认行为的管理工具

## 概述

Open Tab Settings 通过修改 Obsidian 的 `openFile` 和 `getLeaf` 方法，提供了默认在新标签页打开文件以及避免重复标签页的功能，适用于文件资源管理器、链接、快速切换器等场景，解决了原生 Obsidian 在文件导航时强制覆盖当前标签页或创建重复标签页的问题。

适合习惯 VSCode 等编辑器工作流的用户；相比类似插件 Opener（已停止维护），该插件实现了更全面的行为覆盖且避免了可见的页面跳转延迟，支持通过 npm 进行本地构建和基于 WebdriverIO 的端到端测试。

> [!Note] 插件名片
> - 插件名称：Open Tab Settings
> - 插件作者：jesse-r-s-hines
> - 插件说明：简单实用的 obsidian 标签默认行为的管理工具
> - 插件分类：[' 界面优化 ', ' 编辑工具 ', ' 效率工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/jesse-r-s-hines/obsidian-open-tab-settings)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-tab-settings)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jesse-r-s-hines/obsidian-open-tab-settings/main/README.md)

## 效果&特性

## 使用

该插件添加了设置以自定义 Obsidian 打开选项卡和在文件之间导航的方式，包括以下选项：

- 默认点击文件管理器，使用全新的标签页打开
- 如果已经存在相同的标签页，切换到现有标签页，而不是打开重复文件
- 自定义新选项卡的位置和顺序
- 使用拆分工作区时在对面窗格中打开新选项卡
- 使用这些设置可以为那些习惯于在 VSCode 等编辑器中工作的人启用更熟悉的工作流程。切换“始终在新选项卡中打开”后，Obsidian 将始终在新选项卡中打开文件，无论它们是通过链接、快速切换器、文件资源管理器等打开的。再也不会意外丢失标签了！

### 与同类插件的比较

有几个插件试图解决这个问题，但各有优缺点。但是，大多数其他选项要么仅适用于特定菜单。

“Open Tab Settings”的工作原理是修补 Obsidian 的一些内部方法，以在整个 Obsidian 中实现一致且无缝的新选项卡和重复数据删除行为。它的灵感来自以类似方式工作的 [[opener]] 插件，但在最新的 Obsidian 上不再维护和破坏（尽管它后来被分叉了）。“打开选项卡设置”还增加了对 Opener 的一些改进，包括使非文件视图（例如图形视图）也在新选项卡中打开，以及为新选项卡放置添加多个自定义选项。