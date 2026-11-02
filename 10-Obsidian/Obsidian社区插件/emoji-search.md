---
uid: 1793625612543001
title: "Obsidian 插件：Emoji Search"
tags: ["编辑工具", "效率工具", "搜索与排序", "obsidian插件"]
description: "Insert emojis from a searchable picker or by typing a :shortcode. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Emoji Search

> [!Note] 插件名片
> - 插件名称：Emoji Search
> - 插件作者：siulved54
> - 插件说明：Insert emojis from a searchable picker or by typing a :shortcode. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '效率工具', '搜索与排序', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/perezamadorluisenrique-gif/emoji-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?emoji-search)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/perezamadorluisenrique-gif/emoji-search/master/README.md)



## 概述

Emoji Search 旨在解决在 Obsidian 中快速插入表情符号的痛点，提供两种核心交互方式：通过命令面板、侧边栏图标或右键菜单打开可搜索的挑选器，以及直接在笔记中键入冒号加短代码（如 `:smi`）触发自动补全。该插件完全离线运行，不依赖网络，支持桌面端和移动端，确保在任何笔记中都能流畅使用，无需担心隐私泄露或连接问题。

典型场景包括在撰写文档时快速插入表情以增强语气，例如输入 `:tada:` 自动转换为 🎉，或打开挑选器搜索“thumbs”快速找到点赞表情。挑选器支持按名称、关键词或短代码搜索，且能识别无重音符号和任意词序的输入。此外，它支持多光标同时插入，在只读视图下则执行复制操作，方便在不同笔记间复用表情。

相比已停止更新的 Emoji Toolbar，Emoji Search 不仅保留了分类、搜索、最近使用记录和肤色设置功能，还新增了短代码输入支持。其智能上下文感知能力值得注意：在代码块、行内代码、数学公式、链接、URL、HTML 及 frontmatter 键值中不会触发建议，避免干扰技术写作；但在 frontmatter 值和表格单元格中正常工作。常用表情会优先显示并提升搜索排名，提升高频使用效率。

使用前需注意，插件默认隐藏设备无法渲染的表情以避免显示空框，此检查在本地进行且不同步。若你主要需求是管理表情库或进行复杂的表情组合编辑，此插件可能不够；它专注于快速插入和搜索。此外，它不提供自定义表情上传功能，仅基于 Unicode 标准表情集。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


