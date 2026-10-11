---
uid: 1791709370672000
title: 'Obsidian 插件：Untitled Auto Title'
tags: ['自动化与AI', '文件管理', '效率工具', 'obsidian插件']
description: 'Automatically generate concise titles for untitled notes with Groq or local content extraction. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Untitled Auto Title

> [!Note] 插件名片
> - 插件名称：Untitled Auto Title
> - 插件作者：remriel
> - 插件说明：Automatically generate concise titles for untitled notes with Groq or local content extraction. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/remriel/obsidian-untitled-auto-title)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?untitled-auto-title)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/remriel/obsidian-untitled-auto-title/master/README.md)



## 概述

**1. 主要功能**
该插件利用 Groq AI 或本地提取技术，自动为 Obsidian 中未命名的笔记生成简洁、基于内容的标题，并自动重命名文件。

**2. 适用场景**
适用于快速记录灵感或碎片化信息时，避免手动命名“Untitled”笔记的场景。支持标准未命名文件及带数字后缀的占位符，但排除日记、模板及隐藏文件夹。

**3. 核心特色**
- **双模式运行**：支持通过 Groq API 生成智能标题，或离线使用“本地标题/短语”模式提取现有标题。
- **安全隐私**：API 密钥从环境变量读取，绝不写入设置、源码或同步文件；请求前自动过滤 YAML、隐藏注释及图片嵌入。
- **智能触发**：输入至少30字符并暂停10秒后自动执行，生成后标题固定，避免干扰后续编辑。
- **内容优化**：默认截取笔记首尾共12,000字符作为上下文，确保长文档也能生成准确标题。

**4. 使用建议**
- 需 Obsidian 桌面版 1.13+。
- 若使用 AI 模式，请在系统环境变量中配置 `GROQ_API_KEY`，并重启 Obsidian（建议从终端启动以确保环境变量生效）。
- 无需 API 时，请在插件设置中切换为“Local heading or phrase”模式以实现离线使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


