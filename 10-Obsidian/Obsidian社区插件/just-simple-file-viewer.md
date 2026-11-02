---
uid: 1793625614426000
title: "Obsidian 插件：Just Simple File Viewer"
tags: ["编辑工具", "文件管理", "编程与脚本", "obsidian插件"]
description: "A deliberately minimal text file editor. Open JSON, CSV, Python and more in native tabs, with syntax highlighting and automatic saving. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Just Simple File Viewer

> [!Note] 插件名片
> - 插件名称：Just Simple File Viewer
> - 插件作者：David Hurt
> - 插件说明：A deliberately minimal text file editor. Open JSON, CSV, Python and more in native tabs, with syntax highlighting and automatic saving. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文件管理', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/davidhurtadoai/just-simple-file-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?just-simple-file-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/davidhurtadoai/just-simple-file-viewer/master/README.md)



## 概述

Just Simple File Viewer 是一款专为极简主义设计的文本文件查看与编辑插件。它摒弃了复杂的文档转换引擎和独立运行时，仅利用 Obsidian 内置的 CodeMirror 编辑器，让用户能在原生标签页中直接打开并编辑 JSON、CSV、Python 等常见文本文件。插件体积小巧，核心功能聚焦于语法高亮、自动保存以及基础的查找替换，旨在提供一种轻量、无干扰的纯文本处理体验，确保所有数据始终保留在本地库中。

典型使用场景包括快速查阅或修改项目配置文件，例如直接编辑 `package.json` 或 `.env` 文件，无需切换到外部 IDE。对于数据文件，如 CSV 表格，插件默认提供类似 Markdown 表格的只读预览，方便快速浏览数据结构；若需修改数据，只需点击“Edit as text”即可切换至源码编辑模式，修改完成后可随时切回表格视图，整个过程不会改变文件原始格式。

相比其他功能繁多的文件查看插件，该插件的特色在于极致的轻量化与安全性。它仅打包了必要的语法解析器，无网络请求、无遥测、无账号依赖。在冲突处理上，它具备原子性检查机制，当检测到外部修改时，若标签页干净则自动重载，若存在并发编辑则显示冲突横幅而非静默覆盖，并在保存失败时生成恢复副本，有效防止数据丢失。此外，它严格遵循 Obsidian 的主题、字体和 Vim 键位设置，视觉与操作体验高度统一。

使用前需注意，该插件仅支持 UTF-8 编码，其他编码文件会被拒绝打开；单文件上限为 20 MiB，且超过一定字符数后不再提供语法高亮。它不适合需要复杂电子表格功能（如排序、公式计算）或 Office 文档渲染的用户。如果你需要执行代码、使用语言服务器或处理二进制文件，此插件无法满足需求。它最适合那些希望在一个轻量、安全且与 Obsidian 深度集成的环境中处理纯文本数据的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


