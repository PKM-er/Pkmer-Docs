---
uid: 2023080322272872
title: Obsidian 插件：【Readme】Style Importer
tags: ['obsidian插件', 'readme']
description: 从URL导入样式表到你的片段文件夹中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Style Importer

> [!Note] 插件名片
> - 插件名称：Style Importer
> - 插件作者：Josh Rouwhorst
> - 插件说明：从URL导入样式表到你的片段文件夹中。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/joshrouwhorst/style-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?style-importer)

## 概述

从URL导入样式表到你的片段文件夹中。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joshrouwhorst/style-importer/main/README.md)
> 

---

## Readme(翻译）

下面是 [[style-importer]] 插件的自述翻译


# 样式导入器

样式导入器插件允许您从URL加载CSS文件到您的片段文件夹中。这提供了一种简单的方法来在多个笔记本之间同步样式。

- [GitHub](https://github.com/joshrouwhorst/style-importer)
- [给我买杯咖啡](https://buymeacoffee.com/joshrouwhorst)

## 设置

当您首次在笔记本中设置此插件时，您需要按照以下步骤进行操作：

1. 打开设置。
2. 转到样式导入设置。
3. 设置您的CSS文件托管的URL。
4. 转到外观设置。
5. 向下滚动到CSS片段。
6. 如果您看不到style-importer文件，请点击刷新按钮。
7. 切换打开style-importer文件。

托管CSS文件的快速方法是访问[GitHub Gists](https://gist.github.com)，在那里可以创建一个gist。在那里创建你的CSS文件，然后在样式导入设置中输入你的文件的**Raw**版本的URL。

互联网请求和文件更改

该插件只会向您提供的URL(s)发送对CSS文件的请求。然后，它将该文件保存在您的`.obsidian/snippets`文件夹中，文件名为`style-importer.css`。该插件不会进行任何其他文件操作。

反馈
如果您有任何反馈或问题，您可以在[GitHub项目](https://github.com/joshrouwhorst/style-importer/issues)上提交一个问题。



