---
uid: 20230703163653
title: Obsidian 插件：Pandoc 万能格式导出插件
tags: [插件, Pandoc, 格式导出]
description: 为 Obsidian 增加将笔记导出各种文件格式的能力例如 DOCX、ePub 和 PDF。此插件不能独立运行，需要配合 Pandoc 额外程序才可以。
author: cuman
type: basic
draft: false
editable: false
modified: 20230703164552
---

# Obsidian 插件：Pandoc 万能格式导出插件

> [!Note] 插件名片
> - 插件名称：Obsidian Pandoc
> - 插件作者：Oliver Balfour
> - 插件说明：为 Obsidian 增加将笔记导出各种文件格式的能力例如 DOCX、ePub 和 PDF。此插件不能独立运行，需要配合 Pandoc 额外程序才可以。
> - 插件分类：第三方工具集成, 转换工具, PDF
> - 插件项目地址：[点我访问](https://github.com/OliverBalfour/obsidian-pandoc)

## 概述

![image.png](https://cdn.pkmer.cn/images/202307031645381.png!pkmer)

如果你需要将文档从一种格式转换成另一种格式，那么 Pandoc 是你的一把瑞士军刀，Pandoc 可以将下列格式文档进行相互转换。

Markdown、Microsoft Word、OpenOffice/LibreOffice、Jupyter notebook、HTML、EPUB、roff man、LaTeX、甚至是 PDF。唯一不便的是，pandoc 是通过命令行的方式运作的。

要正确配置 Pandoc Plugin 插件，分为两个步骤：安装 Pandoc 软件和配置 Pandoc Plugin 插件。

## 安装

可以在 pandoc 的 [官网 ](https://pandoc.org/installing.html) 进行下载。

推荐 [镜像网站](https://softmall.net/apps/1617) 下载，国内速度快。

下载后安装后的效果如下：

![image.png](https://cdn.pkmer.cn/images/202307031642210.png!pkmer)

## 配置

### Pandoc path

Pandoc 软件的安装路径**非常重要**

在文件管理器中复制得到的安装路径为：C:\Program Files\Pandoc，此时还要在后面加上“pandoc.exe"，即安装路径为：C:\Program Files\Pandoc\pandoc.exe

![image.png](https://cdn.pkmer.cn/images/202307031643068.png!pkmer)

### Export folder

文件导出路径也要设置，这个没有多少注意的地方，只要有就可以了。

![image.png](https://cdn.pkmer.cn/images/202307031643738.png!pkmer)

### 测试导出文件

输入 Ctrl+P，调出命令面板，输入**doc**，选择导出为.doc 文件。

![image.png](https://cdn.pkmer.cn/images/202307031643262.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/202307031643046.png!pkmer)

## 扩展阅读

如果 pandoc 导出时遇到图片显示问题 推荐 [[pandoc 插件导出 word 格式 正确识别本地图片]]