---
uid: 1793625622004001
title: "Obsidian 插件：Table CSV Encoding"
tags: ["表格", "数据处理", "文件管理", "obsidian插件"]
description: "Export Markdown tables to UTF-8 CSV files with a preview. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Table CSV Encoding

> [!Note] 插件名片
> - 插件名称：Table CSV Encoding
> - 插件作者：theluckystrike
> - 插件说明：Export Markdown tables to UTF-8 CSV files with a preview. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '数据处理', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/table-csv-encoding)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?table-csv-encoding)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/table-csv-encoding/master/README.md)



## 概述

Table CSV Encoding 旨在解决 Markdown 笔记中表格数据难以直接用于外部软件的问题。它允许你将笔记内的管道表格导出为标准的 UTF-8 CSV 文件，并在保存前提供完整的预览界面。你可以自由选择分隔符（逗号、分号或制表符）、是否包含表头以及是否添加 UTF-8 BOM 标记。这一功能确保了越南语、中文及 Emoji 等 Unicode 字符在导出后能保持原样，避免乱码，同时源笔记内容完全不受影响。

典型场景包括将笔记中的项目清单或数据记录同步到 Excel 或 Google Sheets 进行进一步分析。例如，当你整理完一份包含中文备注的库存表，只需在表格内运行命令，选择分号作为分隔符以适配某些地区的 Excel 设置，预览确认无误后保存，即可直接获得一个编码正确的 CSV 文件。此外，如果你需要批量处理，Pro 版本支持扫描整个文件夹，一次性将多个笔记中的表格导出为独立的 CSV 文件，并自动处理文件名冲突。

相比其他导出工具，该插件的核心优势在于对编码细节的精细控制和对数据完整性的严格校验。它不会渲染 Markdown 格式（如加粗或链接），而是保留原始文本，确保数据纯净。更重要的是，它具备“行形状检查”功能：如果某行数据的列数与表头不一致，插件会直接阻止导出并提示具体行号，防止生成错位的 CSV 文件。这种“先校验后写入”的机制，以及预览时若源文件发生修改即中止导出的保护策略，极大降低了数据出错的风险。

使用前需注意，该插件仅识别 Markdown 管道表格，无法处理 Dataview 查询结果、HTML 表格或代码块内的表格。此外，导出的 CSV 文件不会自动覆盖旧文件，若同名文件已存在，系统会自动添加数字后缀。如果你需要导出的是经过公式计算后的数值，或者希望插件自动清理 Markdown 标记，此插件并不适合，因为它只复制原始文本。对于单次导出需求，免费版本已完全够用且无次数限制；只有当你需要批量处理大量文件夹时，才需要考虑 Pro 版本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


