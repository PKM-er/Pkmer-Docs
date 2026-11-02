---
uid: 1793625623897000
title: "Obsidian 插件：Ultra Paste"
tags: ["编辑工具", "图片与PDF", "移动端优化", "效率工具", "obsidian插件"]
description: "Cross-platform smart paste for Markdown, math, PDFs and images with mobile-safe network and clipboard fallbacks. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ultra Paste

> [!Note] 插件名片
> - 插件名称：Ultra Paste
> - 插件作者：Mohammad Mahdi Zamani
> - 插件说明：Cross-platform smart paste for Markdown, math, PDFs and images with mobile-safe network and clipboard fallbacks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '图片与PDF', '移动端优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zamanimm/obsidian-ultra-paste)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ultra-paste)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zamanimm/obsidian-ultra-paste/master/README.md)



## 概述

Ultra Paste 是一款旨在提升 Obsidian 笔记体验的智能剪贴板插件，核心功能是将来自浏览器、AI 助手、PDF 或图片的内容自动转化为规范的 Markdown 格式。它通过有序的检测管道识别粘贴内容类型，支持自动、富文本优先或纯文本三种模式。插件能智能修复 AI 生成的 Markdown 格式错误、LaTeX 数学公式以及常见的排版瑕疵，同时保留代码块、链接和表格的结构完整性，让复制粘贴的过程从“机械搬运”变为“智能整理”。

典型场景包括从网页或 AI 对话中复制长文时，插件会自动清理多余的空白行、修复被截断的数学符号，并去除 URL 中的追踪参数，同时抓取页面标题作为链接文字。另一个场景是处理 PDF 文本，通过专门的命令重新连接因分页而断开的句子，修复连字符断词，并将排版符号转换为标准字符，使原本杂乱无章的 PDF 摘录变得整洁易读。

相比同类插件，Ultra Paste 的特色在于其“显式逃生舱”设计，用户可以在插入前预览纯文本、HTML 源码及拟议的 Markdown 结果，选择是否应用格式化。此外，它具备强大的上下文感知能力，例如在代码块内粘贴时自动禁用智能格式化，避免破坏代码结构；在列表或引用块中粘贴时，能自动调整缩进和延续前缀。其数学修复功能提供安全、平衡、激进三种强度，且默认关闭可能误改普通文本的激进选项，确保内容安全。

使用前需注意，严格纯文本粘贴（Ctrl/Cmd+Shift+V）会完全绕过所有智能处理，仅插入原始文本。该插件不适合需要完全自动化、无预览确认的极速粘贴场景，也不建议对包含大量非标准数学符号或复杂嵌套结构的特殊文档使用激进修复模式。移动端受限于 WebView 网络权限，部分标题抓取功能可能失效。若你追求极致的格式控制且愿意在粘贴前进行短暂预览确认，这款插件能显著减少手动排版的工作量。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


