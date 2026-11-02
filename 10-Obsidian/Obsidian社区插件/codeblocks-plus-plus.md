---
uid: 1793625611044000
title: "Obsidian 插件：CodeBlocks++"
tags: ["编程与脚本", "编辑工具", "效率工具", "obsidian插件"]
description: "Enhances Obsidians Codeblocks by letting them execute the code - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CodeBlocks++

> [!Note] 插件名片
> - 插件名称：CodeBlocks++
> - 插件作者：Johannes Hans
> - 插件说明：Enhances Obsidians Codeblocks by letting them execute the code - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/commandjoo/CodeBlocksPlusPlus)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?codeblocks-plus-plus)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/commandjoo/CodeBlocksPlusPlus/master/README.md)



## 概述

CodeBlocks++ 旨在解决 Obsidian 原生代码块仅能静态展示、无法直接交互的局限。它允许用户定义自定义代码块，不仅支持基于 Shiki 引擎的高级语法高亮，更核心的是赋予代码块“可执行”的能力。通过简单的元数据配置，你可以控制代码块的运行状态、显示行号、输入框以及操作按钮，将笔记中的代码片段转化为可交互的演示环境。

典型场景包括技术文档编写与教学演示。例如，在撰写 JavaScript 教程时，你可以创建一个带有输入框的代码块，读者无需复制代码到外部编辑器，直接在笔记内输入参数并点击运行，即时查看控制台输出。另一个例子是展示 Python 脚本逻辑，通过预设 Preamble（前置代码）自动导入常用库，确保代码块在独立环境中也能正确执行，极大提升了文档的直观性和互动性。

相比其他仅做美化或高亮的插件，CodeBlocks++ 的特色在于其灵活的“注册语言”机制。用户可以在设置中自定义解释器路径、启动参数及前置代码，从而支持任意本地已安装的语言环境。此外，它支持通过 `@cbpp:` 前缀或行内元数据对单个代码块进行精细化样式覆盖，如独立指定主题或禁用按钮，这种细粒度的控制能力使其在复杂文档排版中更具适应性。

使用前需注意，该插件会直接执行用户定义的代码，存在安全风险。切勿运行来源不明或不可信作者的代码，以免对本地系统造成损害。此外，它不适合需要云端沙箱隔离或完全无本地环境依赖的场景，因为执行依赖于你本地安装的对应语言解释器。如果你只需要静态的代码高亮而不需要执行功能，或者希望避免任何本地脚本执行风险，则可能不需要安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


