---
uid: 2023120719320612
title: Obsidian 插件：【Readme】Language Translator
tags: ['obsidian插件', 'readme']
description: 一个Obsidian插件，可以将所选文本翻译成所需的语言。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Language Translator

> [!Note] 插件名片
> - 插件名称：Language Translator
> - 插件作者：Florin Bobis
> - 插件说明：一个 Obsidian 插件，可以将所选文本翻译成所需的语言。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/twentytwokhz/language-translator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?language-translator)

## 概述

一个 Obsidian 插件，可以将所选文本翻译成所需的语言。

![Language Translator](https://cdn.pkmer.cn/covers/language-translator.jpeg!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/twentytwokhz/language-translator/master/README.md)
>

---

## Readme(翻译）

下面是 [[language-translator]] 插件的自述翻译

<p align="center">
  <a href="https://github.com/twentytwokhz/language-translator">
    <img src="https://github.com/twentytwokhz/language-translator/raw/master/translator.png" alt="Logo" height=100>
  </a>
  <h1 align="center">语言翻译器</h1>

  <p align="center">
    一个Obsidian插件，可以将选定的文本翻译成所需的语言。
    <br />
    <br />

    ·
    
  </p>
</p>

![GitHub发布（按日期排序）](https://img.shields.io/github/v/release/twentytwokhz/language-translator)

![GitHub发布日期](https://img.shields.io/github/release-date/twentytwokhz/language-translator)

![GitHub问题](https://img.shields.io/github/issues/twentytwokhz/language-translator)

![GitHub所有发布](https://img.shields.io/github/downloads/twentytwokhz/language-translator/total)

![GitHub](https://img.shields.io/github/license/twentytwokhz/language-translator)

<!-- 关于项目 -->

# 语言翻译器

一个 Obsidian 插件，可以将选定的文本翻译成所需的语言。

## 关于项目

该插件允许您将选定的文本翻译成所需的语言。

它基于一个免费的 Azure Translator 实例。请不要滥用它 :)

_建议_

请记住，这是一个**初始**版本，插件界面可能会**变化**！

PS：如果您有建议，请参阅 [贡献](##Contributing) 部分。

## 安装

在 Obsidian 的社区插件列表中找到此插件，并将其添加到您的应用程序中。

或者，如果您想手动安装它，请将此存储库克隆到您的保险库中的 `.obsidian/plugins/` 目录中，导航到您新克隆的文件夹，运行 `npm i` 或 `yarn` 以安装依赖项，并运行 `npm run build` 或 `yarn build` 以编译插件。

## 设置

![设置](https://cdn.pkmer.cn/covers/language-translator_2_0.jpeg!pkmer)

该插件允许进行某些类型的配置：

**目标语言**

在这里，我们选择默认的翻译目标。

**API 类型**

该插件允许选择使用内置的 Azure API（有限版本）还是您自己托管在 _Azure_ 或 _LibreTranslate_ 上的服务。

**Azure 翻译器区域**

此设置允许您设置自己的 Azure 翻译器实例，并指定预定义的区域。

内置 API 使用的默认 Azure 区域是 `global`。

**API URL**

这是用于区分默认的 Azure API URL 和其他可能的托管位置。

**API 令牌**

此令牌仅适用于私有托管的 _Azure_ 或 _LibreTranslate_ 实例。

## 用法

1. 首先，您需要定义要翻译的文本。有两种可用的选项：
   - 通过显式指定语言代码

     ```markdown
     fr:我想要自由
     ```

     第一部分是包含语言代码的前缀（请参阅 [此处](https://docs.microsoft.com/en-us/azure/cognitive-services/translator/language-support) 的代码）。第二部分是要翻译的实际文本。

   - 或者直接使用设置中的默认源语言代码。

     ```markdown
     我想要自由
     ```

2. 选择文本
3. 执行翻译操作
   - 按下 `Ctrl+P` 并执行 `Language Translator: Insert translation` 命令
   - 或者使用预定义的快捷键（默认为 `Ctrl+Shift+R`）
   <img src="img/language-translator-command.png" alt="Logo" height=100>

<!-- CONTRIBUTING -->

## 贡献

贡献是使开源社区成为一个学习、激励和创造的绝佳场所的原因。我们非常感谢您所做的任何贡献。

## 许可证

本项目根据 MIT 许可证进行许可 - 有关详细信息，请参阅 [`LICENSE`](LICENSE) 文件

<!-- 联系方式 -->

## 联系方式

Florin Bobis - [@twentytwokhz](https://github.com/twentytwokhz) - florinbobis@gmail.com

项目链接：[https://github.com/twentytwokhz/language-translator](https://github.com/twentytwokhz/language-translator)
