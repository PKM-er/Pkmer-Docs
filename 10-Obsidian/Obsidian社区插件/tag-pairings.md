---
uid: 1793625622054000
title: "Obsidian 插件：Tag Pairings"
tags: ["效率工具", "搜索与排序", "编辑工具", "obsidian插件"]
description: "Suggest related tags after you type a tag. The suggestions list the common tags that occur together with it in your notes, most often first. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tag Pairings

> [!Note] 插件名片
> - 插件名称：Tag Pairings
> - 插件作者：theluckystrike
> - 插件说明：Suggest related tags after you type a tag. The suggestions list the common tags that occur together with it in your notes, most often first. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '搜索与排序', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/tag-pairings)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tag-pairings)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/tag-pairings/master/README.md)



## 概述

Tag Pairings 旨在解决笔记中标签孤立、缺乏关联的问题。它通过扫描库内所有笔记，自动识别并推荐与当前输入标签共现频率最高的其他标签。当你输入一个标签并加上空格时，插件会弹出一个建议框，按共同出现的笔记数量排序，展示最相关的标签组合，帮助你快速建立标签间的逻辑联系，无需手动记忆或查找。

典型场景如记录阅读笔记时，输入 `#book` 后，插件会推荐 `#fiction`、`#scifi` 等常一起出现的标签；或者在项目管理中，输入 `#project` 后，它能列出 `#launch`、`#hiring` 等子任务标签。你只需按 Shift+Enter 或 Tab 即可连续添加多个标签，实现高效的批量标记，特别适合需要频繁整理和关联信息的用户。

相比其他插件，Tag Pairings 的特色在于其智能的排序逻辑和嵌套标签支持。它不仅统计共现次数，还会考虑笔记链接关系和标签使用频率来优化排序。此外，它能正确识别嵌套标签（如 `#project/launch` 计入 `#project`），且完全在本地运行，不依赖 AI 或网络请求，保护隐私。Pro 版本还增加了显示共现笔记数量、限定文件夹范围统计等功能，让关联分析更精准。

使用前需注意，该插件仅在正文行中生效，代码块、Front Matter 或行内代码中不会触发建议。它不会自动修改笔记，仅在你选择标签时插入文本。如果你主要依赖 Front Matter 管理元数据，或在代码块中大量使用标签，此插件可能不适用。此外，免费版建议列表上限为 20 个，若需更多自定义选项，需订阅 Pro 服务。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


