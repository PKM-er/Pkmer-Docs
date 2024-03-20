---
uid: 20240303201240
title: 手工打造一款 Word Copilot 应用，自己动手 DIY！（一）
tags: []
description: 手工打造一款 Word Copilot 应用，自己动手 DIY！（一）
author: 大圣Copilot
type: other
draft: false
editable: false
modified: 20240320194150
---

# 手工打造一款 Word Copilot 应用，自己动手 DIY！（一）

想要节省每月 20 美金的 Copilot Pro 费用吗？通过自己动手 DIY 一个 Word Copilot，你可以节省高达 240 美金！本篇笔记将教你如何利用 Obsidian 和核心插件打造属于自己的 Word Copilot 应用，让你的文字处理更高效、更智能！

## 本内容将分成 3 篇笔记呈现

### 1、安装 word copilot 所需的插件，并设置好 APIkey

### 2、日常使用场景：如果使用 word copilot 进行内容创作

### 3、如何接入本地大语言模型，实现无限续杯

接下来开始的是“安装 word copilot 所需的插件，并设置好 APIkey。”的笔记内容。

## 一、准备工作

笔记中涉及到的插件，需要提前安装：

1. [[editing-toolbar]]

	[插件网页介绍：Editing Toolbar (pkmer.cn)](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/readme/editing-toolbar_readme/)

	- 插件说明：提供了更强大的编辑工具栏，并内置了常用编辑功能，提供类似 MS Word 的工具栏编辑体验。支持多种交互样式，也支持添加自定义功能和功能分组。

2. [[obsidian-textgenerator-plugin|Textgenerator]]

	[插件网页介绍：Text Generator (pkmer.cn)](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/readme/obsidian-textgenerator-plugin_readme/)

	- 插件说明：文本生成器是一个方便的插件，可帮助您使用 CHATGPT (OpenAI) 生成文本内容。

3. [[gpt3-notes_readme|Gpt3-Notes]]

	[插件网页介绍：GPT Notes (pkmer.cn)](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/readme/gpt3-notes_readme/)

	- 插件说明：使用 OpenAI 的 GPT-3 语言模型生成任何主题的笔记。

4. [[copilot]]

	[插件网页介绍：Copilot (pkmer.cn)](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/readme/copilot_readme/)

- 插件说明：在 Obsidian 中使用 ChatGPT Copilot。

### 步骤演示

#### 1、在设置中点击“第三方插件”

![](https://cdn.pkmer.cn/images/20240303201332.png!pkmer)

#### 2、搜索插件

![image.png](https://cdn.pkmer.cn/images/20240303201413.png!pkmer)

具体操作可以观看 pkmer 账号的以往的基础视频。

## 二、通过 Editing Toolbar 插件 DIY 文本编辑工具栏

首先，给大家看下大致效果，参考一下：

![](https://cdn.pkmer.cn/images/20240303201413.png!pkmer)

### 在工具栏中添加自己想要插件

打开插件“Editing Toolbar”的设置界面。点击“+”号按钮，下图红圈标记处。

![image.png](https://cdn.pkmer.cn/images/20240303201437.png!pkmer)

#### 以添加 GPT Notes 插件命令

点击“+”好图标后，输入“gpt notes”，选择插件，如下图：

![image.png](https://cdn.pkmer.cn/images/20240303201451.png!pkmer)

接着选着一个合适的图标。也可以手动输入关键词，例如“pen”，选择一个图标。

![image.png](https://cdn.pkmer.cn/images/20240303201502.png!pkmer)

默认是添加在工具栏最后面，拖动滚动条查看刚才添加的插件。

![image.png](https://cdn.pkmer.cn/images/20240303201514.png!pkmer)

点击红圈 1，可以再次修改图标。

点击红圈 2，可以修改在工具栏显示的名称，方便记忆。例如我改成“GPT Notes: 写作”。

![image.png](https://cdn.pkmer.cn/images/20240303201520.png!pkmer)

#### 添加 Textgenerator 插件命令

重复上面的操作一次添加一下命令：

![image.png](https://cdn.pkmer.cn/images/20240303201527.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20240303201535.png!pkmer)

**命令说明：**

**Text Generator: Generate Text!**

生成文本

应用场景如下：

在笔记编辑模式下，可以根据笔记内的任意文字信息作为 AI 指令模版，生成内容。内容直接在光标处后面生成。所以需要提前流出空间。

**Text Generator: Stop Stream**

停止流式输出

应用场景：

当 AI 以流式输出文本的过程中，可以随时停止。

注意：只有在 Text Generator 的设置中启用了 Stream 的输出形式才起作用。

### 拖动插件，改变显示位置

默认添加的插件是位于工具栏尾部，需要手动多动改变位置。

![image.png](https://cdn.pkmer.cn/images/20240303201547.png!pkmer)

拖动完的效果。

![image.png](https://cdn.pkmer.cn/images/20240303201556.png!pkmer)

最终工具栏显示的效果。

![image.png](https://cdn.pkmer.cn/images/20240303201613.png!pkmer)

## 设置 APIkey

### 1、打开设置，查看“第三方插件”

![image.png](https://cdn.pkmer.cn/images/20240303201604.png!pkmer)

### 2、依次选择插件，输入 apikey

![image.png](https://cdn.pkmer.cn/images/20240303201640.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20240303201621.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20240303201628.png!pkmer)

## 总结

通过这篇笔记，我们完成前期的准备工作后，在下一篇笔记中就开始教大家如何使用 AI 工具开始内容生成。

[[手工打造一款Word Copilot应用-2]]

[[手工打造一款Word Copilot应用-3]]