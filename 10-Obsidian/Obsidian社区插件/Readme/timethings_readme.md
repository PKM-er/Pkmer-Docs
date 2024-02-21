---
uid: 2024022121294370
title: Obsidian 插件：【Readme】Time Things
tags: ['obsidian插件', 'readme']
description: 在角落显示一个时钟。跟踪笔记的总编辑时间和最后修改时间。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Time Things

> [!Note] 插件名片
> - 插件名称：Time Things
> - 插件作者：Nick Winters
> - 插件说明：在角落显示一个时钟。跟踪笔记的总编辑时间和最后修改时间。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/DynamicPlayerSector/timethings)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?timethings)

## 概述

在角落显示一个时钟。跟踪笔记的总编辑时间和最后修改时间。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/DynamicPlayerSector/timethings/main/README.md)
>

---

## Readme(翻译）

下面是 [[timethings]] 插件的自述翻译

【机翻】

# 时间事务

在状态栏显示时钟。将修改后的文件属性与 frontmatter 同步。

此插件使用 moment.js。这是一个时间操作库，已经包含在 Obsidian 中。

![Obsidian_vH8xXX5e7Z](https://cdn.pkmer.cn/covers/timethings_1_0.gif!pkmer)

## 时钟

![image](https://cdn.pkmer.cn/covers/timethings_1_1.png!pkmer)

- 更改日期格式的选项。推荐：`HH:MM:ss` 和 `hh:mm A`。
- 更改更新间隔的选项。
- 使用 UTC 时区的选项。

## 修改后的前置键

- 有一个键记录您上次修改文件的时间。
- 支持嵌套。
- 可选更改日期格式。推荐：`YYYY-MM-DD[T]HH:mm:ss.SSSZ`。

## 编辑持续时间前置键

- 跟踪编辑笔记所花费的时间
- 在状态栏中显示当前笔记的编辑持续时间

## 关于自定义前置处理解决方案

默认情况下，自定义前置处理解决方案已禁用，因为 Obsidian 的直接前置 API 更加稳定和强大。然而，高级用户可以在需要时启用它。不要忘记定期备份您的保险库。

### 启用自定义 frontmatter 处理解决方案的原因

- 它会立即更新值
- 它只会触及一行，这意味着它永远不会使您的光标跳动，或者弹出消息“文件已被修改”
- 它不会重新格式化您的 frontmatter 以适应任何标准

### 禁用自定义 frontmatter 处理解决方案的原因

- 您在 Time Things 设置中使用了嵌套键。如果使用自定义 frontmatter 处理解决方案并且具有嵌套键，则可能会导致更新错误的键。只有当它在 frontmatter 中需要的键之前出现并且具有类似路径时才会发生这种情况。例如，如果遇到 `x.y.z`，它将更新 `x.y.g.z`，如果它具有在设置中指定的格式的值。
- 您没有使用填充所需变量以创建笔记的模板。使用自定义 frontmatter 处理解决方案最适合与模板一起使用，因为如果键不存在，则不会为您创建键。此外，它不会更新空值或与设置中指定的格式不同的值。

我将来可能会进一步改进它，但是为此我感觉我必须从头开始编写一个完整的 YAML 解析器。目前它完全满足我的需求，甚至还有一些有限的灵活性，因此我将专注于插件的其他方面。

## 接下来

- [ ] 忽略指定文件夹中的文件
- [ ] 忽略具有指定 frontmatter 键（及其值）的文件
- [ ] 为所有事物全局选择一个时区
- [ ] 分别为时钟和 frontmatter 选择一个时区
- [x] 跟踪编辑笔记所花费的时间



