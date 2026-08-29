---
uid: 1786577080770002
title: 'Obsidian 插件：mq'
tags: ['数据处理', '数据分析', '编程与脚本', '编辑工具', 'obsidian插件']
description: '直接在Obsidian里运行mq（一种类似jq、用于处理Markdown的查询语言）查询：实时查询块、笔记/仓库转换，还有编辑器支持。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：mq

> [!Note] 插件名片
> - 插件名称：mq
> - 插件作者：Takahiro Sato
> - 插件说明：直接在Obsidian里运行mq（一种类似jq、用于处理Markdown的查询语言）查询：实时查询块、笔记/仓库转换，还有编辑器支持。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['数据处理', '数据分析', '编程与脚本', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/harehare/obsidian-mq)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mq)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/harehare/obsidian-mq/master/README.md)



## 概述

### 1. 主要功能
- 可在 Obsidian 中直接运行 mq（类似 jq 的 Markdown 查询语言）查询，基于 WebAssembly 全客户端运行，无需网络。
- 支持实时查询块：在笔记中添加 ` ```mq ` 代码块，能直接在下方渲染查询结果，可指定查询当前笔记或其他笔记、文件夹、标签下内容。
- 可对当前笔记运行 mq 查询，能选择应用范围（全量或选中内容）及处理动作（替换、插入下方、复制到剪贴板）。

### 2. 适用场景
适用于需要对 Obsidian 中的 Markdown 笔记进行灵活查询和内容处理的场景。

### 3. 核心特色
- 无需网络，全客户端运行。
- 实时查询块可根据查询内容自动重新渲染。
- 支持多种查询参数组合，如文件、文件夹、标签等。

### 4. 使用建议
- 若需查看特定笔记内容，可利用实时查询块指定文件查询。
- 处理当前笔记内容时，通过命令面板运行 mq 查询，根据需求选择范围和动作。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


