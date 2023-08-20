---
uid: 2023080322201052
title: Obsidian 插件：【Readme】Image auto upload Plugin
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: 这个插件可以使用PicGo从剪贴板上传图片。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Image auto upload Plugin

> [!Note] 插件名片
> - 插件名称：Image auto upload Plugin
> - 插件作者：renmu123
> - 插件说明：这个插件可以使用 PicGo 从剪贴板上传图片。
> - 插件分类：[' 第三方工具集成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/renmu123/obsidian-image-auto-upload-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-image-auto-upload-plugin)

## 概述

这个插件可以使用 PicGo 从剪贴板上传图片。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/renmu123/obsidian-image-auto-upload-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-image-auto-upload-plugin]] 插件的自述翻译

[Chinese Documentation](readme-zh.md)

# Obsidian 图片自动上传插件

该插件可以帮助您通过 [picgo](https://github.com/Molunerfinn/PicGo) 或 [PicGo-Core](https://picgo.github.io/PicGo-Core-Doc/) 自动上传图片。

**更新插件后，您应该重新启动 Obsidian。**

# 开始

1. 安装 [picgo](https://github.com/Molunerfinn/PicGo) 并进行配置
2. 打开工具并打开设置 " 设置 server"
3. 在 Obsidian 中安装插件
4. 打开插件设置，并设置 "picGo server" 为 <http://127.0.0.1:{{picgo 中的端口}}/upload（例如：http://127.0.0.1:36677/upload）>
5. 尝试粘贴图片

# 特点

## 粘贴图片时自动上传

当您将图片粘贴到 Obsidian 中时，此插件将自动上传您的图片。

您可以在 `frontmatter` 中设置 `image-auto-upload: false` 来控制单个文件。

支持的图片格式有 ".png"、".jpg"、".jpeg"、".bmp"、".gif"、".svg"、".tiff"。

由于 PicGo 2.3.0-beta7 中的 [错误](https://github.com/renmu123/obsidian-image-auto-upload-plugin/issues/2)，您无法使用此功能。您可以安装其他版本的 PicGo。

```yaml
---
image-auto-upload: true
---
```

## 通过命令上传所有本地图片文件

按下 `ctrl+P` 并输入 `upload all images`，然后按回车键，将自动上传所有本地图片。

下载所有互联网内容到本地

按下 `ctrl+P` 并输入 `download all images`，然后按回车，将自动下载所有互联网图片到本地，仅在 win10 上测试过。

现在您可以在编辑模式下通过上下文菜单上传图片。

支持拖放功能

## 支持 picgo-core

您可以使用 npm 安装 picgo-core。请参考 [文档](https://picgo.github.io/PicGo-Core-Doc/)。

# TODO

- [x] 通过命令上传所有本地图片文件
- [x] 支持使用 yaml 配置上传图片
- [x] 支持 picgo-core
- [x] 支持从系统剪贴板中选择图片上传
- [x] 支持网络图片

# 谢谢

[obsidian-imgur-plugin](https://github.com/gavvvr/obsidian-imgur-plugin)
