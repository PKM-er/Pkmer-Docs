---
uid: 2024081307141139
title: Obsidian 插件：Note Linker with Previewer
tags: ['样式与美化', 'obsidian插件']
description: 链接您的笔记在一起。
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note Linker with Previewer

> [!Note] 插件名片
> - 插件名称：Note Linker with Previewer
> - 插件作者：Nick Allison
> - 插件说明：链接您的笔记在一起。
> - 插件分类：['样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/nickrallison/obsidian-note-linker-with-previewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-linker-with-previewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/nickrallison/obsidian-note-linker-with-previewer/main/README.md)



## 概述

Obsidian Note Linker是一个插件，用于查找你的笔记之间的链接。它具有以下功能和使用场景：

- 该插件内置了一个Markdown解析器，不会在代码块、LaTeX块或其他特殊的Markdown工具内创建链接。
- 它使用链接缓存来提高性能，重复运行链接命令时会更快。
- 你可以使用多个命令：
  1. 扫描Vault：搜索链接并记录它们，不会写入任何文件。
  2. 链接Vault：链接Vault中的每个Markdown文件。
  3. 链接当前笔记：仅链接当前笔记，不考虑过滤设置。
  4. 获取无效笔记：显示出现错误且未被主动扫描的文件。
  5. 重置缓存：如果链接行为异常，可以重置缓存，重新搜索。

此外，README中还提供了关于如何避免解析错误的建议，包括避免明显的格式错误、转义字符的使用、代码块的格式要求等。如果你的笔记仍然出现错误，你可以使用交互式查看器进行调试，或者向开发者提供相关信息以修复可能的错误。详细的开发者文档可以在DEV.md中找到。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---



