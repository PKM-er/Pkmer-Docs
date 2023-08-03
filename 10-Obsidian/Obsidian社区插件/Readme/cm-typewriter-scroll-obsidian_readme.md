---
uid: 2023080322285176
title: Obsidian 插件：【Readme】Typewriter Scroll
tags: ['编辑工具', '界面相关', 'obsidian插件', 'readme']
description: 为笔记编写，增加打字机滚动风格，在输入过程中，输入内容会始终保持编辑器居中的位置。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Typewriter Scroll

> [!Note] 插件名片
> - 插件名称：Typewriter Scroll
> - 插件作者：death_au
> - 插件说明：为笔记编写，增加打字机滚动风格，在输入过程中，输入内容会始终保持编辑器居中的位置。
> - 插件分类：['编辑工具', '界面相关', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/deathau/cm-typewriter-scroll-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cm-typewriter-scroll-obsidian)

## 概述

为笔记编写，增加打字机滚动风格，在输入过程中，输入内容会始终保持编辑器居中的位置。

![Typewriter Scroll](https://cdn.pkmer.cn/covers/cm-typewriter-scroll-obsidian.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/deathau/cm-typewriter-scroll-obsidian/main/README.md)
> 

---

## Readme(翻译）

下面是 [[cm-typewriter-scroll-obsidian]] 插件的自述翻译


# 打字机滚动 Obsidian 插件
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/deathau/cm-typewriter-scroll-obsidian?style=for-the-badge&sort=semver)](https://github.com/deathau/cm-typewriter-scroll-obsidian/releases/latest)
![GitHub All Releases](https://img.shields.io/github/downloads/deathau/cm-typewriter-scroll-obsidian/total?style=for-the-badge)

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，可以启用打字机风格的滚动，保持编辑器中心视图。

![截图](https://github.com/deathau/cm-typewriter-scroll-obsidian/raw/main/screenshot.gif)

### 兼容性

自定义插件仅适用于 Obsidian v0.9.7+。

此存储库的当前 API 目标为 Obsidian **v0.10.0**。

### 注意事项
目前这一切都是非常实验性的，所以某些部分可能无法正常工作等。

安装

从Obsidian v0.9.8开始，您可以通过以下步骤在Obsidian中激活此插件：
- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索此插件
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

您可以按照相同的步骤来更新插件。

### 来自GitHub
- 从GitHub存储库的Releases部分下载最新版本
- 从zip文件中提取插件文件夹到您的vault的插件文件夹：`<vault>/.obsidian/plugins/`  
注意：在某些机器上，`.obsidian`文件夹可能是隐藏的。在MacOS上，您可以按`Command+Shift+Dot`来在Finder中显示该文件夹。
- 重新加载Obsidian
- 如果提示安全模式，您可以禁用安全模式并启用插件。
否则，请前往设置，第三方插件，确保安全模式关闭并从那里启用插件。

## 安全性
> 第三方插件可以访问您计算机上的文件，连接到互联网，甚至安装其他程序。

该插件的源代码可在GitHub上获取，供您自行审查，但目前将插件安装到Obsidian中是一种信任问题。

我在这里向您保证，我不会采集您的数据，也不会向互联网发送信息或以其他方式对您的系统进行任何不正当操作。然而，请注意，我*有可能*这样做，您只能相信我的话。

该插件包含从[此存储库](https://github.com/azu/codemirror-typewriter-scrolling/blob/b0ac076d72c9445c96182de87d974de2e8cc56e2/typewriter-scrolling.js)复制的代码，我已对其进行了修改以适应该插件。

## 开发

该项目使用Typescript提供类型检查和文档。  
该仓库依赖于最新的[插件API](https://github.com/obsidianmd/obsidian-api)，以Typescript定义格式提供，其中包含了描述其功能的TSDoc注释。

**注意：** Obsidian API仍处于早期alpha版本，随时可能发生变化！

如果您想要为开发做出贡献和/或自定义它以适应您自己的调整，您可以执行以下操作：
- 克隆该仓库。
- 运行`npm i`或`yarn`安装依赖项。
- 运行`npm run build`进行编译。
- 将`manifest.json`、`main.js`和`styles.css`复制到插件文件夹的子文件夹中（例如，`<vault>/.obsidian/plugins/<plugin-name>/`）。
- 重新加载Obsidian以查看更改。

或者，您可以直接将仓库克隆到插件文件夹中，一旦安装了依赖项，使用`npm run dev`以启动监视模式下的编译。  
您可能需要重新加载Obsidian（`ctrl+R`）以查看更改。

定价
咦？这是我为了好玩而制作的开源插件。它完全免费。
然而，如果你非常喜欢它，非要给我钱的话，可以通过以下方式向我投币：

[![GitHub赞助商](https://img.shields.io/github/sponsors/deathau?style=social)](https://github.com/sponsors/deathau)
[![Paypal](https://img.shields.io/badge/paypal-deathau-yellow?style=social&logo=paypal)](https://paypal.me/deathau)

# 版本历史

## 0.2.2
- 添加了一个设置，可以调整打字机模式的偏移量（更靠近页面的顶部或底部）。
- 修复了一个bug，防止在不重新加载Obsidian的情况下禁用打字机模式。

## 0.2.1
- 在实时预览中添加了填充以使顶部居中

## 0.2.0
- 支持CM6（实时预览）！

## 0.1.1
- 修改了滚动功能，使其在鼠标选择时不起作用。
  - 相反，它只在按下键盘上的'up'、'down'、'left'和'right'键时起作用（以及任何输入编辑）。
- 同样，更改了用于计算的光标位置，以便可以看到shift+箭头选择。
- 修复了意外的行跳动。

## 0.1.0
- 更新了API，因此切换开关应该可以正常工作。

## 0.0.2
- 添加了基本的“禅模式”，可以使编辑器中的非活动行变暗
  - “活动行”在这个阶段将包括整个段落
  - 可以在设置和命令中切换
- 修复了一些关于禁用/启用的小问题

0.0.1
初始版本发布



