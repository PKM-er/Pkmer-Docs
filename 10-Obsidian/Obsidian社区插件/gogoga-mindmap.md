---
uid: 1793625613424000
title: "Obsidian 插件：gogoga Mind Map"
tags: ["思维导图", "图表与可视化", "编辑工具", "obsidian插件"]
description: "Edit Markdown notes as XMind-style mind maps. Headings and list items become nodes, and edits on either side stay in sync. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：gogoga Mind Map

> [!Note] 插件名片
> - 插件名称：gogoga Mind Map
> - 插件作者：jackweigogoga
> - 插件说明：Edit Markdown notes as XMind-style mind maps. Headings and list items become nodes, and edits on either side stay in sync. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['思维导图', '图表与可视化', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jackweigogoga/gogoga-mindmap)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gogoga-mindmap)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jackweigogoga/gogoga-mindmap/master/README.md)



## 概述

gogoga Mind Map 将 Markdown 笔记转化为 XMind 风格的思维导图，核心在于保持 Markdown 作为唯一数据源。标题和列表项自动映射为节点，思维导图视图仅是同一 `.md` 文件的另一种编辑器。你在导图上修改节点，Markdown 源码会同步更新；反之亦然。这种双向同步机制确保了数据的一致性，无需在两种格式间手动转换，且插件无运行时依赖，桌面端与移动端均可流畅运行。

典型场景包括快速梳理会议记录或项目规划。例如，你可以将一份包含多级标题的会议笔记直接切换为导图视图，直观地折叠无关分支，聚焦核心议题；或者在普通笔记中嵌入 `mindmap` 代码块，实时渲染出小型导图，方便在文档中展示局部逻辑。此外，插件支持将 `.xmind` 文件直接导入并转换为 Markdown 笔记，方便迁移旧有资料。

相比同类插件，其特色在于深度的双向同步与嵌入能力。不仅支持侧边栏并排查看 Markdown 与导图，还能实现光标位置的精准联动，选中节点时 Markdown 自动滚动至对应行。此外，它支持通过 `![[note]]` 嵌入导图文件，甚至支持 AI 通过特定技能文件直接生成符合规范的 Markdown 导图代码，极大提升了自动化创作的可能性。

使用前需注意，该插件主要面向以 Markdown 为底层的用户，若你依赖 XMind 特有的复杂图形样式或评论功能，导入时部分元素（如摘要下的子主题、评论）可能无法完全保留。此外，虽然支持导出 PNG/SVG，但导出图片嵌入的是 Obsidian 默认字体，若对字体有极高定制要求需自行调整。不适合需要频繁离线编辑非 Markdown 格式导图，或依赖 XMind 专有高级交互功能的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


