---
uid: 1791709366430000
title: 'Obsidian 插件：Data Autocomplete'
tags: ['数据处理', '编辑工具', '搜索与排序', '数据分析', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Data Autocomplete

> [!Note] 插件名片
> - 插件名称：Data Autocomplete
> - 插件作者：phoenixyun
> - 插件说明：
> - 插件分类：['数据处理', '编辑工具', '搜索与排序', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/phoenixyun/obsidian-data-autocomplete)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?data-autocomplete)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/phoenixyun/obsidian-data-autocomplete/master/README.md)



## 概述

**Data Autocomplete** 是一款专为 Obsidian 设计的本地数据自动补全插件，旨在解决报告撰写中数据引用繁琐且易出错的问题。

**主要功能**：插件直接解析 Vault 内的 Excel/CSV 文件，通过解析当前文档上下文（标题、段落），自动检索并填充对应的真实数值。每个候选值均强制附带“文件/工作表/行号”的溯源信息，确保数据可追溯。

**适用场景**：适用于需要频繁在笔记中引用结构化数据（如月度报告、数据分析文档）的用户，特别是那些希望避免手动复制粘贴、且对数据准确性要求极高的场景。

**核心特色**：
1. **纯本地运行**：无外部服务、无 LLM、无 Python 后端，数据完全离线，隐私安全。
2. **智能检索机制**：采用“精确→别名→部分匹配→语义兜底”的五阶段状态机。语义匹配基于本地哈希向量，仅接受高相似度结果，绝不虚构数据。
3. **强制溯源**：所有补全结果均标记来源，若未匹配到数据则显示 `NO_RESULT`，杜绝幻觉。

**使用建议**：
1. 将 Excel/CSV 文件放入 Vault 默认数据目录（如 `data-autocomplete-data/`）。
2. 写作时使用占位符（如 `【待补充】`）或仅输入指标名触发补全。
3. 注意该插件仅限桌面端使用，安装后需在设置中启用社区插件并关闭限制模式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


