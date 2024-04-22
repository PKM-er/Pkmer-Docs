---
uid: 2024042221312060
title: Obsidian 插件：【Readme】AI LLM
tags: ['obsidian插件', 'readme']
description: Integrate local machine learning (OLLAMA) functionality into your notes, enhancing their capabilities.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】AI LLM

> [!Note] 插件名片
> - 插件名称：AI LLM
> - 插件作者：Sparky4567
> - 插件说明：Integrate local machine learning (OLLAMA) functionality into your notes, enhancing their capabilities.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Sparky4567/obsidian_ai_plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai_llm)

## 概述

Integrate local machine learning (OLLAMA) functionality into your notes, enhancing their capabilities.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Sparky4567/obsidian_ai_plugin/main/README.md)

---

## Readme(翻译）

下面是 [[ai_llm]] 插件的自述翻译

## Obsidian AI 插件

该插件是为了更好地使用 Obsidian 与本地 LLM 模型而开发的。

## 为了使用插件

- 将插件下载/克隆到您的插件文件夹中

```

cd ./obsidian/plugins
git clone https://github.com/Sparky4567/obsidian_ai_plugin.git
cd obsidian_ai_plugin
npm install
npm run build
打开 Obsidian 应用程序
启用社区插件支持
启用 LLM 插件
在设置选项卡中选择一个模块

```

- 确保您已安装 Ollama

```

https://ollama.com/download

```

根据文档进行阅读。

- 确保 Ollama 模型在后台运行

```

ollama run tinyllama

(示例)

```

- 如果您从 GitHub 存储库下载了此插件，请将其复制到 .obsidian/plugins 中，不要忘记在插件目录中运行 npm install

```
npm install

```

以安装所有所需的依赖项。

- 确保插件已激活
- 在插件设置中选择正确的端点和模型
- 在编辑器字段中写入一些内容（简单文本）
- 使用鼠标选择文本
- 选择后按下 CTRL+P
- 输入 ASK LLM 并选择您想要的命令（目前没有太多）
- 按 Enter 确认
- 等待一段时间以获取结果

您的文本将被从 LLM 中的文本更改（默认为 tinyllama）

如果您有任何与插件相关的问题或想要扩展功能，请发送电子邮件至 admin@artefaktas.eu，我会尽快回复。

### 推荐

- 至少 8GB RAM 和一个体面的处理器的笔记本电脑（用于本地使用）

### 想要支持这个项目吗？

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/K3K06VU8Z)

[![wakatime](https://wakatime.com/badge/user/1fbc8005-b2d0-4f4f-93e8-f12d7d25d676/project/018e50a2-95fc-40fa-aed2-18be07c19419.svg)](https://wakatime.com/badge/user/1fbc8005-b2d0-4f4f-93e8-f12d7d25d676/project/018e50a2-95fc-40fa-aed2-18be07c19419)
