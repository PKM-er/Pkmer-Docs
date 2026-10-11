---
uid: 1791709365451000
title: 'Obsidian 插件：Auto MOC and AI Tagger'
tags: ['自动化与AI', '文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
description: 'Automatically maintains folder MOCs (with tag listing) and uses a local or cloud LLM to tag notes and recommend similar notes based on vector embeddings. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Auto MOC and AI Tagger

> [!Note] 插件名片
> - 插件名称：Auto MOC and AI Tagger
> - 插件作者：zhangpl666ya
> - 插件说明：Automatically maintains folder MOCs (with tag listing) and uses a local or cloud LLM to tag notes and recommend similar notes based on vector embeddings. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文件管理', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zhangpl666ya/auto-moc-ai-tagger)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-moc-ai-tagger)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zhangpl666ya/auto-moc-ai-tagger/master/README.md)



## 概述

**1. 主要功能**
自动维护文件夹级的内容地图（MOC），并集成本地或云端大语言模型（LLM），为笔记自动添加标签，同时基于向量嵌入推荐相似笔记。

**2. 适用场景**
适用于希望自动化整理知识库、减少手动维护目录负担，且需要利用AI辅助进行语义分类和内容关联的Obsidian用户。

**3. 核心特色**
- **智能MOC**：自动生成并更新白名单文件夹的`MOC.md`，包含子文件夹、笔记链接、标签及最后修改日期。
- **多端AI支持**：兼容Ollama（本地）、OpenAI及Anthropic，支持将生成的标签写回YAML Frontmatter。
- **隐私与安全**：无遥测功能，API密钥本地存储且界面掩码显示；使用本地Ollama时可确保数据完全不出内网。

**4. 使用建议**
- 需Obsidian 1.13.0及以上版本。
- 若使用本地Ollama，需手动通过`ollama pull`安装所需模型。
- 注意数据隐私：云端服务会将笔记内容发送至提供商，请谨慎处理敏感数据。
- 建议将`data.json`和`embeddings-cache.json`加入Git忽略列表，避免泄露密钥或缓存数据。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


