---
uid: 2023080322163231
title: Obsidian 插件：CookLang Editor
tags: ['obsidian插件', 'readme']
description: 在Obsidian中编辑和显示CookLang食谱
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：CookLang Editor

> [!Note] 插件名片
> - 插件名称：CookLang Editor
> - 插件作者：death_au
> - 插件说明：在 Obsidian 中编辑和显示 CookLang 食谱
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/deathau/cooklang-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cooklang-obsidian)

## 概述

在 Obsidian 中编辑和显示 CookLang 食谱

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/deathau/cooklang-obsidian/main/README.md)

---

## Readme(翻译）

下面是 [[cooklang-obsidian]] 插件的自述翻译

# CookLang 编辑器 Obsidian 插件

[![GitHub 发布版本（最新语义化版本）](https://img.shields.io/github/v/release/deathau/cooklang-obsidian?style=for-the-badge&sort=semver)](https://github.com/deathau/cooklang-obsidian/releases/latest)

![GitHub 所有版本下载量](https://img.shields.io/github/downloads/deathau/cooklang-obsidian/total?style=for-the-badge)

这是一个为 [Obsidian](https://obsidian.md) 添加对 [CookLang](https://cooklang.org) 的支持的插件。

![截图](https://github.com/deathau/cooklang-obsidian/raw/main/screenshot.png)

## 安装

- 该插件已经提交到社区插件仓库。您可以在 Obsidian 的“Communinty Plugins”中安装它。
- 您可以通过将文件检出到 `<your vault>/.obsidian/plugins/cooklang-obsidian`，然后运行 `npm install` 和 `npm run build` 来手动构建和安装插件。

## 安全性

> 第三方插件可以访问您计算机上的文件，连接到互联网，甚至安装其他程序。

该插件的源代码可在 GitHub 上获取，供您自行审查，但将插件安装到 Obsidian 中是一种信任问题。

我在这里向您保证，我不会采集您的数据，也不会向互联网发送信息或以其他方式对您的系统进行任何不正当操作。然而，请注意，我*有可能*这样做，如果您不自行审查代码，那么您只能相信我的话。

支持我

这是我为了好玩而制作的开源插件。它完全免费。

然而，如果你非常喜欢它，非要给我寄钱的话，可以通过以下方式向我投币：

[![GitHub赞助商](https://img.shields.io/github/sponsors/deathau?style=social)](https://github.com/sponsors/deathau)

[![Paypal](https://img.shields.io/badge/paypal-deathau-yellow?style=social&logo=paypal)](https://paypal.me/deathau)

# 路线图

这是我理想中希望在这个插件中包含的尚不可用的功能：

- [x] 改进编辑器/预览模式按钮，使其更像 Markdown
- [x] 添加将 `.md` 转换为 `.cook` 的命令
    - [ ] 也许还需要 `cook` 代码块支持？
- [x] 包含在方法中内联显示数量的选项
    - [ ] 在食材和方法之间添加链接的选项？
- [x] 包含显示食材列表、工具列表和时间的选项
    - [x] （计算总时间）
- [ ] 单位转换（公制<->英制）
- [ ] 缩放（检查规格）
- [ ] 购物清单和 `.conf` 文件支持（需要设计）
- [ ] 更好的元数据支持。
    - [ ] 使源链接可点击。
    - [ ] 支持 Obsidian 标签。
- [ ] （可能，待反馈）Markdown 格式支持。

# 版本历史

## 0.3.0

- 将 CookLang 解析代码分离为自己的库，并根据最新的 CookLang 规范进行更新（因此现在可以正确支持命名定时器等功能）
- 增加了更多显示定时器的选项
- 增加了点击定时器并显示倒计时的功能
    - 在定时器运行时和完成时，还可以选择播放声音
    - 这个功能还比较新，可能需要更多的测试

## 0.2.0

- 根据规范更改了注释语法

## 0.1.1

- **修复：** 现在关闭内联测量实际上会删除所有测量。
- **新增：** 添加了命令以添加新的配方文件。

## 0.1.0

- 改进编辑器/预览模式按钮，使其更像 Markdown 视图
    - 甚至可以使用 Ctrl/Cmd 点击在新窗格中打开！
- 包括显示食材清单、工具清单和时间的选项
- 包括显示方法中的数量的选项

## 0.0.4

- 将 `.md` 文件转换为 `.cook` 文件的命令

## 0.0.3

- 修复了一个问题，如果没有图像存在，会导致预览模式无法工作

## 0.0.1

初始版本！

- 您可以打开和编辑 `.cook` 文件
- 有一个带有语法高亮的编辑视图
- 还有一个预览视图，顶部显示食材和数量，就像传统的食谱一样，并对步骤进行编号。
- 如果提供了图片（根据 [CookLang 约定](https://cooklang.org/docs/spec/#adding-pictures) ），它们也会被显示出来。



