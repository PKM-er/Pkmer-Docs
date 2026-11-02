---
uid: 1793625605976000
title: "Obsidian 插件：Annotator JSON Export"
tags: ["数据处理", "文件管理", "效率工具", "obsidian插件"]
description: "Export saved annotation notes as a local JSON archive with quotes, comments, and tags. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Annotator JSON Export

> [!Note] 插件名片
> - 插件名称：Annotator JSON Export
> - 插件作者：theluckystrike
> - 插件说明：Export saved annotation notes as a local JSON archive with quotes, comments, and tags. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/annotator-json-export)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?annotator-json-export)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/annotator-json-export/master/README.md)



## 概述

Annotator JSON Export 旨在解决 Obsidian 中 Annotator 插件标注数据难以独立存档的问题。它通过读取笔记中的 `annotation-json` 代码块及标记区域，将引文、评论和标签提取并打包为本地 JSON 文件。这一过程完全在本地进行，无需联网或注册账号，确保你的标注数据能以结构化形式脱离原始笔记视图，形成独立的数字副本。

典型场景包括研究资料的长期归档或跨工具迁移。例如，当你完成一篇文献的密集标注后，可以使用该插件将分散在 Markdown 笔记中的高亮和批注导出为 JSON，以便后续导入其他支持该格式的阅读软件，或作为备份防止笔记格式变更导致数据丢失。对于需要定期整理知识库的用户，它提供了一种从非结构化文本中精准提取结构化元数据的有效手段。

相比其他仅支持纯文本导出的工具，该插件的特色在于对 Annotator 特定数据结构的深度解析。它能智能识别并保留引文选择器、Unicode 文本及自定义字段，同时支持通过标记区域动态更新评论和标签。此外，预览界面会详细展示解析状态，包括有效行数、错误详情及字段映射情况，让用户在生成文件前能清晰确认数据完整性，避免静默丢失关键信息。

使用前需注意，该插件仅读取当前笔记中已保存的数据，无法恢复已被其他工具删除的字段，且不支持视频或 EPUB 格式的标注。它生成的 JSON 是本地存档格式，不保证与特定在线服务兼容。此外，移动端及超大文件场景未经充分测试，建议仅在桌面端使用。若你的需求是实时同步或在线协作，此插件并非合适选择，它更适合作为静态数据的离线备份工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


