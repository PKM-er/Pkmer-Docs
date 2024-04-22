---
uid: 2023080322284386
title: Obsidian 插件：Translate
tags: ['obsidian插件', 'readme']
description: 使用 Google 翻译，DeepL，Azure 等工具翻译文本和笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Translate

> [!Note] 插件名片
> - 插件名称：Translate
> - 插件作者：Fevol
> - 插件说明：使用 Google 翻译，DeepL，Azure 等工具翻译文本和笔记。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Fevol/obsidian-translate)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?translate)

## 概述

使用 Google 翻译，DeepL，Azure 等工具翻译文本和笔记。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Fevol/obsidian-translate/master/README.md)

---

## Readme(翻译）

下面是 [[translate]] 插件的自述翻译

<p align="center">
	<img src="images/obsidian-translate-logo-text.png" width="400">
</p>

---
<div align="center">
<a href="https://github.com/Fevol/obsidian-translate/">
<img alt="Obsidian Translate downloads - latest release" src="https://img.shields.io/badge/dynamic/json?query=%24%5B%22translate%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&label=下载次数:&logo=obsidian&color=8c79de&logoColor=8c79de">
</a>
<a href="https://github.com/Fevol/obsidian-translate/stargazers">
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/fevol/obsidian-translate?color=yellow&label=星标数%3A&logo=OpenTelemetry&logoColor=yellow">
</a>
<a href="https://github.com/Fevol/obsidian-translate/actions/workflows/release.yml">
<img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/fevol/obsidian-translate/.github/workflows/release.yml?label=构建状态%3A&logo=buddy&logoColor=5cff1e">
</a>
<a href="https://github.com/Fevol/obsidian-translate/releases/latest">
<img alt="GitHub release (latest by date including pre-releases)" src="https://img.shields.io/github/v/release/fevol/obsidian-translate?color=%234e96af&display_name=标签&include_prereleases&label=最新版本%3A&logo=Dropbox&logoColor=%236abdd9">
</a>
<br>
<a href="https://svelte.dev">
<img alt="Svelte" src="https://img.shields.io/badge/-Svelte-ff3e00?logo=Svelte&logoColor=white&style=flat&">
</a>
<a href="https://www.typescriptlang.org/">
<img alt="Typescript" src="https://img.shields.io/badge/-Typescript-3178C6?logo=Typescript&logoColor=white&style=flat&">
</a>
</div>

---
<div align="center">
<h4>

 <span>&nbsp;·&nbsp;</span>

 <span>&nbsp;·&nbsp;</span>

</h4>
</div>

---

