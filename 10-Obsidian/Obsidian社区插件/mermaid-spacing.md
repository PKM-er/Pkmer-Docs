---
uid: 1791709368613000
title: 'Obsidian 插件：Mermaid Node Spacing'
tags: ['图表与可视化', '样式与美化', 'obsidian插件']
description: 'Changes mermaid node spacings only. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Mermaid Node Spacing

> [!Note] 插件名片
> - 插件名称：Mermaid Node Spacing
> - 插件作者：isaya
> - 插件说明：Changes mermaid node spacings only. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/isayagit/obsidian-mermaid-spacing)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mermaid-spacing)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/isayagit/obsidian-mermaid-spacing/master/README.md)



## 概述

**1. 主要功能**
该插件用于全局调整 Obsidian 中 Mermaid 流程图节点的间距。它通过修改 `nodeSpacing`（水平间距）和 `rankSpacing`（垂直间距）参数，自动优化所有图表的布局，无需在每个代码块中手动添加初始化配置。

**2. 适用场景**
特别适用于笔记中包含大量纵向堆叠节点或复杂流程图的场景。当默认的大间距导致图表占用过多垂直空间、影响阅读体验时，使用此插件可显著节省版面空间。

**3. 核心特色**
*   **全局生效**：自动合并间距偏好至所有渲染图表，免除重复配置。
*   **即时反馈**：修改设置后立即生效，并自动重新渲染当前打开的预览面板。
*   **高度可定制**：默认将间距从 Mermaid 原生的 50 降低至 20（水平）和 25（垂直），用户可根据需求灵活调整。

**4. 使用建议**
安装后，请在“设置 → 社区插件 → Mermaid Node Spacing”中根据视觉偏好微调数值。建议保持数值适中，过小的间距可能导致节点重叠或连线混乱。若需针对特定图表单独设置，仍可在代码块内使用 `%%{init: ...}%%` 覆盖全局设置。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


