---
uid: 1793625609138000
title: "Obsidian 插件：Cardsmith"
tags: ["学习与教育", "自动化与AI", "ANKI", "第三方工具集成", "obsidian插件"]
description: "Generate spaced-repetition flashcards from your notes with your own AI key or a local Ollama model, review them before they are saved, and export them to Anki. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Cardsmith

> [!Note] 插件名片
> - 插件名称：Cardsmith
> - 插件作者：Mira Forge
> - 插件说明：Generate spaced-repetition flashcards from your notes with your own AI key or a local Ollama model, review them before they are saved, and export them to Anki. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学习与教育', '自动化与AI', 'ANKI', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mira-forge/cardsmith)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cardsmith)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mira-forge/cardsmith/master/README.md)



## 概述

Cardsmith 旨在解决手动制作闪卡耗时且易出错的问题，核心功能是利用 AI 自动从笔记内容生成间隔重复闪卡。它支持接入 OpenAI、Anthropic 等云端 API，或完全本地运行的 Ollama 模型，确保数据隐私可控。生成的卡片会写入笔记末尾的特定标记块中，兼容 Obsidian 的 Spaced Repetition 插件，也可离线导出为 Anki 导入文件，让你无需改变现有复习习惯即可高效学习。

典型场景包括快速将长篇技术文档转化为复习卡片，或整理课程笔记。例如，当你读完一篇关于生物学的文章后，运行插件即可自动生成“线粒体产生什么？”这类问答对；或者在备考前，对整本教材的笔记进行批量处理。你只需在预览窗口中编辑或剔除不满意的卡片，确认后它们便会被插入笔记，随时准备进入复习队列。

相比同类工具，Cardsmith 的最大特色是“人工审核”机制与历史保留能力。所有卡片在保存前必须经过你的确认，避免 AI 幻觉直接污染笔记。此外，它智能处理重复运行：若卡片问题未变，原有的复习进度和历史记录会被完整保留，不会因重新生成而重置。Pro 版本还增加了同步文件夹功能，能自动检测笔记变更并批量更新卡片，极大提升了维护大量笔记的效率。

使用前需注意，免费版仅限单篇笔记生成（每篇最多 10 张卡），且每个库仅有一次免费文件夹运行机会；批量处理、自定义指令及同步文件夹功能需订阅 Pro 服务。该插件不适合希望完全自动化、无需人工干预直接保存卡片的用户，也不适合对 AI 生成内容零容忍、要求 100% 手动编写卡片的场景。若你依赖云端 API，需自行管理密钥安全；若使用本地 Ollama，则需确保电脑性能足以运行模型。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


