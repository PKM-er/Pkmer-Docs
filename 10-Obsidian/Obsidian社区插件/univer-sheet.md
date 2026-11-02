---
uid: 1793625623922001
title: "Obsidian 插件：Univer Sheet"
tags: ["表格", "数据处理", "编辑工具", "第三方工具集成", "obsidian插件"]
description: "Open, edit and create Univer spreadsheets (.usheet) and relational tables (.ubase) inside Obsidian. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Univer Sheet

> [!Note] 插件名片
> - 插件名称：Univer Sheet
> - 插件作者：biude
> - 插件说明：Open, edit and create Univer spreadsheets (.usheet) and relational tables (.ubase) inside Obsidian. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '数据处理', '编辑工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/weigram/obsidian-univer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?univer-sheet)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/weigram/obsidian-univer/master/README.md)



## 概述

Univer Sheet 允许在 Obsidian 中直接打开、编辑和创建 Univer 电子表格（.usheet）及关系型数据表（.ubase）。它基于 Univer 1.2.0 引擎，提供紧凑的工具栏、公式栏、工作表标签页和缩放控制，完整保留单元格格式、公式、多工作表结构以及行列尺寸。插件会自动记忆每个文件的当前活动工作表、滚动位置和缩放级别，并无缝适配 Obsidian 的浅色/深色主题及语言设置，让数据管理融入笔记工作流。

典型场景包括处理需要复杂公式的财务预算表，或在关系型数据表中快速录入信息。例如，在记录编辑器中为单选字段创建新选项时，只需按下回车即可直接生成；若手动创建“完成时间”日期字段，将卡片移至“已完成”状态时，系统会自动按该字段格式填充时间。此外，记录面板中的文本字段会随内容自动扩展，带有“记录创建时间”默认值的日期字段也会自动回填每条记录的创建时间戳，减少手动输入。

相比同类插件，Univer Sheet 的核心特色在于对 Univer Pro 关系型数据表（Bases）的支持，允许在笔记中构建类似数据库的结构化数据。它专注于电子表格和 Bases 功能，刻意未包含文档编辑、Excel 导入导出及协作功能，从而保持界面精简。插件仅注册 sheets-core 预设和 Bases 插件，确保核心功能稳定运行，同时通过固定依赖版本避免兼容性问题，为需要结构化数据管理的用户提供轻量级解决方案。

使用前需注意，Univer Bases 属于 Univer Pro 商业组件，受 DreamNum 单独商业许可约束，而非 Apache-2.0 开源协议。若需分发包含该组件的构建版本，必须接受 Univer Pro 条款；在插件设置中添加许可证可退出评估模式。该插件不适合需要 Excel 文件直接导入导出、多人实时协作或文档编辑功能的用户，也不适合对商业许可有严格限制的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


