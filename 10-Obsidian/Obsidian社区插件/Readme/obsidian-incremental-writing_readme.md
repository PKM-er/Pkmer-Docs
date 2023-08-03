---
uid: 20230803212608
title: Obsidian 插件：【Readme】Incremental Writing
tags: ['杂类', 'obsidian插件', 'readme']
description: 逐步审阅笔记和块随着时间的推移。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Incremental Writing

> [!Note] 插件名片
> - 插件名称：Incremental Writing
> - 插件作者：Jamesb | Experimental Learning
> - 插件说明：逐步审阅笔记和块随着时间的推移。
> - 插件分类：['杂类', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/bjsi/incremental-writing)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-incremental-writing)

## 概述

逐步审阅笔记和块随着时间的推移。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/bjsi/incremental-writing/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-incremental-writing]] 插件的自述翻译



# Obsidian的增量写作插件

该插件允许您在Obsidian中进行[增量写作](https://supermemo.guru/wiki/Incremental_writing)。在增量写作中，您可以将Obsidian存储库中的笔记和块添加到优先级队列中，以便随着时间的推移逐步进行复习。

如果您对此插件和增量写作有兴趣，以下是一些您可能会发现有用的资源：

- （视频）[什么是增量写作？（Obsidian和SuperMemo）](https://youtu.be/LLS_8Y744lk)：我制作的一个视频，介绍了在Obsidian和SuperMemo中使用示例的增量写作概念。
- （文章）[增量写作：摘要](https://www.experimental-learning.com/SimpleGuru/IncrementalWriting.md)：上述视频的文章版本。
- （视频）[Obsidian增量写作插件：入门](https://youtu.be/bFF3umvXydQ)：我制作的一个视频，解释了该插件的基本功能。
- （视频）[Obsidian增量写作插件：高级功能](https://youtu.be/onvKkHQfOzU)：我制作的一个视频，解释了一些高级功能。

此外，如果您发现增量写作有用，您绝对应该了解一下[增量阅读](https://www.experimental-learning.com/en/SimpleGuru/IncrementalReading)！

### 支持

我希望将所有的精力都投入到这些项目中，并全职地从事这项工作！我也希望尽可能地保持我的内容开源和免费提供给大家。让那些寻求知识的人能够找到它！

如果你想支持我的工作，我有一个[Patreon页面](https://www.patreon.com/experimental_learning)，每个层级都有相应的回报，或者你可以[给我买杯咖啡](https://www.buymeacoffee.com/experilearning)。

使用插件

### 注意事项

- 此插件使用私有的 Obsidian API 在搜索窗格中添加了一个按钮，这可能会导致插件在 Obsidian 更新后出现故障，直到我有时间修复它。
- Obsidian API 处于早期 alpha 阶段，因此在更新后，此插件可能会出现故障（暂时）。
- 我强烈建议在安装此插件时同时安装[Natural Language Dates](https://github.com/argenos/nldates-obsidian)插件，因为它允许您在被要求提供日期时使用自然语言，例如“明天”或“两周后”，而不必输入日期，如“2020-02-02”。
- 此插件目前不支持移动设备！

### 重要！优先级

- 令人困惑的是，低优先级数字对应高优先级！这意味着您的每日重复队列将按照优先级数字从低到高排序，其中最低优先级数字最重要，最高优先级数字最不重要。这是因为这是SuperMemo中优先级的工作方式，我在使用了几年后习惯了这样的思考方式。直到有人在一个问题中提到这一点，我才意识到这可能会造成困惑。对于任何困惑，我表示道歉！

### 特点

#### 命令

- **加载队列**：该插件支持多个增量写入队列，您可以使用模糊搜索菜单在它们之间进行切换。该命令使用模糊搜索组件在设置中指定的队列文件夹中搜索。
- **在当前窗格中打开队列**：在当前窗格中打开当前加载的队列。您可以通过查看Obsidian窗口底部的状态栏来查看当前加载的队列。
- **在新窗格中打开队列**：与上述命令相同，但在新窗格中打开当前加载的队列。
- **将笔记添加到队列**：将Obsidian中的活动笔记添加到当前加载的增量写入队列中。
- **将块添加到队列**：将当前块添加到当前加载的增量写入队列中。
- **当前重复**：转到当前加载的队列的当前重复。
- **下一个重复**：转到当前加载的队列的下一个重复。
- **编辑当前重复数据**：编辑当前重复的间隔、优先级、下一个重复日期或备注。
- **下一个重复并手动安排**：执行下一个重复并打开一个模态框，供您手动编辑下一个重复日期和间隔。
- **忽略当前重复**：从队列中忽略当前重复。此笔记或块将不再显示供复习。
- **将当前笔记中的链接添加到队列**：将当前笔记中的任何链接添加到队列中。
- **批量添加带有引用的块到队列**：将所有带有"^references"的块添加到增量写入队列中。
- **通过模糊查找器将笔记添加到队列**：打开一个模糊查找器，您可以使用它将您的存储库中的任何笔记添加到当前的增量写入队列中。
- **将搜索结果添加到队列**：进行搜索，并在搜索窗格顶部单击"Add to IW Queue"按钮，将所有结果添加到队列中。
- **将文件夹、文件和链接添加到队列**：您还可以右键单击文件夹、文件和链接，通过上下文菜单将它们添加到队列中。

自动将笔记添加到队列

有一些选项可以自动将笔记添加到队列中。

- **使用标签自动添加笔记**：在设置页面中，您可以定义一个队列名称和相关标签的列表。当您修改一个笔记时，插件会检查是否添加了队列标签。如果是，则该笔记将自动添加到队列中。此映射仅适用于新创建的笔记，即当您安装插件时，它不会自动将具有特定标签的所有笔记添加到队列中。因此，建议的工作流程是首先搜索具有特定标签的所有笔记，并使用“将搜索结果添加到队列”功能将它们添加到队列中（参见上文）。然后，您可以在设置中设置队列到标签的映射，以确保将来具有特定标签的笔记被添加到队列中。

- **自动添加新笔记选项**：在设置中切换打开后，新笔记将自动添加到默认队列中。我建议使用上述的标签方法，而不是使用此方法，因为使用标签可以更好地控制哪些笔记被添加以及它们被添加到哪个队列。

#### 调度选项

目前有两种调度样式可供选择：A-Factor和Simple。

- **Simple**：当您点击下一个重复时，当前重复会通过将其优先级设置为99而被推到队列的末尾。
- **A-Factor**：当您点击下一个重复时，重复之间的间隔会乘以A-Factor来计算下一个重复日期。



