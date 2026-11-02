---
uid: 1793625619596000
title: "Obsidian 插件：OPML Note Import"
tags: ["文件管理", "数据处理", "效率工具", "obsidian插件"]
description: "Convert outline exports into ordered Markdown notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：OPML Note Import

> [!Note] 插件名片
> - 插件名称：OPML Note Import
> - 插件作者：theluckystrike
> - 插件说明：Convert outline exports into ordered Markdown notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/opml-note-import)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?opml-note-import)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/opml-note-import/master/README.md)



## 概述

OPML Note Import 旨在解决将大纲工具导出的 OPML 文件转换为 Obsidian 笔记的痛点。它允许用户将层级化的大纲数据直接转化为有序的 Markdown 笔记，核心功能包括选择导入层级、预览文件路径以及处理命名冲突。导入后，源文件保持原位，生成的笔记可独立阅读，无需插件开启即可访问，实现了从线性大纲到结构化知识库的平滑迁移。

典型场景包括整理复杂的思维导图或日记导出。例如，当你从 XMind 或 Logseq 导出一个包含“项目规划”和“个人生活”两个根节点的大纲时，可以选择 Level 1 导入，为每个根节点生成独立笔记；若根节点下包含大量日期子项，选择 Level 2 则能为每个日期生成单独笔记，子项自动变为嵌套列表。这种灵活性让你能根据大纲深度决定笔记粒度，避免单一文件过长或碎片化。

相比同类工具，该插件的特色在于精细的层级控制和冲突处理。它支持 1 至 6 级深度选择，并能在预览阶段清晰展示重复文件名（自动添加数字后缀）及潜在错误。Pro 版本还允许保存布局预设，方便对同类大纲应用相同规则，并提供重复导入时的差异对比，显示新增或修改的行，帮助用户追踪内容变化，而不仅仅是盲目覆盖。

使用前需注意，该插件仅处理 OPML 格式，不支持直接下载 RSS 订阅源或附件，且对超大文件（超过 200 万字符或 10,000 个节点）有限制。它不适合需要实时同步大纲工具与 Obsidian 的场景，因为这是一次性导入操作。此外，若你的大纲包含大量非标准 HTML 标签，它们会被保留为纯文本而非转换为 Markdown 格式，需手动调整。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


