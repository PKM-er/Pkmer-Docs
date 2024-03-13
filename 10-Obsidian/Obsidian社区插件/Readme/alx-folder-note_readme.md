---
uid: 2023080322135658
title: "Obsidian 插件：AidenLx's Folder Note"
tags: ['笔记文件处理', 'obsidian插件', 'readme']
description: 使用文件夹笔记为文件夹添加描述、摘要和更多信息。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：AidenLx's Folder Note

> [!Note] 插件名片
> - 插件名称：AidenLx's Folder Note
> - 插件作者：AidenLx
> - 插件说明：使用文件夹笔记为文件夹添加描述、摘要和更多信息。
> - 插件分类：[' 笔记文件处理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/aidenlx/alx-folder-note)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?alx-folder-note)

## 概述

使用文件夹笔记为文件夹添加描述、摘要和更多信息。

![AidenLx's Folder Note](https://cdn.pkmer.cn/covers/alx-folder-note.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/aidenlx/alx-folder-note/master/README.md)

---

## Readme(翻译）

下面是 [[alx-folder-note]] 插件的自述翻译

# AidenLx 的文件夹笔记

使用文件夹笔记为文件夹添加描述、摘要和更多信息。

alx-folder-note 是一个维护的、完全重写的、改进的文件夹笔记插件，涵盖了原始 [文件夹笔记插件](https://github.com/xpgo/obsidian-folder-note-plugin) 的所有核心功能（除了文件夹概览），具有增强的文件资源管理器补丁和许多改进的用户体验，旨在使带有笔记的文件夹与原生文件一样无缝地工作。

特别感谢原始 [文件夹笔记插件](https://github.com/xpgo/obsidian-folder-note-plugin) 的作者 [xpgo](https://github.com/xpgo)！

![演示](https://user-images.githubusercontent.com/31102694/128635308-0a58279e-8bf0-4608-9330-fe11180953dd.png)

注意：

1. 从 v0.13.0 开始，文件夹概览（folderv）已成为可选组件，您可以转到设置选项卡的文件夹概览部分进行安装。
2. 从 v0.11.0 开始，此插件需要 [folder-note-core](https://github.com/aidenlx/folder-note-core) 才能正常工作。对于旧用户，请查看 [这里](https://github.com/aidenlx/alx-folder-note/wiki/migrate-from-v0.10.0-and-lower) 以获取迁移指南。

## 简介

- [轻松创建文件夹笔记](https://github.com/aidenlx/alx-folder-note/wiki/create-folder-note)，支持 [多个偏好设置](https://github.com/aidenlx/alx-folder-note/wiki/folder-note-pref) 和 [模板支持](https://github.com/aidenlx/alx-folder-note/wiki/core-settings#template)
- 文件夹和文件夹笔记一起工作
  - [单击文件资源管理器中的文件夹以打开文件夹笔记](https://github.com/aidenlx/alx-folder-note/wiki/open-folder-note-from-folder)
  - [文件夹和链接的笔记同步为一体](https://github.com/aidenlx/alx-folder-note/wiki/core-settings#auto-rename)：从文件夹笔记更改文件夹名称；文件夹笔记随文件夹移动
  - [在文件资源管理器中隐藏文件夹笔记](https://github.com/aidenlx/alx-folder-note/wiki/core-settings#hide-note-in-explorer)
  - [在文件资源管理器中显示链接的文件夹](https://github.com/aidenlx/alx-folder-note/wiki/core-settings#hide-note-in-explorer)<br><img width="300px" src="https://user-images.githubusercontent.com/31102694/128694966-6517df3b-8994-408d-bf6c-49a5ea16b7be.gif"/>
  - [从文件夹笔记中删除文件夹](https://github.com/aidenlx/alx-folder-note/wiki/delete-folder-from-folder-note)
- [创建文件夹概览](https://github.com/aidenlx/alx-folder-note/wiki/folder-overview) 使用代码块 `folderv`（可选）
  - 使用简要卡片查看文件夹中的所有文件
  - 在前置元数据中指定标题和描述（使用 [可自定义的字段名称](https://github.com/aidenlx/alx-folder-note/wiki/folderv-settings#field-names)）
  - 如果未指定标题，[从 h1 中获取标题](https://github.com/aidenlx/alx-folder-note/wiki/folderv-settings#h1-as-title-source)
  - 使用正则表达式/通配符 [过滤文件](https://github.com/aidenlx/alx-folder-note/wiki/folderv-options#filter)
  - 按名称/创建时间/最后修改时间 [对文件进行排序](https://github.com/aidenlx/alx-folder-note/wiki/folderv-options#sort)
- 文件夹焦点模式：在文件资源管理器中右键单击文件夹，选择“切换焦点”可以使选定文件夹之外的其他文件和文件夹变暗，再次选择选项可以恢复![CleanShot_2021-11-29_at_18 30 53](https://user-images.githubusercontent.com/31102694/166448049-aea0457a-d19f-4b29-8f7c-b66b5bd26629.gif)
    - 您还可以在文件资源管理器中使用鼠标长按文件夹名称来切换文件夹焦点（默认禁用，仅适用于桌面版）
- [文件资源管理器中的文件夹图标](https://github.com/aidenlx/alx-folder-note/issues/11)
更多功能即将推出：

- [ ] `folderv`：显示 [在 dataview/frontmatter 字段中指定的子项](https://github.com/SkepticMystic/breadcrumbs/wiki/Relationships---Basics)（与 [relation-resolver 插件](https://github.com/aidenlx/relation-resolver) 配合使用）
- [ ] `folderv`：列表视图

如何使用

更多详细信息请查看 [wiki](https://github.com/aidenlx/alx-folder-note/wiki)

## 兼容性

所需的 API 功能仅适用于 Obsidian v0.14.8+。

## 安装

注意：从 v0.11.0 开始，此插件需要 [folder-note-core](https://github.com/aidenlx/folder-note-core) 来正常工作，该插件也可以在社区插件列表中找到。

### 来自 Obsidian

1. 打开“设置”>“第三方插件”
2. 确保安全模式处于关闭状态
3. 点击“浏览社区插件”
4. 搜索此插件
5. 点击“安装”
6. 安装完成后，关闭社区插件窗口，插件即可使用。

### 来自 GitHub

1. 从 GitHub 存储库的 Releases 部分下载最新版本
2. 将文件放入您的保险库的插件文件夹中：`<vault>/.obsidian/plugins/alx-folder-note`
3. 重新加载 Obsidian
4. 如果提示安全模式，您可以禁用安全模式并启用插件。
   否则，前往设置，第三方插件，确保安全模式关闭，
   并从那里启用插件。

> 注意：`.obsidian` 文件夹可能是隐藏的。在 macOS 上，您可以按 `Command+Shift+Dot` 来在 Finder 中显示该文件夹。