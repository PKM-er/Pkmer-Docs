---
uid: 2023120719243864
title: Obsidian 插件：【Readme】Checklist
tags: ['任务管理', '效率', 'obsidian插件', 'readme']
description: 将所有笔记待办清单合并到一个视图中，你可以在这个视图种管理和完成相关的任务
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Checklist

> [!Note] 插件名片
> - 插件名称：Checklist
> - 插件作者：delashum
> - 插件说明：将所有笔记待办清单合并到一个视图中，你可以在这个视图种管理和完成相关的任务
> - 插件分类：[' 任务管理 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/delashum/obsidian-checklist-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-checklist-plugin)

## 概述

将所有笔记待办清单合并到一个视图中，你可以在这个视图种管理和完成相关的任务

![Checklist](https://cdn.pkmer.cn/covers/obsidian-checklist-plugin.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/delashum/obsidian-checklist-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-checklist-plugin]] 插件的自述翻译

**寻找另一个维护者来提供帮助** 这个插件还有很多工作要做，但是因为工作太忙，我一直忽视了它。我希望能得到一些帮助，或者至少有人能够批准 PR 并处理问题。如果你有兴趣，请给我发送电子邮件至 delashum@gmail.com。

# obsidian-checklist-plugin

该插件将来自不同文件的清单合并到一个单独的视图中。

![screenshot-main](https://cdn.pkmer.cn/covers/obsidian-checklist-plugin_1_0.png!pkmer)

## 用法

启用此插件后，您将在右侧边栏中看到待办事项清单。如果没有看到，您可以从命令面板中运行“Checklist: Open View”命令来使其出现。

默认情况下，您使用“#todo”标记的待办事项块将出现在此侧边栏中。

您可以通过在编辑器中勾选它们（例如，`- [ ]` -> `- [x]`）或通过在侧边栏中单击待办事项来完成待办事项，这将为您更新 `.md` 文件。

## 配置

![screenshot-settings](https://cdn.pkmer.cn/covers/obsidian-checklist-plugin_1_1.png!pkmer)

**标签名称：** 默认的待办事项标签是 `#todo`，但可以根据需要进行更改。

**显示已完成任务？：** 默认情况下，插件只会显示未完成的任务，并且当任务完成时，它们将从侧边栏中过滤出去。您可以选择显示所有任务。

![screenshot-completed](https://cdn.pkmer.cn/covers/obsidian-checklist-plugin_1_2.png!pkmer)

**在文件中显示所有待办事项？：** 默认情况下，插件只会显示标记块中的任务 - 更改此设置将显示页面上任何位置存在标签的所有任务。

**分组方式：** 您可以按文件或标签名称进行分组。如果选择按标签名称分组，它们将按照它们在文件中首次出现的顺序显示（或者根据排序顺序显示最后一个）。

![screenshot-tags](https://cdn.pkmer.cn/covers/obsidian-checklist-plugin_1_3.png!pkmer)

**排序顺序：** 默认情况下，待办事项将按照它们在文件中出现的顺序显示，文件按照最旧的文件在顶部排序。您可以更改为将最新的文件显示在顶部。

## 文件匹配的通配符

" 包含文件 " 设置使用通配符文件匹配。具体来说，插件使用 [minimatch](https://github.com/isaacs/minimatch) 来匹配文件模式 - 因此任何特殊的奇怪之处都来自于该插件。

以下是一些常见的示例，以帮助构建您的通配符：

  + `!{_templates/**,_archive/**}` 将包括除了两个目录 `_templates` 和 `_archive` 之外的所有内容。
  + `{Daily/**,Weekly/**}` 只会包括 `Daily` 和 `Weekly` 目录中的文件。

我推荐使用 [Digital Ocean Glob Tool](https://www.digitalocean.com/community/tools/glob) 来了解通配符的工作原理 - 尽管实现方式与 minimatch 不完全相同，因此可能会有细微的差异。
