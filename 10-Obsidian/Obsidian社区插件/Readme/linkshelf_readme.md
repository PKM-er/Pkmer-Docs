---
uid: 2023102611080321
title: Obsidian 插件：【Readme】LinkShelf
tags: ['obsidian插件', 'readme']
description: 将浏览器中的链接直接保存到Obsidian中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】LinkShelf

> [!Note] 插件名片
> - 插件名称：LinkShelf
> - 插件作者：Joel Sequeira
> - 插件说明：将浏览器中的链接直接保存到 Obsidian 中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/joelseq/obsidian-linkshelf)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?linkshelf)

## 概述

将浏览器中的链接直接保存到 Obsidian 中。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joelseq/obsidian-linkstowr/main/README.md)

---

## Readme(翻译）

下面是 [[linkshelf]] 插件的自述翻译

# Obsidian LinkShelf

这个仓库是 Obsidian 的 LinkShelf 插件。LinkShelf 是一套免费、开源且注重隐私的工具（包括 Chrome 扩展和 Obsidian 插件），旨在以结构化和有意义的方式轻松捕捉和存储您宝贵的在线资源。

使用 Chrome 扩展，将重要的书签和简单的注释保存起来：

![chrome-extension](assets/linkshelf-chrome.png)

定期将您的链接与 Obsidian vault 同步。

[linkshelf-obsidian.webm](https://github.com/joelseq/obsidian-linkshelf/assets/12389411/fae8324c-ec3d-4fbc-9b07-23a21333c1c1)

注意：这是一个非常新的工具，可能存在一些错误和缺失的功能。

使用方法

## 先决条件

1. 在<https://linkshelf.app/>上创建一个账户并生成一个访问令牌。
2. 下载 [Chrome扩展程序](https://chrome.google.com/webstore/detail/linkshelf/ahppmgflbaeiphlkkgngijgmfapabgee) 并输入您的访问令牌。
3. 使用 Chrome 扩展程序开始保存链接。

## 使用插件

1. 安装此插件。
2. 转到“设置”>“社区插件”>“已安装”，确保“LinkShelf”已启用。
3. 转到插件的设置并配置插件：
    - 输入先前生成的访问令牌。如果您忘记或丢失了先前生成的令牌，可以创建一个新的并使用它。
    - 添加要保存链接的文件夹路径。重要提示：确保此文件夹存在。
    - （可选）添加要使用的模板文件的路径。有关创建模板文件的说明，请参见下面的说明。
4. 配置完成后，使用命令面板（cmd/ctrl+P）或侧边栏上的“LinkShelf 同步”图标运行“同步”命令，以同步保存的链接。

一旦您的链接成功同步到 Obsidian vault，LinkShelf 将不再存储您的链接。这确保您的 vault 是您链接的唯一长期存储位置！

### 模板

LinkShelf 允许您使用插件设置中提供的模板文件自定义链接文件的最终输出。以下变量可用于在模板文件中使用：

- title：您在 Chrome 扩展中保存链接时使用的标题。通常默认为保存链接的标签的标题。
- url：链接的 URL。
- note：您使用 Chrome 扩展添加的链接的注释。

以下是文件保存时使用的默认模板。请随意根据您的要求进行调整：

```
---
tags: bookmark
title: "{{title}}"
url: {{url}}
---
# {{标题}}

url: {{网址}}

{{备注}}
```

### 提示

我创建 LinkShelf 的主要用例是为了让我能够轻松存储有用的链接，并与我现有的工作流程（主要依赖 Obsidian）很好地集成，以便以后轻松查询和组织。我将其用作书签工具，通过在笔记中添加一些相关信息，如与我分享该链接的人或特定的标签，如#health，#tech，#learning。我还将其用作稍后阅读/观看的工具，通过在笔记中添加#later 标签。通过这些标签和我的链接模板，我可以使用 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 查询来创建查询。示例：

查找标记为稍后阅读的链接列表（假设您的链接中已添加了“bookmark”标签，该标签在默认模板中）。

```dataview
TABLE url, note
FROM #bookmark and #later
```

感谢

以下资源对学习如何创建这个插件非常有帮助：

- [Obsidian开发者文档](https://docs.obsidian.md/)
- [Obsidian Kindle插件仓库](https://github.com/hadynz/obsidian-kindle-plugin)
- [Obsidian图书搜索插件](https://github.com/anpigon/obsidian-book-search-plugin)



