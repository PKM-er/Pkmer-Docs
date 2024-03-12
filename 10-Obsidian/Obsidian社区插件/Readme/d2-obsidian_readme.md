---
uid: 20230817224052
title: Obsidian 插件：D2
tags: ['图表生成', 'obsidian插件', 'readme']
description: Obsidian官方的D2插件。D2是一种现代图表脚本语言，可将文本转换为图表。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：D2

> [!Note] 插件名片
> - 插件名称：D2
> - 插件作者：Terrastruct
> - 插件说明：Obsidian 官方的 D2 插件。D2 是一种现代图表脚本语言，可将文本转换为图表。
> - 插件分类：[' 图表生成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/terrastruct/d2-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?d2-obsidian)

## 概述

Obsidian 官方的 D2 插件。D2 是一种现代图表脚本语言，可将文本转换为图表。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/terrastruct/d2-obsidian/master/README.md)

---

## Readme(翻译）

下面是 [[d2-obsidian]] 插件的自述翻译

<div align="center">
  <img src="./docs/assets/banner.png" alt="D2" />
  <h2>
    D2 Obsidian 插件
  </h2>

D2 是一种将文本转换为图表的现代图表脚本语言。D2 的源代码以及安装说明和所有其他信息都可以在以下网址找到：

[https://github.com/terrastruct/d2](https://github.com/terrastruct/d2)。

[![ci](https://github.com/terrastruct/d2-obsidian/actions/workflows/ci.yml/badge.svg)](https://github.com/terrastruct/d2-obsidian/actions/workflows/ci.yml)

[![ci](https://github.com/terrastruct/d2-obsidian/actions/workflows/daily.yml/badge.svg)](https://github.com/terrastruct/d2-obsidian/actions/workflows/daily.yml)

[![license](https://img.shields.io/github/license/terrastruct/d2-obsidian?color=9cf)](./LICENSE.txt)

[![discord](https://img.shields.io/discord/1039184639652265985?label=discord)](https://discord.gg/NF6X8K4eDq)

<https://user-images.githubusercontent.com/6413609/205414613-5b2559f1-0645-4432-bb7b-d980de527201.mp4>

</div>

## 安装

设置 > 社区插件 > 浏览 > 搜索 "D2"

**重要提示**：当前此插件需要安装 [D2](https://github.com/terrastruct/d2) 才能正常工作。我们将在以后引入远程 API 作为一个选项，但目前此插件调用的是您本地安装的 D2。

## 配置

- `布局引擎`：D2 支持多个布局引擎，这会显著影响您的图表外观。
- `主题ID`：有关可用主题的列表，请访问 [D2存储库](https://github.com/terrastruct/d2/tree/master/d2themes)。
- `填充`：渲染的图表周围的像素数。
- `草图模式`：将图表渲染成手绘的样子。
- `容器高度`：图表的最大渲染高度（需要 d2 v0.2.2 及更高版本）。
- `去抖`：在更改后等待的毫秒数以刷新图表（最小 100）。
- `路径`：自定义到 `d2` 的路径（可选）。我们会检查 D2 可能安装的常见位置，以及您的系统路径。但是，您的操作系统或设置可能需要您手动输入到 `d2` 的路径。要这样做，请在终端中键入 `where d2`，然后将路径中的 `/d2` 之前的所有内容复制并粘贴到此配置中。

## 使用方法

创建一个带有 `d2` 作为语言标签的围栏代码块：

```d2
Hello -> World
```

如何在本地运行此插件

- 克隆此存储库。
- 运行 `yarn` 安装依赖项。
- 运行 `yarn run dev` 以启动编译并进入监视模式。
- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到您的 vault `[VaultFolder]/.obsidian/plugins/d2/`。

常见问题解答

- 我已经安装了 D2，但是遇到了“D2 编译错误：找不到 d2 命令”的问题
  - Obsidian 插件可能无法找到您的 D2 安装位置。在命令行中执行 `where d2` 命令，获取 D2 安装路径，然后将该路径减去可执行文件本身的部分复制到“Path”插件设置中（例如，如果路径是 `/usr/local/bin/d2`，则您需要复制 `/usr/local/bin`）。
- 我有一个问题或需要帮助。
  - 获取帮助的最佳方式是在 [D2 Discord](https://discord.gg/NF6X8K4eDq) 上提问。
- 我想要做贡献。
  - 我们欢迎贡献！请从现有的问题中选择一个，或者如果没有问题，请提一个新的问题。
- 我有一个功能请求、建议或者错误报告。
  - 请在 Github 上开启一个 Issue。如果是 D2 相关的，请在 [D2仓库](https://github.com/terrastruct/d2) 中开启。如果是针对此插件的，请在此处开启。
- 我有一个私人问题。
  - 请发送邮件至 [hi@d2lang.com](hi@d2lang.com)。



