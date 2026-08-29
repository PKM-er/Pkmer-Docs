---
uid: 1786577076851002
title: 'Obsidian 插件：Chew It'
tags: ['自动化与AI', '学习与教育', '第三方工具集成', '数据分析', '文字处理', 'obsidian插件']
description: '在侧边栏用大语言模型（LLM）分析当前笔记——生成大纲、解释关键概念，还能给出精炼总结。支持与Claude（Anthropic公司）以及任何兼容OpenAI的API配合使用。- 此插件尚未经过Obsidian官方人员人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Chew It

> [!Note] 插件名片
> - 插件名称：Chew It
> - 插件作者：Jakob He
> - 插件说明：在侧边栏用大语言模型（LLM）分析当前笔记——生成大纲、解释关键概念，还能给出精炼总结。支持与Claude（Anthropic公司）以及任何兼容OpenAI的API配合使用。- 此插件尚未经过Obsidian官方人员人工审核。
> - 插件分类：['自动化与AI', '学习与教育', '第三方工具集成', '数据分析', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/leweii/chew-it)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?chew-it)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/leweii/chew-it/master/README.md)



## 概述

### Chew It插件总结
1. **主要功能**：借助大语言模型（LLM）分析当前阅读笔记，在侧边栏面板展示分析结果，包括大纲、关键概念解释和提炼总结，不修改原笔记。支持Claude和任何OpenAI兼容API。
2. **适用场景**：适用于阅读内容密集的文档时，希望快速梳理结构、理解难点、获取核心内容的场景。
3. **核心特色**：
    - 以Markdown格式逐令牌流式展示分析结果，保留原笔记。
    - 提供多种分析视角供选择，可并行分析。
    - 每个视角有可选系统提示。
    - 分析结果与文档关联，可保存和恢复。
    - 支持单标签再生和导出。
4. **使用建议**：需自行提供API密钥。该插件会将当前笔记全文（含未保存编辑）通过HTTPS发送给配置的LLM提供商。长笔记会自动分段分析并拼接结果，使用超长笔记时注意费用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


