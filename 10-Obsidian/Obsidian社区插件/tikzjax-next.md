---
uid: 1791709370435000
title: 'Obsidian 插件：TikZJax Next'
tags: ['图表与可视化', '学术与科研', '编辑工具', 'obsidian插件']
description: 'Render TikZ and LaTeX diagrams in your notes. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：TikZJax Next

> [!Note] 插件名片
> - 插件名称：TikZJax Next
> - 插件作者：jackvinati
> - 插件说明：Render TikZ and LaTeX diagrams in your notes. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '学术与科研', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jackvinati/tikzjax-next)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?tikzjax-next)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jackvinati/tikzjax-next/master/README.md)



## 概述

**主要功能**
TikZJax Next 允许用户在 Obsidian 笔记中直接渲染 TikZ 和 LaTeX 图表。它通过本地 WebAssembly 运行 TeX 引擎，无需联网或上传数据，确保隐私安全。

**适用场景**
适用于需要插入复杂数学公式、电路图、化学结构或自定义矢量图的技术文档、学术笔记及工程记录。特别支持 iPhone 和 iPad，适合移动端用户随时随地查看或编辑含图表的笔记。

**核心特色**
1. **完全本地化**：基于真实 TeX Live 构建（含 pgf/TikZ、circuitikz 等），所有编译均在设备本地完成。
2. **高性能缓存**：首次渲染后，图表通过哈希查找即时加载，重开笔记无延迟。
3. **现代技术栈**：作为旧版插件的活跃维护分支，采用 TypeScript 7、esbuild 等最新工具链，代码更健壮且易于维护。
4. **跨平台兼容**：兼容 Obsidian 1.7.2 及以上版本，移动端体验经过优化。

**使用建议**
- 在笔记中使用 ` ```tikz ` 代码块包裹 LaTeX 代码即可渲染。
- 注意该插件 ID 与原版不同，可共存但不可同时启用。
- 移动端首次渲染稍慢（引擎启动耗时），后续操作极快，建议耐心等待首次加载。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


