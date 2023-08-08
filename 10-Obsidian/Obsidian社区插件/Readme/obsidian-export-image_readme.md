---
uid: 2023080322180003
title: Obsidian 插件：【Readme】Export Image plugin
tags: ['图片', '转换工具', 'obsidian插件', 'readme']
description: 将你的 Obsidian 笔记导出成图片。每次只能对一个笔记进行导出操作，且需要你切换到阅读模式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Export Image plugin

> [!Note] 插件名片
> - 插件名称：Export Image plugin
> - 插件作者：Zhou Hua
> - 插件说明：将你的 Obsidian 笔记导出成图片。每次只能对一个笔记进行导出操作，且需要你切换到阅读模式。
> - 插件分类：[' 图片 ', ' 转换工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/zhouhua/obsidian-export-image)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-export-image)

## 概述

将你的 Obsidian 笔记导出成图片。每次只能对一个笔记进行导出操作，且需要你切换到阅读模式。

![Export Image plugin](https://cdn.pkmer.cn/covers/obsidian-export-image.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zhouhua/obsidian-export-image/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-export-image]] 插件的自述翻译

# Obsidian 导出图片插件

该插件可以帮助您轻松地将任何文章导出为图片。

## 使用方法

注意：此插件仅在预览模式下工作。

![](./assets/mode.png)

* 使用命令面板中的命令 `export to image`（按下 cmd/ctrl+P 进入命令）生成一张图片并下载到您的文件系统中。

  ![](./assets/command.png)

* 使用命令面板中的命令 `copy as image`（按下 cmd/ctrl+P 进入命令）生成一张图片并复制到剪贴板中，这样您可以轻松地粘贴到其他软件中。

  ![](./assets/command-copy.png)

安装

### 堇青石

尚未准备好。

### Github

* 从 GitHub 存储库的 Releases 部分下载最新版本的发布版
* 从 zip 文件中提取插件文件夹到您的 vault 的插件文件夹：<vault>/.obsidian/plugins/

  注意：在某些机器上，.obsidian 文件夹可能是隐藏的。在 MacOS 上，您可以按 Command+Shift+Dot 来在 Finder 中显示该文件夹。

* 重新加载 Obsidian
* 如果提示安全模式，您可以禁用安全模式并启用插件。

  否则，请前往设置，第三方插件，确保安全模式关闭并从那里启用插件。

### BRAT

* 安装 BRAT 插件

  1. 打开设置 -> 社区插件
  2. 如果启用了安全模式，请禁用安全模式
  3. 浏览并搜索 "BRAT"
  4. 安装最新版本的 Obsidian 42 - BRAT

* 打开 BRAT 设置（设置 -> Obsidian 42 - BRAT）

  1. 滚动到 Beta 插件列表部分
  2. 添加 Beta 插件
  3. 指定此存储库：zhouhua/obsidian-export-image

* 启用 Bartender 插件（设置 -> 社区插件）

## 特别感谢

* [dom-to-image](https://github.com/tsayen/dom-to-image)。这个仓库借用了很多来自 [dom-to-image](https://github.com/tsayen/dom-to-image) 的代码。这个令人惊叹的库帮助我从 dom 生成图像。
