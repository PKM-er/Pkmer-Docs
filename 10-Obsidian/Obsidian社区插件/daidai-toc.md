---
uid: 1793625611630000
title: "Obsidian 插件：DaiDai TOC"
tags: ["导航与状态栏", "界面优化", "效率工具", "obsidian插件"]
description: "Shows a table of contents built from the headings of the current note in a daidai-toc code block, as written by DaiDai notes. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DaiDai TOC

> [!Note] 插件名片
> - 插件名称：DaiDai TOC
> - 插件作者：rhing
> - 插件说明：Shows a table of contents built from the headings of the current note in a daidai-toc code block, as written by DaiDai notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['导航与状态栏', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rhing-official/daidai-toc)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?daidai-toc)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rhing-official/daidai-toc/master/README.md)



## 概述

DaiDai TOC 专为解决 DaiDai 笔记导出至 Obsidian 后目录失效的问题而设计。它核心功能是将笔记中空的 `daidai-toc` 代码块渲染为可视化的目录，完美还原 DaiDai 应用内的原生外观。若未安装此插件，该代码块仅显示为空白，但笔记本身依然保持可读性，不会造成格式损坏。

典型使用场景包括从 DaiDai 迁移大量笔记后，希望保留原有的目录导航体验。例如，当你打开一篇包含多级标题的长文时，插件会自动生成可折叠的目录树。你可以通过命令面板快速插入目录块，或在编辑标题时看到目录实时同步更新，点击条目即可精准跳转至对应章节。

相比通用目录插件，DaiDai TOC 的最大特色在于其对特定代码块语法的精准适配，确保与源应用视觉一致。此外，它支持通过 `maxDepth` 参数自定义显示层级（1-6级），允许用户根据笔记复杂度灵活调整目录深度，避免信息过载。

使用前需注意，该插件仅针对 DaiDai 导出的特定格式有效，若你使用的是其他来源的 Markdown 笔记或需要复杂自定义目录样式，此插件可能不适用。它完全本地运行，无网络请求且不收集任何数据，适合注重隐私的用户，但无法替代通用目录插件处理非 DaiDai 来源的内容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


