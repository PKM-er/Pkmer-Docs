---
uid: 2023080322154806
title: Obsidian 插件：【Readme】Chem
tags: ['obsidian插件', 'readme']
description: 提供化学支持。将SMILES字符串转化为化学结构。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Chem

> [!Note] 插件名片
> - 插件名称：Chem
> - 插件作者：Acylation
> - 插件说明：提供化学支持。将 SMILES 字符串转化为化学结构。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Acylation/obsidian-chem)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chem)

## 概述

提供化学支持。将 SMILES 字符串转化为化学结构。

![Chem](https://cdn.pkmer.cn/covers/chem.jpeg!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Acylation/obsidian-chem/main/README.md)
>

---

## Readme(翻译）

下面是 [[chem]] 插件的自述翻译

# Obsidian Chem

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22chem%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

[简体中文](README-ZH.md) | [English](README.md)

**Chem** 是一个为 [Obsidian.md](https://obsidian.md/) 提供化学支持的插件。它允许您通过包含 SMILES 字符串的代码块（由 [Smiles Drawer](https://github.com/reymond-group/smilesDrawer) 提供支持）将化学结构插入到您的笔记中。

功能和使用

### 将 SMILES 字符串渲染为化学结构

您可以使用此插件将 SMILES 字符串渲染为化学结构。只需在代码块中输入 SMILES 字符串，并将语言设置为 `smiles`。每行应该只包含一个字符串。

数据以纯文本形式存储，因此您不会丢失它。即使插件更改其 cheminfo 核心，渲染器仍将正常工作。

![Image](https://user-images.githubusercontent.com/73122375/235232368-614cb591-a19a-4e1e-94df-781a317d25d0.jpg)

您可以调整图像大小，并在插件的设置页面中配置分子图片的浅色主题和深色主题。

> **注意**
> 目前，您需要重新打开包含 SMILES 块的活动笔记，以应用新的设置，并适应 Obsidian 的浅色/深色主题更改。

![Image](https://user-images.githubusercontent.com/73122375/235232505-08386ce2-bc44-4fd6-96b4-22fa9c8c6fbf.jpg)

SMILES 是 Simplified Molecular-Input Line-Entry System 的缩写。它是一种使用线性 ASCII 字符串描述化学结构的规范。您可以从 [官方网站](http://opensmiles.org/opensmiles.html) 或 [Wikipedia](https://en.wikipedia.org/wiki/Simplified_molecular-input_line-entry_system) 了解更多信息。

为什么使用 SMILES？

使用 SMILES 字符串来表示分子比使用 LaTeX 包（如 mhchem 和 chemfig）更容易，并且得到了更广泛的化学绘图工具的支持。

如何生成 SMILES 字符串？

对于简单的结构，您可以手动输入。然而，对于更复杂的结构，您可能希望使用**结构编辑器**，如 ChemDraw，[ChemDrawJS](https://chemdrawdirect.perkinelmer.cloud/js/sample/index.html#)，[MarvinJS](https://marvinjs-demo.chemaxon.com/latest/index.html) 和 [Ketcher](https://lifescience.opensource.epam.com/KetcherDemoSA/index.html)。此外，您还可以使用**转换器**，如 [Open Bable](http://openbabel.org/wiki/Main_Page)，[JOELib](https://sourceforge.net/projects/joelib/) 和 [Chemical Translation Service](https://cts.fiehnlab.ucdavis.edu/)，将化学名称、CAS 号和 *.mol 文件转换为 SMILES 字符串。

## 安装

> **注意**
> 确保你没有处于**限制模式**。

该插件可以在官方插件市场中找到。你可以进入 设置 → 社区插件 → 浏览，然后搜索 `Chem` 插件，作者是 Acylation。安装完成后，你需要启用该插件才能使用。

你也可以按照以下步骤手动安装插件。

1. 前往该插件的最新 [发布页面](https://github.com/Acylation/obsidian-chem/releases/latest)，下载 `main.js`、`style.css` 和 `manifest.json` 这三个文件。或者你也可以下载最新的 zip 文件，然后解压得到这三个文件。
2. 将这些文件复制到你的本地路径 `[yourvault]/.obsidian/plugins/obsidian-chem/`。你可能需要自己创建 `obsidian-chem` 文件夹。
3. 启动/重启 Obsidian，或者刷新插件列表，你将会看到这个插件。
4. 在插件列表中，启用 `Chem` 并享受使用吧！

## 插件范围

我对这个插件有很多想法，但我的编码技能和资源有限。我希望它能对任何需要在化学上做笔记的人有用（比如研究记录、有机化学 anki 卡片等）。以下是我考虑中的一些功能的示例。

- 显示化学式和结构。
- 从剪贴板、.cdxml 文件等导入结构。
- 在结构旁边添加化学信息（如精确质量）。这对于质谱用户和化学初学者很有帮助。
- 支持像.mol 文件一样的内部坐标。在计算化学中很有用。
- LaTeX 中物理化学公式的快捷方式。
- ......

我很想听听您的反馈和建议。实际上，插件的第一个功能，渲染 SMILES 字符串，是由社区用户提出的！我非常感谢他们的贡献。（有关详细信息，请参见 [致谢](https://github.com/Acylation/obsidian-chem#acknowledgment) 部分）

## 设计理念

在开发新功能之前，我会考虑以下几个标准。该功能至少应满足其中一个标准才能有用。

- 它有助于记录化学研究的笔记，如实验记录、文献笔记、论文写作等。
- 它促进了与其他化学工具良好集成的工作流程。
- 它有助于学习化学和相关学科。

作为一个 Obsidian 插件，该项目遵循以下原则：

- 本地化：数据应保持本地化，优先使用独立的包而非远程服务。
- 不留痕迹：插件不能在笔记中留下插件特定的内容，以便与非 Obsidian 用户共享。
- 纯文本为中心：优先使用纯文本而非复杂格式。

## 贡献

感谢您对本项目的贡献兴趣！我们欢迎任何人提供错误报告、功能请求和拉取请求。

### 如何报告错误或建议新功能

- 请使用 [问题跟踪器](https://github.com/Acylation/obsidian-chem/issues) 报告任何问题或建议新功能。
- 在创建新问题之前，请搜索现有问题以避免重复。
- 创建新问题时，请按照模板提供必要的信息。
- 您还可以通过添加👍反应来投票支持现有问题。

### 如何提交拉取请求

- 如果您想贡献代码，请先 fork 该代码库并为您的工作创建一个新的分支。
- 如果您是插件开发的初学者，您可以查看官方的 [开发者文档](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin)。
- 请在拉取请求的标题和正文中包含清晰简明的更改描述。
- 请在拉取请求的正文中使用类似 `fixes #123` 或 `closes #456` 的关键词引用任何相关的问题。
- 请在合并您的拉取请求之前等待审核。

### 如何获取帮助

- 如果您有任何问题或需要帮助使用或开发这个项目，请加入我们的 [讨论区](https://github.com/Acylation/obsidian-chem/discussions)。

感谢您参与这个项目！🙌

路线图

查看 [路线图](https://github.com/users/Acylation/projects/6) 以了解正在进行的工作。

致谢

该插件依赖于 [Smiles Drawer](https://github.com/reymond-group/smilesDrawer) 作为解析和绘制核心，并使用 [Mathpix](https://github.com/Mathpix/mathpix-markdown-it) 作为集成该包的示例。非常感谢！

在整个开发过程中，我发现 [开发者文档](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin) 非常有帮助。非常感谢 [@marcusolsson](https://github.com/marcusolsson) 领导这个项目！

该插件的动机来自论坛对在 Obsidian 中包含化学结构的请求。感谢您激发了讨论和伟大的想法！

- <https://forum.obsidian.md/t/smiles-in-obsidian/35974>
- <https://forum.obsidian.md/t/structural-formulas-for-chemistry/29366>
- <https://forum.obsidian.md/t/chemistry-formulas-in-obsidian/25772>
- <https://forum.obsidian.md/t/obsidian-for-chemistry/33491>
- <https://forum.obsidian.md/t/how-to-write-chemical-formulas/12249>



