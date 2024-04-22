---
uid: 2024042221334223
title: Obsidian 插件：【Readme】Amazing Marvin Integration
tags: ['obsidian插件', 'readme']
description: 与Amazing Marvin（非官方）集成。支持导出AM任务/项目，创建新任务和完成任务。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Amazing Marvin Integration

> [!Note] 插件名片
> - 插件名称：Amazing Marvin Integration
> - 插件作者：Cloud Atlas
> - 插件说明：与 Amazing Marvin（非官方）集成。支持导出 AM 任务/项目，创建新任务和完成任务。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/cloud-atlas-ai/obsidian-am)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cloudatlas-o-am)

## 概述

与 Amazing Marvin（非官方）集成。支持导出 AM 任务/项目，创建新任务和完成任务。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cloud-atlas-ai/obsidian-am/master/README.md)

---

## Readme(翻译）

下面是 [[cloudatlas-o-am]] 插件的自述翻译

# 黑曜石 Amazing Marvin 插件

这个插件为 [Obsidian](https://obsidian.md) 实现了与 Amazing Marvin 的同步，Amazing Marvin 是一个全面的任务管理和计划系统。它由您的生产力好友 [Cloud Atlas](https://www.cloud-atlas.ai/) 开发和维护，为同时使用这两个平台的用户提供了无缝集成。

## 令人惊叹的 Marvin 插件概述

Amazing Marvin 插件提供了一种将您的任务和项目结构直接从 Amazing Marvin 带入到 Obsidian vault 的方法。它尊重 Amazing Marvin 的类别和项目层次结构，在 Obsidian 中创建匹配的文件夹和笔记结构。

### 主要特点

- **同步分类和项目**：将 Amazing Marvin 的分类和项目转换为 Obsidian 的文件夹和笔记，保持原始层次结构不变。
- **任务集成**：将任务转换为 Markdown 的待办事项列表项，嵌套子任务正确缩进。
- **父链接**：为了方便导航，子分类和子项目的笔记包含到它们的父分类或项目的反向链接。
- **Wiki 链接**：将 Amazing Marvin 的子分类和项目添加为 Wiki 链接。
- **分类和项目是文件夹笔记**：分类和项目被创建为文件夹笔记，与 [Obsidian文件夹笔记](https://github.com/LostPaul/obsidian-folder-notes) 兼容。
- **任务创建**：用户可以在 Obsidian 中直接创建 Amazing Marvin 任务，支持标准的 Marvin 速记符号，如 `+` 表示日期或 `@` 表示标签。
- **深度链接**：每个任务和分类都配备了深度链接，提供快速返回到 Amazing Marvin 的导航。

## 使用说明

### 同步方向

Obsidian Amazing Marvin 插件目前支持单向同步。它将数据从 Amazing Marvin 导入并更新到您的 Obsidian 保险库中，但不会将在 Obsidian 中进行的更改导出或同步回 Amazing Marvin。

### 同步行为

每次同步操作都会执行全新的导入：

- 插件首先会移除之前同步过的现有类别/项目笔记和文件夹。
- 然后根据来自 Amazing Marvin 的最新数据创建新的笔记和文件夹。

### 运行同步

要启动同步：

1. 使用 `Ctrl/Cmd + P` 打开 Obsidian 的命令面板。
2. 搜索并选择命令 `Sync Amazing Marvin categories and projects`。
3. 然后插件将更新您的 Obsidian 保险库，使用当前的结构和内容从 Amazing Marvin。

一旦同步完成，您的 Obsidian 保险库将包含一个新的 `AmazingMarvin` 文件夹。在其中，您将找到与 Amazing Marvin 中的类别和项目对应的结构化笔记。

### 创建一个 Marvin 任务

任务创建对话框旨在紧密模拟在 Amazing Marvin 中输入任务的体验。它包括以下功能：

- 使用 `#` 语法或搜索子对话框自动完成类别和项目。
- 识别简写符号，如开始日期（`~`）、截止日期（`@`）和标签（`+`）的属性。
- 在任务创建时，在光标位置将 Marvin 任务的深度链接作为链接放置在 Obsidian 中。
- 创建的 Marvin 任务包含一个高级 URI 友好的链接，可以返回到激发任务的 Obsidian 笔记。

要创建一个任务：

1. 使用 `Ctrl/Cmd + P` 打开 Obsidian 的命令面板。
2. 搜索并选择命令 `Create Marvin Task`。
3. 输入任务详细信息，并从下拉菜单中选择适当的类别，该下拉菜单在您输入时会显示建议。
4. 在任务创建时，在 Obsidian 中插入一个带有指向 Marvin 任务的链接的 Markdown 复选框项目，位置在您的光标位置。

### 自动标记为已完成功能

在这个版本中的一个亮点是在 Obsidian 中勾选任务后，能够自动将任务标记为已完成在 Amazing Marvin 中。当在插件设置中启用此功能时，在 Obsidian 笔记中勾选任务后，将自动更新 Amazing Marvin 中的任务状态。

以下是如何启用此功能：

1. 进入 `设置 > Obsidian Amazing Marvin 插件`。
2. 勾选选项 `尝试在Obsidian中勾选任务时在Amazing Marvin中标记为已完成`。
3. 保存设置。

现在，当您在 Obsidian 笔记中勾选带有 Amazing Marvin 链接的任务时，将会向 Amazing Marvin 发送请求，在那里也将任务标记为已完成。

### 重要考虑事项

- **数据丢失**：在 Obsidian 中编辑由 Amazing Marvin 生成的笔记时要小心，因为这些更改将被下一次同步覆盖。
- **建议备份**：在运行同步之前最好备份您的 Obsidian 保险库，特别是如果您对已同步的笔记进行了本地修改。

遵循这些准则，您可以确保您的 Amazing Marvin 数据在 Obsidian 中得到准确反映，同时注意插件当前的限制。

## 安装

### 使用 BRAT

1. 安装 BRAT 插件
    1. 打开 `设置` -> `社区插件`
    2. 如果启用了安全模式，请禁用
    3. *浏览*，搜索 "BRAT"
    4. 安装最新版本的**Obsidian42 - BRAT**
2. 打开 BRAT 设置（`设置` -> `BRAT`）
    1. 滚动到 `Beta插件列表` 部分
    2. `添加Beta插件`
    3. 指定此存储库：`cloud-atlas-ai/obsidian-am`
3. 启用 `Amazing Marvin` 插件（`设置` -> `社区插件`）

### 手动

1. 如果您尚未在 Obsidian 中启用社区插件，请按照这些 [说明](https://help.obsidian.md/Extending+Obsidian/Community+plugins#Install+a+community+plugin) 进行操作。
2. 从 [发布页面](https://github.com/cloud-atlas-ai/obsidian-am/releases) 下载 `cloudatlas-obsidian-am.zip`。
3. 解压缩发布文件并将该目录复制到您的保险库插件文件夹中：`<vault>/.obsidian/plugins/cloudatlas-o-am`。
4. 重新启动 Obsidian 以识别新插件。
5. 在 Obsidian 的设置中的“社区插件”下，找到并启用 Obsidian Amazing Marvin 插件。
6. 将您的密钥令牌添加到插件设置中。您可以在 [Amazing Marvin API页面](https://app.amazingmarvin.com/pre?api) 找到您的密钥令牌。

## 开发

1. 确保您的系统上已安装 NodeJS 和 npm。
2. 克隆此存储库。
3. 运行 `npm install` 来安装依赖项。
4. 进行您想要的更改。
5. 使用 `npm run dev` 来监视更改并将插件编译到 `dist/main.js`。

有关更详细的开发说明，请参考 Obsidian 提供的 [示例插件](https://github.com/obsidianmd/obsidian-sample-plugin)。

### 测试

在测试过程中，您将向 Amazing Marvin API 发送大量请求。为了避免达到速率限制，您可以使用桌面本地 API 服务器。有关更多信息，请参阅 [桌面本地API服务器](https://help.amazingmarvin.com/en/articles/5165191-desktop-local-api-server)。设置完成后，您可以在插件设置中指定本地 API 服务器。

请注意，本地 API 服务器中不提供 `/api/children` 端点，始终返回 404。我已经跟进了 Amazing Marvin 团队，看看是否可以添加此功能。
