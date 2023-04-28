---
uid: 20230329145808
title: Obsidian 插件：Local image plus
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230428114955
public: yes
---

# Obsidian 插件：Local image plus

## 概述

有时候我们的笔记当中需要援引网络中的图片，但是这些图片会因为网络加载速度，或者是网页失效，导致不可用。这时候就需要用插入本地图片的方式，保持图片可访问性的持久性。但手动完成有些费时，这时候就需要用到 Local image plus 插件。

> [!Note] 插件名片
> - 插件名称：Local image plus
> - 插件作者：Sergei-Korneev
> - 插件说明：日语书写中给对应的汉字生成注音假名
> - 插件项目地址：[点我跳转](https://github.com/Sergei-Korneev/obsidian-local-images-plus)

## 特性

该插件是 Local image 插件的进化版。在笔记中查找指向外部图像的所有链接，在本地下载并保存图像，最后调整笔记中的链接以指向本地图像文件。

## 使用

### 自动方式

- 在插件中打开 `On paste processing`：即在你黏贴网络图片的过程中。

### 手动方式

通过 ctrl+p 命令来使用：有两个选项

- Download images locally：只处理你选中的笔记中的图像.
- Download images locally for all your notes：根据插件中的设置，\*\* 仓库中所用的图像到本地。

### 设置

- `Media foloder`：指定下载的图片存储路径。
- `Show notification`：完成下载图片存储后弹出提示。
