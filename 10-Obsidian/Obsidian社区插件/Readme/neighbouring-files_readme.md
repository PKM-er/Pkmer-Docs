---
uid: 2024022121200566
title: Obsidian 插件：【Readme】Neighbouring Files
tags: ['obsidian插件', 'readme']
description: 在当前目录中导航到下一个和上一个文件
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Neighbouring Files

> [!Note] 插件名片
> - 插件名称：Neighbouring Files
> - 插件作者：Fabian Untermoser
> - 插件说明：在当前目录中导航到下一个和上一个文件
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/FabianUntermoser/obsidian-neighbouring-files-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?neighbouring-files)

## 概述

在当前目录中导航到下一个和上一个文件

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/FabianUntermoser/obsidian-neighbouring-files-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[neighbouring-files]] 插件的自述翻译

# 导航到相邻文件

这个 [Obsidian](https://obsidian.md/) 插件添加了两个命令。

- 相邻文件：导航到下一个文件
- 相邻文件：导航到上一个文件

这使您可以导航到当前活动文件之前或之后的文件。

文件根据它们的文件名进行排序。

## 例子

- 从 `2023-W17` 导航到下一个周次 `2023-W18`
- 从 `2023-04-31` 导航到下一个日次 `2023-05-01`
- 从 `CS4` 导航到下一个文件 `CS5`

## 我如何使用这个

我使用 [obsidian-vimrc-support](https://github.com/esm7/obsidian-vimrc-support) 插件将这两个命令映射到快捷键上。

这是我在 `.obsidian.vimrc` 中的配置。

```vimrc
" navigation to neighbouring files
exmap next_file obcommand neighbouring-files-plugin:next
exmap prev_file obcommand neighbouring-files-plugin:prev
nmap gn :next_file
nmap gp :prev_file
```

这使我能够快速导航到相邻的文件。

注意：这仅在编辑器模式下有效。
