---
uid: 20240227160841
title: Obsidian 插件：【Readme】Gamificate your PKM
tags: ['obsidian插件', 'readme']
description: Enhance your Personal Knowledge Management with gamification elements. Boost motivation and achieve growth as you engage with your PKM.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Gamificate your PKM

> [!Note] 插件名片
> - 插件名称：Gamificate your PKM
> - 插件作者：Andreas Trebing
> - 插件说明：Enhance your Personal Knowledge Management with gamification elements. Boost motivation and achieve growth as you engage with your PKM.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/saertna/obsidian-gamified-pkm)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gamified-pkm)

## 概述

Enhance your Personal Knowledge Management with gamification elements. Boost motivation and achieve growth as you engage with your PKM.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/saertna/obsidian-gamified-pkm/main/README.md)

---

## Readme(翻译）

下面是 [[gamified-pkm]] 插件的自述翻译

【机翻】

# 黑曜石 - 游戏化 - 口袋妖怪

## **🌟 通过 Obsidian Gamification 插件提升您的知识管理！ 🚀**

大家好，学习者和知识追求者们！📚 如果您和我一样对个人成长充满热情，并且相信动力是开启新视野的关键，那么您将会得到一些特别的东西。

## 嘿！👋

想象一下，将您的知识管理转变为一场冒险，在这个过程中，每向前迈出一步都是一次庆祝。介绍 Obsidian Gamification 插件 - 这是一个旨在利用游戏技术的激励力量并将其应用于我们对知识的追求的工具。

这个插件重新构想了我们与知识库互动的方式。通过整合类似游戏的元素，它为您的进步提供奖励，培养一致性，并使学习之旅成为一次真正激励人心的体验。从实现里程碑到征服塑造您学习路径的挑战，这个插件为您的知识管理过程增添了一层刺激。

这个插件的目的是，支持您培养个人知识。基本理念是，当您增加您的知识，思考您的周围环境，您的工作，您的个人生活，并连接您的想法，这将对社会产生积极影响。这是一个很大的说法，但我仍然相信。无论您是为了在市场上增加自己的利益，为慈善事业还是其他目的而进行知识管理，当您更深入地思考您所做的事情时，它将在某种方式上变得更好。个人知识管理在一段时间后会产生回报，这个插件将帮助您度过这段时间。它带来乐趣和刺激，并保持动力高涨，即使在您的个人知识管理产生回报之后也是如此。

**为什么在 Ko-Fi 上的支持至关重要？**

我是这个项目背后的创作者，我真诚地很高兴与大家分享。建立和完善这个插件是一项需要资源的承诺。通过在 Ko-Fi 上显示您的支持，您直接为以下方面做出贡献：

- **增强激励技术：** 您的贡献使我能够完善插件，引入新的激励功能，并根据您的见解增强整体用户体验。
- **扩展体验：** 更多挑战，更多机会！有了您的支持，我可以设计各种各样的任务和挑战，以满足不同的学习路径和兴趣。
- **持续进步：** 就像生活本身一样，这个插件是一次旅程。您的支持确保它获得定期更新，改进，并与最新进展保持一致。

🎉 **您如何贡献？**

如果您赞同将激励性游戏技术融入个人发展的想法，请考虑在 Ko-Fi 上用一杯虚拟咖啡来激励我。您的支持在释放这个插件的全部潜力方面发挥着重要作用！

👉 [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/J3J6DYYS5)

感谢您成为这场革新我们对知识管理方法的运动的一部分。让我们共同利用动力的力量，一起提升我们的学习之旅！🌐🌱

## 安装

按照以下步骤安装“Gamificate your PKM”。

1. 在 Obsidian 的社区插件浏览器中搜索“Gamificate your PKM”。
2. 在 Obsidian 设置中启用插件（在“Community plugins”下找到“Gamificate your PKM”）。
3. 检查设置。也许您想要排除标签（下面会更多介绍）。
4. 需要安装和配置的插件才能完全运行
   - `dataview`。在 dataview 设置中启用 `Enable JavaScript Queries` 和 `Enable Inline JavaScript Queries` 以在个人资料中显示计数。
   - `obsidian-charts`
5. 在 Obsidian 中按下 `CTRL+P`，运行命令 `Initialize gamification ratings`。
6. 创建和改进笔记，再次评分以增加积分。

**踏上激励之旅！**

### 附加配置信息

在某些情况下，相同的保险库也用于其他活动，并且知识管理应保持分开。然后，您可以排除不希望在初始化时使用的#标签和/或文件夹。默认情况下，输入了文件夹 'Excalidraw'。如果您希望将您的保险库中的所有文件用于您的 pkm，则可以忽略此设置。

![排除标签和文件夹的设置](https://cdn.pkmer.cn/covers/gamified-pkm_2_0.png!pkmer)

## 开始入门

### 初始化游戏

如果在安装过程中尚未完成，请按 `CTRL+P` 并运行命令 `Initialize gamification ratings`。此命令将创建您的个人资料，评定您现有的笔记，并为您设定一个起始级别。在个人资料中，您可以获取有关当前级别、积分、徽章以及查看笔记成熟度分布的信息。

![游戏化初始化命令](https://cdn.pkmer.cn/covers/gamified-pkm_2_1.png!pkmer)

### 下一步

创建一个新的笔记，使用侧边的植物图标或 `CTRL+P`，然后运行命令 `Rate note maturity`。

![第一次评分笔记](https://cdn.pkmer.cn/covers/gamified-pkm_2_2.png!pkmer)

在现有的笔记上工作，改进你的想法，标题，将其链接到其他相关的笔记，并运行 `CTRL+P`，然后运行命令 `Rate note maturity`，或者使用植物图标。

![改进后再次评分](https://cdn.pkmer.cn/covers/gamified-pkm_2_3.png!pkmer)

## 更多信息和帮助

您可以在 GitHub 的讨论区使用讨论区来讨论问题、想法和提出问题。对于问题，请使用问题区域提出。

## 路线图

即将推出的 Gamification 插件将有更多的发展！以下是未来的一瞥：

- 进一步的指标来生成积分
	- 用于索引/MOC 创建和质量水平的积分
	- 用于思维链的积分
- 侧边栏中的游戏元素概览
	- 挑战状态
	- 活跃助推器
	- 制作的助推器
	- 成分概览
- 助推器
	- 用于制作的成分的图标和全名
	- 助推器药剂的图标
	- 附加助推器
- 徽章
	- 链接到开放徽章
	- 为成就添加更多徽章
- 实现检查插件是否有更新
- 新挑战
- 要遵循和完成的任务



