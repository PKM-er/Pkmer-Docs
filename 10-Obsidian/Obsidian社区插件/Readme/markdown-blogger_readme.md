---
uid: 20231220115812
title: Obsidian 插件：【Readme】Markdown Blogger
tags: ['obsidian插件', 'readme']
description: 允许开发者将Markdown笔记推送到他们的本地博客、作品集或静态网站。适用于Astro.js、Next.js以及任何配置为渲染Markdown页面的框架。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Markdown Blogger

> [!Note] 插件名片
> - 插件名称：Markdown Blogger
> - 插件作者：Alexa Fazio
> - 插件说明：允许开发者将 Markdown 笔记推送到他们的本地博客、作品集或静态网站。适用于 Astro.js、Next.js 以及任何配置为渲染 Markdown 页面的框架。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/afazio1/obsidian-markdown-blogger)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markdown-blogger)

## 概述

允许开发者将 Markdown 笔记推送到他们的本地博客、作品集或静态网站。适用于 Astro.js、Next.js 以及任何配置为渲染 Markdown 页面的框架。

![Markdown Blogger](https://cdn.pkmer.cn/covers/markdown-blogger_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/afazio1/obsidian-markdown-blogger/main/README.md)

---

## Readme(翻译）

下面是 [[markdown-blogger]] 插件的自述翻译

# Markdown 博客插件

这个插件适用于 [Obsidian](https://obsidian.md)，允许开发者将 Markdown 笔记即时推送到他们的本地博客、作品集或静态网站项目中。与 [Astro.js](https://astro.build)、[Next.js](https://nextjs.org) 以及任何其他配置为渲染 Markdown 页面的框架一起使用。

![markdown-blogger-demo](https://cdn.pkmer.cn/covers/markdown-blogger_2_0.gif)

在 Obsidian 中撰写 Markdown 笔记的好处，无需手动创建文件并将内容复制粘贴到本地项目中。同时也更容易保持这两个文件的同步。

## 特点

- **推送**一个 Markdown 笔记到本地项目文件夹（Obsidian -> 项目）
- **拉取**内容从本地项目文件到一个 Markdown 笔记（Obsidian <- 项目）

## 使用方法

启用插件后，转到 Markdown Blogger 的设置。

- 设置**本地项目文件夹路径**。必须是**绝对**路径。

### 推送 Markdown 命令

使用当前笔记的 Markdown 内容在位置 `/PROJECT_PATH/<note_name>.md` 创建或覆盖一个文件。

- 在编辑模式下打开一个 Markdown 笔记
- 打开命令面板并搜索 " 推送 Markdown 命令 "
- 如果 **本地项目文件夹路径** 无效或不存在，则不会推送该笔记。

### 拉取 Markdown 命令

用位于 `/PROJECT_PATH/<note_name>.md` 位置的文件内容覆盖当前笔记的 Markdown 内容

- 在编辑模式下打开一个 Markdown 笔记
- 打开命令面板并搜索 " 拉取 Markdown 命令 "
- 如果位于 `/PROJECT_PATH/<note_name>.md` 位置的文件无效或不存在，则不会拉取内容

### 验证路径命令

验证当前设置中的**本地项目文件夹路径**。

- 打开命令面板并搜索“验证路径命令”
- 将显示一个指示路径有效性的消息

## 提示和免责声明

1. 这不是像 Git 那样的版本控制系统。推送和拉取命令将覆盖文件的内容。不会跟踪历史记录。我建议一次只对一个文件进行更改，并在编辑文件之前进行推送或拉取。
2. 三次检查你的**本地项目文件夹路径**。你可以通过在 VS Code 中右键单击存储 `.md` 文件的目录来轻松复制**绝对**路径。
   - 例如 `/Users/alexa/Desktop/code-projects/alexa-blog/src/content`
3. 文件是根据它们的文件名在 Obsidian 和项目中进行配对的。目前，如果你在一个地方更改了文件名，你必须在另一个地方也进行更改。
4. 由于项目中的 `.md` 文件与生成它的 Obsidian 笔记具有相同的文件名，我建议在命名文件时使用连字符而不是空格。
   - 例如 `Cool Blog Post.md` 变为 `Cool-Blog-Post.md`

你好，我是 Alexa。一名开发者、大学生和 YouTuber。

我构建工具和创建内容，因为我喜欢与人们建立联系。如果你有意愿给我买杯咖啡，我将非常感激！🤗
