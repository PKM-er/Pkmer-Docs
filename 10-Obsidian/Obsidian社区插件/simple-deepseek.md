---
uid: 1791709369967000
title: 'Obsidian 插件：Simple DeepSeek'
tags: ['自动化与AI', '图片与PDF', '编程与脚本', 'obsidian插件']
description: 'Chat with DeepSeek, parse PDFs with MinerU, and edit Jupyter notebooks in real time. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Simple DeepSeek

> [!Note] 插件名片
> - 插件名称：Simple DeepSeek
> - 插件作者：helloxxxy
> - 插件说明：Chat with DeepSeek, parse PDFs with MinerU, and edit Jupyter notebooks in real time. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '图片与PDF', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/helloxxxy/simple-deepseek-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?simple-deepseek)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/helloxxxy/simple-deepseek-obsidian/master/README.md)



## 概述

**1. 主要功能**
该插件为桌面端 Obsidian 提供三大核心能力：与 DeepSeek 进行多轮对话、利用 MinerU 解析 PDF 文档，以及实时编辑 Jupyter Notebook。支持 Markdown 和数学公式渲染，并允许在聊天中直接粘贴或拖入图片与 PDF。

**2. 适用场景**
适用于需要结合大模型进行知识管理、文献阅读及代码协作的场景。特别适合研究人员处理 arXiv 论文、学生或开发者在 Obsidian 中直接运行和调试 Jupyter 代码，以及需要长上下文管理的深度对话需求。

**3. 核心特色**
- **智能上下文管理**：自动监控 Token 使用，支持按需压缩或接近 80 万 Token 时自动压缩，显示缓存命中率。
- **多模态处理**：图片使用 DeepSeek Flash 视觉模型，PDF 通过 MinerU 提取，支持 `@` 引用本地论文库。
- **Notebook 集成**：启动本地 JupyterLab，通过 RTC 协议同步单元格变更，支持增量发送内容以节省资源。

**4. 使用建议**
需安装 Obsidian 1.12.7 及以上版本。配置时务必填入 DeepSeek API Key，若需解析 PDF 则额外配置 MinerU Token。在协作编辑 Notebook 时，请务必在运行 AI 生成的代码前进行人工审查，以确保安全。界面支持中英文切换，建议根据习惯调整。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


