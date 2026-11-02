---
uid: 1793625611440001
title: "Obsidian 插件：CSV Rule Check"
tags: ["数据处理", "表格", "效率工具", "obsidian插件"]
description: "Check CSV columns against local rules and show errors by row and column. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CSV Rule Check

> [!Note] 插件名片
> - 插件名称：CSV Rule Check
> - 插件作者：theluckystrike
> - 插件说明：Check CSV columns against local rules and show errors by row and column. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '表格', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/csv-schema-linter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?csv-schema-linter)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/csv-schema-linter/master/README.md)



## 概述

CSV Rule Check 是一款用于验证 CSV 数据质量的本地化工具。它允许用户通过 JSON 文件定义明确的列规则，如必填项、数据类型、枚举值及唯一性约束。插件会逐行逐列检查数据，并将错误精确地定位到具体的逻辑行和列名。与自动推断 Schema 的工具不同，它完全依赖用户编写的显式规则，确保检查逻辑的确定性和可控性，且所有数据均保留在本地 Vault 中，无需联网或注册账号。

典型场景包括在将小型表格复制到笔记前进行预检，或在向同事发送导出文件前确保格式无误。例如，你可以为 `people.csv` 创建同名的 `people.csv.schema.json` 规则文件，规定 `id` 列必须唯一且为字符串，`age` 列必须为数字。运行检查后，插件会清晰列出缺失姓名、年龄格式错误或 ID 重复的具体位置，帮助你快速定位并修正源文件中的问题。

相比同类插件，CSV Rule Check 的特色在于其严谨的“逻辑行”处理机制。它能正确识别包含换行符的引号字段，确保多行记录被视为单一逻辑实体，避免物理行数与逻辑记录数不一致导致的误报。此外，它支持生成 Markdown 格式的检查报告，方便存档或分享。Pro 版本还增加了批量检查功能，允许使用保存的规则集同时校验多达 20 个文件，并提供了修剪空格和填充默认值的修复预览，但核心检查功能完全免费。

使用前需注意，该插件仅支持逗号分隔符，且 CSV 和规则文件各有 5 MiB 的大小限制。它不会自动修改源文件，所有修复操作需手动执行或通过 Pro 功能生成新文件。此外，零错误结果仅代表符合你定义的规则，并不保证业务数据的绝对正确性。如果你需要处理超大文件、非逗号分隔格式，或希望插件自动推断数据结构而非手动编写规则，这款插件可能不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


