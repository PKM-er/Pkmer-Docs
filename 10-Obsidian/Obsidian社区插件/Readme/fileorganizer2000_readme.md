---
uid: 20240312193744
title: Obsidian 插件：【Readme】AI File Organizer 2000
tags: ['obsidian插件', 'readme']
description: Automatically organize notes, annotate photos and audio using AI.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】AI File Organizer 2000

> [!Note] 插件名片
> - 插件名称：AI File Organizer 2000
> - 插件作者：Benjamin Ashgan Shafii
> - 插件说明：Automatically organize notes, annotate photos and audio using AI.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/different-ai/file-organizer-2000)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fileorganizer2000)

## 概述

Automatically organize notes, annotate photos and audio using AI.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/different-ai/file-organizer-2000/master/README.md)

---

## Readme(翻译）

下面是 [[fileorganizer2000]] 插件的自述翻译

# FileOrganizer2000

这是一个使用人工智能来保持文件整理的 Obsidian 插件。它可以转录音频，使用人工智能来注释图像，并自动重命名和移动新文件到最可能的文件夹。

### 特点

- 自动将文件移动到正确的文件夹
- 使用 OpenAI GPT Vision 从图像中提取文本，并创建一个包含提取内容的 markdown 文件。
- 支持文本、音频和图像

### 如何安装（等待 obsidian 商店批准）

1. 从 obsidian 商店安装 [brat](obsidian://show-plugin?id=obsidian42-brat) 插件。
2. 将 <https://github.com/different-ai/file-organizer-2000> 添加到 brat。

### 快速开始

在插件设置中，提供您的 OpenAI API 密钥。就这样 :)

## 如何使用

只需将您的任何文件移动到“收件箱”文件夹，插件将自动将其移动到最可能的文件夹。

### 使用 iOS 快捷方式与 Cass（非必需）

<https://github.com/different-ai/file-organizer-2000/assets/11430621/7565a32f-4e39-4585-b2f6-7c0865d5345d>

### 拍照并自动注释并存储它

<https://github.com/different-ai/file-organizer-2000/assets/11430621/e46b87b0-ede3-4293-bca7-69cbfa8762f8>

## 一个方便访问的小型 iOS 快捷方式

下面的 iOS 快捷方式可以让您轻松地通过手机使用这个插件工作。

<https://www.icloud.com/shortcuts/06915768862848fb9711f2f19b6405e2>

## 工作原理

FileOrganizer 插件旨在自动整理您在 Obsidian 中的文件。以下是其工作流程的简化概述：

1. **文件夹监视**：插件监视您在设置中定义的 Obsidian 保险库中的特定文件夹。在该文件夹中出现任何新文件或重命名的文件都会触发插件的处理流程。
2. **文件检测**：当检测到新文件或重命名的文件时，插件会识别文件类型。例如，它可以区分 markdown、音频和图像文件。
3. **文件转换**：根据文件类型，插件使用人工智能处理文件：

- 对于图像文件，人工智能会生成图像的描述。然后使用该描述创建一个包含图像链接的 markdown 文件。

1. **重命名和移动**：插件为处理后的文件生成一个易于阅读的名称。然后根据文件内容确定文件的适当目标文件夹，并将文件移动到该文件夹中。

例如，如果您将图像文件添加到监视的文件夹中，插件将生成图像的描述，创建一个包含该描述和图像链接的 markdown 文件，为 markdown 文件命名，并将其移动到 Obsidian 保险库中的适当文件夹中。

### 如何使用

1. 导航到您的 `.obsidian/plugins/` 目录。
2. 在 `plugins` 目录中克隆此存储库。
3. 确保您的 NodeJS 版本至少为 v16。您可以通过运行 `node --version` 来检查这一点。
4. 运行 `npm i` 或 `yarn` 安装依赖项。
5. 运行 `npm run dev` 启动编译并进入监视模式。

### 开发

这个插件是使用 TypeScript 开发的。插件的主要逻辑包含在 index.ts、vision.ts 和 name.ts 中。插件使用 Obsidian API 与 Obsidian 应用程序进行交互。

## 待办事项

- [ ] 用本地模型替换 GPT Vision
- [ ] 使人们能够轻松扩展任何工作流程。
- [ ] 切换到 OpenAI 助手 API

### 构建

插件使用 esbuild 进行捆绑。 esbuild 的配置包含在 esbuild.config.mjs 中。

### 注意事项

此插件与您的文件系统进行交互。
