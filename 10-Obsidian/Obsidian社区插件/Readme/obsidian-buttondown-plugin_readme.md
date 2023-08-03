---
uid: 2023080322152574
title: Obsidian 插件：【Readme】Buttondown
tags: ['obsidian插件', 'readme']
description: 将您的笔记发送到您的buttondown.email帐户作为电子邮件草稿。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Buttondown

> [!Note] 插件名片
> - 插件名称：Buttondown
> - 插件作者：caro401
> - 插件说明：将您的笔记发送到您的buttondown.email帐户作为电子邮件草稿。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/caro401/obsidian-buttondown)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-buttondown-plugin)

## 概述

将您的笔记发送到您的buttondown.email帐户作为电子邮件草稿。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/caro401/obsidian-buttondown/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-buttondown-plugin]] 插件的自述翻译


# Obsidian Buttondown 插件

[Buttondown](https://buttondown.email) 是一个用于制作电子邮件通讯的工具。它支持使用 Markdown 编写邮件，并提供了 API。

该插件允许您在 [Obsidian](https://obsidian.md) 中编写电子邮件的草稿，然后通过一个简单的命令将它们发送到 Buttondown，以便您可以预览和发送。

## 如何使用

1. 通过Obsidian的社区插件浏览器安装插件。
2. 在Obsidian中启用插件。
3. 在设置中填写您的API令牌。您可以在Buttondown设置中的[此处](https://buttondown.email/settings/programming)找到您的令牌。
4. 在Obsidian笔记中编写一封电子邮件。
5. 从命令面板（Ctrl-P）中调用命令“从此笔记创建新的Buttondown草稿”，以在Buttondown中创建一个新的草稿，其中电子邮件主题是您的笔记文件名，电子邮件正文是您的笔记内容。
6. 在Buttondown的[此处](https://buttondown.email/emails/drafts)查看您的草稿，您可以编辑和预览草稿，然后安排或发送电子邮件给您的列表。

## 支持我

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/U6U7BUEZ6)

如何进行发布

- 如果需要，手动在`manifest.json`中更新`minAppVersion`，然后运行`npm version patch`、`npm version minor`或`npm version major`。
- 创建与该版本匹配的标签`git tag -a 1.0.1 -m "1.0.1" && git push origin 1.0.1`。



