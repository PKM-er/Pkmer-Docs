---
uid: 1786577082559002
title: 'Obsidian 插件：Simple Table Formulas'
tags: ['表格', '数据处理', '编辑工具', '数据分析', '效率工具', 'obsidian插件']
description: '给Markdown表格添加电子表格风格的公式。在单元格里写入公式，运行一个命令就能把它计算成一个值，同时公式会保留在注释里，方便后续编辑。——这款插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Simple Table Formulas

> [!Note] 插件名片
> - 插件名称：Simple Table Formulas
> - 插件作者：Maxwell Cohn
> - 插件说明：给Markdown表格添加电子表格风格的公式。在单元格里写入公式，运行一个命令就能把它计算成一个值，同时公式会保留在注释里，方便后续编辑。——这款插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['表格', '数据处理', '编辑工具', '数据分析', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/maxcohn/obsidian-simple-table-formulas)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?simple-table-formulas)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/maxcohn/obsidian-simple-table-formulas/master/README.md)



## 概述

### 插件名称
Simple Table Formulas

### 主要功能
为Markdown表格添加类电子表格公式。可直接在表格单元格中写入公式（如 `=SUM(B2:B4)`），运行命令计算并将结果嵌入单元格，同时原公式会保存在 `%%...%%` 注释中，便于后续恢复和编辑。

### 适用场景
适用于无需专门电子表格软件的场景，在Markdown文件中即可完成数据计算，且所有数据和公式以纯文本形式存储，方便未来迁移。

### 核心特色
在Markdown表格中实现电子表格公式计算，公式计算结果与原公式共存，保证了数据可编辑性和可追溯性。

### 使用建议
- 使用“Table Calc: Calculate table”命令计算当前光标所在表格的所有公式。
- 若要编辑已计算单元格的公式，使用“Table Calc: Edit formula at cursor”命令恢复公式。手动安装时，将 `main.js`、`manifest.json` 等文件复制到指定目录，重启Obsidian并在社区插件中启用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


