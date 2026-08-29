---
uid: 1786577079349003
title: 'Obsidian 插件：Key Sequence'
tags: ['快捷键', '自定义命令', '效率工具', '编辑工具', 'obsidian插件']
description: '可以为任意命令分配多键组合序列哦。——这款插件还未经过Obsidian官方人员的手动审核呢。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Key Sequence

> [!Note] 插件名片
> - 插件名称：Key Sequence
> - 插件作者：wantchane
> - 插件说明：可以为任意命令分配多键组合序列哦。——这款插件还未经过Obsidian官方人员的手动审核呢。
> - 插件分类：['快捷键', '自定义命令', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wantchane/key-sequence-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?key-sequence)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wantchane/key-sequence-obsidian/master/README.md)



## 概述

### Key Sequence插件总结
1. **主要功能**：可将多键序列分配给任意Obsidian命令，通过类似vimrc的文件进行配置。
2. **适用场景**：适用于习惯使用自定义快捷键组合操作Obsidian，希望提高操作效率的用户。
3. **核心特色**：
    - 支持用户自定义多键序列触发命令，而非单一快捷键。
    - 采用vimrc风格语法配置，熟悉vim的用户容易上手。
    - 可将键序列嵌入到其他插件配置文件中。
4. **使用建议**：
    - 初始时无预配置键序列，需在配置文件中自行定义。默认配置文件路径为`.obsidian/key-sequence.vimrc`，可在插件设置中修改。
    - 若使用嵌入式模式，需注意只有以指定前缀（默认`" ks>`）开头的行才会被解析。
    - 配置时，可参考示例语法，如`let mapleader`定义领导键，`gmap`映射键序列到命令ID。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


