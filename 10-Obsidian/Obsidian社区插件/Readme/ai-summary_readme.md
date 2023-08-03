---
uid: 20230803203423
title: Obsidian 插件：【Readme】AI Notes Summary
tags: ['obsidian插件', 'readme']
description: 使用OpenAI生成对参考笔记的摘要。
author: R. Ian Bull (irbull)
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：AI Notes Summary

> [!Note] 插件名片
> - 插件名称：AI Notes Summary
> - 插件作者：R. Ian Bull (irbull)
> - 插件说明：使用OpenAI生成对参考笔记的摘要。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/irbull/obsidian-ai-summary)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-summary)

## 概述

使用OpenAI生成对参考笔记的摘要。

![AI Notes Summary](https://cdn.pkmer.cn/covers/ai-summary.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/irbull/obsidian-ai-summary/main/README.md)
> 

---

## Readme(翻译）

下面是 [[ai-summary]] 插件的自述翻译


# Obsidian AI Summary 插件

<p align="center">
<img src="./ai-summary.png"  width="96">
</p>

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，它使用 [OpenAI's GPT-3](https://openai.com/blog/openai-api/) 来生成你的笔记的摘要。该插件会在当前笔记中查找所有链接到其他笔记的链接。然后，它会生成每个链接笔记的摘要并在对话框中呈现出来。该插件不会更新你现有的笔记，它只会生成一个摘要并在对话框中呈现出来。然后，你可以复制摘要并粘贴到你的笔记中。

可以在笔记的 Front Matter 中指定提示。如果没有指定提示，插件将使用设置中指定的默认提示。

这个插件特别适用于生成你的笔记的每周（和每月）摘要。

## 🚀 安装和设置

要使用此插件，您需要拥有一个OpenAI API密钥。您可以从[OpenAI](https://beta.openai.com/)获取一个密钥。一旦您拥有了密钥，您可以在插件设置中输入它。您还可以在设置中指定默认提示和生成的最大令牌数。

![设置](./images/settings.png)

安装和配置完成后，打开一个带有指向其他笔记的链接的笔记。然后从命令面板中选择`Summarize referenced notes`命令。

Obsidian AI Summary插件可以用来生成您笔记的每周总结。例如，如果您创建了一个名为`2023-W01`的每周笔记，并包含以下内容：

```markdown
---
Prompt: 以第一人称写一个2-3段的本周工作总结。工作完成情况在'# 🚀 Work Completed'部分下方。
---

# 🚀 我在本周做了什么 2023/2023-W01

# 📅 每日笔记

- [[2023-01-02]]
- [[2023-01-03]]
- [[2023-01-04]]
- [[2023-01-05]]
- [[2023-01-06]]

```

您可以使用该插件来总结这些每日笔记。

 ![设置](./images/ai-dialog.png)



