---
uid: 1791709366103000
title: 'Obsidian 插件：Code Converter'
tags: ['数据处理', '文件管理', '备份与恢复', '编辑工具', 'obsidian插件']
description: 'Detects non-UTF-8 encodings in your vault and safely converts them to UTF-8 with automatic backup. Repairs double-encoded mojibake, exports conversion logs, and supports 10 UI languages. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Code Converter

> [!Note] 插件名片
> - 插件名称：Code Converter
> - 插件作者：xiaosong8584
> - 插件说明：Detects non-UTF-8 encodings in your vault and safely converts them to UTF-8 with automatic backup. Repairs double-encoded mojibake, exports conversion logs, and supports 10 UI languages. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '文件管理', '备份与恢复', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xiaosong8584/code-converter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?code-converter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xiaosong8584/code-converter/master/README.md)



## 概述

**Code Converter** 是一款专为 Obsidian 设计的编码转换插件，旨在解决非 UTF-8 文件在笔记库中显示乱码的问题。

**主要功能**：自动检测库内非 UTF-8 编码文件（如 GBK、Big5、UTF-16 等），在生成备份后安全转换为 UTF-8，并自动去除 BOM。此外，它还具备实验性的“乱码修复”功能，可尝试修复已固化为 UTF-8 的双重编码文本（如 `ÖÐÎÄ`）。

**适用场景**：适用于从旧系统迁移笔记、混合使用不同编码来源的文件，或需要批量清理库内编码不一致情况的场景。

**核心特色**：
1. **多重安全机制**：采用严格验证与评分制检测，低置信度文件需手动确认，转换前强制备份，确保数据可回滚。
2. **智能修复**：支持 22 种候选编码评分，并能识别不可逆的 U+FFFD 损坏，绝不凭空捏造内容。
3. **多语言与日志**：支持 10 种 UI 语言（含 RTL），并提供 JSON/Markdown 格式的转换日志导出。

**使用建议**：建议在首次使用时先对少量文件进行测试，确认备份机制正常后再批量处理。对于已出现乱码的文本，可尝试其实验性修复功能，但需注意该功能为实验性质，重要数据请保留原始备份。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


