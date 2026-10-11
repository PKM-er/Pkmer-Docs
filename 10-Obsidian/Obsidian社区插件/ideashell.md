---
uid: 1791709367698000
title: 'Obsidian 插件：ideashell'
tags: ['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：ideashell

> [!Note] 插件名片
> - 插件名称：ideashell
> - 插件作者：RoundRedDot
> - 插件说明：
> - 插件分类：['第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/roundreddot/obsidian-ideashell)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ideashell)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/roundreddot/obsidian-ideashell/master/README.md)



## 概述

**插件名称**：ideashell

**主要功能**
该插件实现 Obsidian 笔记向 ideashell（闪念贝壳）的单向同步。支持同步文本、标签、文件夹结构及本地图片。具备“增量更新”机制，重复同步时更新原笔记而非创建副本，避免数据冗余。

**适用场景**
适合需要多端知识管理的用户。在 Obsidian 中深度编辑长文或整理知识库，同时希望快速将想法、摘录或笔记同步至 ideashell 进行碎片化回顾、分享或跨设备轻量访问。

**核心特色**
1. **智能同步**：支持单篇、多选、整文件夹递归同步，也可通过命令面板或右键菜单触发。
2. **结构映射**：自动将 Obsidian 的文件夹路径映射为 ideashell 的文件夹名称，移动文件夹后再次同步即可更新位置。
3. **媒体支持**：自动上传嵌入的本地图片（限9张/10MB以内），并保留标签系统。
4. **灵活触发**：支持选中文字快速创建独立笔记，以及配置“停止编辑后自动重同步”。

**使用建议**
1. 同步为单向（Obsidian→ideashell），请在 Obsidian 中完成主要编辑。
2. 利用 `ideashell: true` 标记或设置指定文件夹，以便使用“同步全部”功能。
3. 若需自动更新，可开启“自动重同步”，但新笔记仍需手动触发首次同步。
4. 注意图片大小与数量限制，避免同步失败。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


