---
uid: 1793625616303001
title: "Obsidian 插件：Mermaid Live Link"
tags: ["图表与可视化", "第三方工具集成", "图片与PDF", "样式与美化", "obsidian插件"]
description: "Adds an Edit in mermaid.live link beneath Mermaid diagrams and styles them for sizing and clean PDF export. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mermaid Live Link

> [!Note] 插件名片
> - 插件名称：Mermaid Live Link
> - 插件作者：pkcpkc
> - 插件说明：Adds an Edit in mermaid.live link beneath Mermaid diagrams and styles them for sizing and clean PDF export. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '第三方工具集成', '图片与PDF', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/pkcpkc/obsidian-mermaid-live-link)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mermaid-live-link)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/pkcpkc/obsidian-mermaid-live-link/master/README.md)



## 概述

Mermaid Live Link 旨在解决在 Obsidian 中编辑 Mermaid 图表的繁琐问题。它会在每个渲染好的 Mermaid 图表下方自动添加一个“在 mermaid.live 中编辑”的链接。点击该链接即可直接跳转至 Mermaid 在线编辑器，并自动预加载当前图表的代码，无需手动复制粘贴。此外，插件还内置了样式优化，确保图表在笔记中自适应宽度，避免横向滚动，同时保证在打印或导出 PDF 时布局整洁、美观。

典型使用场景包括快速迭代图表设计。例如，当你发现流程图中的节点连接有误时，无需在本地代码块中反复调试，只需点击图表下方的链接，即可在专业的在线编辑器中直观地调整布局，修改完成后再将代码复制回 Obsidian。另一个场景是处理复杂的时序图或类图，利用在线编辑器的实时预览功能，可以更高效地验证语法和视觉效果，从而提升笔记制作效率。

相比其他仅负责渲染的插件，Mermaid Live Link 的特色在于其“零网络请求”的隐私保护机制。插件本身不发送任何数据，图表代码仅通过 Base64 编码嵌入在链接 URL 中，只有当你主动点击链接时，数据才会传输至 mermaid.live。此外，它智能适配 Obsidian 的主题，若使用深色模式，在线编辑器也会自动切换为深色主题，保持视觉一致性。在导出方面，它确保图表不会被分页截断，也不会与标题分离，极大提升了文档的专业度。

需要注意的是，该插件主要服务于需要频繁修改图表结构的用户。如果你只是偶尔查看静态图表，或者对隐私有极端要求、完全禁止任何外部链接跳转，此插件可能并非必需。此外，由于依赖外部网站 mermaid.live，若该服务不可用，编辑功能将暂时失效，但图表在 Obsidian 内的正常显示和阅读不受影响。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


