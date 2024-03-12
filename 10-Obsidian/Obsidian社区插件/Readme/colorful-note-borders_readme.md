---
uid: 20230817224052
title: Obsidian 插件：Colorful Note Borders
tags: ['obsidian插件', 'readme']
description: 根据文件夹位置或前置元数据，为笔记添加可自定义的彩色边框，增强Obsidian中的视觉组织。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Colorful Note Borders

> [!Note] 插件名片
> - 插件名称：Colorful Note Borders
> - 插件作者：rusi
> - 插件说明：根据文件夹位置或前置元数据，为笔记添加可自定义的彩色边框，增强 Obsidian 中的视觉组织。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/rusi/obsidian-colorful-note-borders)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?colorful-note-borders)

## 概述

根据文件夹位置或前置元数据，为笔记添加可自定义的彩色边框，增强 Obsidian 中的视觉组织。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/rusi/obsidian-colorful-note-borders/master/README.md)

---

## Readme(翻译）

下面是 [[colorful-note-borders]] 插件的自述翻译

Obsidian 的 Colorful Note Borders 插件旨在帮助您根据自定义规则在视觉上区分您的笔记。通过在笔记周围应用彩色边框，您可以根据它们的文件夹位置或特定的 frontmatter 元数据轻松识别和分类它们。

该插件支持两种类型的规则：

1. **基于文件夹的规则**：根据笔记的文件夹位置应用彩色边框。例如，您可以配置一个绿色边框显示在位于 "Inbox" 文件夹中的笔记周围。
2. **基于 frontmatter 元数据的规则**：根据笔记的 frontmatter 元数据应用彩色边框。例如，您可以配置一个红色边框显示在 frontmatter 元数据中具有 "private: true" 属性的笔记周围。

通过使用 Colorful Note Borders 插件，您可以在 Obsidian 中创建一个更有组织和视觉吸引力的工作空间。通过易于配置的设置页面自定义您的笔记外观，允许您动态定义颜色规则。

## 演示

<img src="https://raw.githubusercontent.com/rusi/obsidian-colorful-note-borders/master/assets/ColorfulNoteBordersDemov0.3.gif" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

<img src="https://raw.githubusercontent.com/rusi/obsidian-colorful-note-borders/master/assets/PopupWindow.png" style=" box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px; ">

## 特点

Obsidian 的 Colorful Note Borders 插件提供以下功能：

- 根据可自定义的规则为笔记应用彩色边框。
- 支持两种类型的规则：
  - 文件夹位置
  - Frontmatter 元数据
- 用户可以在设置页面中添加、编辑和删除规则。
- 用户可以重新排序规则，以确定多个规则匹配时哪个规则优先生效。第一个规则优先生效。
- 与 Obsidian 的浅色和深色模式兼容。

## 安装

要安装 Colorful Borders 插件，请按照以下步骤操作：

1. 打开你的 Obsidian vault
2. 转到设置页面（点击左侧边栏中的齿轮图标）
3. 导航到第三方插件，并确保“安全模式”切换关闭
4. 点击“浏览”并搜索“Colorful Note Borders”
5. 点击“安装”Colorful Note Borders 插件
6. 安装完成后，点击“启用”以激活插件

使用 BRAT 进行手动安装

BRAT（Beta Reviewers Auto-update Tester）是 Obsidian 的一个插件，允许您安装和管理尚未获得批准并包含在 Obsidian 插件目录中的插件。您可以使用 BRAT 手动安装 Colorful Borders 插件。

### 先决条件

- Obsidian 0.9.7 或更高版本

### 安装步骤

1. 打开你的 Obsidian vault。
2. 进入设置页面（点击左侧边栏的齿轮图标）。
3. 导航到第三方插件，并确保“安全模式”开关处于关闭状态。
4. 点击“浏览”并搜索“BRAT”。
5. 在 BRAT 插件上点击“安装”。
6. 安装完成后，点击“启用”以激活 BRAT 插件。
7. 导航到插件选项并点击“BRAT”。
8. 在“插件存储库 URL”字段中，输入 Colorful Borders 插件的 GitHub 存储库 URL（`https://github.com/rusi/obsidian-colorful-note-borders`）。
9. 点击“添加插件”。
10. 点击“更新插件”以下载并安装 Colorful Note Borders 插件。
11. 在 Obsidian 设置中导航到第三方插件。
12. 在“已安装插件”列表中找到 Colorful Note Borders 插件，并点击“启用”以激活它。

现在，Colorful Note Borders 插件应该已经安装并激活。请按照前面的章节中的使用说明来配置插件。

使用方法

要配置 Colorful Note Borders 插件，请按照以下步骤进行操作：

1. 进入 Obsidian vault 中的设置页面
2. 导航到插件选项并点击“Colorful Note Borders”
3. 在设置页面中，您可以通过点击“添加新规则”按钮或每个规则旁边的“删除”按钮来添加或删除规则
4. 通过提供以下内容来配置每个规则：
    - 规则名称
    - 要匹配的值（例如，文件夹名称或 frontmatter 元数据值）
    - 规则类型（文件夹位置的“Path”或 frontmatter 元数据的“Frontmatter”）
    - 边框颜色（使用颜色选择器或输入颜色十六进制代码）
5. 保存您的设置

插件将根据您配置的规则自动将彩色边框应用于您的笔记。如果笔记与规则匹配，则边框将显示在笔记的内容周围。

## 支持

如果您遇到任何问题或有功能请求，请在插件的 GitHub 存储库上创建一个问题。

## 许可证

该插件使用 MIT 许可证。有关更多信息，请参阅插件的 GitHub 存储库中的 LICENSE 文件。
