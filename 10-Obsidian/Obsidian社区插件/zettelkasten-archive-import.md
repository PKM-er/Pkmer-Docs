---
uid: 1793625624972000
title: "Obsidian 插件：Zettelkasten Archive Import"
tags: ["数据处理", "文件管理", "模板与链接处理", "obsidian插件"]
description: "Convert version 3.8 Zettelkasten archives into notes with keywords, links, and note sequences. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Zettelkasten Archive Import

> [!Note] 插件名片
> - 插件名称：Zettelkasten Archive Import
> - 插件作者：theluckystrike
> - 插件说明：Convert version 3.8 Zettelkasten archives into notes with keywords, links, and note sequences. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '文件管理', '模板与链接处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/zettelkasten-archive-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zettelkasten-archive-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/zettelkasten-archive-import/master/README.md)



## 概述

Zettelkasten Archive Import 专为解决 Zettelkasten 3 软件数据迁移至 Obsidian 的难题而设计。它能够将版本 3.8 的 `.zkn3` 存档文件直接转换为 Markdown 笔记，完整保留笔记的原始编号、正文内容、关键词、内部链接以及笔记序列。整个过程在本地设备完成，无需网络连接或账号登录，确保数据隐私安全。

典型场景包括整理旧版 Zettelkasten 3 中的文献笔记或研究记录。例如，当你有一批带有复杂交叉引用和关键词标签的旧笔记时，该插件能将其精准转换为 Obsidian 笔记，原有的 `[z 3]` 链接会自动变为 `[[3]]` 双链，关键词也会准确映射为属性列表，方便你在新库中继续构建知识网络。

相比其他通用导入工具，该插件的特色在于对 Zettelkasten 3 特有结构的深度支持。它严格保留已删除笔记的空位编号，确保笔记序列的逻辑一致性；同时提供详细的预览报告，在写入前列出缺失链接、不支持的标记及文件冲突。Pro 版本还允许自定义文件名规则（如添加标题）及对比不同版本存档的差异，帮助用户精准追踪笔记的新增与修改。

使用前需注意，该插件仅支持版本 3.8 的存档，且不会复制附件、图片、作者信息及 BibTeX 文件，这些内容需手动处理。此外，它不适合需要实时同步或自动更新已存在笔记的场景，重复导入时仅创建新笔记，不会覆盖或更新文件夹中已有的同名文件。若你的需求涉及移动端操作或超大存档（超过 20 MiB），建议谨慎评估。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


