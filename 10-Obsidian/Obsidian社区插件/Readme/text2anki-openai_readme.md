---
uid: 2023080322281091
title: Obsidian 插件：【Readme】text2anki-openai
tags: ['obsidian插件', 'readme']
description: 这是一个使用OpenAI从文本生成闪卡并将其添加到Anki的黑曜石插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：text2anki-openai

> [!Note] 插件名片
> - 插件名称：text2anki-openai
> - 插件作者：Mani Batra
> - 插件说明：这是一个使用OpenAI从文本生成闪卡并将其添加到Anki的黑曜石插件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/manibatra/obsidian-text2anki-openai)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?text2anki-openai)

## 概述

这是一个使用OpenAI从文本生成闪卡并将其添加到Anki的黑曜石插件。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/manibatra/obsidian-text2anki-openai/master/README.md)
> 

---

## Readme(翻译）

下面是 [[text2anki-openai]] 插件的自述翻译


# 使用OpenAI的Text2Anki

Obsidian的Flashcard Generator插件使用OpenAI API自动从您的Obsidian笔记中生成闪卡，并将它们推送到本地的Anki应用程序。

## 特点

- 从Obsidian笔记中的项目符号（最佳效果）自动生成闪卡。
- 将生成的闪卡推送到Anki应用程序。
- 为在Anki中生成的闪卡指定自定义牌组名称。
- 配置用于闪卡生成的OpenAI GPT模型。
- 指定用于生成闪卡的自定义用户提示。

## 使用方法

1. 在 Obsidian 中打开一个笔记。
2. 运行“从当前文件生成闪卡”命令。插件将从笔记中提取闪卡并将它们推送到本地运行的 Anki 应用程序。

要为生成的闪卡指定自定义牌组名称，请在笔记开头添加以下格式的一行：

```
Deck: 计算机科学::Python
```

## 设置

您可以在Flashcard Generator插件中配置以下设置：

1. **OpenAI API密钥**：添加您的OpenAI API密钥以启用生成闪卡的功能。
2. **Anki牌组名称**：指定默认的Anki牌组名称，闪卡将被添加到该牌组中。
3. **OpenAI GPT模型名称**：选择用于生成闪卡的OpenAI GPT模型。

## 依赖项

此插件需要以下依赖项：

- Obsidian
- OpenAI (`openai`)
- 在本地运行的 Anki 应用，并已安装 [AnkiConnect](https://ankiweb.net/shared/info/2055492159)

已知问题

如果您遇到任何问题，请在[GitHub问题页面](https://github.com/obsidian-text2anki-openai/issues)上报告。



