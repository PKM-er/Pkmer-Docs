---
uid: 2023080322163661
title: Obsidian 插件：【Readme】Copy button for code blocks
tags: ['样式工具', '界面相关', '编辑工具', 'obsidian插件', 'readme']
description: 为代码块添加一个可见的复制按钮
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Copy button for code blocks

> [!Note] 插件名片
> - 插件名称：Copy button for code blocks
> - 插件作者：Daniel Brandenburg
> - 插件说明：为代码块添加一个可见的复制按钮
> - 插件分类：['样式工具', '界面相关', '编辑工具', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jdbrice/obsidian-code-block-copy)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?code-block-copy)

## 概述

为代码块添加一个可见的复制按钮

![Copy button for code blocks](https://cdn.pkmer.cn/covers/code-block-copy.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jdbrice/obsidian-code-block-copy/master/README.md)
> 

---

## Readme(翻译）

下面是 [[code-block-copy]] 插件的自述翻译


# Obsidian插件：代码块复制
这是一个为[Obsidian](https://obsidian.md)设计的插件，在预览模式下为代码块提供复制按钮。

![截图](https://github.com/jdbrice/obsidian-code-block-copy/raw/main/screenshot.png)
与"Editor Syntax Highlight"和"Calendar"插件一起展示。

该插件在预览模式下的代码块右上角添加了一个复制按钮。

### 兼容性

自定义插件仅适用于 Obsidian v0.9.7+。
此存储库的当前 API 针对 Obsidian **v0.9.7+**。

安装

从Obsidian v0.9.8开始，您可以通过以下步骤在Obsidian中激活此插件：
- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索"copy code"
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

您可以按照相同的步骤来更新插件。

### 来自GitHub
- 下载[最新版本](https://github.com/jdbrice/obsidian-code-block-copy/releases/latest)
- 从zip文件中提取`obsidian-code-block-copy`文件夹到你的vault的插件文件夹：`<vault>/.obsidian/plugins/`  
注意：在某些机器上，`.obsidian`文件夹可能是隐藏的。在MacOS上，你可以按下`Command+Shift+Dot`来在Finder中显示该文件夹。
- 重新加载Obsidian
- 如果提示安全模式，你可以禁用安全模式并启用插件。
否则，前往设置，第三方插件，确保安全模式关闭，并从那里启用插件。

## 开发

该项目使用Typescript提供类型检查和文档。  
该仓库依赖于最新的[插件API](https://github.com/obsidianmd/obsidian-api)以Typescript定义格式，其中包含了描述其功能的TSDoc注释。

**注意：** Obsidian API仍处于早期alpha版本，随时可能发生变化！

如果您想要为开发做出贡献和/或自定义它以适应您自己的调整，您可以执行以下操作：
- 克隆该仓库。
- 运行`npm i`或`yarn`安装依赖项。
- 运行`npm run build`进行编译。
- 将`manifest.json`、`main.js`和`styles.css`复制到您的插件文件夹的子文件夹中（例如，`<vault>/.obsidian/plugins/cm-editor-syntax-highlight-obsidian/`）。
- 重新加载Obsidian以查看更改。

或者，您可以直接将该仓库克隆到您的插件文件夹中，一旦安装了依赖项，使用`npm run dev`以启动监视模式下的编译。  
您可能需要重新加载Obsidian（`ctrl+R`）以查看更改。

# 版本历史

## v0.2.0
添加了排除的语言，目前只包括"todoist"以与todoist插件兼容。将来会添加设置页面以添加自定义排除语言。

## v0.1.0
初始版本发布。



