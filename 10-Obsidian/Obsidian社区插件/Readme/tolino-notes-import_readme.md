---
uid: 2023080322283722
title: Obsidian 插件：Tolino notes Importer
tags: ['obsidian插件', 'readme']
description: 从Tolino E-Reader导入笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Tolino notes Importer

> [!Note] 插件名片
> - 插件名称：Tolino notes Importer
> - 插件作者：juergenbr
> - 插件说明：从 Tolino E-Reader 导入笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/juergenbr/obsidian-tolino-notes-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tolino-notes-import)

## 概述

从 Tolino E-Reader 导入笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/juergenbr/obsidian-tolino-notes-import/master/README.md)

---

## Readme(翻译）

下面是 [[tolino-notes-import]] 插件的自述翻译

# 从 Tolino 电子阅读器导入笔记的 Obsidian 插件

## 要求

* Tolino 电子阅读器
* USB 数据线

## 特点

* 导入存储在 Tolino 上的所有笔记。同一本书的所有笔记都存储在一个 Obsidian 笔记中
* 支持书签、笔记和文本标记
* 将笔记导入到特定文件夹中
* 为每个导入的笔记添加标签

## 用法

* 通过 USB 电缆将您的 Tolino 连接到 Mac/PC
* 复制挂载的 Tolino 根目录的路径（这是您应该看到一个 notes.txt 文件的地方）。

Mac 示例：/Volumes/tolino，Windows 示例：W:\

* 打开设置并设置
	* Tolino 挂载的本地驱动器
	* 导入新笔记的 Obsidian vault 位置
	* 您想要应用于导入笔记的标签列表
* 打开命令面板并执行**Tolino notes import Plugin: Load Tolino Notes**

## 当前限制

* 仅支持语言设置为德语的 Tolino 设备

## 附加信息

* 在 Mac OS 和 Windows 上进行了测试
