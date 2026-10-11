---
uid: 1791709367647000
title: 'Obsidian 插件：Hugo Exporter'
tags: ['安全与隐私', '自动化与AI', '发布工具', '文件管理', 'obsidian插件']
description: 'Review Obsidian notes with AI for sensitive content and privacy risks, then export approved Markdown and images as Hugo page bundles. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hugo Exporter

> [!Note] 插件名片
> - 插件名称：Hugo Exporter
> - 插件作者：miles-ya
> - 插件说明：Review Obsidian notes with AI for sensitive content and privacy risks, then export approved Markdown and images as Hugo page bundles. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '自动化与AI', '发布工具', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/miles-ya/ObsidianHugoExporter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hugo-exporter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/miles-ya/ObsidianHugoExporter/master/README.md)



## 概述

**Hugo Exporter** 是一款专为 Obsidian 用户设计的插件，旨在将笔记安全、高效地导出为 Hugo 静态网站内容。

**主要功能**：一键导出当前笔记至 Hugo 项目，自动构建 Page Bundle 结构，处理 YAML 前置元数据，并将 Obsidian 特有的双链和图片引用转换为标准 Markdown 格式。

**适用场景**：适合使用 Hugo 搭建个人博客或文档站点的 Obsidian 用户，特别是那些希望将日常笔记转化为公开文章，且对内容隐私和安全性有较高要求的场景。

**核心特色**：
1. **AI 隐私审查**：利用 OpenAI 兼容服务自动检测敏感信息、个人身份数据及位置信息，提供可编辑的审查建议，确保发布内容安全。
2. **元数据清洗**：自动移除图片中的隐私元数据（如 GPS 信息），同时保留色彩配置文件，并使用 SHA-256 哈希命名避免冲突。
3. **智能转换**：自动清理日期笔记前缀，支持自定义文本替换规则，且具备冲突安全机制，自动重名处理。

**使用建议**：建议用户在导出前仔细审阅 AI 提供的隐私风险报告，确认无误后再执行“替换”操作。同时，需配置好 OpenAI 兼容服务密钥，并定期检查自定义的文本替换规则，以确保导出内容的准确性和一致性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


