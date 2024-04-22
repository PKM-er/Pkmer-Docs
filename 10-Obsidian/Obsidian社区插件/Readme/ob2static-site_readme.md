---
uid: 2024042221323394
title: Obsidian 插件：【Readme】Static Site MD Exporter
tags: ['obsidian插件', 'readme']
description: 将特定的笔记导出为一般的Markdown文件，以便用于静态页面生成器，如Hugo、Hexo、Astro等。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Static Site MD Exporter

> [!Note] 插件名片
> - 插件名称：Static Site MD Exporter
> - 插件作者：Yunfi
> - 插件说明：将特定的笔记导出为一般的 Markdown 文件，以便用于静态页面生成器，如 Hugo、Hexo、Astro 等。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/yy4382/obsidian-static-site-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ob2static-site)

## 概述

将特定的笔记导出为一般的 Markdown 文件，以便用于静态页面生成器，如 Hugo、Hexo、Astro 等。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/yy4382/obsidian-static-site-export/master/README.md)

---

## Readme(翻译）

下面是 [[ob2static-site]] 插件的自述翻译

# 为 Obsidian 设计的静态网站 MD 导出工具

将 Obsidian 整合到您的博客写作流程中！

将带有 `published: true` 前置信息的笔记导出为普通的 Markdown 格式，这样您就可以将它们用于静态网站生成器！

同时，可以正常使用维基链接 `[[]]` 和许多其他 Obsidian 功能。该插件会自动将导出的 markdown 中的 `[[]]` 样式转换为 `[]()` 样式，保持 Obsidian 中的链接不变。

图片将自动上传到图像托管服务。未来将添加更多选择。

## 特性（它是如何工作的？）

> Wiki 链接到非图片文件不会被更改！

在面板（功能区）上的“所有验证文件 - 静态站点 MD 导出”按钮执行以下操作：

1. 获取存储库中所有带有前置元数据“published”且值为 true（布尔值）的笔记。
2. 将它们转换为通用的 Markdown 格式：
3. 对于笔记中的 [[]] 或![[]] 链接（wiki 链接），它会找到目标笔记。有三种情况：
   1. 目标笔记也是“published”：将 `[[目标笔记的文件名]]` 更改为 `[目标笔记的标题](目标笔记的slug)`[^1] 格式（如果链接中有 `#` 或 `|` 或是一个 `![[]]` 链接，此插件可以智能处理）
   2. 目标笔记不是“published”：删除 [[]] 并保留其中的内容不变。
   3. 目标笔记是图像文件：将其上传到图像托管站点，并替换图像链接。图像文件不会被修改。目前仅支持 Easyimage。
4. 将前置元数据中的标签转换为 1 级格式（丢弃/之前的内容）
5. 将 Markdown 文件上传到 S3 或通过 git 提交。一个设置项控制行为。

“当前文件 - 静态站点 MD 导出”执行类似的操作，但只验证当前笔记，而不是所有笔记。

“触发 GitHub Action 部署”按钮执行以下操作：

- 发送一个 webhook 到 Github，以便它知道是时候构建了。

如果您在存储库中删除文件，则您在 S3 或 git 中的文件不会被删除。您需要去那里删除它们。同样，如果您更改了帖子的 slug，您需要删除具有原始 slug 名称的 s3 或 git 中的 Markdown 文件。

[^1]：目前仅支持前置元数据键“slug”作为 slug。使其可配置正在进行中。

## 用法

1. 在 Obsidian 中安装插件。
2. 在 Obsidian 的设置面板中配置插件设置。有关可以配置的更多详细信息，请参阅 [Settings.ts](src/Settings.ts)。
3. 点击“Static Site MD Export”，它将自动处理并部署 md 文件到 s3。
4. 使用任何你喜欢的工具将这些文件生成为静态站点。Hexo 或 Hugo 是生成静态站点的不错选择。
5. 如果您使用 GitHub actions 进行构建/部署，请尝试使用“触发 GitHub Action 部署”按钮简化工作流程：在不离开 Obsidian 的情况下更新您的站点！

## 贡献

欢迎贡献！请提交一个包含您更改的拉取请求。
