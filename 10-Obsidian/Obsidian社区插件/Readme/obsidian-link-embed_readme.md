---
uid: 2023120719345830
title: Obsidian 插件：【Readme】Link Embed
tags: ['obsidian插件', 'readme']
description: 这个插件允许您将笔记中的URL转换为嵌入式预览。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Link Embed

> [!Note] 插件名片
> - 插件名称：Link Embed
> - 插件作者：SErAphLi
> - 插件说明：这个插件允许您将笔记中的 URL 转换为嵌入式预览。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Seraphli/obsidian-link-embed)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-link-embed)

## 概述

这个插件允许您将笔记中的 URL 转换为嵌入式预览。

![Link Embed](https://cdn.pkmer.cn/covers/obsidian-link-embed.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Seraphli/obsidian-link-embed/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-link-embed]] 插件的自述翻译

# Obsidian 链接嵌入

该插件允许您将笔记中的 URL 转换为嵌入式预览。

效果如下。

![演示](https://cdn.pkmer.cn/covers/obsidian-link-embed_1_0.gif)

**注意** 从 2.0.0 版本开始，嵌入使用 `MarkdownCodeBlockProcessor` 进行渲染，避免了扩展 HTML 块。您可以使用设置中的 `Convert` 按钮将旧的嵌入转换为新的代码块。

PS：如果您知道其他提供免费 API 供用户从 URL 中获取元数据的网站，请告诉我。有了您的帮助，该插件可以更加强大。

## 用法

最简单的方法是将链接粘贴到此处，然后创建嵌入预览。

此外，有三种方法可以将 URL 传递给此插件。

1. 选择要解析的 URL

如果没有选择任何内容

1. 将光标放在要解析的 URL 文本中

或者

1. 将 URL 复制到剪贴板中

然后

- 打开命令面板
- 选择命令“Link Embed: Embed link”

如果某些解析器无法工作，您还可以使用“Link Embed: Embed link with ...”来指定一个解析器。

### 设置

如果您在设置中启用了“自动嵌入”，插件将在您将链接粘贴到空行中时自动用嵌入预览替换该链接。尽管这个选项非常方便，但我将默认设置为 false，以防有人不知道发生了什么。

您可以在插件设置中更改默认解析器。

而“原地”意味着编辑器中的选择将被删除。

嵌入的预览将始终插入到下一行。

下表比较了支持的解析器。

| 解析器                                      | 速度   | 稳定性 | 描述长度 | 限制       |
| ------------------------------------------- | ------ | ------ | ----------- | ---------- |
| [JSONLink](https://jsonlink.io/)            | \*\*   | \*     | \*\*\*      | 无限制     |
| [MicroLink(默认)](https://microlink.io/) | \*\*\* | \*\*\* | \*\*        | 50/天     |
| [Iframely](https://iframely.com/)           | \*\*   | \*\*   | \*          | 1000/月 |

## 参见

[obsidian-aggregator](https://github.com/Seraphli/obsidian-aggregator)

## 感谢

- [Obsidian Rich Link](https://github.com/dhamaniasad/obsidian-rich-links)
- [Obsidian Auto Link Title](https://github.com/zolrath/obsidian-auto-link-title)

## 来自不同解析器的示例结果

**示例 1**

<https://arxiv.org/abs/2202.08434>

JSONLink

```json
{
	"title": "[2202.08434] 可解释强化学习综述",
	"image": "https://static.arxiv.org/icons/twitter/arxiv-logo-twitter-square.png",
	"description": "可解释强化学习（XRL）是可解释机器学习的一个新兴子领域，在近年来引起了相当大的关注。XRL的目标是阐明学习代理在顺序决策环境中的决策过程。在本综述中，我们提出了一个优先考虑强化学习设置的XRL文献分类法。我们根据这个分类法概述了技术。我们指出了文献中的空白，用以激励和概述未来工作的路线图。",
	"url": "https://arxiv.org/abs/2202.08434"
}
```

MicroLink

```json
{
	"title": "可解释强化学习综述",
	"image": "https://static.arxiv.org/icons/twitter/arxiv-logo-twitter-square.png",
	"description": "可解释强化学习（XRL）是可解释机器学习的一个新兴子领域，在近年来引起了相当大的关注。XRL的目标是阐明学习代理在顺序决策环境中的决策过程。在本综述中，我们提出了一个优先考虑强化学习设置的XRL文献分类法。我们概述了根据这个分类法的技术。我们指出了文献中的空白，用以激励和概述未来工作的路线图。",
	"url": "https://arxiv.org/abs/2202.08434"
}
```

Iframely

```json
{
	"title": "可解释强化学习综述",
	"image": "https://static.arxiv.org/icons/twitter/arxiv-logo-twitter-square.png",
	"description": "可解释强化学习（XRL）是可解释机器学习的一个新兴子领域，在近年来引起了相当大的关注。XRL的目标是阐明学习代理在顺序决策环境中的决策过程。...",
	"url": "https://arxiv.org/abs/2202.08434"
}
```

**示例 2**

<https://www.redblobgames.com/articles/visibility/>

JSONLink

```json
{
	"title": "2D可见性",
	"image": "https://www.redblobgames.com/articles/visibility/static-lightmap.png?2012-05-21-15-55-03",
	"description": "在2D俯视图地图中，有时候计算从给定点可见的区域是有用的。例如，您可能希望隐藏玩家位置不可见的内容，或者您可能想知道哪些区域会被火炬照亮。",
	"url": "https://www.redblobgames.com/articles/visibility/"
}
```

MicroLink

```json
{
	"title": "2D可见性",
	"image": "https://www.redblobgames.com/favicon.ico",
	"description": "在2D俯视图地图中，有时候计算从给定点可见的区域是有用的。例如，您可能希望隐藏玩家位置不可见的内容，或者您可能想知道哪些区域会被火炬照亮。",
	"url": "https://www.redblobgames.com/articles/visibility/"
}
```

Iframely

```json
{
	"title": "2D可见性",
	"image": "https://www.redblobgames.com/favicon.ico",
	"description": "",
	"url": "https://www.redblobgames.com/articles/visibility/"
}
```