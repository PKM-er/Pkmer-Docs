---
uid: 2023080322192598
title: Obsidian 插件：【Readme】GPT-LiteInquirer
tags: ['obsidian插件', 'readme']
description: 在Obsidian中直接体验OpenAI ChatGPT的帮助，无需打断您的创作流程即可起草内容。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：GPT-LiteInquirer

> [!Note] 插件名片
> - 插件名称：GPT-LiteInquirer
> - 插件作者：ittuann
> - 插件说明：在Obsidian中直接体验OpenAI ChatGPT的帮助，无需打断您的创作流程即可起草内容。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ittuann/obsidian-gpt-liteinquirer-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gpt-liteinquirer)

## 概述

在Obsidian中直接体验OpenAI ChatGPT的帮助，无需打断您的创作流程即可起草内容。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ittuann/obsidian-gpt-liteinquirer-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[gpt-liteinquirer]] 插件的自述翻译


# Obsidian的GPT-LiteInquirer插件

<div align="center">

[![CI][ci-image]][ci-url]
[![Code Scanning][code-scanning-image]][code-scanning-url]
[![TAG][tag-image]][tag-url]
[![Downloads][downloads-image]][downloads-url]

[ci-image]: https://img.shields.io/github/actions/workflow/status/ittuann/obsidian-gpt-liteinquirer-plugin/CI.yml?branch=master&label=构建状态&logo=github&style=for-the-badge
[ci-url]: https://github.com/ittuann/obsidian-gpt-liteinquirer-plugin
[code-scanning-image]: https://img.shields.io/github/actions/workflow/status/ittuann/obsidian-gpt-liteinquirer-plugin/CodeQL.yml?branch=master&label=代码扫描&logo=github&style=for-the-badge
[code-scanning-url]: https://github.com/ittuann/obsidian-gpt-liteinquirer-plugin
[tag-image]: https://img.shields.io/github/v/release/ittuann/obsidian-gpt-liteinquirer-plugin?branch=master&label=发布标签&logo=github&style=for-the-badge
[tag-url]: https://github.com/ittuann/obsidian-gpt-liteinquirer-plugin/releases/latest
[downloads-image]: https://img.shields.io/github/downloads/ittuann/obsidian-gpt-liteinquirer-plugin/total?logo=github&style=for-the-badge
[downloads-url]: https://github.com/ittuann/obsidian-gpt-liteinquirer-plugin/releases/latest

</div>

<div align="right">
语言：
:gb: 英文</a> · 

</div>

通过使用GPT-LiteInquirer插件，您可以在不离开Obsidian的情况下快速而毫无意义地生成想法、起草内容或从ChatGPT AI获得帮助，而不会中断您的创造流程。

轻量级ChatGPT插件是一个快速、易于使用且不侵入的AI助手插件，它将OpenAI的ChatGPT API直接集成到Obsidian中。

如果您喜欢这个插件或想要表达支持，请考虑在GitHub上给它一个免费的星星~

**在Obsidian中自动安装和查看此插件：[点击这里](https://obsidian.md/plugins?id=gpt-liteinquirer)**

**手动下载：[点击这里](https://github.com/ittuann/obsidian-gpt-liteinquirer-plugin/releases/latest)**。您只需要手动下载`main.js`、`styles.css`和`manifest.json`，并将它们放入`.obsidian\plugins\gpt-liteinquirer`文件夹中。

## ✨ 特点

-   **与Obsidian无缝集成：**

    -   在Obsidian中直接访问轻量级的ChatGPT，享受便利。
    -   您不再需要担心离开Obsidian切换软件会打断您的创作过程。

-   **用户友好的界面：**

    -   通过直观简洁的设计界面与ChatGPT API进行交互。

-   **多种使用方式：**

    -   您可以将当前文档快速输入为ChatGPT的知识库，并询问任何内容的任何问题。
    -   您还可以直接与ChatGPT开始对话，快速起草和丰富您的内容，生成新的想法，或使用ChatGPT人工智能来做任何您想做的事情。

-   **灵活的响应处理：**
    -   将AI生成的响应复制到剪贴板。或者，直接将其插入到当前文档的光标位置或文档末尾。

## 🧩 配置

首先，您**必须**在插件设置中设置自己的OpenAI API密钥，以便插件能够正常工作。

1. 在官方网站上生成一个OpenAI API密钥。[点击这里](https://beta.openai.com/account/api-keys)
2. 在Obsidian中，进入`设置`，点击左侧菜单中的`社区插件`，并在已安装插件中启用`GPT-LiteInquirer`。
3. 点击齿轮图标进入插件设置。然后在`OpenAI API密钥`字段中输入您的API密钥，然后完成！🎉

下载Obsidian：[点击这里](https://www.obsidian.md/)

## 📝 使用方法

您可以通过以下三种方式打开轻量级ChatGPT插件界面：

- 通过点击左侧的Obsidian菜单栏。
- 通过Obsidian命令“打开轻量级窗口”。
- 通过手动设置一个键盘快捷键，比如“CTRL + K”，来执行该命令。

当打开GPT Lite Inquirer窗口时，当前Markdown文档中选择的内容将自动复制到文本框中。因此，您可以使用这段文本来提问或执行其他操作，或直接写下您想说的任何内容。

提示：您也可以使用“CTRL + ENTER”快捷键直接发送内容。

---

待办事项列表：

- [x] 添加配置默认提示
- [x] 添加对自建API的支持
- [ ] 添加对GPT-4的支持
- [ ] 添加对Azure API的支持

Obsidian的GPT-LiteInquirer插件希望成为您提高创造力和生产力的好伴侣。立即体验Obsidian中无缝的AI增强写作和内容生成功能！



