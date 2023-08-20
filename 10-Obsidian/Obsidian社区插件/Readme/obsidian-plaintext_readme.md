---
uid: 2023080322244796
title: Obsidian 插件：【Readme】Plaintext for Obsidian
tags: ['obsidian插件', 'readme']
description: 允许打开指定文件作为纯文本。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Plaintext for Obsidian

> [!Note] 插件名片
> - 插件名称：Plaintext for Obsidian
> - 插件作者：dbarenholz
> - 插件说明：允许打开指定文件作为纯文本。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/dbarenholz/obsidian-plaintext)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-plaintext)

## 概述

允许打开指定文件作为纯文本。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/dbarenholz/obsidian-plaintext/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-plaintext]] 插件的自述翻译

# Obsidian 的纯文本

这是一个 [Obsidian](https://obsidian.md) 插件，允许您将 _ 任何 _ 文件以纯文本形式打开。

它已经为 Obsidian **v0.13.14**开发，并在**Windows**上进行了测试。

老实说，只要您可以运行任何 Obsidian 版本，您也可以 _ 可能 _ 运行此插件。

唯一的要求是我们可以注册扩展名（例如，在 v0.12.12 中存在），以及 `viewRegistry` 存在，我假设这从 Obsidian 的开始就一直存在。

但是，这只是猜测！

## 使用方法

在设置中的扩展文本字段中输入您想要的文件格式，然后点击文本字段外部，观察魔法发生。

自 0.2.0 版本开始，默认情况下，您将不再意外破坏其他插件的视图。当然，如果您希望，它们仍然是可破坏的。

**对于 0.2.0 之前的任何版本：有其他插件可以让您编辑特定文件。确保不要将它们的扩展名输入到此插件的设置字段中。我目前无法检查具有特定扩展名的插件是否具有自己的视图，因此此插件将覆盖视图并破坏其他扩展名。如果您不小心这样做了，请打开插件文件夹（`.obsidian/plugins/obsidian-plaintext/`），并从 `data.json` 文件中删除您错误输入的扩展名。**~~

## 安装

对于在 Obsidian 中编辑文件感兴趣？太好了。

从 [releases](#) 页面获取最新版本，并将 `main.js` 和 `manifest.json` 复制到 `.obsidian/plugins/obsidian-plaintext/` 目录下。就这样！

您还可以通过在 Obsidian 中搜索**plaintext**来安装插件。

## 路线图

目前还没有计划。如果您对功能感兴趣，请在 Github 上提出问题！

## 贡献

欢迎在问题上提交 PR！

定价

这是免费的。保留你的钱，我不要。

## 更新日志

**版本 0.2.0（当前版本）**：

- 长期以来：插件已在移动设备上启用！
- 额外保护：默认情况下，不再允许其他插件添加的扩展名（如.csv）！
- 我们已经有超过 500 次下载！

**版本 0.1.0**：

- 完全重写注册和注销的功能。
- 现在在注销特定扩展时，实际上会删除视图。
- 正确地过滤掉默认的 Obsidian 扩展：不再意外地覆盖默认的 Markdown 编辑器。

**版本 0.0.2**：

- 第一个实际发布版本。
- 代码可用！您可以以纯文本形式打开和编辑文件。

**版本 0.0.1**：

- 不是一个发布版本。
- 初始测试代码。
- 这包括解析用户输入的扩展名的功能。



