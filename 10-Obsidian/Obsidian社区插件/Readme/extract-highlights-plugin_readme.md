---
uid: 2023120719275164
title: Obsidian 插件：【Readme】Extract Highlights
tags: ['快捷键', '笔记文件处理', '链接处理', '编辑器', 'obsidian插件', 'readme']
description: 允许把笔记中的所有高亮语法的（使用==）的重点内容，通过快捷键，一次性放到到剪贴板中。这些内容在 Obsidian 中使用，会自动生成内链。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Extract Highlights

> [!Note] 插件名片
> - 插件名称：Extract Highlights
> - 插件作者：Alexis Rondeau
> - 插件说明：允许把笔记中的所有高亮语法的（使用==）的重点内容，通过快捷键，一次性放到到剪贴板中。这些内容在 Obsidian 中使用，会自动生成内链。
> - 插件分类：[' 快捷键 ', ' 笔记文件处理 ', ' 链接处理 ', ' 编辑器 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/akaalias/extract-highlights-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?extract-highlights-plugin)

## 概述

允许把笔记中的所有高亮语法的（使用==）的重点内容，通过快捷键，一次性放到到剪贴板中。这些内容在 Obsidian 中使用，会自动生成内链。

![Extract Highlights](https://cdn.pkmer.cn/covers/extract-highlights-plugin.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/akaalias/extract-highlights-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[extract-highlights-plugin]] 插件的自述翻译

## 提取亮点插件

![](https://github.com/akaalias/extract-highlights-plugin/workflows/Node.js%20CI/badge.svg)

将当前 Obsidian 中的 Markdown 笔记中的亮点创建并提取到剪贴板中。基于 [icebear 的插件请求](https://forum.obsidian.md/t/extract-highlights-from-note/7867)。

培训视频

### 观看：快速入门教程

[![](https://cdn.pkmer.cn/covers/extract-highlights-plugin_1_1.png!pkmer)](https://youtu.be/KWdEatdD2bo)

### 观看：一个秘密的新亮点模式

[![](https://cdn.pkmer.cn/covers/extract-highlights-plugin_1_2.png!pkmer)](https://youtu.be/5kkcqAn6joU)

### 观看：秘密模式的技巧和窍门

[![](https://cdn.pkmer.cn/covers/extract-highlights-plugin_1_3.png!pkmer)](https://youtu.be/n3YW5bmnETg)

### 工作原理

该插件将以项目列表的形式将由 `==`、`**` 和 `<mark></mark>` 分隔的高亮复制到剪贴板中。

您可以选择自定义...

* **列表的标题文本**，包括笔记标题或完全隐藏它
* **为每个高亮添加脚注**，以链接回源文件
* **通过将每个高亮转换为 `[[`Obsidian 链接 `]]` 来创建临时内容地图（MOC）**
* **自动将每个高亮的首字母大写**，以保持一致性

### 演示创建和提取亮点

1. 首先，您可以看到我如何使用“创建亮点”快捷键来突出显示句子。
2. 然后，您可以看到我如何使用“提取亮点”快捷键创建一个带有亮点的新文件。

![基本功能](https://cdn.pkmer.cn/covers/extract-highlights-plugin_1_4.gif!pkmer)

使用快捷键来突出显示（和取消突出显示）光标下的句子

默认的快捷键是：

<kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>_</kbd>

当你阅读时非常有用，不想切换到鼠标来选择句子。

如果光标下的句子当前由 "==" 分隔，则会取消突出显示。

使用快捷键提取亮点

默认快捷键是：

<kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>=</kbd>

使用功能区按钮

还有一个按钮（圆形）添加到您的左侧功能区。

单击它也会提取当前笔记中所有突出显示的部分并将其放入剪贴板中。

使用命令面板

我研究了一下，发现剪贴板在命令面板中的工作方式存在一个错误。基本上除了“粘贴”之外的所有功能都可以正常工作。

但是我找到了一个临时的解决方法。虽然有点奇怪，但它确实有效。

1. 触发命令面板（Command-P）
2. 找到“提取亮点”
3. 按 Enter 键（您应该会看到一个通知：“亮点已复制到剪贴板！”）
4. 解决方法：此时，暂时切换到另一个笔记，然后再切换回来（这样可以实现剪贴板数据的粘贴）
5. 现在，粘贴功能与热键和按钮按下的方式相同。

从剪贴板粘贴亮点

使用热键、按钮或命令面板后，您可以在任何地方粘贴剪贴板！

<kbd>Command</kbd> + <kbd>v</kbd>（MacOS）或 Windows/Linux 上的等效键

输出是一个名为“亮点”的 markdown 块，其中包含亮点的项目列表。

### 反馈

您是否正在使用提取亮点功能？我很想听听您的意见！

[在论坛上分享您的问题和建议](https://forum.obsidian.md/t/extract-highlights-plugin/8763/12)

### 积压任务列表

#### 待办事项

- 记录使用“爆炸模式”进行研究和创建原子笔记的视频
  - 先决条件
    - 高亮插件
      - 创建链接
      - 创建页面
      - 启用爆炸模式
      - 创建时打开笔记
    - 滑动窗格插件
  - 从一篇好文章（《经济学人》）开始
  - 遍历并高亮句子
  - 创建 MOC 并爆炸成笔记
    - BOOOMMMMM！！！
    - 你有了一个 MOC
    - 你有了单一思想的原子笔记的核心
    - 你有了对原始文件的反向链接

#### 正在进行中

#### DONE

- [x] 将 " 高亮 " 拆分为单独的笔记（假设我也在创建链接列表）
- [x] 命令（<kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>=</kbd>），然后将所有高亮文本复制到：
- [x] 点击按钮，然后将所有高亮文本复制到：
- [x] 允许使用 `<mark></mark>` 作为高亮
- [x] 允许使用标准的粗体（`**`）作为高亮
- [x] 允许选择性地包含或完全排除 `## 高亮` 标题
- [x] 允许更改标题中的文本 `## 我的自定义高亮`
- [x] 允许在标题中包含笔记名称，例如 `## 来自：$NOTE_TITLE`
- [x] 允许为每个高亮添加脚注，并包含到源笔记的链接
- [x] 允许选择性启用高亮的粗体
- [x] 允许使用命令面板触发复制（在 Electron 中有一些问题）
- [x] 我的剪贴板
- [x] 一个新的笔记



