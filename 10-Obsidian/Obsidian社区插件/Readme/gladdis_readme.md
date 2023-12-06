---
uid: 2023120522251563
title: Obsidian 插件：【Readme】Gladdis
tags: ['obsidian插件', 'readme']
description: Gladdis（生成语言人工专用和勤奋智能系统）- 这是一个AI聊天机器人。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Gladdis

> [!Note] 插件名片
> - 插件名称：Gladdis
> - 插件作者：Aurélien Stébé
> - 插件说明：Gladdis（生成语言人工专用和勤奋智能系统）- 这是一个 AI 聊天机器人。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/AurelienStebe/Gladdis)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gladdis)

## 概述

Gladdis（生成语言人工专用和勤奋智能系统）- 这是一个 AI 聊天机器人。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/AurelienStebe/Gladdis/main/README.md)
>

---

## Readme(翻译）

下面是 [[gladdis]] 插件的自述翻译

<h3 align="center">Gladdis（生成式语言人工专用和勤奋智能系统）- 这是一个AI聊天机器人。</h3>

<hr/><br/>

<p align="center">
    <a href="https://github.com/prettier/prettier">
        <img alt="代码格式化工具" src="https://badgen.net/badge/code%20format/prettier/ff69b4">
    </a>
    &nbsp;
    <a href="https://github.com/standard/standard">
        <img alt="TypeScript风格" src="https://badgen.net/badge/code%20style/standard/green">
    </a>
    &nbsp;
    <a href="https://github.com/semantic-release/semantic-release">
        <img alt="语义化版本发布" src="https://badgen.net/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80/semantic-release/e10079">
    </a>
    &nbsp;
    <a href="https://github.com/AurelienStebe/Gladdis/blob/main/LICENSE">
        <img alt="GitHub许可证" src="https://badgen.net/github/license/AurelienStebe/Gladdis">
    </a>
    &nbsp;
</p>

## 描述

[Obsidian](https://obsidian.md) 的存在是为了帮助你建立第二个大脑。Gladdis 的存在是为了给那个大脑一支笔（让它为你写作一次），一双耳朵（说话比打字更容易），以及多个分裂的人格（给你的系统提示命名）。v1.0 的进一步计划包括：一把画笔（让它像真正的艺术家一样绘画），一种声音（听起来比阅读更容易），一种内心独白（我们一起比我们的总和更强大），以及执行代码的能力（会有什么问题呢？）。

### 当前功能

- **简单的 Markdown 语法**：对话窗口是任何打开的 Markdown 文件，流式 LLM 响应会被追加。
- **Whisper 转录**：音频文件的 WikiLinks 会自动转录，使用 Obsidian 的“音频录制器”核心插件。
- **文档加载**：文本文件的 WikiLinks 会自动加载，只需将文件拖放到对话窗口中。（暂不支持 PDF）
- **系统提示**：为系统提示命名，创建个性化，并使用 FrontMatter 选择与之交谈的人。
安装

### 从 Obsidian 内部（即将推出）

1. 在设置中打开“社区插件”选项卡。
2. 点击“浏览”按钮并搜索“Gladdis”。
3. 点击“安装”按钮并启用插件。

### 使用 BRAT 插件

1. 安装 [Beta Reviewers Auto-update Tool插件](https://github.com/TfTHacker/obsidian42-brat)。
2. 按照 ["添加beta插件"](https://tfthacker.com/Obsidian+Plugins+by+TfTHacker/BRAT+-+Beta+Reviewer's+Auto-update+Tool/Quick+guide+for+using+BRAT#Adding+a+beta+plugin) 的说明进行操作。

### 从 GitHub 手动安装

1. 从 [最新版本](https://github.com/AurelienStebe/Gladdis/releases) 下载 `main.js` 和 `manifest.json` 文件，并将它们放入你的 vault 的插件文件夹中：`<vault>/.obsidian/plugins/gladdis/`。
文档 [进行中]

### Obsidian 命令

Gladdis 提供了 3 个命令，可以在设置中将它们映射到热键，或者使用 [Commander插件](https://github.com/phibr0/obsidian-commander) 创建按钮。

- **与 Gladdis 聊天**: 执行完整的处理过程的主要命令，包括调用 LLM 模型。
- **处理内容**: 检查所有链接和转录是否正确，并获取完整的标记计数。
- **处理提示（或选择）**: 仅检查提示或选择，并获取特定的标记计数。

### 设置 / 选项

设置面板允许您指定插件数据文件夹、您的 OpenAI API 密钥和 FrontMatter 默认值。

- **数据根路径**：Gladdis 将在 `configs` 子文件夹中搜索配置文件，并将聊天和通话日志写入 `history` 子文件夹。
- **OpenAI 密钥**：创建一个 OpenAI API 账户，[生成一个 API 密钥](https://platform.openai.com/account/api-keys) 并将其粘贴到设置面板中。
- **FrontMatter 默认值**：调整 Gladdis 和 Whisper 选项的各种默认值。

### FrontMatter 配置

可以使用任何对话或配置文件中的 FrontMatter 覆盖设置面板中的默认值。

```yaml
---
gladdis:
    label: Gladdis    # 在配置中为AI命名
    config: Gladdis   # 切换要交谈的AI
    model: gpt-3.5-turbo # 随时切换模型
    temperature: 42   # 测试不同的温度
    top_p_param: 100  # 或不同的概率质量
whisper:
    config: Whisper   # 切换转录语言
    model: whisper-1  # 目前只有一个模型
    temperature: 24   # 测试不同的温度
    echoOutput: true  # 输出转录调用
    deleteFile: false # 转录后清理文件
---
```

### Markdown 语法

对话历史使用与您的笔记相同的熟悉的 Obsidian 语法（都只是文本）。

```md
只需使用标准的Markdown文本来编写“用户”消息和提示。
Gladdis配置文件的内容将被添加到此之前。
使用三个破折号来分隔消息/对话的部分。

---

__UserName:__ 标签也可以使用自定义名称开始新的消息。

__Gladdis:__ Gladdis的标签和`Assistant`用于AI消息。

__System:__ 用于系统提示（配置文件中的默认设置）。

---

> 引用的行将被忽略，错误和令牌计数器也是如此。

[[path/file.md|链接到文件的Wiki链接]]和![[audio_recording.mp3]]将被解析。

最后一条消息是提示，LLM的响应流在下面。
```

## 未来发展

- **PDF 和 Web 支持**：像加载文本文件一样加载 PDF WikiLinks，同时加载网页外部链接。
- **图像和音频输出**：使用 DALL·E 创建图像，使用 ElevenLabs 或其他可访问的 API 模型进行语音合成。
- **代码执行**：将 [Templater](https://github.com/SilentVoid13/Templater) 代码添加到您的提示中，运行 AI 生成的任何代码（您确定吗？！）。
- **AI 对话**：让您的各种 AI 配置相互对话，创建您自己的“格拉迪斯委员会”。
如何贡献？[WIP]

在我创建问题和 PR 模板并完成文档之前，请耐心等待。

关于作者

Gladdis 是由 [Aurélien Stébé](https://github.com/AurelienStebe) 创建的，他是一位资深的法国自由职业者，[Toptal软件开发者](https://www.toptal.com/resume/aurelien-stebe)。
