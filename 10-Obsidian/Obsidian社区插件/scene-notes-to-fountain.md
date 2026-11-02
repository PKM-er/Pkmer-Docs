---
uid: 1793625620966001
title: "Obsidian 插件：Scene Notes to Fountain"
tags: ["文字处理", "编辑工具", "效率工具", "obsidian插件"]
description: "Convert planning notes into an ordered Fountain outline with scene headings and summaries. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Scene Notes to Fountain

> [!Note] 插件名片
> - 插件名称：Scene Notes to Fountain
> - 插件作者：theluckystrike
> - 插件说明：Convert planning notes into an ordered Fountain outline with scene headings and summaries. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文字处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/scene-notes-to-fountain)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?scene-notes-to-fountain)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/scene-notes-to-fountain/master/README.md)



## 概述

Scene Notes to Fountain 专为编剧和故事创作者设计，旨在将分散的规划笔记快速转化为标准的 Fountain 剧本大纲。它通过读取指定文件夹内的 Markdown 笔记，自动提取场景标题和剧情摘要，生成带有强制场景标题和摘要行的 Fountain 格式文件。整个过程仅读取笔记内容，不会修改原始文件，确保你的创作素材保持原样。

想象你正在构思一部电影，将每个场景的构思单独存为一个笔记文件。只需运行导出命令，插件会列出这些笔记，你可以通过“上移”和“下移”按钮调整场景顺序，无需手动重命名文件。预览确认后，插件会生成一个新的 `.fountain` 文件，其中每个笔记对应一个场景，标题和摘要清晰排列，方便后续在专业剧本软件中继续编辑。

相比其他导出工具，该插件具备严格的内容校验机制。它会检测可能导致 Fountain 格式错误的字符，如 Obsidian 特有的双括号链接或代码注释符号，并在保存前提示修正，防止剧本在专业软件中显示异常。此外，它支持从笔记属性中读取标题和摘要，若未设置则智能提取文件名或首段文字，兼顾了灵活性与规范性。

使用前需注意，插件仅处理当前文件夹下的直接子文件，不包含子文件夹内容。若笔记中包含双括号链接或特定符号，需手动清理或将其移至属性字段，否则导出会失败。它不适合需要拖拽排序、跨文件夹批量处理或直接在移动端使用的场景，主要服务于桌面端用户将静态笔记转化为结构化剧本大纲的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


