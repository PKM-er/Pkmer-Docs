---
uid: 2024042221331096
title: Obsidian 插件：【Readme】Sticky Headings
tags: ['obsidian插件', 'readme']
description: 粘性标题和显示标题级别
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Sticky Headings

> [!Note] 插件名片
> - 插件名称：Sticky Headings
> - 插件作者：Shen Shen
> - 插件说明：粘性标题和显示标题级别
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/imshenshen/obsidian-sticky-heading)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sticky-heading)

## 概述

粘性标题和显示标题级别

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/imshenshen/obsidian-sticky-heading/main/README.md)

---

## Readme(翻译）

下面是 [[sticky-heading]] 插件的自述翻译

【机翻】

# 黑曜石粘性标题插件

![CleanShot 2024-01-22 at 21 45 12@2x](https://cdn.pkmer.cn/covers/sticky-heading_1_0.png!pkmer)

<https://github.com/imshenshen/obsidian-sticky-heading/assets/19701958/12f8e9c6-f0f7-4066-b0f2-fd89e3775f15>

## 配置

当使用不同的主题时，粘性标题的空间是不同的，因此您需要安装 [Style Settings插件](https://github.com/mgmeyers/obsidian-style-settings)，该插件允许您在粘性时配置顶部空间。

![](https://cdn.pkmer.cn/covers/sticky-heading_1_1.png!pkmer)

## 已知问题

### 粘性标题消失

出于性能原因，Obsidian 将删除在视口之外的元素。当您在一个标题级别下有很长的内容时，滚动会导致这个粘性标题消失。

### 外观和感觉

当标题是粘性的时候，我们可能会改变它的外观，但这会导致额外的计算和性能消耗。

为了性能和简单起见，我们保留了它的原始样式。

### 不适用于阅读模式

这个插件主要旨在解决以下问题：在零散的时间里写作时，我经常忘记当前所处的标题级别，或者下一个标题应该使用哪个级别。

如果在阅读模式下有很大的需求，我们会考虑实现它。欢迎提交拉取请求。

## 发布新版本

- 使用您的新版本号（例如 `1.0.1`）更新您的 `manifest.json`，并指定最新版本所需的最低 Obsidian 版本。
- 在您的 `versions.json` 文件中更新 `"new-plugin-version": "minimum-obsidian-version"`，这样旧版本的 Obsidian 可以下载与其兼容的插件旧版本。
- 使用您的新版本号作为“标签版本”创建新的 GitHub 发布。使用确切的版本号，不要包含前缀 `v`。请参考此处的示例：<https://github.com/obsidianmd/obsidian-sample-plugin/releases>
- 将 `manifest.json`、`main.js`、`styles.css` 文件作为二进制附件上传。注意：`manifest.json` 文件必须放在两个位置，首先是您的存储库的根路径，然后是发布中。
- 发布发布。

> 您可以在手动更新 `manifest.json` 中的 `minAppVersion` 后运行 `npm version patch`、`npm version minor` 或 `npm version major` 来简化版本升级过程。
> 该命令将在 `manifest.json` 和 `package.json` 中提升版本，并将新版本的条目添加到 `versions.json` 中。