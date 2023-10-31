---
uid: 2023102611085924
title: Obsidian 插件：【Readme】Writing Goals
tags: ['obsidian插件', 'readme']
description: 为您的笔记和文件夹设定动态写作目标。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Writing Goals

> [!Note] 插件名片
> - 插件名称：Writing Goals
> - 插件作者：James Lynch
> - 插件说明：为您的笔记和文件夹设定动态写作目标。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lynchjames/obsidian-writing-goals)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?writing-goals)

## 概述

为您的笔记和文件夹设定动态写作目标。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lynchjames/obsidian-writing-goals/main/README.md)
>

---

## Readme(翻译）

下面是 [[writing-goals]] 插件的自述翻译

# Obsidian 写作目标

使用 Obsidian 为笔记和文件夹设置动态写作目标，帮助您实现长篇写作目标。

该插件提供了一个简化版本的 [Ulysses中可用的目标功能](https://help.ulysses.app/kb/guide/en/goals-3jzwhIUp5a)。

演示中的长篇文本是使用 [Delorean Ipsum](https://deloreanipsum.com/) 创建的。

![](./images/demo-screenshot-1.png)

![](./images/demo-screenshot-2.png)

添加目标

您可以通过使用文件资源管理器中的上下文菜单为您的笔记或文件夹添加目标。

![](./images/add-goal-demo.gif)

对于笔记，将在笔记的前置元数据中添加一个带有 "goal" 一词的条目。前置元数据属性的名称默认为 `word-goal`（也被 [@isaaclyman](https://github.com/isaaclyman) 的出色的 [小说字数统计插件](https://github.com/isaaclyman/novel-word-count-obsidian) 使用）。您可以在插件设置中更改属性名称。

还有一个命令可以为您的笔记或文件夹添加目标。

## 每日目标

使用相同的文件浏览器和命令面板命令，您还可以为笔记或文件夹设置每日目标，以替代或与整体目标并存。每日目标每天重置，因此您可以为每天想要写的字数设定一个目标，并且还可以查看您朝整体目标的进展。

![](./images/demo-screenshot-3.png)

frontmatter 属性的默认名称是 `daily-word-goal`。您可以在插件设置中更改属性名称。

更新目标的方法有三种：

1. 使用添加/更新命令。
2. 使用文件资源管理器上下文菜单项。
3. 仅适用于笔记，更新目标前置属性的值。
查看目标
您可以使用一些命令查看当前笔记或任何文件或文件夹的目标集：

![](./images/view-goal-command-demo.gif)

目标进度应该会随着您的输入实时更新。添加到具有目标的文件夹中的任何文件的文本（包括递归的文件夹内的文件夹）都将计入该目标。

![](./images/reaching-goal-demo.gif)

## 目标统计

在插件设置中，您可以启用目标进度统计，以 [条形图](https://mitcheljager.github.io/svelte-tiny-linked-charts) 的形式显示在目标和每日目标下方：

![](./images/daily-goal-stats.png)

您还可以使用一个命令在单个视图中查看所有目标统计。该视图还允许您编辑目标并导航到每个目标的笔记：

![](./images/stats-page.png)

将一个笔记从字数统计中排除出去

您可以将一个笔记从对父文件夹和其他更高级别文件夹的字数统计中排除出去。

在以下两种格式中设置一个前置属性：

![](./images/wordcount-frontmatter-bool.png) ![](./images/wordcount-frontmatter-string.png)

## 冲刺目标

使用文件浏览器和命令面板命令，您还可以为一个笔记设置一个在特定时间限制内的目标字数的冲刺目标。您可以开始、暂停、编辑和重置冲刺目标。

兼容性

该插件与 Obsidian v1.3.7 兼容，并针对 API 版本 v1.4.4。

## 安全性

该插件仅修改笔记的前置元数据，以添加、更新和删除 `word-goal` 属性。您可以通过手动向笔记添加 `word-goal` 属性来避免这种情况。它使用缓存读取所有文件以提高性能。

Obsidian 的 API 不提供对文件资源管理器窗格的合同访问权限，因此该插件使用鸭子类型来查找它。这在技术上是未记录的，因此有可能 Obsidian 的重大更新会暂时导致错误。如果发生这种情况，该插件被设计为优雅地失败。在这种不太可能的情况下，您可能希望禁用该插件，直到它可以更新。

## 本地运行

按照以下步骤在本地环境中运行代码：

1. 克隆仓库后，在根目录下运行 `npm install`。所有所需的依赖和开发依赖项都应该被安装。
2. 运行 `npm run dev`，将 `main.js`、`style.css` 和 `manifest.json` 构建并复制到一个名为 test-vault 的文件夹中。该命令将继续运行，监听文件变化（除了 style.css）。
3. 打开 Obsidian，并将 test-vault 文件夹加载为一个 vault。

现在，您应该能够对代码进行更改并在 Obsidian 中进行调试。

谢谢

### 插件引用

非常感谢 [@isaaclyman](https://github.com/isaaclyman)。我基于他的 [小说字数统计插件](https://github.com/isaaclyman/novel-word-count-obsidian) 的代码来计算字数，并在文件资源管理器中显示内容。

还要感谢 [@lukeleppan](https://github.com/lukeleppan)，他的 [更好的字数统计插件](https://github.com/lukeleppan/better-word-count) 帮助我解决了一些特定语言的字数统计问题。

### 贡献者

- [@danieltomasz](https://github.com/danieltomasz)
  - 提交请求以从字数统计中排除 Markdown 注释和 HTML 注释。

### Beta 测试人员

感谢所有尝试插件 Beta 版本的人，特别是那些提出错误和功能请求的人：

- [@danieltomasz](https://github.com/danieltomasz)
- [@FeralFlora](https://github.com/FeralFlora)
- [@lucastucious](https://github.com/lucastucious)
- [@isaaclyman](https://github.com/isaaclyman)
- [@giseledute](https://github.com/giseledute)
- [@Rhettica](https://github.com/Rhettica)
捐赠
该插件免费提供。

如果您想向我捐赠一些东西，可以通过 [Ko-Fi](https://ko-fi.com/lynchjames) 进行捐赠。谢谢！
