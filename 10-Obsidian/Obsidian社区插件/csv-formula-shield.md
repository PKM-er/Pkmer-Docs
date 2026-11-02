---
uid: 1793625611436000
title: "Obsidian 插件：CSV Formula Shield"
tags: ["数据处理", "编辑工具", "效率工具", "obsidian插件"]
description: "Find formula prefixes in CSV cells and write a separate escaped copy. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CSV Formula Shield

> [!Note] 插件名片
> - 插件名称：CSV Formula Shield
> - 插件作者：theluckystrike
> - 插件说明：Find formula prefixes in CSV cells and write a separate escaped copy. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/csv-formula-shield)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?csv-formula-shield)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/csv-formula-shield/master/README.md)



## 概述

CSV Formula Shield 旨在解决 CSV 文件在电子表格软件中打开时可能触发的公式注入风险。它通过扫描库内 CSV 文件，识别以特定符号开头的单元格，并在生成副本时自动添加撇号进行转义。该插件严格遵循“源文件不动”原则，仅输出经过处理的独立副本，确保原始数据的安全性与完整性，同时支持对负数规则进行精细配置，以平衡安全性与数据可用性。

典型场景包括处理来自外部系统的交易记录或用户输入数据。例如，当 CSV 中包含以等号或加号开头的文本时，直接导入 Excel 可能导致意外执行。使用此插件，你可以先预览受影响的具体行列及前后对比，确认无误后再生成带 `.escaped.csv` 后缀的安全副本。另一场景是批量审计多个文件，Pro 版本允许一次性检查多达 20 个文件并生成 JSON 审计报告，便于团队统一审查数据风险。

相比其他仅做简单替换的工具，其特色在于严格的解析能力与透明的预览机制。它能正确处理带引号的逗号、换行及 BOM 头，并明确区分逻辑行与物理行。此外，它提供“保留严格负数”选项，避免将 `-12` 等正常数值误判为公式，同时支持保存特定文件的处理策略。Pro 用户还可利用组合审计功能，生成包含原始与转义文本的 JSON 报告，方便后续追溯，且报告以 JSON 格式存储，避免了二次注入风险。

使用前需注意，该插件仅支持 UTF-8 编码、逗号分隔且大小不超过 1 MiB 的文件，分号或制表符分隔的文件需先转换。它不保证所有电子表格软件都能完美保留转义字符，建议导出后在目标软件中再次验证。此外，插件不处理文件内的空行导致的列宽不一致问题，且 Pro 功能需通过 GitHub Sponsors 订阅。如果你需要处理超大文件、非标准编码或希望直接修改源文件而非生成副本，此插件可能不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


