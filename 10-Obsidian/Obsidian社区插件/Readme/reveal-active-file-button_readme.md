---
uid: 2023080322260572
title: Obsidian 插件：Reveal Active File Button
tags: ['obsidian插件', 'readme']
description: 在文件资源管理器的顶部添加一个按钮，以显示活动文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Reveal Active File Button

> [!Note] 插件名片
> - 插件名称：Reveal Active File Button
> - 插件作者：Clare Macrae
> - 插件说明：在文件资源管理器的顶部添加一个按钮，以显示活动文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/claremacrae/reveal-active-file-button-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?reveal-active-file-button)

## 概述

在文件资源管理器的顶部添加一个按钮，以显示活动文件。

![Reveal Active File Button](https://cdn.pkmer.cn/covers/reveal-active-file-button.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/claremacrae/reveal-active-file-button-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[reveal-active-file-button]] 插件的自述翻译

## " 揭示活动文件按钮 " Obsidian 插件

<!-- toc -->

## 目录

  * [目的](#purpose)
  * [用法](#usage)
  * [提示](#tips)
    * [如果滚动位置不正确](#if-scroll-position-isnt-quite-correct)
    * [如果你测试过版本1.0.0](#if-you-tested-version-100)
  * [更新日志](#changelog)
  * [相关插件](#related-plugins)
  * [感谢](#thanks)<!-- endToc -->

## 目的

**Reveal Active File Button** 是一个 Obsidian 插件，它添加了一个单击按钮，用于使 [Obsidian.md](https://obsidian.md) 文件浏览器/导航器显示您的活动文件，例如查找相邻文件。

这是对 Obsidian 已经包含的这些内置选项的方便补充：

- 命令 "File explorer: Reveal active file in navigation"
- 窗格菜单选项 "Reveal file in navigation"

## 使用方法

要使 Obsidian 文件浏览器/导航器滚动以显示您的活动文件，请单击十字准线图标：

![RevealActiveFile](docs/images/reveal-active-file-icon.png)

结果如下：

![ActiveFileRevealed](docs/images/active-file-highlighted.png)

## 提示

### 如果滚动位置不正确

- 如果文件资源管理器/导航器没有完全滚动到正确的位置，请再次点击按钮，它将起作用。
  - 解释：该按钮只是调用内置的 Obsidian 命令“在导航中显示活动文件”。
  - 在大型存储库中，或者对于包含大量文件的文件夹中的文件，该命令第一次不总是移动到正确的位置。
  - 第二次请求似乎能够可靠地起作用。

如果您是在将此插件添加到社区插件列表之前对其进行测试的少数人之一，请删除旧版本，因为该插件已更名。

有关如何执行此操作的帮助，请参阅 [删除版本1.0.0](docs/RemoveV100.md)。

## 更新日志

请参阅 [更新日志](CHANGELOG.md)。

## 相关插件

- [Collapse All](https://github.com/OfficerHalf/obsidian-collapse-all)
  - 此插件可折叠和展开文件浏览器
  - 它与此插件兼容：两者都可以安装，并且可以一起使用，如下图所示：
  ![collapse-all-and-reveal-active](docs/images/collapse-all-and-reveal-active.png)
- [Automatically Reveal Active File](https://github.com/shichongrui/obsidian-reveal-active-file)
  - 如果您希望始终显示活动文件，请使用此插件
  - 并且您不介意 Obsidian 跳转到其他视图，如搜索结果或标签面板
- 感谢 Nathan Smith 的 [Collapse All](https://github.com/OfficerHalf/obsidian-collapse-all) 插件，本代码在其基础上进行了大量修改。



