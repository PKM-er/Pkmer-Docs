---
uid: 2023120719361015
title: Obsidian 插件：【Readme】Markdown Formatting Assistant
tags: ['编辑工具', '编辑器', '效率', '界面相关', 'obsidian插件', 'readme']
description: 提供笔记编辑器中 快速输入 Markdown 语法的方式，此外还提供了一个命令行界面。该命令行界面平铺展示OB常用和所有命令提高工作效率。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Markdown Formatting Assistant

> [!Note] 插件名片
> - 插件名称：Markdown Formatting Assistant
> - 插件作者：Reocin
> - 插件说明：提供笔记编辑器中 快速输入 Markdown 语法的方式，此外还提供了一个命令行界面。该命令行界面平铺展示 OB 常用和所有命令提高工作效率。
> - 插件分类：[' 编辑工具 ', ' 编辑器 ', ' 效率 ', ' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Reocin/obsidian-markdown-formatting-assistant-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-markdown-formatting-assistant-plugin)

## 概述

提供笔记编辑器中 快速输入 Markdown 语法的方式，此外还提供了一个命令行界面。该命令行界面平铺展示 OB 常用和所有命令提高工作效率。

![Markdown Formatting Assistant](https://cdn.pkmer.cn/covers/obsidian-markdown-formatting-assistant-plugin.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Reocin/obsidian-markdown-formatting-assistant-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-markdown-formatting-assistant-plugin]] 插件的自述翻译

# 插件不再维护

如果你想接管这个插件，请给我写信！

# Obsidian Markdown 格式辅助插件

> 该插件提供了易于使用的 Markdown、HTML 和 Latex 代码片段，以及一个颜色选择器，显示最近使用的颜色历史记录。此外，您还可以保存任何颜色。
> 版本 0.4.0

> 如果您发现 Bug 或有功能请求，请访问：<https://github.com/Reocin/obsidian-markdown-formatting-assistant-plugin/issues>

![](https://cdn.pkmer.cn/covers/obsidian-markdown-formatting-assistant-plugin_2_0.png!pkmer)

侧边栏

侧边栏可以通过左侧的功能区图标打开。如果您在设置中更改了面板的位置（左侧或右侧），只需再次点击此按钮/图标，它将重新加载到右侧。

### 部分的排序和扩展

可以根据个人的意愿更改部分的顺序。此外，可以扩展和收缩每个部分以保持概览。

### Markdown 部分

![](https://cdn.pkmer.cn/covers/obsidian-markdown-formatting-assistant-plugin_2_1.png!pkmer)

### HTML 部分

![](https://cdn.pkmer.cn/covers/obsidian-markdown-formatting-assistant-plugin_2_2.png!pkmer)

### Latex 部分

> Latex 函数只在 Latex 方程部分中起作用，如 $...$ 或 $$...$$

。

![](https://cdn.pkmer.cn/covers/obsidian-markdown-formatting-assistant-plugin_2_3.png!pkmer)

### 希腊字母部分

> 希腊字母只在 latex 公式部分中起作用，如 $...$ 或 $$...$$

。

![](https://cdn.pkmer.cn/covers/obsidian-markdown-formatting-assistant-plugin_2_4.png!pkmer)

### Callouts 部分

![](https://cdn.pkmer.cn/covers/obsidian-markdown-formatting-assistant-plugin_2_5.jpeg!pkmer)

## 带有快捷方式的建议窗口

该插件确实有一个默认的快捷键 `ALT+Q`，它可以打开一个建议窗口，显示该插件的所有命令（除了颜色和标注）。一旦你习惯了它，你就不会再错过它了。此外，这样一来，你就不需要离开键盘了！

使用默认快捷键 `ALT-C`，可以打开一个标注建议窗口，具有与常见建议窗口相同的功能。

### 工作原理

只需在任何位置按下快捷键 `ALT+Q`。无论您是在特定位置还是选择了要更改的文本，都没有关系。然后输入您想要应用的命令的名称。几个字母后，您希望的命令应该在前 5 个建议中显示出来。

![](https://cdn.pkmer.cn/covers/obsidian-markdown-formatting-assistant-plugin_2_6.gif)

如何更改快捷键/热键

选择了快捷键/热键 `ALT+Q`，因为它可以方便地用一只手轻松操作，但您可以根据自己的需要更改它。

![](https://cdn.pkmer.cn/covers/obsidian-markdown-formatting-assistant-plugin_2_7.gif)

## 颜色选择器

选择一个颜色

颜色选择器提供了一种简单快捷的工作流程来处理颜色。如果您使用“选择颜色”按钮选择一个颜色，并离开窗口（通过在颜色选择器外部点击），所选颜色将被插入到当前光标位置。此外，它还将被复制到剪贴板中。

此外，颜色选择器保存了最近使用的 10 种颜色的历史记录。

### 保存的颜色

要保存当前颜色，即使关闭了黑曜石，只需点击“保存颜色”按钮。

### 排序保存的颜色

所有保存的颜色可以通过拖动捕捉来进行排序。

删除颜色

要删除一个已保存或最近使用的颜色，只需用鼠标右键单击它。

### 其他格式

为了更方便地处理，您可以选择其他选项来添加到颜色中。

#### 选项

- 添加 "color: {你的颜色}"
  - 例如 `color: #ffffff`
- 添加 "background-color: {你的颜色}"
  - 例如 `background-color: #ffffff`
- 添加标签: "style={你的颜色}"
  - 只有在你同时选择其他选项时才有帮助，例如:
  - 例如 `style="background-color: #ff0000"`

![](https://cdn.pkmer.cn/covers/obsidian-markdown-formatting-assistant-plugin_2_8.png!pkmer)

## 设置

- 侧边栏位置
  - 默认值：右侧
  - 可选值：右侧，左侧
  - 定义侧边栏的位置。默认情况下，侧边栏将在右侧/叶子上打开。
- 已保存的颜色
  - 默认值：""
  - 可选值：任何十六进制颜色。每行一个十六进制（#ffffff）颜色。
  - 管理已保存的颜色。可以添加、删除、编辑颜色。顺序也会被考虑。

## 更新日志

- 版本：0.4.1
  - 添加了 Callouts 支持
- 版本：0.4.0
  - 更新插件至新的 Obsidian API 0.15.x 版本
  - 用建议窗口替换命令语言，通过热键触发
  - 修复使用标题按钮/命令（h1，h2，...）后光标位置错误的问题
- 版本：0.3.2
  - 颜色选择器的附加选项
  - 在文本编辑部分和命令行中添加了新的高亮按钮
- 版本：0.3.1
  - 可更改部分的顺序
  - 可展开的部分
  - 修正了 latex 的 `\$\$` 和 `\$\$\$\$` 按钮，因为它们被交换了
- 版本：0.3.0
  - 添加了一个 Latex 和希腊字母部分
- 版本：0.2.2
  - 添加了/mermaid snipplet 以生成 mermaid 代码块 - 允许绘制图表![](https://cdn.pkmer.cn/covers/obsidian-markdown-formatting-assistant-plugin_2_9.png!pkmer)
- 版本：0.2.1
  - 一些错误修复
  - 无输入预览模式
  - 鼠标悬停时突出显示 html 按钮
  - 插入颜色时替换选择内容
  - 可在设置中添加和编辑保存的颜色
  - 新的 HTML 标签 `<details></details>` 和 `<summary></summary>`
- 版本：0.2.0
  - 在命令语言和侧边栏中添加了对 HTML 片段的支持
  - 添加了一个颜色选择器
- 版本：0.1.2
  - 初始插件



