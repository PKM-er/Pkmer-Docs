---
uid: 20230514020943
title: Obsidian 插件：Obsidian Memos 提供一个简易轻巧的笔记和灵感收集方式
tags: [Obsidian, 插件, Memos]
description: Obsidian 插件：Obsidian Memos 提供一个简易轻巧的笔记和灵感收集方式
author: Bon
type: basic
draft: false
editable: false
modified: 20231215145130
---

# Obsidian 插件：Obsidian Memos 提供一个简易轻巧的笔记和灵感收集方式

如果说之前在 Obsidian 中最苦恼的事情是什么，那就是除了一些极短的吐槽或者沙雕图无法丢进 Obsidian 里面（这里说的无法是会和周边的笔记格格不入），快速收集和录入灵感似乎是个难事。

Obsidian Memos 提供一个简易轻巧的笔记和灵感收集方式，方便你快速收集灵感。

> [!Note] 插件名片
> - 插件名称：Obsidian Memos
> - 插件作者：Bonaill
> - 插件说明：提供一个简易轻巧的笔记和灵感收集方式
> - 插件项目地址：[点我跳转](https://github.com/Quorafind/Obsidian-Memos)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-memos)

> [!Tip] 最新进展
> 如果你想了解 Memos 最新进展，可以看这里 [[thino-changelog]]

## 效果&特性

![Obsidian Memos](https://cdn.pkmer.cn/covers/obsidian-memos.png!pkmer)

![Memos 0.png](https://cdn.pkmer.cn/images/Memos%200.png!pkmer)

1. 所有备忘录都来自于您的日常笔记，这需要启用“Daily Notes Plugin”才能使该插件正常工作。
2. 备忘录是从您在配置中设置的标题下方获取的，默认为 `# Journal`。
3. 备忘录是在配置中设置的标题下方创建的，默认为 `# Journal`（现在您可以将其设置为任何其他标题）。
4. 当您创建一个查询时，会在您的日常笔记文件夹中自动生成一个 query.md 文件。
5. 当您删除一个备忘录时，它将发送到您的日常笔记文件夹中的 delete.md，请不要直接编辑它。

## 使用

![Memos 2.png](https://cdn.pkmer.cn/images/Memos%202.png!pkmer)

1. 首先确保你已启用“Daily notes”插件（Obsidian 的核心插件）。
2. 然后，你应该检查设置，将你的标题设置为在下方处理并在下方插入新备忘录，或者留空以将条目写入每日文件的底部。
3. 打开备忘录，然后点击“NOTEIT”。
4. 如果你允许备忘录中有评论，你需要确保已启用“dataview”插件。

一个条目将以当前时间的项目格式添加到你的每日笔记中。

### 示例

```
- 22:15 {您输入的备忘录内容}
```

在解析并添加备忘录到列表时，使用以下格式：

- `- 19:00` 在日记中。
- `- [ ] 19:00` 在日记中。

###备忘录列表

显示所有来自您的日常笔记的备忘录，以便您可以在一页上阅读它们。

分享备忘录和时间线

您可以通过图像分享任何备忘录和日常备忘录。

### 标签列表

为 JUST 备忘录构建的标签列表。内置的标签列表将显示您的备忘录中的标签。

### 查询列表

您可以设置包含多个变量的查询来查询备忘录。您可以添加它、固定它、删除它。

### 备忘录热力图

您可以像查看 GitHub 热力图一样查看每天的备忘录数量，就像日历中的点一样。但是，所有这些点都可以点击，以过滤该天的备忘录。

### 用户横幅

您可以在设置中设置您的姓名，所以不要忘记这样做。当您点击用户名旁边的三个点时，您可以找到设置和备忘录的垃圾箱。

在每个备忘录中，您可以使用 MARK 将其链接到另一个备忘录。您可以删除它，分享它等等。

提示：

1. 您可以双击备忘录来编辑备忘录。
2. Ctrl+ 单击以跳转到备忘录的源。

### 搜索和筛选

每次在备忘录中进行搜索时，都会筛选出匹配的备忘录（显示在一页中），在备忘录中已经有四个内置的筛选器，以帮助您更轻松地使用备忘录。

在设置中，您可以找到许多有趣的内容，请毫不犹豫地尝试它们。

### 为热力图设置不同的颜色

您可以在此处下载 CSS 代码片段：[热力图颜色](./document/Heatmap-css-snippet.css)

> [!Tip]
> 1. 当你创建一个 Query 的时候，会存放在你的日记文件夹中的 Query.md 中，请不要直接编辑它。
> 2. 当你删除一个 Memo 的时候，它会被发送到你的日记文件夹中的 Delete.md 中，请不要直接编辑它。

## 开发进度

 memos 2.0 正在开发中，开发进度参考 [[thino-changelog]]

## 加入内侧

Memos 2.0.x 内测版火热进行中，通过社区共享知识、方法论等稿件，或社区为爱发电捐助都可以获得资格。Memos 2.0.x 内测版火热进行中，通过社区共享知识、方法论等稿件，或社区为爱发电捐助都可以获得资格。

[社区众筹插件 (pkmer.cn)](https://pkmer.cn/products/productDetails/)
