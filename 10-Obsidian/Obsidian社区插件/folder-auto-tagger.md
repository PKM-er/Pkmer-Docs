---
uid: 1791709367130000
title: 'Obsidian 插件：Folder Auto Tagger'
tags: ['文件管理', '自动化与AI', '效率工具', 'obsidian插件']
description: 'Automatically adds tags to notes based on their folder path — nested folders add nested tags too (e.g. History/Medieval Europe → #history and #medieval-europe). - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Folder Auto Tagger

> [!Note] 插件名片
> - 插件名称：Folder Auto Tagger
> - 插件作者：JK
> - 插件说明：Automatically adds tags to notes based on their folder path — nested folders add nested tags too (e.g. History/Medieval Europe → #history and #medieval-europe). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '自动化与AI', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jk-cpu-jpg/Folder-Auto-Tagger)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?folder-auto-tagger)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jk-cpu-jpg/Folder-Auto-Tagger/master/README.md)



## 概述

**Folder Auto Tagger** 是一款 Obsidian 插件，主要功能是根据笔记所在的文件夹路径自动生成对应的标签。

**适用场景**：适合希望保持笔记结构清晰、利用文件夹层级进行自动分类，且希望减少手动打标签负担的用户。

**核心特色**：
1. **层级映射**：支持嵌套文件夹生成嵌套标签（如 `History/Medieval Europe` 生成 `#history` 和 `#medieval-europe`）。
2. **非侵入性**：仅在笔记顶部专用行写入标签，并添加隐藏标记，绝不干扰用户手动添加的其他标签。
3. **动态同步**：新建或移动笔记时自动更新标签；提供选项控制移动后是否移除不再适用的旧标签。
4. **轻量安装**：纯 JavaScript 编写，无需构建步骤，直接放入插件目录即可启用。

**使用建议**：
1. 安装后建议先运行“Apply folder tags to entire vault”命令，为现有笔记批量应用标签，避免手动逐个处理。
2. 在设置中根据需求配置“移动笔记时是否保留旧标签”，以平衡标签的整洁度与历史关联。
3. 注意该标签行由插件管理，请勿手动编辑该特定行，以免破坏自动更新机制。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


