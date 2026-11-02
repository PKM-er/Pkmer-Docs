---
uid: 1793625605679000
title: "Obsidian 插件：AI Translation"
tags: ["自动化与AI", "文字处理", "第三方工具集成", "效率工具", "obsidian插件"]
description: "Lightweight translation plugin supporting DeepSeek, Tongyi Qianwen, Doubao, Google Gemini, and arbitrary custom models. Select English text and translate with one click, inserting below the original. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：AI Translation

> [!Note] 插件名片
> - 插件名称：AI Translation
> - 插件作者：Caoshengzhao
> - 插件说明：Lightweight translation plugin supporting DeepSeek, Tongyi Qianwen, Doubao, Google Gemini, and arbitrary custom models. Select English text and translate with one click, inserting below the original. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '文字处理', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wolframscs/obsidian-AI-Translation)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ai-translation)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wolframscs/obsidian-AI-Translation/master/README.md)



## 概述

AI Translation 是一款专为 Obsidian 打造的轻量级多模型翻译插件，旨在解决笔记中外语内容阅读障碍的问题。其核心功能允许用户选中任意文本，通过右键菜单、命令面板或自定义快捷键一键触发翻译，并将结果自动插入到原文下方，形成清晰的对照视图。该插件原生支持 DeepSeek、通义千问、豆包、Google Gemini 等主流国内外大模型，同时兼容任意符合 OpenAI 规范的自定义 API 接口，让用户无需在多个工具间切换即可在笔记内完成翻译。

典型使用场景包括学术文献阅读与外语学习。例如，当你在阅读英文论文时，选中一段晦涩的摘要，插件即可将其翻译为严谨的学术中文并保留在原文之下，方便随时对照理解；或者在整理日语笔记时，快速将关键术语翻译为中文，辅助记忆。这种“原文+译文”的即时呈现方式，极大地提升了阅读效率，避免了频繁复制粘贴到外部翻译网站的繁琐操作。

相比同类插件，AI Translation 的特色在于其极致的轻量化与高自由度。它采用纯 Obsidian 原生实现，无重型依赖，确保在桌面端和移动端均能快速响应。此外，插件提供了自定义系统提示词功能，用户可根据需求调整翻译语气，如指定“学术风格”或“口语化表达”，并支持将目标语言设置为中文、英文、日文等多种语言。这种对翻译细节的精细控制，使其不仅是一个简单的翻译工具，更是一个可定制的辅助阅读助手。

使用前需注意，该插件需要用户自行配置对应 AI 服务商的 API Key，且翻译质量取决于所选模型的能力。它不适合需要离线使用或完全免费无限制调用的场景，因为每次翻译都会消耗 API 额度。此外，插件目前主要聚焦于文本翻译，不支持图片 OCR 或语音翻译功能。如果你需要的是整篇文档的批量自动翻译或复杂的排版保留功能，可能需要考虑其他更专业的翻译软件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


