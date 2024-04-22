---
uid: 2024042221320233
title: Obsidian 插件：【Readme】Hugo Publish
tags: ['obsidian插件', 'readme']
description: 将您的博客发布到hugo网站。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Hugo Publish

> [!Note] 插件名片
> - 插件名称：Hugo Publish
> - 插件作者：kirito
> - 插件说明：将您的博客发布到 hugo 网站。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/kirito41dd/obsidian-hugo-publish)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hugo-publish)

## 概述

将您的博客发布到 hugo 网站。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kirito41dd/obsidian-hugo-publish/master/README.md)

---

## Readme(翻译）

下面是 [[hugo-publish]] 插件的自述翻译

# Hugo 发布

这个插件帮助你通过 Obsidian 发布 Hugo 博客。

## 特点

此插件将把 Obsidian 中的 `.md` 文件和相关图片转换为 Hugo 网站目录。

转换包括：

- `[[link.com]]` -> `[link.com](link.com)`
- `[[xxx.png]]` -> `![xxx.png](/${static_dir}/xx.png)`
- 自动写入 md 文件的 yaml 头部，如：标题、日期、最后修改日期

## 如何使用

1. 完成插件设置：`blog_tag`，`hugo_site`...
2. 在 Obsidian 的 md 文件中设置 `${blog_tag}` 作为 `tags`
3. 点击 `hugo sync` 按钮或运行命令 `Hugo Publish: Sync blog`
4. 进入 Hugo 站点目录运行 `hugo server` 来检查它。



