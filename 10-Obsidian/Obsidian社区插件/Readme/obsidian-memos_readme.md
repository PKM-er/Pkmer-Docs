---
uid: 2023080322233429
title: Obsidian 插件：【Readme】Obsidian Memos
tags: ['界面相关', '笔记文件处理', '效率', 'obsidian插件', 'readme']
description: 添加一个速捕捉你想法的新方式。如果你熟悉 flomo 的话，这个插件很方便。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Memos

> [!Note] 插件名片
> - 插件名称：Obsidian Memos
> - 插件作者：Boninall
> - 插件说明：添加一个速捕捉你想法的新方式。如果你熟悉 flomo 的话，这个插件很方便。
> - 插件分类：['界面相关', '笔记文件处理', '效率', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Quorafind/Obsidian-Memos)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-memos)

## 概述

添加一个速捕捉你想法的新方式。如果你熟悉 flomo 的话，这个插件很方便。

![Obsidian Memos](https://cdn.pkmer.cn/covers/obsidian-memos.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Quorafind/Obsidian-Memos/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-memos]] 插件的自述翻译


Obsidian Memos 是一种在 Obsidian 中快速捕捉想法的新方法。它在很大程度上基于令人惊叹的开源项目 [memos](https://github.com/justmemos/memos) 和令人惊叹的服务 [flomo](https://flomoapp.com/)。

![](https://raw.githubusercontent.com/Quorafind/Obsidian-Memos/main/document/Memos-Desktop.png)
![](https://raw.githubusercontent.com/Quorafind/Obsidian-Memos/main/document/Memos-Mobile.png)

## 简介

1. 所有备忘录都来自于您的日常笔记，这需要启用“Daily Notes Plugin”才能使该插件正常工作。
2. 备忘录是从您在配置中设置的标题下方获取的，默认为`# Journal`。
3. 备忘录是在配置中设置的标题下方创建的，默认为`# Journal`（现在您可以将其设置为任何其他标题）。
4. 当您创建一个查询时，会在您的日常笔记文件夹中自动生成一个query.md文件。
5. 当您删除一个备忘录时，它将发送到您的日常笔记文件夹中的delete.md，请不要直接编辑它。

## 如何使用

1. 首先确保你已启用“Daily notes”插件（Obsidian的核心插件）。
2. 然后，你应该检查设置，将你的标题设置为在下方处理并在下方插入新备忘录，或者留空以将条目写入每日文件的底部。
3. 打开备忘录，然后点击“NOTEIT”。
4. 如果你允许备忘录中有评论，你需要确保已启用“dataview”插件。

一个条目将以当前时间的项目格式添加到你的每日笔记中。

### 示例

```markdown
- 22:15 {您输入的备忘录内容}
```

在解析并添加备忘录到列表时，使用以下格式：

- `- 19:00` 在日记中。
- `- [ ] 19:00` 在日记中。

## 特点

###备忘录列表

显示所有来自您的日常笔记的备忘录，以便您可以在一页上阅读它们。

分享备忘录和时间线

您可以通过图像分享任何备忘录和日常备忘录。

### 标签列表

为JUST备忘录构建的标签列表。内置的标签列表将显示您的备忘录中的标签。

### 查询列表

您可以设置包含多个变量的查询来查询备忘录。您可以添加它、固定它、删除它。

### 备忘录热力图

您可以像查看GitHub热力图一样查看每天的备忘录数量，就像日历中的点一样。但是，所有这些点都可以点击，以过滤该天的备忘录。

### 用户横幅

您可以在设置中设置您的姓名，所以不要忘记这样做。当您点击用户名旁边的三个点时，您可以找到设置和备忘录的垃圾箱。

在每个备忘录中，您可以使用MARK将其链接到另一个备忘录。您可以删除它，分享它等等。

提示：

1. 您可以双击备忘录来编辑备忘录。
2. Ctrl+单击以跳转到备忘录的源。

### 搜索和筛选

每次在备忘录中进行搜索时，都会筛选出匹配的备忘录（显示在一页中），在备忘录中已经有四个内置的筛选器，以帮助您更轻松地使用备忘录。

在设置中，您可以找到许多有趣的内容，请毫不犹豫地尝试它们。

### 为热力图设置不同的颜色：

您可以在此处下载CSS代码片段：[热力图颜色](./document/Heatmap-css-snippet.css)

如何安装

💜：直接从Obsidian市场安装。

🚗：将`Quorafind/Obsidian-Memos`添加到BRAT中。

### 手动下载

🚚：下载最新版本。解压并将三个文件（main.js、manifest.json、styles.css）放入文件夹 `{{obsidian_vault}}/.obsidian/plugins/Obsidian-Memos`。

如果您喜欢使用Obsidian-Memos，请通过在[https://www.buymeacoffee.com/boninall](https://www.buymeacoffee.com/boninall)上给我买杯咖啡来支持我的工作和热情。





