---
uid: 2023080322253527
title: Obsidian 插件：【Readme】Rapid Notes
tags: ['obsidian插件', 'readme']
description: 快速在特定文件夹中创建和放置基于预定义前缀的笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Rapid Notes

> [!Note] 插件名片
> - 插件名称：Rapid Notes
> - 插件作者：valteriomon
> - 插件说明：快速在特定文件夹中创建和放置基于预定义前缀的笔记。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/valteriomon/obsidian-rapid-notes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-rapid-notes)

## 概述

快速在特定文件夹中创建和放置基于预定义前缀的笔记。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/valteriomon/obsidian-rapid-notes/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-rapid-notes]] 插件的自述翻译


# 快速笔记插件

使用设置中定义的前缀，在创建时将笔记放置在特定文件夹中。

如何使用

在插件设置中添加前缀/文件夹对，注意前缀必须是单词且区分大小写。每个前缀和文件夹只能使用一次。当你运行“Rapid Notes: New note”命令（可以绑定到新的热键或替换默认的“创建新笔记”热键）时，如果你输入了之前设置的前缀，它将用于创建一个新的笔记，使用输入值而不包含前缀作为名称。如果没有匹配的前缀，将打开一个文件夹建议。如果你的输入以斜杠“/”开头，则前缀将被忽略，你将始终被提示选择文件夹。

## 基本用法示例

如果你的保险库中有一个名为`JavaScript`的文件夹，你在其中保存所有关于JavaScript的笔记，你可以在Rapid Notes的设置中添加前缀`js`并将其分配给该文件夹。当触发创建新笔记的命令时，你可以在提示符中输入`js Promises`，然后一个名为`Promises`的新文件将保存到`JavaScript`文件夹中。

![基本用法示例](./assets/basic-usage.gif)

## 转义前缀的示例

如果你已经设置了`js`前缀，但是你想创建一个名为`js rulez`的新文件，那么你只需要在提示框中输入`/js rulez`，然后会提示你选择在哪里创建新文件。

![基本用法示例](./assets/escape-filenames.gif)

## 考虑事项

- 您可以将Rapid Notes与[Templater插件](https://github.com/SilentVoid13/Templater)结合使用，以进一步加快工作流程，为文件夹分配模板并启用在创建文件时触发Templater的设置。
- 我考虑为将快速笔记添加到收件箱文件夹（或vault根目录）而创建一个特殊的前缀，而不需要使用文件夹建议器进行提示，但目前我只是使用默认的新建笔记功能，并将收件箱文件夹设置为“新建笔记的默认位置”。

## 手动安装插件

1. 从发布中下载 `main.js`、`styles.css`、`manifest.json`。
2. 在你的 vault 的插件文件夹中创建一个名为 `obsidian-rapid-notes` 的文件夹（`VaultFolder/.obsidian/plugins/`）。
3. 将下载的文件添加到 `obsidian-rapid-notes` 文件夹中。
4. 在设置窗口中启用插件。

## 开发

1. 克隆此存储库并将其放置在`.obsidian/plugins/`文件夹中的新保险库中进行开发。
2. 安装NodeJS，然后在存储库文件夹下的命令行中运行`npm i`。
3. 运行`npm run dev`将`main.ts`编译为`main.js`。
4. 对`main.ts`进行更改（或创建新的`.ts`文件）。这些更改应自动编译为`main.js`。
5. 重新加载Obsidian以加载插件的新版本（在命令面板中选择“重新加载应用程序而不保存”进行刷新）。
6. 在设置窗口中启用插件。

## 鸣谢

该插件是 [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin) 的一个分支，其中用于提示和建议的模块基于 [Liam's Periodic Notes Plugin](https://github.com/liamcain/obsidian-periodic-notes) 和 [SilentVoid13's Templater Plugin](https://github.com/SilentVoid13/Templater)。所有的功劳归原作者所有。



