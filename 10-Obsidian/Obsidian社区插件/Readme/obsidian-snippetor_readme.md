---
uid: 20230803213240
title: Obsidian 插件：【Readme】Snippetor
tags: ['obsidian插件', 'readme']
description: 创建和调整常见的片段
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Snippetor

> [!Note] 插件名片
> - 插件名称：Snippetor
> - 插件作者：ebullient
> - 插件说明：创建和调整常见的片段
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/ebullient/obsidian-snippetor)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-snippetor)

## 概述

创建和调整常见的片段



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ebullient/obsidian-snippetor/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-snippetor]] 插件的自述翻译



# Snippetor
[![GitHub标签（按日期最新）](https://img.shields.io/github/v/tag/ebullient/obsidian-snippetor)](https://github.com/ebullient/obsidian-snippetor/releases) ![GitHub所有版本](https://img.shields.io/github/downloads/ebullient/obsidian-snippetor/total?color=success)

Snippetor可以帮助您通过几个按钮点击创建常见的CSS代码片段：
- 自定义任务
- *更多功能即将推出...*

**补充插件**
- [My Snippets](https://github.com/chetachiezikeuzor/MySnippets-Plugin) 用于从状态栏查看/切换您的代码片段
- [Task Collector](https://github.com/ebullient/obsidian-task-collector) 通过几个按键标记您的任务

## 安装 Snippetor

1. 打开 `设置` -> `社区插件`
2. 禁用安全模式
3. **浏览**并搜索 "snippetor"
4. 安装最新版本的 Snippetor
5. 安装完成后直接"启用"插件

### 使用Beta评审员自动更新测试工具（BRAT）进行预览

1. 安装BRAT
    1. 打开“设置”->“社区插件”
    2. 禁用安全模式
    3. *浏览*，并搜索“BRAT”
    4. 安装最新版本的**Obsidian 42 - BRAT**
2. 打开BRAT设置（`设置`->`Obsidian 42 - BRAT`）
    1. 滚动到“Beta插件列表”部分
    2. `添加Beta插件`
    3. 指定此存储库：`ebullient/obsidian-snippetor`
3. 启用插件（`设置`->`社区插件`）

使用插件

1. 打开“设置”->“Snippetor”
2. 创建一个新的代码片段
    1. 选择要创建的代码片段类型：
        - “自定义复选框”用于创建自定义复选框代码片段，或者
        - “彩色文件夹”用于创建自定义导航窗格中文件夹的显示代码片段。
    2. 点击“+”

这将打开一个模态对话框，用于编辑与代码片段相关的设置。

所有模态对话框顶部都有一个字段，用于指定生成的代码片段文件的名称。该名称会自动填充为一个“kebeb-case”字符串。您可以随意用您喜欢的内容替换它。

### 使用你创建的代码片段：

1. 通过点击“魔术棒”按钮生成（或更新）代码片段：
    <img width="750" alt="image" src="https://user-images.githubusercontent.com/808713/170642467-fa1994aa-b4ab-4e83-a03e-6c94a843be16.png">

2. 启用代码片段
    - 设置 -> 外观，向下滚动到底部，确保代码片段存在并已启用
    - 使用像 [MySnippets](https://github.com/chetachiezikeuzor/MySnippets-Plugin) 这样的插件来列出和切换代码片段。

### 自定义复选框

自定义复选框的配置以任务列表的格式呈现。每一行以渲染任务的预览开始，附带一些示例文本。行的其余部分包含将切换该项外观的设置。

<img width="991" alt="image" src="https://user-images.githubusercontent.com/808713/170642901-c702e999-6279-4910-b7bb-f0413bfa3e3e.png">

这里有很多内容。它实际上是一个切换墙！

顶部一行有几个要点：

<img width="583" alt="image" src="https://user-images.githubusercontent.com/808713/170643652-1f796dca-0daa-4d1c-bd1a-c42cd9482beb.png">

- 滑块用于调整所有复选框的圆角度数。
- 调色板允许您在颜色选择器和文本控件之间切换以处理颜色。例如，您可以使用文本字段输入引用CSS变量。
- 接下来是一个月相图标，它允许在浅色模式和深色模式之间切换整个面板，以便您可以看到设置的影响。
- 最后，有一个重置按钮，当您想要放弃更改并返回到先前保存的状态时非常有用。

在简单/单行视图中，每个任务只有几个值：

- 一些预览文本，显示渲染复选框和文本的样式（有一定的近似度）。
- 复选框在编辑模式下的样式示例，以及定义新任务值的字段（`x`是默认值）。
- 接下来是两个颜色选择器：一个用于前景色，一个用于背景色。每个选择器都有三个元素：
    - 一个颜色选择器用于选择或手动输入。
    - 一个小的月相图标，允许您从相反（明/暗）模式中复制颜色。例如：如果您从暗模式开始，并选择了亮红色作为x，您可以使用顶部行中的切换按钮切换到亮模式，然后使用该行中的小图标复制该亮红色，并调整颜色，使您的任务在亮模式下看起来也很好。
- 有一个隐藏复选框边框的按钮。
- 还有一个禁止鼠标操作的按钮（键盘仍然可以使用），以防止在阅读模式下意外更改值。
- 行末尾有一个图标，展开后可以显示更多设置！
- 最后，我们有一个垃圾桶，这样您就可以删除这个片段创建器。

使用“+”和“垃圾桶”按钮来添加和删除列表中的自定义任务。

当您的任务配置为所需的方式时（不要惊慌，您的设置将被保存，您可以随时进行调整），请使用文件名旁边的“魔术棒”按钮创建您的片段。

您离成功只有一步之遥！唯一剩下的步骤是启用您的片段。

打开“设置”->“外观”，向下滚动到“CSS片段”。如果您的片段不在那里，您可能需要重新加载列表。使用切换按钮启用您的片段！或者，使用[My Snippets](https://github.com/chetachiezikeuzor/MySnippets-Plugin)插件。

我的任务看起来很奇怪！

## 致谢

- [My Snippets](https://github.com/chetachiezikeuzor/MySnippets-Plugin) -- Chetachi的插件是一个很好的资源（也是这个插件的补充）
- [Fantasy Calendar](https://github.com/valentine195/obsidian-fantasy-calendar) 是一个具有复杂模态设置的插件
- [Style Settings](https://github.com/mgmeyers/obsidian-style-settings/) 用于颜色选择器和动态样式设置



