---
uid: 1780392510989001
title: 'Obsidian 插件：Canvas Cover Overlay'
tags: ['样式与美化', '界面优化', '图表与可视化', '白板', 'obsidian插件']
description: '这个插件还没经过Obsidian官方人员的人工审核。你可以为每个画布自定义嵌入的画布缩略图和画布视图背景哦。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Canvas Cover Overlay

> [!Note] 插件名片
> - 插件名称：Canvas Cover Overlay
> - 插件作者：llaori1
> - 插件说明：这个插件还没经过Obsidian官方人员的人工审核。你可以为每个画布自定义嵌入的画布缩略图和画布视图背景哦。
> - 插件分类：['样式与美化', '界面优化', '图表与可视化', '白板学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/llaori1/canvas-cover-overlay)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-cover-overlay)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/llaori1/canvas-cover-overlay/master/README.md)

![Canvas Cover Overlay](https://cdn.pkmer.cn/covers/canvas-cover-overlay_internal_0.gif!pkmer)

## 概述

### Canvas Cover Overlay插件总结
1. **主要功能**：增强 `.canvas` 嵌入效果，允许用户为每个画布自定义嵌入的画布缩略图和画布视图背景。
2. **适用场景**：适用于使用Obsidian和Advanced Canvas插件进行笔记创作，需要对画布进行个性化展示的用户。仅支持桌面端，移动端不支持。
3. **核心特色**：仅影响指向 `.canvas` 文件的节点；支持通过前置元数据进行每个画布的封面配置；从目标 `.canvas` 文件的 `metadata.frontmatter` 读取封面路径；添加覆盖层而非替换原生渲染，保留原始行为；使用内部 `embedRegistry` 钩子包装 `.canvas` 嵌入创建器。
4. **使用建议**：需先安装并启用Advanced Canvas插件，再安装启用本插件。可通过画布属性面板配置封面字段，插件会从目标画布前置元数据读取值。在插件设置中，可配置覆盖层开关、嵌入封面键、画布背景键、覆盖层透明度和调试模式等。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


