---
uid: 2023080322154451
title: Obsidian 插件：ChatGPT MD
tags: ['obsidian插件', 'readme']
description: 将ChatGPT（几乎）无缝集成到Obsidian中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：ChatGPT MD

> [!Note] 插件名片
> - 插件名称：ChatGPT MD
> - 插件作者：Bram Adams
> - 插件说明：将 ChatGPT（几乎）无缝集成到 Obsidian 中。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/bramses/chatgpt-md)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chatgpt-md)

## 概述

将 ChatGPT（几乎）无缝集成到 Obsidian 中。

![ChatGPT MD](https://cdn.pkmer.cn/covers/chatgpt-md.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/bramses/chatgpt-md/master/README.md)
>

---

## Readme(翻译）

下面是 [[chatgpt-md]] 插件的自述翻译

I'm sorry, but I cannot provide a translation without the source text. Please provide the text you would like me to translate into Chinese.

ChatGPT-MD 是将 ChatGPT 无缝集成到 Obsidian 中的工具。

<https://user-images.githubusercontent.com/3282661/223005882-6632c997-b9a6-445b-800c-77a4b76a6325.mov>

### （YouTube 镜像 - 适用于移动用户 ⬇️）

[![视频缩略图](video-thumbnail.png)](https://youtu.be/CxDlol_DDI8)

## 特点

- 从*任何* MD 笔记中进行聊天
- 创建聊天*模板*以共享和运行类似的场景。查看配套的仓库 [chatgpt-md-templates](https://github.com/bramses/chatgpt-md-templates) 获取一些模板！
- 尽可能*最小化样板代码*，实际上只需要两个！`<hr class="__chatgpt_plugin">` 和 `role::system|assistant|user`
- 使用*frontmatter*更改 ChatGPT API 的变量
- 将字符*实时流式传输*到 Obsidian，创造出实时的感觉
- 使用*常规 Markdown*。这意味着 ChatGPT 生成的所有内容，从*列表*到*代码块*，都会被渲染！
- 从*高亮文本*创建聊天。
- [*从消息中推断标题*](https://github.com/bramses/chatgpt-md/discussions/11)。可以设置在>4 条消息后自动运行。
- 在光标位置或文件末尾进行流式传输。可以在设置中进行设置。
- 选择 [角色的标题级别](https://github.com/bramses/chatgpt-md/pull/22) h1-h6。可以在设置中进行设置。
- 可以使用前置元数据中的 url 参数指定自定义端点。有关示例，请参阅常见问题解答。
- 使用命令停止正在运行的流。请参阅下面的命令部分。
- （新！）可以在“推断标题”中选择九种语言。可以在设置中进行设置。
- （新！）ChatGPT 注释块。允许您留下草稿笔记、反向链接...或任何其他内容！有关详细信息，请参阅下面的命令。

### 命令

#### 聊天

主要命令！解析文件并调用 ChatGPT。建议将其添加到热键中以便于使用。

创建带有突出显示文本的新聊天

获取当前突出显示的文本和默认的正文，并在“聊天文件夹”中创建一个新的聊天文件

#### 从模板创建新的聊天

从 `Chat Template Folder` 中指定的模板创建一个新的聊天文件。记得查看 [chatgpt-md-templates](https://github.com/bramses/chatgpt-md-templates) 获取一些模板！

#### 推断标题

[从对话中推断出标题](https://github.com/bramses/chatgpt-md/discussions/11)。至少需要 2 条消息。可以在设置中设置，在收到超过 4 条消息后自动运行。

#### 添加注释块

在编辑器中添加一个注释块，ChatGPT 不会对其进行处理。可以用于留下草稿笔记、反向链接或其他任何内容！

注释以 `=begin-chatgpt-md-comment` 开始，以 `=end-chatgpt-md-comment` 结束。

![Screenshot 2023-04-03 16-47-05](https://user-images.githubusercontent.com/3282661/229628591-eda70076-9e03-44e3-98b5-16be73f39957.png)

![Screenshot 2023-04-03 16-59-26](https://user-images.githubusercontent.com/3282661/229628629-2fc9ec19-7cce-4754-9c09-11f2364395e5.png)

#### 清除聊天记录

删除所有消息，但保留前言信息。

停止流媒体（在移动设备上无效）

停止流媒体。如果您不喜欢 ChatGPT 的发展方向/对话时间过长，这将非常有用。

#### 添加分割线

添加一个 ChatGPT MD 水平分割线和 `role::user`。

**!! 注意：插件需要同时包含 `role::system|assistant|user` 和 `<hr class="__chatgpt_plugin">` 才能正常工作!!**

安装

### 社区插件

前往社区插件并搜索 `ChatGPT MD`

### 本地

1. 将此存储库克隆到您的 Vault 中的 `plugins` 目录中
2. 运行 `npm i` 和 `npm run build`

### 两者都

1. 将您的 OpenAI API 密钥插入设置中
2. 设置“聊天文件夹”和“聊天模板文件夹”
3. 为“聊天”添加一个热键（我使用的是“alt-[”）

常见问题解答

为了解决这个问题，首先尝试增加你的 `max_tokens`（默认设置为 300）。你也可以在默认的 frontmatter 设置中永久更新它。请参考下面的图片：

![Screenshot 2023-03-12 16-14-35](https://user-images.githubusercontent.com/3282661/224571118-080ca393-6f94-4a20-ba98-27bc8b8b6ad2.png)

![Screenshot 2023-03-12 16-15-01](https://user-images.githubusercontent.com/3282661/224571119-cba1be45-3ab1-4b86-b056-ba596bacd918.png)

Obsidian 编辑器会自动渲染反引号（见 [问题](https://github.com/bramses/chatgpt-md/issues/15#issuecomment-1466813500)），并触发额外的逻辑，导致流添加额外的反引号。为了解决这个问题，你可以：

1. 在代码块的末尾添加三个反引号（\`\`\`）来关闭代码块，放在 `<hr>` 之前，并删除 Obsidian 自动添加的三个额外反引号。
2. 在 `role::user` 中写入 "keep going"。

请参考下面的图片：

![Screenshot 2023-03-15 18-47-40](https://user-images.githubusercontent.com/3282661/225460844-54101bf2-d5ac-4725-95b5-c79bf6b6ed6a.png)

![Screenshot 2023-03-15 18-48-30](https://user-images.githubusercontent.com/3282661/225460845-6ff12c98-ea74-4ae8-bc2d-4161e89acdda.png)

如果您已经从 [等待列表](https://openai.com/waitlist/gpt-4-api) 中获得了机会，只需在前言中将 `model: gpt-3.5-turbo` 替换为 `model: gpt-4` 即可。（*注意：gpt-4 比 turbo 更慢！*）

### Q: 如何使用自定义的端点？

```md
---
system_commands: ['我创建了一些可以适应 CodePen 或 Replit 的小型自包含应用程序想法']
url: https://localhost
---
```

自定义的 API 必须符合 OpenAI API 规范。例如，您可以在此处使用 Azure 的 OpenAI 托管端点。有关 API 密钥处理，请参考您的提供商。

关于开发者

这个仓库是由布拉姆·亚当斯（Bram Adams）编写的，他是一位驻纽约的作家和程序员。

布拉姆发布了一个每周两次的新闻简报，其中包含一个 Zettelkasten，他还是 OpenAI 的社区开发者大使，并且从事与人工智能/网络开发/增强现实 + 虚拟现实相关的自由职业合同（可供雇佣！）。

布拉姆还是 Stenography 的创作者，它是一个 API 和 VSC 扩展，可以在保存时自动记录代码。他还是 Bramses' Highly Opinionated Vault 的作者，这是一个非常详细的哲学 + 保险库模板，被数百名 Obsidian 用户使用，无论是新用户还是老用户。

您可以在他的网站上了解更多关于他和他的工作的信息。

支持他的工作的最佳方式是在这里订阅他的新闻简报。
