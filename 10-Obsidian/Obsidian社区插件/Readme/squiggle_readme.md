---
uid: 20230803213247
title: Obsidian 插件：【Readme】Squiggle
tags: ['obsidian插件', 'readme']
description: 使用Squiggle在你的笔记中进行概率估计。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Squiggle

> [!Note] 插件名片
> - 插件名称：Squiggle
> - 插件作者：Jesse Hoogland
> - 插件说明：使用Squiggle在你的笔记中进行概率估计。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jqhoogland/obsidian-squiggle)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?squiggle)

## 概述

使用Squiggle在你的笔记中进行概率估计。

![Squiggle](https://cdn.pkmer.cn/covers/squiggle.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jqhoogland/obsidian-squiggle/master/README.md)
> 

---

## Readme(翻译）

下面是 [[squiggle]] 插件的自述翻译



# Obsidian Squiggle 插件

注意：这是从 [obsidian-execute-code 插件](https://github.com/twibiral/obsidian-execute-code/blob/master/execute_code_example.gif?raw=true) 分叉出来的。

该插件允许您在笔记中的代码块中执行 squiggle 代码片段。该插件为支持的语言添加了一个“运行”按钮。单击它们会执行该块的代码。执行完成后，会显示执行结果。

它还使用 Prism 添加了语法高亮。

只有在执行完成后才会显示结果。现在无法在执行的程序中输入命令行文本。

![演示](docs/demo.png)

在预览中运行

在代码块中的语言名称前添加 `run-`（如下例所示）会在预览中呈现代码块。
这样可以在预览中执行代码。

## 安装

在你的 vault 中，转到 设置 > 社区插件 > 浏览并搜索 "Squiggle"。选择插件，安装并激活它。

或者

点击[此链接](https://obsidian.md/plugins?search=squiggle#)，然后点击 "在 Obsidian 中打开"。

## 警告
不要执行来自你不了解的源代码或者你不理解的代码。执行代码可能会造成无法修复的损害。

## 已知问题
- 切换主题后，点击“运行”按钮无效：尝试关闭并重新打开你的笔记，并等待几分钟。似乎Obsidian在主题切换后没有调用后处理器。

## 未来工作
- 合并回`execute-code-plugin`？这可能不值得，因为Squiggle是在JS内部运行并借助React进行渲染的。这与实际在计算机上运行的语言非常不同。

## 贡献
欢迎所有的贡献。只需创建一个合并请求或发送电子邮件给我：jesse(at)jessehoogland.com



