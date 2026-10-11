---
uid: 1791709367371000
title: 'Obsidian 插件：Graph Filter Chips'
tags: ['界面优化', '效率工具', '图谱', 'obsidian插件']
description: 'Turn graph filter queries into removable chips: Esc leaves editing without clearing, and Enter saves the filter as a chip you can remove with x. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Graph Filter Chips

> [!Note] 插件名片
> - 插件名称：Graph Filter Chips
> - 插件作者：Paulo Vianna
> - 插件说明：Turn graph filter queries into removable chips: Esc leaves editing without clearing, and Enter saves the filter as a chip you can remove with x. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '效率工具', '图谱', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/thepaulean/obsidian-graph-filter-chips)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?graph-filter-chips)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/thepaulean/obsidian-graph-filter-chips/master/README.md)



## 概述

**主要功能**
该插件将图谱视图中的文本过滤器转换为可视化的“标签芯片”。用户输入查询词后按 Enter 键即可生成独立芯片，通过点击芯片上的“x”可单独移除特定条件，按 Esc 键仅退出编辑状态而保留已输入内容。

**适用场景**
适用于在 Obsidian 全局图谱或局部图谱中进行复杂节点筛选时，需要频繁调整过滤条件且希望避免误操作导致查询丢失的场景。

**核心特色**
1. **防误删机制**：彻底解决原生 Obsidian 中按 Esc 键会清空整个过滤器的问题，确保查询安全。
2. **可视化与独立管理**：将抽象的文本查询转化为具象芯片，支持单独删除或点击芯片将其还原至输入框进行二次编辑。
3. **持久化支持**：过滤状态正常保存至 `graph.json`，重启应用后依然有效。

**使用建议**
建议在构建复杂图谱查询时，每输入一个条件（如 `path:"Projects"` 或 `tag:idea`）就按 Enter 生成芯片。这样不仅能直观查看当前生效的所有过滤条件，还能灵活地增删单个条件，无需重新输入整段查询语句，大幅提升图谱探索效率。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


