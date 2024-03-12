---
uid: 20240312193744
title: Obsidian 插件：【Readme】MarkdownSpace Publish
tags: ['obsidian插件', 'readme']
description: 将您的文档发布到MarkdownSpace，它们将立即变成一个网站。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】MarkdownSpace Publish

> [!Note] 插件名片
> - 插件名称：MarkdownSpace Publish
> - 插件作者：Vali Ventures
> - 插件说明：将您的文档发布到 MarkdownSpace，它们将立即变成一个网站。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/markdown-space/markdownspace-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markdownspace-publish)

## 概述

将您的文档发布到 MarkdownSpace，它们将立即变成一个网站。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/markdown-space/markdownspace-obsidian-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[markdownspace-publish]] 插件的自述翻译

# Obsidian 的 Markdown Space 插件

Markdown Space 是一个用于 [Obsidian](https://obsidian.md) 的插件，允许您在您的保险库和 markdownspace 之间导出文件。这意味着您可以在 markdownspace 中编辑您的文件，然后将它们导出到您的保险库，或者您可以将您的保险库导出到 markdownspace 并在那里进行编辑。

Markdownspace 是一个网站，允许您在浏览器中编辑 markdown 文件。这是一个很好的方式来随时随地编辑您的文件，或者与他人分享。您可以在 [markdown.space](https://markdown.space) 找到它。

值得注意的是，Markdownspace 为您带来了在 markdown 中使用 MDX 的功能。这意味着您可以在您的 markdown 文件中使用 React 组件。您可以在 [这里](https://mdxjs.com/) 了解更多关于 MDX 的信息。

## 特点

- 基于项目的 API 密钥管理：安全地管理和使用针对每个 Markdown Space 项目特定的 API 密钥。
- 将文件导出到 markdownspace
- 将文件夹导出到 markdownspace
- 将整个保险库导出到 markdownspace
- 从 markdownspace 导入文件
- 从 markdownspace 导入文件夹
- 从 markdownspace 导入整个保险库
- 将您的保险库与 markdownspace 同步
- 从 Obsidian 打开 markdownspace 页面

## 安装

从 Obsidian Community Plugins 安装（即将推出）

### 手动安装

1. 从 [最新版本](https://github.com/markdown-space/markdownspace-obsidian-plugin/releases/latest) 下载 `main.js`、`styles.css` 和 `manifest.json`，或者从其他版本下载。
2. 将文件放入：`{VaultFolder}/.obsidian/plugins/`
3. 重新加载 Obsidian
4. 在设置中启用插件
5. 再次重新加载 Obsidian
6. 在左侧边栏中点击 M# 图标

## 使用插件

1. 在 [markdown.space](https://markdown.space) 注册一个账户
2. 从 markdownspace 项目中检索您的项目设置。
3. 点击左侧边栏中的 M#图标。
4. 将您的项目设置输入到出现的叶子中。
5. 看，您已经准备好了！现在您可以将文件、文件夹或整个保险库导出到 markdownspace。

## 常见问题解答

> 问：我可以从命令行运行吗？
>
> 答：可以！但是您需要使用我们的 [CLI工具](https://www.npmjs.com/package/@markdownspace/cli) 来实现。这个插件只适用于 Obsidian。您可以在 [这里](https://github.com/markdown-space/demo-auto-publish) 看到 CLI 工具的演示。

> 问：我可以在没有账户的情况下使用这个插件吗？
>
> 答：不可以。您需要在 [markdown.space](https://markdown.space) 注册一个账户才能使用这个插件。

> 问：我可以在没有互联网连接的情况下使用这个插件吗？
>
> 答：不可以。您需要互联网连接才能使用这个插件。

> 问：我可以将这个插件与自己的服务器一起使用吗？
>
> 答：不可以。如果您希望使用服务器，请查看我们的 API[这里](https://www.npmjs.com/package/@markdownspace/api)。