---
uid: 2023080322240740
title: Obsidian 插件：【Readme】Open In New Tab
tags: ['obsidian插件', 'readme']
description: 像浏览器一样在新标签页中打开文件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Open In New Tab

> [!Note] 插件名片
> - 插件名称：Open In New Tab
> - 插件作者：patleeman
> - 插件说明：像浏览器一样在新标签页中打开文件
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/patleeman/obsidian-open-in-new-tab)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?open-in-new-tab)

## 概述

像浏览器一样在新标签页中打开文件



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/patleeman/obsidian-open-in-new-tab/master/README.md)
> 

---

## Readme(翻译）

下面是 [[open-in-new-tab]] 插件的自述翻译


# Obsidian Open In New Tab 插件

该插件有两个功能：

1. 在文件浏览器中，将所有文档都在新标签页中打开。
2. 如果文件已经在现有标签页中打开，则激活该标签页，而不是打开一个新标签页。

[相关 Obsidian 论坛帖子](https://forum.obsidian.md/t/click-links-files-to-open-in-new-tab-by-default/7347)

感谢 [scambier/obsidian-no-dupe-leaves](https://github.com/scambier/obsidian-no-dupe-leaves)。

## 如何使用

-   克隆这个仓库。
-   运行 `npm i` 或 `yarn` 安装依赖。
-   运行 `npm run dev` 以启动编译并进入监听模式。

发布新版本

- 在`manifest.json`中更新您的新版本号，例如`1.0.1`，以及您最新版本所需的最低Obsidian版本。
- 在`versions.json`文件中更新`"new-plugin-version": "minimum-obsidian-version"`，以便旧版本的Obsidian可以下载与其兼容的旧版本插件。
- 使用您的新版本号作为“标签版本”创建新的GitHub发布。使用确切的版本号，不要包含前缀`v`。示例请参见：https://github.com/obsidianmd/obsidian-sample-plugin/releases
- 将`manifest.json`、`main.js`、`styles.css`文件作为二进制附件上传。注意：manifest.json文件必须在您的存储库的根路径和发布中都存在。
- 发布发布。

> 您可以在手动更新`manifest.json`中的`minAppVersion`后运行`npm version patch`、`npm version minor`或`npm version major`来简化版本升级过程。
> 该命令将在`manifest.json`和`package.json`中升级版本，并将新版本的条目添加到`versions.json`中。

将您的插件添加到社区插件列表中

-   检查 https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md
-   发布一个初始版本。
-   确保您的存储库的根目录中有一个 `README.md` 文件。
-   在 https://github.com/obsidianmd/obsidian-releases 上创建一个拉取请求，以添加您的插件。

API文档

请参阅https://github.com/obsidianmd/obsidian-api



