---
uid: 1793625624256001
title: "Obsidian 插件：Viewgram"
tags: ["图表与可视化", "界面优化", "效率工具", "obsidian插件"]
description: "Native-scale zoom, drag panning and independent fit-to-view lightboxes for rendered Mermaid diagrams. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Viewgram

> [!Note] 插件名片
> - 插件名称：Viewgram
> - 插件作者：devguyrash
> - 插件说明：Native-scale zoom, drag panning and independent fit-to-view lightboxes for rendered Mermaid diagrams. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/devguyrash/viewgram)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?viewgram)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/devguyrash/viewgram/master/README.md)



## 概述

Viewgram 专为 Obsidian 中的 Mermaid 图表提供原生级缩放、拖拽平移及独立适配视图功能。它直接增强现有 SVG 渲染效果，无需额外引擎，让你能像操作图片一样自由调整图表大小与位置。核心在于提供流畅的视觉导航体验，支持通过鼠标、触控板或键盘精确控制视野，解决复杂图表在笔记中难以完整查看或细节模糊的痛点。

典型场景包括审阅大型系统架构图或时序图。例如，当图表超出笔记宽度时，你可以使用“Fit width”预设快速适配宽度，或手动缩放至特定百分比以阅读细节；若需向他人展示局部逻辑，可打开灯箱模式获得独立适配视图，关闭后原图状态保持不变。此外，双击空白处即可直接编辑源码，双击节点还能查看并修改特定标签，修改经校验后保存，极大提升了图表维护效率。

相比同类插件，Viewgram 的特色在于其语义化交互与安全的编辑机制。悬停时能智能高亮相关节点及关系，区分不同方向的连接，且不会误判模糊映射。编辑功能基于原生 Mermaid 校验，确保源码变更仅在用户明确保存后生效，避免意外覆盖。此外，它支持将图表导出为 SVG、PNG、JPG 或 WebP 格式，并处理剪贴板失败时的保存回退，兼顾了展示与分享需求。

使用前需注意，该插件主要经过桌面端验证，移动端触控及与 Mica 等插件的共存情况尚未完全测试。它不适合需要自动同步外部数据或实时协作编辑的场景，因为所有修改均基于本地笔记文件。若你依赖其他第三方 Mermaid 查看器，请确保禁用旧插件后再启用 Viewgram，以避免冲突。插件不改变 Obsidian 的主题渲染逻辑，仅作为交互层存在，适合追求高效图表浏览与轻量编辑的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


