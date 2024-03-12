---
uid: 20231220112631
title: Obsidian 插件：【Readme】Booksidian
tags: ['界面相关', '搜索/排序', '第三方工具集成', 'PDF', '效率', '美化', '学习', '信息收集', 'obsidian插件', 'readme']
description: Booksidian 将您的 Goodreads 数据 放到 Obsidian 仓库中。可以从Goodreads RSS提要上可用的参数列表中选择（+一些可以从中推断出的额外内容，如副标题或系列），从而设置书注释的正文和标题。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Booksidian

> [!Note] 插件名片
> - 插件名称：Booksidian
> - 插件作者：Micha Brugger
> - 插件说明：Booksidian 将您的 Goodreads 数据 放到 Obsidian 仓库中。可以从 Goodreads RSS 提要上可用的参数列表中选择（+ 一些可以从中推断出的额外内容，如副标题或系列），从而设置书注释的正文和标题。
> - 插件分类：[' 界面相关 ', ' 搜索/排序 ', ' 第三方工具集成 ', 'PDF', ' 效率 ', ' 美化 ', ' 学习 ', ' 信息收集 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/MichaBrugger/booksidian_plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?booksidian-plugin)

## 概述

Booksidian 将您的 Goodreads 数据 放到 Obsidian 仓库中。可以从 Goodreads RSS 提要上可用的参数列表中选择（+ 一些可以从中推断出的额外内容，如副标题或系列），从而设置书注释的正文和标题。

![Booksidian](https://cdn.pkmer.cn/covers/booksidian-plugin.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/MichaBrugger/booksidian_plugin/master/README.md)

---

## Readme(翻译）

下面是 [[booksidian-plugin]] 插件的自述翻译

# Booksidian

Booksidian 将您的 Goodreads 数据带到 Obsidian。

您可以通过从 Goodreads RSS 订阅的参数列表中选择（加上一些额外的参数，例如副标题或系列），为您的书籍笔记设置正文和前置元数据。

![image](https://cdn.pkmer.cn/covers/booksidian-plugin_1_0.png!pkmer)

设置说明

请注意，Goodreads 处理其 RSS 源的方式是，只有前 100 个项目会被添加到相应的 RSS 源中。因此，如果您想从一个书架中导出超过 100 本书，您需要将它们分成多个书架。

创建书架

您可以在 Goodreads 的“我的书籍”中创建这些书架，然后在左侧菜单中选择“添加书架”：![image](https://cdn.pkmer.cn/covers/booksidian-plugin_1_1.png!pkmer)

#### 获取 Feed 的基本 URL

您可以通过将每页加载的项目设置为“无限滚动”，然后单击右下角的橙色“RSS”按钮来获取 RSS 的基本 URL。

![image](https://cdn.pkmer.cn/covers/booksidian-plugin_1_2.png!pkmer)

这将打开一个新页面。您现在可以复制该 URL 并删除最后一个“=”之后的所有内容。这就是您的 RSS 的基本 URL。设置完毕后，您可以通过在设置中添加它们的名称（用逗号分隔）来添加您想要下载的所有书架。

![image](https://cdn.pkmer.cn/covers/booksidian-plugin_1_3.png!pkmer)

### 运行 Booksidian

您可以通过执行“Booksidian Sync”命令或按下菜单栏中的“B”来运行 Booksidian 同步。

或者，您可以通过更新插件设置中的 `frequency` 来将 Booksidian 设置为自动同步。

### 覆盖笔记

默认情况下，一旦 Booksidian 从您的 RSS 订阅中同步了一本书并创建了一个笔记，即使与该书相关的数据在您的订阅中发生了变化，该笔记也不会被更新或更改。例如，如果您同步了一本书，然后给它评分并再次同步，该评分将不会同步到笔记中。

要让 Booksidian 覆盖旧的笔记，请切换 `overwrite` 插件设置。这将导致 Booksidian 始终用新的笔记替换已存在的书籍的笔记。但要小心 - 如果您对笔记文件进行了自己的更新，在下次同步时它们将会丢失。

最后，如何设计你的书籍笔记完全取决于你。我个人喜欢将其与 `dataview插件` 和 `minimal主题` 中的新卡片系统相结合，这样可以创建出像这样的漂亮小图书馆：

![image](https://cdn.pkmer.cn/covers/booksidian-plugin_1_4.png!pkmer)

你可以通过在你想要创建图书馆的文件的 frontmatter 中添加 `cssClasses: cards`，然后将以下代码粘贴到这里来实现这个效果：

```dataview
table without id ("![](" + cover +")") as Cover, author as Author
where cover != null
sort rating desc
```

请在 [这里](https://github.com/blacksmithgu/obsidian-dataview) 和 [这里](https://github.com/kepano/obsidian-minimal) 查看这两个令人惊叹的作品。

将链接返回到 Goodreads

Goodreads 图书“id”是插件中提供的可用数据的一部分。您可以通过以下方式创建一个链接返回到 Goodreads 页面上的一本书：

```
https://www.goodreads.com/book/show/{{id}}
```