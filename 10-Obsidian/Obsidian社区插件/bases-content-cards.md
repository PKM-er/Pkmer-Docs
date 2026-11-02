---
uid: 1793625607825000
title: "Obsidian 插件：Bases Content Cards"
tags: ["界面优化", "样式与美化", "效率工具", "obsidian插件"]
description: "Show notes as cards in Bases, using each note's own content as the cover instead of an image. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Content Cards

> [!Note] 插件名片
> - 插件名称：Bases Content Cards
> - 插件作者：Marcel Schwarz
> - 插件说明：Show notes as cards in Bases, using each note's own content as the cover instead of an image. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '样式与美化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/icaotix/obsidian-bases-content-cards)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-content-cards)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/icaotix/obsidian-bases-content-cards/master/README.md)



## 概述

Bases Content Cards 解决了 Obsidian Bases 视图无法直接展示笔记正文的痛点。它利用笔记自身的内容作为卡片封面，替代了内置视图中的图片位置。由于 Bases 原生仅能显示名称、标签和日期，无法读取正文，该插件通过直接读取笔记主体，将文本、标题或代码块等实际内容呈现在卡片上，让你无需打开笔记即可快速浏览其核心信息。

典型场景包括管理大量文章或项目笔记。例如，当你保存了多篇网络文章时，卡片会直接显示文章开头的摘要或指定章节，配合顶部的搜索框，你可以直接在卡片文本中查找关键词，而不仅仅是匹配标题。另一个场景是快速回顾会议记录，通过设置封面为 `#Summary` 章节，所有卡片将统一展示总结部分，便于在网格中横向对比不同会议的结论。

相比同类插件，其特色在于深度整合了 Bases 的筛选与排序功能，同时提供了针对正文内容的独立搜索能力。卡片高度会根据文件大小预先计算，避免加载时的布局跳动，且支持 Markdown 渲染。此外，插件具备优秀的状态记忆功能，打开笔记后返回，网格位置和搜索状态均保持不变，且支持按标签页独立记忆，互不干扰。

使用前需注意，该视图为只读，不会修改笔记。它仅能搜索当前 Base 筛选出的笔记，无法找回被过滤掉的内容。首次搜索需读取所有笔记正文，存在一次性性能开销。此外，它不支持非 Markdown 文件（如附件）的封面显示，也不支持将图片作为封面。如果你需要的是图片画廊或复杂的数据库管理，而非基于文本内容的快速浏览，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


