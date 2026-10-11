---
uid: 1791709367254000
title: 'Obsidian 插件：Ghostmark'
tags: ['文字处理', '编辑工具', '数据处理', 'obsidian插件']
description: 'Inspect and clean invisible watermark characters in clipped notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ghostmark

> [!Note] 插件名片
> - 插件名称：Ghostmark
> - 插件作者：iceblyte
> - 插件说明：Inspect and clean invisible watermark characters in clipped notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/iceblyte/ghostmark)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ghostmark)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/iceblyte/ghostmark/master/README.md)



## 概述

**1. 主要功能**
Ghostmark 是一款用于 Obsidian 的插件，专门用于检测和清理网页剪藏笔记中隐藏的不可见水印字符（如零宽字符、特殊空格、双向标记等）。它提供“检查模式”，通过内联符号直观显示这些隐形字符，并支持一键清理。

**2. 适用场景**
适用于使用 Web Clipper 剪藏网页内容的用户。当剪藏文本出现搜索失效、双链无法匹配、Git 差异异常或代码粘贴报错时，该插件能有效解决由隐形字符污染导致的各类问题。

**3. 核心特色**
- **可视化检查**：在源码和实时预览模式下，用不同颜色符号标记不同性质的隐形字符（如红色代表无语义字符，紫色代表追踪令牌）。
- **智能清理**：支持上下文感知的清理操作，所有修改均可确认且支持撤销，确保操作安全。
- **全面覆盖**：能识别零宽簇、特殊空格、Bidi 控制符及 Base64 追踪令牌等多种隐形污染。

**4. 使用建议**
建议将“检查模式”绑定至快捷键或状态栏，以便快速定位问题。在清理前，务必利用其“可确认”特性预览修改内容，特别是处理代码块时，确保只移除无害的隐形字符，避免误删有效内容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


