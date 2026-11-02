---
uid: 1793625616779000
title: "Obsidian 插件：Mindslate"
tags: ["思维导图", "编辑工具", "快捷键", "效率工具", "obsidian插件"]
description: "Open a note as a keyboard-first mind map and edit it in place. The note stays an ordinary heading with a nested list. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mindslate

> [!Note] 插件名片
> - 插件名称：Mindslate
> - 插件作者：Wilson Neto
> - 插件说明：Open a note as a keyboard-first mind map and edit it in place. The note stays an ordinary heading with a nested list. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['思维导图', '编辑工具', '快捷键', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/wilsonneto-swe/mindslate-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mindslate)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wilsonneto-swe/mindslate-obsidian/master/README.md)



## 概述

Mindslate 将普通的 Markdown 笔记转化为以键盘为核心的思维导图，让你直接在图形界面中编辑内容。其核心机制是保持笔记本质不变：标题作为根节点，嵌套列表构成分支，所有修改实时同步回原始文本。这意味着你在地图上拖拽或输入的内容，最终仍是以标准大纲形式保存在笔记中，无需担心格式转换或数据丢失，完美兼容 Obsidian 的搜索、链接及发布功能。

典型场景包括快速梳理会议记录或旅行计划。例如，在规划“里斯本周末游”时，你可以直接输入“交通”作为根节点，按 Tab 键添加“28路电车”子节点，再按 Enter 键添加“贝伦塔”等景点。这种操作比手动调整缩进更直观，且支持鼠标拖拽分支重组结构。若需长期以地图形式查看某笔记，只需添加 `mindslate: map` 属性，该笔记在文件管理器或快速切换器中打开时便会自动呈现为导图。

相比传统思维导图插件，Mindslate 的最大特色是“无损编辑”与“双向同步”。它仅重写被修改的行，保留原有的属性、标签、链接及注释，确保字节级一致。此外，它具备强大的多端同步能力：在 Markdown 视图、Obsidian Sync 或其他设备上对笔记的修改，会即时反映在打开的地图中，且保留当前的折叠状态、选中项和缩放比例。若发生冲突，系统会智能合并，确保数据不丢失，同时支持撤销恢复。

使用前需注意，该插件依赖笔记的标准结构（标题加嵌套列表），若笔记结构复杂或非标准大纲，可能无法完美映射。它不适合需要复杂图形化连线、自由画布布局或大量非文本元素（如图片、代码块）作为节点内容的场景。此外，虽然支持移动端，但小屏幕上的精细操作体验可能不如桌面端流畅，建议主要作为桌面端的高效梳理工具使用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


