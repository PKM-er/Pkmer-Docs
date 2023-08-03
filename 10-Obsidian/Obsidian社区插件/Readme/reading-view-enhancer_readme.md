---
uid: 2023080322254177
title: Obsidian 插件：Reading View Enhancer
tags: ['obsidian插件', 'readme']
description: 增强阅读视图。使用箭头键折叠/展开元素。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Reading View Enhancer

> [!Note] 插件名片
> - 插件名称：Reading View Enhancer
> - 插件作者：Galacsh
> - 插件说明：增强阅读视图。使用箭头键折叠/展开元素。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Galacsh/obsidian-reading-view-enhancer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?reading-view-enhancer)

## 概述

增强阅读视图。使用箭头键折叠/展开元素。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Galacsh/obsidian-reading-view-enhancer/master/README.md)
>

---

## Readme(翻译）

下面是 [[reading-view-enhancer]] 插件的自述翻译

# 阅读视图增强插件

阅读视图增强插件是一款为 Obsidian 的阅读视图模式设计的插件，旨在提高阅读体验。它提供了几个功能，旨在使阅读视图更加方便和舒适。

## 特点

### 概述

- **键盘块导航**
  - `ArrowDown`：选择下一个块
  - `ArrowUp`：选择上一个块
- **键盘折叠/展开切换**
  - `ArrowLeft`/`ArrowRight`：切换折叠/展开
    - 📌 可折叠的标注也可以折叠/展开
- **始终可见的折叠指示器**
  - 保持所有折叠指示器可见
- **表格溢出预防**
  - 使表格可滚动以防止溢出
- **可滚动的代码块**
  - 使代码块可滚动而不是换行显示

### 键盘块导航

> ⚡️ 设置 > 阅读视图增强器 > 启用块选择器

<https://user-images.githubusercontent.com/78684419/228733812-26bfa11a-f246-4153-83ea-eed9aae39753.mov>

受到 Notion 的块导航的启发，此功能允许您通过单击来选择阅读视图中的块。选定的块将被突出显示，并且您可以使用箭头键在块之间导航。

💡 此外，还有一个“选择视图中的顶部块”命令，允许您为键盘控制分配一个热键。

如果选定的块太长，插件将自动滚动以显示块的顶部或底部，并加载尚未在 DOM 树中的相邻块。

- `ArrowDown`：选择下一个块
- `ArrowUp`：选择上一个块
- `ArrowLeft`/`ArrowRight`：折叠/展开切换

❗️ 要仅在移动设备上禁用此功能，请在设置中启用“在移动设备上禁用块选择器”选项。

什么是“块”？

在这个插件中，“块”指的是在 Markdown 文档中可以被视为独立内容单元的 HTML 元素。段落、标题、列表、表格、代码块、引用、媒体元素和提示都是块的例子。

#### 区块颜色

> ⚡️ 设置 > 阅读视图增强器 > 区块颜色

您可以为区块高亮效果设置自定义颜色。

### 始终可见的折叠指示器

> ⚡️ 设置 > 阅读视图增强器 > 始终显示折叠指示器

默认情况下，折叠指示器在悬停时才可见。

<img width="400" alt="no-indicator" src="https://user-images.githubusercontent.com/78684419/228733972-6b364496-071b-469a-a401-656b3df27311.png">

这个选项，

<img width="400" alt="turn-on-indicator" src="https://user-images.githubusercontent.com/78684419/228734050-54d19f73-35cd-4eba-ae33-8d91f7bed180.png">

使指示器始终可见。

<img width="400" alt="has-indicator" src="https://user-images.githubusercontent.com/78684419/228734081-99e58a5d-b6b2-4418-92f1-b47db403e7ae.png">

<br/>

### 防止表格溢出

> ⚡️ 设置 > 阅读视图增强器 > 防止表格溢出

<https://user-images.githubusercontent.com/78684419/228734185-aca9e6ee-711e-4929-8e10-a269a43b97f8.mov>

启用水平滚动表格以防止表格溢出。

在 Obsidian v1.1.16 中，如果表格中的单词长度超过视口的宽度，

将在整个视图上创建一个水平滚动条，

这在移动设备上可能不方便。

<br/>

### 可滚动的代码块

> ⚡️ 设置 > 阅读视图增强器 > 可滚动代码

此功能使代码块可滚动，而不是使用换行。

默认情况下，当代码过长时会进行换行。

<img width="400" alt="before-code-scroll" src="https://user-images.githubusercontent.com/78684419/228734385-2cf4650a-0559-48c8-a1ad-3229f68b40a1.png">

通过此选项，

<img width="400" alt="turn-on-code-scroll" src="https://user-images.githubusercontent.com/78684419/228734481-5ed5994c-ca63-4777-9341-8da105afcc94.png">

您可以使代码块可滚动而不是换行。

<img width="400" alt="code-scroll" src="https://user-images.githubusercontent.com/78684419/228734516-77f5446f-2669-43d5-8428-65e400e7a00d.png">

<br/>

如何手动安装？

可能有多种方法来安装这个插件。

安装完成后，

1. 进入“设置 > 社区插件 > 已安装插件”
2. 刷新列表
3. 打开“阅读视图增强器”的开关以启用插件

### 使用 Obsidian42-BRAT（推荐）

通过使用 [Obsidian42-BRAT](https://obsidian.md/plugins?id=obsidian42-brat)，您可以轻松安装和更新此插件。

1. 安装**Obsidian42-BRAT**
2. 启用 Obsidian42-BRAT
3. 进入 Obsidian42-BRAT 选项页面
4. Beta 插件列表 > `添加Beta插件`
5. 粘贴此链接 `https://github.com/Galacsh/obsidian-reading-view-enhancer`
6. 安装完成后，进入 `设置 > 社区插件 > 已安装插件`
7. 刷新列表
8. 打开“阅读视图增强器”的开关以启用插件

<br/>

使用 `curl`

在运行代码之前，请确保将 `[VAULT]` 和 `[RELEASE_VERSION]` 更改为实际值。

```shell

```

# 前往你的保险库的插件文件夹

cd [VAULT]/.obsidian/plugins

# 创建一个目录

mkdir obsidian-reading-view-enhancer

cd obsidian-reading-view-enhancer

# 下载

curl -OL <https://github.com/Galacsh/obsidian-reading-view-enhancer/releases/download/[RELEASE_VERSION>]/main.js

curl -OL <https://github.com/Galacsh/obsidian-reading-view-enhancer/releases/download/[RELEASE_VERSION>]/manifest.json

### 通过手动下载

1. 从最新的 [发布页面](https://github.com/Galacsh/obsidian-reading-view-enhancer/releases) 下载以下文件：
   - `main.js`
   - `manifest.json`
2. 在 `.obsidian/plugins` 目录下创建一个名为 `obsidian-reading-view-enhancer` 的文件夹
3. 将文件移动到你的 Vault 的 `.obsidian/plugins/obsidian-reading-view-enhancer` 文件夹中



