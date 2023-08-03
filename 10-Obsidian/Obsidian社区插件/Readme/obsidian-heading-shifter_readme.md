---
uid: 2023080322193852
title: Obsidian 插件：【Readme】Heading Shifter
tags: ['obsidian插件', 'readme']
description: 轻松调整和更改 Markdown 标题。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Heading Shifter

> [!Note] 插件名片
> - 插件名称：Heading Shifter
> - 插件作者：kasahala
> - 插件说明：轻松调整和更改 Markdown 标题。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/k4a-l/obsidian-heading-shifter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-heading-shifter)

## 概述

轻松调整和更改 Markdown 标题。

![Heading Shifter](https://cdn.pkmer.cn/covers/obsidian-heading-shifter.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/k4a-l/obsidian-heading-shifter/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-heading-shifter]] 插件的自述翻译


# Obsidian标题转换器

![github workflow](https://img.shields.io/github/workflow/status/k4a-dev/obsidian-heading-shifter/jest?style=for-the-badge)
![github release](https://img.shields.io/github/v/release/k4a-dev/obsidian-heading-shifter?style=for-the-badge)
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/kasahala)

轻松转换和更改Markdown标题。

为什么使用这个插件

Obsidian将许多Markdown文件链接在一起形成知识。每天重新整理链接对于创建一个良好的知识库非常重要。

在这个过程中经常出现以下情况。

1. 将文件1的一部分剪切到一个独立的文件2并进行链接。
    - 文件1中的Heading3被更改为文件2中的Heading1
2. 将文件3的内容合并到文件4的一部分中
    - 文件3中的Heading2被更改为文件4中的Heading4

通过使用这个插件，您可以批量更改标题的大小（`#`的数量），而不是手动更改。

如何安装

### 从Obsidian内部

您可以通过以下步骤在Obsidian内部激活此插件：

-   打开设置 > 社区插件
-   确保“限制模式”关闭
-   点击浏览“社区插件”
-   搜索“Heading Shifter”
-   点击“安装” -> “启用”

### 手动安装

从最新版本的发布中下载包含`main.js, manifest.json, styles.css`的目录，并将它们放入`<vault>/.obsidian/plugins/`文件夹中。

## 特点

### 应用标题

![应用标题演示](https://raw.githubusercontent.com/k4a-dev/obsidian-heading-shifter/main/doc/attachment/applyingHeading.gif)

#### 命令

| 命令              | 描述                                | 快捷键 |
| ----------------- | ----------------------------------- | ------ |
| 应用标题 0        | 将当前行更改为无标题。              | -      |
| 应用标题 1~6      | 将当前行更改为标题 1~6。            | -      |

> 分配快捷键，如 `Ctrl + 0 ~ 6`，会很有用。

### 标题移动

![标题移动演示](https://raw.githubusercontent.com/k4a-dev/obsidian-heading-shifter/main/doc/attachment/shiftHeadings.gif)

#### 设置

| 设置项                      | 描述                                                                             | 值(默认值) |
| ---------------------------- | --------------------------------------------------------------------------------------- | -------------- |
| 标题的最小级别       | 标题级别会根据标题级别的偏移而减小                      | 0~6(1)         |
| 启用覆盖标签行为 | 如果为true，则Tab键执行“增加标题级别”，Shift-Tab键执行“减小标题级别”[^2] | 布尔值(false) |

[^2]: 可能与其他插件的行为冲突

#### 命令

| 命令               | 描述                                             | 快捷键 |
| ----------------- | ------------------------------------------------ | ------ |
| 增加标题级别       | 增加所选行的标题级别（带有标题）                 |        |
| 减少标题级别       | 减少所选行的标题级别（带有标题）                 |        |

> 分配快捷键（例如 `Ctrl + Shift + Left/Right`）会很有用。

-   如果所选行包含的标题少于“标题的下限”，则“增加标题级别”无效。
-   如果所选行包含的标题多于标题 6，则“减少标题级别”无效。

### 插入标题

#### 命令

| 命令                                | 描述                                              | 快捷键 |
| ---------------------------------- | ------------------------------------------------- | ------ |
| 在当前级别插入标题                  | 将当前行的标题更改为当前级别                      |        |
| 在更深一级插入标题                  | 将当前行的标题更改为当前级别 + 1                  |        |
| 在更高一级插入标题                  | 将当前行的标题更改为当前级别 - 1                  |        |

## 常见设置

| 设置项           | 描述                                                         | 值（默认值）       |
| --------------- | ------------------------------------------------------------------------- | ----------------- |
| 要移除的样式 | 如果该样式位于行首，则移除该样式并将其设置为标题 | 布尔值（全部为真） |

#### 使用案例

像以下的大纲一样操作标题，

```markdown

这是一个很棒的文件。

第一章 -> 点击“插入更深”

日落在地平线上...

当镇上的居民聚集在市中心广场时...

第二章 -> 点击“插入更高”

当夏季节日即将结束时...
```

如果您想使标题比2级更深或更高，请使用“shift”或“apply”。

目前没有具体的内容。

贡献

请随时报告问题或请求功能。



