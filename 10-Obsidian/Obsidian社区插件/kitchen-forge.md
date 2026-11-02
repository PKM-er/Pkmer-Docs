---
uid: 1793625614558000
title: "Obsidian 插件：kitchenForge"
tags: ["数据处理", "效率工具", "第三方工具集成", "obsidian插件"]
description: "Renders kitchenForge recipe calculator blocks. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：kitchenForge

> [!Note] 插件名片
> - 插件名称：kitchenForge
> - 插件作者：e1fueg0
> - 插件说明：Renders kitchenForge recipe calculator blocks. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '效率工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/e1fueg0/kitchen-forge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kitchen-forge)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/e1fueg0/kitchen-forge/master/README.md)



## 概述

kitchenForge 专为解决食谱中“比例计算”与“固定份量缩放”两种不同逻辑的痛点而设计。它通过 Obsidian 代码块提供两种互斥模式：计算模式适用于香肠、腌肉等需根据肉类重量动态调整盐、亚硝酸盐等添加剂配比的场景；缩放模式则针对面团、汤品等固定配方，支持一键按比例增减所有食材用量。这种双模设计让同一插件能灵活应对从精密腌制到日常烘焙的多样化需求，无需在多个工具间切换。

典型使用场景包括自制香肠和烘焙。例如，在制作香肠时，若将猪肉重量从 800 克调整为 1000 克，插件会自动重算盐和黑胡椒的用量，确保配比精准；而在制作派皮时，只需点击“减半”按钮，面粉、黄油等所有固定食材的用量便会同步调整，且切换不同缩放比例时始终基于原始数据计算，避免累积误差。此外，它还支持“选择组”功能，允许在苹果馅和樱桃馅等可互换组件间快速切换，极大提升了食谱管理的灵活性。

相比同类插件，kitchenForge 的核心特色在于其独特的千分比运算符 `@`，专门用于处理肉类腌制中的微量添加剂计算，如 `1000 @ 20` 表示每千克肉添加 20 克，直观且符合行业习惯。同时，其非破坏性的缩放机制确保用户在“全量”、“半量”间反复切换时，数据始终准确无误。选择组功能还允许在保持当前缩放比例的同时切换食材变体，例如在“半量”状态下从苹果馅切换到樱桃馅，樱桃的用量会自动保持减半状态，这种细节处理在同类工具中较为少见。

使用前需注意，计算模式中的数值仅为示例，实际腌制请务必遵循当地食品安全标准和专业配方，切勿直接套用插件中的亚硝酸盐比例。该插件不适合需要复杂化学计量或自动联网获取食材价格的场景，它主要服务于本地化的食谱记录与计算。如果你只是简单记录菜谱而不涉及动态计算或批量缩放，或者需要处理非食品类的化学实验配方，kitchenForge 可能并非最佳选择，其功能高度垂直于烹饪与腌制领域。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


