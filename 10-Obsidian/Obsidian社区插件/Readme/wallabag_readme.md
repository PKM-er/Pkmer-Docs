---
uid: 2023120719463150
title: Obsidian 插件：【Readme】Wallabag
tags: ['obsidian插件', 'readme']
description: 同步您的Wallabag文章。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Wallabag

> [!Note] 插件名片
> - 插件名称：Wallabag
> - 插件作者：Hüseyin Zengin
> - 插件说明：同步您的 Wallabag 文章。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/huseyz/obsidian-wallabag)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?wallabag)

## 概述

同步您的 Wallabag 文章。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/huseyz/obsidian-wallabag/master/README.md)
>

---

## Readme(翻译）

下面是 [[wallabag]] 插件的自述翻译

# Obsidian Wallabag 插件

这个插件为 [Obsidian](https://obsidian.md) 提供了多种方式将 [Wallabag](https://www.wallabag.it/en) 的项目同步到 Obsidian 笔记中。

认证

在安装和启用插件后，您首先需要使用您的 Wallabag 实例进行身份验证。

您可以按照 Wallabag 的 [iOS设置指南](https://doc.wallabag.org/en/apps/ios.html) 获取客户端属性。

用途

该插件的用途非常简单：它同步 Wallabag 文章并以各种可能的格式创建笔记。

使用命令“同步 Wallabag 文章”来同步新文章。插件会跟踪已同步的项目，因此如果您删除了一个已创建的笔记，除非您使用命令“清除同步的文章缓存”来重置插件缓存，否则不会再次生成。

在插件设置下有各种设置可用于个性化您的工作流程，以下是一些重要的设置：

| 设置                                                   | 描述                                                                                                                |
| :----------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| 要同步的标签                                           | 使用此选项仅同步带有标签的文章。如果为空，插件将同步所有文章。                                                      |
| 文章笔记文件夹                                         | 定义要创建同步的笔记的文件夹。如果为空，笔记将在存储库根目录创建。                                                    |
| 文章笔记模板                                           | 用于传递自定义模板以供笔记使用。有关更多详细信息，请参见 [模板化](#templating)。                                         |
| 启动时同步                                             | 如果启用，文章将在启动时同步。                                                                                      |
| 同步已归档的文章                                       | 如果启用，将同步已归档的文章。                                                                                      |
| 导出为 PDF                                              | 如果启用，同步的文章将导出为 PDF。                                                                                   |
| 将 Wallabag 提取的 HTML 内容转换为 Markdown                 | 如果启用，将在使用新文章之前将 Wallabag 文章的内容转换为 Markdown。                                                     |
| 同步后归档文章                                         | 如果启用，文章将在同步后归档。                                                                                      |
| 在标题中添加文章 ID                                     | 如果启用，将在标题中添加文章 ID。                                                                                    |
| 标签格式                                               | 确定如何在创建的笔记中填充标签。CSV（tag1，tag2）或 hashtags（#tag1 #tag2）                                            |

## 模板化

默认情况下，该插件提供了两个内置模板；一个用于将文章内容作为注释插入，另一个用于在启用选项时创建一个带有指向导出 PDF 的链接的注释。这两个模板都包括指向原始文章的链接、指向 Wallabag 项目的链接和标签。请参见下面的示例：

![](https://cdn.pkmer.cn/covers/wallabag_2_0.png!pkmer)

您可以使用自定义模板，此时插件将传递以下变量。

| 变量 | 描述 |
|:----------------|:-------------------------------------------------------------------------------------------------------------------|
| `id` | 文章的 Wallabag ID（用于脚本编写） |
| `article_title` | 文章的标题 |
| `original_link` | 源文章的链接 |
| `created_at` | 文章在 Wallabag 中的创建日期 |
| `published_at` | 根据 Wallabag 的记录，文章的原始发布日期 |
| `updated_at` | 文章在 Wallabag 中的最后修改日期 <sub><br>当修改注释时，Wallabag API 似乎不会更改此字段。</sub> |
| `wallabag_link` | 文章在 Wallabag 中的链接 |
| `content` | wallabag 提取的 HTML 内容 |
| `pdf_link` | 指向导出的 pdf 文件的 Obsidian wikilink。 <sub><br>仅在选择了 PDF 导出选项时才填充。</sub> |
| `tags` | 附加到 Wallabag 文章的标签，格式取决于设置 |
| `reading_time` | 文章的阅读时间 |
| `preview_picture` | 文章的预览图片链接 |
| `domain_name` | 源域名文章的链接 |

我主要使用模板来导出 pdf 并使用 [Annotator]() 来阅读，使用以下模板。

```
---
annotation-target: {{pdf_link}}
---
```

![](https://cdn.pkmer.cn/covers/wallabag_2_1.png!pkmer)

安装

### 手动安装

- 您需要 Obsidian v1.0.0+ 版本以获取插件的最新版本。
- 获取 [插件的最新版本](https://github.com/huseyz/obsidian-wallabag/releases/latest)。
- 在插件文件夹下创建一个目录，例如 `[VAULT]/.obsidian/plugins/obsidian-wallabag`。
- 将发布的文件放入该文件夹中。
- 重新加载 Obsidian。
- 确保关闭安全模式并启用插件。
开发

### 工作流程

- 运行 `npm install`。
- 运行 `npm run build`。
- 将 `main.js` 和 `manifest.json`（如果有更改）复制到你的 Obsidian 笔记库的插件文件夹中（例如 `[VAULT]/.obsidian/plugins/obsidian-wallabag`）。
- 在 Obsidian 的设置中禁用并重新启用插件以重新加载它。

### 状态

相对于 `[VAULT]/.obsidian/plugins/obsidian-wallabag`：

- `.synced`：已经下载的所有文章的 id 列表。插件在清除之前不会再次尝试下载这些文章。
- `.__wallabag_token__`：Wallabag 的身份验证凭据。



