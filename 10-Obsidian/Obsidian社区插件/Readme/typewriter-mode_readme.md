---
uid: 2023120719454506
title: Obsidian 插件：【Readme】Typewriter Mode
tags: ['obsidian插件', 'readme']
description: 打字机滚动，当前行的高亮显示，未聚焦段落的变暗等等。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Typewriter Mode

> [!Note] 插件名片
> - 插件名称：Typewriter Mode
> - 插件作者：Davis Riedel
> - 插件说明：打字机滚动，当前行的高亮显示，未聚焦段落的变暗等等。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/davisriedel/obsidian-typewriter-mode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?typewriter-mode)

## 概述

打字机滚动，当前行的高亮显示，未聚焦段落的变暗等等。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/davisriedel/obsidian-typewriter-mode/main/README.md)
>

---

## Readme(翻译）

下面是 [[typewriter-mode]] 插件的自述翻译

# Obsidian 的打字机模式

打字机模式是一个插件，为 [Obsidian](https://obsidian.md) 添加了打字机滚动（当前行保持在屏幕上的固定位置）、当前行高亮、未聚焦段落变暗等功能。

所有功能都可以单独开启或关闭，并且具有各种设置，可以根据您的喜好自定义它们的行为。

下面是所有功能和设置的列表。

_以下是一些示例截图：_

![打字机滚动和当前行高亮](https://cdn.pkmer.cn/covers/typewriter-mode_1_0.gif)

![未聚焦段落变暗](https://cdn.pkmer.cn/covers/typewriter-mode_1_1.gif)

## 功能和设置

- **打字机滚动：** _打开或关闭打字机滚动_
- **打字机偏移：** _将打字机行定位到屏幕指定百分比的位置_
- **只有在达到打字机偏移时才保持偏移：** _光标所在的行不会滚动到编辑器的中心，直到达到指定的打字机偏移为止。这样可以消除编辑器顶部的额外空间。_
- **不使用箭头键与打字机对齐：** _只有在使用此插件的移动命令时，打字机才会对齐。使用箭头键时不会对齐。移动命令默认为 Cmd/Ctrl+ArrowUp/ArrowDown，但您可以在 Obsidian 的设置中为移动命令分配自己的热键。_
- **保持当前行上方和下方的行数：** _启用后，始终保持当前行上方和下方指定数量的行可见_
- **当前行上方和下方的行数：** _始终保持当前行上方和下方的行数_
- **突出显示当前行：** _突出显示光标当前所在的行_
- **当前行突出显示颜色：** _当前行突出显示的颜色_
- **当前行突出显示样式：** _当前行突出显示的样式_ - _方框，下划线_
- **当前行下划线粗细：** _突出显示当前行的下划线粗细_
- **仅在焦点笔记中突出显示当前行：** _只在光标所在的笔记/编辑器中显示突出显示的行_
- **变暗未聚焦的段落：** _在编辑器中变暗未聚焦的段落_
- **变暗段落的不透明度：** _变暗段落的不透明度_
- **滚动时暂停变暗未聚焦的段落：** _滚动时不会变暗段落_
- **选择文本时暂停变暗未聚焦的段落：** _选择文本时不会变暗段落_
- **未聚焦编辑器中的段落变暗行为：** _如何在未聚焦的编辑器中变暗段落_ - _不变暗任何段落，变暗除最后一个聚焦的段落外的所有段落，变暗所有段落_
- **仅在第一次交互后激活：** _仅在与编辑器的第一次交互后激活焦点行突出和段落变暗_
- **限制每行的最大字符数：** _限制每行的最大字符数_
- **每行的最大字符数：** _每行的最大字符数_
- **在全屏写作焦点中显示标题：** _如果启用，在全屏写作焦点中将显示标题_
- **全屏写作焦点的晕影效果：** _在全屏写作焦点中的屏幕边缘添加晕影效果_
- **全屏写作焦点的晕影效果样式：** _全屏写作焦点模式中晕影效果的样式_ - _方框，柱状_
兼容性

该插件与 Obsidian v0.15.0 及以上版本兼容。不支持旧版编辑器。

## 安装

要安装社区插件，请确保在 Obsidian 的设置中关闭“安全模式”。

### 从 Obsidian 内部

_该插件已提交给 Obsidian，并正在进行审核。一旦被接受，您将能够按照以下步骤在 Obsidian 内安装它。在此期间，请使用“从 GitHub”部分中提到的安装方法。_

<!-- 您可以通过以下步骤在Obsidian内安装此插件： -->

- 进入 设置 > 社区插件 > 浏览
- 搜索 "Typewriter Mode"
- 点击 安装
- 点击 启用

### 来自 GitHub

#### 手册

1. 从 GitHub 存储库的“Releases”部分下载最新版本。
2. 从 zip 文件中提取插件文件夹到您的 vault 的插件文件夹：`<vault>/.obsidian/plugins/`。_注意：在某些机器上，`.obsidian` 文件夹可能是隐藏的。在 macOS 上，您可以按 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。_
3. 重新加载 Obsidian。
使用 BRAT 插件的存储库中的说明，使用此存储库的 URL：`https://github.com/davisriedel/obsidian-typewriter-mode` 来安装插件。
派生自

这个插件最初是基于 [Typewriter Scroll](https://github.com/deathau/cm-typewriter-scroll-obsidian) 插件的分支，由 [deathau](https://github.com/deathau) 开发。它被转化为一个独立的插件，因为添加了许多新功能，引入了破坏性变更，并且代码被完全重构以使其更具可扩展性。

## 开发

该仓库依赖于最新的 [Obsidian插件API](https://github.com/obsidianmd/obsidian-api)。

如果您想为该项目做出贡献或进行自己的更改，可以按照以下步骤进行操作：

1. 克隆该仓库
2. 使用 `npm i`，`yarn` 或 `pnpm i` 安装依赖项
3. 使用 `npm run build`，`yarn build` 或 `pnpm build` 进行构建
4. 将 `manifest.json`，`main.js` 和 `styles.css` 复制到您的插件文件夹的子文件夹中（例如，`<vault>/.obsidian/plugins/<plugin-name>/`）
5. 重新加载 Obsidian 以查看更改

如果您将该仓库克隆到 `<vault>/.obsidian/plugins/<plugin-name>/` 中，则无需手动复制文件，可以跳过第 4 步。

**欢迎提出问题和/或为该项目做出贡献！**

## 更新日志

### 0.0.2

根据 [Obsidian的插件指南](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines#Use+sentence+case+in+UI)，将所有设置和命令重命名为句子大小写。

0.0.1

该插件的初始版本发布
