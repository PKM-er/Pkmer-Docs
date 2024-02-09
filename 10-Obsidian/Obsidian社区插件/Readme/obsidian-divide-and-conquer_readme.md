---
uid: 2023120719265038
title: Obsidian 插件：【Readme】Divide & Conquer
tags: ['obsidian插件', 'readme']
description: 批量启用/禁用插件的命令。 当您有许多插件时，这很有用，可用于调试。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Divide & Conquer

> [!Note] 插件名片
> - 插件名称：Divide & Conquer
> - 插件作者：pseudometa
> - 插件说明：批量启用/禁用插件的命令。 当您有许多插件时，这很有用，可用于调试。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/chrisgrieser/obsidian-divide-and-conquer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-divide-and-conquer)

## 概述

批量启用/禁用插件的命令。 当您有许多插件时，这很有用，可用于调试。

![Divide & Conquer](https://cdn.pkmer.cn/covers/obsidian-divide-and-conquer.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisgrieser/obsidian-divide-and-conquer/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-divide-and-conquer]] 插件的自述翻译

# ⚔️ 分而治之

![](https://img.shields.io/github/downloads/chrisgrieser/obsidian-divide-and-conquer/total?label=总下载量&style=plastic) ![](https://img.shields.io/github/v/release/chrisgrieser/obsidian-divide-and-conquer?label=最新版本&style=plastic) [![](https://img.shields.io/badge/更新日志-点击这里-FFE800?style=plastic)](Changelog.md)

这是一个 [Obsidian](https://obsidian.md/) 插件，提供了批量启用/禁用插件和 CSS 片段的命令。这样可以快速找出哪些插件导致了错误或性能问题。

![DAC Snippet Demo](https://cdn.pkmer.cn/covers/obsidian-divide-and-conquer_1_3.gif)

如何帮助调试

您在 Obsidian 中遇到了问题，并确认在启用安全模式时问题消失。现在，您需要缩小范围，找出哪个插件出现了问题。最有效的方法是使用“二分法”，即禁用一半的插件，根据问题是否仍然存在，可以排除一半的插件。

尽管这个过程是找到问题插件的最快方法，但对于拥有 40、50 个或更多插件的高级用户来说，仍然相当麻烦。*分而治之*提供了一些有用的命令，用于批量禁用/启用插件，以简化高级用户的生活。

## 添加的命令

对于插件/片段：

- 重置 - 将当前状态保存为“原始状态”（级别 1）
- 恢复 - 返回到原始状态 *
- 二分 - 禁用一半的活动项目，或者如果所有项目都是活动的（处于“级别 0”），则返回到原始状态（级别 1）
- 取消二分 - 撤消上一次的二分，或者如果处于原始状态，则启用所有插件
- 重新二分 - 撤消上一次的二分，然后禁用另一半

\* *__ 在重置后，DAC 不会启用任何您手动禁用的插件。恢复仅启用 DAC 禁用的插件，并禁用上次重置时已禁用的任何插件 __*

（请注意，为了能够履行其职责，此插件永远不会禁用自身。热重载插件也永远不会被禁用，以避免对开发人员的干扰。）

## 设置

插件/片段的排除功能已启用 [正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)，您还可以通过作者或描述进行排除（例如，' 命令面板 ' 排除任何修改命令面板的插件）

![DAC设置演示](https://cdn.pkmer.cn/covers/obsidian-divide-and-conquer_1_4.gif)

## 安装

该插件可通过 Obsidian 的社区插件浏览器获得：`设置` → `社区插件` → `浏览` → 搜索 *"Divide & Conquer"*

## 问题

- 偶尔，由于某种原因（比如更新插件），Obsidian 不会触发刷新，按钮可能会消失。点击社区插件选项卡（或者如果你在代码片段中，则点击外观选项卡）会触发刷新，按钮会重新出现。你也可以关闭并重新打开设置。

## 鸣谢

最初由 [chrisgrieser](https://github.com/chrisgrieser/)（也称为 pseudometa）创建，现在由 [geoffreysflaminglasersword](https://github.com/geoffreysflaminglasersword) 维护。
