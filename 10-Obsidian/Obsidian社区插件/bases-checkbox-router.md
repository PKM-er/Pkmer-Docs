---
uid: 1793625607822000
title: "Obsidian 插件：Bases Checkbox Router"
tags: ["表格", "编辑工具", "数据处理", "obsidian插件"]
description: "Edit a checkbox property of each note in one Bases column. Each toggle goes to the first Boolean property in your key list that the note has. The column shows its source key. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Checkbox Router

> [!Note] 插件名片
> - 插件名称：Bases Checkbox Router
> - 插件作者：theluckystrike
> - 插件说明：Edit a checkbox property of each note in one Bases column. Each toggle goes to the first Boolean property in your key list that the note has. The column shows its source key. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '编辑工具', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-checkbox-router)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-checkbox-router)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-checkbox-router/master/README.md)



## 概述

Bases Checkbox Router 旨在解决 Obsidian Bases 视图中不同笔记类型拥有不同状态属性时的管理难题。它允许你在同一列中统一编辑各笔记的布尔值属性，通过预设的键值优先级列表，自动识别并路由到笔记中实际存在的第一个布尔属性。该插件会在控件旁清晰标注当前操作的具体属性名，确保你在修改状态时明确知晓正在编辑哪个字段，从而避免混淆。

典型场景如管理混合媒体库：你可以将电影和书籍放在同一个 Base 中，分别使用 `watched` 和 `read` 作为状态属性。在列表中，电影行会显示 `watched` 开关，书籍行则显示 `read` 开关，你无需为每种类型创建单独的列或手动切换视图。若某笔记缺少对应的布尔属性，控件将保持非活动状态，防止误操作。

相比同类插件，其核心特色在于“写入前校验”机制。在点击开关时，插件会重新检查笔记的 Frontmatter，确保属性键和值与显示时一致。若笔记在视图加载后被外部修改，写入会被阻止并提示刷新，有效防止数据覆盖。此外，它支持将键值顺序保存在视图配置中，允许用户灵活调整优先级，且免费版本已包含核心的路由、标签显示及安全检查功能。

使用前需注意，该插件仅编辑已存在的布尔属性，不会自动创建缺失的键或将文本转换为布尔值。它不适用于需要精确保留 YAML 原始格式的场景，因为 Obsidian 的 Frontmatter 处理可能会规范化格式。此外，Pro 功能（如基于笔记类型的规则路由和多列支持）需通过 GitHub Sponsors 赞助解锁，但基础路由功能完全免费且无需账号。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


