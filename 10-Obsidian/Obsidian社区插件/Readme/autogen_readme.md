---
uid: 2024022117263457
title: Obsidian 插件：【Readme】Autogen
tags: ['obsidian插件', 'readme']
description: 在笔记中根据提示自动生成内容
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Autogen

> [!Note] 插件名片
> - 插件名称：Autogen
> - 插件作者：Aidan Tilgner
> - 插件说明：在笔记中根据提示自动生成内容
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/AidanTilgner/AutogenObsidianPlugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?autogen)

## 概述

在笔记中根据提示自动生成内容

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/AidanTilgner/AutogenObsidianPlugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[autogen]] 插件的自述翻译

【机翻】

# 黑曜石自动生成插件

Autogen 插件允许您在笔记中使用 OpenAI 的模型创建就地生成。

# 设置

在插件设置中定义您的 API 密钥，以及用于文本生成的模型。由于其低成本和非常快速的完成速度，`gpt-3.5-turbo` 插件是默认选择。然而，为了在略慢的推理速度下获得更高的准确性，我建议使用 GPT-4。每个模型还提供 32k 变体，并允许使用更大的标记大小。要了解有关标记和具体信息的更多信息，我建议阅读 [OpenAI论坛](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them) 上的相关内容。您还可以更改 `Trigger Regex`，这将决定应查找和匹配哪些文本作为要替换的选择。

您还可以修改 `Window Size`，这与所选模型的标记限制不同但相关。`Window Size` 设置定义了应发送到模型的字符数，不包括触发提示（例如：@[prompt is here]）。对于大多数笔记，这可能并不重要，但对于较长的笔记，重要的是确保不要发送太多标记，因为这可能会导致错误。此设置默认为 8k，每次生成将发送大约 2k 标记，从文本的上方和下方发送。这应该足以向模型发送基本上下文，但可以在较小的模型上增加到约 16k，在较大的模型上增加到约 128k。

> [!warning]
> 发送到服务器的标记数量将影响您支付的 API 使用费用。

如果您不理解这些含义，或者希望保持简单，我建议**坚持使用默认设置**。

# 用法

当您在笔记中工作时，您可以使用以下语法（@[prompt]）来触发生成：

![autogen-plugin-demo](https://cdn.pkmer.cn/covers/autogen_1_0.gif!pkmer)

这里发生的主要事情是使用@[prompt] 语法来触发替换。替换**可以是 markdown**，并将相应显示。因此，您可以用于：

- 表格
- 虚拟文本
- 摘要
- 阐述
- 转换笔记中的其他文本

# 时间轴

如果有要求，可以添加额外的功能，但是想法是保持功能相对简单。

# Bugs, Questions, Etc

如果您有任何问题或注意到任何意外行为，请随时打开一个问题，我会尽快回复。
