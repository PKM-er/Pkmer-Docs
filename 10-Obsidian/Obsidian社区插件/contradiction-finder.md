---
uid: 1791709366236000
title: 'Obsidian 插件：Contradiction Finder'
tags: ['自动化与AI', '搜索与排序', '效率工具', 'obsidian插件']
description: 'Finds notes whose claims conflict with each other using embeddings plus an LLM verifier. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Contradiction Finder

> [!Note] 插件名片
> - 插件名称：Contradiction Finder
> - 插件作者：aguilaaa
> - 插件说明：Finds notes whose claims conflict with each other using embeddings plus an LLM verifier. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '搜索与排序', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/aguila1989/obsidian-contradiction-finder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?contradiction-finder)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/aguila1989/obsidian-contradiction-finder/master/README.md)



## 概述

**主要功能**
该插件利用嵌入模型（Embeddings）和LLM验证器，自动扫描并识别库中相互冲突的笔记声明。它通过四阶段流水线工作：提取笔记特征、批量嵌入并缓存、基于余弦相似度筛选高相关笔记对、最后由LLM严格验证并输出冲突详情。

**适用场景**
适用于长期维护的个人知识库或团队文档库。当笔记随时间推移出现观点漂移（如不同时期记录了对立的部署策略）时，该插件能高效定位这些逻辑矛盾，帮助用户及时修正和统一信息。

**核心特色**
1. **智能筛选**：仅对相似度高于阈值（默认0.80）的笔记对进行LLM验证，大幅降低API成本。
2. **高效缓存**：向量数据基于文件路径和修改时间缓存，重扫时仅处理变更笔记。
3. **灵活兼容**：支持任何OpenAI兼容接口，包括OpenAI、Ollama及LM Studio等本地模型。
4. **直观展示**：侧边栏卡片式展示冲突双方、具体陈述及置信度，支持点击直达源文件，结果持久化保存。

**使用建议**
1. 在设置中配置LLM的Base URL和API Key（本地模型可留空Key）。
2. 通过命令面板或侧边栏图标触发扫描，关注进度提示。
3. 建议定期运行扫描，特别是大量新增或修改笔记后，以保持知识库的一致性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


