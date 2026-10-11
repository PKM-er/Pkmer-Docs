---
uid: 1791709368920000
title: 'Obsidian 插件：Numbers Viewer'
tags: ['表格', '数据处理', '第三方工具集成', 'obsidian插件']
description: 'Read-only viewer for Apple Numbers spreadsheets. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Numbers Viewer

> [!Note] 插件名片
> - 插件名称：Numbers Viewer
> - 插件作者：jorbelca
> - 插件说明：Read-only viewer for Apple Numbers spreadsheets. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '数据处理', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jorbelca/obsidian_numbers)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?numbers-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jorbelca/obsidian_numbers/master/README.md)



## 概述

**Numbers Viewer** 是一款专为 Obsidian 设计的只读插件，旨在让用户无需离开笔记库即可直接查看 Apple Numbers (.numbers) 格式的表格文件。

**主要功能**：该插件提供两种查看模式——“预览”模式展示 Apple 存储的缩略图，而“表格”模式则显示所有工作表和表格内容。用户可一键将选中表格复制为 Markdown 或 CSV 格式，方便直接粘贴到笔记中。

**适用场景**：适用于需要频繁引用 Apple Numbers 数据、且希望保持数据源只读不被修改的场景。它填补了 Obsidian 中无法原生解析 Apple 专有表格格式的空白，特别适合从 Mac 生态迁移数据或进行数据引用的用户。

**核心特色**：
1. **纯只读安全**：绝不写入、移动或修改原始 .numbers 文件，确保数据源完整。
2. **多级解析引擎**：优先使用自研 IWA 解析器，能精准还原单元格格式（如货币、日期）、颜色及合并单元格；若失败则自动降级至 SheetJS 或 Apple 预览图，确保兼容性。
3. **轻量交互**：仅在用户主动点击时写入系统剪贴板，无后台隐私风险。

**使用建议**：建议在 Vault 中直接点击 .numbers 文件打开。若需保留格式细节，请确保文件由自研引擎解析；若仅需快速提取数值，任何引擎均可满足。注意该插件不支持编辑，如需编辑请使用 Sheet Plus 等其他插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


