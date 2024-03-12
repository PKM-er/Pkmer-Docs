---
uid: 20240312193744
title: Obsidian 插件：【Readme】Line Commands
tags: ['obsidian插件', 'readme']
description: Adds commands to quickly select, copy, cut, and paste lines under the selection or cursor.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Line Commands

> [!Note] 插件名片
> - 插件名称：Line Commands
> - 插件作者：charliecm
> - 插件说明：Adds commands to quickly select, copy, cut, and paste lines under the selection or cursor.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/charliecm/obsidian-line-commands)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?line-commands)

## 概述

Adds commands to quickly select, copy, cut, and paste lines under the selection or cursor.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/charliecm/obsidian-line-commands/main/README.md)

---

## Readme(翻译）

下面是 [[line-commands]] 插件的自述翻译

【机翻】

# Obsidian Line Tools

一个 [Obsidian](https://obsidian.md) 插件，添加了以下命令：

- **选择行：** 选择选择或光标下的行。
- **复制行：** 复制选择或光标下的行。
- **剪切行：** 剪切选择或光标下的行。
- **粘贴到行前：** 在选择或光标前的行中粘贴剪贴板文本。
- **粘贴到行后：** 在选择或光标后的行中粘贴剪贴板文本。

<img width="565" alt="上述每个命令的图标" src="https://raw.githubusercontent.com/charliecm/obsidian-line-commands/main/commands.png">

![演示视频](https://cdn.pkmer.cn/covers/line-commands_1_0.gif!pkmer)

我编写了这个插件，因为我想要一种快速在移动设备上剪切一行的方式。然而，默认的剪切命令在移动设备上的行为与桌面上的不同（当没有选择时剪切光标下的整行）。因此，“剪切行”命令使我能够更轻松地快速移动行，而无需用手指准确地选择行。

您可以将这些命令添加到您的**移动设备工具栏**中，以便轻松访问它们。

## 如何安装

从 Obsidian 内部开始...

1. 转到设置 → **社区插件**。
2. 禁用**安全模式**。
3. 点击**浏览**，搜索**Line Commands**，然后点击**安装**。
4. 点击切换按钮以启用插件。

对于手动安装，请下载此存储库并复制 `main.js` 和 `manifest.json` 到您的保险库：`VaultFolder/.obsidian/plugins/obsidian-line-commands/`。

## 开发

1. 克隆这个仓库。
2. 运行 `yarn` 安装依赖。
3. 运行 `yarn dev` 以启动监视模式下的编译。
4. 运行 `bash install-built.sh /path/to/your/vault -d` 来为快速开发在你的保险库中创建构建文件的符号链接。

## 发布

1. 运行 `yarn build`。
2. 运行 `npm version [patch/minor/major]` 来提升 `manifest.json` 和 `versions.json` 中的版本号。
3. 在 `CHANGELOG.md` 中添加更改内容。
4. 添加一个新的版本标签并推送它。

    ```
    git tag -a 1.0.1 -m "1.0.1"
    git push origin 1.0.1
    ```

5. 进入 GitHub 的“Releases”页面并编辑最新发布版本（由 GitHub Actions 创建）。将更改日志文本插入描述中，并确保附上 `main.js` 和 `manifest.json`。
6. 点击“发布发布版本”。

## 支持

如果您真的喜欢这个插件，并希望支持它的开发，请考虑 [给我买杯咖啡](https://www.buymeacoffee.com/charliecm) 🙂 谢谢！
