---
uid: 1793625607961000
title: "Obsidian 插件：Bilingual Reader"
tags: ["文字处理", "自动化与AI", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Translate the active note into one of 11 languages and open a side-by-side copy, leaving the original untouched. Works with Google, DeepL, and any OpenAI-compatible LLM. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bilingual Reader

> [!Note] 插件名片
> - 插件名称：Bilingual Reader
> - 插件作者：Wei Zhou
> - 插件说明：Translate the active note into one of 11 languages and open a side-by-side copy, leaving the original untouched. Works with Google, DeepL, and any OpenAI-compatible LLM. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '自动化与AI', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zhouweico/obsidian-bilingual-reader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bilingual-reader)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zhouweico/obsidian-bilingual-reader/master/README.md)



## 概述

Bilingual Reader 旨在解决 Obsidian 用户阅读外文资料时的痛点，核心功能是将当前笔记翻译为 11 种语言之一，并生成独立的新文件。它严格保证原文零改动，所有译文均写入新文件，支持并排纯译文或原文译文交替排列两种模式。插件能智能保留 Markdown 结构，代码块、链接、图片等元素不会被翻译，确保笔记格式完整。

典型场景包括快速浏览英文论文或技术文档。例如，当你阅读一篇英文 Newsletter 时，可生成并排译文，在右侧分屏查看中文，卡住时扫一眼原文即可；若需精读或学习外语，可生成上下对照版，每段原文后紧跟译文，方便逐句核对。这种设计让阅读过程既流畅又具备回溯能力。

相比同类插件，其特色在于结构安全与多引擎支持。它自动跳过代码和元数据，避免翻译破坏笔记结构；同时支持 Google、DeepL 及任意 OpenAI 兼容 LLM，可保存多个厂商配置并随时切换。长文翻译采用分块并发机制，单块失败时保留原文而不中断整篇，且译文文件自动添加回链指向原文，便于导航。

使用前需注意，翻译请求会直接发送到你配置的服务商，API Key 存储在本地库中，若通过 iCloud 同步需留意隐私。该插件不适合需要实时双向翻译或修改原文的场景，且界面目前仅支持中文。若依赖 Google 引擎，因使用非官方端点，长期稳定性可能受限，建议优先配置 DeepL 或 LLM 服务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


