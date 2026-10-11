---
uid: 1791709370243000
title: 'Obsidian 插件：Table Converter'
tags: ['表格', '数据处理', '编辑工具', '效率工具', 'obsidian插件']
description: 'Convert heading-based documents to Markdown tables and back, and transpose rows and columns. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Table Converter

> [!Note] 插件名片
> - 插件名称：Table Converter
> - 插件作者：Damien Barrett
> - 插件说明：Convert heading-based documents to Markdown tables and back, and transpose rows and columns. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '数据处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/damienbarrett/obsidian-plugin-table-converter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?table-converter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/damienbarrett/obsidian-plugin-table-converter/master/README.md)



## 概述

**1. 主要功能**
Table Converter 插件用于在基于标题的 Markdown 文档结构与标准 Markdown 表格之间进行双向转换，并支持行列转置。它能自动识别当前格式，将层级化的标题结构（#标题、##行、###列）转化为表格，反之亦然。

**2. 适用场景**
适用于需要频繁在结构化笔记与数据表格间切换的场景。例如，整理多维度数据时，先用标题层级梳理逻辑，再一键转为表格进行展示或对比；或者将现有表格拆解为层级文档以便深入编辑。

**3. 核心特色**
- **双向自动转换**：智能检测输入格式，无需手动指定目标类型。
- **灵活操作范围**：支持整篇笔记转换、选中区域局部转换以及行列转置。
- **安全机制**：转换时自动创建备份文件（*.BAK.md），防止数据丢失；对备份或错误文件禁用转换命令，避免逻辑冲突。
- **多入口触发**：可通过命令面板或右键菜单快速调用。

**4. 使用建议**
- 在编辑复杂数据时，建议先使用“转换选中区域”功能进行局部测试，确认无误后再处理整篇文档。
- 注意插件不会为选中区域的转换单独备份，若需撤销请依赖 Obsidian 的通用撤销功能（Ctrl/Cmd+Z）。
- 保持文档结构规范：确保一级标题为表名，二级标题为行名，三级标题为列名，内容置于列标题下方，以保证转换准确性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


