---
uid: 2023080322191054
title: Obsidian 插件：Gist
tags: ['第三方工具集成', 'obsidian插件', 'readme']
description: 这是一个用于显示GitHub Gist的插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Gist

> [!Note] 插件名片
> - 插件名称：Gist
> - 插件作者：Jun Lin
> - 插件说明：这是一个用于显示 GitHub Gist 的插件。
> - 插件分类：[' 第三方工具集成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/linjunpop/obsidian-gist)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-gist)

## 概述

这是一个用于显示 GitHub Gist 的插件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/linjunpop/obsidian-gist/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-gist]] 插件的自述翻译

# Obsidian GitHub Gist 插件

![GitHub release badge](https://badgen.net/github/release/linjunpop/obsidian-gist)

这是一个在 [Obsidian](https://obsidian.md) 中渲染 [GitHub Gist](https://gist.github.com) 的插件。

## 示例

`gist` 标记的代码块将被渲染为嵌入的 Gist 视图。

1. 只使用 Gist ID：

````markdown
```gist
30efbfd874fb1a16176d3f638a1e712a
```
````

1. 使用用户名和 Gist ID：

````markdown
```gist
linjunpop/30efbfd874fb1a16176d3f638a1e712a
```
````

1. 指定只显示 Gist 中的单个文件：

````markdown
```gist
linjunpop/30efbfd874fb1a16176d3f638a1e712a#math.ex
30efbfd874fb1a16176d3f638a1e712a#concat.ex
```
````

![示例图片](https://user-images.githubusercontent.com/214616/120093926-f90eb580-c14f-11eb-94e3-a414c7528aef.png)

## 安装

### 从 Obsidian 应用程序安装

在 __设置__ -> __社区插件__ 中搜索 "Gist"，您可以找到并安装此插件。

您可以查看官方指南 <https://help.obsidian.md/Advanced+topics/Third-party+plugins#Discover+and+install+community+plugins。>

### 手动安装插件

找到最新的发布版本：<https://github.com/linjunpop/obsidian-gist/releases，然后将> `main.js`、`manifest.json` 和 `styles.css` 复制到你的 vault 的 `.obsidian/plugins/obsidian-gist` 目录下（例如 `VaultFolder/.obsidian/plugins/obsidian-gist/`）。

## 开发

### 在本地开发插件

- 将此存储库克隆到本地开发文件夹。为了方便起见，您可以将此文件夹放在您的 `.obsidian/plugins/obsidian-gist` 文件夹中。
- 安装 NodeJS，然后在存储库文件夹下的命令行中运行 `npm i`。
- 运行 `npm run dev` 将 `main.ts` 编译为 `main.js`。
- 对 `main.ts` 进行更改（或创建新的 `.ts` 文件）。这些更改应自动编译到 `main.js` 中。
- 重新加载 Obsidian 以加载插件的新版本。
- 在设置窗口中启用插件。

### 发布新版本

- 使用新的版本号（例如 `1.0.1`）更新 `manifest.json` 文件，并指定最新版本所需的最低 Obsidian 版本。
- 在 `versions.json` 文件中更新 `"new-plugin-version": "minimum-obsidian-version"`，以便旧版本的 Obsidian 可以下载与其兼容的旧版本插件。
- 使用新的版本号作为“标签版本”创建新的 GitHub 发布。请使用精确的版本号，不要包含前缀 `v`。
- 将 `manifest.json`、`main.js` 和 `styles.css` 文件作为二进制附件上传。
- 发布该版本。



