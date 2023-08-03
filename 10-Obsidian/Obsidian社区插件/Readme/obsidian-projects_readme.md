---
uid: 20230803231105
title: Obsidian 插件：Projects
tags: ['界面相关', '搜索/排序', '任务管理', '样式工具', '美化', '文件管理', '效率', 'obsidian插件', 'readme']
description: 提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232456
---

# Obsidian 插件：Projects

> [!Note] 插件名片
> - 插件名称：Projects
> - 插件作者：Marcus Olsson
> - 插件说明：提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求。
> - 插件分类：[' 界面相关 ', ' 搜索/排序 ', ' 任务管理 ', ' 样式工具 ', ' 美化 ', ' 文件管理 ', ' 效率 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/marcusolsson/obsidian-projects)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-projects)

## 概述

提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求。

![Projects](https://cdn.pkmer.cn/covers/obsidian-projects.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/marcusolsson/obsidian-projects/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-projects]] 插件的自述翻译

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/marcusolsson/obsidian-projects/main/images/dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/marcusolsson/obsidian-projects/main/images/light.svg">
  <img alt="Projects logo" src="https://raw.githubusercontent.com/marcusolsson/obsidian-projects/main/images/light.svg">
</picture>

[![构建 Obsidian 插件](https://github.com/marcusolsson/obsidian-projects/actions/workflows/ci.yml/badge.svg)](https://github.com/marcusolsson/obsidian-projects/actions/workflows/ci.yml)

[![发布 Obsidian 插件](https://github.com/marcusolsson/obsidian-projects/actions/workflows/release.yml/badge.svg)](https://github.com/marcusolsson/obsidian-projects/actions/workflows/release.yml)

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22obsidian-projects%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

[![给我买杯咖啡](https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=buy-me-a-coffee)](https://www.buymeacoffee.com/marcusolsson)

[![维护状态](https://img.shields.io/badge/maintenance-status-brightgreen)](https://github.com/marcusolsson/obsidian-projects/discussions)

Projects 是 [Obsidian](https://obsidian.md) 的一个插件，可以帮助您管理和可视化项目管理的笔记。

- 从文件夹和 Dataview 查询创建项目。
- 在四种不同的视图之间切换：_表格_、_看板_、_日历_ 和 _画廊_。
- 为每个项目配置笔记模板。

例如，如果您是内容经理，Projects 可以帮助您管理内容日历。创建草稿，跟踪其状态以及计划发布时间。

如果您有任何问题或想保持更新，请加入我们的 [讨论区](https://github.com/marcusolsson/obsidian-projects/discussions)。

如果您对我们目前正在进行的工作感兴趣，请查看 [路线图](https://github.com/users/marcusolsson/projects/4/views/14) 和 [最受欢迎的功能请求](https://github.com/marcusolsson/obsidian-projects/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc)。

## 安装

> **注意**
> 你必须关闭**限制模式**才能使用项目。

1. 在 Obsidian 中，打开**设置**。
2. 在**社区插件**下，选择**浏览**。
3. 搜索 "Projects"，作者为 Marcus Olsson，然后选择它。
4. 选择**安装**。

要开始使用项目，请按下**Ctrl+P**（或者在 macOS 上按下**Cmd+P**）打开**命令面板**，然后选择**Projects: Show projects**。

## 设计理念

在开发任何软件时，你经常面临困难的选择。为了帮助指导设计决策，该项目遵循以下原则：

- **不留痕迹：** 插件不能在笔记中留下任何插件特定的配置，比如自定义的前置元数据属性。笔记可能会与不使用 Obsidian 的同事和团队共享。如果用户停止使用该插件，他们不应该清理所有的笔记。
- **保持本地化：** 插件应该看起来和感觉像是 Obsidian 的本地功能。插件在可能的情况下应该优先使用本地 Web API 而不是自定义组件。
- **稳定性优先于功能：** 该插件面向对可靠性有高要求的专业人士。任何错误报告和可用性问题都将优先考虑，而不是新功能。

贡献

有关如何为项目做出贡献的更多信息，请查看 [CONTRIBUTE.md](https://github.com/marcusolsson/obsidian-projects/blob/main/CONTRIBUTING.md)。

了解更多

如果您想看到项目的实际应用，请查看用户制作的任何这些令人惊叹的资源。

### 视频

- 2022-12-10: [使用Obsidian进行内容创作 | 构建类似Notion的数据库视图](https://www.youtube.com/watch?v=Ds-VPz7jIwM) 由 [@amyjuanli](https://www.youtube.com/@amyjuanli) 制作
- 2022-12-06: [在Obsidian中创建编辑日历：插件Projects](https://www.youtube.com/watch?v=Wmx2EoQYrTI) 由 [@cerveaunumeriquefr](https://www.youtube.com/@cerveaunumeriquefr) 制作
- 2022-11-23: [Obsidian内容创作者](https://www.youtube.com/watch?v=jovUqLbqS1Y) 由 [@FromSergio](https://www.youtube.com/@FromSergio) 制作
- 2022-11-18: [在Obsidian中创建类似Notion的内容日历](https://www.youtube.com/watch?v=ny8lksaQ5A8) 由 [@nicolevdh](https://www.youtube.com/@nicolevdh) 制作
- 2022-11-13: [Obsidian Projects：如何在Obsidian中管理基于笔记的项目](https://www.youtube.com/watch?v=9d9ibSC1TXU) 由 [@beingpax](https://www.youtube.com/@beingpax) 制作
- 2022-11-07: [Obsidian Projects插件中的Notion数据库视图](https://www.youtube.com/watch?v=LdaMe2rzAW8) 由 [@nicolevdh](https://www.youtube.com/@nicolevdh) 制作（采访）
- 2022-11-07: [在Obsidian中像Notion一样查看数据库](https://www.youtube.com/watch?v=vReObPVS2oo) 由 [@SniferL4bs](https://www.youtube.com/@SniferL4bs) 制作

### 文章

- [如何在Obsidian中设置和维护你的学术阅读列表](https://nataliekraneiss.com/your-academic-reading-list-in-obsidian/)，作者：[Natalie Kraneiß](https://nataliekraneiss.com/)
- [Obsidian项目：在Obsidian中管理基于文本的项目的更好方法](https://beingpax.medium.com/obsidian-projects-a-better-way-to-manage-text-based-projects-in-obsidian-18c2a991069c)，作者：[Prakash Joshi Pax](https://beingpax.medium.com/)

_我有遗漏吗？请告诉我，我会将它们添加到列表中！_

如果 Projects 对您有用，请考虑 [给我买本书](https://www.buymeacoffee.com/marcusolsson) 以表示您的支持。

## 许可证

项目使用 [Apache License 2.0](LICENSE) 进行分发。
