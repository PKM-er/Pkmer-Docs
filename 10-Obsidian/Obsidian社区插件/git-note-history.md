---
uid: 1793625613332000
title: "Obsidian 插件：Git Note History"
tags: ["备份与恢复", "文件管理", "第三方工具集成", "obsidian插件"]
description: "Browse a note's Git history, compare any two versions and restore one paragraph or the whole note with undo. Reads Git only and never commits for you. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Git Note History

> [!Note] 插件名片
> - 插件名称：Git Note History
> - 插件作者：rexxall
> - 插件说明：Browse a note's Git history, compare any two versions and restore one paragraph or the whole note with undo. Reads Git only and never commits for you. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '文件管理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rexxall/obsidian-git-history-view)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?git-note-history)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rexxall/obsidian-git-history-view/master/README.md)



## 概述

Git Note History 允许你在 Obsidian 中直接浏览笔记的 Git 历史，对比任意两个版本，并精准恢复特定段落或整篇笔记。它仅读取 Git 数据，绝不自动提交或修改仓库状态，确保你的版本控制流程完全由你掌控。通过侧边栏的时间线，你可以直观查看笔记的演变过程，并在恢复前预览合并结果，支持多步撤销，让内容回溯变得安全且可控。

想象你误删了上周精心撰写的章节，或想找回某段被修改前的措辞。打开笔记后，点击时钟图标即可在侧边栏看到该笔记的历史版本。你可以选择任意旧版本与当前内容进行并排或统一差异对比，找到需要保留的部分，点击“恢复此更改”即可将其带回当前笔记。此外，如果你正在处理 Git 合并冲突，插件提供的三栏冲突解决器能帮助你快速整合不同分支的内容，只写入工作文件而不影响仓库。

相比其他仅展示历史记录的插件，Git Note History 的核心优势在于“部分恢复”能力。你不必整篇回滚，而是可以只提取某个段落、列表或表格，甚至从不同版本中收集多个片段合并到当前笔记。它还能识别笔记结构（如标题、任务、代码块），在恢复前检查链接是否断裂。此外，它支持搜索已删除的历史内容，并能在状态栏显示笔记最后一次提交的时间，方便你判断当前编辑是否已保存至版本库。

使用前需确保 Vault 位于 Git 仓库中，且已安装 Git。该插件仅支持桌面端（macOS, Windows, Linux），移动端无法使用。它不会自动初始化仓库或执行提交操作，若 Vault 未纳入版本控制，插件会提示你手动设置。如果你不需要精细的内容回溯，或希望插件自动处理 Git 提交流程，此插件可能不适合你。它专注于读取与恢复，将版本管理的主动权完全留给你。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


