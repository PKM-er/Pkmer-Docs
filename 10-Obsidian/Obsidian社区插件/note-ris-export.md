---
uid: 1793625618575000
title: "Obsidian 插件：Note RIS Export"
tags: ["学术与科研", "数据处理", "文件管理", "obsidian插件"]
description: "Map reference note properties to fields in a local RIS file. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note RIS Export

> [!Note] 插件名片
> - 插件名称：Note RIS Export
> - 插件作者：theluckystrike
> - 插件说明：Map reference note properties to fields in a local RIS file. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['学术与科研', '数据处理', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/note-ris-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-ris-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/note-ris-export/master/README.md)



## 概述

Note RIS Export 将 Obsidian 笔记库中的参考文献属性批量转换为标准的 RIS 格式文件。它允许用户自定义映射关系，将笔记中的类型、标题、作者、年份、期刊、DOI、URL 和摘要等属性，精准对应到 RIS 文件的相应字段。插件会在导出前对数据进行严格校验，确保生成的文件符合学术引用规范，从而解决手动整理参考文献格式繁琐且易出错的问题。

典型场景适用于需要频繁向文献管理软件导入数据的用户。例如，当你在一篇论文笔记中记录了多篇参考文献，只需运行导出命令，选择包含这些笔记的文件夹，插件即可生成一个包含所有有效记录的 RIS 文件。另一个场景是管理不同项目的文献，通过 Pro 版本的过滤功能，你可以仅导出标记为特定集合（如 `collection = thesis`）的笔记，实现按项目分类导出，避免无关文献混入。

相比同类插件，其核心特色在于“预览即校验”机制。在生成文件前，它会列出所有缺失必填项或格式错误的笔记，并阻止导出，防止产生残缺的 RIS 文件。此外，Pro 版本支持命名映射和自动重复导出：当笔记属性发生变化时，插件可自动更新本地 RIS 文件，且仅在内容实际改变时写入，极大提升了维护大量文献时的效率。

使用前需注意，该插件仅处理本地文件，不上传任何数据，但要求笔记属性格式严格（如作者必须是列表，年份必须为四位数字）。它不适合需要直接在线同步文献或处理非结构化文本的场景。若你的笔记结构混乱或字段命名不统一，需先整理属性键名。此外，免费版不支持按集合过滤和自动更新，对于需要频繁动态导出特定子集的用户，可能需要考虑 Pro 功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


