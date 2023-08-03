---
uid: 2023080322210565
title: Obsidian 插件：【Readme】Kindle Export
tags: ['obsidian插件', 'readme']
description: 将您的笔记导出到您的Kindle，包括嵌入式笔记和图像。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Kindle Export

> [!Note] 插件名片
> - 插件名称：Kindle Export
> - 插件作者：Simeon Stanek
> - 插件说明：将您的笔记导出到您的Kindle，包括嵌入式笔记和图像。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/SimeonLukas/obsidian-kindle-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-kindle-export)

## 概述

将您的笔记导出到您的Kindle，包括嵌入式笔记和图像。

![Kindle Export](https://cdn.pkmer.cn/covers/obsidian-kindle-export.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/SimeonLukas/obsidian-kindle-export/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-kindle-export]] 插件的自述翻译


# 项目2：obsidian-kindle-export

一个Obsidian插件，可以将你的笔记发送到你的Kindle/PocketBook设备上，以.epub文件的形式。

### 无纸化工作
![](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fstaneks.de%2Fapps%2Fmd2mobi%2Fcounter&cacheSeconds=3) ![GitHub manifest version (path)](https://img.shields.io/github/manifest-json/v/SimeonLukas/obsidian-kindle-export/main?label=版本)
![](https://github.com/SimeonLukas/obsidian-kindle-export/raw/main/files/screenrecord.gif)

![](https://github.com/SimeonLukas/obsidian-kindle-export/raw/main/files/ebook.jpg)

我之前使用Calibre和Pandoc-Export插件，但我想知道是否有一种简便的方法可以通过一个命令导出你的.md文件并添加所有嵌入的文件，这样你就不需要使用.pdf文件了。该插件创建了一个*Kindle: Export*命令，它将所有嵌入的图片和.md文件发送到一个PHP后端（[Host your own private PHP Backend!](https://github.com/SimeonLukas/Obsidian2Kindle)），该后端将其转换为.epub文件并通过电子邮件发送到你的Kindle/PocketBook。如果你没有自己托管，你将向我的服务器发送私人数据。请注意这一点。我不会保存或读取你的数据！

### 待办事项：
- [x] 导出图片
- [x] 导出嵌入的.md文件
- [x] 导出嵌入的.mp3文件（Pocketbook）
- [x] 书籍的Obsidian封面 --> 由于.epub格式的原因，封面不会显示在书架上
- [x] 目录
- [x] ```<div style="page-break-after: always;"></div>``` 正常工作
- [x] ```%%Excludes%%``` 不可见
- [x] 外部链接
- [x] 外部嵌入的图片
- [x] 排除元数据
- [x] 成为一个社区插件 🎉
- [x] 为其他嵌入文件创建解决方法
- [x] 添加==高亮==
- [x] .epub导出
- [x] 脚注
- [ ] 文件夹封面或文件封面
- [ ] .html导出（存档）
- [ ] .pdf导出（对IOS和Android来说会很好）

### 额外功能（不需要Kindle数据）
- [x] .md导出 _(合并下来)_
     - [x] 音频导出
     - [x] 视频导出
     - [x] 定义自己的导出路径

### 尝试一下！
要嵌入本地图片，请使用以下格式：
``` ![[image.jpg]] ```

填写您的Kindle/PocketBook和电子邮件地址的数据。
在您的Kindle/PocketBook上阅读您的笔记。

**Mergedown：**
将所有嵌入的图片和.md文件合并到一个.md文件中。

如果您在使用插件时遇到问题，请告诉我。



[© Simeon Stanek](https://staneks.de)



