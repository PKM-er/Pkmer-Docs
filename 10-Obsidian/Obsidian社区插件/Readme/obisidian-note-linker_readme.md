---
uid: 2023080322230197
title: Obsidian 插件：Note Linker
tags: ['obsidian插件', 'readme']
description: 自动发现并在笔记之间创建新的链接。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Note Linker

> [!Note] 插件名片
> - 插件名称：Note Linker
> - 插件作者：Alexander Weichart
> - 插件说明：自动发现并在笔记之间创建新的链接。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/AlexW00/obsidian-note-linker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obisidian-note-linker)

## 概述

自动发现并在笔记之间创建新的链接。

![Note Linker](https://cdn.pkmer.cn/covers/obisidian-note-linker_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/AlexW00/obsidian-note-linker/master/README.md)
>

---

## Readme(翻译）

下面是 [[obisidian-note-linker]] 插件的自述翻译

## 🔗 Obsidian 笔记链接器

一个用于在 Obsidian 中自动创建笔记之间新链接的插件。

![ezgif com-gif-maker(4)](https://user-images.githubusercontent.com/55558407/187985324-c13860b0-42e0-41d8-9498-8df936948dfd.gif)

### 🤨 它是如何工作的？

该插件会检查存储库中的每个笔记，以查找对其他笔记名称（或其别名）的引用。

如果找到引用，它将被添加到一个列表中。然后将该列表显示给用户，用户可以选择要链接的笔记。

免责声明：

目前的版本仅由我自己和少数测试人员进行了测试。目前没有已知的错误。然而，我建议您在使用此插件进行任何更改之前备份您的保险库，因为该插件尚未经过足够多的人员测试。

### ⬇️ 安装

您可以通过从 Obsidian 插件商店下载，或通过 [此直接链接](https://obsidian.md/plugins?id=obisidian-note-linker) 安装此插件。

### 👨‍💻 开发

该插件使用 Rust（编译为 WebAssembly）和 TypeScript 编写。

有关更多信息，请查看 [开发文档](docs/dev-docs.md)。

### 📃 鸣谢

基于 [trashhalo](https://github.com/trashhalo/obsidian-rust-plugin) 的 Obsidian Rust 插件模板创建。
