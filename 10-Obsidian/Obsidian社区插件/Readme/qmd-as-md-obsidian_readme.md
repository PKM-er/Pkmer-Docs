---
uid: 2023080322251455
title: Obsidian 插件：qmd as md
tags: ['obsidian插件', 'readme']
description: 该插件提供了初步支持查看具有.qmd扩展名的文件。QMD文件包含markdown和可执行代码单元的组合，是Quarto开源出版系统支持的格式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：qmd as md

> [!Note] 插件名片
> - 插件名称：qmd as md
> - 插件作者：Daniel Borek
> - 插件说明：该插件提供了初步支持查看具有.qmd 扩展名的文件。QMD 文件包含 markdown 和可执行代码单元的组合，是 Quarto 开源出版系统支持的格式。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/danieltomasz/qmd-as-md-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?qmd-as-md-obsidian)

## 概述

该插件提供了初步支持查看具有.qmd 扩展名的文件。QMD 文件包含 markdown 和可执行代码单元的组合，是 Quarto 开源出版系统支持的格式。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/danieltomasz/qmd-as-md-obsidian/main/README.md)
>

---

## Readme(翻译）

下面是 [[qmd-as-md-obsidian]] 插件的自述翻译

# qmd as md Obsidian 插件

这是一个为 [Obsidian](https://obsidian.md) 设计的插件，可以将 qmd 文件以 markdown 的形式进行编辑。

QMD 文件是一种包含了 markdown 和可执行代码单元的组合格式，是 [Quarto](https://quarto.org/) 开源出版系统所支持的格式，也可以在 Rstudio 和 VSCode 编辑器中使用。

为了能够在 Obsidian 中链接到 quatro 文件，您需要在 `Files & Links` 部分中勾选 " 检测所有文件扩展名 " 的开关。

如果想要隐藏其他文件，您可以使用以下 CSS 代码块（将其保存为文件到您的代码片段文件夹中，并在 Obsidian 的外观菜单中启用它），您还可以添加其他文件类型。

```css
div[data-path$='.Rproj']{
	display: none;
}

div[data-path$='.cls']{
	display: none;
}

div[data-path$='.yml']{
	display: none;
}

div[data-path$='.json']{
	display: none;
}
```

该插件是基于 deathau 的插件进行微调的：[deathau/txt-as-md-obsidian: Edit txt files in Obsidian.md as if they were markdown](https://github.com/deathau/txt-as-md-obsidian)。

### 用于更好的编辑体验的插件

- 使用 [obsidian-shellcomands](obsidian://show-plugin?id=obsidian-shellcommands) 和 `quarto render {{file_path:absolute}} --to pdf` 在 Obsidian 中渲染文件
- 使用 [HTML Reader](obsidian://show-plugin?id=obsidian-html-plugin) 在 Obsidian 中渲染 HTML 输出，Obsidian 原生支持 PDF。

### 待办事项

- [ ] 创建新的 qmd 文件
- [ ] 将花括号 `{language}` 视为代码块的语言
- [ ] 为 callout 块添加 CSS 样式
- [ ] 与 Obsidian 更好地集成

### 兼容性

所需的 API 仅在 Obsidian **0.10.12**中添加，因此，这是使用此插件所需的最低版本的 Obsidian。

安装

### 从 Obsidian 内部

目前该插件在 Obsidian 的社区列表中无法访问。但是，您可以使用 [BRAT插件](https://github.com/TfTHacker/obsidian42-brat) 来访问和进行测试。

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
该仓库依赖于最新的 [插件API](https://github.com/obsidianmd/obsidian-api)，以 Typescript 定义格式提供，其中包含了描述其功能的 TSDoc 注释。

**注意：** Obsidian API 仍处于早期 alpha 版本，随时可能发生变化！

如果您想要为开发做出贡献和/或自定义它以适应您自己的调整，您可以执行以下操作：

- 克隆该仓库。
- 运行 `npm i` 或 `yarn` 安装依赖项。
- 运行 `npm run build` 进行编译。
- 将 `manifest.json`、`main.js` 和 `styles.css` 复制到插件文件夹的子文件夹中（例如，`<vault>/.obsidian/plugins/<plugin-name>/`）。
- 重新加载 Obsidian 以查看更改。

或者，您可以直接将仓库克隆到插件文件夹中，一旦安装了依赖项，使用 `npm run dev` 以启动监视模式下的编译。
您可能需要重新加载 Obsidian（`ctrl+R`）以查看更改。

定价

插件完全免费，但您可以通过以下方式向原始插件的作者（deathau）进行捐赠：

[![GitHub赞助商](https://img.shields.io/github/sponsors/deathau?style=social)](https://github.com/sponsors/deathau)

[![Paypal](https://img.shields.io/badge/paypal-deathau-yellow?style=social&logo=paypal)](https://paypal.me/deathau)

# 版本历史

0.0.1

由 death_md 发布的初始版本，支持 txt 格式！

0.0.2

将此插件重新用于查看和编辑 qmd 文件，插件可通过 BRAT 获得。
