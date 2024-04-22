---
uid: 2024042221311659
title: Obsidian 插件：【Readme】Multilingual
tags: ['obsidian插件', 'readme']
description: 简化跨多种语言链接笔记的过程，通过自动将笔记名称的翻译添加到别名中。专为多语言用户设计。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Multilingual

> [!Note] 插件名片
> - 插件名称：Multilingual
> - 插件作者：leolazou
> - 插件说明：简化跨多种语言链接笔记的过程，通过自动将笔记名称的翻译添加到别名中。专为多语言用户设计。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/leolazou/obsidian-multilingual)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?multilingual)

## 概述

简化跨多种语言链接笔记的过程，通过自动将笔记名称的翻译添加到别名中。专为多语言用户设计。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/leolazou/obsidian-multilingual/master/README.md)

---

## Readme(翻译）

下面是 [[multilingual]] 插件的自述翻译

<h1 align=center>Obsidian 多语言</h1>
<p align=center>
    简化 强大的多语言用户链接功能。
    该插件会自动将笔记名称翻译成多种语言，并允许您轻松地在您使用的所有语言之间链接您的笔记。
</p>

## 这个想法 🔮

许多 Obsidian 用户在日常生活中使用多种语言，但他们的思维在各种语言之间都有联系。我们的目标是简化 Obsidian 的令人惊叹的链接逻辑，以满足多语言用户的需求，让他们更轻松地在当前笔记语言中链接笔记和想法。虽然 Obsidian 提供了别名来满足这一需求，但为每个创建的笔记手动编写别名是令人沮丧的。当一个插件可以为您完成这项工作时，为什么还要费这个劲呢？

## 特点 🪄

- 👍 将音符名称翻译成所需的语言。翻译将添加到别名中，这样您可以在所有使用的语言中链接您的音符。
- 👍 创建新音符或重命名现有音符时自动翻译名称。
- 🛠️ 您可以指定一个文件夹、正则表达式和日期格式，以便从自动翻译中忽略。YYYY-MM-DD 永远不会自动翻译。
- 💡 该插件利用 Obsidian 的别名功能，因此即使插件被卸载，所有链接仍然保持功能性。

**目前存在的限制：**

- 🤷‍♂️ 当音符重命名时不会删除旧的别名（只会添加新的翻译）。这主要是因为在 Obsidian 中，即使手动更改音符别名，实际上其他音符中的链接并不会改变。

## 用法 ✍️

1. 直接从 Obsidian 安装并启用 Obsidian Multilingual：设置 → 社区插件 → 浏览
2. 进入设置 → 多语言 设置中的插件设置
3. 列出您在 Obsidian 中用于写作的语言
4. 为您选择的翻译服务创建一个 API 密钥，并将其粘贴到指定的字段中。如何链接如下。
5. 使用缎带图标、命令或右键单击菜单来翻译笔记名称。
6. 或者只需注意到在创建和重命名笔记时自动添加的翻译（默认为“自动翻译”）。
7. （高级）您可以指定一个文件夹、正则表达式和日期格式，以便在自动翻译中忽略。YYYY-MM-DD 永远不会自动翻译。

（创建 API 密钥是必需的，没有它插件将无法工作。）

## 翻译服务 🙊🙉

您可以选择以下服务：

- [Google Cloud Translation](https://cloud.google.com/translate/docs/overview)（即：Google 翻译）
- [DeepL](https://www.deepl.com/whydeepl)

两者每月免费使用量为 500,000 个字符，通常比您在使用此插件时所需的要高得多，即使在 Obsidian 大量使用的情况下也是如此。

<details>
    <summary>示例</summary>
    如果您将笔记命名为英文，并将笔记名称翻译成其他2种语言，您每月需要创建大约10,000个笔记才能达到免费限制。听起来像是一个挑战吗？
</details>

#### 快速比较

|                            | Google Cloud Translation                                                                                                                                                                                 | DeepL                                                                                                                                                                                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 优势（依我看）             | 更多语言，出色的翻译                                                                                                                                                                                     | 更准确和自然的翻译，更容易设置                                                                                                                                                                                                                                                |
| 支持的语言                | ~134 [(列表)](https://cloud.google.com/translate/docs/languages)                                                                                                                                         | ~33 [(列表)](https://www.deepl.com/docs-api/translate-text/translate-text)                                                                                                                                                                                                     |
| 免费使用限制              | 每月 500,000 个字符                                                                                                                                                                                      | 每月 500,000 个字符                                                                                                                                                                                                                                                            |
| 是否需要信用卡？          | 是。<br>（但您可以设置为 $0 的消费限制）                                                                                                                                                                  | 是，仅用于身份验证<br>（以避免滥用免费使用）                                                                                                                                                                                                                                   |
| 设置的简易程度            | 较难                                                                                                                                                                                                   | 简单                                                                                                                                                                                                                                                                           |
| 如何获取 API 密钥         | - [文档](https://cloud.google.com/translate/docs)<br>- [Gemini 的逐步指南](https://g.co/gemini/share/d40e80c4a071)<br>- [有用的视频](https://youtu.be/WTt3UuiDAf4?si=eJRnRxSJq0P3bUTO) | - [文档](https://support.deepl.com/hc/en-us/articles/360020695820-API-Key-for-DeepL-s-API)<br>- [ChatGPT 的逐步指南](https://chat.openai.com/share/4b51b21b-98e9-4915-ab73-28117e37960d)<br>- [有用的视频](https://youtu.be/WTt3UuiDAf4?si=eJRnRxSJq0P3bUTO) |

## 隐私与法律 🕵️

用户将使用此插件手动和自动翻译的文本（注意名称）将被发送到 Google / DeepL 进行翻译。请参考：

- Google Cloud Translation:
[数据使用常见问题解答](https://cloud.google.com/translate/data-usage)
& [隐私声明](https://cloud.google.com/terms/cloud-privacy-notice)
- DeepL: [隐私政策](https://www.deepl.com/en/privacy)，特别是关于 DeepL API 免费的第 12 节。

Obsidian Multilingual 与上述任何翻译服务官方无关。

## 灵感 💭

虽然没有直接复制粘贴代码，但我从以下项目中学到了很多，以使其正常工作：

- [Obsidian Translate](https://github.com/Fevol/obsidian-translate/tree/main)
- [Obsidian Link with alias](https://github.com/pvojtechovsky/obsidian-link-with-alias)

## 咖啡 ☕️

...或者 [几个羊角面包 🥐](https://ko-fi.com/leolazou)，但基本上是同一个链接。
