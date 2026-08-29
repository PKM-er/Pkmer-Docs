---
uid: 1786577078001000
title: 'Obsidian 插件：GFM Heading Links'
tags: ['模板与链接处理', '编辑工具', '效率工具', '文字处理', 'obsidian插件']
description: '在运行时解析GFM风格的连字符式标题链接（比如 #my-heading ）——无需导出技巧，在实时预览和阅读视图中均可使用。 - 此插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GFM Heading Links

> [!Note] 插件名片
> - 插件名称：GFM Heading Links
> - 插件作者：Lucas Galdino
> - 插件说明：在运行时解析GFM风格的连字符式标题链接（比如 #my-heading ）——无需导出技巧，在实时预览和阅读视图中均可使用。 - 此插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['模板与链接处理', '编辑工具', '效率工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lucasgaldinos/obsidian-gfm-headers)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gfm-heading-links)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lucasgaldinos/obsidian-gfm-headers/master/README.md)



## 概述

### GFM Heading Links插件总结
1. **主要功能**：在Obsidian中实时解析GFM风格的连字符式标题链接，无需导出技巧和修改文件，让按GFM格式编写的链接能正确跳转。
2. **适用场景**：适用于在Obsidian中使用GFM格式标题链接却无法正常跳转的场景，如跨文件链接等。
3. **核心特色**：在Obsidian核心路由层拦截链接，不使用会破坏原生行为（如Ctrl + 悬停）的DOM突变观察器或CodeMirror 6 `ViewPlugin`扩展；支持点击和Ctrl + 悬停预览，跨文件链接无缝解析；自动补全下拉框在输入`[[#`时会自动生成GFM格式的标题链接。
4. **使用建议**：若在Obsidian里习惯使用GFM风格标题链接，可安装此插件解决链接跳转问题。使用时留意其自动补全功能，能更高效地创建链接。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


