---
uid: 1791709365951000
title: 'Obsidian 插件：CFR Mermaid Size'
tags: ['图表与可视化', '样式与美化', '编辑工具', 'obsidian插件']
description: 'Resize Mermaid diagrams by dragging a corner handle, and align them left, center, or right. The size is saved as a Mermaid comment inside the block, so it survives re-renders and syncs with the note. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CFR Mermaid Size

> [!Note] 插件名片
> - 插件名称：CFR Mermaid Size
> - 插件作者：cferrugem
> - 插件说明：Resize Mermaid diagrams by dragging a corner handle, and align them left, center, or right. The size is saved as a Mermaid comment inside the block, so it survives re-renders and syncs with the note. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '样式与美化', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/cferrugem/obsidian-cfr-mermaid-size)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cfr-mermaid-size)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/cferrugem/obsidian-cfr-mermaid-size/master/README.md)



## 概述

**1. 主要功能**
该插件允许用户在 Obsidian 中通过拖拽 Mermaid 图表右下角的手柄来调整其大小，并通过右键菜单选择左对齐、居中或右对齐。

**2. 适用场景**
适用于需要在笔记中精确控制 Mermaid 图表显示尺寸和布局的场景，特别是当默认自动渲染的大小不符合阅读习惯或排版需求时。

**3. 核心特色**
- **持久化存储**：尺寸和对齐信息以 Mermaid 注释形式（如 `%% cfr-size: 50 %%`）直接保存在代码块内，而非仅存于插件配置中。
- **高兼容性**：因使用原生注释语法，即使卸载插件或在不支持该插件的环境中，图表仍能正常渲染，且尺寸设置随笔记同步（Sync/Git）。
- **灵活控制**：支持独立清除桌面端或移动端的大小设置，适应不同设备需求。

**4. 使用建议**
请在**阅读视图**下操作。将鼠标悬停在图表上出现手柄后拖拽即可调整宽度（10%-100%）。右键点击图表可进行对齐或清除特定设备的尺寸设置。建议定期检查笔记源码，确认生成的注释符合预期，以便手动微调。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


