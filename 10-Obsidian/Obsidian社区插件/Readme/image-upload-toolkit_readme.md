---
uid: 20230803204143
title: Obsidian 插件：【Readme】Image Upload Toolkit
tags: ['obsidian插件', 'readme']
description: 一个黑曜石插件，用于将嵌入在Markdown中的本地图片上传到远程存储，并导出Markdown以发布到静态网站。目前，它支持Imgur和Aliyun OSS。
author: Addo Zhang
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Image Upload Toolkit

> [!Note] 插件名片
> - 插件名称：Image Upload Toolkit
> - 插件作者：Addo Zhang
> - 插件说明：一个黑曜石插件，用于将嵌入在Markdown中的本地图片上传到远程存储，并导出Markdown以发布到静态网站。目前，它支持Imgur和Aliyun OSS。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/addozhang/obsidian-image-upload-toolkit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?image-upload-toolkit)

## 概述

一个黑曜石插件，用于将嵌入在Markdown中的本地图片上传到远程存储，并导出Markdown以发布到静态网站。目前，它支持Imgur和Aliyun OSS。

![Image Upload Toolkit](https://cdn.pkmer.cn/covers/image-upload-toolkit_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/addozhang/obsidian-image-upload-toolkit/main/README.md)
> 

---

## Readme(翻译）

下面是 [[image-upload-toolkit]] 插件的自述翻译


# Obsidian 图片上传工具包

该插件可以将所有嵌入在 Markdown 中的本地图片上传到指定的远程图片存储库（目前支持 [imgur](https://imgur.com) 和 [阿里云 OSS](https://www.alibabacloud.com/product/object-storage-service)），并直接将带有图片链接的 Markdown 导出到剪贴板。原始的 Markdown 文件仍然使用本地图片。

这对于发布到静态网站（如 [GitHub Pages](https://pages.github.com)）非常有帮助。

该插件的灵感来自于我多年来一直在使用的强大的 Markdown 编辑器 [MWeb Pro](https://www.mweb.im)。

在插件开发过程中，我还参考了插件 [obsidian-imgur-plugin](https://github.com/gavvvr/obsidian-imgur-plugin)（**其中的 imgur 上传代码来自该插件**）和 [obsidian-image-auto-upload-plugin](https://github.com/renmu123/obsidian-image-auto-upload-plugin)。感谢它们提供了如此出色的插件。

该插件现在已经列在 [Obsidian 社区插件](https://obsidian.md/plugins?id=image-upload-toolkit)中。

使用方法

打开命令行并输入"publish page"，它将上传所有本地图片到远程存储，并将替换了图片语法的markdown复制到剪贴板，并显示通知。

![screenshot](https://github.com/addozhang/obsidian-image-upload-toolkit/assets/2224492/e190f65e-4f19-44e7-af40-a3f9f13e0e1d)

## 待办事项

- [ ] 支持将图片上传到更多的存储空间
  - [x] 阿里云OSS
  - [ ] 亚马逊S3
- [x] 设置以直接替换原始Markdown中嵌入的图片

## 贡献

要对此插件进行更改，请先确保已安装所需的依赖项。

```
npm install
```

### 开发

要启动带有启用模式的插件构建，请运行以下命令：

```
npm run dev
```

_注意：如果您尚未安装热重载插件，系统将提示您安装。在开始热重载之前，您需要在Obsidian Vault中启用该插件。您可能需要刷新插件列表才能看到它。_

### 发布

要开始一个发布构建，请运行以下命令：

```
npm run build
```

## 感谢

* [obsidian-imgur-plugin](https://github.com/gavvvr/obsidian-imgur-plugin)
（**参考其中的imgur上传代码**）
* [obsidian-image-auto-upload-plugin](https://github.com/renmu123/obsidian-image-auto-upload-plugin)
* [create-obsidian-plugin](https://www.npmjs.com/package/create-obsidian-plugin)



