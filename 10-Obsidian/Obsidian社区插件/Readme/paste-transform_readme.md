---
uid: 20240312193744
title: Obsidian 插件：【Readme】Paste transform
tags: ['obsidian插件', 'readme']
description: 通过正则表达式规则修改剪贴板中的文本
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Paste transform

> [!Note] 插件名片
> - 插件名称：Paste transform
> - 插件作者：Timofey Koolin
> - 插件说明：通过正则表达式规则修改剪贴板中的文本
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/rekby/obsidian-paste-transform)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?paste-transform)

## 概述

通过正则表达式规则修改剪贴板中的文本

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/rekby/obsidian-paste-transform/master/README.md)

---

## Readme(翻译）

下面是 [[paste-transform]] 插件的自述翻译

# 粘贴转换插件

这是一个为 Obsidian（<https://obsidian.md>）设计的粘贴转换插件。

该插件处理粘贴事件，检查是否粘贴了简单文本，然后通过正则表达式处理粘贴的文本。

我用它来生成问题/拉取请求的简短链接，并将问题扩展到内部问题跟踪器。

例如：ASD-123 -> `[ASD-123](https://internal.tracker/ASD-123)`

# 用法

简单地从剪贴板中粘贴文本/链接。例如，尝试复制并粘贴 [示例问题](https://github.com/rekby/obsidian-paste-transform/issues/1) 的链接，然后粘贴到页面上。

![paste-example.png](attachements/paste-example.png)

# 设置

![settings-page.png](attachements%2Fsettings-page.png)

## 转换规则

包含两个文本区域。左侧 - 用于正则表达式模式，右侧 - 用于替换规则。

在左侧区域编写匹配正则表达式表达式。每行一个正则表达式。

您可以在 [javascript文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) 中了解更多关于正则表达式的信息。

在同一行的右侧区域编写替换规则。

您可以在 [javascript文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_the_replacement) 中了解更多关于替换字符串的信息。

该插件包含一些 GitHub 和 Wikipedia 的默认规则作为示例。

## 尝试结果

您可以将测试文本写入“尝试源”文本区域，并在“尝试目的地”中查看结果。

如果您在正则表达式中犯了一个错误 - 错误将输出到“尝试目的地”

## 调整文本区域

文本区域默认情况下可能很小。您可以通过拖动右下角来调整它们。

## 安装

从 Obsidian 社区插件中安装（即将推出）：<https://obsidian.md/plugins?id=paste-transform>

### 手动安装

1. 从 [最新版本发布页面](https://github.com/rekby/obsidian-paste-transform/releases) 下载 `.zip` 文件。
2. 解压缩到：`{VaultFolder}/.obsidian/plugins/`
3. 重新加载 Obsidian

# 版本控制

当前版本系统为 0.X.Y，其中 X 在更新中包含一些不兼容的更改时发生变化（请参阅发布说明）。

Y 在更新中没有不兼容的更改时发生变化（修复错误，添加新功能等）。
