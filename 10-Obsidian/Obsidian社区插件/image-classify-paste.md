---
uid: 2024052908484917
title: Obsidian 插件：Image Classify Paste
tags: ['编辑工具', '图片与PDF', '文件管理', 'obsidian插件']
description: 像Typora一样粘贴您的图片，图片链接的名称不是![[Paste xxx]]，而是使用相对目录的![some name](relative-directory/xxx.png)。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Image Classify Paste

> [!Note] 插件名片
> - 插件名称：Image Classify Paste
> - 插件作者：tianfx
> - 插件说明：像 Typora 一样粘贴您的图片，图片链接的名称不是 ![[Paste xxx]]，而是使用相对目录的![some name](relative-directory/xxx.png)。
> - 插件分类：[' 编辑工具 ', ' 图片与 PDF', ' 文件管理 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/ostoe/Ob-ImagePastePlugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image-classify-paste)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ostoe/Ob-ImagePastePlugin/master/README.md)

![Image Classify Paste](https://cdn.pkmer.cn/covers/image-classify-paste.gif!pkmer)

## 概述

Obsidian Image ClassifyPaste 插件提供两个主要功能：1. 使用标准的 Markdown 语法粘贴网络图片或本地图片，使文档更兼容，图片将放置在与 Markdown 文档同名的文件夹中；2. 批量转换 Markdown 文档中的多个图片链接为兼容的语法格式。用户可以通过快捷键 `Ctrl + P` 搜索插件命令 `reconstrut-image` 来批量转换图片链接。该插件还会自动创建与 Markdown 文件同名的文件夹，并将多个链接文件移动到该文件夹中。更新后的 Markdown 文件内容将从 `![[Paste Image xxxx1.png]]` 转换为 `![img](MyTest/Paste-Image-xxx.png)` 格式。适用于快速、方便地处理图片链接和提高文档整理效率。

> [!help]
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交 PR 或者文末留言。

---



