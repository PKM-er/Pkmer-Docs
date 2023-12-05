---
uid: 2023120522260970
title: Obsidian 插件：【Readme】Mochi Cards Pro
tags: ['obsidian插件', 'readme']
description: 使用Mochi的专业订阅提供的API，在Mochi.cards上创建闪卡。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Mochi Cards Pro

> [!Note] 插件名片
> - 插件名称：Mochi Cards Pro
> - 插件作者：Hayden Carpenter
> - 插件说明：使用 Mochi 的专业订阅提供的 API，在 Mochi.cards 上创建闪卡。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/xHayden/obsidian-mochi-cards-pro)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mochi-cards-pro)

## 概述

使用 Mochi 的专业订阅提供的 API，在 Mochi.cards 上创建闪卡。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/xHayden/obsidian-mochi-cards-pro/master/README.md)
>

---

## Readme(翻译）

下面是 [[mochi-cards-pro]] 插件的自述翻译

# Mochi Cards Pro

这是一个轻量级的 Obsidian 插件，使用 Mochi 提供的高级 API，让我能够快速创建闪卡。只有在你拥有 Mochi Pro 的情况下，它才能正常工作。

__你必须拥有 Mochi Pro 才能使用此插件，并在插件设置中提供你的 API 密钥__。

唯一能够正常工作的 Mochi 模板必须以以下格式开头：

```
<< Name >> 
<input value="">
```

之后的部分不重要。

要导出一张卡片，请按照以下格式编写：

```
# 卡片名称
卡片内容
```

内容可以是任何东西。Markdown 和 LaTeX 都可以使用。

您可以一次导出多个卡片。例如，

```
什么是Modus Ponens？
如果一个条件语句为真且假设为真，则结论也为真。
$$\begin{array}{c} p \\ p \rightarrow q \\ \hline \therefore q \end{array}$$
什么是二耳听觉？
每只耳朵都是独立的信息通道。只关注其中一个或另一个要容易得多。Broadbent提出了选择性注意力的过滤模型，显示了通道的限制。
![](https://upload.wikimedia.org/wikipedia/commons/2/23/Broadbent_Filter_Model.jpg)
有一个缓冲区，你可以通过思考来回想起在另一只耳朵听到的内容。

要导出，请简单地选择要导出的卡片，使用CMD+P打开命令选择器，然后选择“从文本导出卡片”。按照提示操作。

__要导出卡片，您必须突出显示要导出的卡片。__
## 演示
![演示](https://img.hayden.gg/7dee8e8af29674e3a05273917223354f.gif)



