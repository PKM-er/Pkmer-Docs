---
uid: 1786577077008001
title: 'Obsidian 插件：Codex Session Archive'
tags: ['数据处理', '第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: '把本地的Codex存档会话导出为按工作区分组的Markdown笔记。——Obsidian官方人员尚未手动审核此插件。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Codex Session Archive

> [!Note] 插件名片
> - 插件名称：Codex Session Archive
> - 插件作者：river
> - 插件说明：把本地的Codex存档会话导出为按工作区分组的Markdown笔记。——Obsidian官方人员尚未手动审核此插件。
> - 插件分类：['数据处理', '第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nicklennonliu/obsidian-codex-session-archive)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?codex-session-archive)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nicklennonliu/obsidian-codex-session-archive/master/README.md)



## 概述

### 主要功能
将本地Codex会话的JSONL文件导出为Obsidian库中的Markdown笔记，支持按会话工作目录/项目名称分组。

### 适用场景
适用于Codex Desktop和Codex CLI的本地日志，可处理归档会话及（可选）活跃会话。

### 核心特色
- 按项目分组导出笔记，并添加包含会话ID、项目等信息的Obsidian前置元数据。
- 提取Base64编码图片到Markdown文件旁的`media/`文件夹，并处理图片链接。
- 可跳过已导出的会话，除非开启覆盖选项。

### 使用建议
- 该插件仅支持桌面端，因需读取本地Codex数据目录文件。
- 使用前可在设置中配置Codex主目录、输出文件夹等参数。
- 提供“导出归档会话”和“重建归档会话”两个命令。
- 手动安装需先构建插件，再复制相关文件到指定目录。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


