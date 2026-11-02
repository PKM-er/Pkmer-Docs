---
uid: 1793625613199000
title: "Obsidian 插件：Fountain Reference Panel"
tags: ["模板与链接处理", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Show incoming references from Fountain scripts to the current note. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Fountain Reference Panel

> [!Note] 插件名片
> - 插件名称：Fountain Reference Panel
> - 插件作者：theluckystrike
> - 插件说明：Show incoming references from Fountain scripts to the current note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/fountain-reference-panel)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?fountain-reference-panel)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/fountain-reference-panel/master/README.md)



## 概述

Fountain Reference Panel 专为使用 Fountain 格式编写剧本的用户设计，核心功能是展示当前打开的笔记在哪些剧本文件中被引用。它通过扫描 Vault 中已保存的 `.fountain` 文件，识别形如 `[[>Target]]` 的引用标记，并在侧边栏面板中列出所有指向当前笔记的引用位置。面板会详细显示引用所在的脚本路径、行号、上方的场景标题（如 INT./EXT.）以及引用周围的上下文文本，帮助用户快速掌握角色、地点或道具在剧本中的出场情况。

典型使用场景包括追踪角色在长篇剧本中的分布。例如，当你打开名为“Ada”的角色笔记时，面板会列出所有提到 Ada 的剧本行，并附带场景标题，让你一眼看出她出现在哪些场景中。另一个场景是检查地点引用，如打开“Lighthouse”笔记，查看剧本中通过 `[[>Lighthouse|tower]]` 这种带显示文本的引用方式提及该地点的具体位置，从而确认场景描述的准确性。

相比 Obsidian 原生的反向链接或图谱功能，该插件不修改笔记或图谱数据，而是提供独立的视图，专门解析 Fountain 特有的引用语法。它具备智能的场景标题识别能力，能自动提取引用上方最近的场景头，并忽略 `/* boneyard */` 块中的废弃文本，确保列表的整洁。此外，Pro 版本支持按项目文件夹过滤扫描范围，并可导出包含引用详情的 Markdown 报告，便于整理和归档。

使用前需注意，该插件仅扫描已保存的文件，不会实时反映未保存的编辑内容，修改剧本后需手动点击“Refresh”按钮更新列表。它不自动扫描，也不支持在移动端或平板上测试，且打开脚本文件依赖其他插件提供的视图支持。如果你不需要针对 Fountain 剧本的特定引用追踪，或希望引用直接融入原生反向链接面板，此插件可能不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


