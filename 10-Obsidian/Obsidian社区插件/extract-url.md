---
uid: 2024052908540807
title: Obsidian 插件：Extract url content
tags: ['第三方工具集成', '转换工具', '笔记与日志', 'obsidian插件']
description: 将URL提取内容转换为Markdown
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Extract url content

> [!Note] 插件名片
> - 插件名称：Extract url content
> - 插件作者：Stephen Solka
> - 插件说明：将 URL 提取内容转换为 Markdown
> - 插件分类：[' 第三方工具集成 ', ' 转换工具 ', ' 笔记与日志 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/trashhalo/obsidian-extract-url)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?extract-url)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/trashhalo/obsidian-extract-url/master/README.md)

![Extract url content](https://cdn.pkmer.cn/covers/extract-url_new.gif!pkmer)

## 概述

Obsidian 插件：将 URL 转换为 Markdown

这个插件可以将 URL 转换为 Markdown 视图，如果网站允许的话。

安装方法：在选项中的社区插件商店中可用。

工作模式：有两种工作模式。

1. **选择模式** - 如果你在文档中选择一个 URL 并执行这些命令，它将用 Markdown 内容替换选择的内容。
2. **文档模式** - 如果你在文档中添加了一个带有“link”键的 front matter，它将被视为一个链接文档。然后调用提取命令时，它将查找链接并用提取的内容替换文档的内容。
3. **归档模式** - 提取文档中找到的每个 `[foo](https://url.com)` URL。将外部链接替换为内部链接。文件保存在“archive”文件夹中。

命令：

- **提取**：用从网页内容中提取的可读的 Markdown 内容替换 URL 或文档。
- **仅标题**：用从页面内容中提取的标题创建一个 Markdown 锚点，替换 URL 或文档。
- **从剪贴板导入**：从剪贴板中提取 URL 的内容，并将其放在光标处。

如果你的系统安装了 `youtube-dl`，则会从 YouTube URL 中提取额外的详细信息，如频道名称和描述。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



