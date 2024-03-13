---
uid: 2024031219334915
title: Obsidian 插件：【Readme】View Count
tags: ['obsidian插件', 'readme']
description: 跟踪每个保险库文件的查看次数。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】View Count

> [!Note] 插件名片
> - 插件名称：View Count
> - 插件作者：Trey Wallis
> - 插件说明：跟踪每个保险库文件的查看次数。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/trey-wallis/obsidian-view-count)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?view-count)

## 概述

跟踪每个保险库文件的查看次数。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/trey-wallis/obsidian-view-count/master/README.md)

---

## Readme(翻译）

下面是 [[view-count]] 插件的自述翻译

【机翻】

# 黑曜石查看次数

![黑曜石下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22view-count%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

## 关于

这个插件将跟踪您的存储库中每个文件的查看次数。根据插件配置，可以将计数视为属性或在状态栏中的笔记底部显示。

![](https://cdn.pkmer.cn/covers/view-count_2_0.gif!pkmer)

![](https://cdn.pkmer.cn/covers/view-count_2_1.gif!pkmer)

## 安装

1. 在 Obsidian 中打开 **设置**
2. 进入 **社区插件**
3. 选择 **浏览**
4. 搜索 **View Count** by Trey Wallis
5. 选择 **安装**
6. 然后选择 **启用**

## 用法

默认情况下，插件将在每个打开的文件中保存视图计数，保存在名为 `view-count` 的属性中。视图计数将每天递增一次。要更改这些设置，请查看下面的**设置**部分。

### 浏览次数最高

要查看浏览次数最高的 20 条笔记列表，请打开侧边栏，然后点击眼睛图标

![](https://cdn.pkmer.cn/covers/view-count_2_2.png!pkmer)

### 设置

#### 存储类型

此插件有 2 种查看计数的存储选项：**属性**和**文件**。更改此设置后，请重新启动 Obsidian。

**属性存储** - 如果选择属性，每个笔记的查看计数将存储在其前置数据中的一个属性中。

**文件存储** - 如果选择文件，所有笔记的查看计数将存储在名为 `view-count.json` 的 JSON 文件中，该文件位于 Obsidian 配置目录中（默认为 `.obsidian`）。然后，查看计数将显示在每个笔记底部的状态栏中。

#### 其他

**每天增加计数** - 如果启用，查看计数将每天增加一次。_每天一次_ 意味着在您当地时间的凌晨 12 点后打开文件的任何给定日期。如果禁用，文件每次打开时查看计数都会增加。

当启用每天增加一次并且属性类型设置为存储时，最后查看日期属性将存储到您的笔记中。

## 存储类型的优缺点

### 属性存储

#### 优点

- 查看次数信息存储在每个笔记的前置信息中，使其更易访问
- 由于查看次数存储在前置信息中，因此可以在移动设备上查看

#### 缺点

- 只有 markdown 文件可以有 frontmatter 键，因此只有 markdown 文件的查看次数才会被跟踪
- 由于每次查看都需要更新 frontmatter，因此您的文件可能会比您想要的频繁更新，特别是如果您按最近修改的文件排序（就像我一样）

### 文件存储

#### 优点

- 查看次数被存储在所有文件类型中，包括自定义扩展名
- 查看次数存储在一个文件中，而不是分散在您的笔记中。

#### 缺点

- 由于查看次数显示在状态栏中，您无法在移动设备上看到查看次数



