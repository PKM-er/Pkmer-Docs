---
uid: 1793625608796000
title: "Obsidian 插件：Canvas Card Hook"
tags: ["模板与链接处理", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Link cards with a Canvas linker. Create hook shortcuts, copy card links, and jump to destinations across canvases in the same vault using native zoom to selection. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Canvas Card Hook

> [!Note] 插件名片
> - 插件名称：Canvas Card Hook
> - 插件作者：dhenyson
> - 插件说明：Link cards with a Canvas linker. Create hook shortcuts, copy card links, and jump to destinations across canvases in the same vault using native zoom to selection. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dhenyson/obsidian-canvas-card-hook)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?canvas-card-hook)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dhenyson/obsidian-canvas-card-hook/master/README.md)



## 概述

Canvas Card Hook 旨在解决 Obsidian 画布中卡片导航繁琐的问题，核心功能是创建可点击的“钩子”快捷方式。它允许你在同一画布或同一库内的不同画布之间建立链接，点击箭头即可利用 Obsidian 原生的“缩放至选中项”功能，直接聚焦并跳转到目标卡片，无需手动搜索或切换视图。

典型场景包括在大型项目画布中快速定位特定模块，或在多个关联画布间穿梭。例如，你可以为“设计稿”画布中的关键节点创建一个钩子，粘贴其链接后，点击即可从“规划”画布直接跳转过去；或者在同一个复杂画布中，通过钩子快速从概览区跳转到细节区，保持工作流的连贯性。

相比普通文本链接，该插件生成的钩子卡片完全融入原生画布体验，支持自定义颜色、大小及连接关系，且编辑时会自动调整尺寸以保证舒适度。其数据以版本化 JSON 和 Markdown 形式存储在标准 .canvas 文件中，无独立数据库，即使禁用插件，链接内容仍可作为普通 Markdown 阅读，兼容性好且无隐私风险。

需要注意的是，该插件仅支持同一库内的画布跳转，不支持跨库导航。若通过外部工具重命名文件或移动卡片，已复制的链接可能失效，需在 Obsidian 内部重命名才能自动更新引用。此外，目前仅验证了桌面端兼容性，移动端未测试，且依赖 Obsidian 内部接口，未来版本更新可能需要适配。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


