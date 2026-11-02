---
uid: 1793625612343000
title: "Obsidian 插件：DualTran"
tags: ["自动化与AI", "文字处理", "第三方工具集成", "obsidian插件"]
description: "Translate selections and whole notes with Google or your own AI model (20+ BYOK providers). - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DualTran

> [!Note] 插件名片
> - 插件名称：DualTran
> - 插件作者：Seigwen Lee
> - 插件说明：Translate selections and whole notes with Google or your own AI model (20+ BYOK providers). - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/seigwen/dualtran-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dualtran-translate)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/seigwen/dualtran-obsidian/master/README.md)



## 概述

DualTran 旨在解决 Obsidian 用户阅读外文笔记时的语言障碍，核心功能是将选中文本或整篇笔记翻译为目标语言。它默认使用 Google 翻译服务，安装后即可直接使用，无需额外配置；同时也支持接入用户自有的 AI 模型，兼容 OpenAI、DeepSeek、通义、Moonshot 及本地 Ollama 等 20 多种服务商，满足对翻译质量或隐私有更高要求的场景。

典型使用场景包括快速理解外文文献或代码注释。例如，在阅读一篇英文技术博客时，选中难以理解的段落，执行“插入译文”命令，译文会直接显示在原文下方，形成双语对照，方便随时回看原意；或者在整理外文资料时，使用“整篇翻译到新文件”功能，将整篇笔记翻译并保存为独立文件，既保留了原始笔记，又生成了可读的中文版本，便于后续归档和检索。

相比同类插件，DualTran 的特色在于其灵活的双语对照模式，译文插入原文下方而非直接替换，确保信息不丢失。此外，它提供了极为丰富的模型选择，除了内置常用服务商外，还集成了 models.dev 目录中的 200 多家服务商，并支持自定义模型 ID。界面支持 38 种语言，能自动跟随 Obsidian 的系统语言设置，对于多语言环境下的用户非常友好，且 API Key 仅存储在本机，保障数据安全。

使用前需注意，若使用 AI 模型翻译，需在设置中正确配置 API Key 并选择对应的服务商和模型，否则可能无法正常工作。该插件不适合需要实时语音翻译、图片 OCR 翻译或离线无网络环境下使用（除非配置了本地 Ollama 等本地模型）的场景。对于仅偶尔翻译少量单词的用户，其功能可能略显复杂，但对于经常处理大量外文内容的用户，它是提升效率的得力助手。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


