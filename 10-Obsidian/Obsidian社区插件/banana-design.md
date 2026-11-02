---
uid: 1793625606734000
title: "Obsidian 插件：Banana Design"
tags: ["自动化与AI", "图片与PDF", "样式与美化", "第三方工具集成", "obsidian插件"]
description: "Create article-led covers and illustrations with configurable AI services, previews, export, and anchored batch insertion. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Banana Design

> [!Note] 插件名片
> - 插件名称：Banana Design
> - 插件作者：banana
> - 插件说明：Create article-led covers and illustrations with configurable AI services, previews, export, and anchored batch insertion. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '图片与PDF', '样式与美化', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/treydong/banana-design)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?banana-design)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/treydong/banana-design/master/README.md)



## 概述

Banana Design 是一款专为 Obsidian 桌面端设计的封面与插图生成工具。它允许用户基于当前 Markdown 笔记内容，选择特定的视觉模板和风格，独立配置规划与图像生成服务，从而快速创建文章封面或正文配图。插件支持预览生成结果、导出 PNG 图片，并能将插图精准插入到笔记中预先标记的位置，实现从内容到视觉呈现的一体化工作流。

典型使用场景包括为技术博客或公众号文章制作统一风格的封面图，以及为长文生成配套的章节插图。例如，你可以先选定一篇关于“AI 趋势”的笔记，选择“极简科技风”模板，让插件根据文章标题和摘要生成封面候选图；确认满意后，直接导出 PNG 或插入到笔记指定段落。此外，它还支持对已生成封面的特定区域进行局部重绘，无需重新生成整张图，极大提升了调整效率。

相比同类插件，Banana Design 的核心特色在于“规划”与“生成”服务的解耦配置，支持 Codex CLI、OpenAI、Anthropic、Gemini 等多种后端，甚至兼容本地 Ollama 服务。它引入了“拥有段落标记”的插图规划机制，确保图片插入位置可控，避免静默追加。此外，插件还集成了微信公众号富文本预览与草稿发布、X (Twitter) 线程发布功能，并支持通过 SSH 中继处理固定 IP 需求，适合有跨平台分发需求的用户。

使用前需注意，该插件仅支持 Obsidian 桌面版，且依赖外部 API 密钥，费用由你配置的提供商承担。它不会在后台扫描库文件，隐私性较好，但生成的 PNG 和会话数据存储在本地，同步时需留意隐私。如果你只需要简单的图片压缩或无需 AI 生成的静态封面，此插件可能过于复杂；它不适合希望完全离线运行或不想配置任何 API 连接的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


