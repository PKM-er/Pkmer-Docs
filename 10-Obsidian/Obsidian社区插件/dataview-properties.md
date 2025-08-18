---
uid: 2025081220015011
title: 'Obsidian 插件：Dataview (to) Properties'
tags: ['数据处理', '自动化与AI', '效率工具', '编辑工具', 'obsidian插件']
description: '能自动把 Dataview 内联字段（还有它们的值，哪怕是计算得出的值！）复制到前置元数据属性里，还能让它们保持同步。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dataview (to) Properties

> [!Note] 插件名片
> - 插件名称：Dataview (to) Properties
> - 插件作者：Mara-Li
> - 插件说明：能自动把 Dataview 内联字段（还有它们的值，哪怕是计算得出的值！）复制到前置元数据属性里，还能让它们保持同步。
> - 插件分类：['数据处理', '自动化与AI', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/Mara-Li/obsidian-dataview-properties)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dataview-properties)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/Mara-Li/obsidian-dataview-properties/master/README.md)

![Dataview (to) Properties](https://cdn.pkmer.cn/covers/dataview-properties_internal_0.png!pkmer)

## 概述

### Dataview (to) Properties插件总结
1. **主要功能**：自动将Dataview内联字段（含计算值）复制到前置元数据属性中，并保持同步。支持将Dataview查询（DQL和DataviewJS）转换到前置元数据，支持块查询和内联查询。
2. **适用场景**：适用于需要将Dataview查询结果持久化到前置元数据，方便在其他场景使用的情况。
3. **核心特色**：可按配置的时间间隔自动同步，也有手动触发同步的命令；插入前置元数据前会计算值；可选择在Dataview字段移除时自动清理前置元数据；支持不区分大小写和重音识别；有精细的属性列表转换选项，可按前置元数据键或路径排除文件。
4. **使用建议**：使用前需确保Dataview插件已在Obsidian库中安装并激活。配置排除文件时，可按路径、正则表达式或前置元数据键设置；设置前缀可避免与现有属性冲突，注意不支持空前缀。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


