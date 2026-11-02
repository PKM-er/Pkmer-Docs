---
uid: 1793625607846000
title: "Obsidian 插件：Bases Property Repair"
tags: ["编辑工具", "文件管理", "效率工具", "obsidian插件"]
description: "Repair exact property references in Base files after a property rename. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Property Repair

> [!Note] 插件名片
> - 插件名称：Bases Property Repair
> - 插件作者：theluckystrike
> - 插件说明：Repair exact property references in Base files after a property rename. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编辑工具', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-property-repair)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-property-repair)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-property-repair/master/README.md)



## 概述

Bases Property Repair 专为解决 Obsidian 中 Base 文件属性引用失效的问题而设计。当你在笔记中重命名了某个属性（例如将 `status` 改为 `state`），Base 文件内的过滤器、公式及视图配置仍指向旧名称，导致功能异常。该插件通过扫描 Vault 中的 `.base` 文件，精准定位并修复这些过时的属性引用，确保数据视图与笔记属性保持同步。

典型场景是当你批量调整笔记元数据时。例如，你决定将项目笔记中的 `status` 属性统一重命名为 `state` 以符合新规范。在通过 Obsidian 原生功能完成笔记属性重命名后，运行此插件命令，输入旧键名和新键名。插件会生成预览列表，展示每个 Base 文件中受影响的过滤器、排序规则及分组设置，让你确认无误后再执行修复，避免手动逐个修改 Base 文件的繁琐与风险。

相比其他工具，该插件具备极高的安全性与智能识别能力。它采用逐词扫描机制，能精准区分属性引用与字符串内容、方法名或类似前缀的键名（如 `status_code` 不会被误改）。对于无法识别的语法或计算访问，插件仅发出警告而不做修改，防止破坏复杂逻辑。此外，每次应用更改前都会自动创建带时间戳的备份副本，并支持通过变更日志进行受保护的恢复，确保操作可逆。

使用前需注意，该插件仅处理独立的 `.base` 文件，不读取 Markdown 笔记内嵌的 Base 代码块。由于修复过程会重写 YAML 结构，原有的注释和特定排版格式可能会丢失，但备份副本中保留了原始文本。如果你需要频繁进行多对属性的批量交换，或希望利用 Pro 版本的命名映射表与高级恢复功能，需考虑赞助支持。对于仅偶尔重命名且 Base 文件结构简单的用户，免费版已完全满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


