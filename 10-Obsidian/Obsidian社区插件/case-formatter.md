---
uid: 1793625609150000
title: "Obsidian 插件：Case Formatter"
tags: ["文字处理", "编辑工具", "快捷键", "效率工具", "obsidian插件"]
description: "Change selected text to uppercase, lowercase, sentence case, or capitalize each word from commands, hotkeys, and the editor context menu. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Case Formatter

> [!Note] 插件名片
> - 插件名称：Case Formatter
> - 插件作者：Dario Castellano
> - 插件说明：Change selected text to uppercase, lowercase, sentence case, or capitalize each word from commands, hotkeys, and the editor context menu. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '快捷键', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dariocast/obsidian-case-formatter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?case-formatter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dariocast/obsidian-case-formatter/master/README.md)



## 概述

Case Formatter 是一款专注于文本大小写转换的轻量级插件，旨在解决 Obsidian 原生功能中缺乏快速格式化工具的痛点。它提供了四种核心操作：全大写、全小写、句首大写以及每个单词首字母大写。这些操作遵循通用的排版定义，允许用户通过命令面板、自定义快捷键或编辑器右键菜单直接对选中的文本进行即时转换，无需离开当前编辑界面，极大地简化了文本规范化流程。

在实际写作中，该插件能显著提升效率。例如，当你从网络复制了一段全大写的标题时，可以一键将其转换为标准的“句首大写”格式，使其符合正文规范；或者在整理笔记时，若发现某些专有名词被误写为全小写，只需选中文字并应用“每个单词首字母大写”，即可快速修正如 `the lord of the rings` 为 `The Lord Of The Rings`。转换后的文本会自动保持选中状态，方便连续进行不同格式的调整，无需重新选区。

与依赖复杂语言引擎的办公套件不同，Case Formatter 采用纯本地处理机制，不发送任何网络请求，也不收集遥测数据，确保隐私安全。它支持多选区和带重音符号的字符，并能正确处理撇号和连字符等边界情况。每次转换都会生成独立的撤销步骤，用户可随时通过标准的撤销/重做功能回退操作。此外，插件兼容桌面端和移动端，且无需额外配置样式文件，安装后即可无缝融入 Obsidian 的原生界面。

需要注意的是，该插件仅对选中的 Markdown 字面文本生效，若选区包含链接、代码块或 Wiki 链接，其内部字符也会被一并转换，因此建议精确选择目标文本。它不具备智能识别专有名词或缩略语的能力，例如 `NASA` 在非句首位置会被转为 `nasa`，需手动修正。此外，该插件仅适用于编辑模式，阅读模式下不可用，且目前未针对移动端进行充分测试，主要推荐在桌面端使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


