---
uid: 2025042920504208
title: Obsidian 插件：New Note Fixer
tags: ['编辑工具', '模板与链接处理', '界面优化', 'obsidian插件']
description: 统一了点击不存在的笔记链接时创建这些笔记的方式。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：New Note Fixer

> [!Note] 插件名片
> - 插件名称：New Note Fixer
> - 插件作者：mnaoumov
> - 插件说明：统一了点击不存在的笔记链接时创建这些笔记的方式。
> - 插件分类：['编辑工具', '模板与链接处理', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-new-note-fixer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?new-note-fixer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-new-note-fixer/master/README.md)



## 概述

New Note Fixer 是一个 Obsidian 插件，主要功能是统一通过链接创建新笔记时的行为，解决 Obsidian 原生功能中点击不同格式的链接（如 `[[folder/non-existing-note]]` 或 `[[../folder/non-existing-note]]`）时新笔记创建位置不一致或可能生成无效路径的问题。该插件强制遵循 `设置 → 文件与链接 → 新笔记默认位置` 的配置，确保所有链接点击后生成的新笔记都按用户预设路径存放，避免因相对路径或子文件夹链接导致的文件散乱或创建失败。适用于需要严格管理笔记存放位置或频繁通过链接创建新笔记的用户，尤其能提升工作流的一致性。插件可通过官方社区插件库安装，也支持通过 BRAT 插件安装测试版，并提供调试选项以便排查问题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



