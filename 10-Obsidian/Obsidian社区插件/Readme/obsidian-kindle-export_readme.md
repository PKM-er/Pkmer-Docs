---
uid: 2023120719315926
title: Obsidian 插件：【Readme】Kindle Export
tags: ['obsidian插件', 'readme']
description: 将您的笔记导出到您的Kindle，包括嵌入式笔记和图像。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Kindle Export

> [!Note] 插件名片
> - 插件名称：Kindle Export
> - 插件作者：Simeon Stanek
> - 插件说明：将您的笔记导出到您的 Kindle，包括嵌入式笔记和图像。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/SimeonLukas/obsidian-kindle-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-kindle-export)

## 概述

将您的笔记导出到您的 Kindle，包括嵌入式笔记和图像。

![Kindle Export](https://cdn.pkmer.cn/covers/obsidian-kindle-export.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/SimeonLukas/obsidian-kindle-export/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-kindle-export]] 插件的自述翻译

# 项目 2：obsidian-kindle-export

一个 Obsidian 插件，可以将你的笔记发送到你的 Kindle/PocketBook 设备上，以.epub 文件的形式。

### 无纸化工作

![](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fstaneks.de%2Fapps%2Fmd2mobi%2Fcounter&cacheSeconds=3) ![GitHub manifest version (path)](https://img.shields.io/github/manifest-json/v/SimeonLukas/obsidian-kindle-export/main?label=版本)

![](https://cdn.pkmer.cn/covers/obsidian-kindle-export_1_2.gif!pkmer)

![](https://cdn.pkmer.cn/covers/obsidian-kindle-export_1_3.jpeg!pkmer)

我之前使用 Calibre 和 Pandoc-Export 插件，但我想知道是否有一种简便的方法可以通过一个命令导出你的.md 文件并添加所有嵌入的文件，这样你就不需要使用.pdf 文件了。该插件创建了一个*Kindle: Export*命令，它将所有嵌入的图片和.md 文件发送到一个 PHP 后端（[Host your own private PHP Backend!](https://github.com/SimeonLukas/Obsidian2Kindle)），该后端将其转换为.epub 文件并通过电子邮件发送到你的 Kindle/PocketBook。如果你没有自己托管，你将向我的服务器发送私人数据。请注意这一点。我不会保存或读取你的数据！

### 待办事项

- [x] 导出图片
- [x] 导出嵌入的.md 文件
- [x] 导出嵌入的.mp3 文件（Pocketbook）
- [x] 书籍的 Obsidian 封面 --> 由于.epub 格式的原因，封面不会显示在书架上
- [x] 目录
- [x] ```<div style="page-break-after: always;"></div>``` 正常工作
- [x] ```%%Excludes%%``` 不可见
- [x] 外部链接
- [x] 外部嵌入的图片
- [x] 排除元数据
- [x] 成为一个社区插件 🎉
- [x] 为其他嵌入文件创建解决方法
- [x] 添加==高亮==
- [x] .epub 导出
- [x] 脚注
- [ ] 文件夹封面或文件封面
- [ ] .html 导出（存档）
- [ ] .pdf 导出（对 IOS 和 Android 来说会很好）

### 额外功能（不需要 Kindle 数据）

- [x] .md 导出 *(合并下来)*
     - [x] 音频导出
     - [x] 视频导出
     - [x] 定义自己的导出路径

### 尝试一下

要嵌入本地图片，请使用以下格式：

``` ![[image.jpg]] ```

填写您的 Kindle/PocketBook 和电子邮件地址的数据。

在您的 Kindle/PocketBook 上阅读您的笔记。

**Mergedown：**

将所有嵌入的图片和.md 文件合并到一个.md 文件中。

如果您在使用插件时遇到问题，请告诉我。

[© Simeon Stanek](https://staneks.de)
