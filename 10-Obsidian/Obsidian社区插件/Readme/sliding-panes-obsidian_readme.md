---
uid: 2023080322270351
title: Obsidian 插件：Sliding Panes (Andy Matuschak Mode)
tags: ['界面相关', 'obsidian插件', 'readme']
description: 支持笔记面板的堆叠模式。该模式官方已经支持。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Sliding Panes (Andy Matuschak Mode)

> [!Note] 插件名片
> - 插件名称：Sliding Panes (Andy Matuschak Mode)
> - 插件作者：death_au
> - 插件说明：支持笔记面板的堆叠模式。该模式官方已经支持。
> - 插件分类：[' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/deathau/sliding-panes-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?sliding-panes-obsidian)

## 概述

支持笔记面板的堆叠模式。该模式官方已经支持。

![Sliding Panes (Andy Matuschak Mode)](https://cdn.pkmer.cn/covers/sliding-panes-obsidian_new.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/deathau/sliding-panes-obsidian/master/README.md)
>

---

## Readme(翻译）

下面是 [[sliding-panes-obsidian]] 插件的自述翻译

滑动窗格（Andy Matuschak 模式）是 Obsidian 插件。

此插件改变了主工作区中窗格的处理方式，灵感来自于 [Andy Matuschak的笔记](https://notes.andymatuschak.org/) 的用户界面。

与将工作区缩小以适应面板不同，面板将保持固定宽度（但可调整大小）并堆叠，以便您可以在它们之间滚动。注释标题会旋转并添加到面板的左侧，就像脊柱一样（可选），并且会随着滚动而堆叠（也可选），方便在它们之间进行导航。

（注意：要在 Obsidian 中在新窗格中打开链接，请按住 ctrl/cmd 并单击它们）

### 其他功能

- 注意头部可以在左侧和右侧堆叠。
- 更改活动窗格会将该窗格滚动到视图中。
- 可以切换而无需将 CSS 复制到您的主题中。
- 可切换的功能，例如旋转的标题和堆叠。

### 设置

- **切换滑动窗格** - 全局开启或关闭滑动窗格 *(也可通过命令/热键实现)*
- **自动调整叶子宽度** - 如果开启，窗格的宽度将填充可用空间 *(也可通过命令/热键实现)*
- **叶子宽度** - 单个窗格的默认宽度
- **切换旋转标题** - 将标题旋转以用作脊柱 *(也可通过命令/热键实现)*
- **交换旋转标题方向** - 交换旋转标题的方向 *(也可通过命令/热键实现)*
- **切换堆叠** - 窗格将堆叠在左侧和右侧 *(也可通过命令/热键实现)*
- **脊柱宽度** - 用于堆叠的旋转标题的宽度（或间隙）

### 兼容性

自定义插件仅适用于 Obsidian v0.9.7+。

此存储库的当前 API 目标为 Obsidian **v0.10.9**。

### 注意事项

目前这一切都是非常实验性的，所以某些部分可能无法正常工作。

如果您加载了大量文档，它仍然会变得有点慢，所以请尽量不要一次加载太多文档。

安装

从 Obsidian v0.9.8 开始，您可以通过以下步骤在 Obsidian 中激活此插件：

- 打开设置 > 第三方插件
- 确保安全模式处于关闭状态
- 点击浏览社区插件
- 搜索此插件
- 点击安装
- 安装完成后，关闭社区插件窗口并激活新安装的插件

您可以按照相同的步骤来更新插件。

### 来自 GitHub

- 从 GitHub 存储库的 Releases 部分下载最新版本
- 从 zip 文件中提取插件文件夹到您的 vault 的插件文件夹：`<vault>/.obsidian/plugins/`
注意：在某些机器上，`.obsidian` 文件夹可能是隐藏的。在 MacOS 上，您可以按 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。
- 重新加载 Obsidian
- 如果提示安全模式，您可以禁用安全模式并启用插件。
否则，请前往设置，第三方插件，确保安全模式关闭并从那里启用插件。

## 安全性

> 第三方插件可以访问您计算机上的文件，连接到互联网，甚至安装其他程序。

该插件的源代码可在 GitHub 上获取，供您自行审查，但将插件安装到 Obsidian 中目前是基于信任的。

我在这里向您保证，我不会采集您的数据，也不会将信息发送到互联网或以其他方式对您的系统进行任何不正当操作。然而，请注意，我*有可能*这样做，您只能相信我的话。

## 开发

该项目使用 Typescript 提供类型检查和文档。

该仓库依赖于最新的 [插件API](https://github.com/obsidianmd/obsidian-api)，以 Typescript 定义格式提供，其中包含描述其功能的 TSDoc 注释。

**注意：** Obsidian API 仍处于早期 alpha 版本，随时可能发生变化！

如果您想要为开发做出贡献和/或自定义它以适应您自己的调整，您可以执行以下操作：

- 克隆该仓库。
- 运行 `npm i` 或 `yarn` 安装依赖项。
- 运行 `npm run build` 进行编译。
- 将 `manifest.json`、`main.js` 和 `styles.css` 复制到插件文件夹的子文件夹中（例如，`<vault>/.obsidian/plugins/<plugin-name>/`）。
- 重新加载 Obsidian 以查看更改。

或者，您可以直接将该仓库克隆到插件文件夹中，一旦安装了依赖项，使用 `npm run dev` 以启动监视模式下的编译。

您可能需要重新加载 Obsidian（`ctrl+R`）以查看更改。

定价

咦？这是我为了好玩而制作的开源插件。它完全免费。

然而，如果你非常喜欢它，非要给我钱的话，可以通过以下方式向我投币：

[![GitHub赞助商](https://img.shields.io/github/sponsors/deathau?style=social)](https://github.com/sponsors/deathau)

[![Paypal](https://img.shields.io/badge/paypal-deathau-yellow?style=social&logo=paypal)](https://paypal.me/deathau)

# 版本历史

## 3.3.0

- 在弹出窗口中，滑动窗格现在应该按预期工作！
- 窗格调整大小已恢复（但不保存到工作区）
- 解决了在切换插件开关和尝试调整窗格大小时的一些问题
- （一些）优化以简化和加快速度。

3.2.5

- 快速修复，防止弹出窗口中的滑动窗格，因为当前的体验有问题。

## 3.2.4

- 修复了 Obsidian 0.15 版本中的一些焦点问题
- 添加了桌面和移动端叶子宽度的单独选项（感谢 @Bevaz）

## 3.2.3

- 添加了一个选项来选择文本方向（感谢 @yo-goto）
- 允许用户禁用平滑动画（感谢 @cfree3）

## 3.2.2

- 修复了关闭笔记时激活最左边的笔记的问题
- 修复了搜索建议的位置
- 在将面板移动到侧边栏时正确删除自定义样式
- 在图标上添加了笔记标题，因此如果您的面板堆叠在一起，但您没有旋转标题，您可以将鼠标悬停在图标上查看笔记标题。

## 3.2.1

- 稍微修改了名称，去掉了 "Matuschak"。抱歉，安迪，但是你的名字有点不好拼写...
- 对旋转标题的元素进行了样式调整，使其更好地居中
- 修复了上一个版本引入的丑陋阴影污点
- 修复了一个代码错误，导致打开和关闭背景窗格时出现问题

## 3.2.0

- 添加了“自动宽度”模式，每个窗格将占据左右两侧脊柱之间的可用空间
- 修复了标签的建议容器定位问题（以及相关的控制台错误）- 再次感谢 Eric Hall
- 修复了旋转标题中表情符号的方向（感谢 GreenChocho 和 NothingIsLost）
- 修复了加载工作区时的错误
- 修复了与 MrJackphi 的“Backlinks into the document”插件的兼容性问题

3.1.1

- 修复最右侧标题隐藏和额外滚动条的问题

## 3.1.0

- 更新链接建议容器的位置（再次感谢@erichalldev）
- 添加选项（和命令面板命令）以关闭堆叠（即滑动关闭模式，类似于 Andy 的 Mode CSS 的 v1 版本）
- 添加选项（和命令面板命令）以使旋转的标题面向另一个方向
- 添加命令面板命令以切换旋转标题
- 允许面板调整大小（除了最后一个面板，因为它目前没有手柄）
- 修复切换到屏幕外面板时动画不正确的问题（如果您切换得太远太快，仍然可能没有动画而跳跃）

## 3.0.2

- 添加一个设置来禁用旋转的标题
- 更新 focusLeaf，如果一个叶子不在视图范围内，滚动到足够远的位置使其完全可见（感谢 @erichalldev）
- 当活动的叶子关闭时，激活相邻的叶子（再次感谢 @erichalldev）
- 关闭那些打开的文件被删除的叶子

## v3.0.1

- 快速修复，防止插件影响侧边栏

## v3.0.0

### 新功能（与仅使用 CSS 的版本相比）

- 注意标题可以在左侧和右侧堆叠。
- 更改活动窗格会将该窗格滚动到视图中。
- 可以切换而无需将 CSS 复制到您的主题中。



