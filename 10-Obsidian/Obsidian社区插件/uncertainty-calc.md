---
uid: 1786577083484001
title: 'Obsidian 插件：Uncertainty Calculator'
tags: ['表格', '数据处理', '数据分析', '学习与教育', '白板学术与科研', 'obsidian插件']
description: '这是一款具备电子表格风格的计算器，能传播测量不确定度：支持输入表单、有效数字、扩展不确定度、不确定度预算以及蒙特卡罗方法，遵循《测量不确定度表示指南》（GUM）及其补充文件 1。 - 此插件尚未经过 Obsidian 官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Uncertainty Calculator

> [!Note] 插件名片
> - 插件名称：Uncertainty Calculator
> - 插件作者：Masoud Masoumi
> - 插件说明：这是一款具备电子表格风格的计算器，能传播测量不确定度：支持输入表单、有效数字、扩展不确定度、不确定度预算以及蒙特卡罗方法，遵循《测量不确定度表示指南》（GUM）及其补充文件 1。 - 此插件尚未经过 Obsidian 官方人员的人工审核。
> - 插件分类：['表格', '数据处理', '数据分析', '学习与教育', '白板学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/masoudmim/obsidian-uncertainty-calc)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?uncertainty-calc)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/masoudmim/obsidian-uncertainty-calc/master/README.md)



## 概述

### Uncertainty Calculator插件总结
1. **主要功能**：这是一款电子表格风格的计算器插件，可在笔记中进行测量不确定度的传播计算。通过编写`calc`代码块，为测量量分配不确定度，并在后续公式中引用，能跟踪相关性、有效数字、扩展不确定度、不确定度预算，还支持蒙特卡罗分布传播。
2. **适用场景**：适用于需要在Obsidian笔记里进行测量不确定度计算的场景，如科研、工程等领域的数据处理。
3. **核心特色**：弥补了Obsidian在携带“±”进行计算的空白，类似Python的`uncertainties`、R的`errors`或LaTeX的`siunitx`。支持多种测量量的书写形式，运算功能丰富，能显示不确定度预算。
4. **使用建议**：在笔记中使用`calc`代码块进行计算，按规则书写测量量，可通过在行末添加`| flag`设置详细标志。注意两个独立的“±”是不相关的，重用的命名变量保持相关。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


