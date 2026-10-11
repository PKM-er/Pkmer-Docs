---
uid: 1791709368186000
title: 'Obsidian 插件：Local Font Loader'
tags: ['样式与美化', '界面优化', '文件管理', 'obsidian插件']
description: 'Load local fonts (TTF/OTF/WOFF/WOFF2) straight from your vault. Manage UI, text, code, and math fonts separately. Support cross-device font presets. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local Font Loader

> [!Note] 插件名片
> - 插件名称：Local Font Loader
> - 插件作者：InVerse
> - 插件说明：Load local fonts (TTF/OTF/WOFF/WOFF2) straight from your vault. Manage UI, text, code, and math fonts separately. Support cross-device font presets. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '界面优化', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/lmce72/obsidian-local-font-loader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-font-loader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/lmce72/obsidian-local-font-loader/master/README.md)



## 概述

**Local Font Loader** 是一款让 Obsidian 用户直接从本地库加载和管理自定义字体的插件，彻底摆脱对 CDN 或系统字体的依赖。

**主要功能**：支持 TTF、OTF、WOFF 及 WOFF2 格式，可独立配置 UI、正文、代码块及 LaTeX 数学公式字体。它通过直接引用文件路径加载字体，仅按需获取实际渲染的字重，无需嵌入或复制文件。

**适用场景**：适用于追求极致隐私、离线使用或对排版有极高要求的用户，特别是需要同时处理中英文混排（支持 Unicode 范围精细控制）的场景。

**核心特色**：
1. **完全本地化**：字体文件保留在 Vault 内，安全私密。
2. **智能分组**：自动识别并关联 Regular、Italic、Bold 等字重变体。
3. **精细控制**：支持拉丁字符与 CJK 字符使用不同字体。
4. **高效加载**：浏览器仅加载当前笔记所需的字重，性能优异。

**使用建议**：建议在 Vault 中建立专门的 `Fonts/` 文件夹，按字体家族子目录整理文件。安装后可在设置中扫描、预览并应用字体，开启“启动时自动加载”以确保每次打开 Obsidian 时字体配置即时生效。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


