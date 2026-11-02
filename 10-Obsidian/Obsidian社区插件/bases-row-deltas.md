---
uid: 1793625607847001
title: "Obsidian 插件：Bases Row Deltas"
tags: ["表格", "数据处理", "数据分析", "obsidian插件"]
description: "Show each number value and its change from the prior row in each Bases group. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Row Deltas

> [!Note] 插件名片
> - 插件名称：Bases Row Deltas
> - 插件作者：theluckystrike
> - 插件说明：Show each number value and its change from the prior row in each Bases group. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['表格', '数据处理', '数据分析', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-row-deltas)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-row-deltas)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-row-deltas/master/README.md)



## 概述

Bases Row Deltas 专为 Obsidian 的 Bases 视图设计，旨在解决数据行间缺乏直观对比的问题。它能在表格中自动计算并显示当前数值与上一行数值的差值，同时保留原始数值和上一行数值供参考。该插件不修改源笔记内容，仅读取 Bases 查询结果进行展示，帮助用户快速识别数据的变化趋势，如增加或减少的幅度。

典型场景包括追踪电表读数或库存余额。例如，当你记录每日的水表读数时，插件能直接显示今日读数比昨日增加了多少，无需手动计算。若数据按不同项目分组，如“北区”和“南区”电表，插件会确保每个分组独立计算，避免将北区的最后一行与南区的下一行错误对比，从而保证每组数据的逻辑连贯性。

相比其他仅展示静态数据的插件，Bases Row Deltas 的特色在于其严谨的边界处理。它严格遵循 Bases 的排序和分组设置，若某行数据缺失，差值会留空而非跳过寻找更早的数据，防止误导。此外，Pro 版本支持同时对比三个数值属性，并允许设置“前一行偏移量”以对比更久之前的数据，甚至能根据日期属性计算“每日变化率”，适合需要长期趋势分析的用户。

使用前需注意，该插件依赖 Bases 的排序逻辑，若排序不当，差值可能无意义。它不适合需要自动填充缺失数据或跨分组连续计算的场景。此外，Pro 功能需订阅，且插件在更新时会显示“新功能”标签页，虽不发送数据但可能干扰阅读，可在设置中关闭。若你的数据主要存储在非 Bases 结构中，或需要复杂的统计图表而非简单行差，此插件可能不是最佳选择。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


