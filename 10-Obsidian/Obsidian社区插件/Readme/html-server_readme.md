---
uid: 20230803212541
title: Obsidian 插件：【Readme】Html Server
tags: ['obsidian插件', 'readme']
description: 这个插件允许您启动一个本地的HTTP服务器，通过Web浏览器访问您的保险库。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Html Server

> [!Note] 插件名片
> - 插件名称：Html Server
> - 插件作者：Pr0dt0s
> - 插件说明：这个插件允许您启动一个本地的HTTP服务器，通过Web浏览器访问您的保险库。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Pr0dt0s/obsidian-html-server)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?html-server)

## 概述

这个插件允许您启动一个本地的HTTP服务器，通过Web浏览器访问您的保险库。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Pr0dt0s/obsidian-html-server/master/README.md)
> 

---

## Readme(翻译）

下面是 [[html-server]] 插件的自述翻译



# Obsidian HTML 服务器

该插件允许您将您的 Obsidian 保险库作为一个 HTTP 服务器进行服务，同时保持您的主题，并确保您的图像和文件链接正常工作。

## 使用方法

只需启用插件，启动服务器，并在 `http://localhost:8080/A_MARKDOWN_FILE` 打开一个网页浏览器，即可查看与在 Obsidian 中打开时相同的文档。

## 注意事项

- 此插件旨在在本地网络中共享您的保险库。
- 服务器是只读的，意味着没有人可以更改您的保险库中的文件。
- 在浏览器中将提供Obsidian中可见的所有主题和自定义设置。
- 交互性尚未实现。

## 提示

- 要在本地机器上访问服务器，可以使用`localhost`。但是，对于网络中的其他设备，您需要使用您的IP地址。
- 创建一个带有链接到其他文件的markdown文件，并将其用作索引页面（默认页面），您可以在设置中进行设置。
- 如果启动服务器时出现错误，可能是因为端口已经被占用。在这种情况下，只需将端口更改为另一个数字。
- 您可以使用[ngrok](https://ngrok.com/)来与您本地网络之外的人共享您的保险库。

## 问题/请求

如果您遇到任何问题或想要请求新功能，请在[此处](https://github.com/Pr0dt0s/obsidian-html-server/issues/new)提交。