一个为 [Obsidian](https://obsidian.md/) 设计的插件，它添加了多个用于翻译文本和文件的命令，

并且还提供了一个易于使用且可高度自定义的翻译界面，

与十种不同的翻译服务集成。

<br>
<img src="images/obsidian-windows-combined.png">
<br>

---

## 🧰 设置

- [📑 目录](#table-of-contents)
- [🧰 设置](#setup)
  - [免费替代方案](#free-alternatives)
- [🔣 翻译服务](#translation-services)
  - [服务概述](#services-overview)
  - [注意事项](#notes)
- [🎯 特点](#features)
- [⚠️ 免责声明](#disclaimers)
  - [⚖️ 法律](#legal)
  - [👁️‍🗨️ 隐私](#privacy)
  - [🔑 安全](#security)
- [💬 讨论和反馈](#discussion-and-feedback)
- [💎 致谢](#acknowledgements)
- [🤝 贡献者](#contributors)
- [❤️ 支持](#support)

## 🧰 设置

通过社区插件浏览器安装插件，或者通过 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装测试版。

要设置翻译服务，请打开插件的设置。在默认情况下打开的 `General` 设置选项卡中，

在 `Translation service` 下拉菜单中选择要使用的翻译服务。

接下来，转到您选择的服务的设置选项卡，并输入您的 API 密钥（如果需要），然后点击 **validate** 按钮 - 如果按钮变为绿色（表示您已成功连接到服务），则可以开始使用了！

现在，您可以打开翻译视图并开始翻译，或者在笔记中选择文本并使用 `Translate selection` 命令进行翻译！

强烈建议您阅读 [文档](https://github.com/Fevol/obsidian-translate/blob/master/docs/TUTORIAL.md)，

其中包含最重要功能的教程视频，并详细解释了可用功能。

对于大多数服务，您**将**需要注册账户（使用信用卡），请查看 [下表](https://github.com/fevol/obsidian-translate#services-overview) 以了解哪些服务需要注册。

***此插件不提供任何 API 密钥。***

### 免费替代方案

如果您希望使用不需要任何注册的服务，有三个免费选项可供选择：

- [Bergamot](https://browser.mt)（使用预训练的语言模型，可以选择使用 [FastText](https://fasttext.cc/) 进行语言检测，插件内提供下载）
- [Libre Translate](https://libretranslate.com)（使用预训练的语言模型，通过 Docker 进行设置）
- [Lingva Translate](https://lingva.ml)（Google Translate 网页爬虫，第三方服务）

Libre 和 Lingva Translate 都提供了一个可以处理翻译请求的服务器，但上述所有选项都可以完全托管在您自己的机器上。Libre 和 Lingva Translate 可以托管在 Docker 容器中，而 Bergamot 直接从 Obsidian 中运行。

## 🔣 翻译服务

### 服务概述

| 翻译服务                                                                                                                                                                                                | 支持 | 免费                          | 离线 | 移动 | 语言 |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------|---------|:-------|-----------|
| <img height="16px" align="center" src="images/service icons/google-translate.svg">                                                     | ✅         | *(每月 0.5M 字符)* ¹ ² |         |        | 111       |
| <img height="16px" align="center" src="images/service icons/deepl.svg">                                                                       | ✅         | *(每月 0.5M 字符)* ¹   |         |        | 29        |
| <img height="16px" align="center" src="images/service icons/yandex-translate.svg">                                                                 | ✅ [❓]     | ❌                             |         |        | 93        |
| <img height="16px" align="center" src="images/service icons/libre-translate.svg">                                                    | ✅         | ✅                             | ✅       |        | 32        |
| <img height="16px" align="center" src="images/service icons/azure-translator.svg">                                                           | ✅         | *(每月 2M 字符)* ¹     |         |        | 123       |
| <img height="16px" align="center" src="images/service icons/amazon-translate.svg">                                                                 | ⭕         | *(每月 2M 字符)* ¹ ²   |         |        |           |
| <img height="16px" align="center" src="images/service icons/bergamot.svg">                                                                                               | ✅         | ✅                             | ✅       | ❌      | 14        |
| <img height="16px" align="center" src="images/service icons/fanyi-qq.svg">                                                                             | ✅ [❓]     |                               |         |        | 18        |
| <img height="16px" align="center" src="images/service icons/fanyi-youdao.svg">                                                                         | ✅         |                               |         |        | 112       |
| <img height="16px" align="center" src="images/service icons/fanyi-baidu.svg">  | ✅ [❓]     |                               |         |        | 201       |
| <img height="16px" align="center" src="images/service icons/lingva-translate.svg">                                                 | ✅         | ✅                             |         |        | 111       |

<sub>上述显示的图标是根据各个服务的归属要求使用的。<br>
所列服务与此插件无任何关联。 </sub>

*¹ 需要有效的信用卡注册免费 API 密钥*<br>
*² 如果超过免费限额，将收取信用卡费用*<br>

| 符号 | 描述        |
|--------|--------------------|
| ✅      | 支持          |
| ❌      | 不支持      |
| ❓      | 需要测试 |
| ⭕      | 计划添加       |

### 注意事项

- 大多数服务需要保持 *活动* 的互联网连接才能正常工作。如果您想离线翻译文本，可以使用 [Bergamot](https://browser.mt) 翻译引擎，通过安装二进制文件和模型，或者使用支持 Docker 的任何操作系统（包括 [Android](https://gist.github.com/FreddieOliveira/efe850df7ff3951cb62d74bd770dce27)）在您的计算机/网络上托管 [Libre Translate](https://libretranslate.com)。
- 有些服务需要有效的信用卡注册免费的 API 密钥。此外，如果超过免费字符限制，信用卡将被收费，请务必注意！
- 确保只有在 API 帐户具有足够高的字符限制或翻译服务是本地托管的情况下（例如 Bergamot 或 Libre Translate），才启用自动翻译。这样可以更容易地避免超过字符限制。

## 🎯 特点

有关更多信息，请访问 [文档](https://github.com/Fevol/obsidian-translate/blob/master/docs/TUTORIAL.md)。

如果您想要使用此插件与扩展一起使用，请确保查看 [API](https://github.com/Fevol/obsidian-translate/blob/master/docs/API.md)。

<video src="https://raw.githubusercontent.com/Fevol/obsidian-translate/master/images/obsidian-translate.webm.mp4" controls></video>

### 命令

- **翻译当前文件：** 翻译当前文件
- **翻译到新文件：** 将活动文档翻译为新文件，文档标题也会被翻译
- **翻译所选内容：** 翻译编辑器中当前所选内容
- **检测所选内容：** 检测编辑器中当前所选内容的语言
- **更改提供者：** 更改所选的翻译服务提供商
- **打开翻译视图：** 打开自定义翻译视图

### 上下文菜单

在编辑器中：

- **翻译：** 翻译当前选择
- **检测语言：** 检测当前选择的语言

在文件中：

- **翻译：** 将当前文件翻译为一个 _ 新 _ 文件

### 翻译视图

- 高度可定制
  - 更改视图顶部的快速设置栏
  - 更改布局
  - 添加快速操作
- 支持具有不同设置的多个视图
- 自动翻译

### 翻译器

- 支持离线和在线的术语表

---

## ⚠️ 免责声明

### ⚖️ 法律

Obsidian Translate 与上述任何翻译服务都没有官方关联，它只提供了一个面向用户的界面，用于与每个服务的 API 集成。

除了提供两种语言之间的机器翻译或检测之外，各个服务不对源文本/翻译文本所做的任何修改或更改负责，除非在文档中明确说明或在界面中显示。

### 👁️‍🗨️ 隐私

该插件只会在特定用户输入时向翻译服务发送请求，例如翻译文本或下载语言模型。该插件**不会**自行向任何服务发送请求。

虽然该插件不会收集任何数据，但请注意，您翻译的任何文本都将被发送到您选择的翻译服务。请参阅下面提供的每个翻译服务的隐私政策，了解它们如何处理这些数据：

- [Google Translate](https://cloud.google.com/translate/data-usage)
- [DeepL](https://www.deepl.com/en/privacy.html)
- [Yandex Translate](https://yandex.com/legal/confidential/)
- [Microsoft Azure Translator](https://www.microsoft.com/en-us/translator/business/notrace/)（[通用声明](https://azure.microsoft.com/en-us/support/legal/privacy-statement/)）
- [Fanyi Baidu](https://fanyi-api.baidu.com/doc/5)
- [Fanyi QQ](https://www.qq.com/privacy.html)
- [Fanyi Youdao](https://cloud.tencent.com/document/product/551/34842)

由于 Bergamot 和 LibreTranslate 完全是自托管的，它们的服务没有任何隐私声明，您的数据保留在您的计算机上。

LingvaTranslate 不提供隐私声明。

### 🔑 安全性

请注意，默认情况下，您的 API 密钥以明文形式存储，并且可以被任何具有对您的保险库访问权限的人访问。如果您希望保持 API 密钥的私密性，您可以在“常规设置”下启用使用密码加密它们的选项，或选择仅在设备本身上存储它们（而不将它们存储在插件数据中）。

## 💬 讨论和反馈

非常感谢任何反馈。请使用 [GitHub问题跟踪器](https://github.com/Fevol/obsidian-translate/issues/new) 报告错误、请求功能或建议改进，或者在 Discord 上给我发消息（@Fevol#9470）。

这个插件最初是一个个人的热情项目。它变成了比我最初预期的要大得多的东西。

我希望这个插件对你有用，并计划在将来继续改进它。

---

## 💎 致谢

该插件使用了以下项目的完整代码文件：

- [FastText](https://github.com/facebookresearch/fastText/tree/main/webassembly)
- [Bergamot](https://github.com/mozilla/firefox-translations/tree/main/extension/controller/translation)

以下项目也被用作编写函数的参考，但已经适应了插件的需求：

- [Obsidian-Translator](https://github.com/luhaifeng666/obsidian-translator) - Fanyi-Youdao 的哈希算法
- [Obsidian Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes) - Obsidian 的基础 Svelte 组件

本 README 受到许多其他 Obsidian 插件和这个 [模板](https://github.com/Louis3797/awesome-readme-template) 的启发，

并使用 [shields.io](https://shields.io) 来生成徽章。

---

## 🤝 贡献者

@kometenstaub - 在插件开发和测试过程中多次帮助我<br>
@sailkiteV - 教授我 CSS 魔法的艺术，并创建了一些动画效果<br>
@TfTHacker - 提供非常有帮助的反馈和测试

## ❤️ 支持

我个人对于这些热情项目接受捐款并不完全舒服，所以在您考虑捐款给我之前，请先考虑一些慈善机构：

- 当地的食品银行和庇护所
- [无国界医生组织](https://www.doctorswithoutborders.org/)
- 您使用和喜爱的开源项目
  - （个人偏好）[Mozilla](https://donate.mozilla.org/en-US/)（与 Bergamot 共同开发）
  - [维基媒体基金会](https://donate.wikimedia.org/)

如果您仍然想要捐款给我，您可以在这里进行捐款：

<a href='https://ko-fi.com/fevol' target='_blank'><img height='35' style='border:0px;height:40px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='在ko-fi.com上给我买杯咖啡' />
