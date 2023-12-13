---
uid: 2023120719214156
title: Obsidian 插件：【Readme】@ Symbol Linking
tags: ['obsidian插件', 'readme']
description: 添加了在Obsidian中使用@（At符号）进行链接的功能。可以将@链接限定在特定目录中，例如Contacts/。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】@ Symbol Linking

> [!Note] 插件名片
> - 插件名称：@ Symbol Linking
> - 插件作者：Evan Bonsignori
> - 插件说明：添加了在 Obsidian 中使用@（At 符号）进行链接的功能。可以将@链接限定在特定目录中，例如 Contacts/。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Ebonsignori/obsidian-at-symbol-linking)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?at-symbol-linking)

## 概述

添加了在 Obsidian 中使用@（At 符号）进行链接的功能。可以将@链接限定在特定目录中，例如 Contacts/。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Ebonsignori/obsidian-at-symbol-linking/main/README.md)
>

---

## Readme(翻译）

下面是 [[at-symbol-linking]] 插件的自述翻译

# @符号链接

![使用@符号链接到Persons/中的名称的Gif演示](https://cdn.pkmer.cn/covers/at-symbol-linking_2_0.gif)

在 [Obsidian](https://obsidian.md/) 中添加了使用 `@`（At 符号）进行链接的功能。可以将 `@` 链接的范围限定为特定目录（例如 `Contacts/`）中的源链接。

如果您习惯于在其他工具（如 GitHub 或 Slack）中使用 `@` 来链接到人员，这将非常有用。

我在 `People/` 目录中保存了一份联系人目录，每当我想在日志条目中引用他们时，我都会使用 `@` 将它们链接起来，以区分它们是人而不是文件。

## 设置

- 限制 `@` 链接仅限于特定目录中的源链接，例如您的 `Contacts/` 目录。
- 使用 Wiki 样式链接，`[[filePath|linkText]]` 或 Markdown 样式链接，`[linkText](filePath)`
- 可选择在最终链接文本中包含 `@` 符号，例如 `[@evan](./evan.md)` 而不是 `[evan](./evan.md)`

## 快捷键

支持使用 `上箭头`、`下箭头`、`回车` 和 `ESC` 键来导航链接搜索弹出窗口。

安装

首选方法是通过 Obsidian 中的 [内置社区插件浏览器](https://help.obsidian.md/Extending+Obsidian/Community+plugins) 添加此插件。

### 手动安装

1. 在你的 vault 中创建一个新文件夹，名为 `.obsidian/plugins/at-symbol-linking`
2. 从 [Releases 页面](https://github.com/Ebonsignori/obsidian-at-symbol-linking/releases) 下载并移动最新版本的文件到新文件夹 `.obsidian/plugins/at-symbol-linking`
3. 在 Obsidian 中打开 `Settings -> Community Plugins`
4. 如果尚未启用社区插件，请启用它们，然后勾选 `@ Symbol Linking` 的复选框。

## 贡献

请通过 [开启一个问题](https://github.com/Ebonsignori/obsidian-at-symbol-linking/issues/new) 来提出任何建议或错误报告。

或者随意分叉并开启一个 PR :heart:

### 本地开发

1. 将此文件移动到您不介意搞乱的 `.obsidian/plugins` 目录中的一个存储库中。
2. 运行 `npm i`。
3. 运行 `npm run dev`。
4. 将 [hot-reload](https://github.com/pjeby/hot-reload) 添加到相同的 `.obsidian/plugins` 目录中，并在 Obsidian 中启用它以便于开发。

### 发布

一旦更改已经在 `main` 分支中，添加一个反映新的语义版本号的标签（不包括 `v` 前缀），并将标签推送到仓库。

例如：

```
git tag 1.0.0
git push origin 1.0.0
```

[Release.yml](./.github/workflows/release.yml) 将处理版本升级并发布一个发布到 [Releases页面](https://github.com/Ebonsignori/obsidian-at-symbol-linking/releases)。

请记得更新 [最新发布](https://github.com/Ebonsignori/obsidian-at-symbol-linking/releases) 的说明，包括任何相关的更改。

## 致谢

[Obsidian团队](https://obsidian.md/about) 为创建了一款出色的产品 :purple_heart:

实现部分借鉴了以下项目：

- [obsidian-completr](https://github.com/tth05/obsidian-completr)：用于处理建议弹出窗口的快捷键
- [auto-note-mover](https://github.com/farux/obsidian-auto-note-mover)：用于在设置中提供文件夹建议



