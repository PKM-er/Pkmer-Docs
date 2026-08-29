---
uid: 1786577080114003
title: 'Obsidian 插件：Meeting Transcript Converter'
tags: ['数据处理', '编辑工具', '文字处理', '效率工具', 'obsidian插件']
description: '把 .txt 或者 .vtt 格式的会议记录文件转换成整理好的 .md 笔记。——Obsidian 官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Meeting Transcript Converter

> [!Note] 插件名片
> - 插件名称：Meeting Transcript Converter
> - 插件作者：Ivan Batura
> - 插件说明：把 .txt 或者 .vtt 格式的会议记录文件转换成整理好的 .md 笔记。——Obsidian 官方人员尚未对这个插件进行人工审核。
> - 插件分类：['数据处理', '编辑工具', '文字处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/ibatura/obsidian-meeting-transcript-converter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zoom-transcript-to-md)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/ibatura/obsidian-meeting-transcript-converter/master/README.md)



## 概述

### 插件名称
Meeting Transcript Converter

### 主要功能
将 `.txt` 或 `.vtt` 格式的会议转录文件转换为简洁的 Markdown 笔记，支持手动和自动转换，可渲染 VTT 时间戳，生成 YAML 前置元数据，还能选择转换后自动删除原文件。

### 适用场景
适用于处理会议转录文件（如 Zoom 录制转录），也可用于任何纯文本或 WebVTT 转录文件。

### 核心特色
- 完全离线转换，数据不外传，所有转换在本地库中完成。
- 支持自动监测文件夹，新转录文件创建后自动转换。
- 生成包含会议名称、日期等信息的 YAML 前置元数据。

### 使用建议
- 手动转换：在 Obsidian 中打开 `.txt` 或 `.vtt` 文件，通过命令面板执行转换，转换后的笔记会在配置的输出文件夹中创建或更新。
- 自动转换：在设置中启用自动转换功能，设置监测文件夹，新文件会自动转换，可选择是否删除原文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


