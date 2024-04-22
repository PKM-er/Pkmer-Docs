---
uid: 2024042221313206
title: Obsidian 插件：【Readme】PARA Workflower
tags: ['obsidian插件', 'readme']
description: 在使用PARA方法开始和工作于您的保险库时有用的命令。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】PARA Workflower

> [!Note] 插件名片
> - 插件名称：PARA Workflower
> - 插件作者：KevTheDevX
> - 插件说明：在使用 PARA 方法开始和工作于您的保险库时有用的命令。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/trucke/para-workflower)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?para-workflower)

## 概述

在使用 PARA 方法开始和工作于您的保险库时有用的命令。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/trucke/para-workflower/master/README.md)

---

## Readme(翻译）

下面是 [[para-workflower]] 插件的自述翻译

# PARA 工作流插件

`PARA工作流插件` 是一个 Obsidian 插件，可以让您更轻松地使用 Tiago Forte 的 PARA 方法管理您的 Vault。
该插件为您提供了一些非常有用的命令，可以

- 初始化您的 Vault 并准备使用此插件的 PARA 方法
- 创建一个新项目/领域/资源
- 存档当前项目
- 使用模糊搜索恢复当前项目或存档的项目

## 什么是 PARA 方法？

关于 PARA 方法及其好处的完整文章可以在 Tiago Forte 的 [博客文章](https://fortelabs.co/blog/para/) 中找到。

## 安装

> [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 是必需的，请先安装它。

> 启用核心插件 `Templates` 并将模板文件夹配置为 `Templates`
`PARA Workflower` 在 Obsidian 社区插件浏览器中可用！

1. 在 Obsidian 的社区插件浏览器中搜索 "PARA Workflower"
2. 在 Obsidian 设置中启用插件（在“社区插件”下找到“PARA Workflower”）。
3. 检查设置（您可以自定义 PARA 笔记的目录）
前往 [releases](https://github.com/trucke/para-workflower/releases) 并下载最新的 `main.js` 和 `manifest.json` 文件。
在 `.obsidian/plugins` 文件夹内创建一个名为 `para-workflower` 的文件夹，并将这两个文件放入其中。

## 命令

> 打开命令面板（默认）：`CTRL+p` 或 `CMD+p`

| 命令                               | 描述                                                                                                                                     |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `Initialize vault`                  | 通过创建 PARA 文件夹结构和生成项目、区域、资源模板来初始化您的保险库                                      |
| `Create new Project`                | 打开一个模态框以加快创建新项目的速度，将新项目放在您的项目文件夹下，并将项目状态设置为 `draft` |
| `Create new Area`                   | 打开一个模态框以加快创建新区域的速度，将新区域放在您的区域文件夹下，并为新区域创建一个伴随文件夹  |
| `Create new Resource`               | 打开一个模态框以加快创建新资源的速度，将新资源放在您的资源文件夹下                                            |
| `Archive current project`           | 将当前打开项目的状态设置为 `aborted` 并将其移动到您的存档文件夹                                                  |
| `Restore open project from archive` | 将当前打开和已存档项目的状态设置为 `pending` 并将其从存档文件夹移动到项目文件夹                   |
| `Restore project from archive`      | 打开一个模态框，其中包含模糊搜索，以快速找到要恢复的存档项目                                                       |
| `Complete project`                  | 将当前打开和活动项目设置为已完成，将 `completed` 设置为 `true`，将状态设置为 `done` 并移动到存档文件夹                           |

## 提示

为了获得更好的用户体验，请考虑配置以下设置：

- `Editor -> 'Default view for new tabs'` --> `Reading view`
- `Editor -> 'Default editing mode'` --> `Source mode`
- `Editor -> 'Properties in document'` --> `Source`

| 状态             | 描述                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------- |
| `draft`          | 项目已创建或初始化；必须定义或需要进一步规范                                                              |
| `pending`        | 项目已经明确定义并准备好进行                                                                                  |
| `in_process`     | 项目目前正在开发中                                                                                            |
| `postprocessing` | 项目大部分已完成，但需要一些额外的文档或其他后处理（此步骤是可选的）                                       |
| `done`           | 项目已完成并已记录                                                                                           |

## 致谢

Big shout out, to the following amazing projects i relied on:

- [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes)
- [Obsidian Periodic PARA](https://github.com/quanru/obsidian-periodic-para)
- [para-shortcuts](https://github.com/gOATiful/para-shortcuts)

## 进一步改进与支持

欢迎贡献。

非常欢迎贡献者，我感谢每一个贡献。

您可以创建一个问题来报告错误，建议改进此插件，提出问题等。

您可以发起一个拉取请求来为此插件的开发做出贡献。
