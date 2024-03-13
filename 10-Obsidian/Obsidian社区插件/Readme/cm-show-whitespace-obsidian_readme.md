---
uid: 2023080322265021
title: Obsidian 插件：Show Whitespace
tags: ['界面相关', '编辑工具', 'obsidian插件', 'readme']
description: 在编辑器中强化显示你输入的空格，防止因为不可见的输入导致格式错乱。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Show Whitespace

> [!Note] 插件名片
> - 插件名称：Show Whitespace
> - 插件作者：death_au
> - 插件说明：在编辑器中强化显示你输入的空格，防止因为不可见的输入导致格式错乱。
> - 插件分类：[' 界面相关 ', ' 编辑工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/deathau/cm-show-whitespace-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cm-show-whitespace-obsidian)

## 概述

在编辑器中强化显示你输入的空格，防止因为不可见的输入导致格式错乱。

![Show Whitespace](https://cdn.pkmer.cn/covers/cm-show-whitespace-obsidian.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/deathau/cm-show-whitespace-obsidian/main/README.md)

---

## Readme(翻译）

下面是 [[cm-show-whitespace-obsidian]] 插件的自述翻译

# 显示空白符的 Obsidian 插件

这是一个为 [Obsidian](https://obsidian.md) 编辑器设计的插件，用于显示编辑器中的空白符。

![截图](https://github.com/deathau/cm-show-whitespace-obsidian/raw/main/screenshot.png)

该插件利用了 [cm-show-invisibles](https://github.com/coderaiser/cm-show-invisibles) 的代码，

该代码由 [coderaiser](https://github.com/coderaiser) 提供。

### 兼容性

自定义插件仅适用于 Obsidian v0.9.7+。

此存储库的当前 API 目标为 Obsidian **v0.10.0**。

### 注意事项

目前这一切都是实验性的，所以某些部分可能无法正常工作等。
某些 CSS 类等可能会干扰它，并使空白字符更加突出。
请查看发布中的 styles.css，以了解添加的样式以进行自定义。

如果您希望使用不同的字符，可以在自定义 CSS 中覆盖以下 CSS 变量。

  - `--spaceChar`
  - `--trailingSpaceChar`
  - `--singleSpaceChar`
  - `--tabChar`
  - `--newlineChar`
  - `--strictLineBreakChar`

安装

从 Obsidian v0.9.8 开始，您可以通过以下步骤在 Obsidian 中激活此插件：

- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索 "Show Whitespace"
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

您可以按照相同的步骤来更新插件。

### 来自 GitHub

- 下载 [最新版本](https://github.com/deathau/cm-show-whitespace-obsidian/releases/latest)
- 从 zip 文件中提取 `cm-show-whitespace-obsidian` 文件夹到你的 vault 的插件文件夹：`<vault>/.obsidian/plugins/`
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
- 将 `manifest.json`、`main.js` 和 `styles.css` 复制到您的插件文件夹的子文件夹中（例如，`<vault>/.obsidian/plugins/cm-show-whitespace-obsidian/`）。
- 重新加载 Obsidian 以查看更改。

或者，您可以直接将该仓库克隆到您的插件文件夹中，一旦安装了依赖项，使用 `npm run dev` 以启动监视模式下的编译。
您可能需要重新加载 Obsidian（`ctrl+R`）以查看更改。

定价

咦？这是我为了好玩而制作的开源插件。它完全免费。

然而，如果你非常喜欢它，非要给我寄钱的话，可以通过 [PayPal](https://paypal.me/deathau) 往我的帽子里扔一些硬币，或者通过 [GitHub赞助商](https://github.com/sponsors/deathau) 赞助我。

# 版本历史

## 0.3.1

- 修复了在关闭时抛出错误的问题

## 0.3.0

- 修复了无法切换插件的问题
- 添加了一些新的设置（感谢 jjspace 提供！）
  - 显示/隐藏空格字符
  - 显示/隐藏单个空格字符
  - 显示/隐藏尾随空格字符
  - 显示/隐藏换行符
  - 显示/隐藏制表符
- 还添加了一个设置，用于显示/隐藏“严格”换行符（两个空格后跟一个换行符）

## v0.2.0

- 添加了通过命令切换设置的功能
如果你愿意，你可以绑定自己的热键。

## 0.1.0

- 添加了一个全局的 body 类，以便在插件关闭时不应用样式
- 对中间的空格点进行了更多的修复
- 可以覆盖的 CSS 变量 `--spaceChar`、`--tab-char` 和 `--newlineChar`

## v0.0.3

- 修复了行尾空格与其他内容处于同一级别
- 在自述文件中添加了一张截图

这是我第一个真正利用自动化的发布版本 🤞

## v0.0.2

修复样式以使空格点居中并调整颜色

## v0.0.1

初始发布！

没有花哨的设置或其他任何东西，只需通过第三方插件设置打开或关闭它。
