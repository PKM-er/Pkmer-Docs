---
uid: 2023082011354875
title: Obsidian 插件：【Readme】Fill in the Blank (FITB)
tags: ['obsidian插件', 'readme']
description: 使用 --magic-- 将内联文本渲染为空行。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Fill in the Blank (FITB)

> [!Note] 插件名片
> - 插件名称：Fill in the Blank (FITB)
> - 插件作者：Shawn McGee
> - 插件说明：使用 --magic-- 将内联文本渲染为空行。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/mister-mcgee/obsidian-fill-in-the-blank)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fill-in-the-blank)

## 概述

使用 --magic-- 将内联文本渲染为空行。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/mister-mcgee/obsidian-fill-in-the-blank/main/README.md)
> 

---

## Readme(翻译）

下面是 [[fill-in-the-blank]] 插件的自述翻译


# Obsidian的填空插件

非常适合使用[Obsidian.md](https://obsidian.md)来编写和打印笔记的教育工作者和学生。使用`--magic--`将内联文本渲染为空行。
### 用法
只需在文本中用双破折号包裹（例如`填写--空白--？`）。当文本被渲染时，它将显示为空行（例如`填写__________？`）。FITB markdown后处理器将在行内转换标题、段落甚至代码块。

要启用或禁用FITB，同时允许后处理器使用该语法，请将以下代码片段添加到文档的前置元数据中。
```yml
---
fitb: false
---
```

要快速切换FITB行内使用命令（类似于`**加粗**`或`*斜体*`），请突出显示目标文本，然后在功能区中选择FITB图标。或者在“设置 -> 快捷键”中将`fill-in-the-blank:toggle`命令绑定到热键上。
### 安装
1. 下载并解压当前版本到你的 vault 的 `.obsidian/plugins` 目录中，如果该目录不存在则创建一个。
2. 在 Obsidian 中选择 `设置 -> 社区插件`，如果还没有这样做，请关闭限制模式。
3. 启用 `Fill in the Blank (FITB)` 插件。



