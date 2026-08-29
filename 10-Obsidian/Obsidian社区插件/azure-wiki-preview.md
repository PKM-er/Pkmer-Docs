---
uid: 1786577076239003
title: 'Obsidian 插件：Azure Wiki Preview'
tags: ['第三方工具集成', '图表与可视化', '发布工具', '编辑工具', 'obsidian插件']
description: '像发布时那样预览Azure DevOps Wiki页面：支持:::mermaid图表、目录宏以及解码后的页面名称。 - 这款插件尚未经过Obsidian官方人员手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Azure Wiki Preview

> [!Note] 插件名片
> - 插件名称：Azure Wiki Preview
> - 插件作者：Harshit Singhal
> - 插件说明：像发布时那样预览Azure DevOps Wiki页面：支持:::mermaid图表、目录宏以及解码后的页面名称。 - 这款插件尚未经过Obsidian官方人员手动审核。
> - 插件分类：['第三方工具集成', '图表与可视化', '发布工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/harshitsnghl/obsidian-azure-wiki-preview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?azure-wiki-preview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/harshitsnghl/obsidian-azure-wiki-preview/master/README.md)



## 概述

### 主要功能
Azure Wiki Preview 插件可在 Obsidian 中预览 Azure DevOps Wiki 页面的实际发布效果，处理 Azure 与 Obsidian 标记语言差异，包括渲染 `:::mermaid` 图表、显示目录宏、处理无空格标题等。

### 适用场景
适用于将 Azure DevOps Wiki 作为 Obsidian 库打开，需要在本地准确预览页面发布效果的场景。

### 核心特色
- 不改变源文件，直接渲染 Azure 方言，实现所见即所得。
- 从文件读取图表源，避免 Markdown 处理导致的问题。
- 对未终止的 `:::mermaid` 块进行提示。
- 将目录宏显示为标签芯片。

### 使用建议
- 若库是 Azure Wiki 克隆，可开启“Treat #Heading as a heading”以正确渲染无空格标题；非 Azure Wiki 库建议关闭，防止普通标签被误处理为标题。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


