---
uid: 1786577082984003
title: 'Obsidian 插件：Tabbed Blocks'
tags: ['编辑工具', '界面优化', '效率工具', '编程与脚本', 'obsidian插件']
description: '把代码围栏块变成可切换的标签页，支持懒加载渲染和语法辅助。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Tabbed Blocks

> [!Note] 插件名片
> - 插件名称：Tabbed Blocks
> - 插件作者：Quincy
> - 插件说明：把代码围栏块变成可切换的标签页，支持懒加载渲染和语法辅助。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编辑工具', '界面优化', '效率工具', '编程与脚本', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/quincysx/obsidian-markdown-tabs)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tabbed-blocks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/quincysx/obsidian-markdown-tabs/master/README.md)



## 概述

### Tabbed Blocks 插件总结
1. **主要功能**：在 Obsidian 阅读模式下，将 Markdown 内容以可切换标签页形式展示。用户可通过 `tabs` 代码块创建标签页，用 `---tab 标题` 分隔，`---tab* 标题` 设置默认激活页。
2. **适用场景**：适用于在笔记中需要展示多类相关内容，且希望以简洁、可切换的方式呈现的场景，如同时展示笔记说明、代码示例和表格数据等。
3. **核心特色**：一是懒渲染机制，标签页内容在首次激活时才渲染，避免图表和代码高亮因容器隐藏而尺寸测量错误；二是支持拖拽滚动，当标签过多时，可水平拖拽且不会误触发切换；三是可将 `---tab` 前的文字作为前言展示在标签页上方。
4. **使用建议**：若记不住语法，可通过命令面板运行 “Insert tabs block” 插入模板，在 `tabs` 块内输入 `---` 可自动补全，未识别到标签页时会有语法提示。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


