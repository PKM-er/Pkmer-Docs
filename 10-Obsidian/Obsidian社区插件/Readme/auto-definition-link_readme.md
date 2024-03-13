---
uid: 2024031219295195
title: Obsidian 插件：【Readme】Auto Definition Link
tags: ['obsidian插件', 'readme']
description: Automatically converts text to definition links within the current folder when you type them.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Auto Definition Link

> [!Note] 插件名片
> - 插件名称：Auto Definition Link
> - 插件作者：Nolan Carpenter
> - 插件说明：Automatically converts text to definition links within the current folder when you type them.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nmcarp99/obsidian-auto-definition-link)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-definition-link)

## 概述

Automatically converts text to definition links within the current folder when you type them.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nmcarp99/Obsidian-Auto-Definition-Link/main/README.md)

---

## Readme(翻译）

下面是 [[auto-definition-link]] 插件的自述翻译

【机翻】

# 自动定义链接

这是一个为 Obsidian 设计的插件，可以自动创建到您的存储库中的块的链接。

## 特点

- **建议模式**：可选地，此插件将显示要创建链接的建议。按 Enter 键或单击建议以使用它。 **（默认情况下已禁用）**
- **自动链接模式**：可选地，此插件将在按下空格键（或其他有效的中断器）后自动将块 id 转换为链接。

## 用法

一旦插件安装并启用，您可以通过以下方式访问其功能：

1. 通过编写一段文本，然后使用 `^[your id here]` 添加一个块 id 来创建一个定义。（这是原生块功能）

![使用胡萝卜符号定义一个带有 id 的块](https://cdn.pkmer.cn/covers/auto-definition-link_2_0.png!pkmer)

1. 对于**自动链接模式**，写入块 id，然后按下 `空格` 键或添加标点符号。

![自动链接模式之前](https://cdn.pkmer.cn/covers/auto-definition-link_2_1.png!pkmer)

![Alt text](https://cdn.pkmer.cn/covers/auto-definition-link_2_2.png!pkmer)

*请注意，您可以通过按下 `SHIFT+空格` 而不是只按下 `空格` 来忽略**自动链接模式**中的建议*

1. 对于**建议模式**，写入块 id，然后选择一个建议或按下 `ENTER` 键。

![在建议模式中选择一个选项](https://cdn.pkmer.cn/covers/auto-definition-link_2_3.png!pkmer)

**请注意**，大小写、复数形式以及破折号与空格**并不重要**。在这些示例中，“id”的复数形式、大小写以及破折号与空格的使用方式并不统一或与块 id 相匹配。这个插件会处理这些差异。

在两种模式中，文本将被替换为指向该块的链接，**保留您的复数形式、大小写和破折号与空格**。

该插件仅扫描与当前文档相同文件夹中的 markdown 文件，因此您将无法访问当前文件夹之外的定义。

插件设置中可以独立启用/禁用两种模式。

## 贡献

欢迎贡献！如果您有任何想法、建议或错误报告，请在 [GitHub存储库](https://github.com/nmcarp99/Obsidian-Auto-Definition-Link) 上打开一个问题或提交拉取请求。

## 许可证

该项目在 [MIT许可证](LICENSE) 下许可。
