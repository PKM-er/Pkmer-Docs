---
uid: 1793625612199000
title: "Obsidian 插件：dotdotgod Traceability"
tags: ["图表与可视化", "图谱", "数据处理", "obsidian插件"]
description: "Explore exported project traceability in the native graph with relation colors, weights, filters, and document groups. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：dotdotgod Traceability

> [!Note] 插件名片
> - 插件名称：dotdotgod Traceability
> - 插件作者：dotdotgod
> - 插件说明：Explore exported project traceability in the native graph with relation colors, weights, filters, and document groups. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图表与可视化', '图谱', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dotdotgod/dotdotgod-kit)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dotdotgod-traceability)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dotdotgod/dotdotgod-kit/master/README.md)



## 概述

dotdotgod Traceability 将项目中的文档、代码和测试关系转化为可视化的图谱，帮助你在 Obsidian 原生关系图中直观查看项目结构。它通过不同颜色区分关系类型，利用线条权重展示关联强度，并支持点击筛选特定关系或文档组。这一功能让你能迅速理清文件间的依赖逻辑，无需在大量笔记中手动查找，从而更清晰地掌握项目全貌。

典型场景包括修改核心代码后评估影响范围，或梳理新功能的设计文档与实现代码的对应关系。例如，当你更新某个模块时，插件能高亮显示相关的规格说明和测试文件，提示你需要同步检查的内容。这种可视化方式特别适合在复杂项目中追踪需求变更，确保文档与代码保持一致，避免遗漏关键验证步骤。

相比其他图谱插件，该工具强调“可追溯性”，不仅展示连接，还通过加权关系和分组着色突出关键路径。它支持悬停查看紧凑路径，帮助快速定位上下文。此外，插件完全本地运行，不依赖网络或外部账户，保护数据隐私。其设计旨在配合 AI 编码代理使用，但独立使用时也能作为强大的项目导航工具，提升文档维护效率。

使用前需注意，该插件依赖未公开的原生渲染 API，可能存在兼容性风险，且仅支持桌面版 Obsidian 1.14.5 及以上版本，移动端不可用。它需要配合特定的 CLI 工具导出 JSON 数据文件，若未正确生成该文件，图谱将无法加载。因此，它不适合仅需简单笔记链接可视化的用户，或希望零配置、纯手动管理图谱的场景。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


