---
uid: 1793625607841001
title: "Obsidian 插件：Bases Multi-Row Edit"
tags: ["表格", "编辑工具", "数据处理", "效率工具", "obsidian插件"]
description: "Bulk edit properties of selected rows in a Bases table. Set, append or remove a property in multiple notes in one batch, with a preview and undo. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Multi-Row Edit

> [!Note] 插件名片
> - 插件名称：Bases Multi-Row Edit
> - 插件作者：theluckystrike
> - 插件说明：Bulk edit properties of selected rows in a Bases table. Set, append or remove a property in multiple notes in one batch, with a preview and undo. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '编辑工具', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-multi-edit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-multi-edit)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-multi-edit/master/README.md)



## 概述

Bases Multi-Row Edit 专为 Obsidian 的 Bases 表格设计，解决批量修改笔记属性时的繁琐问题。它允许用户选中多行数据，一次性对多个笔记执行属性设置、追加、删除或替换操作。核心亮点在于“先预览后应用”的安全机制，在正式写入前展示每个笔记的旧值与新值对比，并支持一键撤销整个批次，确保数据修改的可控性与可逆性。

典型场景包括项目状态批量更新或标签管理。例如，当项目评审结束后，你可以选中所有相关笔记，将 `status` 属性统一设为 `done`；或者在整理知识库时，为一批笔记追加 `review` 标签，同时保留原有标签顺序。此外，它还能直接重命名列表中的特定项，如将 `project` 标签原地替换为 `area`，无需手动逐个打开笔记编辑。

相比同类插件，该工具提供了更精细的列表操作能力，支持 JSON 语法的追加、删除及原地替换，且能智能处理标量转列表等边界情况。其冲突检测机制会在应用前比对文件修改时间与大小，若笔记在预览后被同步或其他插件修改，会自动跳过并提示，避免覆盖意外变更。Pro 版本还增加了保存常用批量动作及保留 20 次撤销历史的功能，适合高频重复操作的用户。

使用前需注意，该插件仅支持顶层属性，无法编辑嵌套路径、文件名或公式列。由于应用和撤销过程会重新序列化 Frontmatter，YAML 注释可能会丢失，且键值顺序或引号格式可能发生变化，但笔记正文内容始终保留。撤销历史仅存在于内存中，重启 Obsidian 或重载插件后失效。如果你需要修改文件名、处理复杂嵌套属性，或依赖 YAML 注释的完整性，此插件可能不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


