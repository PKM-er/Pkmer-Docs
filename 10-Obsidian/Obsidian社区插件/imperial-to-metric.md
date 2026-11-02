---
uid: 1793625614174000
title: "Obsidian 插件：Imperial to Metric Converter"
tags: ["效率工具", "数据处理", "编辑工具", "obsidian插件"]
description: "Plugin to convert measurements between imperial and metric. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Imperial to Metric Converter

> [!Note] 插件名片
> - 插件名称：Imperial to Metric Converter
> - 插件作者：p0shkar
> - 插件说明：Plugin to convert measurements between imperial and metric. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '数据处理', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/p0shkar/ImperialToMetric-for-Obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?imperial-to-metric)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/p0shkar/ImperialToMetric-for-Obsidian/master/README.md)



## 概述

Imperial to Metric Converter 旨在解决笔记中单位换算繁琐的痛点，核心功能是快速将英制与公制单位相互转换。它支持长度、质量、体积及温度等多种测量类型，不仅能处理简单的数值，还能识别混合单位、分数、范围以及带连字符的复合词。通过命令面板、右键菜单或快捷键，你可以直接对选中的文本执行转换，将原始数值替换为对应系统的标准单位，极大提升了数据处理的效率。

典型使用场景包括整理跨国资料或记录食谱。例如，当你阅读一份使用英制单位的建筑图纸时，选中 `5 ft 3 in` 并运行转换命令，即可立即得到 `1.60 m` 的公制结果；或者在记录烹饪步骤时，选中 `1 cup`，插件会根据你设定的美制或英制标准，将其转换为对应的毫升数，确保计量准确无误。

相比同类工具，该插件的特色在于对复杂文本的解析能力与灵活的交互方式。它支持“插入原值+转换值”模式，方便保留原始数据；提供悬停预览功能，鼠标移入即可看到换算结果，无需执行命令；还具备粘贴自动转换功能，可配置为仅显示转换结果或保留双值。此外，它允许用户自定义液体单位的定义（美制或英制），并支持通过 `(US)` 或 `(UK)` 等限定词精确指定标准，适应不同地区的习惯。

使用前需注意，插件依赖启发式算法和正则表达式解析文本，对于结构极其复杂或语义模糊的句子，可能出现解析错误。单位别名虽包含多种常见翻译，但并非穷尽所有语言变体。此外，英制液体单位（如杯、勺）的换算系数是固定值，可能与特定食谱的惯例存在细微差异。如果你需要处理非标准单位、极度复杂的工程公式，或依赖完全本地化的多语言单位系统，该插件可能无法满足需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


