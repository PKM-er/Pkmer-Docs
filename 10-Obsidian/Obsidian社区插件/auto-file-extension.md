---
uid: 1786577076167000
title: 'Obsidian 插件：Auto File Extension'
tags: ['自动化与AI', '文件管理', '效率工具', '数据处理', 'obsidian插件']
description: '根据一套逐层筛选的规则集自动更改文件扩展名。规则可以匹配目录路径、文件内容（使用正则表达式），或者两者都匹配。 - 此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Auto File Extension

> [!Note] 插件名片
> - 插件名称：Auto File Extension
> - 插件作者：sec-ml
> - 插件说明：根据一套逐层筛选的规则集自动更改文件扩展名。规则可以匹配目录路径、文件内容（使用正则表达式），或者两者都匹配。 - 此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['自动化与AI', '文件管理', '效率工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/sec-ml/obsidian-auto-file-extension)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-file-extension)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/sec-ml/obsidian-auto-file-extension/master/README.md)



## 概述

### 插件名称
Auto File Extension

### 主要功能
依据逐级筛选规则集自动更改文件扩展名，规则可匹配目录路径、文件内容（使用正则表达式）或两者同时匹配，应用首个匹配规则。

### 适用场景
适用于需要根据文件目录或内容自动调整文件扩展名的场景。

### 核心特色
- 规则灵活，可从目录路径、文件内容多维度匹配。
- 支持从文件路径读取真实扩展名，避免其他插件干扰。

### 使用建议
- Obsidian 对非 `.md` 文件支持有限，使用其他类 MD 文件类型时，需确保 Obsidian 能识别，可参考相关链接。使用 Sync 时，要设置处理不支持的文件。
- 为避免与其他文件处理插件产生竞争条件，自动保存运行功能默认关闭，可通过命令面板手动触发“Fix extension for current file”命令。
- 若文件名已存在，文件重命名将失败，测试时需留意。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


