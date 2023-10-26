---
uid: 2023102611072875
title: Obsidian 插件：【Readme】Cardify
tags: ['obsidian插件', 'readme']
description: 为markdown文件中的块创建链接，并为文件夹中的每个链接生成markdown文件。实现将卡片拖放到画布上的功能。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Cardify

> [!Note] 插件名片
> - 插件名称：Cardify
> - 插件作者：joshuakto
> - 插件说明：为markdown文件中的块创建链接，并为文件夹中的每个链接生成markdown文件。实现将卡片拖放到画布上的功能。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/joshuakto/obsidian-cardify)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cardify)

## 概述

为markdown文件中的块创建链接，并为文件夹中的每个链接生成markdown文件。实现将卡片拖放到画布上的功能。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joshuakto/obsidian-cardify/master/README.md)
> 

---

## Readme(翻译）

下面是 [[cardify]] 插件的自述翻译


# Obsidian Cardify 插件

将 markdown 中的内容分隔开，并为每个分隔的内容分配内部链接，生成相应的链接 markdown。方便将单独链接的 markdown 文件拖放到画布上。

Cardify 具有以下基本功能：
- 选择分隔符（目前仅支持两个换行符或---）。
- 检测内容中是否存在内部链接，如果不存在则自动分配。
- 为每个分隔的内容创建一个 markdown（同时保留前置元数据）。
	- 根据分隔内容的位置为创建的页面提供索引。
	- 从内容中提取注释作为创建页面的标题。
- 创建一个文件夹来存储创建的 markdown。
- 生成并插入一个内部链接来替换当前选择。

计划的功能：
- 切换功能以自动分配内部链接。
- 以优先级顺序排列的正则表达式列表，用作创建 markdown 的标题。
- 允许用户在弹出的模态窗口中查看插件使用说明。
- 允许用户预览从活动文件生成的卡片。
## 如何使用
1. 安装完成后，将在功能区中显示一个重叠方块的图标。
2. 导航到您想要转换为卡片的Markdown文件。
3. 单击重叠方块图标，将生成一个与活动文件同名的文件夹，并将创建的Markdown文件存储在其中。
**注意：**目前，插件在插入内部链接时会更改Markdown的内容。如果文档的间距很重要，请暂时不要使用此插件。将来将会有一个选项，可以选择是否修改现有文件的内容。
## 致谢
该插件是使用[Obsidian示例插件](https://github.com/obsidianmd/obsidian-sample-plugin)作为模板构建的。

<!--- 
发布新版本

- 在`manifest.json`中更新您的新版本号，例如`1.0.1`，以及您的最新版本所需的最低Obsidian版本。
- 在`versions.json`文件中更新`"new-plugin-version": "minimum-obsidian-version"`，以便旧版本的Obsidian可以下载与其兼容的旧版本插件。
- 使用新版本号作为“Tag version”创建新的GitHub发布。使用确切的版本号，不要包含前缀`v`。参见此处的示例：https://github.com/obsidianmd/obsidian-sample-plugin/releases
- 将`manifest.json`、`main.js`、`styles.css`文件作为二进制附件上传。注意：manifest.json文件必须在两个位置上，首先是您的存储库的根路径，还要在发布中。
- 发布该版本。

> 您可以在手动更新`manifest.json`中的`minAppVersion`后运行`npm version patch`、`npm version minor`或`npm version major`来简化版本升级过程。
> 该命令将在`manifest.json`和`package.json`中升级版本，并将新版本的条目添加到`versions.json`中。
## API文档

请参阅https://github.com/obsidianmd/obsidian-api
--->



