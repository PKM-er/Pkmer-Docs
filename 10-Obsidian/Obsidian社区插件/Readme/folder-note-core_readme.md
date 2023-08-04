---
uid: 2023080322184220
title: Obsidian 插件：【Readme】Folder Note Core
tags: ['笔记文件处理', 'obsidian插件', 'readme']
description: 提供文件夹笔记的核心功能和API
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Folder Note Core

> [!Note] 插件名片
> - 插件名称：Folder Note Core
> - 插件作者：AidenLx
> - 插件说明：提供文件夹笔记的核心功能和 API
> - 插件分类：[' 笔记文件处理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aidenlx/folder-note-core)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?folder-note-core)

## 概述

提供文件夹笔记的核心功能和 API

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aidenlx/folder-note-core/master/README.md)
>

---

## Readme(翻译）

下面是 [[folder-note-core]] 插件的自述翻译

# 文件夹笔记核心功能

为 [文件夹笔记](https://github.com/aidenlx/alx-folder-note) 提供核心功能和 API。

- [轻松创建文件夹笔记](https://github.com/aidenlx/alx-folder-note/wiki/create-folder-note)，支持 [多个偏好设置](https://github.com/aidenlx/alx-folder-note/wiki/folder-note-pref) 和 [模板支持](https://github.com/aidenlx/alx-folder-note/wiki/core-settings#template)
- 文件夹和文件夹笔记作为一个整体工作
  - [文件夹和链接的笔记同步为一个整体](https://github.com/aidenlx/alx-folder-note/wiki/core-settings#auto-rename)：从文件夹笔记更改文件夹名称；文件夹笔记随文件夹移动
  - [从文件夹笔记中删除文件夹](https://github.com/aidenlx/alx-folder-note/wiki/delete-folder-from-folder-note)

如何使用

### 对于用户

该插件旨在为文件夹笔记提供以下基本功能：

- 上下文菜单中的命令和选项，用于删除/创建文件夹笔记
- 同步文件夹和文件夹笔记的名称和位置

对于文件资源管理器补丁和文件夹概览等高级功能，请使用 [alx-folder-note v0.11.0+](https://github.com/aidenlx/alx-folder-note) 安装此插件。

### 对于开发者

1. 在你的插件目录中运行 `npm i -D @aidenlx/folder-note-core`
2. 导入 API（添加 `import { getApi, isPluginEnabled, registerApi } from "@aidenlx/folder-note-core"`）
3. 使用 API
   1. 检查是否启用：`isPluginEnabled(YourPluginInstance)`
   2. 访问 API：`getApi()` / `getApi(YourPluginInstance)`
   3. 在 API 准备好时使用：`registerApi(YourPluginInstance, (api)=>{// do something })`
   4. 绑定事件：`YourPluginInstance.registerEvent(YourPluginInstance.app.vault.on("folder-note:...",(...)=>{...}))`

## 兼容性

所需的 API 功能仅适用于 Obsidian v0.13.24+。

## 安装

### 来自 Obsidian

1. 打开“设置”>“第三方插件”
2. 确保安全模式处于关闭状态
3. 点击“浏览社区插件”
4. 搜索此插件
5. 点击“安装”
6. 安装完成后，关闭社区插件窗口，补丁即可使用。

### 来自 GitHub

1. 从 GitHub 存储库的 Releases 部分下载最新版本
2. 将文件放入您的保险库的插件文件夹中：`<vault>/.obsidian/plugins/folder-note-core`
3. 重新加载 Obsidian
4. 如果提示安全模式，您可以禁用安全模式并启用插件。
   否则，前往设置，第三方插件，确保安全模式关闭，
   并从那里启用插件。

> 注意：`.obsidian` 文件夹可能是隐藏的。在 macOS 上，您可以按 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。