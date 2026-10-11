---
uid: 1791709365568000
title: "Obsidian 插件：Bases Wrap Text"
tags: ['表格', '界面优化', '样式与美化', 'obsidian插件']
description: "Add an Excel-style 'Wrap Text' toggle to Bases table views. When enabled, long cell content wraps to multiple lines instead of being truncated. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Wrap Text

> [!Note] 插件名片
> - 插件名称：Bases Wrap Text
> - 插件作者：GroupiesM
> - 插件说明：Add an Excel-style 'Wrap Text' toggle to Bases table views. When enabled, long cell content wraps to multiple lines instead of being truncated. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '界面优化', '样式与美化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/groupiesm/Obsidian-Bases-Wrap-Text-Plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-wrap-text)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/groupiesm/Obsidian-Bases-Wrap-Text-Plugin/master/README.md)



## 概述

**Bases Wrap Text** 是一款专为 Obsidian Bases 表格视图设计的增强插件，主要解决长文本被截断的问题。

1. **主要功能**：在 Bases 表格中提供类似 Excel 的“自动换行”切换功能。启用后，单元格内的长内容会自动折行为多行显示，不再被强制截断。
2. **适用场景**：适用于使用 Bases 管理包含长描述、备注或详细数据的表格场景，特别是当默认单行显示导致信息缺失，需要完整阅读单元格内容时。
3. **核心特色**：
   - **布局稳定**：通过修改原生 `rowHeight` 设置而非强制 CSS 覆盖，完美兼容 Bases 的虚拟化渲染机制，彻底避免行重叠或布局错乱。
   - **灵活调节**：提供 `medium`、`tall`、`extra` 三种行高级别，可通过命令面板快速循环切换。
   - **状态管理**：支持侧边栏图标一键开关，且插件禁用时能自动恢复紧凑行高，不干扰原始视图。
4. **使用建议**：需 Obsidian 1.9.0 及以上版本。打开 `.base` 文件并切换至表格视图后，点击左侧边栏图标启用换行，随后通过命令面板（`Cmd/Ctrl+P`）搜索“Cycle row-height level”来调整最佳阅读行高。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---
