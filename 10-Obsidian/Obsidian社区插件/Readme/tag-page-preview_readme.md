---
uid: 2023120719440385
title: Obsidian 插件：【Readme】Tag Page Preview
tags: ['链接处理', 'obsidian插件', 'readme']
description: 为每个 标签（#Tag），当在笔记中点击时，会弹出包含此标签的一个文件列表。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Tag Page Preview

> [!Note] 插件名片
> - 插件名称：Tag Page Preview
> - 插件作者：aidurber
> - 插件说明：为每个 标签（#Tag），当在笔记中点击时，会弹出包含此标签的一个文件列表。
> - 插件分类：[' 链接处理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aidurber/tag-page-preview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tag-page-preview)

## 概述

为每个 标签（#Tag），当在笔记中点击时，会弹出包含此标签的一个文件列表。

![Tag Page Preview](https://cdn.pkmer.cn/covers/tag-page-preview.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Aidurber/tag-page-preview/master/README.md)
>

---

## Readme(翻译）

下面是 [[tag-page-preview]] 插件的自述翻译

# ⚠️ 注意

我无法找到时间来保持这个存储库的良好维护，并与 Obsidian 保持最新。生活总是会有阻碍。这个插件应该由愿意花时间构建一个 Obsidian 社区应得的插件的人进行分叉/重建。

# 标签页面预览

点击一个标签会打开一个对话框，列出使用该标签的页面。

![](https://cdn.pkmer.cn/covers/tag-page-preview_2_0.jpeg!pkmer)

## 贡献

要对此插件进行更改，请先确保已安装所需的依赖项。

```
yarn install
```

### 开发

要启动带有启用的模式的插件构建，请运行以下命令：

```
yarn dev
```

### 发布

要开始发布构建，请运行以下命令：

```
yarn release
git push --follow-tags origin master
```