---
uid: 20230803204150
title: Obsidian 插件：【Readme】Inbox
tags: ['obsidian插件', 'readme']
description: 如果“收件箱”笔记中有要处理的数据，则在启动时显示应用程序通知。
author: Zachatoo
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Inbox

> [!Note] 插件名片
> - 插件名称：Inbox
> - 插件作者：Zachatoo
> - 插件说明：如果“收件箱”笔记中有要处理的数据，则在启动时显示应用程序通知。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Zachatoo/obsidian-inbox)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?inbox)

## 概述

如果“收件箱”笔记中有要处理的数据，则在启动时显示应用程序通知。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Zachatoo/obsidian-inbox/main/README.md)
> 

---

## Readme(翻译）

下面是 [[inbox]] 插件的自述翻译


![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22inbox%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)
# Obsidian收件箱

当使用第三方工具快速写入内容到Obsidian vault而无需打开vault时，通常最简单的方法是将其写入“收件箱”笔记以供以后处理。

当启动Obsidian时，此插件将通知您是否有要处理的收件箱笔记中的内容。

## 安装

建议从Obsidian社区商店安装。

您也可以使用[BRAT](https://github.com/TfTHacker/obsidian42-brat) Obsidian插件手动安装。有关该插件的通用安装说明，请参阅该插件的文档。

## 命令

设置[收件箱路径](#inbox-path)和[收件箱基本内容](#inbox-base-contents)，使用活动笔记的路径和内容。此命令的存在是为了更容易设置这些设置。

## 设置

### 收件箱路径

收件箱笔记的路径。

例如，如果您的收件箱笔记位于您的存储库根目录下，且名为"Mobile Inbox"，那么路径将是"Mobile Inbox.md"。

### 比较类型

在决定是否通知时，将收件箱笔记内容与何种内容进行比较。选择“与上次跟踪的内容进行比较”将与 Obsidian 上次关闭时的快照进行比较。“与基础内容进行比较”将与您定义的基础内容进行比较。

### 收件箱基本内容

如果笔记内容完全匹配，则您将不会收到通知。只有在选择“与基本版本比较”作为比较类型时才可用。

例如，如果您的收件箱笔记的“未处理”版本如下所示

```md

# 手机收件箱
```

然后，您应该设置收件箱的基本内容以匹配。这样，只有在标题之外有其他内容时，您才会收到通知。

收件箱通知持续时间

在有数据需要处理时显示通知的持续时间，以秒为单位。将其设置为0表示无限持续时间。清除以使用全局默认通知持续时间。

- 感谢marcusolsson提供的[obsidian-svelte](https://github.com/marcusolsson/obsidian-svelte)，我在创建许多UI元素时使用了它。



