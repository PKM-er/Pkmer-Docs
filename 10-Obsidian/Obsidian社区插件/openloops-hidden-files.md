---
uid: 1786577081172000
title: 'Obsidian 插件：OpenLoops Hidden Files'
tags: ['文件管理', '界面优化', '效率工具', 'obsidian插件']
description: '在原生文件资源管理器树中显示指定的点文件夹列表，像 `.claude` 或者 `.github` 这类。仅适用于桌面端，支持按文件夹选择启用。——此插件尚未经过 Obsidian 官方人员手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：OpenLoops Hidden Files

> [!Note] 插件名片
> - 插件名称：OpenLoops Hidden Files
> - 插件作者：Tony Maltais
> - 插件说明：在原生文件资源管理器树中显示指定的点文件夹列表，像 `.claude` 或者 `.github` 这类。仅适用于桌面端，支持按文件夹选择启用。——此插件尚未经过 Obsidian 官方人员手动审核。
> - 插件分类：['文件管理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tonymio/openloops-hidden-files)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?openloops-hidden-files)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tonymio/openloops-hidden-files/master/README.md)



## 概述

### 插件名称
OpenLoops Hidden Files

### 主要功能
将用户选定的点文件夹（如 `.claude`、`.github`）显示在原生文件资源管理器中，这些文件夹默认会被 Obsidian 隐藏。通过将白名单中的文件夹注入到实时保险库缓存，使其在文件资源管理器、搜索、图谱和元数据缓存中可见，且仅注入索引，不写入磁盘。

### 适用场景
适用于需要查看 Obsidian 默认隐藏的点文件夹内容的场景，如查看 `.obsidian` 文件夹中的代码片段、主题或插件数据。

### 核心特色
采用按文件夹选择启用的方式，避免因扫描大文件夹（如 `.git`）导致应用冻结，仅显示用户指定的文件夹。

### 使用建议
1. 仅支持桌面端，在桌面端启用插件。
2. 打开 “设置 → OpenLoops Hidden Files”，在 “文件夹” 处点击 “+” 选择或输入路径添加文件夹，即可在文件资源管理器中显示，使用删除按钮或禁用插件可再次隐藏。
3. 若在磁盘上添加了文件夹，可使用 “OpenLoops Hidden Files: Rescan hidden folders” 命令重新应用列表。需注意该插件依赖未公开的 Obsidian 内部方法，未来版本可能受影响。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


