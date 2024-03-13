---
uid: 2024022117273313
title: Obsidian 插件：【Readme】Dynamic Line Height for CJK
tags: ['obsidian插件', 'readme']
description: 动态调整包含CJK字符的行和段落的行高。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Dynamic Line Height for CJK

> [!Note] 插件名片
> - 插件名称：Dynamic Line Height for CJK
> - 插件作者：Ryota Ushio
> - 插件说明：动态调整包含 CJK 字符的行和段落的行高。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/RyotaUshio/obsidian-dynamic-line-height-cjk)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dynamic-line-height-cjk)

## 概述

动态调整包含 CJK 字符的行和段落的行高。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/RyotaUshio/obsidian-dynamic-line-height-cjk/master/README.md)

---

## Readme(翻译）

下面是 [[dynamic-line-height-cjk]] 插件的自述翻译

# Obsidian 动态 CJK 行高

这个 [Obsidian.md](https://obsidian.md) 插件根据包含 CJK（中文，日文和韩文）字符的内容动态调整每行（在编辑视图中）或段落（在阅读视图中）的高度。这很有用，因为 CJK 字符通常需要比欧洲字母更多的行高。

包含 CJK 字符的行和段落的行高可以通过 [样式设置](https://github.com/mgmeyers/obsidian-style-settings) 进行设置。

此外，此插件将 `.cjk` CSS 类添加到包含 CJK 字符的行和段落中。这允许通过 CSS 片段进行更高级的样式设置。

## 用法

1. [安装此插件](#installation) 并启用它。
2. 安装 Style Settings 并启用它。如果已经启用，您可能需要重新加载它。
3. 如果需要，通过 Style Settings 自定义 CJK 的行高。可以通过以下任一方式完成：
    1. 设置 > Style Settings > Dynamic Line Height for CJK > CJK 行和段落的行高
    2. 命令面板 > 运行命令 "Style Settings: Show style settings view" > Dynamic Line Height for CJK > CJK 行和段落的行高

## 安装

您可以在 Obsidian 中的社区插件浏览器中找到这个插件。

您也可以使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 安装最新的测试版。

1. 安装最新版本的 BRAT 并启用它。
2. 在浏览器中打开以下网址：`obsidian://brat?plugin=RyotaUshio/obsidian-dynamic-line-height-cjk`。
3. 点击“添加插件”按钮。
4. _(可选但强烈建议)_ 在 BRAT 设置中，在页面顶部打开 `启动时自动更新插件`。

## 支持开发

如果您发现这个插件有用，请通过给我买杯咖啡来支持我的工作！
