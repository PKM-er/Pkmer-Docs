---
uid: 2023120522242926
title: Obsidian 插件：【Readme】Better Canvas Lock
tags: ['obsidian插件', 'readme']
description: 增强Canvas中的只读模式，完全锁定滚动、缩放和拖放功能！
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Better Canvas Lock

> [!Note] 插件名片
> - 插件名称：Better Canvas Lock
> - 插件作者：Mara-Li
> - 插件说明：增强 Canvas 中的只读模式，完全锁定滚动、缩放和拖放功能！
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lisandra-dev/obsidian-better-canvas-lock)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?better-canvas-lock)

## 概述

增强 Canvas 中的只读模式，完全锁定滚动、缩放和拖放功能！

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Lisandra-dev/obsidian-better-canvas-lock/master/README.md)
>

---

## Readme(翻译）

下面是 [[better-canvas-lock]] 插件的自述翻译

更好的画布锁定

Obsidian 的实验性插件，可以锁定画布的“视图”。您可以禁用以下功能：

- 缩放
- 选择画布
- 拖放画布
- 滚动

它将使用 `monkey-around` 对锁定功能进行修补，因此您只需启用插件即可使其工作。此外，画布会在 `active-leaf-change` 上被检测到。

您还可以在控制台中启用/禁用日志记录。请注意，日志会在控制台中产生大量信息，并且您将看到重复的错误。

> [!NOTE]
> 为了某种“有用性”，当焦点在画布卡片上时，拖动/滚动功能是启用的，这样您就可以自由移动画布并调整视图（SHIFT+2）以适应特定卡片的需要。
> 要再次禁用拖动功能，只需点击其他地方（或按下 Escape 键）离开画布卡片即可。

<https://github.com/Lisandra-dev/obsidian-better-canvas-lock/assets/30244939/c5359f72-2234-4959-a094-87c7c51a3372>

## 📥 安装

- [ ] 从 Obsidian 的社区插件中安装
- [x] 使用 BRAT 和 `https://github.com/lisandra-dev/obsidian-better-canvas-lock`
- [x] 从发布页面中安装：
  - 下载最新版本
  - 解压缩 `better-canvas-lock.zip` 到 `.obsidian/plugins/` 路径下
  - 在 Obsidian 设置中重新加载插件
  - 启用插件

## 🤖 开发中

要对此插件进行更改，请首先确保已安装所需的依赖项。

```
pnpm install
```

要启动带有启用的模式的插件构建，请运行以下命令：

```
pnpm run dev
```

> **注意**
> 如果您尚未安装热重载插件，系统将提示您安装。在热重载开始之前，您需要在 Obsidian vault 中启用该插件。您可能需要刷新插件列表才能看到它。
> 要开始发布构建，请运行以下命令：

```
pnpm run build
```

> **注意**
> 您可以使用 `.env` 文件，并添加键 `VAULT_DEV` 来指定 Obsidian（开发）vault 的路径。这将允许您在不每次指定 vault 路径的情况下测试您的插件。

### 📤 导出

您可以使用 `pnpm run export` 命令将插件导出到 Obsidian 主库。为此，您需要具有以下内容的 `.env` 文件：

```json
VAULT="path/to/your/obsidian/vault"
VAULT_DEV="path/to/your/dev/vault"
```

### 🎼 语言

- [x] 英语
- [x] 法语

要添加翻译：

- Fork 该仓库
- 在 `src/i18n/locales` 文件夹中使用语言名称（例如 `fr.json`）添加翻译
- 将 [`en.json`](./src/i18n/locales/en.json) 文件的内容复制到新文件中
- 翻译内容
- 创建一个 pull request

---

<sub>该插件由 生成</sub>
