---
uid: 2023120719272073
title: Obsidian 插件：【Readme】Editor Syntax Highlight
tags: ['编程', '美化', 'obsidian插件', 'readme']
description: 为 Obsidian 的代码块，增强不同语言高亮显示方案。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Editor Syntax Highlight

> [!Note] 插件名片
> - 插件名称：Editor Syntax Highlight
> - 插件作者：death_au
> - 插件说明：为 Obsidian 的代码块，增强不同语言高亮显示方案。
> - 插件分类：[' 编程 ', ' 美化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/deathau/cm-editor-syntax-highlight-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cm-editor-syntax-highlight-obsidian)

## 概述

为 Obsidian 的代码块，增强不同语言高亮显示方案。

![Editor Syntax Highlight](https://cdn.pkmer.cn/covers/cm-editor-syntax-highlight-obsidian.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/deathau/cm-editor-syntax-highlight-obsidian/main/README.md)
>

---

## Readme(翻译）

下面是 [[cm-editor-syntax-highlight-obsidian]] 插件的自述翻译

# Obsidian 编辑器语法高亮插件

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，可以在编辑器中为代码块提供语法高亮功能。

![截图](https://cdn.pkmer.cn/covers/cm-editor-syntax-highlight-obsidian_1_0.png!pkmer)

从 [CodeMirror](https://github.com/codemirror/CodeMirror/) 导入代码。

### 兼容性

自定义插件仅适用于 Obsidian v0.9.7+。

此存储库的当前 API 针对 Obsidian **v0.9.7**。

### 注意事项

目前这一切都是非常实验性的，所以某些部分可能无法正常工作等。

这里导入了一堆来自 CodeMirror 的 [语法高亮模式](https://github.com/codemirror/CodeMirror/tree/5.58.2/mode)，以及 [dark mode的yonce主题](https://github.com/codemirror/CodeMirror/blob/5.58.2/theme/yonce.css)。

安装

### 从 Obsidian 内部

从 Obsidian v0.9.8 开始，您可以通过以下步骤在 Obsidian 内部激活此插件：

- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索“Syntax Highlight”
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

您可以按照相同的步骤来更新插件。

### 来自 GitHub

- 下载 [最新版本](https://github.com/deathau/cm-editor-syntax-highlight-obsidian/releases/latest)
- 从 zip 文件中提取 `cm-editor-syntax-highlight-obsidian` 文件夹到你的 vault 的插件文件夹：`<vault>/.obsidian/plugins/`
注意：在某些机器上，`.obsidian` 文件夹可能是隐藏的。在 MacOS 上，你可以按下 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。
- 重新加载 Obsidian
- 如果提示安全模式，你可以禁用安全模式并启用插件。
否则，前往设置，第三方插件，确保安全模式关闭，并从那里启用插件。

## 开发

该项目使用 Typescript 提供类型检查和文档。
该仓库依赖于最新的 [插件API](https://github.com/obsidianmd/obsidian-api) 以 Typescript 定义格式，其中包含了描述其功能的 TSDoc 注释。

**注意：** Obsidian API 仍处于早期 alpha 版本，随时可能发生变化！

如果您想要为开发做出贡献和/或自定义它以适应您自己的调整，您可以执行以下操作：

- 克隆该仓库。
- 运行 `npm i` 或 `yarn` 安装依赖项。
- 运行 `npm run build` 进行编译。
- 将 `manifest.json`、`main.js` 和 `styles.css` 复制到您的插件文件夹的子文件夹中（例如，`<vault>/.obsidian/plugins/cm-editor-syntax-highlight-obsidian/`）。
- 重新加载 Obsidian 以查看更改。

或者，您可以直接将该仓库克隆到您的插件文件夹中，一旦安装了依赖项，使用 `npm run dev` 以启动监视模式下的编译。
您可能需要重新加载 Obsidian（`ctrl+R`）以查看更改。

定价

咦？这是我为了好玩而制作的开源插件。它完全免费。

然而，如果你非常喜欢它，非要给我寄钱的话，可以通过 [PayPal](https://paypal.me/deathau) 往我的帽子里扔一些硬币，或者通过 [GitHub赞助商](https://github.com/sponsors/deathau) 赞助我。

# 版本历史

## 0.1.3

- 修复了 Elixir 模式（很抱歉这么久才发布，它在很久以前就修复了...）
- 为 `dataviewjs` 块添加了 JavaScript 语法高亮（感谢@dbarenholz）
- 为 `dataview` 和 `tracker` 块添加了 YAML 语法高亮（感谢@KjellConnelly）

## 0.1.2

- 添加了 Elixir 模式（感谢 James Dalton）

## 0.1.1

- 将 CodeMirror 主题应用于 LaTeX 数学公式

## 0.1.0

- 调整了暗色 CodeMirror 主题，使其也适用于前置元数据
- 在加载时重新加载编辑器模式，以便在启用时显示语法高亮
- 在卸载时删除编辑器模式，以便在禁用时隐藏语法高亮

## v0.0.1

初始版本。

从 [CodeMirror 5.58.2](https://github.com/codemirror/CodeMirror/tree/5.58.2/mode) 复制粘贴并导入了编辑器模式。导入 `markdown` 和 `gfm` 时出现编译错误，所以暂时不可用。
