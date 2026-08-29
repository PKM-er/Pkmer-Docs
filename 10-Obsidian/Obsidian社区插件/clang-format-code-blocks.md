---
uid: 1786577076882001
title: 'Obsidian 插件：Clang-Format Code Blocks'
tags: ['编辑工具', '第三方工具集成', '编程与脚本', '效率工具', 'obsidian插件']
description: '用clang-format格式化笔记里的代码块。——Obsidian官方人员尚未对这个插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Clang-Format Code Blocks

> [!Note] 插件名片
> - 插件名称：Clang-Format Code Blocks
> - 插件作者：Ömer Kara
> - 插件说明：用clang-format格式化笔记里的代码块。——Obsidian官方人员尚未对这个插件进行人工审核。
> - 插件分类：['编辑工具', '第三方工具集成', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/oemer-kara/clang-format-obsidian-code-blocks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?clang-format-code-blocks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/oemer-kara/clang-format-obsidian-code-blocks/master/README.md)



## 概述

### Clang-Format Code Blocks插件总结
1. **主要功能**：使用`clang-format`格式化笔记中的代码块。可扫描活动笔记里`clang-format`支持语言的代码块，将内容传递给`clang-format`处理，用格式化后的输出替换原代码块。支持多种语言标签，如`c`、`cpp`、`java`等。提供“格式化当前笔记所有代码块”和“格式化光标所在代码块”两个命令。
2. **适用场景**：适用于在Obsidian桌面端编写代码相关笔记，需对代码格式进行规范的场景。
3. **核心特色**：默认开启保存时自动格式化功能，且仅在明确保存（Ctrl/Cmd + S）时执行，不影响编辑。通过包装Obsidian内部保存命令实现，未来内部命令改变也不会影响保存。
4. **使用建议**：确保在桌面端使用，且已安装并配置好`clang-format`。可在设置的热键中为格式化命令分配快捷键，若不想要保存自动格式化功能，可在插件设置中关闭。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


