---
uid: 20240312193744
title: Obsidian 插件：【Readme】Plugin Reloader
tags: ['obsidian插件', 'readme']
description: 手动重新加载插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Plugin Reloader

> [!Note] 插件名片
> - 插件名称：Plugin Reloader
> - 插件作者：Benature
> - 插件说明：手动重新加载插件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Benature/obsidian-plugin-reloader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plugin-reloader)

## 概述

手动重新加载插件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Benature/obsidian-plugin-reloader/master/README.md)

---

## Readme(翻译）

下面是 [[plugin-reloader]] 插件的自述翻译

# 插件重新加载器

在命令面板或热键上手动重新加载插件，或者您可以通过 [Commander](https://obsidian.md/plugins?id=cmdr) 将命令绑定到功能区。

用例：

- 重新加载插件以强制更新或其他目的。
  - *例如，在 [Toggl Track](https://github.com/mcndt/obsidian-toggl-integration) 支持手动重新加载按钮之前的解决方法（[#139](https://github.com/mcndt/obsidian-toggl-integration/issues/139#issuecomment-1959183577))*
- 插件的首次初始化需要重新加载。
- 一些插件需要重新加载以确保新配置生效。

## 安装

### 从插件社区安装

[点击安装](https://obsidian.md/plugins?id=plugin-reloader)，或者：

- 打开 Obsidian 并转到 设置 > 社区插件
- 搜索 `Plugin Reloader`
- 点击 `安装`
- 首先安装 [BRAT插件](https://obsidian.md/plugins?id=obsidian42-brat)：
- 在 BRAT 插件中，点击 `Add Beta plugin`
- 输入<https://github.com/Benature/obsidian-plugin-reloader>
- 在 `Community plugins` 中启用 `Plugin Reloader`
- 在 [Releases](https://github.com/Benature/obsidian-plugin-reloader/releases/latest) 中下载最新版本
- 将 `main.js`、`manifest.json` 复制到您的 vault `VaultFolder/.obsidian/plugins/metadata-icon/` 中
- 在 `Community plugins` 中重新加载插件并启用 `Plugin Reloader`

## 如何构建

- `git clone https://github.com/Benature/obsidian-plugin-reloader` 克隆这个仓库。
- `npm i` 安装依赖
- `npm run dev` 启动监视模式下的编译。
- `npm run build` 构建生产环境。

## 支持

如果您发现这个插件很有用并希望支持它的开发，您可以通过 [给我买杯咖啡 ☕️](https://www.buymeacoffee.com/benature)、微信、支付宝或 [AiFaDian](https://afdian.net/a/Benature-K) 来赞助我。任何金额都受欢迎，谢谢！

<p align="center">
<img src="https://s2.loli.net/2024/01/30/jQ9fTSyBxvXRoOM.png" width="500px">
</p>



