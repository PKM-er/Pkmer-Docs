---
uid: 20230803231105
title: Obsidian 插件：ini Editor
tags: ['编辑器', 'obsidian插件', 'readme']
description: 在Obsidian中编辑ini文件。需要至少 0.10版本以上
author: AI
type: readme
draft: false
editable: false
modified: 20230803232551
---

# Obsidian 插件：ini Editor

> [!Note] 插件名片
> - 插件名称：ini Editor
> - 插件作者：death_au
> - 插件说明：在 Obsidian 中编辑 ini 文件。需要至少 0.10 版本以上
> - 插件分类：[' 编辑器 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/deathau/ini-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ini-obsidian)

## 概述

在 Obsidian 中编辑 ini 文件。需要至少 0.10 版本以上

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/deathau/ini-obsidian/main/README.md)
>

---

## Readme(翻译）

下面是 [[ini-obsidian]] 插件的自述翻译

# .ini 编辑器 Obsidian 插件

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，可以编辑.ini 文件。

### 兼容性

该仓库的当前 API 目标是 Obsidian **v0.10.11**。
由于仅在 0.10.11 版本中公开使用的 API，因此在低于该版本的版本中无法工作。

### 注意事项

目前，这只是一个概念验证。请预期会有错误和数据丢失。这只是为了向自己证明我能够处理自定义文件，然后再转向更有趣的文件（例如 CSV）的未来。

安装

### 来自 GitHub

- 下载最新的主分支
- 将 zip 文件中的文件提取到您的 vault 的插件文件夹中：`<vault>/.obsidian/plugins/ini-obsidian`
注意：在某些机器上，`.obsidian` 文件夹可能是隐藏的。在 MacOS 上，您可以按 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。
- 重新加载 Obsidian
- 如果提示安全模式，您可以禁用安全模式并启用插件。
否则，请前往设置，第三方插件，确保安全模式关闭，并从那里启用插件。

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

0.0.1

初始版本！

- 您可以打开和编辑 ini 文件
- 有错误（由于某种原因，文本直到您第一次点击它后才会出现）



