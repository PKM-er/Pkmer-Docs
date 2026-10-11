---
uid: "1791709365476000"
title: "Obsidian 插件：Auto Tagger (Jev)"
tags: ['自动化与AI', '编辑工具', '效率工具', 'obsidian插件']
description: "Suggests or applies a tag to the current note using TypeSafe's Jev model and your vault's existing tags. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：Auto Tagger (Jev)

> [!Note] 插件名片
> - 插件名称：Auto Tagger (Jev)
> - 插件作者：Parth
> - 插件说明：Suggests or applies a tag to the current note using TypeSafe's Jev model and your vault's existing tags. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['自动化与AI', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/parthsidpara/obsidian-auto-tagger-jev)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-tagger-jev)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/parthsidpara/obsidian-auto-tagger-jev/master/README.md)



## 概述

**Auto Tagger (Jev)** 是一款利用 TypeSafe 的 Jev 模型，为当前笔记自动推荐或应用标签的 Obsidian 插件。

**主要功能**：通过读取笔记标题及正文开头，结合库内高频标签，由 AI 判断并应用最匹配的标签。支持将标签写入 Frontmatter 或追加至文末，且自动去重。

**适用场景**：适合希望自动化整理笔记、减少手动打标签负担，且拥有稳定标签体系的 Obsidian 用户。

**核心特色**：
1. **智能匹配**：基于现有标签库进行语义匹配，提供置信度反馈，帮助用户建立对模型准确度的直觉。
2. **灵活控制**：支持“试运行”模式（仅预览不修改）和开发者模式（查看原始概率分布）。
3. **隐私可控**：仅发送标题、指定长度的正文及候选标签名至 API，不上传其他内容；API 密钥本地存储。

**使用建议**：
1. 需配置 TypeSafe API 密钥。
2. 建议调整“考虑标签数”（默认15），发送更少的高信号标签可提升模型判别力。
3. 初期建议开启“Dry run”观察推荐结果，熟悉模型在你库中的表现后再正式应用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

