---
uid: 20231026111420
title: Obsidian 插件：【Readme】Red Pen
tags: ['obsidian插件', 'readme']
description: 红笔作为你写作的校对者。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Red Pen

> [!Note] 插件名片
> - 插件名称：Red Pen
> - 插件作者：Lucas Melin
> - 插件说明：红笔作为你写作的校对者。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lucasmelin/red-pen)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?red-pen)

## 概述

红笔作为你写作的校对者。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lucasmelin/red-pen/main/README.md)

---

## Readme(翻译）

下面是 [[red-pen]] 插件的自述翻译

<h1 align="center">红笔</h1>

<p align="center">
红笔是你写作的校对工具。
</br>
它会突出显示可能需要简化的短语，识别，，等等。
</br>
</br>
<img src="./docs/redpenlogo.png" alt="红笔">
</br>
红笔是基于的插件，用于笔记应用。
</br>
</br>
<a href="https://builtwithnix.org">
<img src="https://builtwithnix.org/badge.svg" alt="使用nix构建">
</a>

</p>

## 开发

该项目使用 TypeScript 提供类型检查和文档。

该仓库依赖于 TypeScript 定义格式中的最新插件 API（`obsidian.d.ts`），其中包含了描述其功能的 TSDoc 注释。

### NodeJS 指令

[安装NodeJS](https://nodejs.org/en).

导航到插件目录。

```bash
cd red-pen
```

安装项目依赖。

```bash
npm install
```

编译源代码。以下命令在终端中持续运行，并在修改源代码时重新构建插件。

```bash
npm run dev
```

### Nix 指令

[安装Nix](https://github.com/DeterminateSystems/nix-installer) 以及 [`direnv`](https://direnv.net/)。

导航到插件目录。

```bash
cd red-pen
```

运行 `nix build` 来编译插件。

然后可以在 [`./result/lib/node_modules/red-pen`](./result/lib/node_modules/red-pen) 目录中找到生成的 `main.js`、`styles.css` 和 `manifest.json` 文件。

手动安装插件

将 `main.js`、`styles.css` 和 `manifest.json` 复制到 Obsidian Vault `<VaultFolder>/.obsidian/plugins/red-pen/` 目录下。
