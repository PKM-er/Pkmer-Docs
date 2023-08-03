---
uid: 2023080322293122
title: Obsidian 插件：Whisper
tags: ['obsidian插件', 'readme']
description: 使用OpenAI Whisper进行语音转文本。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Whisper

> [!Note] 插件名片
> - 插件名称：Whisper
> - 插件作者：Nik Danilov
> - 插件说明：使用 OpenAI Whisper 进行语音转文本。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nikdanilov/whisper-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?whisper)

## 概述

使用 OpenAI Whisper 进行语音转文本。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nikdanilov/whisper-obsidian-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[whisper]] 插件的自述翻译

使用 OpenAI Whisper 在 Obsidian 中进行语音转文本🗣️📝

Obsidian Whisper 是一个插件，可以轻松将您的语音转换为书面笔记。只需说出您的想法，让 OpenAI 的 [Whisper](https://openai.com/research/whisper) 来完成剩下的工作！

## 🚀 开始使用

1. 可以在 Obsidian 的 "Community Plugins" 中安装此插件。
2. 要使此插件正常工作，您需要提供您的 OpenAI API 密钥。有关更多信息，请参阅此 README 文件的 " 设置 " 部分。

## 🎯 如何使用

点击功能区按钮打开录制控制界面。

### 录制音频

使用“开始”按钮开始录制。您可以使用“暂停/恢复”按钮暂停和恢复录制。完成后，单击“停止”按钮。停止录制后，插件将自动转录音频并在指定文件夹中创建一个包含转录内容和链接音频文件的新笔记。

> 您可以使用 `Alt + Q` 快捷键快速开始或停止录制。

### 上传现有音频文件

您还可以转录现有的音频文件：

- 使用 `Ctrl/Cmd + P` 打开命令面板。
- 搜索 " 上传音频文件 " 并选择它。
- 将出现一个文件对话框。选择要转录的音频文件。
- 插件将转录所选文件，并在指定的文件夹中创建一个包含内容和链接音频文件的新笔记。

### 用于快速操作的命令面板

" 开始/停止录制 " 和 " 上传音频文件 " 操作也可以通过命令面板快速访问。

> 要进一步了解如何使用此插件，请查看 [TfT Hacker](https://twitter.com/tfthacker) 的文章 ["在Obsidian中使用OpenAI Whisper服务进行语音转文本"](https://tfthacker.medium.com/speech-to-text-in-obsidian-using-openai-whisper-service-7b2843bf8d64)。

## ⚙️ 设置

- API 密钥：输入您的 OpenAI API 密钥以解锁 Whisper API 的高级转录功能。您可以从 OpenAI 的 [链接](https://platform.openai.com/overview) 获取密钥。如果您对 API 密钥的概念不熟悉，您可以在此 [链接](https://tfthacker.medium.com/how-to-get-your-own-api-key-for-using-openai-chatgpt-in-obsidian-41b7dd71f8d3) 了解更多信息。
- API URL：指定用于向 Whisper API 发送请求的端点。除非您有特定的原因要使用不同的端点，否则不应更改此选项。
- 模型：选择用于生成文本转录的机器学习模型。除非您有特定的原因要使用不同的模型，否则不应更改此选项。
- 语言：指定要传递的消息的语言。有关语言和代码的列表，请参阅此 [链接](https://github.com/openai/whisper/blob/main/whisper/tokenizer.py)。
- 保存录音：切换此选项以在将其发送到 Whisper API 后保存音频文件。启用后，您可以指定音频文件应保存在保险库中的路径。
- 录音文件夹：指定在保险库中保存音频文件的路径。示例：`folder/audio`。仅当启用“保存录音”选项时才可用。
- 保存转录：切换此选项以为每个录音创建一个新文件，或者关闭它以在光标处添加转录。启用后，您可以指定转录应保存在保险库中的路径。
- 转录文件夹：指定在保险库中保存转录文件的路径。示例：`folder/note`。仅当启用“保存转录”选项时才可用。

## 🤝 贡献

我们欢迎并感谢社区的贡献、问题报告和功能请求！请随时访问 [Issues](https://github.com/nikdanilov/whisper-obsidian-plugin/issues) 页面分享您的想法和建议。

## 💬 Whisper API

- 有关使用 Whisper API 的限制和定价等其他信息，请查看 [OpenAI Whisper FAQ](https://help.openai.com/en/articles/7031512-whisper-api-faq)
- 要了解 Whisper API 的高级概述，请查看 [OpenAI](https://openai.com/research/whisper) 提供的信息

## ⚒️ 手动安装

如果您想手动安装此插件，请按照以下步骤进行操作：

1. 从 [GitHub 仓库](https://github.com/nikdanilov/whisper-obsidian-plugin/releases) 下载 `manifest.json`、`main.js` 和 `styles.css` 文件，并将它们放入 Obsidian 存储库中的 `plugins/whisper` 文件夹中。
2. 在 `设置 > 社区插件` 中点击 `重新加载插件` 按钮。
3. 找到 "Whisper" 插件并启用它。
4. 在插件设置中包含您的 OpenAI API 密钥。

## 🤩说声谢谢

你觉得这个插件有价值吗？太棒了！你可以通过在这里给我买杯咖啡来支持我的编码工作并表达你的感激之情 [here](https://ko-fi.com/nikdanilov)。

帮助其他人发现 Obsidian Whisper 插件的魔力！如果你能在 Twitter、Reddit 或你喜欢的社交媒体平台上分享你的经验，我会非常高兴！

你可以在 Twitter 上找到我 [@nikdanilov\_](https://twitter.com/nikdanilov_)。

[<img style="float:left" src="https://user-images.githubusercontent.com/14358394/115450238-f39e8100-a21b-11eb-89d0-fa4b82cdbce8.png" width="200">](https://ko-fi.com/nikdanilov)

---



