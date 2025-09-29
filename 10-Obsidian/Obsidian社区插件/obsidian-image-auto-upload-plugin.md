---
uid: 2024052909191469
title: Obsidian 插件：Image auto upload Plugin
tags: ['第三方工具集成', '图片与PDF', 'obsidian插件']
description: 这个插件可以使用PicGo从剪贴板上传图片。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000022
---

# Obsidian 插件：Image auto upload Plugin

## 概述

Obsidian Image Auto Upload Plugin 是一个可以通过 PicGo 自动上传图片的插件。它支持粘贴图片时自动上传，可以通过命令上传所有本地图片文件，也可以将网络图片下载到本地。此外，还支持右键菜单上传图片和拖放上传。用户可以通过设置来控制是否上传图片，并且支持 PicGo-Core。该插件解决了在 Obsidian 中快速、方便地处理图片上传的问题，适用于需要频繁处理图片的用户。

> 插件名片
> - 插件名称：Image auto upload Plugin
> - 插件作者：renmu123
> - 插件说明：这个插件可以使用 PicGo 从剪贴板上传图片。
> - 插件分类：[' 第三方工具集成 ', ' 图片与 PDF', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/renmu123/obsidian-image-auto-upload-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-image-auto-upload-plugin)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/renmu123/obsidian-image-auto-upload-plugin/master/README.md)



这是一个支持 PicGo、PicList、PicGo-Core 上传图片到图床的工具 更新插件后记得重启一下 Obsidian

**注：未在 Mac 进行过测试**


## 开始

1. 安装 PicGo 工具，并进行配置，配置参考[官网](https://github.com/Molunerfinn/PicGo)
2. 开启 PicGo 的 Server 服务，并记住端口号
3. 安装插件
4. 打开插件配置项，设置为`http://127.0.0.1:{{PicGo设置的端口号}}/upload`（例如：`http://127.0.0.1:36677/upload`）
5. 接下来试试看能否上传成功

### 设置图床和配置名

如果你使用的是 PicList(version >= 2.5.3)，你可以通过 url 参数设置图床和配置名。 例如：`http://127.0.0.1:36677/upload?picbed=smms&configName=piclist` 这将会上传图片到 `smms` 图床，并且使用配置名为`piclist`的图床设置。 使用这个功能，你可以在不同的 Obsidian vault 中上传到不同的图床。

## 特性

### 剪切板上传

支持黏贴剪切板的图片的时候直接上传，目前支持复制系统内图像直接上传。

支持 ".png", ".jpg", ".jpeg", ".bmp", ".gif", ".svg", ".tiff", ".webp", ".avif"

该功能在 PicGo 2.3.0-beta7 版本中无法使用，请更换其他版本

支持通过设置 `frontmatter` 来控制单个文件的上传，默认值为 `true`，控制关闭请将该值设置为 `false`，**实时预览模式下需修改值为复选框**

```yaml
image-auto-upload: true
```

### 批量上传一个文件中的所有图像文件

输入 `ctrl+P` 呼出面板，输入 `upload all images`，点击回车，就会自动开始上传。

路径解析优先级，会依次按照优先级查找：

1. 绝对路径，指基于库的绝对路径
2. 相对路径，以./或../开头
3. 尽可能简短的形式

### 批量下载网络图片到本地

输入 `ctrl+P` 呼出面板，输入 `download all images`，点击回车，就会自动开始下载。只在 win 进行过测试

### 支持右键菜单上传图片

~~只支持使用标准 md 语法下的基于当前笔记的相对路径。~~

目前已支持标准 md 以及 wiki 格式。支持相对路径以及绝对路径，需要进行正确设置，不然会引发奇怪的问题

### 支持拖拽上传

仅在使用 picGo 或 picList 客户端时生效

### 支持 Picgo-Core

目前已经全功能支持

~~目前只支持粘贴时上传图片~~

### 支持 server 远程模式

你可以将 [PicList](https://github.com/Kuingsmile/PicList/releases) 或 [PicList-Core](https://github.com/Kuingsmile/PicList-Core) 部署在服务器上并启用 server 模式来实现图片上传

[PicList](https://github.com/Kuingsmile/PicList/releases) 2.6.3 及以上 或 [PicList-Core](https://github.com/Kuingsmile/PicList-Core)1.3.0 以上版本支持

在该模式下不支持上传网络图片选项 如果粘贴时上传图片失败，你也可以尝试启用该模式

## 安装

[官方文档：全局安装](https://picgo.github.io/PicGo-Core-Doc/zh/guide/getting-started.html#%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85)

### PicGo-Core 配置

[官方文档：配置](https://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html#%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)

### 插件配置

`Default uploader` 选择 `PicGo-Core` 设置路径，默认为空，使用环境变量 也可以设置自定义路径

## 常见问题

### MacOs 下无法长传

参考 [#160](https://github.com/renmu123/obsidian-image-auto-upload-plugin/issues/160), [#20](https://github.com/renmu123/obsidian-image-auto-upload-plugin/issues/20)
