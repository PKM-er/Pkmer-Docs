---
uid: 20231220115812
title: Obsidian 插件：【Readme】Persistent Links
tags: ['obsidian插件', 'readme']
description: 在将块和标题在文件之间移动时，自动修复内部链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Persistent Links

> [!Note] 插件名片
> - 插件名称：Persistent Links
> - 插件作者：Ivan Lednev
> - 插件说明：在将块和标题在文件之间移动时，自动修复内部链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/ivan-lednev/obsidian-persistent-links)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?persistent-links)

## 概述

在将块和标题在文件之间移动时，自动修复内部链接。

![Persistent Links](https://cdn.pkmer.cn/covers/persistent-links.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ivan-lednev/obsidian-persistent-links/master/README.md)

---

## Readme(翻译）

下面是 [[persistent-links]] 插件的自述翻译

# 持久链接

## 目的

假设您有一个文件，其中包含指向其标题或块的反向链接。通常，如果您移动这些链接到的标题和块，链接将会断开。该插件尝试自动更新此类链接。

如何使用它

启用插件后，当您剪切和粘贴标题和块时，它将自动更新链接。这是一个演示：![](https://cdn.pkmer.cn/covers/persistent-links_2_0.gif)

如果文件以其他方式进行了更新，并且您注意到了一些损坏的链接，您可以使用“修复文件中的链接”命令来修复它们。插件将搜索元数据缓存，并尝试找到包含链接中的块或标题的文件。

## 限制

- 部分依赖于内部的 Obsidian API，因此可能会出现故障。如果您注意到了这一点，请创建一个问题。
- 仅在剪切和粘贴事件中自动工作
- 仅适用于 Wiki 链接

如果您希望插件支持其他工作流，请随时创建一个问题：<<https://github.com/ivan-lednev/obsidian-persistent-links/issues>。>

## 贡献

如果你发现了一个 bug 或者有一些改进插件的想法，欢迎创建一个 issue：<<https://github.com/ivan-lednev/obsidian-persistent-links/issues>。>

同时也欢迎提交 pull 请求！如果你想要贡献但不知道从何开始，你可以创建一个 issue 或者给我发邮件：bishop1860@gmail.com。

你也可以通过给我买杯咖啡来支持我：
