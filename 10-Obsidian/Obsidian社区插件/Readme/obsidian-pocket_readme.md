---
uid: 2023080322245531
title: Obsidian 插件：【Readme】Pocket integration
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: 轻松访问你的Pocket阅读列表条目并为它们创建笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Pocket integration

> [!Note] 插件名片
> - 插件名称：Pocket integration
> - 插件作者：Nimalan Mahendran
> - 插件说明：轻松访问你的Pocket阅读列表条目并为它们创建笔记。
> - 插件分类：['第三方工具集成', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/nybbles/obsidian-pocket)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-pocket)

## 概述

轻松访问你的Pocket阅读列表条目并为它们创建笔记。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nybbles/obsidian-pocket/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-pocket]] 插件的自述翻译


# obsidian-pocket

> :heavy_exclamation_mark: 我（@nybbles）正在寻找有人接手作为`obsidian-pocket`的维护者。如果你有兴趣，请联系我（Twitter上的@nimalan或Obsidian Discord上的nybbles）。过渡将从新维护者接手问题和贡献PR开始。

这是一个用于[Obsidian](https://obsidian.md/)的插件，允许你将[Pocket](https://getpocket.com/)阅读列表同步到Obsidian中，这样你就可以直接从Pocket阅读列表中轻松创建Obsidian笔记。

![pocket-list](https://raw.githubusercontent.com/nybbles/obsidian-pocket/master/images/pocket-list.png)

## 初始设置

启用插件后，您将能够在设置面板的“插件选项”部分下看到一个“Pocket”选项。点击它进入obsidian-pocket设置选项卡，您可以在那里连接您的Pocket账户并设置obsidian-pocket插件。

### 连接您的Pocket账户

点击“连接您的Pocket账户”以开始Pocket授权流程，通过在默认浏览器中打开一个网页。您将被询问是否允许此插件访问您的Pocket数据。然后您将被重定向回Obsidian。您的Pocket账户现在应该已连接。

“断开您的Pocket账户”按钮可用于移除刚刚提供的Pocket授权。

### 指定设置

obsidian-pocket设置选项卡将包含一些影响obsidian-pocket同步Pocket项目和创建Pocket项目笔记的设置，如下所述：

| 设置                                   | 默认值                             | 功能                                                                                                                                                                                                    |
| -------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 在同步时创建Pocket项目                  | 启用                              | 在同步新的Pocket项目时自动创建Pocket项目笔记                                                                                                                                                             |
| 多词Pocket标签转换器选项                | 蛇形命名                           | 指定如何将多词Pocket标签转换为与Obsidian兼容的标签                                                                                                                                                       |
| Pocket同步标签                          | 空（同步所有Pocket项目）          | 指定一个Pocket标签，只同步带有该标签的Pocket项目                                                                                                                                                         |
| Pocket项目笔记文件夹位置                | Obsidian存储库根文件夹            | 指定新的Pocket项目笔记将存储的文件夹位置                                                                                                                                                                 |
| Pocket项目笔记模板文件位置              | 空（使用默认模板）                | 指定一个自定义模板文件，用于创建新的Pocket项目笔记                                                                                                                                                       |
| 前置URL关键字                          | URL（与默认模板匹配）             | 指定将用于查找Pocket项目URL的[YAML前置元数据](https://help.obsidian.md/Advanced+topics/YAML+front+matter)关键字，用于将Pocket项目与其相应的笔记匹配。 |

强烈建议您使用默认的Pocket项目笔记模板和前置URL关键字。如果您决定自定义这些选项，请确保您的Pocket项目笔记最终具有有效的Pocket项目URL的前置元数据关键字。

## 用法

### 可用命令

| 命令                          | 功能                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 打开 Pocket 列表             | 在 Obsidian 中打开一个列表，您可以查看同步的 Pocket 项目并转到 Pocket URL、原始 URL 或创建/打开一个 Pocket 项目笔记                                 |
| 同步 Pocket 列表             | 将 Pocket 项目从 Pocket 同步到 Obsidian                                                                                                          |
| 通过 URL 索引所有文件         | 通过检查文件是否具有与同步的 Pocket 项目匹配的 URL front matter 键，找到存储库中的所有 Pocket 项目笔记                                            |
| 创建所有 Pocket 项目笔记     | 为所有缺少笔记的 Pocket 项目创建一个 Pocket 项目笔记                                                                                              |

### 同步 Pocket 项目

您可以使用 Obsidian 命令“同步 Pocket 列表”或在 obsidian-pocket 设置选项卡中的按钮来同步您的 Pocket 项目。

您可以选择同步所有 Pocket 项目，或者只同步您指定的特定标签的 Pocket 项目，使用“Pocket 同步标签”设置。将其留空以同步所有 Pocket 项目，或者指定一个 Pocket 标签以仅限制同步到具有该标签的 Pocket 项目。

### 打开并使用Pocket列表

一旦Pocket列表被下载并存储，打开命令面板并搜索“Pocket”以查看可用命令列表。打开Pocket列表的命令是“打开Pocket列表”。Pocket列表显示在上方的屏幕截图中。

可以使用Pocket列表浏览您保存到Pocket的项目，并通过点击项目标题为任何Pocket项目创建笔记。您还可以直接访问Pocket项目的URL。

### Obsidian中的Pocket标签

Pocket标签在Pocket列表中进行同步和展示。Pocket支持带有空格的标签，而Obsidian不支持。obsidian-pocket处理带有空格的Pocket标签的方式可以在上面的截图中的“多词Pocket标签转换器选项”设置中进行配置。

可用的选项有：

- （默认启用）蛇形命名（'#tag with spaces'变为#tag_with_spaces）
- 驼峰命名（'#tag with spaces'变为#TagWithSpaces）
- 什么都不做（'#tag with spaces'保持不变）

这些设置仅影响在Pocket列表中显示的Pocket标签，以及如果您的Pocket项目笔记模板中有`{{tags}}`，则插入到Pocket项目笔记中的标签（有关使用Pocket项目笔记模板的详细信息，请参见下文）。它们不会影响已存在的Obsidian标签或Pocket标签。

### Pocket项目的笔记

单击任何Pocket项目的标题以创建一个笔记（或导航到现有的笔记）。Pocket项目的笔记将被创建在Pocket项目笔记文件夹中，该文件夹可以在设置中配置。如果没有设置Pocket项目笔记文件夹，则Pocket项目的笔记将被创建在根文件夹中。

可以在设置中指定新的Pocket项目笔记的模板。

使用Meta+点击（Linux和Mac OS）或Alt+点击（Windows）在浏览器中打开Pocket项目的URL。

在Obsidian中，根据其[frontmatter](https://help.obsidian.md/Advanced+topics/YAML+front+matter)中的特定标签，将笔记与Pocket项目匹配。默认使用的标签是“URL”，但可以在设置中更改。

这意味着，虽然Pocket项目的笔记默认创建在Pocket项目笔记文件夹中，但可以将它们移动到其他位置和/或重命名，而不会断开与具有匹配URL的Pocket项目的连接。这也意味着您可以创建带有URL frontmatter的笔记，并且它们将自动连接到具有匹配URL的相关Pocket项目笔记，尽管在这种情况下不会使用Pocket项目模板。

使用“Index all files by URL”命令，确保`obsidian-pocket`知道所有包含URL前置标签的文件，从而使其能够将这些笔记与Pocket项目匹配。这个索引由`obsidian-pocket`自动维护，所以您不需要运行它。

> :warning: 从obsidian-pocket的0.8.0版本开始，Obsidian笔记仅使用front matter URL键与Pocket项目匹配，不再使用标题进行匹配。支持通过标题进行匹配的最后一个版本是0.7.2。之所以删除了这个功能，是因为它在具有相同标题但不同URL的Pocket项目上无法正常工作。

使用自定义模板来处理 Pocket 笔记

> :warning: 除非您有信心能够在确保 Pocket 项目笔记具有有效的 YAML 前置元数据和 URL 前置元数据键的情况下自定义这些设置，否则请使用默认模板和前置元数据 URL 键。

Pocket 笔记的模板与 Obsidian 中的任何其他模板类似，可以参考[这里](https://help.obsidian.md/Plugins/Templates)，只是仅支持以下变量：

| 变量名             | 含义                                               |
| ------------------ | -------------------------------------------------- |
| `{{title}}`        | Pocket 项目的标题                                  |
| `{{url}}`          | Pocket 项目的 URL                                  |
| `{{pocket-url}}`   | 在 Pocket 中打开 Pocket 项目的 URL                 |
| `{{excerpt}}`      | Pocket 提取的 Pocket 项目摘要                      |
| `{{tags-no-hash}}` | Pocket 项目的标签（不带 "#"）                      |
| `{{tags}}`         | Pocket 项目的标签（带 "#"）                        |
| `{{image}}`        | Pocket 项目的主要图片                              |

这是 obsidian-pocket 的默认模板。它将使用所有可用的元数据填充 Pocket 项目笔记的 [YAML 前置元数据](https://help.obsidian.md/Advanced+topics/YAML+front+matter)，以便 YAML 前置元数据有效，标签正常工作，并显示 Pocket 项目的主要图片（如果有）：

```plaintext
---
Title: "{{title}}"
URL: {{url}}
Pocket URL: {{pocket-url}}
Tags: [pocket, {{tags-no-hash}}]
Excerpt: >
    {{excerpt}}
---
{{tags}}
{{image}}
```

如果您将[此 URL](https://www.technologyreview.com/2021/07/08/1027908/carbon-removal-hype-is-a-dangerous-distraction-climate-change/)保存到 Pocket，并使用此插件将其同步到 Obsidian，然后使用上述模板为相应的 Pocket 项目创建一个笔记，您的笔记将以以下内容开始：

```plaintext
---
Title: "Carbon removal hype is becoming a dangerous distraction"
URL: https://www.technologyreview.com/2021/07/08/1027908/carbon-removal-hype-is-a-dangerous-distraction-climate-change/
Pocket URL: https://getpocket.com/read/1337
Tags: [pocket, carbon_removal]
Excerpt: >
    In February, oil giant Shell trumpeted a scenario in which the world pulls
    global warming back to 1.5 ˚C by 2100, even as natural gas, oil, and coal
    continue to generate huge shares of the world’s energy.
---
#carbon_removal
![image](http://via.placeholder.com/640x360)
```

请注意，在示例模板中，标题被引用，以确保 YAML 前置元数据有效，即使 Pocket 项目的标题中包含冒号。

功能请求、错误报告和PR都欢迎！请使用https://github.com/nybbles/obsidian-pocket/issues 进行反馈。请将功能请求提交到https://github.com/nybbles/obsidian-pocket/labels/enhancement，或在现有的功能请求中发表评论以表示您的兴趣。

如果您要提交错误报告，请提供控制台日志，以便可以重现和修复问题。您可以从Obsidian开发者控制台中复制/粘贴控制台日志，方法是在Obsidian中转到View > Toggle Developer Tools。

设计概述和安全考虑

该插件完全在本地运行。它仅与Pocket进行通信，通过[Pocket API](https://getpocket.com/developer/)。您的Pocket数据和Pocket访问令牌都存储在本地。

该插件将您的Pocket数据本地存储在Obsidian的IndexedDB中。

## 支持

如果您觉得这个插件有价值，请让我知道！听到使用我构建的东西的人的反馈是很棒的。如果您真的喜欢这个插件，并想通过给我买杯咖啡来表达这一点，请随意 🙏🏾。

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/nybbles)

_请不要感到有义务捐赠！_



