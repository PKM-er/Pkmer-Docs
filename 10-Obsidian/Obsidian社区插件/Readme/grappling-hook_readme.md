---
uid: 20230803231105
title: Obsidian 插件：🪝 Grappling Hook
tags: ['obsidian插件', 'readme']
description: 针对使用快速切换器仍然花费太多时间的人，提供了一款非常快速的文件切换插件——Obsidian。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232554
---

# Obsidian 插件：🪝 Grappling Hook

> [!Note] 插件名片
> - 插件名称：🪝 Grappling Hook
> - 插件作者：pseudometa
> - 插件说明：针对使用快速切换器仍然花费太多时间的人，提供了一款非常快速的文件切换插件——Obsidian。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/chrisgrieser/grappling-hook)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?grappling-hook)

## 概述

针对使用快速切换器仍然花费太多时间的人，提供了一款非常快速的文件切换插件——Obsidian。

![🪝 Grappling Hook](https://cdn.pkmer.cn/covers/grappling-hook.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisgrieser/grappling-hook/main/README.md)
>

---

## Readme(翻译）

下面是 [[grappling-hook]] 插件的自述翻译

# 🪝 抓钩

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=下载量&query=%24%5B%22grappling-hook%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&style=plastic) ![](https://img.shields.io/github/v/release/chrisgrieser/grappling-hook?label=最新版本&style=plastic) [![](https://img.shields.io/badge/更新日志-点击这里-FFE800?style=plastic)](Changelog.md)

Obsidian 插件，用于快速切换文件。适用于那些觉得快速切换器仍然太慢的人。[Nick Milo 推荐使用。](https://youtu.be/mcrcRXp5d8A?t=462)

## 目录

<!--toc:start-->
- [特点](#features)
	- [书签循环器](#bookmark-cycler)
	- [备用笔记](#alternate-note)
- [安装](#installation)
- [关于开发者](#about-the-developer)
<!--toc:end-->

## 特点

### 书签循环器

转到最近修改的书签笔记。如果您已经在一个书签笔记上，它会按照最后修改日期的顺序转到下一个书签笔记。这样可以快速在一组重要的核心文件之间进行循环。该命令适用于您使用动态核心主要笔记和许多辅助笔记的工作流程。

当您选择了文本时，书签循环器会切换到其替代模式，并将所选文本复制到最后修改的书签笔记中，而不管您所在的笔记是什么。

> __注意__
> 只考虑已书签的*文件*。已书签的*块*或*标题*将被忽略。

![Illustration bookmark cycler](./illustration/bookmark-cycler.png)

*此命令受到 [neovim的Harpoon插件](https://github.com/ThePrimeagen/harpoon) 的启发。*

### 备选笔记

转到上次所在的文件。与“导航返回”命令相反，使用“切换到备选笔记”命令在第二次按下时向前移动历史记录。这样可以通过一个热键快速在两个文件之间切换。备选文件的名称也显示在状态栏中。

![备选文件示例](./illustration/alt-file.png)

*此命令是对 vim 的 `:buffer #` 命令的模拟。*

## 安装

该插件可以通过 Obsidian 的社区插件浏览器进行安装：`设置` → `社区插件` → `浏览` → 搜索 *"🪝 Grappling Hook"*

<!-- vale Google.FirstPerson = NO -->

关于开发者

在我的日常工作中，我是一名社会学家，研究数字经济背后的社会机制。在我的博士项目中，我研究应用经济的治理以及软件生态系统如何处理创新和兼容性之间的紧张关系。如果您对这个主题感兴趣，请随时与我联系。

个人资料

- [学术网站](https://chris-grieser.de/)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [Discord](https://discordapp.com/users/462774483044794368/)
- [GitHub](https://github.com/chrisgrieser/)
- [Twitter](https://twitter.com/pseudo_meta)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

请我喝咖啡

<br>
