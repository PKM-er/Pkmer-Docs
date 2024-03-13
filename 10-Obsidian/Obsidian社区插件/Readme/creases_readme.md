---
uid: 2023080322164090
title: Obsidian 插件：Creases
tags: ['界面相关', '美化', 'obsidian插件', 'readme']
description: 让笔记显示的标题，显示折叠功能图表
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Creases

> [!Note] 插件名片
> - 插件名称：Creases
> - 插件作者：Liam Cain
> - 插件说明：让笔记显示的标题，显示折叠功能图表
> - 插件分类：[' 界面相关 ', ' 美化 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/liamcain/obsidian-creases)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?creases)

## 概述

让笔记显示的标题，显示折叠功能图表

![Creases](https://cdn.pkmer.cn/covers/creases.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/liamcain/obsidian-creases/main/README.md)

---

## Readme(翻译）

下面是 [[creases]] 插件的自述翻译

# 折叠线 👕

用于在 Obsidian 中高效折叠 Markdown 部分的工具。

![creases-overview](https://user-images.githubusercontent.com/693981/156103767-33f311de-39ac-422d-b8ea-987ea9c63f7b.png)

在 Markdown 中添加 `%% fold %%` 标记来 " 折叠 " 您的内容。然后运行**沿折叠线折叠**以将文件调整到所需状态。

## ⚙️ 命令

### 一般折叠

- **按级别折叠标题** - 折叠与给定级别匹配的正确文档中的所有标题（H1 - H6）
- **折叠更多** - 查找并折叠最近的标题或列表项。
- **折叠更少** - 查找并展开最近的标题或列表项。

### 折叠级别

Creases 还从 vim 中借用了“折叠级别”的概念。折叠级别是根据笔记中当前的折叠来推断的。如果你将 `## Heading Level 2` 标题折叠起来，_ 减小 _ 折叠级别将展开所有标题，直到 `# Heading Level 1`。_ 增加 _ 折叠级别将展开直到 `### Heading Level 3`。

- **增加标题折叠级别** - 将折叠级别增加 1
- **减小标题折叠级别** - 将折叠级别减小 1

### 使用“折痕”进行操作

- **切换折痕** - 对当前所在的部分进行折叠/展开
- **对当前折叠进行折痕** - 在文件中对当前折叠应用折痕，以便您可以使用**沿折痕折叠**轻松返回到这些当前折叠。
- **沿折痕折叠** - 折叠文件中所有有折痕的部分
- **熨平折痕** - 从当前文件中移除所有折痕

## ➕ 附加功能

- **模板支持** - 如果您使用 _Templates_ 核心插件，模板中包含的任何折痕都将自动折叠。
- **Templater 支持** - 在您的 [Templater](https://github.com/SilentVoid13/Templater) 模板中添加折痕，以便内容自动折叠。

⚡️ 示例工作流程（也称为“你是否曾经遇到过这种情况？”）

为您的折叠创建一个“保存状态”

如果您正在处理一份长文档，您可能会在进行操作时折叠部分内容。现在您想在折叠中进行“查找”。糟糕，它找到了匹配项，但是现在您折叠的内容全部展开了。

相反，将您的折叠保存为褶皱：

1. 运行“将当前折叠标记为 _ 褶皱 _”以标记所有当前折叠。
2. 尽情搜索文档，展开而不用担心。
3. 运行“沿褶皱折叠”以恢复所有折叠到之前的状态。
4. _可选_ 现在您回到了理想的文档折纸状态，您可以运行“去除褶皱标记”来消除折痕标记。

### 您希望模板中的内容默认折叠起来

无论您使用核心的**Templates**插件还是**Templater**，您可能会发现自己希望某些部分默认折叠起来，因为您不经常查看它们。

1. 在您的模板文件中，只需确保 `%% fold %%` 出现在您希望折叠的标题或列表项的同一行上。您还可以在模板内部运行“Toggle crease”命令，以自动插入折叠线。

您想要折叠文档中的所有“### Level 3 Heading”。

折叠给定深度的所有标题可能是一个繁琐的过程。现在不再是这样了。

1. 只需运行“Toggle fold for H3”。

🎞 鸣谢

特别感谢 Discord 上的**@mleo2003**提供的插件名称。

## 表达感谢 🙏

如果你喜欢这个插件并想请我喝杯咖啡，你可以！

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="BuyMeACoffee" width="100">](https://www.buymeacoffee.com/liamcain)

喜欢我的工作并想看到更多类似的内容？你可以赞助我。

[![GitHub Sponsors](https://img.shields.io/github/sponsors/liamcain?style=social)](https://github.com/sponsors/liamcain)
