---
uid: 1793625618629000
title: "Obsidian 插件：Notepad"
tags: ["效率工具", "界面优化", "编辑工具", "obsidian插件"]
description: "A tabbed sidebar with a scratch page, clipboard history and your Timebox sessions, with customizable colors. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Notepad

> [!Note] 插件名片
> - 插件名称：Notepad
> - 插件作者：diyar947
> - 插件说明：A tabbed sidebar with a scratch page, clipboard history and your Timebox sessions, with customizable colors. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '界面优化', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/diyar4772/obsidian-notepad)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notepad)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/diyar4772/obsidian-notepad/master/README.md)



## 概述

Notepad 是一款集成在 Obsidian 侧边栏的多功能面板，旨在解决快速记录、剪贴板管理和时间追踪分散在不同工具中的问题。它提供三个核心标签页：一个自动保存的草稿页用于捕捉临时灵感，一个记录复制历史的剪贴板面板，以及一个展示 Timebox 会话的时间管理视图。这种设计让你无需切换窗口，即可在笔记编辑的同时处理碎片化信息，保持工作流的连贯性。

在实际使用中，你可以将阅读时选中的关键段落通过右键菜单直接添加到草稿页，稍后整理成正式笔记或追加到当日日记中。例如，当你在不同应用间频繁复制代码片段或链接时，Notepad 的剪贴板标签页会按时间顺序记录这些内容，支持搜索、置顶和一键重新复制，避免了在多个应用间来回切换查找的麻烦。此外，如果你使用 Timebox 插件进行番茄钟或专注计时，Notepad 的 Timebox 标签页能实时显示当前会话进度、今日及本周的总时长，并按主题统计时间分布，帮助你直观回顾时间去向。

相比其他单一功能的插件，Notepad 的特色在于其高度的集成性与隐私保护。它不发起任何网络请求，所有数据均存储在本地 Vault 中，且能自动识别并忽略密码管理器标记的敏感复制内容。在 Linux KDE 环境下，它还能读取 Klipper 的完整剪贴板历史，即使 Obsidian 在后台也能捕获其他应用的复制操作。此外，它提供了丰富的 API 接口，允许其他插件或脚本调用其草稿和剪贴板功能，增强了工作流的扩展性。

需要注意的是，Notepad 的 Timebox 功能依赖于 Timebox 插件，若未安装该插件，此标签页将不可用。在 Linux Wayland 环境下（非 KDE 或无 Klipper），剪贴板记录可能受限，仅能捕获 Obsidian 窗口聚焦时的复制内容。此外，剪贴板历史以明文形式存储，若你的 Vault 开启同步，这些记录也会随之同步，建议对隐私敏感的用户关闭记录功能或定期清理历史。该插件不适合需要复杂笔记结构管理或高级时间分析报表的用户，它更侧重于轻量级的即时记录与回顾。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


