---
uid: 2024031219322337
title: Obsidian 插件：【Readme】Metafolders
tags: ['obsidian插件', 'readme']
description: Multidimensional note navigation.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Metafolders

> [!Note] 插件名片
> - 插件名称：Metafolders
> - 插件作者：Makary Sharoyan
> - 插件说明：Multidimensional note navigation.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/makary-s/obsidian-metafolders)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?metafolders)

## 概述

Multidimensional note navigation.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/makary-s/obsidian-metafolders/main/README.md)

---

## Readme(翻译）

下面是 [[metafolders]] 插件的自述翻译

# Obsidian 的 Metafolders 插件

Metafolders 是一个 Obsidian 插件，通过克服典型的限制重新构想文件管理：

- 它允许单个笔记同时存在于多个位置。
- 它放弃了文件夹，利用笔记本身作为内容和容器。

## 设计理念

- **Minimal Impact**: 目标是最小干扰用户现有的记笔记习惯，使他们能够在不依赖插件的情况下继续工作流程，为他们的笔记管理系统提供自然的扩展。
- **Familiar Interface**: 目标是提供一个用户界面，感觉像标准文件导航器一样自然和传统。

## 工作原理

Metafolders 根据一个特殊（可定制）属性构建笔记树，该属性包含指向父笔记的链接。您可以通过在插件面板上直接查看每个笔记的父级和子级来轻松导航层次结构。即使没有插件，您也可以导航这样的结构，但使用 Metafolders 会变得更加方便。

## 安装

- 下载最新的 [发布版本](https://github.com/makary-s/obsidian-metafolders/releases)。
- 将文件解压缩到您的 Obsidian 保险库的 `.obsidian/plugins` 目录中。
- 在 Obsidian 的设置中启用插件，在“社区插件”下。

## 特点

- **链接:** 在导航器中的任何笔记都可以通过按下链接按钮将其设置为活动笔记的父级或从父级中移除。
- **根笔记固定:** 可以将根笔记固定或更改为活动文件。这可以通过按下“固定”按钮来调整。
    - 通过双击任何子标签可以将其设置为根标签（在固定模式下相关）。
- **根文件历史:** 插件面板有自己的根文件历史记录，可以使用“后退”和“前进”按钮进行导航。
    - 以特殊的时钟图标标记上一个根笔记，以便直观地看到您来自哪里。
    - “主页”按钮返回到主文件（请参阅设置）。
- **打开笔记:** 导航器中的笔记可以以不同方式打开：
    - 单击 - 在活动标签中打开。
    - 单击 + Ctrl - 在新标签中打开。
    - 单击 + Ctrl + Alt - 在新部分中打开。
- **标题来源** - 您可以指定笔记标题的文本来源（文件名、标题、特殊属性）。请参阅设置部分。
- **其他功能:**
    - 按名称或日期对树中的项目进行排序。
    - 插件状态在重新加载之间保存。
    - 即使更改根文件，会话中的树展开也会被保留。
    - 当您悬停在一个笔记上时，无论它出现在树的哪个位置（因为它可能出现多次），它都会在整个树中突出显示。

## 设置

- **父属性名称** - 您可以为指示父级的属性指定任何名称。默认情况下为 "up"。
- **标题来源** - 您可以指定文件标题文本的来源。选项包括：
    - 文件名
    - 前置元数据中的属性
    - 第一个 h1 标题（输入 `{{h1}}`）

    您可以用逗号分隔的方式指定多个选项。如果使用第一个选项找不到标题，则算法将移至下一个选项。如果找不到任何选项或字段为空，则将文件名用作标题。

- **主页文件路径** - 在设置中，您可以指定一个主页，然后工具栏上将出现一个主页按钮，点击后将打开该主页。

## 未来计划

您可以在 [这里](https://github.com/users/makary-s/projects/1/views/1) 查看开发路线图和即将推出的功能的详细信息。

## 支持与反馞

您的贡献和反馈是非常宝贵的！如果您有任何建议、改进意见或问题，请毫不犹豫地提交拉取请求、开启问题，或通过我的个人资料中列出的任何联系方式与我联系 [这里](https://github.com/makary-s)。

## 更新日志

- [2024.03.02] 现在您可以指定属性或标题，从中文件标题将被派生。这可以在设置中的“标题来源”部分完成。
- [2024.03.03] 添加了对文件进行排序的功能。



