---
uid: 2023080322221592
title: Obsidian 插件：【Readme】mdx as md
tags: ['编辑器', 'obsidian插件', 'readme']
description: 在Obsidian中编辑mdx文件作为markdown
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：mdx as md

> [!Note] 插件名片
> - 插件名称：mdx as md
> - 插件作者：Nikolay Kozhukharenko
> - 插件说明：在Obsidian中编辑mdx文件作为markdown
> - 插件分类：['编辑器', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mkozhukharenko/mdx-as-md-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mdx-as-md-obsidian)

## 概述

在Obsidian中编辑mdx文件作为markdown



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mkozhukharenko/mdx-as-md-obsidian/main/README.md)
> 

---

## Readme(翻译）

下面是 [[mdx-as-md-obsidian]] 插件的自述翻译


# mdx作为md Obsidian插件
[![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/mkozhukharenko/mdx-as-md-obsidian?style=for-the-badge&sort=semver)](https://github.com/mkozhukharenko/mdx-as-md-obsidian/releases/latest)
![GitHub所有发布](https://img.shields.io/github/downloads/mkozhukharenko/mdx-as-md-obsidian/total?style=for-the-badge)

这是一个为[Obsidian](https://obsidian.md)设计的插件，允许将mdx文件像编辑markdown文件一样进行编辑。

### 兼容性

所需的API仅在Obsidian **0.10.12**中添加，因此，这是使用此插件所需的最低版本的Obsidian。

安装

从Obsidian v0.9.8开始，您可以通过以下步骤在Obsidian中激活此插件：
- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索此插件
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

您可以按照相同的步骤来更新插件。

### 来自GitHub
- 从GitHub存储库的Releases部分下载最新版本
- 从zip文件中提取插件文件夹到您的vault的插件文件夹：`<vault>/.obsidian/plugins/`  
注意：在某些机器上，`.obsidian`文件夹可能是隐藏的。在MacOS上，您可以按`Command+Shift+Dot`来在Finder中显示该文件夹。
- 重新加载Obsidian
- 如果提示安全模式，您可以禁用安全模式并启用插件。
否则，请前往设置，第三方插件，确保安全模式关闭并从那里启用插件。

## 安全性
> 第三方插件可以访问您计算机上的文件，连接到互联网，甚至安装其他程序。

该插件的源代码可在GitHub上获取，供您自行审查，但将插件安装到Obsidian中目前是基于信任的。

我在这里向您保证，我不会采集您的数据，也不会将信息发送到互联网或以其他方式对您的系统进行任何不正当操作。然而，请注意，我*有可能*这样做，您只能相信我的话。

## 开发

该项目使用Typescript提供类型检查和文档。  
该仓库依赖于最新的[插件API](https://github.com/obsidianmd/obsidian-api)，以Typescript定义格式提供，其中包含了描述其功能的TSDoc注释。

**注意：** Obsidian API仍处于早期alpha版本，随时可能发生变化！

如果您想要为开发做出贡献和/或自定义它以适应您自己的调整，您可以执行以下操作：
- 克隆该仓库。
- 运行`npm i`或`yarn`安装依赖项。
- 运行`npm run build`进行编译。
- 将`manifest.json`、`main.js`和`styles.css`复制到插件文件夹的子文件夹中（例如，`<vault>/.obsidian/plugins/<plugin-name>/`）。
- 重新加载Obsidian以查看更改。

或者，您可以直接将仓库克隆到插件文件夹中，一旦安装了依赖项，使用`npm run dev`以启动监视模式下的编译。  
您可能需要重新加载Obsidian（`ctrl+R`）以查看更改。

# 版本历史

初始版本发布！



