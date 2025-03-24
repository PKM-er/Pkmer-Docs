---
uid: 20241225102136
title: Obsidian 插件：Iconic 轻松为文件夹、文件、标签选项卡修改图标
tags: ['图标', '美化', '编辑工具', 'obsidian插件']
description: Obsidian 插件：Iconic 轻松为文件夹、文件、标签选项卡修改图标
author: OS
type: auto
draft: false
editable: false
modified: 20250217143507
---

# Obsidian 插件：Iconic 轻松为文件夹、文件、标签选项卡修改图标

## 概述

推荐这个插件的理由，主要是这个插件将你能想到的图标相关问题都一并解决了。

使用 Obsidian 的过程中，最多在图标美化和易用体感上被问到的问题，你都能在这个插件上找到答案：

- 给 Obsidian 默认的文件管理器增加文件夹、文件修改图标
- 给 Obsidian 多页签更改图标
- 给放在侧边栏的内容修改图标
- 给功能区的内容修改图标

> [!Note] 插件名片
> - 插件名称：Iconic
> - 插件作者：Holo
> - 插件说明：直接返回源格式相同的译文：直接从用户界面定制您的应用程序图标，包括选项卡、文件、书签、属性和功能区命令。
> - 插件分类： [' 图标 ', ' 美化 ', ' 编辑工具 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/gfxholo/iconic)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?iconic)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/gfxholo/iconic/main/README.md)

## 效果&特性

- 可以直接从 UI 自定义应用程序图标，包括标签、文件、书签、属性和功能区命令。
- 插件内置超过 1300 个应用程序图标和超过 1900 个设备支持的 emoji 符号。

![Iconic|800](https://cdn.pkmer.cn/covers/iconic.webp!pkmer)

## 使用

### 给文件夹增加和修改图标

- 直接在文件夹使用右键，在右键菜单/上下文菜单中选择，更改图标
- 你也可以通过直接点击文件管理器的图标来呼出修改菜单
![image.png|650](https://cdn.pkmer.cn/images/20250217140918.png!pkmer)
- 默认可以使用内置图标，且内置图标可以修改颜色
- 也可以勾选 emoji 图标，使用 emoji 来表示图标
- 其他类型，操作方法相似

可以通过名称搜索每个图标和表情符号，并根据需要选择 9 种可选颜色。

与其他插件 *Iconize* 相比，**Iconic** 还可以设置插件标签、属性、功能区以及某些其他 UI 按钮的图标，直接单击编辑图标，以及在同一对话框中更改图标和颜色。如果您需要特定的 RGB 颜色，可以通过右键单击气泡来打开完整的颜色选择

## 高级功能

可以根据各种条件自动化文件和文件夹图标修改，例如根据它们的名称、扩展名、父文件夹、标签、属性值、创建或修改它们的日期，甚至一天中的当前时间。自动图标永远不会删除您的自定义图标，只会在视觉上替换它们，所以可以随心所欲地进行修改。

从功能区、插件设置或使用“打开规则手册”命令打开规则手册。规则手册中目前有两个页面：文件规则和文件夹规则，分别影响文件和文件夹。

![image.png](https://cdn.pkmer.cn/images/20250217142740.png!pkmer)

- 单击绿色（+）创建新规则
- 然后单击⚙️ 打开规则编辑器。
- 每个规则都有一个图标，它将推翻任何符合该规则条件的图标。
- 规则可以有多个条件，可以使用“全部/任意/无”按钮控制如何解释这些条件。
- `Icon` ：基于设置到文件/文件夹的图标
- `Color`：基于文件/文件夹的颜色设置
- `Name`： 基于文件/文件夹的简单名称
- `Filename`： 基于文件名检查 File.md 的全名
- `Extension`： 基于扩展名检查文件扩展名，如 md、canvas、jpg 等。
- `Folder tree` ：基于文件夹树检查部分 Path/Leading/To/Your/文件
- `Path in vault` ：基于 vault 中的 Path 检查整个 Path/Leading/To/Your/File.md
- `Headings` 基于标题检查注释中的#标题
- `Links`：基于链接检查注释中的 `[[Links]]`
- `Tags` 基于标签检查笔记中的标签，包括#hashtags 和 Tags: 属性
- `Properties` 基于笔记属性检查特定属性：在注释内
- `Date created` 基于检查文件创建的日期
- `Date modified` 基于检查文件修改的日期
- `System clock` 基于检查操作系统时间
