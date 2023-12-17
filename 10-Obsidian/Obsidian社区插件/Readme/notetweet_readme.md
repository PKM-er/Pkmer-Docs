---
uid: 2023120719372544
title: Obsidian 插件：【Readme】NoteTweet
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: 从Obsidian发布推文。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】NoteTweet

> [!Note] 插件名片
> - 插件名称：NoteTweet
> - 插件作者：Christian B. B. Houmann
> - 插件说明：从 Obsidian 发布推文。
> - 插件分类：[' 第三方工具集成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/chhoumann/notetweet_obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notetweet)

## 概述

从 Obsidian 发布推文。

![NoteTweet](https://cdn.pkmer.cn/covers/notetweet_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/chhoumann/notetweet_obsidian/master/README.md)
>

---

## Readme(翻译）

下面是 [[notetweet]] 插件的自述翻译

## NoteTweet🐦 for Obsidian

这个插件允许你直接从 Obsidian 发布推文。

[![Release](https://img.shields.io/github/v/release/chhoumann/notetweet_obsidian?style=for-the-badge)]()

[![Github All Releases](https://img.shields.io/github/downloads/chhoumann/notetweet_obsidian/total.svg?style=for-the-badge&logo=appveyor)]()

### 特点

- 发布选定文本的推文
- 从文件中发布线程
- 自动为您的推文添加标签（以便跟踪您发布的内容）
- **安全模式** - 加密您的 API 密钥，只能通过密码访问。
- 删除刚刚发布的推文/线程（撤销）
- 推文模式 - 专门用于撰写推文和线程的模态窗口。
- 支持图片 - 只需在文本中包含 `[[link]]` 即可！
- 定时发布推文 - 参考 [此指南](./GuideToSettingUpScheduler.md) 进行设置。

欢迎推荐功能！

![8jE9wvKuls](https://cdn.pkmer.cn/covers/notetweet_1_2.gif)

如何使用

### 安装

此插件已添加到 Obsidian 的社区插件浏览器中。您可以从那里获取它。

如果您想观看有关如何设置此插件的视频，请点击 [这里](https://www.youtube.com/watch?v=jx09b1Ien3Q)。

#### 手动安装

*请注意，这些步骤已经不再必要。您可以从社区插件浏览器中获取插件。只需从那里安装并跳转到设置即可。*

1. 前往 [Releases](https://github.com/chhoumann/notetweet_obsidian/releases) 并下载最新版本的 ZIP 文件。
2. 将该 ZIP 文件解压缩到 Obsidian 插件文件夹中。如果您不知道该文件夹的位置，可以在 Obsidian 中进入“Community Plugins”。在“已安装插件”右侧有一个文件夹图标。点击它即可打开您的插件文件夹。
3. 将 ZIP 文件的内容解压缩到该文件夹中。
4. 继续进行设置。

#### 设置

1. 打开<https://apps.twitter.com/app/new 并创建一个新的应用程序。确保它是读取 + 写入的（否则无法发推文）。>
2. 获取您的 API 密钥和密钥以及访问令牌和密钥。
3. 将它们粘贴到插件设置中。

您将看到一个指示器，告诉您是否已连接。

## 发推模式

使用“发推”命令，将会打开一个新的模态窗口。在那里，您可以编写线程或单个推文。

您可以在使用命令之前选择文本或线程，并且它会自动将其转移到模态窗口中。如果所选文本超过 280 个字符，它将为您拆分成一个线程。

您可以将文本粘贴到模态窗口中。如果该文本超过 280 个字符，它也会将其拆分成多个推文。

### 发推快捷键

- `Backspace` 删除空的推文
- `Enter` 如果达到最大长度则发布新的推文
- `Alt + Enter` 发布新的推文
- `Ctrl + Enter` 在下方插入一条推文
- `Shift + Enter` 在上方插入一条新的推文
- `Ctrl + ArrowUp` 聚焦到上方的推文
- `Ctrl + ArrowDown` 聚焦到下方的推文
- `Ctrl + Shift + ArrowUp` 将推文上移
- `Ctrl + Shift + ArrowDown` 将推文下移
- `Ctrl + Shift + Delete` 删除当前聚焦的推文

## 快速发布帖子

单个推文很简单。只需选择一些文本，然后使用“将所选内容发布为推文”命令。

**线程**有特定的格式。首先，它只能检测到任何文件中的第一个线程。

格式：

```
THREAD START

在这里，您可以输入您的线程中的第一条推文。

间距没关系。

---
使用换行和三个破折号进行推文之间的分隔-就像您在上面看到的那样。

---
享受吧！

THREAD END
```

线程必须以 `THREAD START` 开头，并以 `THREAD END` 结尾。

安排推文

请按照 [此指南](./GuideToSettingUpScheduler.md) 进行操作。
