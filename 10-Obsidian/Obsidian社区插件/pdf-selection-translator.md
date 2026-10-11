---
uid: 1791709369167000
title: 'Obsidian 插件：PDF Selection Translator'
tags: ['图片与PDF', '自动化与AI', '文字处理', 'obsidian插件']
description: 'Translate selected PDF words and passages with your own OpenAI-compatible model, alongside PDF++. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF Selection Translator

> [!Note] 插件名片
> - 插件名称：PDF Selection Translator
> - 插件作者：Actify
> - 插件说明：Translate selected PDF words and passages with your own OpenAI-compatible model, alongside PDF++. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '自动化与AI', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/xfrrn/obsidian-pdf-selection-translator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-selection-translator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/xfrrn/obsidian-pdf-selection-translator/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户在阅读 Obsidian 中的 PDF 时，通过双击单词或选中段落进行即时翻译。它支持接入用户自有的 OpenAI 兼容接口（如本地模型或云端 API），在 PDF 选区旁弹出翻译气泡，提供原文展示、复制功能及上下文辅助消歧。

**2. 适用场景**
适用于需要频繁阅读外文文献、技术文档或学术资料的桌面端用户。特别适合搭配 PDF++ 插件使用，适合那些拥有私有部署 LLM 或愿意配置 API Key 以保护隐私或控制成本的高级用户。

**3. 核心特色**
- **灵活接入**：支持任意 OpenAI 兼容端点，可自动获取模型列表或手动输入。
- **模式多样**：提供自动、点击触发及仅命令三种模式，支持 16 种目标语言预设。
- **高效体验**：内置内存缓存（最近 100 条）、智能取消过期请求，且不会修改原始 PDF 或笔记文件。
- **本地化友好**：设置界面支持中英文即时切换，翻译气泡固定为中文界面。

**4. 使用建议**
- 仅支持 Obsidian 桌面版 1.13.7+，移动端不可用。
- PDF 必须包含可选中的文本层，纯扫描图片需先进行 OCR 处理。
- 需自行配置有效的 API 密钥或本地模型服务地址。
- 建议根据网络延迟调整超时设置，并利用“附近上下文”功能提高专业术语翻译准确度。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


