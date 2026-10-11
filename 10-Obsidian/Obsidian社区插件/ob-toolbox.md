---
uid: 1791709368531000
title: 'Obsidian 插件：MD Toolbox'
tags: ['表格', '编辑工具', '文字处理', 'obsidian插件']
description: 'Transpose Markdown tables directly in the editor. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MD Toolbox

> [!Note] 插件名片
> - 插件名称：MD Toolbox
> - 插件作者：knowckx
> - 插件说明：Transpose Markdown tables directly in the editor. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '编辑工具', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/knowckx/ob-toolbox)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ob-toolbox)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/knowckx/ob-toolbox/master/README.md)



## 概述

**MD Toolbox** 是一款专注于 Markdown 表格处理的 Obsidian 插件，核心功能是在编辑器内直接执行表格转置（Transpose），即快速交换表格的行与列。

**适用场景**：主要用于数据整理、矩阵数据转换或需要快速调整表格视角的笔记场景，特别适合在 Source Mode 和 Live Preview 模式下即时处理表格结构。

**核心特色**：
1. **操作极简**：只需将光标置于表格内，通过命令面板执行“Transpose Markdown table”即可一键完成转换。
2. **智能处理**：自动重置列对齐方式为默认 Markdown 对齐；针对不规则行（缺失单元格），自动保留为空，确保转换后的表格结构完整有效。
3. **隐私安全**：插件完全在本地运行，不收集任何分析数据，也不向外部服务发送 Vault 内容，保障数据隐私。

**使用建议**：
- 该插件支持手动安装，需先通过 `pnpm` 构建项目，将生成的 `main.js` 和 `manifest.json` 放入插件目录后启用。
- 建议在处理大量数据或需要频繁调整行列关系的笔记中使用，能显著减少手动复制粘贴的时间成本。
- 注意转换后列对齐会重置，若需特定对齐格式，需在转换后手动调整。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


