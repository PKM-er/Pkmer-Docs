---
uid: 2023120719243174
title: Obsidian 插件：【Readme】Carry-Forward
tags: ['编辑工具', 'obsidian插件', 'readme']
description: 从笔记中复制文本，链接回其复制的源，或复制一个链接到笔记块。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Carry-Forward

> [!Note] 插件名片
> - 插件名称：Carry-Forward
> - 插件作者：Jacob Levernier
> - 插件说明：从笔记中复制文本，链接回其复制的源，或复制一个链接到笔记块。
> - 插件分类：[' 编辑工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/jglev/obsidian-carry-forward)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-carry-forward)

## 概述

从笔记中复制文本，链接回其复制的源，或复制一个链接到笔记块。

![Carry-Forward](https://cdn.pkmer.cn/covers/obsidian-carry-forward.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jglev/obsidian-carry-forward/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-carry-forward]] 插件的自述翻译

<h1 align="center">Obsidian Carry-Forward插件</h1>

<p align="center">从笔记中复制文本，并链接回复制的源文本，或复制一个笔记块的链接。</p>

该插件方便在 [Obsidian](https://obsidian.md/) 笔记中 [链接到块](https://help.obsidian.md/How+to/Link+to+blocks)（例如，特定行）。它允许：

- 复制当前行的链接，以及
- 从一个笔记中复制文本，并自动添加链接返回到复制文本的位置。这在使用像 [Bullet Journaling](https://bulletjournal.com/blogs/bulletjournalist/migration) 这样的记笔记方法时非常有用，该方法涉及将过去几天的任务定期转移到当前日期的笔记中。

> 请在此处提交错误：<https://github.com/jglev/obsidian-carry-forward>
>
> 请在此处提交想法：<https://github.com/jglev/obsidian-carry-forward/discussions/categories/ideas>
>
> 请在此处寻求帮助：<https://github.com/jglev/obsidian-carry-forward/discussions/categories/q-a>

---

<ul>
    <li></li>
    <li></li>
</ul>

有关每个版本的更改，请查看发布页面：<https://github.com/jglev/obsidian-carry-forward/releases>

---

## 截图和使用方法

该插件提供了四个主要命令：

1. `Carry Forward: 将选择的内容复制，并将每一行与其复制的源链接`
  ![](https://cdn.pkmer.cn/covers/obsidian-carry-forward_2_0.gif)

2. `Carry Forward: 将选择的内容复制，并将第一行与其复制的源链接`
  ![](https://cdn.pkmer.cn/covers/obsidian-carry-forward_2_1.gif)

3. `Carry Forward: 复制行的链接`
   ![](https://cdn.pkmer.cn/covers/obsidian-carry-forward_2_2.gif)

4. `Carry Forward: 复制行的嵌入链接`
   ![](https://cdn.pkmer.cn/covers/obsidian-carry-forward_2_3.gif)

- 在设置选项卡中，可以设置一个 [正则表达式](https://www.regular-expressions.info)，以精确地将链接放置在复制的文本中，无论是在行的开头、行的结尾还是替换现有文本。
  - 该插件使用 [ECMAScript / Javascript风格](https://www.regular-expressions.info/javascript.html) 的正则表达式。
- *上述截图中使用的主题是 [Solarized Light](https://github.com/Slowbad/obsidian-solarized)。*

上述命令的变体允许使用**当前选择**或**当前剪贴板文本**来设置复制链接的文本。

## 安装

按照以下步骤安装插件。

1. 在 Obsidian 的社区插件浏览器中搜索“Carry Forward”。
2. 在 Obsidian 设置中启用插件（在“Community plugins”下找到“Carry Forward”）。
3. 检查“Carry Forward”设置选项卡。
4. （可选）在“Hotkeys”设置选项卡中，为“Carry Forward...”命令中的一个或两个添加热键。

开发

克隆存储库，运行 `yarn` 安装依赖项，然后运行 `yarn dev` 编译插件并监视文件更改。

## 许可证

该插件的文档设置基于 [Obsidian Tasks](https://github.com/schemar/obsidian-tasks) 插件，由 [Martin Schenck](https://github.com/schemar) 开发。与该插件一样，本插件也是根据 [MIT 许可证](./LICENSE) 发布的。

# 待办事项

目前，该代码库中尚未包含自动化测试。特别欢迎使用 [Obsidian端到端测试方法](https://github.com/trashhalo/obsidian-plugin-e2e-test) 来提供帮助！
