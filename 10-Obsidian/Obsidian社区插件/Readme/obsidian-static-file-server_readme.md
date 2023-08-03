---
uid: 20230803213248
title: Obsidian 插件：【Readme】Static File Server
tags: ['转换工具', 'obsidian插件', 'readme']
description: 将黑曜石子文件夹作为静态文件服务器托管。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Static File Server

> [!Note] 插件名片
> - 插件名称：Static File Server
> - 插件作者：Elias Sundqvist
> - 插件说明：将黑曜石子文件夹作为静态文件服务器托管。
> - 插件分类：['转换工具', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/elias-sundqvist/obsidian-static-file-server)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-static-file-server)

## 概述

将黑曜石子文件夹作为静态文件服务器托管。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/elias-sundqvist/obsidian-static-file-server/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-static-file-server]] 插件的自述翻译



[![GitHub发布（最新SemVer）](https://img.shields.io/github/v/release/elias-sundqvist/obsidian-static-file-server?style=for-the-badge&sort=semver)](https://github.com/elias-sundqvist/obsidian-static-file-server/releases/latest)
![GitHub所有发布](https://img.shields.io/github/downloads/elias-sundqvist/obsidian-static-file-server/total?style=for-the-badge)
# Obsidian静态文件服务器

这是Obsidian（https://obsidian.md）的一个插件。

它允许您将Obsidian子文件夹作为静态文件服务器进行托管。

**为什么要这样做？**

有很多原因可能会导致这样做

- 在您的vault中嵌入可以离线工作的网站
- 在具有CORS问题的网站中嵌入
- 从其他应用程序访问您的vault文件

## 演示
![](images/static%20file%20server%20demo.gif)

## 入门指南

1. 安装插件
2. 在您的存储库中创建一个文件夹
3. 将一些文件放入文件夹中
4. 打开“静态文件服务器设置”，输入文件夹的名称和端口号。
5. 现在您可以在iframe中显示这些文件
   * 例如，一个名为`example.html`的文件可以通过以下方式访问：
     `<iframe src="http://localhost:1337/example.html"/>`

## 常见问题解答

* [我如何像GIF中那样访问网站？](https://github.com/elias-sundqvist/obsidian-static-file-server/issues/3#issuecomment-857964429)

## 贡献

欢迎贡献。

您可以创建一个[问题](https://github.com/elias-sundqvist/obsidian-static-file-server/issues)来报告错误，提出对该插件的改进建议，提问等。

您可以创建一个[拉取请求](https://github.com/elias-sundqvist/obsidian-static-file-server/pulls)来贡献该插件的开发。

## 更新日志

### 0.0.4（2021-06-08）*小错误修复*

* 希望解决问题＃1。现在在服务器启动之前始终验证端口。

### 0.0.3（2021-05-04）*小修复*

* 修复了lishind在（此社区插件列表PR）[https://github.com/obsidianmd/obsidian-releases/pull/304#issuecomment-846665181]中提到的各种问题。

* 删除错误日志记录（错误消息仍然可以在开发者工具的网络选项卡中找到）。

### 0.0.2 (2021-05-04) *修复了误导性的设置占位符*

* 文件夹路径不应以 `/` 开头。将占位符从 `e.g. /somepath` 更改为 `e.g. FolderName`

### 0.0.1 (2021-05-04) *首次发布*

* 实现了插件的基本功能

## 许可证

[Obsidian静态文件服务器](https://github.com/elias-sundqvist/obsidian-static-file-server)采用GNU AGPLv3许可证。有关更多信息，请参阅[LICENSE](https://github.com/elias-sundqvist/obsidian-static-file-server/blob/master/LICENSE.TXT)。



