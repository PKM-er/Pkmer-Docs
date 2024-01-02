---
uid: 2023120719350331
title: Obsidian 插件：【Readme】Link Headers Directly
tags: ['obsidian插件', 'readme']
description: 当一个标题被链接时，预览模式只会显示标题，而不是笔记名称。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Link Headers Directly

> [!Note] 插件名片
> - 插件名称：Link Headers Directly
> - 插件作者：Signynt
> - 插件说明：当一个标题被链接时，预览模式只会显示标题，而不是笔记名称。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Signynt/link-headers-directly)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-headers-directly)

## 概述

当一个标题被链接时，预览模式只会显示标题，而不是笔记名称。

![Link Headers Directly](https://cdn.pkmer.cn/covers/link-headers-directly.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Signynt/link-headers-directly/master/README.md)
>

---

## Readme(翻译）

下面是 [[link-headers-directly]] 插件的自述翻译

直接链接标题

当标题被链接时，预览模式将只显示标题，而不显示笔记名称。

你有一个名为 Trees.md 的笔记：

桦树是一种薄叶的落叶硬木树，属于桦木属。

橡树

橡树属于榉科的一种树木或灌木。

如果你在另一个笔记中链接到标题为“## 桦树”的部分，就像这样：

```
我最喜欢的树之一是[[Trees#Birch]]，因为它让我想起了春天。
```

在预览模式下，它将显示为：

> 我最喜欢的树之一是**Trees > 桦树**，因为它让我想起了春天。

![没有插件](https://cdn.pkmer.cn/covers/link-headers-directly_1_0.gif)

这在大多数句子中看起来不自然，并且使得不得不在许多链接到标题的地方更改预览文本变得繁琐。启用此插件后，在预览模式下，文本将显示为：

> 我最喜欢的树之一是**桦树**，因为它让我想起了春天。

![有插件](https://cdn.pkmer.cn/covers/link-headers-directly_1_1.gif)
