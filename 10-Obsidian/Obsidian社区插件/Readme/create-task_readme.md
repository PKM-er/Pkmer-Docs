---
uid: 2024022117270774
title: Obsidian 插件：【Readme】Create Task
tags: ['obsidian插件', 'readme']
description: 在任何地方更快地创建任务。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Create Task

> [!Note] 插件名片
> - 插件名称：Create Task
> - 插件作者：Simon Knittel
> - 插件说明：在任何地方更快地创建任务。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/simonknittel/obsidian-create-task)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?create-task)

## 概述

在任何地方更快地创建任务。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/simonknittel/obsidian-create-task/main/README.md)
>

---

## Readme(翻译）

下面是 [[create-task]] 插件的自述翻译

【机翻】

<h1 align="center">创建任务</h1>

<p align="center">从任何地方更快地创建任务。</p>

<p align="center">
   - •
</p>

<p align="center">
  <a href="https://github.com/simonknittel/obsidian-create-task/blob/main/docs/new-task.png" style="display: block;">
    <img src="https://github.com/simonknittel/obsidian-create-task/blob/main/docs/new-task.png?raw=true" height="240">
  </a>

  <a href="https://github.com/simonknittel/obsidian-create-task/blob/main/docs/settings.png" style="display: block;">
    <img src="https://github.com/simonknittel/obsidian-create-task/blob/main/docs/settings.png?raw=true" height="240">
  </a>
</p>

## 特点和原因

Create Task 旨在改善在 Obsidian 中创建任务的过程。它不会处理创建后的任务管理，因为已经有许多其他插件，比如 [CardBoard](https://github.com/roovo/obsidian-card-board) 和 [Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)。

该插件的主要特点是一个模态框，引导您完成创建任务的各个步骤。您可以以多种不同的方式打开此模态框（详见 [用法](#usage) 以获取更多详细信息）。

- 您可以配置多个 _目标笔记_。其他插件通常将所有任务保存在单个笔记中。对于我的用例，我希望根据我正在工作的项目将任务存储在不同的笔记中。
- 您可以配置一个标签，该标签将附加到创建的任务中。在使用 CardBoard 插件时，这很有帮助，因为它们的列是基于标签的。
- 您可以为任务设置截止日期，并使用 [自然语言](https://github.com/wanasit/chrono) 来定义这些日期。您还可以配置输出格式，因为其他插件使用不同的格式来处理日期。

## 安装

### 官方插件浏览器

<https://obsidian.md/plugins?id=create-task>

### 手动

1. 下载 [最新版本](https://github.com/simonknittel/obsidian-create-task/releases/latest/download/obsidian-create-task.zip)
2. 解压 `.zip` 文件
3. 将解压后的目录移动到您的保险库插件目录（`.obsidian/plugins/`）
4. 重新启动 Obsidian
5. 启用插件

## 用法

### 命令面板

您可以使用 Obsidian 的 [命令面板](https://help.obsidian.md/Plugins/Command+palette) 来打开模态框或此插件的设置。

![命令面板的截图](https://cdn.pkmer.cn/covers/create-task_2_0.png!pkmer)

### 标签菜单

您可以通过单击 [Obsidian的标签菜单](https://help.obsidian.md/User+interface/Ribbon) 中的此插件图标来打开模态框。

![标签菜单的截图](https://cdn.pkmer.cn/covers/create-task_2_1.png!pkmer)

### URL scheme / Obsidian URI

此插件支持 [URL scheme/Obsidian URI 标准](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI)。

使用此 URL (`obsidian://create-task`) 将自动启动 Obsidian 并打开模态框。

您可以使用参数来预填模态框的部分内容：

- 这将预填目标笔记输入：`note-path=Unsorted%20TODOs.md`
- 这将预填任务描述输入：`task-description=Do%20stuff`
- 这将预填任务详细信息输入：`task-details=More%20info`
- 这将预填到期日期输入：`due-date=tomorrow`
- 这将跳过模态框并立即在指定的笔记中创建任务：`create=true`
以下是一些您可以使用 URL 的示例：

##### Raycast

1. 打开 Raycast
2. 搜索 `Create Quicklink`
3. 填写表单
   - 名称: 创建任务
   - 链接: `obsidian://create-task`
   - 使用以下应用打开: `Obsidian`
4. 保存快速链接
5. 现在您可以打开 Raycast 并搜索 `Create task` 来启动 Obsidian 并打开模态窗口。

<img src="https://github.com/simonknittel/obsidian-create-task/blob/main/docs/raycast-quicklink.png?raw=true" height="240" />

##### Windows 开始菜单/搜索

1. 在 `C:\Users\<your-username>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs` 中创建一个 Windows 快捷方式
2. 对于 `项目的位置`，使用 url：`obsidian://create-task`
3. 对于 `项目的名称`，使用：`创建任务`
4. 保存快捷方式
5. 现在您可以使用 Windows 搜索并搜索 `创建任务`。您还可以将此快捷方式固定到开始菜单。

##### 谷歌 Chrome 书签

1. 通过右键单击书签栏并选择“添加页面...”来创建书签
2. 对于“名称”，请使用：“创建任务”
3. 对于“URL”，请使用网址：“obsidian://create-task”

<img src="https://github.com/simonknittel/obsidian-create-task/blob/main/docs/google-chome-bookmark.png?raw=true" height="240" />
你可以使用_Automate_创建一个在主屏幕上打开创建模态框的快捷方式。

1. 安装 Automate
2. 在 Automate 中创建一个新的 _Flow_
3. 将一个 _App start_ 块附加到 _Flow beginning_ 块
4. 配置 App start 块
   - Package: `md.obsidian`
   - Activity class: `md.obsidian.MainActivity`
   - Action: `View`
   - Data URI: `obsidian://create-task`
5. 保存 Flow
6. 在主屏幕上添加一个新的小部件
7. 从 Automate 中选择 _Flow shortcut_ 小部件
8. 为小部件选择新创建的 Flow
9. 现在你可以通过点击新的主屏幕小部件来打开 Obsidian 和创建模态框。



