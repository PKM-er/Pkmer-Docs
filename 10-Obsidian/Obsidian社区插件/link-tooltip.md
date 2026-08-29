---
uid: 1786577079546003
title: 'Obsidian 插件：Link Tooltip'
tags: ['模板与链接处理', '界面优化', '效率工具', 'obsidian插件']
description: '在实时预览和源码模式下，显示鼠标悬停的链接指向何处。 - 此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Link Tooltip

> [!Note] 插件名片
> - 插件名称：Link Tooltip
> - 插件作者：Bruno Ribeiro
> - 插件说明：在实时预览和源码模式下，显示鼠标悬停的链接指向何处。 - 此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['模板与链接处理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/brunoribeiro2k/obsidian-link-tooltip)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?link-tooltip)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/brunoribeiro2k/obsidian-link-tooltip/master/README.md)



## 概述

### Link Tooltip插件总结
1. **主要功能**：在实时预览和源码模式下，当鼠标悬停在链接上时，显示链接指向的目标。支持Markdown链接和别名维基链接，从CodeMirror语法树恢复链接目标并在鼠标附近显示浮动提示框。
2. **适用场景**：适用于在编辑Obsidian笔记时，想快速查看隐藏在标签后的链接指向何处的场景。
3. **核心特色**：轻量级插件，专注于编辑器模式（实时预览和源码模式），不涉及阅读模式；从语法树获取链接目标，而非隐藏的DOM跨度；可通过设置控制是否显示外部和内部链接的提示框，还支持调试日志。
4. **使用建议**：默认开启内外链提示框功能，若要调试悬停检测问题可开启调试日志。本地测试可使用部署脚本，通过设置`OBSIDIAN_VAULT`或`OBSIDIAN_PLUGIN_DIR`实现重复本地部署。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


