---
uid: 2023080322212868
title: Obsidian 插件：【Readme】Link indexer
tags: ['链接处理', 'obsidian插件', 'readme']
description: 根据各种条件生成带有链接的索引注释。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Link indexer

> [!Note] 插件名片
> - 插件名称：Link indexer
> - 插件作者：Yuliya Bagriy
> - 插件说明：根据各种条件生成带有链接的索引注释。
> - 插件分类：['链接处理', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/aviskase/obsidian-link-indexer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-link-indexer)

## 概述

根据各种条件生成带有链接的索引注释。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aviskase/obsidian-link-indexer/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-link-indexer]] 插件的自述翻译


# obsidian-link-indexer

这个插件适用于[Obsidian](https://obsidian.md/)，根据不同的条件生成带有链接的索引笔记。

[在这里阅读更改日志](https://github.com/aviskase/obsidian-link-indexer/releases/latest)。

警告：我自己不再使用这个插件了 ¯\\\_(ツ)_/¯

## 使用方法

插件为每种索引注释类型添加了命令和设置。

您可以拥有尽可能多的设置预设，例如，一个用于所有数据的链接报告，另一个仅用于不存在的文件。

要配置插件，请转到插件设置并添加所需配置的预设。之后，您将在调色板中看到一个名为“Link indexer: Used links - {预设名称}”的新命令。

### 使用的链接

Vault中有：

- 带有链接B和C的笔记A
- 带有链接C的笔记B
- 带有链接到B和不存在的笔记X的笔记C

命令将创建一个索引笔记（在设置中检查路径），其内容如下：

```plaintext
2 [[B]]
2 [[C]]
1 [[X]]
```

#### 输出选项

**包括嵌入**计算`![[file]]`和`[[file]]`链接。当禁用时，只计算`[[file]]`链接。

**仅限不存在的文件**。当启用时，上面的示例将生成一个只有`1 [[X]]`的注释。

**严格换行**对应于相同的编辑器设置：“关闭”=一个换行符，“打开”=两个换行符。

打开：

```
2 [[B]]

2 [[C]]

1 [[X]]
```

关闭：

```
2 [[B]]
2 [[C]]
1 [[X]]
```

**链接到文件**。当打开时，输出文件将使用文件的维基链接。如果不想在图表中添加垃圾，请禁用此选项。

打开：

```
2 [[B]]
2 [[C]]
1 [[X]]
```

关闭：

```
2 B
2 C
1 X
```

**排除文件链接**和**排除到文件链接**允许在索引过程中跳过文件。两者都接受正则表达式模式。如果需要多个排除项，请将它们添加到单独的行中。排除仅针对现有文件和不带路径的文件名进行检查。

例如，如果将排除*from*设置为`B`，则插件将不会计算此文件中的任何链接，输出将为：

```
2 [[B]]
1 [[C]]
1 [[X]]
```

如果将排除*to*设置为`B`，则会忽略对此文件的任何链接，输出将为：

```
2 [[C]]
1 [[X]]
```

如果同时将排除*from*和*to*都设置为`B`，则输出将为：

```
1 [[C]]
1 [[X]]
```

**排除路径链接**和**排除到路径链接**与文件名排除类似，但接受通配符模式。详细信息请参阅[picomatch文档](https://www.npmjs.com/package/picomatch#globbing-features)。当您想要排除某些目录时很有用，例如，排除目录*Dailies*中的所有内容是`Dailies/**/*`。

## 兼容性
v0.0.1是针对Obsidian v0.9.12开发的，但它可能在早期版本（v0.9.7+）中也能正常工作。

下一个版本将继续支持v0.9.12+。



