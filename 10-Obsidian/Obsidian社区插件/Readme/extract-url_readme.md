---
uid: 2023080322180547
title: Obsidian 插件：Extract url content
tags: ['链接处理', '转换工具', 'obsidian插件', 'readme']
description: 将URL提取内容转换为Markdown
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Extract url content

> [!Note] 插件名片
> - 插件名称：Extract url content
> - 插件作者：Stephen Solka
> - 插件说明：将 URL 提取内容转换为 Markdown
> - 插件分类：[' 链接处理 ', ' 转换工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/trashhalo/obsidian-extract-url)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?extract-url)

## 概述

将 URL 提取内容转换为 Markdown

![Extract url content](https://cdn.pkmer.cn/covers/extract-url_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/trashhalo/obsidian-extract-url/master/README.md)

---

## Readme(翻译）

下面是 [[extract-url]] 插件的自述翻译

# Obsidian 插件：将 URL 转换为 markdown 格式

![演示](images/demo-extract-url.gif)

如果网站允许，将 URL 转换为 markdown 格式。

# 安装

在选项中的社区插件商店中可用。

# 模式

有两种模式可供选择。

1. **选择模式** - 如果您在文档中选择一个 URL 并执行这些命令，它将用 Markdown 内容替换选择内容。
2. **文档模式** - 如果您在文档中添加了一个具有 `link` 键的前置元素，则该文档将被视为链接文档。然后调用提取操作将查找链接并用提取的内容替换文档的内容。
3. **归档模式** - 提取文档中找到的每个 `[foo](https://url.com)` URL。将外部链接替换为内部链接。文件将创建在 `archive` 文件夹中。

## 文档模式示例

```markdown
---
link: "https://bart.degoe.de/building-a-full-text-search-engine-150-lines-of-code/"
---

在调用提取时，--- 以下的所有内容都将被替换
```

# 命令

- **提取**: 用从网页 HTML 内容中提取的可读的 Markdown 替换 URL 或文档
- **仅标题**: 用从页面内容中提取的标题创建一个 Markdown 锚点来替换 URL 或文档
- **从剪贴板导入**: 从剪贴板中提取 URL 的内容，并将其放置在光标处。

# Youtube

如果您的系统已安装 `youtube-dl`，则会从 YouTube 网址中提取额外的详细信息，如频道名称和描述。

![youtube](images/youtube.png)
