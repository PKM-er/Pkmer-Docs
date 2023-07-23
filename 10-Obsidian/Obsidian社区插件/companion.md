---
uid: 20230614210107
title: Obsidian 插件：Companion 通过AI自动补全内容
tags: [AI,人工智能]
description: 通过chatGPT根据上下文自动自动补全内容
author: windilycloud
type: basic
draft: false
editable: false
modified: 20230614215020
---

# Obsidian 插件：Companion 通过 AI 自动补全内容

> [!Note] 插件名片
> - 插件名称：companion
> - 插件版本：1.3.5
> - 插件作者：rizerphe
> - 插件描述：通过 chatGPT 根据上下文自动自动补全内容
> - 插件项目地址：[rizerphe/obsidian-companion](https://github.com/rizerphe/obsidian-companion)

## 概述

![Obsidian_nn7JxjA0MD.gif](https://cdn.pkmer.cn/images/Obsidian_nn7JxjA0MD.gif!pkmer)

companion 插件是一个通过 chatGPT 进行 自动补全的 Obsidian 插件。它利用 AI 模型 chatGPT 来根据上下文自动生成内容，帮助用户快速完成写作和笔记。使用 companion 插件，用户可以在编辑器中输入 文字，并通过 AI 模型生成相关的补充内容。这个插件能够提供即时的建议、提示和扩展，帮助用户更高效地写作和整理思路。

使用 companion 插件很简单 ，只需按照以下步骤进行操作：

1. 在 Obsidian 中打开设置面板。
2. 点击左侧导航栏中的“插件”选项。
3. 在插件列表中搜索并找到“companion ”插件。
4. 点击“安装”按钮进行插件安装。
5. 安装完成后，点击“启用”按钮启用插件。
6. 填入 OpenAI 的 Key
7. 在设置界面第一项默认启动自动补全功能，这也可以通过 `ctrl + p` 命令选择是开还是关

一旦你完成了设置，只要你在任何笔记中输入文字， companion 插件就会根据上下文自动补全内容。它会即时提供建议、提示和扩展，以阴影文字的形式呈现。你可以按默认的 `tab` 接受建议，也可以完全不管继续写作，它仅仅是在你写作卡顿时提供一些建议。

## 设置

![image.png](https://cdn.pkmer.cn/images/202306142150146.png!pkmer)

companion 插件支持非常丰富的自定义选项， 包括但不限于：

1. **AI 模型选择：** companion 插件支持使用不同的 AI 模型进行自动补全。你可以在设置面板中选择你喜欢的 AI 模型，比如 chatGPT、GPT3、AI21-Jurassic-2[^1] 、goose.ai[^2] 等。根据自己的需求选择合适的模型。
2. **自动补全触发方式：** companion 插件可以根据不同的触发方式来自动补全内容。你可以选择在按下特定的快捷键后触发。同时一次性接受一个单词，一个句子，一行，整个补全，在设置面板中都可以设置。
3. **补全内容的深度和长度：** companion 插件允许你自定义补全内容的深度和长度。
4. **启用/禁用自动补全功能：** companion 插件允许 你在设置界面中可以启用或禁用自动补全功能。这可以通过设置界面中的选项来完成，也可以通过命令面板输入命令调整。
5. 自定义 Prompt：Prompt 用来定制个性化的补全，这会影响到 AI 生成的内容。自定义带来了更多的可能性。
6. 复用设置：可以将一套完整的配置保存，在需要的时候通过命令面板调用。这在不同场景下快速切换自动补全非常有用。

## 总结

这是一款类似于微软开发的 copliot 代码自动补全的插件，这种交互形式我个人非常喜欢，在你专心构思时不会打扰你，当你停顿时能给出建议。经过实测，在我写作过程中会频繁触发自动补全，短短 10 分钟触发了大概 150 次左右，这对目前来说的 GPT 价格来说并不友好，所以**尽量设置比较短的建议和提示**。最后，该自动补全插件并不会将全文当作 prompt，应该仅仅是局部上下文当作 prompt，所以触发次数多，但不费 token，日常使用也完全可接受。

[^1]:Jurassic-2 是由 AI21 Labs 公司开发的生成语言模型，在 2023 年 5 月 1 日开放给大众使用。官方指出，无论是在结果多样性还是意义保存方面，AI21 Labs 都优于 OpenAI。

[^2]: goose.ai 是一款完全托管通过 API 提供自然语言处理（NLP） 作为服务的工具，完全和 OpenAI 的 API 兼容，比 OpenAI 的要便宜许多，选择上也更丰富。