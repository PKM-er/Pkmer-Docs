---
uid: 2023080322222430
title: Obsidian 插件：【Readme】Mermaid Themes
tags: ['obsidian插件', 'readme']
description: 支持主题和自定义的mermaid.js的备选支持。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Mermaid Themes

> [!Note] 插件名片
> - 插件名称：Mermaid Themes
> - 插件作者：jvsteiner
> - 插件说明：支持主题和自定义的mermaid.js的备选支持。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jvsteiner/mermaid-themes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mermaid-themes)

## 概述

支持主题和自定义的mermaid.js的备选支持。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jvsteiner/mermaid-themes/master/README.md)
> 

---

## Readme(翻译）

下面是 [[mermaid-themes]] 插件的自述翻译


# Mermaid主题

这是一个为[Obsidian](https://obsidian.md)开发的插件。它是基于[标准插件模板](https://github.com/obsidianmd/obsidian-sample-plugin)生成的。

该项目允许用户轻松应用和自定义Obsidian中mermaid.js图表的主题。

该插件通过广告支持。

注意：该插件仍在开发中，可能会存在一些错误。请报告您发现的任何问题。

它受到了一个令人惊叹的新插件的启发，该插件可以将您的笔记内容发布到Confluence。这个项目让我了解到Mermaid，并促使我制作了这个插件。

-   [Markdown Confluence](https://github.com/markdown-confluence/markdown-confluence)

## 用法

允许您在笔记中的mermaid图表中应用其他主题。有两个主要选项，它们是互斥的。您可以提供一个完整的mermaid主题对象，或者提供您想要更改的该对象的部分。然后，插件将将您的自定义与基本主题合并，并将结果应用于您的图表。关于如何创建和使用mermaid主题的文档[可以在此处找到](https://mermaid.js.org/config/theming.html)。

`mermaid`代码围栏标签已被保留。您必须使用`merm`作为替代。代码块的格式如下：

        ```merm
        ```

### 安装

在此插件在社区插件列表中可用之前，您可以使用[BRAT插件](https://github.com/TfTHacker/obsidian42-brat)作为测试版安装。

有关如何使用它的详细信息，请参阅其文档。简短版本是，您可以通过将以下自定义插件存储库添加到BRAT插件设置的存储库列表中来安装此插件。

开发

欢迎提交PR。您可以使用`npm run build`构建插件，插件将构建到根文件夹中，因此使用构建的工件很容易。您还可以运行`npm run dev`，在您进行更改时自动重新构建插件。

发布新版本

本节旨在提醒我如何发布新版本。

更新你的 manifest.json 文件，将新版本号（例如1.0.1）和你的最新发布所需的最低 Obsidian 版本更新。

更新你的 versions.json 文件，将 "new-plugin-version": "minimum-obsidian-version" 添加进去，这样旧版本的 Obsidian 就可以下载与其兼容的旧版本插件。

使用你的新版本号作为 "Tag version" 创建新的 GitHub 发布。使用精确的版本号，不要包含前缀 v。参考这里的示例：https://github.com/obsidianmd/obsidian-sample-plugin/releases

将 manifest.json、main.js、styles.css 文件作为二进制附件上传。注意：manifest.json 文件必须同时位于你的仓库根路径和发布中。

发布发布。

> 你可以在手动更新 manifest.json 中的 minAppVersion 后，通过运行 npm version patch、npm version minor 或 npm version major 来简化版本升级过程。该命令将在 manifest.json 和 package.json 中升级版本，并将新版本的条目添加到 versions.json 中。



