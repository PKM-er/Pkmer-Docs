---
uid: 2023080322254366
title: Obsidian 插件：【Readme】Readwise Mirror
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: 将您的Readwise图书馆直接镜像到Obsidian金库中
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Readwise Mirror

> [!Note] 插件名片
> - 插件名称：Readwise Mirror
> - 插件作者：jsonmartin
> - 插件说明：将您的 Readwise 图书馆直接镜像到 Obsidian 金库中
> - 插件分类：[' 第三方工具集成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jsonMartin/readwise-mirror)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?readwise-mirror)

## 概述

将您的 Readwise 图书馆直接镜像到 Obsidian 金库中

![Readwise Mirror](https://cdn.pkmer.cn/covers/readwise-mirror_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jsonMartin/readwise-mirror/master/README.md)
>

---

## Readme(翻译）

下面是 [[readwise-mirror]] 插件的自述翻译

# Readwise Mirror 插件

**Readwise Mirror** 是一个非官方的开源插件，用于强大的笔记和知识库应用程序 [Obsidian](http://obsidian.md/)。该插件允许用户通过自动下载所有的高亮/笔记并直接同步更改到 Obsidian vault 来 " 镜像 " 他们的整个 Readwise 库。

![example.gif](https://raw.githubusercontent.com/jsonMartin/readwise-mirror/master/example.gif)

输出的格式类似于直接从 Readwise 导出的 Markdown（将所有的高亮集中在每本书/文章等的一个文件中），但它直接集成到 Obsidian 中，并提供了有益的 Obsidian 格式增强功能，比如自动为书名和作者名创建 `[[链接]]`（支持多个作者）和块级链接引用（使用高亮 ID）。

第一次运行此插件时，它将进行完整的同步，从 Readwise 下载所有内容。每次后续的同步只会检查在上次同步尝试之后进行的新更改的来源；如果找到任何更改，它将自动使用最新的数据重新生成笔记。

## 特点

- 支持自定义文件夹用于存储 Readwise 图书馆内容（默认为“Readwise”）
- 支持内容类型的子文件夹（如“图书”，“文章”等）
- 完全单向同步，确保高亮始终是最新的
- 下载整个 Readwise 图书馆，以类似于 Readwise 手动 Markdown 导出的格式
- 增强的 Obsidian Markdown 格式
  - 自动创建书名和作者的 `[[链接]]`
  - 包含块级链接引用（使用高亮 ID）。可以自动链接/转录任何高亮，无需修改 Readwise 笔记。
- 支持标签，包括高亮和来源（图书，文章等）

## 使用方法

安装完成后，访问插件配置页面，输入 Readwise 访问令牌，该令牌可以在此处找到：[https://readwise.io/access_token](https://readwise.io/access_token)

然后运行下面的任何命令或点击 Readwise 工具栏进行首次同步。

## 命令

- `同步新的亮点`: 下载自上次更新以来的所有新亮点
- `测试 Readwise API 密钥`: 确保访问令牌有效
- `删除 Readwise 图书馆`: 从保险库中删除 Readwise 图书馆文件夹
- `下载整个 Readwise 图书馆（强制）`: 强制从 Readwise 下载所有内容

这是如何工作的？

单向镜像同步与基于追加的同步

在 Readwise 中对内容进行的任何更改都将在下一次同步时自动更新。重要的是要注意，这是一种只读/单向同步，这意味着从 Readwise 检测到的任何新的亮点都会导致笔记文件自动重新生成新的内容。这是一个有意的设计决策，以确保 Readwise 是数据的最终真实来源；对于当前存在的亮点进行的任何更改始终会反映出来，而不会使其不同步。虽然另一个可能的解决方案是将新的亮点追加到现有内容笔记中，但修改现有的亮点是不可行的；这就是 Readwise 与其他服务（如 Notion 和 Roam）的集成方式：

> 如果我在 Readwise 中编辑或格式化现有的亮点，或者对现有的亮点进行新的笔记或标签，这些更改会在 Notion 中更新吗？
> 目前还不会。在与 Notion 首次同步之前，在 Readwise 中进行的任何编辑、格式化、笔记或标签都会出现在 Notion 中，但对已同步的亮点进行的新更新不会反映在已同步的亮点中。

### 基于追加同步的 `obsidian-readwise` 插件

除了这个插件之外，Obsidian 还有另一个名为 [obsidian-readwise](https://github.com/renehernandez/obsidian-readwise) 的 Readwise 社区插件，可以在以下链接找到：[https://github.com/renehernandez/obsidian-readwise](https://github.com/renehernandez/obsidian-readwise)。这两个插件适用于不同的用例，请阅读以下内容以确定哪个最适合您的需求。

**由于此插件中镜像同步的工作方式，用户失去了修改笔记的能力，因为插件负责管理 Readwise 库中的所有笔记文件。**如果用户需要对其库具有完全控制权或在 Obsidian 中直接修改笔记和高亮的能力，[obsidian-readwise](https://github.com/renehernandez/obsidian-readwise) 将是更好的选择。

#### **TL;DR**

- 下载 [obsidian-readwise](https://github.com/renehernandez/obsidian-readwise) 以便将新的亮点导入到您的库中，并完全控制修改和格式化笔记的能力
- 如果您想将整个 Readwise 库镜像到 Obsidian 并同步对以前的亮点的修改，请下载此插件。

性能

如果更新的内容太大，导致达到了 Readwise API 的限制，该插件会自动启用速率限制的节流解决方案，在限制过期后立即继续下载整个库。

作为性能参考，同步我包含 5,067 个亮点的 92 本书和 9 篇文章的库大约需要 20 秒。

## 手动安装

- 浏览到 [releases](https://github.com/jsonMartin/readwise-mirror/releases)
- 下载最新版本的 `main.js` 和 `manifest.json`
- 在 Obsidian 插件目录（在您的 vault 中的 `.obsidian/plugins` 目录下）创建一个 `readwise-mirror` 子目录
- 将下载的两个文件移动到该目录中
- 在 Obsidian 中，转到设置，向下滚动到 Community 插件，并激活它。
  - 如果它拒绝激活并显示错误消息，请打开开发者控制台（使用 Ctrl-Shift-I）并检查错误消息。

仅同步带有笔记的高亮部分

Readwise 高亮部分的很大价值在于与其关联的笔记。例如，如果您正在构建一个 Zettelkasten 并希望使用文献笔记进行工作，通常只希望将带有笔记的高亮部分同步到您的 Zettelkasten 中，而不是每个高亮部分。

“仅同步带有笔记的高亮部分”选项将实现这一目标：它只会同步带有笔记的高亮部分。如果您的库中的某个项目只有高亮部分而没有笔记，它将不会被同步。

## 模板化

该插件允许简单的模板化。与 Readwise 的模板化类似，它允许定义

- 一个标题模板，
- 一个高亮模板，以及
- 一个前言模板

前言模板可以打开或关闭。如果您想恢复默认模板，只需完全清空模板，插件将恢复默认设置。

### 头部和前言模板

该模板暴露了以下变量（它们可以用于头部和前言）：

- ```id```: 文档 id,
- ```title```: 清理后的标题,
- ```author```: 作者（原始格式）,
- ```authorStr```: 作者（格式化，作为维基链接 ```[[作者姓名]]```）,
- ```category```: 文档类别,
- ```num_highlights```: 高亮数量,
- ```updated```: 最后更新日期,
- ```cover_image_url```: 封面图片,
- ```highlights_url```: Readwise 链接,
- ```highlights```: 高亮内容,
- ```last_highlight_at```: 最后高亮日期,
- ```source_url```: 来源链接,
- ```tags```: 文档标签

#### 默认的前置元数据模板

```markdown+nunjucks
---
id: {{ id }}
updated: {{ updated }}
title: {{ title }}
author: {{ author }}
---
```

#### 默认标题模板

```markdown+nunjucks
%%
ID: {{ id }}
更新时间: {{ updated }}
%%

![]( {{ cover_image_url }})
```

# 关于

标题：[[{{ title }}]]

作者：{{ authorStr }}

分类：#{{ category }}

{%- if tags %}

标签：{{ tags }}

{%- endif %}

高亮数量：=={{ num_highlights }}==

Readwise 链接：{{ highlights_url }}

{%- if source_url %}

来源链接：{{ source_url }}

{%- endif %}

日期：[[{{ updated }}]]

最后高亮时间：*{{ last_highlight_at }}*

---

# 亮点

```

### 亮点

亮点模板暴露以下变量：

- ```id```: 亮点的id
- ```text```: 被突出显示的文本
- ```note```: 你的注释
- ```location```: 位置
- ```location_url```: 位置的URL
- ```color```: 颜色
- ```highlighted_at```: 突出显示的日期（如果没有则为空）
- ```tags```: 格式化的标签字符串
- ```category``: 源项目的类别（书籍、文章等）

#### 默认的高亮模板

```markdown+nunjucks
{{ text }}{%- if category == 'books' %} ([{{ location }}]({{ location_url }})){%- endif %}{%- if color %} %% 颜色: {{ color }} %%{%- endif %} ^{{id}}{%- if note %}

注释: {{ note }}
{%- endif %}

---
```

### 限制

- 模板化基于 [`nunjucks`](https://mozilla.github.io/nunjucks/templating.html) 模板化库，因此共享其限制；
- 某些字符串（例如日期、标签、作者）目前是预格式化的；
- 如果您的正文和标题或作者姓名中有 `@`（通常是从 Twitter 导入的亮点中发生的情况），则正文将无效。



