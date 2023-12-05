---
uid: 2023120522263244
title: Obsidian 插件：【Readme】Paste Link
tags: ['obsidian插件', 'readme']
description: 智能粘贴Markdown链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Paste Link

> [!Note] 插件名片
> - 插件名称：Paste Link
> - 插件作者：Jose Elias Alvarez
> - 插件说明：智能粘贴 Markdown 链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jose-elias-alvarez/obsidian-paste-link)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?paste-link)

## 概述

智能粘贴 Markdown 链接。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jose-elias-alvarez/obsidian-paste-link/master/README.md)
>

---

## Readme(翻译）

下面是 [[paste-link]] 插件的自述翻译

# 粘贴链接

智能地粘贴 Markdown 链接。

使用方法

### 自动

当你将剪贴板的内容粘贴到 Obsidian 中时，插件会检查它是否是一个 URL。如果是，它将使用任何选定的文本作为标题，将内容插入为 Markdown 链接。否则，它将正常地粘贴文本。

在粘贴时按住 `Shift` 键也会强制进行标准粘贴，而不考虑剪贴板的内容。

### 手动

如果您更喜欢使用单独的命令/键盘快捷方式，您可以禁用“覆盖粘贴处理程序”设置，重新启动 Obsidian，然后使用“粘贴链接：粘贴 Markdown 链接”命令。

该命令在剪贴板包含 URL 时插入链接，并在其他情况下行为类似于标准的“插入 Markdown 链接”命令，因此，如果您喜欢，可以用此插件提供的命令替换默认的“插入 Markdown 链接”绑定键。

## 注意事项

该插件旨在改进 [obsidian-url-into-selection](https://github.com/denolehov/obsidian-url-into-selection)，但我并不打算复制其所有功能。如果您遇到问题，请提出一个问题。

### URLs

该插件使用 JavaScript 的 [URL构造函数](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) 来验证 URL。这意味着以下字符串被视为 URL：

```
https://example.com
http://example.com
file:///path/to/file
```

但以下字符串不是 URL：

```
wwww.example.com
example.com
```

此外，不处理包含换行符的 URL，因为 Obsidian 不支持多行链接。

### 边缘情况

粘贴处理程序会智能地处理以下边缘情况：

1. 如果你的光标/选择在现有链接内部，它将正常粘贴，以便更轻松地编辑现有链接。
2. 如果你选择了一个现有链接，它将用剪贴板的内容替换链接的 URL，保留其标题。

使用“粘贴 Markdown 链接”命令时，会忽略这些边缘情况，以更好地复制默认的“插入 Markdown 链接”命令的行为。

在我的测试中，我发现这些行为很有用，但如果你在工作流程中遇到问题，请提出问题。
