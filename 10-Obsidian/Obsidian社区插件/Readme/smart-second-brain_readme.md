---
uid: 2024022121250823
title: Obsidian 插件：【Readme】Smart Second Brain
tags: ['obsidian插件', 'readme']
description: 与您专注于隐私的助手互动，利用Ollama或OpenAI，让您的第二大脑变得更加智能。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Smart Second Brain

> [!Note] 插件名片
> - 插件名称：Smart Second Brain
> - 插件作者：Leo310, nicobrauchtgit
> - 插件说明：与您专注于隐私的助手互动，利用 Ollama 或 OpenAI，让您的第二大脑变得更加智能。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/nicobrauchtgit/obsidian-Smart2Brain)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?smart-second-brain)

## 概述

与您专注于隐私的助手互动，利用 Ollama 或 OpenAI，让您的第二大脑变得更加智能。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nicobrauchtgit/obsidian-Smart2Brain/main/README.md)

---

## Readme(翻译）

下面是 [[smart-second-brain]] 插件的自述翻译

<div align="center">

<img alt="章鱼" src="https://github.com/nicobrauchtgit/obsidian-Smart2Brain/assets/48623649/03cadd13-b3e5-4eae-bbec-13eff9a78f22" height="500px">

</div>

# 智能第二大脑

待定

## 特点

待定

# 设置

智能第二大脑提供两种模式。当启用隐身模式时，它使用 [Ollama](https://github.com/ollama/ollama) 在您的计算机上本地运行一个 LLM。当禁用时，它使用 [OpenAI](https://openai.com/) 的 GPT 模型。

## Ollama

> [!注意]
> Ollama 目前不支持持久配置。因此，每次启动服务时都必须设置 `OLLAMA_ORIGINS="*"` 环境变量。
> 这包括重新启动 Mac 应用程序。

### MacOS 应用程序

1. 前往 [Ollama](https://ollama.ai/download/) 网站并按照安装说明进行操作。
2. 前往您的终端并执行以下命令：

```zsh
$ launchctl setenv OLLAMA_ORIGINS "*"
```

1. 退出 Ollama 服务（在菜单栏中点击 Ollama 图标，然后点击退出）
2. 再次启动 Ollama 服务。

### MacOS CLI 应用程序

1. 安装 Ollama。
    - 使用 [Homebrew](https://brew.sh/)：

    ```zsh
    $ brew install Ollama
    ```

    - 使用 curl：

    ```zsh
    $ curl -fsSL https://ollama.ai/install.sh | sh
    ```

    - 或者 [手动安装](https://github.com/ollama/ollama/blob/main/docs/linux.md) 使用二进制文件。

2. 使用 Origins 标志启动 Ollama 服务：

```zsh
$ OLLAMA_ORIGINS="*" ollama serve
```

### Linux

1. 安装 Ollama：

    - 使用 curl：

    ```zsh
    $ curl -fsSL https://ollama.ai/install.sh | sh
    ```

   - 或者 [手动安装](https://github.com/ollama/ollama/blob/main/docs/linux.md) 使用二进制文件。

2. 按照这些 [说明](https://github.com/ollama/ollama/blob/main/docs/faq.md#setting-environment-variables-on-linux) 将 `OLLAMA_ORIGINS="*"` 设置为环境变量。
3. 重新启动 Ollama 服务。

### Windows

> [!注意]
> 即将推出！目前，您可以通过 WSL2 在 Windows 上安装 Ollama。

## OpenAI

> [!注意]
> 目前，API 密钥需要升级为 OpenAI 付费账户才能使用。这意味着至少要在您的 OpenAI 账户上存入 5 美元。也许这在将来会有所改变

1. 创建一个 [OpenAI账户](https://platform.openai.com/login/)。
2. 点击“创建新的秘密密钥”并按照说明创建一个 [API密钥](https://platform.openai.com/api-keys)。
3. 复制密钥并粘贴到 Smart Second Brain 设置中。



