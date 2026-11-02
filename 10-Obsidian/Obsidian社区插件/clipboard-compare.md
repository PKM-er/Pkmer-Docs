---
uid: 1793625610945000
title: "Obsidian 插件：Clipboard Compare"
tags: ["编辑工具", "效率工具", "文字处理", "obsidian插件"]
description: "Compare the active note with your clipboard and apply individual changes, just like VS Code. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Clipboard Compare

> [!Note] 插件名片
> - 插件名称：Clipboard Compare
> - 插件作者：chaowen
> - 插件说明：Compare the active note with your clipboard and apply individual changes, just like VS Code. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '效率工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chaovven/obsidian-clipboard-compare)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?clipboard-compare)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chaovven/obsidian-clipboard-compare/master/README.md)



## 概述

Clipboard Compare 旨在解决笔记编辑中频繁切换窗口对比文本的繁琐问题。它允许用户将当前打开的笔记与剪贴板中的内容直接进行差异比对，核心功能类似于 VS Code 中的“比较活动文件与剪贴板”命令。通过可视化展示两者之间的不同之处，用户可以直观地看到哪些部分被修改、新增或删除，从而快速定位差异，无需手动逐字核对。

典型的使用场景包括从网页或文档复制内容后，需要将其整合进现有笔记时。例如，当你从 PDF 复制了一段引用文字，想将其插入到笔记中，但担心格式或内容有误，只需运行该插件命令，即可看到复制内容与笔记中对应段落的差异。另一个例子是当你修改了笔记中的某段代码或文本，想确认修改是否准确无误，可以将修改前的版本复制到剪贴板，再与当前笔记对比，确保没有意外改动。

相比其他简单的文本替换工具，该插件的特色在于其交互方式。它不会自动覆盖内容，而是提供箭头按钮，让用户选择性地应用特定的更改。这种“按需应用”的机制赋予了用户完全的控制权，你可以只接受部分修改，而保留其他部分不变。此外，所有更改都会自动保存，并支持撤销操作，这为误操作提供了安全网，降低了编辑风险。

需要注意的是，该插件主要适用于桌面版 Obsidian，且依赖剪贴板内容，因此不适合需要频繁对比多个不同文件之间差异的场景，因为它仅支持当前活动笔记与剪贴板的对比。如果你需要对比两个本地文件，或者进行复杂的版本控制，此插件可能无法满足需求。此外，由于它未通过 Obsidian 官方人工审核，建议在使用前备份重要数据，以确保安全。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


