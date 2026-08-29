---
uid: 1786577078805001
title: 'Obsidian 插件：HTML Blocks'
tags: ['编程与脚本', '文字处理', '编辑工具', 'obsidian插件']
description: '用html-block代码块直接在笔记里实时渲染HTML、CSS和JavaScript代码，而且每个代码块都在各自独立的Shadow DOM中运行。——Obsidian官方人员尚未对该插件进行人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：HTML Blocks

> [!Note] 插件名片
> - 插件名称：HTML Blocks
> - 插件作者：Yinno
> - 插件说明：用html-block代码块直接在笔记里实时渲染HTML、CSS和JavaScript代码，而且每个代码块都在各自独立的Shadow DOM中运行。——Obsidian官方人员尚未对该插件进行人工审核。
> - 插件分类：['编程与脚本', '文字处理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jwczju/html-blocks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?html-blocks)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jwczju/html-blocks/master/README.md)



## 概述

### HTML Blocks插件总结
1. **主要功能**：可在Obsidian笔记中直接渲染实时的HTML、CSS和JavaScript代码，无需创建单独的`.html`文件。支持嵌入外部HTML文件，还具备检查模式辅助查看代码与渲染元素对应关系。
2. **适用场景**：适用于在笔记中插入自包含的小部件、图表、样式卡片、小型交互式演示等内容。
3. **核心特色**：每个代码块在独立的Shadow DOM中渲染，样式与主题及其他代码块完全隔离，确保代码按编写原样渲染；各代码块有独立作用域，避免顶级变量冲突。
4. **使用建议**：书写时使用`html-block`语言标签包裹代码块；在CSS中用`:root`或`:host`定位块容器；JavaScript内联脚本在隔离作用域运行；可将HTML存于单独文件后通过`![[文件名.html]]`嵌入；可将“Toggle Inspect Mode”命令绑定热键，方便使用检查模式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


